import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

let didLoadDotEnv = false;

function loadDotEnvIfPresent() {
  if (didLoadDotEnv) return;
  didLoadDotEnv = true;

  const cwd = process.cwd();
  const candidates = [".env.local", ".env"];

  for (const filename of candidates) {
    const filePath = path.join(cwd, filename);
    if (!fs.existsSync(filePath)) continue;
    dotenv.config({ path: filePath, override: false });
  }
}

loadDotEnvIfPresent();

export const AGENT_KEYS = Object.freeze({
  MATRIX_SYNC: "MATRIX_SYNC",
  TEST_GENERATOR: "TEST_GENERATOR",
  TEST_GENERATOR_FIX: "TEST_GENERATOR_FIX",
  SCAFFOLD_GENERATOR: "SCAFFOLD_GENERATOR",
});

/**
 * Optional Copilot CLI logging.
 *
 * Set via env (loaded from .env/.env.local if present):
 * - COPILOT_CLI_LOG_LEVEL=debug|all|info|warning|error|none
 * - COPILOT_CLI_LOG_DIR=./logs/copilot-cli
 */
export function getCopilotCliArgs() {
  const args = [];

  const level = String(process.env.COPILOT_CLI_LOG_LEVEL ?? "").trim();
  if (level) args.push("--log-level", level);

  const logDir = String(process.env.COPILOT_CLI_LOG_DIR ?? "").trim();
  if (logDir) args.push("--log-dir", logDir);

  return args.length ? args : undefined;
}

/**
 * Model selection:
 * - Per-agent override: COPILOT_MODEL_<AGENT_KEY>
 * - Global default: COPILOT_MODEL
 *
 * Examples:
 * - COPILOT_MODEL_TEST_GENERATOR=gpt-4.1
 * - COPILOT_MODEL=sonnet-4.5
 */
export function getAgentModel(agentKey) {
  const specific = process.env[`COPILOT_MODEL_${agentKey}`];
  const global = process.env.COPILOT_MODEL;
  const selected = specific ?? global;
  const trimmed = typeof selected === "string" ? selected.trim() : "";
  return trimmed ? trimmed : undefined;
}

export function buildTestGeneratorAgentPrompt({ componentName, category }) {
  return `You are an expert test engineer for the Green Design System testbed.
Your task is to generate comprehensive WebDriverIO tests for the ${componentName} component.

You MUST follow the Test Generator Constitution for this repo. It defines hard constraints (especially around shadow DOM usage and avoiding execute()-based interactions).
You MUST call get_test_constitution before writing any tests.

Follow project conventions:
- Use WebDriverIO v9 syntax
- Import from '@wdio/globals'
- Prefer selectors: stable #ids in the showcase scaffolds when present, otherwise tag name (e.g. gds-button) OR [gds-element='gds-button']
- Navigate using: \`testbedUrl('/component/${componentName}')\`
- Output ONLY TypeScript code for the spec file.
- NEVER wrap output in markdown fences (no triple backticks like \`\`\`ts ... \`\`\`).

Repo conventions for spec imports:
- Specs under 'test/specs/components/' import helpers like:
  - import { ComponentPage } from '../../helpers/component-page'
  - import { testbedUrl } from '../../helpers/testbed-url'

When possible, use helpers from 'test/helpers' (ComponentPage, waitForState, Keys, snapshotWithRetry).
Always use the shared helper 'test/helpers/testbed-url' for navigation.

You have access to Green MCP tools via the MCP server named 'green'. Use them to get up-to-date component docs.
You MUST call green.get_component_docs with framework 'web-component' before writing tests.

You MUST call the provided tools to fetch requirements and examples before writing code.`;
}

