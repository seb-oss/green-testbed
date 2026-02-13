import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  AGENT_KEYS,
  buildMatrixSyncComponentAgentPrompt,
  buildMatrixSyncAgentPrompt,
  getCopilotCliArgs,
  getAgentModel,
} from "./agent-config.js";

const MATRIX_PATH = new URL("../test/coverage-matrix.json", import.meta.url);
const COMPONENTS_PATH = new URL(
  "../node_modules/@sebgroup/green-core/generated/mcp/components.json",
  import.meta.url,
);
const VALID_STATUSES = new Set(["pending", "review", "blocked", "validated"]);

const REPO_ROOT = path.resolve(new URL("..", import.meta.url).pathname);

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
    print: false,
    generateReport: false,
    verbose: false,
    forceExit: true,
    initOnly: false,
    agentOnly: false,
    allComponents: false,
    components: [],
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--apply") args.apply = true;
    if (a === "--print") args.print = true;
    if (a === "--generate-report") args.generateReport = true;
    if (a === "--verbose") args.verbose = true;
    if (a === "--force-exit") args.forceExit = true;
    if (a === "--no-force-exit") args.forceExit = false;
    if (a === "--init-only") args.initOnly = true;
    if (a === "--agent-only") args.agentOnly = true;
    if (a === "--all-components") args.allComponents = true;

    if (a === "--components") {
      const raw = argv[i + 1];
      if (raw) {
        args.components = raw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        i++;
      }
    }
    if (a.startsWith("--components=")) {
      const raw = a.slice("--components=".length);
      args.components = raw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }
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

