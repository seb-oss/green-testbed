import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { readMatrix, getMatrixEntry } from "./matrix-utils.js";

const LOG_SEPARATOR = "\n\n----\n\n";

async function tryLoadChalk() {
  try {
    const mod = await import("chalk");
    return mod.default;
  } catch {
    return null;
  }
}

function createLogger({ chalk }) {
  const color = {
    dim: (s) => (chalk ? chalk.gray(s) : s),
    strong: (s) => (chalk ? chalk.bold(s) : s),
    orchestrator: (s) => (chalk ? chalk.cyanBright(s) : s),
    testbed: (s) => (chalk ? chalk.greenBright(s) : s),
    cmd: (s) => (chalk ? chalk.blueBright(s) : s),
    stdout: (s) => (chalk ? chalk.gray(s) : s),
    stderr: (s) => (chalk ? chalk.redBright(s) : s),
    warn: (s) => (chalk ? chalk.yellowBright(s) : s),
    agent: (s) => (chalk ? chalk.magentaBright(s) : s),
    tool: (s) => (chalk ? chalk.yellow(s) : s),
  };

  const label = (kind) => {
    const raw = `[${kind}]`;
    if (kind === "orchestrator") return color.strong(color.orchestrator(raw));
    if (kind === "testbed") return color.strong(color.testbed(raw));
    if (kind === "cmd") return color.strong(color.cmd(raw));
    if (kind === "stdout") return color.stdout(raw);
    if (kind === "stderr") return color.stderr(raw);
    if (kind === "warn") return color.warn(raw);
    if (kind === "agent") return color.agent(raw);
    if (kind === "tool") return color.tool(raw);
    return color.strong(raw);
  };

  const section = (kind, message) => {
    process.stdout.write(LOG_SEPARATOR);
    process.stdout.write(`${label(kind)} ${message}\n`);
  };

  const info = (kind, message) => {
    process.stdout.write(`${label(kind)} ${message}\n`);
  };

  const warn = (message) => {
    process.stdout.write(`${label("warn")} ${message}\n`);
  };

  const makePrefixedWriter = (write, prefix) => {
    let atLineStart = true;
    return (chunk) => {
      const s = chunk.toString("utf8");
      for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (atLineStart) {
          write(prefix);
          atLineStart = false;
        }
        write(ch);
        if (ch === "\n") atLineStart = true;
      }
    };
  };

  return {
    label,
    section,
    info,
    warn,
    makePrefixedWriter,
  };
}

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

async function runCommand({
  cmd,
  cmdArgs,
  cwd,
  env,
  logPath,
  echoStdout,
  logger,
  logLabel,
}) {
  await mkdir(path.dirname(logPath), { recursive: true });

  return await new Promise((resolve) => {
    const child = spawn(cmd, cmdArgs, {
      cwd,
      env: { ...process.env, ...env },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let out = "";
    let err = "";

    const effectiveLabel = logLabel || cmd;

    const stdoutWriter =
      logger && echoStdout
        ? logger.makePrefixedWriter(
            (s) => process.stdout.write(s),
            `${logger.label("stdout")} ${logger.label(effectiveLabel)} `,
          )
        : null;

    const stderrWriter = logger
      ? logger.makePrefixedWriter(
          (s) => process.stderr.write(s),
          `${logger.label("stderr")} ${logger.label(effectiveLabel)} `,
        )
      : null;

    child.stdout.on("data", (buf) => {
      const s = buf.toString("utf8");
      out += s;
      if (echoStdout) {
        if (stdoutWriter) stdoutWriter(buf);
        else process.stdout.write(s);
      }
    });
    child.stderr.on("data", (buf) => {
      const s = buf.toString("utf8");
      err += s;
      if (stderrWriter) stderrWriter(buf);
      else process.stderr.write(s);
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

async function main(args) {
  validateArgs(args);

  const chalk = await tryLoadChalk();
  const logger = createLogger({ chalk });

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

  logger.section(
    "orchestrator",
    `Run ${run} (report: ${path.relative(root, baseReportDir)})`,
  );

  const testbedLog = path.join(baseReportDir, "testbed-dev.log.txt");
  logger.section(
    "testbed",
    `Ensuring testbed reachable at ${testbedProbeUrl(effectiveTestbedUrl)}`,
  );
  const testbed = await ensureTestbedRunning({
    baseUrl: effectiveTestbedUrl,
    root,
    logPath: testbedLog,
    shouldStart: args.startTestbed,
    timeoutMs: args.testbedStartupTimeoutMs,
  });
  if (testbed.started) {
    logger.info(
      "testbed",
      `Started dev server (log: ${path.relative(root, testbedLog)})`,
    );
  } else {
    logger.info("testbed", "Already running");
  }

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

        logger.section("orchestrator", `Target ${targetId}`);

        // Step: generate
        logger.section("cmd", "Generate tests (and scaffolds if enabled)");
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
          logger,
          logLabel: "generator",
        });

        if (gen.code !== 0) {
          logger.warn(
            `Generator failed; see ${path.relative(root, genLog)} (skipping run/fix)`,
          );
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
            echoStdout: true,
            logger,
            logLabel: `wdio#${n}`,
          });

        logger.section("cmd", `Run tests locally: ${specRel}`);
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
          logger.section(
            "orchestrator",
            `Failure looks flaky; rerun ${flakeReruns}/${args.maxFlakeReruns}`,
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
          logger.section(
            "orchestrator",
            `Starting fix attempt ${fixAttempts}/${args.maxFixAttempts}`,
          );

          const failureText = (last.stdout + "\n" + last.stderr).slice(0, 8000);
          const fixRequestPath = path.join(
            targetDir,
            `fix-request.attempt-${fixAttempts}.json`,
          );
          const fixResponsePath = path.join(
            targetDir,
            `fix-response.attempt-${fixAttempts}.json`,
          );

          // If this looks like a framework issue, prefer spec-level fixes (imports, syntax).
          if (looksLikeFrameworkIssue(failureText)) {
            logger.warn("Detected likely framework/import issue");
          }

          await writeFile(
            fixRequestPath,
            JSON.stringify(
              {
                workflow: "orchestrate-tests-local",
                componentName,
                category,
                attempt: fixAttempts,
                failureText,
                specPath: specRel,
                scaffoldPath: scaffoldRel,
                responsePath: path.relative(root, fixResponsePath),
              },
              null,
              2,
            ) + "\n",
            "utf8",
          );

          logger.section("cmd", "Request fix from Test Generator (fix mode)");
          const fixLog = path.join(
            targetDir,
            `fix.attempt-${fixAttempts}.log.txt`,
          );
          const fix = await runCommand({
            cmd: "node",
            cmdArgs: [
              "scripts/generate-tests.js",
              "--fix-request",
              path.relative(root, fixRequestPath),
            ],
            cwd: root,
            env: {},
            logPath: fixLog,
            echoStdout: true,
            logger,
            logLabel: `fixer#${fixAttempts}`,
          });

          if (fix.code !== 0) {
            logger.warn(
              `Fix attempt failed; see ${path.relative(root, fixLog)} (stopping fix loop)`,
            );
            break;
          }

          logger.section("orchestrator", "Rerunning tests after agent changes");
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
          logger.section(
            "orchestrator",
            `Still failing; rerun to rule out flake/component-bug: ${componentBugChecks}/${args.maxComponentBugAttempts}`,
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