export function buildFixModePrompt({
  componentName,
  category,
  attempt,
  failureText,
  specPath,
  scaffoldPath,
}) {
  return `You are the Test Generator. You are running in FIX MODE.

Target:
- component: ${componentName}
- category: ${category}
- attempt: ${attempt}

You must:
1) Diagnose the failure.
1.5) Call get_test_constitution and follow it.
2) Read the failing generated spec (and scaffold/registry if needed) using read_text.
3) Apply exactly ONE safe fix by editing ONLY the generated spec and/or scaffold/registry via write_text.
4) If you cannot safely fix it without cheating, do NOT change files.
5) Always write a machine-readable fix response using write_fix_response.

Hard rules:
- DO NOT bypass failures (no skips, no removing assertions to make it pass, no always-true expects).
- Prefer stable #ids in scaffolds; add fixtures rather than weak selectors.
- Do not print code fences or markdown.

Special constraints:
- Do NOT replace WDIO interactions (click/keys) with DOM calls inside execute().
- Avoid using shadow DOM to bypass the public API; only use it as a last resort, and keep assertions host-level.

Context:
- Failure output (truncated):\n${failureText}
- Generated spec path: ${specPath}
- Scaffold path (may be empty): ${scaffoldPath || "(none)"}
`;
}

export function buildScaffoldGeneratorPrompt({ componentName }) {
  // Categories are supplied in the task prompt when calling the agent.
  return `You are an expert test engineer building a TEST SCAFFOLD (showcase page) for ${componentName}.

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
- File path: testbed/components/${componentName.replace(/^gds-/, "")}.ts
- custom element tag: ${componentName}-showcase
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
}

export function buildMatrixSyncAgentPrompt({ applyMode }) {
  return `You are a test engineer tasked with maintaining the Coverage Matrix. This JSON document informs the QA team what the current status of the test bed is. The document makes it clear which features have coverage and which do not.

Goal:
- Use repo evidence (tests + testbed pages) and Green MCP component API docs to update test/coverage-matrix.json.

Required process:
1) Read test/coverage-matrix.json using read_text.
2) For each component in the provided inventory, read its testbed page (if present) and its test specs (if present) using read_text.
3) Call green.get_component_docs with framework 'web-component' for each component you are evaluating. Also set 'includeGuidelines' and 'includeInstructions' to true to get the most context on component features.
4) Judge whether the matrix reflects real-world coverage and update it.

Rules:
- Respect the provided schema and allowed statuses (pending, review, blocked, validated).
- Interaction + Accessibility sections are required for every component.
- Visual is optional; include only if evidence exists.
- Prefer stable file references: use testbed/components/<name>.ts and test/specs/components/<name>.*.spec.ts when available.
- ALL components from the inventory must be present in the matrix, even if they have no coverage (use pending/unknown status and empty evidence in that case).

Output:
- If applyMode=true: write ONLY via write_matrix (do not output markdown).
- If applyMode=false: do NOT call write_matrix; output JSON {"proposedMatrix": { ... }}.

applyMode: ${applyMode ? "true" : "false"}
`;
}

export function buildMatrixSyncComponentAgentPrompt() {
  return `You are a test engineer tasked with maintaining the Coverage Matrix for ONE component at a time.

Goal:
- Given a single component context payload (inventory + repo evidence + current matrix entry), produce an updated matrix entry for ONLY that component.

Required process:
1) Use the provided context payload as your starting point.
2) If a testbed page/spec is available, read it using read_text to confirm what is actually implemented.
3) Call green.get_component_docs with framework 'web-component' for the target component. Also set 'includeGuidelines' and 'includeInstructions' to true.
4) Update ONLY the single component entry to reflect requirements and repo evidence.

Rules:
- Do NOT attempt to update other components.
- Do NOT attempt to write the full matrix.
- Respect allowed per-category statuses (pending, review, blocked, validated).
- Interaction + Accessibility sections are required.
- Visual is required in this workflow (include it even if pending).

Output:
- Output ONLY valid JSON (no markdown fences, no commentary) in this exact shape:
  {"componentName": "gds-...", "entry": { ... }}
`;
}
