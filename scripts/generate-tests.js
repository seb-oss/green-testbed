import { CopilotClient, defineTool } from "@github/copilot-sdk";
import { readFile, writeFile } from "node:fs/promises";
import { readMatrix, getMatrixEntry, writeMatrix } from "./matrix-utils.js";
import { fetchComponentDocs } from "./green-mcp-client.js";

function parseArgs(argv) {
  const args = { component: null, tier: null, force: false };

  const positional = argv.filter((a) => !a.startsWith("--"));
  if (positional[0]) args.component = positional[0];

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--component" && argv[i + 1]) args.component = argv[++i];
    if (a === "--tier" && argv[i + 1]) args.tier = Number(argv[++i]);
    if (a === "--force") args.force = true;
  }

  return args;
}

function buildAgentPrompt({ componentName, tier }) {
  return `You are an expert test engineer for the Green Design System testbed.
Your task is to generate comprehensive WebDriverIO tests for the ${componentName} component.

Follow project conventions:
- Use WebDriverIO v9 syntax
- Import from '@wdio/globals'
- Prefer selectors: tag name (e.g. gds-button) OR [gds-element='gds-button']
- Navigate to: \`${process.env.TESTBED_URL}/component/${componentName}\`
- Output ONLY TypeScript code for the spec file.

When possible, use helpers from 'test/helpers' (ComponentPage, waitForState, Keys, snapshotWithRetry).

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

async function generateTests({ componentName, tier, force }) {
  if (!componentName) throw new Error("Missing component name");
  if (![1, 2, 3].includes(tier)) throw new Error("--tier must be 1, 2, or 3");

  const matrix = await readMatrix();
  const entry = getMatrixEntry(matrix, componentName);
  const tierKey = `tier${tier}`;

  if (entry?.[tierKey]?.status === "complete" && !force) {
    console.log(
      `${componentName} ${tierKey} already complete (use --force to regenerate)`,
    );
    return;
  }

  const componentDocs = await fetchComponentDocs(componentName);
  const templates = await loadTemplates();

  const tools = [
    defineTool("get_coverage_requirements", {
      description:
        "Get test coverage requirements for a component tier from coverage-matrix.json",
      parameters: {
        type: "object",
        properties: {
          componentName: { type: "string" },
          tier: { type: "number", enum: [1, 2, 3] },
        },
        required: ["componentName", "tier"],
      },
      handler: async ({ componentName: c, tier: t }) => {
        const m = await readMatrix();
        const e = getMatrixEntry(m, c);
        return e[`tier${t}`];
      },
    }),
    defineTool("get_component_docs", {
      description: "Get component documentation (cached) for a Green component",
      parameters: {
        type: "object",
        properties: { componentName: { type: "string" } },
        required: ["componentName"],
      },
      handler: async ({ componentName: c }) => fetchComponentDocs(c),
    }),
    defineTool("get_test_patterns", {
      description: "Get example test patterns used in this repo",
      parameters: { type: "object", properties: {} },
      handler: async () => ({ templates }),
    }),
  ];

  const client = new CopilotClient();
  const session = await client.createSession({
    model: "sonnet-4.5",
    streaming: true,
    tools,
    customAgents: [
      {
        name: "test-generator",
        displayName: "Test Generator",
        description: "Generates WebDriverIO tests for Green components",
        prompt: buildAgentPrompt({ componentName, tier }),
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

  const prompt = `Generate Tier ${tier} tests for ${componentName}.

Context:
- Coverage requirements: call get_coverage_requirements
- Component docs: call get_component_docs
- Test patterns: call get_test_patterns

Output requirements:
- Output ONLY TypeScript code
- Use a single describe() for '${componentName} Tier${tier} /'
- Include a before() hook navigating to \`${process.env.TESTBED_URL}/component/${componentName}\`
- Use async/await
- Prefer stable selectors (ids in testbed pages when present)

Component docs (cached):\n${JSON.stringify(componentDocs, null, 2)}\n`;

  await session.sendAndWait({ prompt });
  await client.stop();

  const outPath = new URL(
    `../test/specs/components/${componentName.replace(/^gds-/, "")}.tier${tier}.generated.spec.ts`,
    import.meta.url,
  );

  await ensureDirExistsFor(outPath);
  await writeFile(outPath, generated, "utf8");

  // mark as review (human-in-the-loop)
  entry[tierKey].status = "review";
  entry.lastUpdated = new Date().toISOString().slice(0, 10);
  matrix.lastUpdated = entry.lastUpdated;
  await writeMatrix(matrix);

  console.log(`\n\n✓ Generated: ${outPath.pathname}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.component || !args.tier) {
    console.error(
      "Usage: node scripts/generate-tests.js <gds-component> --tier <1|2|3> [--force]",
    );
    process.exitCode = 1;
    return;
  }

  await generateTests({
    componentName: args.component,
    tier: args.tier,
    force: args.force,
  });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
