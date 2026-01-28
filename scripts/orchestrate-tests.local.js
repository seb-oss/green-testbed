import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { readMatrix, getMatrixEntry } from "./matrix-utils.js";

function nowIso() {
  return new Date().toISOString();
}

function runId() {
  return nowIso().replace(/[:.]/g, "-");
}

function componentSlug(componentName) {
  return componentName.replace(/^gds-/, "");
}

function generatedSpecPath(componentName, category) {
  return path.join(
    "test",
    "specs",
    "components",
    `${componentSlug(componentName)}.${category}.generated.spec.ts`,
  );
}

function parseArgs(argv) {
  const args = {
    components: [],
    categories: [],

    // Scaffold controls (forwarded to generator)
    scaffolds: true,
    scaffoldMode: "create-missing", // keep|create-missing|update

    // Iteration limits
    maxFixAttempts: 3,
    maxFlakeReruns: 2,
    maxComponentBugAttempts: 2,

    // Process lifecycle
    forceExit: true,

    // Logging
    reportDir: null,

    // Local execution
    testbedUrl: null,

    // Testbed lifecycle
    startTestbed: true,
    testbedStartupTimeoutMs: 45_000,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--components" && argv[i + 1]) {
      args.components.push(
        ...String(argv[++i])
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
    }
    if (a === "--categories" && argv[i + 1]) {
      args.categories.push(
        ...String(argv[++i])
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
    }

    if (a === "--scaffolds") args.scaffolds = true;
    if (a === "--no-scaffolds") args.scaffolds = false;
    if (a === "--scaffold-mode" && argv[i + 1]) args.scaffoldMode = argv[++i];

    if (a === "--max-fix-attempts" && argv[i + 1])
      args.maxFixAttempts = Number(argv[++i]);
    if (a === "--max-flake-reruns" && argv[i + 1])
      args.maxFlakeReruns = Number(argv[++i]);
    if (a === "--max-component-bug-attempts" && argv[i + 1])
      args.maxComponentBugAttempts = Number(argv[++i]);

    if (a === "--report-dir" && argv[i + 1]) args.reportDir = argv[++i];

    if (a === "--testbed-url" && argv[i + 1]) args.testbedUrl = argv[++i];

    if (a === "--start-testbed") args.startTestbed = true;
    if (a === "--no-start-testbed") args.startTestbed = false;
    if (a === "--testbed-startup-timeout-ms" && argv[i + 1])
      args.testbedStartupTimeoutMs = Number(argv[++i]);

    if (a === "--force-exit") args.forceExit = true;
    if (a === "--no-force-exit") args.forceExit = false;
  }

  args.components = Array.from(new Set(args.components));
  args.categories = Array.from(new Set(args.categories));

  return args;
}

function normalizeTestbedBase(base) {
  const raw = String(base || "").trim();
  if (!raw) return raw;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

function testbedProbeUrl(base) {
  const b = normalizeTestbedBase(base);
  return `${b}/green-testbed/`;
}

async function waitForHttpOk(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let lastError = null;

  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { method: "GET" });
      if (res.ok) return { ok: true };
      lastError = new Error(`HTTP ${res.status}`);
    } catch (e) {
      lastError = e;
    }
    await new Promise((r) => setTimeout(r, 500));
  }

  return { ok: false, error: lastError };
}

