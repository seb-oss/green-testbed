import { CopilotClient } from "@github/copilot-sdk";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { readMatrix, writeMatrix } from "./matrix-utils.js";

function parseArgs(argv) {
  const args = {
    apply: false,
    prune: false,
    print: false,
    maxResults: 200,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--apply") args.apply = true;
    if (a === "--prune") args.prune = true;
    if (a === "--print") args.print = true;
    if (a === "--max-results" && argv[i + 1])
      args.maxResults = Number(argv[++i]);
  }

  return args;
}

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

async function fetchComponentInventoryViaCopilotMcp({ maxResults }) {
  const greenMcp = await loadGreenMcpServerConfig();

  const client = new CopilotClient();
  try {
    const session = await client.createSession({
      model: "sonnet-4.5",
      streaming: false,
      mcpServers: {
        green: greenMcp,
      },
    });

    const prompt = `Use the Green MCP tool green.search_components to list all Green web components.

Requirements:
- Call green.search_components with:
  - query: '^gds-'
  - category: 'component'
  - useRegex: true
  - splitTerms: false
  - maxResults: ${maxResults}
- Return ONLY valid JSON of the form:
  {"components": ["gds-button", "gds-input", ...]}
- Include ONLY tag names that start with 'gds-'.
- Sort the components alphabetically.
`;

    const response = await session.sendAndWait({ prompt });
    const content = response?.data?.content;
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

    return Array.from(new Set(list.filter((c) => c.startsWith("gds-")))).sort();
  } finally {
    await client.stop();
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

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const matrix = await readMatrix();
  const before = stableJson(matrix);

  const inventory = await fetchComponentInventoryViaCopilotMcp({
    maxResults: args.maxResults,
  });

  const { guessTestbedPage, guessSpec } = await scanRepoForComponentArtifacts();

  const now = isoDate();
  let changed = false;

  if (!matrix.components || typeof matrix.components !== "object") {
    matrix.components = {};
    changed = true;
  }

  // Add/update entries for inventory.
  for (const componentName of inventory) {
    if (!matrix.components[componentName]) {
      matrix.components[componentName] = createDefaultEntry(componentName);
      changed = true;
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

    if (nextTestbed)
      changed = setIfChanged(entry, "testbedPage", nextTestbed) || changed;
    if (nextSpec)
      changed = setIfChanged(entry, "testSpec", nextSpec) || changed;

    if (changed) entry.lastUpdated = now;
  }

  // Optionally prune entries not in inventory.
  if (args.prune) {
    for (const name of Object.keys(matrix.components)) {
      if (!inventory.includes(name)) {
        delete matrix.components[name];
        changed = true;
      }
    }
  }

  if (changed) {
    matrix.lastUpdated = now;
  }

  const after = stableJson(matrix);

  if (args.print) {
    process.stdout.write(after);
    return;
  }

  if (!changed) {
    console.log("Matrix sync: no changes needed");
    return;
  }

  if (!args.apply) {
    console.log("Matrix sync: changes detected (run with --apply to write)");
    console.log(`- Components in MCP inventory: ${inventory.length}`);
    console.log(
      `- Matrix components (after sync): ${Object.keys(matrix.components).length}`,
    );
    process.exitCode = 2;
    return;
  }

  await writeMatrix(matrix);
  console.log("Matrix sync: wrote updates to test/coverage-matrix.json");

  // Basic sanity: ensure the file actually changed.
  if (before === after) {
    console.warn("Matrix sync: warning: no effective diff after write");
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
