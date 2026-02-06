import { CopilotClient } from "@github/copilot-sdk";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { readMatrix, writeMatrix } from "./matrix-utils.js";
import {
  AGENT_KEYS,
  buildMatrixSyncInventoryPrompt,
  getCopilotCliArgs,
  getAgentModel,
} from "./agent-config.js";

function nowTime() {
  return new Date().toISOString().slice(11, 19);
}

function vprintln(verbose, message) {
  if (!verbose) return;
  console.log(`[${nowTime()}] ${message}`);
}

function parseArgs(argv) {
  const args = {
    apply: false,
    prune: false,
    print: false,
    generateReport: false,
    verbose: false,
    forceExit: true,
    maxResults: 200,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--apply") args.apply = true;
    if (a === "--prune") args.prune = true;
    if (a === "--print") args.print = true;
    if (a === "--generate-report") args.generateReport = true;
    if (a === "--verbose") args.verbose = true;
    if (a === "--force-exit") args.forceExit = true;
    if (a === "--no-force-exit") args.forceExit = false;
    if (a === "--max-results" && argv[i + 1])
      args.maxResults = Number(argv[++i]);
  }

  return args;
}

const cliArgs = parseArgs(process.argv.slice(2));

function isoDate() {
  return new Date().toISOString().slice(0, 10);
}

function stableJson(obj) {
  return JSON.stringify(obj, null, 2) + "\n";
}

function setIfChanged(target, key, nextValue) {
  if (target[key] !== nextValue) {
    target[key] = nextValue;
    return true;
  }
  return false;
}

function normalizeVersion(versionRange) {
  if (typeof versionRange !== "string") return "";
  const trimmed = versionRange.trim();
  const stripped = trimmed.replace(/^[^0-9]*/, "");
  return stripped || trimmed;
}

async function readGreenCoreVersionFromPackageJson() {
  const raw = await readFile(
    new URL("../package.json", import.meta.url),
    "utf8",
  );
  const pkg = JSON.parse(raw);
  const v =
    pkg?.dependencies?.["@sebgroup/green-core"] ||
    pkg?.devDependencies?.["@sebgroup/green-core"];
  return normalizeVersion(v);
}

async function writeReportJson(report) {
  const logsDir = new URL("../logs", import.meta.url);
  await mkdir(logsDir, { recursive: true });

  const reportPath = new URL(
    "../logs/matrix-sync-report.json",
    import.meta.url,
  );
  await writeFile(reportPath, stableJson(report), "utf8");
  return reportPath.pathname;
}

