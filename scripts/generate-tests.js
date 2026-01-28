import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { readFile, writeFile } from "node:fs/promises";
import { readMatrix, getMatrixEntry, writeMatrix } from "./matrix-utils.js";

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

function parseArgs(argv) {
  const args = {
    // Backwards compatible single-target flags
    component: null,
    category: null,

    // New multi-target focus flags
    components: [],
    categories: [],

    // Scaffolds
    scaffolds: true,
    scaffoldMode: "create-missing", // keep | create-missing | update

    // Process lifecycle
    forceExit: true,

    force: false,
  };

  const positional = argv.filter((a) => !a.startsWith("--"));
  if (positional[0]) args.component = positional[0];

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--component" && argv[i + 1]) args.component = argv[++i];
    if (a === "--category" && argv[i + 1]) args.category = argv[++i];
    if (a === "--components" && argv[i + 1]) {
      const raw = String(argv[++i]);
      args.components.push(
        ...raw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
    }
    if (a === "--categories" && argv[i + 1]) {
      const raw = String(argv[++i]);
      args.categories.push(
        ...raw
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
    }
    if (a === "--tier") {
      throw new Error(
        "--tier is no longer supported. Use --category <interaction|accessibility|visual>.",
      );
    }
    if (a === "--force") args.force = true;
    if (a === "--scaffolds") args.scaffolds = true;
    if (a === "--no-scaffolds") args.scaffolds = false;
    if (a === "--scaffold-mode" && argv[i + 1]) args.scaffoldMode = argv[++i];
    if (a === "--force-exit") args.forceExit = true;
    if (a === "--no-force-exit") args.forceExit = false;
  }

  // Normalize: if only singular flags were provided, populate plural arrays.
  if (args.components.length === 0 && args.component)
    args.components = [args.component];
  if (args.categories.length === 0 && args.category)
    args.categories = [args.category];

  // De-dupe.
  args.components = Array.from(new Set(args.components));
  args.categories = Array.from(new Set(args.categories));

  return args;
}

const cliArgs = parseArgs(process.argv.slice(2));

function validateTargets({ components, categories }) {
  const allowedCategories = ["interaction", "accessibility", "visual"];

  for (const c of categories) {
    if (!allowedCategories.includes(c)) {
      throw new Error(
        `Invalid category '${c}'. Expected one of: ${allowedCategories.join(", ")}`,
      );
    }
  }

  for (const comp of components) {
    if (typeof comp !== "string" || !comp.startsWith("gds-")) {
      throw new Error(
        `Invalid component '${String(comp)}'. Expected a tag name starting with 'gds-' (e.g. gds-button).`,
      );
    }
  }
}

function validateScaffoldOptions({ scaffolds, scaffoldMode }) {
  if (!scaffolds) return;
  const allowed = ["keep", "create-missing", "update"];
  if (!allowed.includes(scaffoldMode)) {
    throw new Error(
      `Invalid --scaffold-mode '${scaffoldMode}'. Expected one of: ${allowed.join(", ")}`,
    );
  }
}

function componentSlug(componentName) {
  return componentName.replace(/^gds-/, "");
}

function humanTitle(componentName) {
  return componentSlug(componentName)
    .split("-")
    .filter(Boolean)
    .map((p) => titleCase(p))
    .join(" ");
}

function showcaseTag(componentName) {
  return `${componentName}-showcase`;
}

function showcaseImportPath(componentName) {
  return `./${componentSlug(componentName)}.js`;
}

function expectedShowcaseFileUrl(componentName) {
  return new URL(
    `../testbed/components/${componentSlug(componentName)}.ts`,
    import.meta.url,
  );
}

async function readTextOrNull(url) {
  try {
    return await readFile(url, "utf8");
  } catch {
    return null;
  }
}

async function upsertRegistryEntry({ componentName, title }) {
  const registryUrl = new URL(
    "../testbed/components/registry.ts",
    import.meta.url,
  );
  const raw = await readFile(registryUrl, "utf8");

  const name = componentName;
  const elementTag = showcaseTag(componentName);
  const importPath = showcaseImportPath(componentName);

  if (raw.includes(`name: "${name}"`)) {
    return { updated: false, reason: "already-present" };
  }

  const insertAfter =
    "export const COMPONENT_SHOWCASES: ComponentShowcaseEntry[] = [";
  const idx = raw.indexOf(insertAfter);
  if (idx < 0) {
    throw new Error("Could not find COMPONENT_SHOWCASES array in registry.ts");
  }
  const afterIdx = idx + insertAfter.length;

  const entry = `\n  {\n    name: "${name}",\n    title: "${title}",\n    elementTag: "${elementTag}",\n    load: () => import("${importPath}"),\n  },`;

  // Insert just before the closing '];' to keep formatting stable.
  const endIdx = raw.indexOf("];", afterIdx);
  if (endIdx < 0)
    throw new Error("Could not find end of COMPONENT_SHOWCASES array");
  const next = raw.slice(0, endIdx) + entry + "\n" + raw.slice(endIdx);

  await writeFile(registryUrl, next, "utf8");
  return { updated: true };
}

function validateShowcaseSource({ componentName, source }) {
  const tag = showcaseTag(componentName);
  if (typeof source !== "string" || !source.trim()) {
    throw new Error("Showcase source must be a non-empty string");
  }
  if (!source.includes('from "lit"')) {
    throw new Error("Showcase source must be a LitElement-based component");
  }
  if (
    !source.includes(`@customElement(\"${tag}\")`) &&
    !source.includes(`@customElement('${tag}')`) &&
    !source.includes(`@customElement(\"${tag}\"`) &&
    !source.includes(`@customElement(\"${tag}`)
  ) {
    throw new Error(`Showcase source must register @customElement('${tag}')`);
  }
  if (!source.includes("@sebgroup/green-core/everything")) {
    throw new Error(
      "Showcase source must import '@sebgroup/green-core/everything' to ensure components are registered",
    );
  }
}

function titleCase(word) {
  if (!word) return word;
  return word[0].toUpperCase() + word.slice(1);
}

function buildAgentPrompt({ componentName, category }) {
  return `You are an expert test engineer for the Green Design System testbed.
Your task is to generate comprehensive WebDriverIO tests for the ${componentName} component.

Follow project conventions:
- Use WebDriverIO v9 syntax
- Import from '@wdio/globals'
- Prefer selectors: tag name (e.g. gds-button) OR [gds-element='gds-button']
- Navigate using: \`testbedUrl('/component/${componentName}')\`
- Output ONLY TypeScript code for the spec file.

When possible, use helpers from 'test/helpers' (ComponentPage, waitForState, Keys, snapshotWithRetry).
Always use the shared helper 'test/helpers/testbed-url' for navigation.

You have access to Green MCP tools via the MCP server named 'green'. Use them to get up-to-date component docs.
You MUST call green.get_component_docs with framework 'web-component' before writing tests.

You MUST call the provided tools to fetch requirements and examples before writing code.`;
}

async function loadTemplates() {
  const paths = [
    new URL("../test/templates/interactive.template.ts", import.meta.url),
    new URL("../test/templates/form-control.template.ts", import.meta.url),
  ];

  const templates = [];
  for (const p of paths) {
    try {
      // eslint-disable-next-line no-await-in-loop
      templates.push(await readFile(p, "utf8"));
    } catch {
      // ignore
    }
  }

  return templates.join("\n\n");
}

async function ensureDirExistsFor(pathUrl) {
  // no-op placeholder; writing into existing folders in this repo
  void pathUrl;
}

async function generateTests({ componentName, category, force }) {
  if (!componentName) throw new Error("Missing component name");
  if (!category) throw new Error("Missing --category");
  if (!["interaction", "accessibility", "visual"].includes(category)) {
    throw new Error("--category must be interaction, accessibility, or visual");
  }

  const matrix = await readMatrix();
  const entry = getMatrixEntry(matrix, componentName);
  const categoryKey = category;
  const categoryLabel = titleCase(category);

  if (!entry) throw new Error(`${componentName} not found in coverage matrix`);
  if (!entry[categoryKey]) {
    throw new Error(
      `${componentName} missing '${categoryKey}' section in matrix`,
    );
  }

  if (entry[categoryKey].status === "complete" && !force) {
    console.log(
      `${componentName} ${categoryKey} already complete (use --force to regenerate)`,
    );
    return;
  }

  const templates = await loadTemplates();

  const tools = [
    defineTool("get_coverage_requirements", {
      description:
        "Get test coverage requirements for a component category from coverage-matrix.json",
      parameters: {
        type: "object",
        properties: {
          componentName: { type: "string" },
          category: {
            type: "string",
            enum: ["interaction", "accessibility", "visual"],
          },
        },
        required: ["componentName", "category"],
      },
      handler: async ({ componentName: c, category: cat }) => {
        const m = await readMatrix();
        const e = getMatrixEntry(m, c);
        return e?.[cat];
      },
    }),
    defineTool("get_test_patterns", {
      description: "Get example test patterns used in this repo",
      parameters: { type: "object", properties: {} },
      handler: async () => ({ templates }),
    }),
  ];

  const client = new CopilotClient();
  let generated = "";
  try {
    const greenMcp = await loadGreenMcpServerConfig();
    const session = await client.createSession({
      model: "gpt-5.2",
      streaming: true,
      tools,
      mcpServers: {
        green: greenMcp,
      },
      customAgents: [
        {
          name: "test-generator",
          displayName: "Test Generator",
          description: "Generates WebDriverIO tests for Green components",
          prompt: buildAgentPrompt({ componentName, category }),
        },
      ],
    });

    session.on((event) => {
      if (event.type === "assistant.message_delta") {
        generated += event.data.deltaContent;
        process.stdout.write(event.data.deltaContent);
      }

      if (event.type === "tool.call_start") {
        process.stdout.write(`\n[tool] ${event.data.toolName}\n`);
      }
    });

    const prompt = `Generate ${categoryLabel} tests for ${componentName}.

Context:
- Coverage requirements: call get_coverage_requirements
- Component docs: call green.get_component_docs
- Test patterns: call get_test_patterns

Output requirements:
- Output ONLY TypeScript code
- Use a single describe() for '${componentName} ${categoryLabel} /'
- Include a before() hook navigating to testbedUrl('/component/${componentName}')
- Use async/await
- Prefer stable selectors (ids in testbed pages when present)
`;

    await session.sendAndWait({ prompt });
  } finally {
    await client.stop();
  }

  const outPath = new URL(
    `../test/specs/components/${componentName.replace(/^gds-/, "")}.${category}.generated.spec.ts`,
    import.meta.url,
  );

  await ensureDirExistsFor(outPath);
  await writeFile(outPath, generated, "utf8");

  // mark as review (human-in-the-loop)
  entry[categoryKey].status = "review";
  entry.lastUpdated = new Date().toISOString().slice(0, 10);
  matrix.lastUpdated = entry.lastUpdated;
  await writeMatrix(matrix);

  console.log(`\n\n✓ Generated: ${outPath.pathname}`);
}

async function generateScaffoldAndRegister({
  componentName,
  categories,
  scaffoldMode,
  verbose,
}) {
  const fileUrl = expectedShowcaseFileUrl(componentName);
  const existing = await readTextOrNull(fileUrl);
  const title = humanTitle(componentName);

  if (existing && scaffoldMode === "keep") {
    if (verbose) console.log(`Scaffold: keeping existing ${fileUrl.pathname}`);
    return {
      createdOrUpdated: false,
      filePath: fileUrl.pathname,
      registry: "skipped",
    };
  }

  if (existing && scaffoldMode === "create-missing") {
    if (verbose) console.log(`Scaffold: already exists ${fileUrl.pathname}`);
    return {
      createdOrUpdated: false,
      filePath: fileUrl.pathname,
      registry: "skipped",
    };
  }

  // Agentic scaffold creation/update via MCP docs.
  const client = new CopilotClient();
  try {
    const greenMcp = await loadGreenMcpServerConfig();

    const tools = [
      defineTool("get_existing_showcase", {
        description:
          "Get the current testbed showcase scaffold source for a component (if it exists)",
        parameters: {
          type: "object",
          properties: { componentName: { type: "string" } },
          required: ["componentName"],
        },
        handler: async ({ componentName: c }) => {
          const url = expectedShowcaseFileUrl(c);
          const content = await readTextOrNull(url);
          return {
            exists: Boolean(content),
            filePath: url.pathname,
            elementTag: showcaseTag(c),
            title: humanTitle(c),
            source: content,
          };
        },
      }),
      defineTool("upsert_showcase", {
        description:
          "Create or update the testbed showcase scaffold for a component. Source must be a full .ts file defining the showcase custom element tag.",
        parameters: {
          type: "object",
          properties: {
            componentName: { type: "string" },
            source: { type: "string" },
          },
          required: ["componentName", "source"],
        },
        handler: async ({ componentName: c, source }) => {
          validateShowcaseSource({ componentName: c, source });
          const url = expectedShowcaseFileUrl(c);
          await writeFile(url, source, "utf8");
          return { wrote: true, filePath: url.pathname };
        },
      }),
      defineTool("upsert_registry_entry", {
        description:
          "Ensure the component showcase is registered in testbed/components/registry.ts",
        parameters: {
          type: "object",
          properties: {
            componentName: { type: "string" },
            title: { type: "string" },
          },
          required: ["componentName", "title"],
        },
        handler: async ({ componentName: c, title: t }) =>
          upsertRegistryEntry({ componentName: c, title: t }),
      }),
      defineTool("get_coverage_requirements_union", {
        description:
          "Get the union of coverage requirements for multiple categories for a component from coverage-matrix.json",
        parameters: {
          type: "object",
          properties: {
            componentName: { type: "string" },
            categories: {
              type: "array",
              items: {
                type: "string",
                enum: ["interaction", "accessibility", "visual"],
              },
            },
          },
          required: ["componentName", "categories"],
        },
        handler: async ({ componentName: c, categories: cats }) => {
          const m = await readMatrix();
          const e = getMatrixEntry(m, c);
          const out = {};
          for (const cat of cats) {
            out[cat] = e?.[cat] ?? null;
          }
          return out;
        },
      }),
    ];

    const scaffoldPrompt = `You are an expert test engineer building a TEST SCAFFOLD (showcase page) for ${componentName}.

Goal:
- Create/update a LitElement-based showcase component for the testbed so WebDriverIO tests can reliably interact with ${componentName}.

Requirements:
- You MUST call green.get_component_docs with framework 'web-component' before writing code.
- You MUST call get_coverage_requirements_union to understand what interactions/states need coverage.
- You MUST ensure the scaffold contains stable selectors:
  - Add explicit id attributes for each fixture you plan to test.
  - Prefer a small number of fixtures that can cover multiple test cases.
  - If different combinations are needed (e.g. disabled + long label + icon), add additional fixtures, but avoid duplication.
- Use Green layout/typography components (gds-flex, gds-text) and avoid custom CSS.

Implementation conventions (match existing scaffolds):
- File path: testbed/components/${componentSlug(componentName)}.ts
- custom element tag: ${showcaseTag(componentName)}
- include: import '@sebgroup/green-core/everything'
- createRenderRoot() { return this; }
- render() returns lit html from '@sebgroup/green-core/scoping'

Process:
1) Call get_existing_showcase.
2) If scaffold exists, update it to add missing fixtures needed for the requested categories.
3) Write the full updated file via upsert_showcase.
4) Ensure registry entry exists via upsert_registry_entry.

Output:
- Do NOT print the full TypeScript file in the chat.
- Perform the write via upsert_showcase tool.
`;

    const session = await client.createSession({
      model: "gpt-5.2",
      streaming: true,
      tools,
      mcpServers: { green: greenMcp },
      customAgents: [
        {
          name: "scaffold-generator",
          displayName: "Scaffold Generator",
          description:
            "Creates/updates testbed showcase scaffolds for components",
          prompt: scaffoldPrompt,
        },
      ],
    });

    session.on((event) => {
      if (event.type === "assistant.message_delta")
        process.stdout.write(event.data.deltaContent);
      if (event.type === "tool.call_start")
        process.stdout.write(`\n[tool] ${event.data.toolName}\n`);
    });

    await session.sendAndWait({
      prompt: `Create or update the showcase scaffold for ${componentName} covering categories: ${categories.join(", ")}.`,
    });
  } finally {
    await client.stop();
  }

  return {
    createdOrUpdated: true,
    filePath: fileUrl.pathname,
    registry: "upserted",
  };
}

async function main(args) {
  if (args.components.length === 0 || args.categories.length === 0) {
    console.error(
      "Usage: node scripts/generate-tests.js --components <gds-button[,gds-input...]> --categories <interaction[,accessibility|visual...]> [--force]",
    );
    console.error(
      "Backwards compatible: node scripts/generate-tests.js <gds-component> --category <interaction|accessibility|visual> [--force]",
    );
    process.exitCode = 1;
    return;
  }

  validateTargets({ components: args.components, categories: args.categories });
  validateScaffoldOptions({
    scaffolds: args.scaffolds,
    scaffoldMode: args.scaffoldMode,
  });

  // Scaffold generation should run once per component for the selected categories.
  if (args.scaffolds) {
    for (const componentName of args.components) {
      // eslint-disable-next-line no-await-in-loop
      await generateScaffoldAndRegister({
        componentName,
        categories: args.categories,
        scaffoldMode: args.scaffoldMode,
        verbose: true,
      });
    }
  }

  const failures = [];
  for (const componentName of args.components) {
    for (const category of args.categories) {
      // eslint-disable-next-line no-await-in-loop
      try {
        // eslint-disable-next-line no-await-in-loop
        await generateTests({ componentName, category, force: args.force });
      } catch (err) {
        failures.push({
          componentName,
          category,
          error: String(err?.message ?? err),
        });
        console.error(
          `\n✗ Failed: ${componentName} ${category} (${String(err?.message ?? err)})\n`,
        );
      }
    }
  }

  if (failures.length) {
    console.error(`\nGenerator completed with ${failures.length} failure(s).`);
    process.exitCode = 1;
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