function createBaseMatrix({ greenCoreVersion }) {
  return {
    version: "1",
    lastUpdated: isoDate(),
    greenCoreVersion: greenCoreVersion || "",
    components: {},
  };
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function ensureStringArray(value) {
  return Array.isArray(value) ? value.filter((v) => typeof v === "string") : [];
}

function ensureCategorySection(section, { kind }) {
  const base = { status: "pending" };
  if (kind === "interaction") {
    return {
      ...base,
      interactions: [],
      events: [],
      states: [],
      keyboardNav: [],
      validation: [],
      edgeCases: [],
      ...(section && typeof section === "object" ? section : {}),
      status: VALID_STATUSES.has(section?.status) ? section.status : "pending",
      interactions: ensureStringArray(section?.interactions),
      events: ensureStringArray(section?.events),
      states: ensureStringArray(section?.states),
      keyboardNav: ensureStringArray(section?.keyboardNav),
      validation: ensureStringArray(section?.validation),
      edgeCases: ensureStringArray(section?.edgeCases),
    };
  }

  if (kind === "accessibility") {
    return {
      ...base,
      checks: [],
      ...(section && typeof section === "object" ? section : {}),
      status: VALID_STATUSES.has(section?.status) ? section.status : "pending",
      checks: ensureStringArray(section?.checks),
    };
  }

  if (kind === "visual") {
    return {
      ...base,
      snapshots: [],
      ...(section && typeof section === "object" ? section : {}),
      status: VALID_STATUSES.has(section?.status) ? section.status : "pending",
      snapshots: ensureStringArray(section?.snapshots),
    };
  }

  return section;
}

function defaultComponentEntry() {
  return {
    category: "canonical",
    testbedPage: "",
    testSpec: "",
    interaction: ensureCategorySection(undefined, { kind: "interaction" }),
    accessibility: ensureCategorySection(undefined, { kind: "accessibility" }),
    visual: ensureCategorySection(undefined, { kind: "visual" }),
  };
}

function ensureEntryShape(entry) {
  const next = {
    ...defaultComponentEntry(),
    ...(entry && typeof entry === "object" ? entry : {}),
  };

  next.category = isNonEmptyString(next.category) ? next.category : "canonical";
  next.testbedPage = isNonEmptyString(next.testbedPage) ? next.testbedPage : "";
  next.testSpec = isNonEmptyString(next.testSpec) ? next.testSpec : "";
  next.interaction = ensureCategorySection(next.interaction, {
    kind: "interaction",
  });
  next.accessibility = ensureCategorySection(next.accessibility, {
    kind: "accessibility",
  });
  next.visual = ensureCategorySection(next.visual, { kind: "visual" });

  return next;
}

async function readMatrixOrDefault({ greenCoreVersion }) {
  try {
    const raw = await readFile(MATRIX_PATH, "utf8");
    if (!raw.trim()) return createBaseMatrix({ greenCoreVersion });
    return JSON.parse(raw);
  } catch (err) {
    if (err && err.code === "ENOENT") {
      return createBaseMatrix({ greenCoreVersion });
    }
    if (err instanceof SyntaxError) {
      return createBaseMatrix({ greenCoreVersion });
    }
    throw err;
  }
}

function validateMatrixShape(matrix) {
  if (!matrix || typeof matrix !== "object") {
    throw new Error("Matrix must be an object");
  }
  if (typeof matrix.version !== "string" || !matrix.version.trim()) {
    throw new Error("Matrix.version is required");
  }
  if (typeof matrix.lastUpdated !== "string" || !matrix.lastUpdated.trim()) {
    throw new Error("Matrix.lastUpdated is required");
  }
  if (
    typeof matrix.greenCoreVersion !== "string" ||
    !matrix.greenCoreVersion.trim()
  ) {
    throw new Error("Matrix.greenCoreVersion is required");
  }
  if (!matrix.components || typeof matrix.components !== "object") {
    throw new Error("Matrix.components must be an object");
  }
  for (const [name, entry] of Object.entries(matrix.components)) {
    if (!entry || typeof entry !== "object") {
      throw new Error(`Matrix entry for ${name} must be an object`);
    }
    if (!entry.interaction || !VALID_STATUSES.has(entry.interaction.status)) {
      throw new Error(`Invalid interaction.status for ${name}`);
    }
    if (
      !entry.accessibility ||
      !VALID_STATUSES.has(entry.accessibility.status)
    ) {
      throw new Error(`Invalid accessibility.status for ${name}`);
    }
    if (entry.visual && !VALID_STATUSES.has(entry.visual.status)) {
      throw new Error(`Invalid visual.status for ${name}`);
    }
  }
}

function normalizeInventory(components) {
  return components
    .filter((component) => component?.tagName?.startsWith("gds-"))
    .map((component) => ({
      tagName: component.tagName,
      className: component.className,
      description: component.description ?? "",
      isFormControl: Boolean(component.isFormControl),
      isIconComponent: Boolean(component.isIconComponent),
      isLinkComponent: Boolean(component.isLinkComponent),
      isCheckboxComponent: Boolean(component.isCheckboxComponent),
      subcomponents: Array.isArray(component.subcomponents)
        ? component.subcomponents.map((sub) => sub.tagName)
        : [],
    }))
    .sort((a, b) => a.tagName.localeCompare(b.tagName));
}

async function loadComponentInventoryFromMcpFile() {
  const raw = await readFile(COMPONENTS_PATH, "utf8");
  const parsed = JSON.parse(raw);
  const components = parsed?.components;
  if (!Array.isArray(components)) {
    throw new Error("MCP components.json missing components array");
  }

  return components.map((component) => ({
    tagName: component.tagName || component.name,
    className: component.className || "",
    description: component.description ?? "",
    isFormControl: false,
    isIconComponent: false,
    isLinkComponent: false,
    isCheckboxComponent: false,
    subcomponents: [],
  }));
}

function pickComponentNameList(args, inventoryTagNames) {
  if (args.allComponents) return inventoryTagNames;
  if (Array.isArray(args.components) && args.components.length) {
    return args.components;
  }
  return [];
}

function applyInventoryInit({ matrix, inventory, fileIndex }) {
  const inventorySet = new Set(inventory.map((c) => c.tagName));
  const stats = {
    added: 0,
    updatedPaths: 0,
    markedDiscontinued: 0,
    clearedDiscontinued: 0,
  };

  if (!matrix.components || typeof matrix.components !== "object") {
    matrix.components = {};
  }

  for (const component of inventory) {
    const name = component.tagName;
    const existingRaw = matrix.components[name];
    const existed = Boolean(existingRaw);
    const entry = ensureEntryShape(existingRaw);

    if (!existed) stats.added++;

    if (entry.status === "discontinued") {
      delete entry.status;
      stats.clearedDiscontinued++;
    }

    if (!isNonEmptyString(entry.testbedPage)) {
      const p = fileIndex.testbedPages[name];
      if (isNonEmptyString(p)) {
        entry.testbedPage = p;
        stats.updatedPaths++;
      }
    }

    const suggested = fileIndex.suggestedSpec[name];
    if (!isNonEmptyString(entry.testSpec) && isNonEmptyString(suggested)) {
      entry.testSpec = suggested;
      stats.updatedPaths++;
    }

    matrix.components[name] = entry;
  }

  for (const [name, entryRaw] of Object.entries(matrix.components)) {
    if (inventorySet.has(name)) continue;
    if (!entryRaw || typeof entryRaw !== "object") continue;
    if (entryRaw.status !== "discontinued") {
      entryRaw.status = "discontinued";
      stats.markedDiscontinued++;
    }
    // Keep entry shape intact for any tools that expect category sections.
    matrix.components[name] = ensureEntryShape(entryRaw);
    matrix.components[name].status = "discontinued";
  }

  return stats;
}

function specEntryForFile(fileName) {
  const generatedMatch = /^([^.]+)\.([^.]+)\.generated\.spec\.ts$/.exec(
    fileName,
  );
  if (generatedMatch) {
    const short = generatedMatch[1];
    const category = generatedMatch[2];
    return {
      componentName: `gds-${short}`,
      category,
      generated: true,
    };
  }

  const canonicalMatch = /^([^.]+)\.spec\.ts$/.exec(fileName);
  if (canonicalMatch) {
    const short = canonicalMatch[1];
    return {
      componentName: `gds-${short}`,
      category: "canonical",
      generated: false,
    };
  }

  return null;
}

async function buildFileIndex() {
  const testbedDir = new URL("../testbed/components", import.meta.url);
  const specsDir = new URL("../test/specs/components", import.meta.url);

  const testbedPages = {};
  const specsByComponent = {};
  const suggestedSpec = {};

  for (const name of await readdir(testbedDir)) {
    if (!name.endsWith(".ts")) continue;
    const short = name.replace(/\.ts$/, "");
    const componentName = `gds-${short}`;
    testbedPages[componentName] = `testbed/components/${name}`;
  }

  const specNames = await readdir(specsDir);
  for (const name of specNames) {
    if (!name.endsWith(".ts")) continue;
    const entry = specEntryForFile(name);
    if (!entry) continue;
    if (!specsByComponent[entry.componentName]) {
      specsByComponent[entry.componentName] = [];
    }
    specsByComponent[entry.componentName].push({
      path: `test/specs/components/${name}`,
      category: entry.category,
      generated: entry.generated,
    });
  }

  for (const [componentName, specs] of Object.entries(specsByComponent)) {
    const interaction = specs.find((spec) => spec.category === "interaction");
    if (interaction) {
      suggestedSpec[componentName] = interaction.path;
      continue;
    }
    const generated = specs.find((spec) => spec.generated);
    if (generated) {
      suggestedSpec[componentName] = generated.path;
      continue;
    }
    const canonical = specs.find((spec) => spec.category === "canonical");
    if (canonical) {
      suggestedSpec[componentName] = canonical.path;
      continue;
    }
    const first = specs[0];
    if (first) suggestedSpec[componentName] = first.path;
  }

  return { testbedPages, specsByComponent, suggestedSpec };
}

function buildAgentContext({ inventory, fileIndex, matrix, applyMode }) {
  return `Context payload (JSON):
${JSON.stringify(
  {
    applyMode,
    inventory,
    testbedPages: fileIndex.testbedPages,
    specsByComponent: fileIndex.specsByComponent,
    suggestedSpec: fileIndex.suggestedSpec,
    matrixSnapshot: matrix,
    schema: {
      statuses: Array.from(VALID_STATUSES),
      requiredTopLevel: ["version", "lastUpdated", "greenCoreVersion"],
      requiredEntry: [
        "category",
        "testbedPage",
        "testSpec",
        "interaction",
        "accessibility",
        "coverage_comment",
      ],
      requiredSections: {
        interaction: [
          "status",
          "interactions",
          "events",
          "states",
          "keyboardNav",
          "validation",
          "edgeCases",
        ],
        accessibility: ["status", "checks"],
        visual: ["status", "snapshots"],
      },
    },
  },
  null,
  2,
)}
`;
}

function buildComponentAgentContext({
  componentName,
  inventoryByTag,
  fileIndex,
  matrixEntry,
}) {
  const inv = inventoryByTag[componentName] ?? null;
  const specs = fileIndex.specsByComponent[componentName] ?? [];
  return `Context payload (JSON):\n${JSON.stringify(
    {
      componentName,
      inventory: inv,
      discovered: {
        testbedPage: fileIndex.testbedPages[componentName] ?? "",
        specs,
        suggestedSpec: fileIndex.suggestedSpec[componentName] ?? "",
      },
      currentEntry: matrixEntry ?? null,
      schema: {
        allowedCategoryStatuses: Array.from(VALID_STATUSES),
        requiredSections: {
          interaction: [
            "status",
            "interactions",
            "events",
            "states",
            "keyboardNav",
            "validation",
            "edgeCases",
          ],
          accessibility: ["status", "checks"],
          visual: ["status", "snapshots"],
        },
      },
    },
    null,
    2,
  )}\n`;
}

function isPathInside(root, target) {
  const rel = path.relative(root, target);
  return !!rel && !rel.startsWith("..") && !path.isAbsolute(rel);
}

function assertReadablePath(filePath, allowedRoots) {
  const resolved = path.isAbsolute(filePath)
    ? path.resolve(filePath)
    : path.resolve(REPO_ROOT, filePath);
  for (const root of allowedRoots) {
    if (isPathInside(root, resolved)) return resolved;
  }
  throw new Error(`Read denied for path: ${filePath}`);
}

function safeJsonParse(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch {
    return null;
  }
}

function mergeComponentEntry({ componentName, current, incoming, discovered }) {
  const base = ensureEntryShape(current);
  const next = ensureEntryShape({
    ...base,
    ...(incoming && typeof incoming === "object" ? incoming : {}),
  });

  // Prefer existing explicit references; otherwise use discovered or incoming.
  if (
    !isNonEmptyString(base.testbedPage) &&
    isNonEmptyString(discovered?.testbedPage)
  ) {
    next.testbedPage = discovered.testbedPage;
  }
  if (
    !isNonEmptyString(base.testSpec) &&
    isNonEmptyString(discovered?.suggestedSpec)
  ) {
    next.testSpec = discovered.suggestedSpec;
  }

  // Preserve top-level status if present (e.g., discontinued), but clear it for active inventory components.
  if (next.status === "discontinued") {
    delete next.status;
  }

  return next;
}

async function main(args) {
  const runStartedAt = new Date().toISOString();
  const greenCoreVersion = await readGreenCoreVersionFromPackageJson();
  const matrix = await readMatrixOrDefault({ greenCoreVersion });
  const before = stableJson(matrix);

  if (args.verbose) {
    console.log("Matrix sync (agent): starting");
    console.log(`- apply: ${args.apply}`);
    console.log(`- greenCoreVersion: ${greenCoreVersion || "(unknown)"}`);
  }

  const components = await loadComponentInventoryFromMcpFile();
  const inventory = normalizeInventory(components);
  const fileIndex = await buildFileIndex();
  const inventoryByTag = Object.fromEntries(
    inventory.map((c) => [c.tagName, c]),
  );
  const inventoryTagNames = inventory.map((c) => c.tagName);

  const allowedRoots = [
    path.resolve(new URL("../test", import.meta.url).pathname),
    path.resolve(new URL("../testbed", import.meta.url).pathname),
  ];

  let wroteMatrix = false;
  const tools = [
    defineTool("read_text", {
      description: "Read a text file from the test or testbed directories",
      parameters: {
        type: "object",
        properties: {
          filePath: { type: "string" },
        },
        required: ["filePath"],
      },
      handler: async ({ filePath }) => {
        const resolved = assertReadablePath(filePath, allowedRoots);
        return await readFile(resolved, "utf8");
      },
    }),
  ];

  const runInitPhase = args.initOnly || (!args.initOnly && !args.agentOnly);
  const runAgentPhase = args.agentOnly || (!args.initOnly && !args.agentOnly);

  const initStats = runInitPhase
    ? applyInventoryInit({ matrix, inventory, fileIndex })
    : {
        added: 0,
        updatedPaths: 0,
        markedDiscontinued: 0,
        clearedDiscontinued: 0,
      };

  const targetComponents = pickComponentNameList(args, inventoryTagNames)
    .filter((name) => typeof name === "string" && name.trim().length)
    .map((name) => name.trim());

  const prompt = buildMatrixSyncComponentAgentPrompt();

  vprintln(args.verbose, "Loading Green MCP server config");
  const greenMcp = await loadGreenMcpServerConfig();
  const copilotCliArgs = getCopilotCliArgs();
  const client = new CopilotClient(
    copilotCliArgs ? { cliArgs: copilotCliArgs } : {},
  );

  try {
    const model = getAgentModel(AGENT_KEYS.MATRIX_SYNC);
    process.stdout.write(
      `[agent] Coverage Matrix Maintainer model: ${model ?? "default"}\n`,
    );

    const session = await client.createSession({
      streaming: true,
      tools,
      mcpServers: { green: greenMcp },
      ...(model ? { model } : {}),
      customAgents: [
        {
          name: "coverage-matrix-maintainer",
          displayName: "Coverage Matrix Maintainer",
          description: "Updates coverage-matrix based on repo state and MCP",
          prompt,
        },
      ],
    });

    let streamed = "";
    if (args.verbose) {
      session.on((event) => {
        if (event.type === "assistant.message_delta") {
          streamed += event.data.deltaContent;
          process.stdout.write(event.data.deltaContent);
        }
        if (event.type === "assistant.message") {
          if (event.data.content) {
            streamed += event.data.content;
            process.stdout.write(event.data.content);
            // Also write out toolRequest
            if (event.data.toolRequest) {
              process.stdout.write(
                `\n[toolRequest] ${event.data.toolRequest.toolName} with input ${JSON.stringify(
                  event.data.toolRequest.input,
                )}\n`,
              );
            }
          }
        }
        if (event.type === "tool.execution_start") {
          process.stdout.write(
            `\n[tool.execution_start] ${event.data.toolName}\n`,
          );
        }
        if (event.type === "tool.execution_complete") {
          process.stdout.write(
            `\n[tool.execution_complete] ${event.data.success}\n`,
          );
        }
      });
    }

    if (runAgentPhase) {
      if (!targetComponents.length) {
        console.warn(
          "Matrix sync: agent phase skipped (no --components and no --all-components)",
        );
      }

      for (const componentName of targetComponents) {
        if (!componentName.startsWith("gds-")) {
          console.warn(
            `Matrix sync: skipping invalid component name (expected gds-*): ${componentName}`,
          );
          continue;
        }
        const currentEntry = matrix.components?.[componentName] ?? null;
        if (currentEntry?.status === "discontinued") {
          vprintln(
            args.verbose,
            `Skipping discontinued component: ${componentName}`,
          );
          continue;
        }

        const componentContext = buildComponentAgentContext({
          componentName,
          inventoryByTag,
          fileIndex,
          matrixEntry: currentEntry,
        });

        streamed = "";
        vprintln(args.verbose, `Agent update for ${componentName}`);
        const response = await session.sendAndWait(
          {
            prompt: `${componentContext}\nTask: Update ONLY this component entry.`,
          },
          5 * 60 * 1000,
        );

        const content = streamed || response?.data?.content || "";
        const parsed = safeJsonParse(content);
        const returnedName = parsed?.componentName;
        const returnedEntry = parsed?.entry;

        if (returnedName !== componentName || !returnedEntry) {
          console.warn(
            `Matrix sync: agent output invalid for ${componentName} (expected {componentName, entry})`,
          );
          if (args.print && !args.apply) {
            process.stdout.write(String(content));
            process.stdout.write("\n");
          }
          continue;
        }

        const discovered = {
          testbedPage: fileIndex.testbedPages[componentName] ?? "",
          suggestedSpec: fileIndex.suggestedSpec[componentName] ?? "",
        };

        matrix.components[componentName] = mergeComponentEntry({
          componentName,
          current: matrix.components[componentName],
          incoming: returnedEntry,
          discovered,
        });
      }
    }
  } finally {
    vprintln(args.verbose, "Stopping Copilot client");
    await client.stop();
  }

  // Always keep these fields aligned to the current run.
  matrix.greenCoreVersion = greenCoreVersion || matrix.greenCoreVersion || "";
  matrix.lastUpdated = isoDate();

  // Finalize: validate basic shape and optionally write once.
  validateMatrixShape(matrix);
  if (args.apply) {
    await writeFile(MATRIX_PATH, stableJson(matrix), "utf8");
    wroteMatrix = true;
  }

  const after = await readMatrixOrDefault({ greenCoreVersion });
  const report = {
    workflow: "matrix-sync-agent",
    startedAt: runStartedAt,
    finishedAt: new Date().toISOString(),
    apply: args.apply,
    verbose: args.verbose,
    wroteMatrix,
    inventoryCount: inventory.length,
    matrixComponents: Object.keys(after.components ?? {}).length,
    phases: {
      init: runInitPhase,
      agent: runAgentPhase,
    },
    initStats,
    targets: {
      allComponents: args.allComponents,
      components: targetComponents,
    },
  };

  if (args.generateReport) {
    vprintln(args.verbose, "Writing report");
    const reportPath = await writeReportJson(report);
    if (args.verbose) console.log(`Matrix sync: wrote report ${reportPath}`);
  }

  if (args.print && !args.apply) {
    if (targetComponents.length) {
      const subset = {};
      for (const name of targetComponents) {
        if (after.components?.[name]) subset[name] = after.components[name];
      }
      process.stdout.write(
        stableJson({
          version: after.version,
          lastUpdated: after.lastUpdated,
          greenCoreVersion: after.greenCoreVersion,
          components: subset,
        }),
      );
    } else {
      process.stdout.write(stableJson(after));
    }
  }

  if (args.apply) {
    console.log("Matrix sync: completed");
  } else if (!args.print) {
    console.log("Matrix sync: dry run complete (no write)");
  }

  if (before === stableJson(after) && args.apply) {
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