async function loadGreenMcpServerConfig() {
  const mcpPath = new URL("../.vscode/mcp.json", import.meta.url);
  const raw = await readFile(mcpPath, "utf8");
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

async function scanRepoForComponentArtifacts() {
  const root = new URL("..", import.meta.url);

  const testbedDir = new URL("../testbed/components", import.meta.url);
  const specsDir = new URL("../test/specs/components", import.meta.url);

  const files = {
    testbed: new Set(),
    specs: new Set(),
  };

  for (const name of await readdir(testbedDir)) {
    if (name.endsWith(".ts")) files.testbed.add(name);
  }

  for (const name of await readdir(specsDir)) {
    if (name.endsWith(".ts")) files.specs.add(name);
  }

  // Return best-effort paths for a gds-* component.
  function guessTestbedPage(componentName) {
    const short = componentName.replace(/^gds-/, "");
    const ts = `${short}.ts`;
    if (files.testbed.has(ts)) return `testbed/components/${ts}`;
    return "";
  }

  function guessSpec(componentName) {
    const short = componentName.replace(/^gds-/, "");

    // Prefer non-generated canonical spec if present.
    const canonical = `${short}.spec.ts`;
    if (files.specs.has(canonical)) return `test/specs/components/${canonical}`;

    // Otherwise pick any generated spec for that component.
    const candidates = Array.from(files.specs).filter(
      (f) => f.startsWith(`${short}.`) && f.endsWith(".generated.spec.ts"),
    );
    if (candidates.length) return `test/specs/components/${candidates[0]}`;

    return "";
  }

  return { root, guessTestbedPage, guessSpec };
}

async function fetchComponentInventoryViaCopilotMcp({ maxResults, verbose }) {
  const t0 = Date.now();
  vprintln(verbose, "Loading Green MCP server config");
  const greenMcp = await loadGreenMcpServerConfig();
  vprintln(verbose, `Green MCP config loaded (${Date.now() - t0}ms)`);

  vprintln(verbose, "Starting Copilot client and creating session");
  const copilotCliArgs = getCopilotCliArgs();
  const client = new CopilotClient(
    copilotCliArgs ? { cliArgs: copilotCliArgs } : {},
  );
  try {
    const tSessionStart = Date.now();
    const model = getAgentModel(AGENT_KEYS.MATRIX_SYNC);

    process.stdout.write(
      `[agent] Coverage Matrix Maintainer (matrix sync) model: ${model ?? "default"}\n`,
    );

    const session = await client.createSession({
      streaming: !!verbose,
      mcpServers: {
        green: greenMcp,
      },
      ...(model ? { model } : {}),
    });
    vprintln(verbose, `Session created (${Date.now() - tSessionStart}ms)`);

    let streamed = "";
    let lastEventAt = Date.now();
    if (verbose) {
      session.on((event) => {
        lastEventAt = Date.now();
        if (event.type === "tool.call_start") {
          process.stdout.write(`\n[tool.start] ${event.data.toolName}\n`);
        }
        if (event.type === "tool.call_done") {
          process.stdout.write(`\n[tool.done] ${event.data.toolName}\n`);
          try {
            process.stdout.write(
              `${JSON.stringify(event.data.result, null, 2)}\n`,
            );
          } catch {
            process.stdout.write(`${String(event.data.result)}\n`);
          }
        }
        if (event.type === "assistant.message_delta") {
          streamed += event.data.deltaContent;
          process.stdout.write(event.data.deltaContent);
        }
        if (event.type === "assistant.message_done") {
          process.stdout.write("\n[assistant.done]\n");
        }
        if (event.type === "session.idle") {
          process.stdout.write("\n[session.idle]\n");
        }
        if (event.type === "session.error") {
          process.stdout.write(`\n[session.error] ${event.data.error}\n`);
        }
      });
    }

    const prompt = buildMatrixSyncInventoryPrompt({ maxResults });

    vprintln(verbose, "Requesting component inventory (sendAndWait)");
    const response = await session.sendAndWait({ prompt });
    vprintln(verbose, `Inventory response received (${Date.now() - t0}ms)`);

    const content = (verbose ? streamed : response?.data?.content) ?? "";
    if (typeof content !== "string" || !content.trim()) {
      throw new Error("No content returned from Copilot session");
    }

    const jsonStart = content.indexOf("{");
    const jsonEnd = content.lastIndexOf("}");
    if (jsonStart < 0 || jsonEnd < 0) {
      throw new Error(
        `Expected JSON object in response, got: ${content.slice(0, 200)}`,
      );
    }

    const parsed = JSON.parse(content.slice(jsonStart, jsonEnd + 1));
    const list = parsed?.components;
    if (!Array.isArray(list) || list.some((x) => typeof x !== "string")) {
      throw new Error("Invalid inventory JSON: components must be string[]");
    }

    vprintln(verbose, `Parsed inventory: ${list.length} components`);

    return Array.from(new Set(list.filter((c) => c.startsWith("gds-")))).sort();
  } finally {
    vprintln(verbose, "Stopping Copilot client");
    const tStop = Date.now();
    await client.stop();
    vprintln(verbose, `Copilot client stopped (${Date.now() - tStop}ms)`);
  }
}

function createDefaultEntry(componentName) {
  return {
    category: "unknown",
    testStatus: "missing",
    testbedPage: "",
    testSpec: "",
    interaction: {
      status: "pending",
    },
    accessibility: {
      status: "pending",
    },
    visual: {
      status: "pending",
      snapshots: [],
    },
    lastUpdated: isoDate(),
  };
}

async function main(args) {
  const runStartedAt = new Date().toISOString();
  const now = isoDate();
  const desiredGreenCoreVersion = await readGreenCoreVersionFromPackageJson();

  const matrix = await readMatrix();
  const before = stableJson(matrix);

  const beforeComponentCount = Object.keys(matrix.components ?? {}).length;
  const greenCoreBefore = matrix.greenCoreVersion;

  if (args.verbose) {
    console.log("Matrix sync: starting");
    console.log(`- apply: ${args.apply}`);
    console.log(`- prune: ${args.prune}`);
    console.log(`- maxResults: ${args.maxResults}`);
    console.log(
      `- desired greenCoreVersion: ${desiredGreenCoreVersion || "(unknown)"}`,
    );
  }

  const inventory = await fetchComponentInventoryViaCopilotMcp({
    maxResults: args.maxResults,
    verbose: args.verbose,
  });

  const { guessTestbedPage, guessSpec } = await scanRepoForComponentArtifacts();

  let changed = false;
  let added = 0;
  let updatedTestbedPage = 0;
  let updatedTestSpec = 0;
  let pruned = 0;
  let updatedGreenCoreVersion = false;

  if (!matrix.components || typeof matrix.components !== "object") {
    matrix.components = {};
    changed = true;
  }

  // Always refresh greenCoreVersion when applying (even if no other changes).
  if (args.apply && desiredGreenCoreVersion) {
    const didChange = setIfChanged(
      matrix,
      "greenCoreVersion",
      desiredGreenCoreVersion,
    );
    if (didChange) {
      updatedGreenCoreVersion = true;
      changed = true;
    }
  }

  // Add/update entries for inventory.
  for (const componentName of inventory) {
    if (!matrix.components[componentName]) {
      matrix.components[componentName] = createDefaultEntry(componentName);
      changed = true;
      added += 1;
    }

    const entry = matrix.components[componentName];

    // Ensure required sections exist.
    if (!entry.interaction) {
      entry.interaction = { status: "pending" };
      changed = true;
    }
    if (!entry.accessibility) {
      entry.accessibility = { status: "pending" };
      changed = true;
    }
    if (!entry.visual) {
      entry.visual = { status: "pending", snapshots: [] };
      changed = true;
    }

    const nextTestbed = guessTestbedPage(componentName);
    const nextSpec = guessSpec(componentName);

    if (nextTestbed) {
      const didChange = setIfChanged(entry, "testbedPage", nextTestbed);
      if (didChange) updatedTestbedPage += 1;
      changed = didChange || changed;
    }
    if (nextSpec) {
      const didChange = setIfChanged(entry, "testSpec", nextSpec);
      if (didChange) updatedTestSpec += 1;
      changed = didChange || changed;
    }

    if (changed) entry.lastUpdated = now;
  }

  // Optionally prune entries not in inventory.
  if (args.prune) {
    for (const name of Object.keys(matrix.components)) {
      if (!inventory.includes(name)) {
        delete matrix.components[name];
        changed = true;
        pruned += 1;
      }
    }
  }

  if (changed) {
    matrix.lastUpdated = now;
  }

  const after = stableJson(matrix);

  const report = {
    workflow: "matrix-sync",
    startedAt: runStartedAt,
    finishedAt: new Date().toISOString(),
    apply: args.apply,
    prune: args.prune,
    verbose: args.verbose,
    maxResults: args.maxResults,
    desiredGreenCoreVersion: desiredGreenCoreVersion || null,
    greenCoreVersionBefore: greenCoreBefore || null,
    greenCoreVersionAfter: matrix.greenCoreVersion || null,
    updatedGreenCoreVersion,
    inventoryCount: inventory.length,
    matrixComponentsBefore: beforeComponentCount,
    matrixComponentsAfter: Object.keys(matrix.components ?? {}).length,
    added,
    updatedTestbedPage,
    updatedTestSpec,
    pruned,
    changed,
  };

  if (args.print) {
    process.stdout.write(after);
    if (args.generateReport) {
      vprintln(args.verbose, "Writing report (print mode)");
      const reportPath = await writeReportJson(report);
      if (args.verbose) console.log(`Matrix sync: wrote report ${reportPath}`);
    }
    return;
  }

  if (!changed) {
    console.log("Matrix sync: no changes needed");
    if (args.generateReport) {
      vprintln(args.verbose, "Writing report (no-change mode)");
      const reportPath = await writeReportJson(report);
      if (args.verbose) console.log(`Matrix sync: wrote report ${reportPath}`);
    }
    return;
  }

  if (!args.apply) {
    console.log("Matrix sync: changes detected (run with --apply to write)");
    console.log(`- Components in MCP inventory: ${inventory.length}`);
    console.log(
      `- Matrix components (after sync): ${Object.keys(matrix.components).length}`,
    );
    if (args.generateReport) {
      vprintln(args.verbose, "Writing report (check mode)");
      const reportPath = await writeReportJson(report);
      if (args.verbose) console.log(`Matrix sync: wrote report ${reportPath}`);
    }
    process.exitCode = 2;
    return;
  }

  await writeMatrix(matrix);
  console.log("Matrix sync: wrote updates to test/coverage-matrix.json");

  if (args.generateReport) {
    vprintln(args.verbose, "Writing report (apply mode)");
    const reportPath = await writeReportJson({ ...report, wroteMatrix: true });
    if (args.verbose) console.log(`Matrix sync: wrote report ${reportPath}`);
  }

  // Basic sanity: ensure the file actually changed.
  if (before === after) {
    console.warn("Matrix sync: warning: no effective diff after write");
  }
}

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
