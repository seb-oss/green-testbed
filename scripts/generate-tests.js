import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { readMatrix, getMatrixEntry, writeMatrix } from "./matrix-utils.js";
import {
  AGENT_KEYS,
  buildFixModePrompt,
  buildScaffoldGeneratorPrompt,
  buildTestGeneratorAgentPrompt,
  getCopilotCliArgs,
  getAgentModel,
} from "./agent-config.js";

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

    fixRequestPath: null,
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

    if (a === "--fix-request" && argv[i + 1]) {
      args.fixRequestPath = String(argv[++i]);
    }
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
  return buildTestGeneratorAgentPrompt({ componentName, category });
}

async function loadTestGeneratorConstitution() {
  const raw = await readFile(
    new URL("../docs/test-generator-constitution.md", import.meta.url),
    "utf8",
  );
  return raw;
}

function stripMarkdownCodeFences(text) {
  // Remove standalone markdown fence lines like ``` or ```ts
  return String(text ?? "").replaceAll(/^\s*```[a-zA-Z0-9_-]*\s*$/gm, "");
}

function normalizeGeneratedTsSource(source) {
  let next = stripMarkdownCodeFences(source);

  // Strip everything before the first line that looks like TS code.
  const lines = next.split(/\r?\n/);
  const firstCodeLineIdx = lines.findIndex((line) =>
    /^\s*(import\b|export\b|describe\s*\(|const\b|let\b|var\b|function\b|\/\*|\/\/|type\b|interface\b)/.test(
      line,
    ),
  );
  if (firstCodeLineIdx > 0) {
    next = lines.slice(firstCodeLineIdx).join("\n");
  }

  next = stripMarkdownCodeFences(next).trimStart();
  if (next && !next.endsWith("\n")) next += "\n";
  return next;
}

function normalizeGeneratedSpecSource({ source, outPathUrl }) {
  let next = normalizeGeneratedTsSource(source);
  const pathname = String(outPathUrl?.pathname ?? "").replaceAll("\\", "/");

  // Specs under test/specs/components must import helpers from ../../helpers.
  if (pathname.includes("/test/specs/components/")) {
    next = next.replaceAll(
      /from\s+(["'])\.\.\/helpers\//g,
      "from $1../../helpers/",
    );
    next = next.replaceAll(
      /from\s+(["'])\.\/helpers\//g,
      "from $1../../helpers/",
    );
  }

  return next;
}

function basicSanityForTestFile(source) {
  if (!/\bdescribe\s*\(/.test(source)) {
    throw new Error("Refusing to write test file with no describe() block");
  }
  if (!/\bexpect\s*\(/.test(source)) {
    throw new Error("Refusing to write test file with no expect() assertions");
  }

  // Constitution enforcement (lightweight heuristics).
  // Use WebDriver interactions; do not simulate keyboard/mouse via dispatchEvent().
  if (/dispatchEvent\(\s*new\s+KeyboardEvent\b/.test(source)) {
    throw new Error(
      "Refusing to write test file that simulates keyboard via dispatchEvent(new KeyboardEvent). Use browser.keys() instead.",
    );
  }
  if (/dispatchEvent\(\s*new\s+MouseEvent\b/.test(source)) {
    throw new Error(
      "Refusing to write test file that simulates mouse via dispatchEvent(new MouseEvent). Use element.click() or pointer actions instead.",
    );
  }

  // Shadow DOM is allowed only with an explicit opt-in marker.
  if (source.includes("shadowRoot") && !source.includes("ALLOW_SHADOW_DOM")) {
    throw new Error(
      "Refusing to write test file that uses shadowRoot without explicit ALLOW_SHADOW_DOM marker. Prefer host-level assertions/selectors.",
    );
  }
}

async function runFixFromRequest({ fixRequestPath }) {
  if (!fixRequestPath) throw new Error("Missing --fix-request");
  const root = process.cwd();
  const absReq = path.resolve(root, fixRequestPath);

  const raw = await readFile(absReq, "utf8");
  const req = JSON.parse(raw);

  const componentName = String(req?.componentName ?? "");
  const category = String(req?.category ?? "");
  const attempt = Number(req?.attempt ?? 0);
  const failureText = String(req?.failureText ?? "");
  const specPath = String(req?.specPath ?? "");
  const scaffoldPath = req?.scaffoldPath ? String(req.scaffoldPath) : "";
  const responsePath = req?.responsePath ? String(req.responsePath) : "";

  if (!componentName.startsWith("gds-")) {
    throw new Error(`Invalid fix request componentName: ${componentName}`);
  }
  if (!["interaction", "accessibility", "visual"].includes(category)) {
    throw new Error(`Invalid fix request category: ${category}`);
  }
  if (!specPath) throw new Error("Fix request missing specPath");

  const copilotCliArgs = getCopilotCliArgs();
  const client = new CopilotClient(
    copilotCliArgs ? { cliArgs: copilotCliArgs } : {},
  );
  let wroteResponse = false;

  const allowedRoots = [
    path.join(root, "test"),
    path.join(root, "testbed"),
    path.join(root, "scripts"),
  ];

  const writeFixResponse = async (payload) => {
    if (!responsePath) return;
    const abs = path.resolve(root, responsePath);
    await writeFile(abs, JSON.stringify(payload, null, 2) + "\n", "utf8");
    wroteResponse = true;
  };

  const tools = [
    defineTool("get_test_constitution", {
      description:
        "Get the Test Generator Constitution (hard constraints for how tests must be written in this repo)",
      parameters: { type: "object", properties: {} },
      handler: async () => ({
        path: "docs/test-generator-constitution.md",
        content: await loadTestGeneratorConstitution(),
      }),
    }),
    defineTool("log_step", {
      description:
        "Write a progress update explaining what you are doing and why",
      parameters: {
        type: "object",
        properties: { message: { type: "string" } },
        required: ["message"],
      },
      handler: async ({ message }) => {
        process.stdout.write(`\n[fix] ${message}\n`);
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
        const abs = path.resolve(root, filePath);
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
        "Write a UTF-8 text file. Only generated specs and testbed scaffolds/registry are allowed.",
      parameters: {
        type: "object",
        properties: {
          filePath: { type: "string" },
          content: { type: "string" },
        },
        required: ["filePath", "content"],
      },
      handler: async ({ filePath, content }) => {
        const abs = path.resolve(root, filePath);

        const isGeneratedSpec =
          abs.includes(path.join("test", "specs", "components")) &&
          abs.endsWith(".generated.spec.ts");
        const isScaffold = abs.includes(path.join("testbed", "components"));
        const isRegistry = abs.endsWith(
          path.join("testbed", "components", "registry.ts"),
        );

        if (!isGeneratedSpec && !isScaffold && !isRegistry) {
          throw new Error(
            `Refusing to write '${filePath}'. Only generated specs and scaffolds/registry are allowed.`,
          );
        }

        const normalized = normalizeGeneratedTsSource(content);
        if (isGeneratedSpec) basicSanityForTestFile(normalized);
        await writeFile(abs, normalized, "utf8");
        return { wrote: true };
      },
    }),
    defineTool("write_fix_response", {
      description: "Write a JSON fix-response artifact",
      parameters: {
        type: "object",
        properties: { response: { type: "object" } },
        required: ["response"],
      },
      handler: async ({ response }) => {
        await writeFixResponse(response);
        return { wrote: Boolean(responsePath), responsePath };
      },
    }),
  ];

  const prompt = buildFixModePrompt({
    componentName,
    category,
    attempt,
    failureText,
    specPath,
    scaffoldPath,
  });

  try {
    const greenMcp = await loadGreenMcpServerConfig();
    const model = getAgentModel(AGENT_KEYS.TEST_GENERATOR_FIX);

    process.stdout.write(
      `[agent] Test Generator (fix mode) model: ${model ?? "default"}\n`,
    );

    const session = await client.createSession({
      streaming: true,
      tools,
      mcpServers: { green: greenMcp },
      ...(model ? { model } : {}),
    });

    session.on((event) => {
      if (event.type === "assistant.message_delta") {
        process.stdout.write(event.data.deltaContent);
      }
      if (event.type === "tool.call_start") {
        process.stdout.write(`\n[tool] ${event.data.toolName}\n`);
      }
    });

    await session.sendAndWait({ prompt }, 180_000);
  } finally {
    await client.stop();
  }

  if (responsePath && !wroteResponse) {
    await writeFixResponse({
      ok: false,
      componentName,
      category,
      attempt,
      reason: "no-fix-response-written",
    });
  }
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

  const outPath = new URL(
    `../test/specs/components/${componentName.replace(/^gds-/, "")}.${category}.generated.spec.ts`,
    import.meta.url,
  );

  // If a spec already exists and the matrix is not in a "pending"-like state, avoid regenerating unless forced.
  const skipStatuses = ["review", "validated", "blocked"];
  if (skipStatuses.includes(entry[categoryKey].status) && !force) {
    const existingSpec = await readTextOrNull(outPath);
    if (existingSpec) {
      console.log(
        `${componentName} ${categoryKey} already ${entry[categoryKey].status} (use --force to regenerate)`,
      );
      return;
    }
  }

  const templates = await loadTemplates();

  const tools = [
    defineTool("get_test_constitution", {
      description:
        "Get the Test Generator Constitution (hard constraints for how tests must be written in this repo)",
      parameters: { type: "object", properties: {} },
      handler: async () => ({
        path: "docs/test-generator-constitution.md",
        content: await loadTestGeneratorConstitution(),
      }),
    }),
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

  const copilotCliArgs = getCopilotCliArgs();
  const client = new CopilotClient(
    copilotCliArgs ? { cliArgs: copilotCliArgs } : {},
  );
  let generated = "";
  try {
    const greenMcp = await loadGreenMcpServerConfig();
    const model = getAgentModel(AGENT_KEYS.TEST_GENERATOR);

    process.stdout.write(
      `[agent] Test Generator model: ${model ?? "default"}\n`,
    );

    const session = await client.createSession({
      streaming: true,
      tools,
      mcpServers: {
        green: greenMcp,
      },
      ...(model ? { model } : {}),
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
  - Test Generator Constitution: call get_test_constitution and follow it
- Coverage requirements: call get_coverage_requirements
- Component docs: call green.get_component_docs
- Test patterns: call get_test_patterns

Output requirements:
- Output ONLY TypeScript code
- Use a single describe() for '${componentName} ${categoryLabel} /'
- Include a before() hook navigating to testbedUrl('/component/${componentName}')
- Use async/await
- Prefer stable selectors (ids in testbed pages when present)
- Add a short goal comment above each test, e.g.:
  /** Goal: verify that rank attribute accepts all valid values */
- Do NOT output markdown code fences
`;

    await session.sendAndWait({ prompt }, 180_000);
  } finally {
    await client.stop();
  }

  await ensureDirExistsFor(outPath);
  const normalized = normalizeGeneratedSpecSource({
    source: generated,
    outPathUrl: outPath,
  });
  await writeFile(outPath, normalized, "utf8");

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
  const copilotCliArgs = getCopilotCliArgs();
  const client = new CopilotClient(
    copilotCliArgs ? { cliArgs: copilotCliArgs } : {},
  );
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
          const normalized = normalizeGeneratedTsSource(source);
          validateShowcaseSource({ componentName: c, source: normalized });
          const url = expectedShowcaseFileUrl(c);
          await writeFile(url, normalized, "utf8");
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

    const scaffoldPrompt = buildScaffoldGeneratorPrompt({ componentName });

    const model = getAgentModel(AGENT_KEYS.SCAFFOLD_GENERATOR);

    process.stdout.write(
      `[agent] Scaffold Generator model: ${model ?? "default"}\n`,
    );

    const session = await client.createSession({
      streaming: true,
      tools,
      mcpServers: { green: greenMcp },
      ...(model ? { model } : {}),
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

    await session.sendAndWait(
      {
        prompt: `Create or update the showcase scaffold for ${componentName} covering categories: ${categories.join(", ")}.`,
      },
      180_000,
    );
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
  if (args.fixRequestPath) {
    await runFixFromRequest({ fixRequestPath: args.fixRequestPath });
    return;
  }

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