async function ensureTestbedRunning({
  baseUrl,
  root,
  logPath,
  shouldStart,
  timeoutMs,
}) {
  const probe = testbedProbeUrl(baseUrl);

  const initial = await waitForHttpOk(probe, 1_500);
  if (initial.ok) return { started: false, probeUrl: probe, proc: null };

  if (!shouldStart) {
    throw new Error(
      `Testbed is not reachable at ${probe}. Start it with 'npm run dev' or pass --start-testbed.`,
    );
  }

  const u = new URL(probe);
  if (!["localhost", "127.0.0.1"].includes(u.hostname)) {
    throw new Error(
      `Refusing to auto-start testbed for non-local hostname (${u.hostname}). Start it manually and re-run.`,
    );
  }

  const port = u.port || (u.protocol === "https:" ? "443" : "80");
  await mkdir(path.dirname(logPath), { recursive: true });
  const out = [];

  const proc = spawn(
    "npm",
    ["run", "-s", "dev", "--", "--port", port, "--strictPort"],
    {
      cwd: root,
      env: { ...process.env },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  proc.stdout.on("data", (buf) => out.push(buf.toString("utf8")));
  proc.stderr.on("data", (buf) => out.push(buf.toString("utf8")));

  const waited = await waitForHttpOk(probe, timeoutMs);
  await writeFile(
    logPath,
    `# cmd\nnpm run -s dev -- --port ${port} --strictPort\n\n# output\n${out.join("")}`,
    "utf8",
  );

  if (!waited.ok) {
    try {
      proc.kill("SIGINT");
    } catch {
      // ignore
    }
    throw new Error(
      `Timed out waiting for testbed to start at ${probe}. See ${path.relative(root, logPath)}.`,
    );
  }

  return { started: true, probeUrl: probe, proc };
}

async function stopTestbed(proc) {
  if (!proc) return;
  try {
    proc.kill("SIGINT");
  } catch {
    return;
  }
  await new Promise((r) => setTimeout(r, 1500));
  try {
    proc.kill("SIGKILL");
  } catch {
    // ignore
  }
}

function validateArgs(args) {
  const allowedCategories = ["interaction", "accessibility", "visual"];
  const allowedScaffoldModes = ["keep", "create-missing", "update"];

  if (!args.components.length || !args.categories.length) {
    throw new Error(
      "Usage: node scripts/orchestrate-tests.local.js --components gds-button[,gds-input] --categories interaction[,accessibility|visual]",
    );
  }

  for (const c of args.components) {
    if (!c.startsWith("gds-")) {
      throw new Error(
        `Invalid component '${c}'. Expected a tag name starting with 'gds-'.`,
      );
    }
  }

  for (const c of args.categories) {
    if (!allowedCategories.includes(c)) {
      throw new Error(
        `Invalid category '${c}'. Expected one of: ${allowedCategories.join(", ")}`,
      );
    }
  }

  if (!allowedScaffoldModes.includes(args.scaffoldMode)) {
    throw new Error(
      `Invalid --scaffold-mode '${args.scaffoldMode}'. Expected one of: ${allowedScaffoldModes.join(", ")}`,
    );
  }
}

async function runCommand({ cmd, cmdArgs, cwd, env, logPath, echoStdout }) {
  await mkdir(path.dirname(logPath), { recursive: true });

  return await new Promise((resolve) => {
    const child = spawn(cmd, cmdArgs, {
      cwd,
      env: { ...process.env, ...env },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let out = "";
    let err = "";

    child.stdout.on("data", (buf) => {
      const s = buf.toString("utf8");
      out += s;
      if (echoStdout) process.stdout.write(s);
    });
    child.stderr.on("data", (buf) => {
      const s = buf.toString("utf8");
      err += s;
      process.stderr.write(s);
    });

    child.on("close", async (code) => {
      const combined =
        `# cmd\n${cmd} ${cmdArgs.join(" ")}\n\n` +
        `# exit\n${code}\n\n` +
        `# stdout\n${out}\n\n` +
        `# stderr\n${err}\n`;
      await writeFile(logPath, combined, "utf8");
      resolve({ code: code ?? 1, stdout: out, stderr: err });
    });
  });
}

function looksLikeFlake(output) {
  const text = String(output || "");
  return (
    /stale element/i.test(text) ||
    /timeout/i.test(text) ||
    /element.*(not found|still not)/i.test(text) ||
    /waitFor.*timed out/i.test(text)
  );
}

function looksLikeFrameworkIssue(output) {
  const text = String(output || "");
  return (
    /Cannot find module/i.test(text) ||
    /SyntaxError/i.test(text) ||
    /TS\d{4}/.test(text) ||
    /Failed to compile/i.test(text)
  );
}

function forbiddenBypassPatterns(source) {
  const patterns = [
    /\bdescribe\.skip\b/,
    /\bit\.skip\b/,
    /\bxdescribe\b/,
    /\bxit\b/,
    /\bthis\.skip\b/,
    /\bpending\(/,
  ];
  return patterns.find((p) => p.test(source));
}

function basicSanityForTestFile(source) {
  if (forbiddenBypassPatterns(source)) {
    throw new Error(
      "Refusing to write changes that bypass tests (skip/pending)",
    );
  }
  if (!/\bexpect\s*\(/.test(source)) {
    throw new Error("Refusing to write test file with no expect() assertions");
  }
}

async function loadGreenMcpServerConfig() {
  const raw = await readFile(
    new URL("../.vscode/mcp.json", import.meta.url),
    "utf8",
  );
  const cfg = JSON.parse(raw);
  const servers = cfg?.servers;
  if (!servers || typeof servers !== "object") {
    throw new Error(".vscode/mcp.json missing 'servers'");
  }

  const firstKey = Object.keys(servers)[0];
  const server = servers[firstKey];
  if (!server) throw new Error(".vscode/mcp.json has no servers");
  if (server.type !== "stdio") {
    throw new Error(
      `Unsupported MCP server type in .vscode/mcp.json: ${String(server.type)}`,
    );
  }
  if (!server.command) throw new Error("MCP server missing command");

  return {
    tools: ["*"],
    type: "stdio",
    command: server.command,
    args: Array.isArray(server.args) ? server.args : [],
  };
}

async function runFixerAgent({
  componentName,
  category,
  attempt,
  failureText,
  specPath,
  scaffoldPath,
  reportPath,
}) {
  const client = new CopilotClient();
  const greenMcp = await loadGreenMcpServerConfig();

  const tools = [
    defineTool("log_step", {
      description:
        "Write a progress update explaining what you are doing and why",
      parameters: {
        type: "object",
        properties: { message: { type: "string" } },
        required: ["message"],
      },
      handler: async ({ message }) => {
        process.stdout.write(`\n[agent] ${message}\n`);
        return { ok: true };
      },
    }),
    defineTool("read_text", {
      description: "Read a UTF-8 text file from the repo",
      parameters: {
        type: "object",
        properties: { filePath: { type: "string" } },
        required: ["filePath"],
      },
      handler: async ({ filePath }) => {
        const allowedRoots = [
          path.join(process.cwd(), "test"),
          path.join(process.cwd(), "testbed"),
          path.join(process.cwd(), "scripts"),
        ];
        const abs = path.resolve(process.cwd(), filePath);
        if (
          !allowedRoots.some((r) => abs.startsWith(r + path.sep) || abs === r)
        ) {
          throw new Error(
            `Refusing to read outside allowed roots: ${filePath}`,
          );
        }
        return await readFile(abs, "utf8");
      },
    }),
    defineTool("write_text", {
      description:
        "Write a UTF-8 text file. Only generated specs and testbed scaffolds are allowed.",
      parameters: {
        type: "object",
        properties: {
          filePath: { type: "string" },
          content: { type: "string" },
        },
        required: ["filePath", "content"],
      },
      handler: async ({ filePath, content }) => {
        const abs = path.resolve(process.cwd(), filePath);

        const isGeneratedSpec =
          abs.includes(path.join("test", "specs", "components")) &&
          abs.endsWith(".generated.spec.ts");
        const isScaffold = abs.includes(path.join("testbed", "components"));
        const isRegistry = abs.endsWith(
          path.join("testbed", "components", "registry.ts"),
        );

        if (!isGeneratedSpec && !isScaffold && !isRegistry) {
          throw new Error(
            `Refusing to write '${filePath}'. Only generated specs and scaffolds are allowed.`,
          );
        }

        if (isGeneratedSpec) basicSanityForTestFile(content);

        await mkdir(path.dirname(abs), { recursive: true });
        await writeFile(abs, content, "utf8");
        return { wrote: true };
      },
    }),
    defineTool("write_report", {
      description: "Write a JSON report artifact for this attempt",
      parameters: {
        type: "object",
        properties: { report: { type: "object" } },
        required: ["report"],
      },
      handler: async ({ report }) => {
        await mkdir(path.dirname(reportPath), { recursive: true });
        await writeFile(
          reportPath,
          JSON.stringify(report, null, 2) + "\n",
          "utf8",
        );
        return { wrote: true, reportPath };
      },
    }),
  ];

  const prompt = `You are an iterative test-fixing agent for a Green Design System WDIO testbed.

Target:
- component: ${componentName}
- category: ${category}
- attempt: ${attempt}

You must:
1) Call log_step describing your diagnosis of the failure.
2) Read the failing generated spec (and scaffold if provided) using read_text.
3) Decide the root cause category (test bug vs scaffold bug vs framework/config issue vs likely component bug).
4) If you can fix it safely, edit ONLY the generated spec and/or scaffold/registry by calling write_text.
5) Call log_step explaining what you changed and why.
6) If you believe it cannot be fixed without cheating, call log_step explaining why and write_report with a structured reason and evidence.

Hard rules:
- DO NOT bypass failures (no skips, no deleting assertions to make it pass, no always-true expects).
- Do not output code fences or markdown.
- Prefer stable #ids in scaffolds; if missing and scaffold updates are allowed, add fixtures rather than weak selectors.

Context:
- Failure output (truncated):\n${failureText}
- Generated spec path: ${specPath}
- Scaffold path (may be empty): ${scaffoldPath || "(none)"}

Return output as normal text, but perform edits via write_text and reports via write_report.`;

  const session = await client.createSession({
    streaming: true,
    tools,
    mcpServers: { green: greenMcp },
  });

  session.on((event) => {
    if (event.type === "assistant.message_delta") {
      process.stdout.write(event.data.deltaContent);
    }
    if (event.type === "tool.call_start") {
      process.stdout.write(`\n[tool] ${event.data.toolName}\n`);
    }
  });

  try {
    await session.sendAndWait({ prompt }, 180_000);
  } finally {
    await client.stop();
  }
}

async function main(args) {
  validateArgs(args);

  const effectiveTestbedUrl =
    args.testbedUrl ?? (process.env.TESTBED_URL || null);
  if (!effectiveTestbedUrl) {
    throw new Error(
      "TESTBED_URL is not set. Provide --testbed-url http://localhost:5173 (or set TESTBED_URL in env) before running local tests.",
    );
  }

  const root = process.cwd();
  const run = runId();
  const baseReportDir = args.reportDir
    ? path.resolve(root, args.reportDir)
    : path.resolve(root, "logs", "orchestrator-runs", run);
  await mkdir(baseReportDir, { recursive: true });

  const testbedLog = path.join(baseReportDir, "testbed-dev.log.txt");
  const testbed = await ensureTestbedRunning({
    baseUrl: effectiveTestbedUrl,
    root,
    logPath: testbedLog,
    shouldStart: args.startTestbed,
    timeoutMs: args.testbedStartupTimeoutMs,
  });

  const runReport = {
    workflow: "orchestrate-tests-local",
    startedAt: nowIso(),
    components: args.components,
    categories: args.categories,
    limits: {
      maxFixAttempts: args.maxFixAttempts,
      maxFlakeReruns: args.maxFlakeReruns,
      maxComponentBugAttempts: args.maxComponentBugAttempts,
    },
    results: [],
  };

  try {
    for (const componentName of args.components) {
      for (const category of args.categories) {
        const targetId = `${componentName}:${category}`;
        const targetDir = path.join(baseReportDir, componentName, category);
        await mkdir(targetDir, { recursive: true });

        const specRel = generatedSpecPath(componentName, category);
        const matrix = await readMatrix();
        let scaffoldRel = null;
        try {
          const entry = getMatrixEntry(matrix, componentName);
          scaffoldRel = entry?.testbedPage ?? null;
        } catch {
          // ignore
        }

        process.stdout.write(`\n=== ${targetId} ===\n`);

        // Step: generate
        process.stdout.write(
          "[orchestrator] Generating tests (and scaffolds if enabled)\n",
        );
        const genLog = path.join(targetDir, "generate.log.txt");
        const genArgs = [
          "scripts/generate-tests.js",
          "--components",
          componentName,
          "--categories",
          category,
        ];
        if (!args.scaffolds) genArgs.push("--no-scaffolds");
        genArgs.push("--scaffold-mode", args.scaffoldMode);

        const gen = await runCommand({
          cmd: "node",
          cmdArgs: genArgs,
          cwd: root,
          env: {},
          logPath: genLog,
          echoStdout: false,
        });

        if (gen.code !== 0) {
          runReport.results.push({
            targetId,
            status: "failed",
            reason: "generator-failed",
            generateLog: path.relative(root, genLog),
          });
          continue;
        }

        // Step: run
        const testLogBase = (n) =>
          path.join(targetDir, `test.attempt-${n}.log.txt`);

        const runOnce = async (n) =>
          await runCommand({
            cmd: "npm",
            cmdArgs: ["run", "-s", "test-local", "--", "--spec", specRel],
            cwd: root,
            env: {
              TESTBED_URL: effectiveTestbedUrl,
              WDIO_BROWSERS: "chrome",
              WDIO_MAX_INSTANCES: "1",
              WDIO_VISUAL: "0",
              WDIO_OCR: "0",
            },
            logPath: testLogBase(n),
            echoStdout: false,
          });

        process.stdout.write(
          `[orchestrator] Running tests locally: ${specRel}\n`,
        );
        let attemptNo = 0;
        let last = await runOnce(attemptNo);

        if (last.code === 0) {
          runReport.results.push({
            targetId,
            status: "passed",
            attempts: 1,
            spec: specRel,
          });
          continue;
        }

        // Flake reruns
        let flakeReruns = 0;
        while (
          flakeReruns < args.maxFlakeReruns &&
          last.code !== 0 &&
          looksLikeFlake(last.stdout + "\n" + last.stderr)
        ) {
          flakeReruns += 1;
          process.stdout.write(
            `[orchestrator] Failure looks flaky; rerun ${flakeReruns}/${args.maxFlakeReruns}\n`,
          );
          attemptNo += 1;
          last = await runOnce(attemptNo);
          if (last.code === 0) break;
        }

        if (last.code === 0) {
          runReport.results.push({
            targetId,
            status: "passed",
            attempts: attemptNo + 1,
            spec: specRel,
            note: "passed after flake rerun",
          });
          continue;
        }

        // Fix loop
        let fixAttempts = 0;
        while (fixAttempts < args.maxFixAttempts && last.code !== 0) {
          fixAttempts += 1;
          process.stdout.write(
            `[orchestrator] Starting fix attempt ${fixAttempts}/${args.maxFixAttempts}\n`,
          );

          const failureText = (last.stdout + "\n" + last.stderr).slice(0, 8000);
          const reportPath = path.join(
            targetDir,
            `agent.attempt-${fixAttempts}.report.json`,
          );

          // If this looks like a framework issue, prefer spec-level fixes (imports, syntax).
          if (looksLikeFrameworkIssue(failureText)) {
            process.stdout.write(
              "[orchestrator] Detected likely framework/import issue\n",
            );
          }

          await runFixerAgent({
            componentName,
            category,
            attempt: fixAttempts,
            failureText,
            specPath: specRel,
            scaffoldPath: scaffoldRel,
            reportPath,
          });

          process.stdout.write(
            "\n[orchestrator] Rerunning tests after agent changes\n",
          );
          attemptNo += 1;
          last = await runOnce(attemptNo);
        }

        if (last.code === 0) {
          runReport.results.push({
            targetId,
            status: "passed",
            attempts: attemptNo + 1,
            spec: specRel,
            fixAttempts,
          });
          continue;
        }

        // Component bug confirmation reruns
        let componentBugChecks = 0;
        while (componentBugChecks < args.maxComponentBugAttempts) {
          componentBugChecks += 1;
          process.stdout.write(
            `[orchestrator] Still failing; rerun to rule out flake/component-bug: ${componentBugChecks}/${args.maxComponentBugAttempts}\n`,
          );
          attemptNo += 1;
          const rerun = await runOnce(attemptNo);
          if (rerun.code === 0) {
            last = rerun;
            break;
          }
          last = rerun;
        }

        if (last.code === 0) {
          runReport.results.push({
            targetId,
            status: "passed",
            attempts: attemptNo + 1,
            spec: specRel,
            note: "passed after final confirmation rerun",
          });
          continue;
        }

        runReport.results.push({
          targetId,
          status: "failed",
          spec: specRel,
          attempts: attemptNo + 1,
          fixAttempts,
          reason:
            fixAttempts >= args.maxFixAttempts
              ? "exhausted-fix-attempts"
              : "unknown",
          logs: {
            generate: path.relative(root, genLog),
            lastTest: path.relative(root, testLogBase(attemptNo)),
          },
        });
      }
    }
  } finally {
    await stopTestbed(testbed.proc);
  }

  runReport.finishedAt = nowIso();
  const summaryPath = path.join(baseReportDir, "run-summary.json");
  await writeFile(
    summaryPath,
    JSON.stringify(runReport, null, 2) + "\n",
    "utf8",
  );
  process.stdout.write(
    `\n[orchestrator] Wrote summary: ${path.relative(root, summaryPath)}\n`,
  );

  const failed = runReport.results.some((r) => r.status === "failed");
  process.exitCode = failed ? 1 : 0;
}

const cliArgs = parseArgs(process.argv.slice(2));

main(cliArgs)
  .then(() => {
    if (!cliArgs.forceExit) return;
    setImmediate(() => process.exit(process.exitCode ?? 0));
  })
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
    if (!cliArgs.forceExit) return;
    setImmediate(() => process.exit(1));
  });
