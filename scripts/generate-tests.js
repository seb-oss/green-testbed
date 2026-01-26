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
  const args = { component: null, category: null, force: false };

  const positional = argv.filter((a) => !a.startsWith("--"));
  if (positional[0]) args.component = positional[0];

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--component" && argv[i + 1]) args.component = argv[++i];
    if (a === "--category" && argv[i + 1]) args.category = argv[++i];
    if (a === "--tier") {
      throw new Error(
        "--tier is no longer supported. Use --category <interaction|accessibility|visual>.",
      );
    }
    if (a === "--force") args.force = true;
  }

  return args;
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
  const greenMcp = await loadGreenMcpServerConfig();
  const session = await client.createSession({
    model: "sonnet-4.5",
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

  let generated = "";

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
  await client.stop();

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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.component || !args.category) {
    console.error(
      "Usage: node scripts/generate-tests.js <gds-component> --category <interaction|accessibility|visual> [--force]",
    );
    process.exitCode = 1;
    return;
  }

  await generateTests({
    componentName: args.component,
    category: args.category,
    force: args.force,
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
