# Agentic Workflow Plan: Comprehensive Test Bed Coverage & Maintenance

**Created:** January 26, 2026  
**Status:** Planning Phase  
**Goal:** Establish a scalable, well-structured test bed with comprehensive component coverage, automated maintenance, and clear testing criteria that keeps pace with Green Design System updates.

**Implementation Technology:** GitHub Copilot SDK for all agentic workflows  
**SDK Documentation:** See [docs/copilot-sdk.context.md](../docs/copilot-sdk.context.md) for implementation details

---

## Table of Contents

1. [Project Context](#project-context)
2. [Implementation Steps](#implementation-steps)
3. [Step Integration Flow](#step-integration-flow)
4. [Further Considerations](#further-considerations)
5. [Success Metrics](#success-metrics)

---

## Project Context

### Current State Assessment

- **Total Components**: 41+ identified in Green Design System
- **Current Test Coverage**: ~5-10% (existence checks only)
- **Test Platforms**: 9 configurations (4 desktop browsers, 5 mobile devices)
- **Visual Baselines**: 360+ baseline images (currently disabled)
- **Active Tests**: 2 spec files with basic rendering checks
- **Main Gap**: No interaction, state, accessibility, or comprehensive functional testing

### Key Challenges

1. Visual regression tests are commented out
2. No interaction or event testing
3. Manual maintenance doesn't scale with library updates
4. Inconsistent component coverage (some components missing entirely)
5. No automated way to detect Green Core library changes

---

## Implementation Steps

### Step 1: Restructure Test Bed Architecture

**Objective:** Create modular, maintainable structure that scales with component library growth.

**Actions:**

1. **Create Component-Specific Testbed Pages**
   - New directory: `testbed/components/`
   - One file per component: `button.ts`, `dropdown.ts`, `calendar.ts`, etc.
   - Each file showcases all variants, props, and states of a single component
   - Example structure:
     ```typescript
     // testbed/components/button.ts
     @customElement("button-showcase")
     export class ButtonShowcase extends LitElement {
       render() {
         return html`
           <gds-flex flex-direction="column" gap="xl">
             <gds-text tag="h2">Button Component</gds-text>

             <!-- All variants -->
             <section>
               <gds-text tag="h3">Variants</gds-text>
               <gds-button variant="primary">Primary</gds-button>
               <gds-button variant="secondary">Secondary</gds-button>
               <!-- ... -->
             </section>

             <!-- All states -->
             <section>
               <gds-text tag="h3">States</gds-text>
               <gds-button disabled>Disabled</gds-button>
               <gds-button loading>Loading</gds-button>
             </section>
           </gds-flex>
         `;
       }
     }
     ```

2. **Update Router Configuration**
   - Modify `testbed/main.ts` to support `/component/{name}` routes
   - Add index page listing all components with links
   - Keep existing `/all-components` for overview

3. **Reorganize Scenarios**
   - Move `testbed/form.ts` to `testbed/scenarios/validation-form.ts`
   - Create `testbed/scenarios/` for user flow scenarios (not individual components)
   - Examples: `multi-step-wizard.ts`, `data-grid.ts`, `dashboard.ts`

4. **Update Test Specs Structure**
   - Mirror testbed structure: `test/specs/components/button.spec.ts`
   - Keep `test/specs/scenarios/` for flow tests
   - Enable parallel test execution per component

**Benefits:**

- Easier to locate specific component tests
- Faster test development (work on one component at a time)
- Better isolation (component changes don't affect other tests)
- Clearer organization for new contributors

---

### Step 2: Define Test Coverage Matrix

**Objective:** Establish single source of truth for what needs testing, tracking progress, and guiding AI agents.

#### Coverage Matrix Structure

**File:** `test/coverage-matrix.json`

```json
{
  "version": "1.0.0",
  "lastUpdated": "2026-01-26",
  "greenCoreVersion": "2.26.1",
  "components": {
    "gds-button": {
      "tier": 1,
      "category": "interactive",
      "testStatus": "complete",
      "testbedPage": "testbed/components/button.ts",
      "testSpec": "test/specs/components/button.spec.ts",
      "tier1": {
        "rendering": true,
        "basicProps": ["variant", "rank", "size", "disabled"],
        "visualSnapshot": true,
        "status": "complete"
      },
      "tier2": {
        "interactions": ["click", "hover", "focus"],
        "events": ["click", "focus", "blur"],
        "states": ["disabled", "loading", "pressed"],
        "keyboardNav": ["Enter", "Space"],
        "status": "complete"
      },
      "tier3": {
        "accessibility": [
          "aria-label",
          "role",
          "screen-reader",
          "focus-visible"
        ],
        "edgeCases": ["long-text", "nested-elements", "rapid-clicks"],
        "responsive": ["mobile", "tablet", "desktop"],
        "status": "in-progress"
      },
      "lastUpdated": "2026-01-23"
    },
    "gds-dropdown": {
      "tier": 1,
      "category": "form-control",
      "testStatus": "partial",
      "testbedPage": "testbed/components/dropdown.ts",
      "testSpec": "test/specs/components/dropdown.spec.ts",
      "tier1": {
        "rendering": true,
        "basicProps": ["label", "value", "disabled"],
        "visualSnapshot": true,
        "status": "complete"
      },
      "tier2": {
        "interactions": ["open", "close", "select-option", "clear"],
        "events": ["change", "focus", "blur", "open", "close"],
        "states": ["open", "closed", "disabled", "error", "valid"],
        "keyboardNav": ["ArrowDown", "ArrowUp", "Enter", "Escape", "Tab"],
        "validation": ["required", "custom-validator"],
        "status": "pending"
      },
      "tier3": {
        "accessibility": [
          "aria-expanded",
          "aria-owns",
          "aria-activedescendant"
        ],
        "edgeCases": ["empty-options", "many-options", "dynamic-options"],
        "responsive": ["mobile", "tablet", "desktop"],
        "status": "pending"
      },
      "lastUpdated": "2026-01-26"
    }
  },
  "categories": {
    "interactive": {
      "description": "Clickable components (buttons, links)",
      "requiredTier2Tests": ["click", "hover", "focus", "keyboard"]
    },
    "form-control": {
      "description": "Form input components",
      "requiredTier2Tests": [
        "value-change",
        "validation",
        "clear",
        "keyboard",
        "error-states"
      ],
      "requiredTier3Tests": ["form-submission", "validation-messages"]
    },
    "container": {
      "description": "Layout components (flex, grid, card)",
      "requiredTier1Tests": ["slot-content", "nested-components"]
    },
    "display": {
      "description": "Display-only components (text, image, badge)",
      "tier2Optional": true
    }
  },
  "testTiers": {
    "tier1": {
      "name": "Foundation Tests",
      "required": true,
      "description": "Basic rendering, props, visual snapshots",
      "estimatedTime": "15-30 min per component"
    },
    "tier2": {
      "name": "Interaction Tests",
      "required": true,
      "description": "User interactions, events, states, keyboard navigation",
      "estimatedTime": "45-90 min per component",
      "prerequisite": "tier1"
    },
    "tier3": {
      "name": "Advanced Tests",
      "required": false,
      "description": "Accessibility, edge cases, responsive behavior",
      "estimatedTime": "60-120 min per component",
      "prerequisite": "tier2"
    }
  }
}
```

#### How the Matrix is Used

**1. Test Planning & Tracking**

- Developers reference matrix to see what tests are needed
- Project management tracks completion percentage
- CI/CD pipelines validate test coverage against matrix requirements

**2. AI Agent Guidance**

- Agents read matrix before generating tests
- Understand required coverage (what props, events, states to test)
- Follow category-specific patterns (form-control vs interactive)

**3. Gap Analysis**

- Scripts compare actual test files against matrix
- Generate reports: "gds-dropdown missing Tier 2 keyboard navigation tests"
- Identify components with zero coverage

**4. Regression Prevention**

- When tests fail, matrix indicates which aspects broke
- Links failures to specific component capabilities

**5. Progress Dashboard**

```bash
npm run coverage-report

Component Coverage Report
═════════════════════════════════════
Total Components: 41
Tier 1 Complete: 28 (68%)
Tier 2 Complete: 12 (29%)
Tier 3 Complete: 3 (7%)

Needs Attention:
- gds-dropdown: Tier 2 pending (12 tests required)
- gds-dialog: Tier 1 incomplete (missing visual snapshots)
- gds-calendar: Not started
```

#### How the Matrix is Updated

**Manual Updates (Component API Changes):**

1. **Developer Workflow:**
   - Green Core adds new prop to `gds-button`: `loading-text`
   - Developer updates `coverage-matrix.json`:
     ```json
     "tier1": {
       "basicProps": ["variant", "rank", "size", "disabled", "loading-text"]
     }
     ```
   - PR includes both matrix update and test update
   - CI fails if tests don't cover new prop

2. **PR Template Checklist:**

   ```markdown
   - [ ] Updated coverage-matrix.json with new props/events
   - [ ] Added/updated tests for changes
   - [ ] Verified all matrix requirements still pass
   ```

3. **Code Review:**
   - Reviewer checks matrix consistency
   - Ensures `lastUpdated` timestamp refreshed
   - Validates tier assignments

**Automated Updates (Library Sync):**

```bash
# Triggered by Step 4 workflow or manually
npm run sync-components

# Process:
# 1. Detect green-core version change
# 2. AI agent analyzes changelog
# 3. Agent proposes matrix updates
# 4. Creates PR with changes
```

**AI Agent Sync Process:**

```
Agent reads: @sebgroup/green-core@2.27.0 changelog
Agent finds: "Added gds-toast component"
Agent fetches: Green MCP docs for gds-toast
Agent proposes:
  {
    "gds-toast": {
      "tier": 1,
      "category": "display",
      "testStatus": "pending",
      "tier1": {
        "rendering": true,
        "basicProps": ["message", "variant", "duration"],
        "visualSnapshot": true
      }
      // ... tier 2 & 3 based on component analysis
    }
  }
Agent creates: PR with matrix entry + test stub
Human reviews: Approves/modifies tier assignments
```

**Periodic Audits:**

```bash
# Monthly automated run
npm run audit-coverage

# Checks:
# 1. All matrix entries have corresponding test files
# 2. Test files cover all matrix requirements
# 3. greenCoreVersion matches installed version
# 4. No orphaned test files (components removed from library)

# Output: docs/coverage-report.md
```

**Validation Rules:**

1. **Tier Sequencing:** Cannot mark tier2 complete without tier1 complete
2. **Required Fields:** All tier1 must have `rendering`, `basicProps`, `visualSnapshot`
3. **Category Consistency:** Form controls must have `validation` in tier2
4. **File References:** `testbedPage` and `testSpec` paths must exist
5. **Timestamp Freshness:** `lastUpdated` within 90 days or flagged for review

**Matrix Schema Validation:**

```bash
npm run validate-matrix

# Validates against test/schemas/coverage-matrix.schema.json
# Ensures data integrity
# Prevents malformed entries
```

---

### Step 3: Implement AI Agent Test Generation System

**Objective:** Use LLM agents to generate appropriate, context-aware tests for each component.

**IMPORTANT CLARIFICATION:** This is NOT simple template-based code generation. This is an AI agent orchestration system where LLMs understand component behavior and generate suitable tests.

**Implementation:** All agentic workflows will use **GitHub Copilot SDK** (`@github/copilot-sdk`). This provides a production-tested agent runtime with built-in tool support, session management, and streaming capabilities.

**⚠️ CRITICAL**: Before implementing Step 3, thoroughly review [docs/copilot-sdk.context.md](../docs/copilot-sdk.context.md) which contains:

- Installation and setup instructions
- Core API reference and imports
- Tool definition patterns
- Session management examples
- Best practices for agent design
- Complete code examples for test generation workflows

#### Architecture Overview

```
┌─────────────────────────────────────────┐
│  scripts/generate-tests.ts              │
│  (Orchestrator)                         │
└────────────┬────────────────────────────┘
             │
             ├─ Reads coverage-matrix.json
             ├─ Determines what tests needed
             │
             ↓
┌─────────────────────────────────────────┐
│  GitHub Copilot SDK                     │
│  @github/copilot-sdk                    │
│  - CopilotClient + Session              │
│  - Custom tools (matrix, docs, files)   │
│  - Specialized test-generator agent     │
└────────────┬────────────────────────────┘
             │
             ├─ Agent analyzes via tools:
             │  • get_coverage_requirements
             │  • get_component_docs (Green MCP)
             │  • read_test_patterns
             |
             ↓
┌─────────────────────────────────────────┐
│  AI Agent generates tests               │
│  - Understands component behavior       │
│  - Follows project patterns             │
│  - Returns complete TypeScript code     │
└────────────┬────────────────────────────┘
             │
             ├─ Returns generated code
             │
             ↓
┌─────────────────────────────────────────┐
│  Validation & Review                    │
│  - Syntax check                         │
│  - Coverage verification                │
│  - Human review in PR                   │
└─────────────────────────────────────────┘
```

#### Implementation Details

**1. Orchestrator Script**

**File:** `scripts/generate-tests.ts`

**📖 Implementation Reference:** See [docs/copilot-sdk.context.md](../docs/copilot-sdk.context.md) for complete Copilot SDK usage patterns.

```typescript
import { CopilotClient, defineTool } from "@github/copilot-sdk";
import type { SessionEvent } from "@github/copilot-sdk";
import { readMatrix, updateMatrix } from "./matrix-utils";
import { fetchComponentDocs } from "./green-mcp-client";

interface GenerateTestsOptions {
  component: string;
  tier: 1 | 2 | 3;
  force?: boolean;
}

async function generateTests(options: GenerateTestsOptions) {
  // 1. Load component requirements from matrix
  const matrixEntry = await readMatrix(options.component);

  if (
    matrixEntry[`tier${options.tier}`].status === "complete" &&
    !options.force
  ) {
    console.log(
      `Tests for ${options.component} tier ${options.tier} already complete`,
    );
    return;
  }

  // 2. Fetch component documentation from Green MCP
  const greenDocs = await fetchComponentDocs(options.component, {
    framework: "web-component",
  });

  // 3. Load test templates as examples
  const templates = await loadTemplates(matrixEntry.category);

  // 4. Find similar component tests for pattern matching
  const similarTests = await findSimilarTests(matrixEntry.category);

  // 5. Define custom tools for the agent
  const tools = [
    defineTool("get_coverage_requirements", {
      description: "Get test coverage requirements from matrix",
      parameters: {
        type: "object",
        properties: {
          component: { type: "string" },
          tier: { type: "number" },
        },
        required: ["component", "tier"],
      },
      handler: async ({ component, tier }) => matrixEntry[`tier${tier}`],
    }),
    defineTool("get_component_docs", {
      description: "Get component documentation",
      parameters: {
        type: "object",
        properties: { component: { type: "string" } },
        required: ["component"],
      },
      handler: async ({ component }) => greenDocs,
    }),
    defineTool("get_test_patterns", {
      description: "Get example test patterns",
      parameters: { type: "object", properties: {} },
      handler: async () => ({ templates, similarTests }),
    }),
  ];

  // 6. Create Copilot SDK client and session
  const client = new CopilotClient();
  const session = await client.createSession({
    model: "gpt-4.1",
    streaming: true,
    tools,
    customAgents: [
      {
        name: "test-generator",
        displayName: "Test Generator",
        description: "Generates WebDriverIO tests for Green components",
        prompt: buildAgentPrompt(matrixEntry[`tier${options.tier}`]),
      },
    ],
  });

  // Handle streaming output
  let generatedTest = "";
  session.on((event: SessionEvent) => {
    if (event.type === "assistant.message_delta") {
      process.stdout.write(event.data.deltaContent);
      generatedTest += event.data.deltaContent;
    }
    if (event.type === "tool.call_start") {
      console.log(`\n🔧 Using tool: ${event.data.toolName}...`);
    }
  });

  console.log(
    `Generating Tier ${options.tier} tests for ${options.component}...`,
  );

  await session.sendAndWait({
    prompt: `Generate complete Tier ${options.tier} WebDriverIO tests for ${options.component}.
    
Use the provided tools to:
1. Get coverage requirements
2. Fetch component documentation
3. Review test patterns

Generate complete, runnable TypeScript code with all necessary imports.
Output ONLY the test code, no explanations.`,
  });

  await client.stop();

  // 7. Validate generated code
  const validation = await validateGeneratedTest(generatedTest, {
    syntax: true,
    imports: true,
    matrixCoverage: matrixEntry[`tier${options.tier}`],
    namingConventions: true,
  });

  if (!validation.passed) {
    console.error("Validation failed:", validation.errors);

    // Retry with corrections
    if (validation.retryable) {
      const correctedTest = await runSubagent({
        description: `Fix test generation issues`,
        prompt: buildCorrectionPrompt(generatedTest, validation.errors),
      });

      return saveTest(options.component, options.tier, correctedTest);
    }

    throw new Error("Test generation failed validation");
  }

  // 8. Save generated test
  const testPath = `test/specs/components/${options.component}.spec.ts`;
  await saveTest(testPath, generatedTest);

  // 9. Update matrix status
  await updateMatrix(options.component, `tier${options.tier}`, {
    status: "review",
  });

  console.log(`✓ Tests generated: ${testPath}`);
  console.log("  Next: Review and commit the generated tests");
}

// CLI interface
if (require.main === module) {
  const [component, tier] = process.argv.slice(2);
  generateTests({
    component,
    tier: parseInt(tier) as 1 | 2 | 3,
  });
}
```

**2. AI Agent Prompt Structure**

```typescript
function buildAgentPrompt(context: AgentContext): string {
  return `
You are an expert test engineer for the Green Design System testbed. 
Your task is to generate comprehensive WebDriverIO tests for the ${context.component} component.

# COMPONENT DOCUMENTATION (from Green MCP Server)
${context.componentDocs.markdown}

## Component API Summary:
- Props: ${JSON.stringify(context.componentDocs.props, null, 2)}
- Events: ${JSON.stringify(context.componentDocs.events, null, 2)}
- Slots: ${JSON.stringify(context.componentDocs.slots, null, 2)}
- Accessibility: ${context.componentDocs.accessibility}

# COVERAGE REQUIREMENTS (Tier ${context.tier})
You MUST generate tests covering these requirements from coverage-matrix.json:

${JSON.stringify(context.coverageRequirements, null, 2)}

${
  context.tier === 1
    ? `
## Tier 1 Requirements:
- Test component renders correctly
- Test all props listed in basicProps array
- Generate visual snapshot tests for each variant
- Verify initial state
`
    : ""
}

${
  context.tier === 2
    ? `
## Tier 2 Requirements:
- Test all interactions: ${context.coverageRequirements.interactions.join(", ")}
- Test all events fire correctly: ${context.coverageRequirements.events.join(", ")}
- Test all states: ${context.coverageRequirements.states.join(", ")}
- Test keyboard navigation: ${context.coverageRequirements.keyboardNav.join(", ")}
${context.coverageRequirements.validation ? "- Test validation behavior" : ""}
`
    : ""
}

${
  context.tier === 3
    ? `
## Tier 3 Requirements:
- Test accessibility: ${context.coverageRequirements.accessibility.join(", ")}
- Test edge cases: ${context.coverageRequirements.edgeCases.join(", ")}
- Test responsive behavior: ${context.coverageRequirements.responsive.join(", ")}
`
    : ""
}

# EXAMPLE TEST PATTERNS (similar components)
Here are examples of how we test similar ${context.projectContext.category} components:

${context.templateExamples}

${context.existingPatterns}

# PROJECT CONVENTIONS
- Use WebDriverIO v9.18+ syntax
- Import from '@wdio/globals'
- Use shadow DOM navigation when needed: element.shadow$('selector')
- Name test suites: "ComponentName Tier${context.tier} /"
- Use descriptive test names: "should fire change event when option selected"
- Add comments referencing coverage: // Coverage: tier${context.tier}.interactions.click

# TESTBED PAGE URL
Tests should navigate to: \`\${process.env.TESTBED_URL}/component/${context.component}\`

# OUTPUT REQUIREMENTS
Generate complete, valid TypeScript code for the test file.
Include all necessary imports.
Include a describe block with proper before() hook.
Generate one it() test for each requirement.
Add helpful comments explaining complex interactions.
Use async/await properly.
Include visual snapshots where specified.

DO NOT include placeholder comments like "// Add more tests here"
DO NOT leave any requirements untested
DO generate complete, runnable code

OUTPUT ONLY THE TYPESCRIPT CODE, NO EXPLANATIONS BEFORE OR AFTER.
`;
}
```

**3. Test Templates as Agent Context**

Templates are **example files** that show the agent patterns, not code generation templates.

**File:** `test/templates/form-control.template.ts`

```typescript
// This template shows the agent how to test form controls
// Agent learns patterns like validation testing, error state handling, etc.

import { expect, browser, $ } from "@wdio/globals";

describe("Form Control Example Template /", () => {
  before(async () => {
    await browser.url(`${process.env.TESTBED_URL}/component/example`);
  });

  // Pattern: Test initial state
  it("should render with default state", async () => {
    const control = $("[gds-element=gds-example]");
    await control.waitForExist();
    expect(await control.isExisting()).toBe(true);
  });

  // Pattern: Test required props
  it("should display label prop correctly", async () => {
    const control = $("#with-label");
    const label = await control.shadow$("label");
    expect(await label.getText()).toBe("Example Label");
  });

  // Pattern: Test value changes
  it("should update value when user types", async () => {
    const control = $("#editable");
    const input = await control.shadow$("input");

    await input.setValue("test value");

    const value = await control.execute((el: any) => el.value);
    expect(value).toBe("test value");
  });

  // Pattern: Test events
  it("should fire change event when value changes", async () => {
    const control = $("#with-event-listener");

    await browser.execute(() => {
      (window as any).changeEventFired = false;
      document
        .querySelector("#with-event-listener")!
        .addEventListener("change", () => {
          (window as any).changeEventFired = true;
        });
    });

    const input = await control.shadow$("input");
    await input.setValue("trigger change");

    const eventFired = await browser.execute(
      () => (window as any).changeEventFired,
    );
    expect(eventFired).toBe(true);
  });

  // Pattern: Test validation
  it("should show error when validation fails", async () => {
    const control = $("#with-validation");

    // Trigger validation without value
    await control.execute((el: any) => el.validate());

    const isInvalid = await control.execute((el: any) => el.invalid);
    const errorMessage = await control.execute((el: any) => el.errorMessage);

    expect(isInvalid).toBe(true);
    expect(errorMessage).toBeTruthy();
  });

  // Pattern: Test disabled state
  it("should not accept input when disabled", async () => {
    const control = $("#disabled");
    const input = await control.shadow$("input");

    expect(await input.isEnabled()).toBe(false);
  });

  // Pattern: Test clearing
  it("should clear value when clear button clicked", async () => {
    const control = $("#clearable");
    const input = await control.shadow$("input");
    await input.setValue("will be cleared");

    const clearButton = await control.shadow$("[part='clear']");
    await clearButton.click();

    const value = await control.execute((el: any) => el.value);
    expect(value).toBe("");
  });

  // Pattern: Visual snapshot
  it("should match visual snapshot", async () => {
    const control = $("#snapshot-target");
    await expect(control).toMatchElementSnapshot("example-default");
  });
});
```

**Other Template Files:**

- `test/templates/interactive.template.ts` - Click, hover, focus patterns
- `test/templates/container.template.ts` - Slot, child component patterns
- `test/templates/dialog.template.ts` - Modal, overlay patterns

**4. Green MCP Integration**

```typescript
// scripts/green-mcp-client.ts
import { mcp_green_core_mc_get_component_docs } from "./mcp-client";

export async function fetchComponentDocs(componentName: string, options: any) {
  const docs = await mcp_green_core_mc_get_component_docs({
    componentName,
    framework: "web-component",
    includeGuidelines: true,
    includeInstructions: true,
  });

  return {
    markdown: docs.documentation,
    props: docs.properties,
    events: docs.events,
    slots: docs.slots,
    accessibility: docs.accessibility,
    examples: docs.examples,
  };
}
```

**5. Validation System**

```typescript
interface ValidationResult {
  passed: boolean;
  retryable: boolean;
  errors: ValidationError[];
}

async function validateGeneratedTest(
  code: string,
  requirements: ValidationRequirements,
): Promise<ValidationResult> {
  const errors: ValidationError[] = [];

  // 1. Syntax validation
  try {
    await import("typescript").then((ts) => {
      const result = ts.transpileModule(code, {
        compilerOptions: {
          /* tsconfig */
        },
      });
      if (result.diagnostics?.length) {
        errors.push({
          type: "syntax",
          message: "TypeScript compilation errors",
          details: result.diagnostics,
        });
      }
    });
  } catch (e) {
    errors.push({ type: "syntax", message: e.message, retryable: true });
  }

  // 2. Import validation
  const requiredImports = ["@wdio/globals"];
  requiredImports.forEach((imp) => {
    if (!code.includes(`from "${imp}"`)) {
      errors.push({
        type: "import",
        message: `Missing import from ${imp}`,
        retryable: true,
      });
    }
  });

  // 3. Coverage validation
  if (requirements.matrixCoverage) {
    const coverage = requirements.matrixCoverage;

    // Check all required interactions are tested
    if (coverage.interactions) {
      coverage.interactions.forEach((interaction) => {
        if (
          !code.includes(interaction) &&
          !code.includes(`test ${interaction}`)
        ) {
          errors.push({
            type: "coverage",
            message: `Missing test for interaction: ${interaction}`,
            retryable: true,
          });
        }
      });
    }

    // Check all required props are tested
    if (coverage.basicProps) {
      coverage.basicProps.forEach((prop) => {
        if (!code.includes(prop)) {
          errors.push({
            type: "coverage",
            message: `Missing test for prop: ${prop}`,
            retryable: true,
          });
        }
      });
    }
  }

  // 4. Naming convention validation
  if (!code.includes("describe(")) {
    errors.push({
      type: "structure",
      message: "Missing describe block",
      retryable: false,
    });
  }

  return {
    passed: errors.length === 0,
    retryable: errors.every((e) => e.retryable !== false),
    errors,
  };
}
```

**6. Human-in-the-Loop Workflow**

```bash
# Developer runs generation
npm run generate-tests gds-button --tier 2

# Orchestrator:
# 1. Generates test/specs/components/button.spec.ts
# 2. Creates git branch: feature/button-tier2-tests
# 3. Commits generated code
# 4. Opens in VS Code for review

# Developer reviews:
# - Checks test logic
# - Runs tests: npm run test-local
# - Makes manual adjustments if needed
# - Commits refinements

# Developer approves:
git push origin feature/button-tier2-tests
# Opens PR for team review
```

**7. Continuous Improvement**

```typescript
// After PR merged, store feedback for future generations
// File: .github/agent-feedback/button-tier2.json
{
  "component": "gds-button",
  "tier": 2,
  "generatedDate": "2026-01-26",
  "humanChanges": [
    {
      "type": "correction",
      "description": "Changed selector from .shadow$('button') to .shadow$('[part=\"button\"]')",
      "lesson": "Always use part attribute for shadow DOM selectors in Green components"
    },
    {
      "type": "addition",
      "description": "Added test for rapid double-click edge case",
      "lesson": "Button components should test debouncing behavior"
    }
  ],
  "reviewerComments": [
    "Good coverage but missing test for loading state with long text"
  ]
}

// Future generations for similar components include this feedback
```

#### Why This Approach Works

1. **Context-Aware**: Agent reads actual component documentation, understands unique behavior
2. **Pattern-Learning**: Agent sees existing tests, maintains consistency
3. **Flexible**: Handles different component types (forms vs buttons vs containers)
4. **Reviewable**: Generated tests saved to files for human review before commit
5. **Iterative**: Failed validations provide feedback for agent refinement
6. **Improves Over Time**: Feedback loop makes agent better at generating appropriate tests

---

### Step 4: Establish Automated Maintenance Workflow

**Objective:** Automatically detect Green Core library changes and trigger test generation pipeline.

#### How This Integrates with Step 3

**Step 3** is the test generation engine (the "how").  
**Step 4** is the automation orchestrator (the "when" and "why").

```
┌──────────────────────────────────────────┐
│ Step 4: Maintenance Workflow             │
│ (Detects library changes, triggers work) │
└────────────┬─────────────────────────────┘
             │ Updates
             ↓
┌──────────────────────────────────────────┐
│ Step 2: Coverage Matrix                  │
│ (Single source of truth)                 │
└────────────┬─────────────────────────────┘
             │ Feeds requirements to
             ↓
┌──────────────────────────────────────────┐
│ Step 3: AI Test Generation               │
│ (Creates/updates tests)                  │
└──────────────────────────────────────────┘
```

#### Complete Automated Workflow

**File:** `.github/workflows/update-tests.yml`

```yaml
name: Sync Green Core Components

on:
  # Run weekly to check for updates
  schedule:
    - cron: "0 9 * * 1" # Every Monday at 9 AM UTC

  # Allow manual trigger
  workflow_dispatch:
    inputs:
      force:
        description: "Force regeneration of all tests"
        required: false
        default: "false"

  # Trigger from green-core releases (webhook)
  repository_dispatch:
    types: [green-core-release]

jobs:
  detect-changes:
    name: Detect Green Core Changes
    runs-on: ubuntu-latest
    outputs:
      has_changes: ${{ steps.check.outputs.has_changes }}
      new_version: ${{ steps.check.outputs.new_version }}
      changes: ${{ steps.check.outputs.changes }}

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Check for updates
        id: check
        run: |
          CURRENT_VERSION=$(node -p "require('./package.json').dependencies['@sebgroup/green-core']")
          LATEST_VERSION=$(npm view @sebgroup/green-core version)

          if [ "$CURRENT_VERSION" != "$LATEST_VERSION" ]; then
            echo "has_changes=true" >> $GITHUB_OUTPUT
            echo "new_version=$LATEST_VERSION" >> $GITHUB_OUTPUT
            
            # Get changelog
            CHANGELOG=$(npm view @sebgroup/green-core@$LATEST_VERSION --json | jq -r .description)
            echo "changes=$CHANGELOG" >> $GITHUB_OUTPUT
          else
            echo "has_changes=false" >> $GITHUB_OUTPUT
          fi

  analyze-changes:
    name: AI Analysis of Changes
    needs: detect-changes
    if: needs.detect-changes.outputs.has_changes == 'true'
    runs-on: ubuntu-latest
    outputs:
      new_components: ${{ steps.analyze.outputs.new_components }}
      modified_components: ${{ steps.analyze.outputs.modified_components }}
      removed_components: ${{ steps.analyze.outputs.removed_components }}

    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Update to new version
        run: |
          npm install @sebgroup/green-core@${{ needs.detect-changes.outputs.new_version }}

      - name: Run AI analysis
        id: analyze
        env:
          # Copilot SDK uses CLI authentication (no API key needed)
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          # AI agent analyzes changes using Copilot SDK
          # See docs/copilot-sdk.context.md for implementation details
          node scripts/analyze-library-changes.js \
            --changelog "${{ needs.detect-changes.outputs.changes }}" \
            --version "${{ needs.detect-changes.outputs.new_version }}"

  update-matrix:
    name: Update Coverage Matrix
    needs: [detect-changes, analyze-changes]
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          ref: main
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Create branch
        run: |
          git checkout -b bot/update-tests-${{ needs.detect-changes.outputs.new_version }}

      - name: Install dependencies
        run: npm install @sebgroup/green-core@${{ needs.detect-changes.outputs.new_version }}

      - name: Update matrix for new components
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          # AI agent creates matrix entries using Copilot SDK
          # Agent uses custom tools to read/write matrix
          node scripts/update-matrix.js \
            --new-components "${{ needs.analyze-changes.outputs.new_components }}" \
            --modified-components "${{ needs.analyze-changes.outputs.modified_components }}"

      - name: Commit matrix changes
        run: |
          git config user.name "Green Testbed Bot"
          git config user.email "bot@green-testbed.local"
          git add test/coverage-matrix.json
          git commit -m "chore: update coverage matrix for green-core@${{ needs.detect-changes.outputs.new_version }}"

  generate-testbed-pages:
    name: Generate Testbed Pages
    needs: [detect-changes, analyze-changes, update-matrix]
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          ref: bot/update-tests-${{ needs.detect-changes.outputs.new_version }}

      - name: Install dependencies
        run: npm install

      - name: Generate pages for new components
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          # AI agent creates testbed showcase pages using Copilot SDK
          node scripts/generate-testbed-pages.js \
            --components "${{ needs.analyze-changes.outputs.new_components }}"

      - name: Commit testbed pages
        run: |
          git add testbed/components/
          git commit -m "feat: add testbed pages for new components"

  generate-tests:
    name: Generate Test Specs
    needs:
      [detect-changes, analyze-changes, update-matrix, generate-testbed-pages]
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          ref: bot/update-tests-${{ needs.detect-changes.outputs.new_version }}

      - name: Install dependencies
        run: npm install

      - name: Generate test specs
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          # Invokes Step 3 test generation using Copilot SDK
          # See scripts/generate-tests.ts for implementation
          node scripts/generate-tests.js \
            --components "${{ needs.analyze-changes.outputs.new_components }}" \
            --tier 1 \
            --batch

      - name: Commit generated tests
        run: |
          git add test/specs/components/
          git commit -m "test: add tier 1 tests for new components"

  create-pr:
    name: Create Pull Request
    needs:
      [
        detect-changes,
        analyze-changes,
        update-matrix,
        generate-testbed-pages,
        generate-tests,
      ]
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          ref: bot/update-tests-${{ needs.detect-changes.outputs.new_version }}

      - name: Push branch
        run: |
          git push origin bot/update-tests-${{ needs.detect-changes.outputs.new_version }}

      - name: Create PR
        uses: peter-evans/create-pull-request@v5
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          branch: bot/update-tests-${{ needs.detect-changes.outputs.new_version }}
          title: "🤖 Update testbed for green-core@${{ needs.detect-changes.outputs.new_version }}"
          body: |
            ## Automated Testbed Update

            This PR was automatically generated to sync with `@sebgroup/green-core@${{ needs.detect-changes.outputs.new_version }}`.

            ### Changes Detected

            **New Components:** ${{ needs.analyze-changes.outputs.new_components }}
            **Modified Components:** ${{ needs.analyze-changes.outputs.modified_components }}
            **Removed Components:** ${{ needs.analyze-changes.outputs.removed_components }}

            ### What's Included

            - ✅ Updated `coverage-matrix.json` with new component entries
            - ✅ Generated testbed showcase pages for new components
            - ✅ Generated Tier 1 test specs for new components
            - ⏳ Tier 2 & 3 tests require manual review and implementation

            ### Next Steps

            1. **Review** the generated tests for correctness
            2. **Run tests locally**: `npm run test-local`
            3. **Refine** any tests that need adjustment
            4. **Complete** higher tier tests as needed
            5. **Merge** when ready

            ### Changelog

            ${{ needs.detect-changes.outputs.changes }}

            ---

            *Generated by Green Testbed Bot* 🤖
          labels: automated, testbed-sync
          reviewers: |
            @joacim.magnusson
          assignees: |
            @joacim.magnusson
```

#### Manual Workflow

**Developer adding tests for existing component:**

```bash
# Option 1: Generate specific tier tests
npm run generate-tests gds-button --tier 2

# Option 2: Generate all missing tests for a component
npm run generate-tests gds-dropdown --all-tiers

# Option 3: Sync specific components (check for updates)
npm run sync-components --components gds-button,gds-dropdown

# Option 4: Full sync (check all components)
npm run sync-components
```

**Script Implementation:**

```json
// package.json
{
  "scripts": {
    "generate-tests": "ts-node scripts/generate-tests.ts",
    "sync-components": "ts-node scripts/sync-components.ts",
    "update-matrix": "ts-node scripts/update-matrix.ts",
    "audit-coverage": "ts-node scripts/audit-coverage.ts",
    "coverage-report": "ts-node scripts/coverage-report.ts"
  }
}
```

#### Continuous Improvement Loop

```
┌─────────────────────────────────────┐
│ Workflow runs                       │
│ ↓ generates tests                   │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Human reviews PR                    │
│ ↓ adds comments/corrections         │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Feedback stored                     │
│ (.github/agent-feedback/)           │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Future agent invocations            │
│ ↓ include past feedback             │
└────────────┬────────────────────────┘
             │
             ↓
┌─────────────────────────────────────┐
│ Agent improves over time            │
│ ↓ learns patterns                   │
└─────────────────────────────────────┘
```

**Feedback Storage Example:**

```typescript
// scripts/store-feedback.ts
export async function storeFeedback(prNumber: number) {
  const pr = await github.pulls.get({ pull_number: prNumber });
  const comments = await github.pulls.listReviews({ pull_number: prNumber });

  const feedback = {
    prNumber,
    component: extractComponentFromPR(pr),
    tier: extractTierFromPR(pr),
    date: new Date().toISOString(),
    humanChanges: await extractChangesFromCommits(pr),
    reviewerComments: comments.data.map(c => c.body),
    approved: pr.merged,
    lessons: await analyzeChangesForLessons(pr)
  };

  await fs.writeFile(
    `.github/agent-feedback/${feedback.component}-${feedback.tier}.json`,
    JSON.stringify(feedback, null, 2)
  );
}

// Triggered on PR merge
// .github/workflows/store-feedback.yml
on:
  pull_request:
    types: [closed]

jobs:
  store-feedback:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - run: node scripts/store-feedback.js ${{ github.event.pull_request.number }}
```

---

### Step 5: Create Test Utilities and Helpers

**Objective:** Eliminate code duplication, provide reusable test utilities, enable consistent patterns.

**File Structure:**

```
test/
├── helpers/
│   ├── component-page.ts          # Page object base class
│   ├── wait-for-state.ts          # State transition helpers
│   ├── snapshot-with-retry.ts     # Visual regression utilities
│   ├── shadow-dom.ts              # Shadow DOM navigation
│   ├── keyboard-nav.ts            # Keyboard interaction helpers
│   ├── accessibility.ts           # A11y testing utilities
│   └── form-control.ts            # Form-specific helpers
├── fixtures/
│   ├── test-data.json             # Reusable test data
│   └── mock-responses.json        # API mocks if needed
└── utils/
    ├── platform-detect.ts         # Browser/device detection
    └── test-context.ts            # Shared test context
```

**Example Implementations:**

**1. Component Page Object Base:**

```typescript
// test/helpers/component-page.ts
import { $ } from "@wdio/globals";

export abstract class ComponentPage {
  constructor(
    protected componentName: string,
    protected testId?: string,
  ) {}

  get component() {
    const selector = this.testId
      ? `#${this.testId}`
      : `[gds-element=${this.componentName}]`;
    return $(selector);
  }

  async waitForReady() {
    await this.component.waitForExist();
    await browser.waitUntil(
      async () => {
        const isReady = await this.component.execute(
          (el: any) => el.hasAttribute("ready") || el.shadowRoot !== null,
        );
        return isReady;
      },
      { timeout: 5000, timeoutMsg: `${this.componentName} not ready` },
    );
  }

  async getProp(propName: string): Promise<any> {
    return await this.component.execute(
      (el: any, prop: string) => el[prop],
      propName,
    );
  }

  async setProp(propName: string, value: any): Promise<void> {
    await this.component.execute(
      (el: any, prop: string, val: any) => {
        el[prop] = val;
      },
      propName,
      value,
    );
  }

  async shadow$(selector: string) {
    return await this.component.shadow$(selector);
  }

  async takeSnapshot(name: string) {
    await expect(this.component).toMatchElementSnapshot(name);
  }
}
```

**Usage:**

```typescript
// test/specs/components/button.spec.ts
import { ComponentPage } from "../../helpers/component-page";

class ButtonPage extends ComponentPage {
  constructor(testId?: string) {
    super("gds-button", testId);
  }

  async click() {
    const button = await this.shadow$("button");
    await button.click();
  }

  async getVariant() {
    return await this.getProp("variant");
  }
}

describe("Button Component /", () => {
  it("should change variant prop", async () => {
    const button = new ButtonPage("test-button");
    await button.waitForReady();

    await button.setProp("variant", "secondary");
    expect(await button.getVariant()).toBe("secondary");
  });
});
```

**2. State Waiting Utilities:**

```typescript
// test/helpers/wait-for-state.ts
export async function waitForState(
  element: WebdriverIO.Element,
  stateName: string,
  expectedValue: boolean = true,
  timeout: number = 5000,
) {
  await browser.waitUntil(
    async () => {
      const stateValue = await element.execute(
        (el: any, state: string) => el[state],
        stateName,
      );
      return stateValue === expectedValue;
    },
    {
      timeout,
      timeoutMsg: `State ${stateName} did not become ${expectedValue}`,
    },
  );
}

export async function waitForEvent(
  element: WebdriverIO.Element,
  eventName: string,
  timeout: number = 5000,
): Promise<any> {
  const eventPromise = browser.execute(
    (el: any, event: string) => {
      return new Promise((resolve) => {
        const handler = (e: Event) => {
          el.removeEventListener(event, handler);
          resolve({
            type: e.type,
            detail: (e as CustomEvent).detail,
          });
        };
        el.addEventListener(event, handler);
      });
    },
    element,
    eventName,
  );

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error(`Event ${eventName} not fired`)),
      timeout,
    ),
  );

  return Promise.race([eventPromise, timeoutPromise]);
}
```

**3. Snapshot Retry Logic:**

```typescript
// test/helpers/snapshot-with-retry.ts
export async function snapshotWithRetry(
  element: WebdriverIO.Element,
  name: string,
  options: { retries?: number; delay?: number } = {},
) {
  const { retries = 3, delay = 500 } = options;

  for (let i = 0; i < retries; i++) {
    try {
      await browser.pause(delay); // Wait for animations
      await expect(element).toMatchElementSnapshot(name);
      return; // Success
    } catch (error) {
      if (i === retries - 1) throw error; // Last retry failed
      console.log(`Snapshot retry ${i + 1}/${retries} for ${name}`);
    }
  }
}
```

**4. Keyboard Navigation:**

```typescript
// test/helpers/keyboard-nav.ts
export const Keys = {
  Enter: "\uE007",
  Space: "\uE00D",
  Escape: "\uE00C",
  Tab: "\uE004",
  ArrowDown: "\uE015",
  ArrowUp: "\uE013",
  ArrowLeft: "\uE012",
  ArrowRight: "\uE014",
} as const;

export async function pressKey(key: string) {
  await browser.keys(key);
  await browser.pause(100); // Allow for key handler execution
}

export async function tabSequence(
  count: number,
): Promise<WebdriverIO.Element[]> {
  const focusedElements: WebdriverIO.Element[] = [];

  for (let i = 0; i < count; i++) {
    await pressKey(Keys.Tab);
    const focused = await browser.execute(() => {
      return {
        tagName: document.activeElement?.tagName,
        id: document.activeElement?.id,
        className: document.activeElement?.className,
      };
    });
    focusedElements.push(focused as any);
  }

  return focusedElements;
}
```

**5. Form Control Helpers:**

```typescript
// test/helpers/form-control.ts
import { ComponentPage } from "./component-page";

export class FormControlPage extends ComponentPage {
  async getValue(): Promise<any> {
    return await this.getProp("value");
  }

  async setValue(value: any): Promise<void> {
    await this.setProp("value", value);
  }

  async isInvalid(): Promise<boolean> {
    return await this.getProp("invalid");
  }

  async getErrorMessage(): Promise<string> {
    return await this.getProp("errorMessage");
  }

  async validate(): Promise<void> {
    await this.component.execute((el: any) => el.validate());
  }

  async clear(): Promise<void> {
    const clearButton = await this.shadow$('[part="clear"]');
    if (await clearButton.isExisting()) {
      await clearButton.click();
    } else {
      await this.setValue("");
    }
  }

  async getLabel(): Promise<string> {
    const label = await this.shadow$("label");
    return await label.getText();
  }
}
```

**Refactored Test Example:**

```typescript
// Before (repetitive)
it("should validate required field", async () => {
  let input = $("[gds-element=gds-input]");
  await input.waitForExist();
  await input.execute((el: any) => el.validate());
  const isInvalid = await input.execute((el: any) => el.invalid);
  const errorMessage = await input.execute((el: any) => el.errorMessage);
  expect(isInvalid).toBe(true);
  expect(errorMessage).toContain("required");
});

// After (using helpers)
it("should validate required field", async () => {
  const input = new FormControlPage("gds-input", "required-input");
  await input.waitForReady();
  await input.validate();

  expect(await input.isInvalid()).toBe(true);
  expect(await input.getErrorMessage()).toContain("required");
});
```

---

### Step 6: Document Testing Standards and Processes

**Objective:** Provide clear documentation for contributors, maintainers, and AI agents.

**Documentation Files:**

```
docs/
├── testing-guide.md              # Main testing documentation
├── maintenance.md                # Automated workflow docs
├── coverage-tiers.md             # Tier definitions and examples
├── contributing-tests.md         # How to add new tests
├── visual-regression.md          # Baseline management
└── troubleshooting.md            # Common issues and solutions
```

**Key Documentation Content:**

**1. Testing Guide Overview**

```markdown
# Testing Guide

## Test Tier System

### Tier 1: Foundation Tests (Required)

- **Purpose:** Ensure component renders and basic functionality works
- **Time:** 15-30 minutes per component
- **Coverage:**
  - Component exists in DOM
  - All props can be set and retrieved
  - Visual snapshot matches baseline
  - Initial state correct

### Tier 2: Interaction Tests (Required)

- **Purpose:** Verify user interactions and component behavior
- **Time:** 45-90 minutes per component
- **Coverage:**
  - All user interactions (click, hover, focus, etc.)
  - All events fire correctly
  - All states (disabled, loading, error, etc.)
  - Keyboard navigation
  - Form validation (for form controls)

### Tier 3: Advanced Tests (Optional)

- **Purpose:** Comprehensive coverage including edge cases
- **Time:** 60-120 minutes per component
- **Coverage:**
  - Full accessibility compliance (ARIA, screen readers)
  - Edge cases and error scenarios
  - Responsive behavior across viewports
  - Performance characteristics

## Examples

[See full examples in docs/testing-guide.md]
```

**2. Maintenance Documentation**

````markdown
# Automated Maintenance Workflow

## How It Works

The testbed automatically stays in sync with `@sebgroup/green-core` through:

1. **Weekly Checks:** GitHub Action runs every Monday
2. **Change Detection:** AI analyzes version differences
3. **Matrix Updates:** Coverage matrix updated with new components
4. **Test Generation:** AI generates test scaffolding
5. **PR Creation:** Automated PR for human review

## Manual Sync

```bash
# Check for updates and generate missing tests
npm run sync-components

# Force regeneration
npm run sync-components --force
```
````

## Responding to Bot PRs

[See full details in docs/maintenance.md]

````

**3. Visual Regression Guide**

```markdown
# Visual Regression Testing

## Baseline Management

Baselines are stored per platform in `test/baselines/{platform}/`.

### Updating Baselines

```bash
# Update all baselines
npm run test-local-update-baselines

# Update specific platform (BrowserStack)
BROWSERSTACK_BUILD_NAME="Update Baselines" npm run test-update-baselines
````

### When to Update

- Component visual design changes
- CSS updates affecting appearance
- Intentional layout modifications

### Review Process

1. Run tests locally first
2. Review diff images in `tmp/diff/`
3. If changes are expected, update baselines
4. Commit baseline changes with descriptive message

[See full details in docs/visual-regression.md]

````

**4. README Updates**

```markdown
# Green Design System Testbed

Automated testing infrastructure for Green Design System components.

## Quick Start

```bash
# Install dependencies
npm install

# Run tests locally
npm run test-local

# Run tests on BrowserStack
npm run test

# Generate tests for a component
npm run generate-tests gds-button --tier 2
````

## Test Coverage

See [coverage report](docs/coverage-report.md) for current status.

## Documentation

- [Testing Guide](docs/testing-guide.md) - How to write tests
- [Maintenance](docs/maintenance.md) - Automated workflow
- [Contributing](docs/contributing-tests.md) - Adding new tests

## Architecture

[See full details in README.md]

```

---

## Step Integration Flow

Visual representation of how all steps work together:

```

┌─────────────────────────────────────────────────────────┐
│ GREEN CORE LIBRARY │
│ @sebgroup/green-core │
└────────────────────────┬────────────────────────────────┘
│ New release
↓
┌─────────────────────────────────────────────────────────┐
│ STEP 4: Maintenance Workflow │
│ .github/workflows/update-tests.yml (Weekly) │
│ • Detects version changes │
│ • AI analyzes changelog │
│ • Identifies new/modified/removed components │
└────────────────────────┬────────────────────────────────┘
│ Updates
↓
┌─────────────────────────────────────────────────────────┐
│ STEP 2: Coverage Matrix (Single Source) │
│ test/coverage-matrix.json │
│ • Tracks what needs testing │
│ • Defines tier requirements │
│ • Records test status │
└──────┬──────────────────────────────────────────────┬───┘
│ Guides Guides │
↓ ↓
┌──────────────────────┐ ┌──────────────────────┐
│ STEP 1: Structure │ │ STEP 3: AI Test Gen │
│ testbed/components/ │ │ scripts/generate-_.ts│
│ • Component pages │◄─────────────┤ • Reads matrix │
│ • Scenarios │ Creates │ • Fetches Green docs │
│ • Routing │ │ • Uses templates │
└──────────────────────┘ │ • Generates tests │
└──────────┬───────────┘
│ Uses
↓
┌─────────────────────────────────────────────────────────┐
│ STEP 5: Test Helpers & Utilities │
│ test/helpers/_ │
│ • ComponentPage base class │
│ • State waiting utilities │
│ • Keyboard navigation │
│ • Form control helpers │
└────────────────────────┬────────────────────────────────┘
│ Used by
↓
┌─────────────────────────────────────────────────────────┐
│ TEST EXECUTION │
│ test/specs/components/_.spec.ts │
│ • WebDriverIO runs tests │
│ • BrowserStack (9 platforms) │
│ • Visual regression │
│ • Generates reports │
└────────────────────────┬────────────────────────────────┘
│ Documented in
↓
┌─────────────────────────────────────────────────────────┐
│ STEP 6: Documentation (Human & AI Guide) │
│ docs/_ │
│ • Testing standards │
│ • Maintenance procedures │
│ • Examples and patterns │
└─────────────────────────────────────────────────────────┘

```

**Continuous Improvement Cycle:**

```

Test Results → Failures/Feedback → Agent Feedback Storage
↑ ↓
│ Next Generation Uses
│ Learned Patterns
│ ↓
└────────── Better Tests ←─────────────┘

````

---

## Further Considerations

### 1. Baseline Management Strategy

**Challenge:** Visual baselines exist for 9 platforms but tests are disabled.

**Recommendation:**
- **Phase 1:** Enable desktop Chrome only (fastest, most stable)
- **Phase 2:** Add Firefox and Safari desktop after Chrome stabilizes
- **Phase 3:** Add mobile devices (most variance, highest maintenance)
- **Threshold:** Use 0.5% mismatch tolerance to reduce false positives
- **Review:** Weekly review of failed snapshots, update baselines as needed

**Implementation:**
```yaml
# wdio.conf.js - gradual rollout
const enabledPlatforms = process.env.VISUAL_PLATFORMS?.split(',') || ['chrome'];
const capabilities = allCapabilities.filter(cap =>
  enabledPlatforms.includes(cap.browserName.toLowerCase())
);
````

### 2. Test Execution Time

**Challenge:** 41 components × 3 tiers × 9 platforms = ~1,107 potential test scenarios

**Recommendations:**

**Tiered CI Strategy:**

- **PR CI:** Tier 1 only, Chrome desktop (fast feedback: ~10 min)
- **Merge to main:** Tier 1 + Tier 2, Chrome + Firefox (~30 min)
- **Nightly:** All tiers, all platforms (comprehensive: ~2 hours)

**Parallel Execution:**

```yaml
# GitHub Actions matrix
strategy:
  matrix:
    tier: [1, 2, 3]
    platform: [chrome, firefox, safari]
  max-parallel: 5 # BrowserStack concurrent limit
```

**Smart Test Selection:**

- Only run tests for changed components on PRs
- Use git diff to detect which components modified
- Full suite on release branches

### 3. Component Discovery Automation

**Challenge:** Need reliable way to detect new/changed components in Green Core.

**Recommendation: Hybrid Approach**

**Option A: Green MCP Server (Preferred)**

- Most reliable component metadata
- Provides props, events, slots, documentation
- Already integrated in project

```typescript
async function discoverComponents() {
  const search = await mcp.searchComponents({ category: "all" });
  return search.results.map((r) => ({
    name: r.name,
    category: r.category,
    api: await mcp.getComponentDocs(r.name),
  }));
}
```

**Option B: Parse green-core Exports**

- Fallback if MCP unavailable
- Parse `@sebgroup/green-core/everything`
- Less reliable for API details

```typescript
import * as greenCore from "@sebgroup/green-core/everything";
const components = Object.keys(greenCore).filter((key) =>
  key.startsWith("Gds"),
);
```

**Combined Approach:**

1. Use MCP for primary discovery (rich metadata)
2. Validate against actual exports (catch missing docs)
3. AI agent reconciles differences and flags issues

---

## Success Metrics

Track these metrics to measure plan effectiveness:

### Coverage Metrics

- **Component Coverage:** % of components with Tier 1/2/3 tests
- **Test Quality:** % of tests passing consistently
- **Visual Regression:** % of snapshots up-to-date

### Automation Metrics

- **Sync Success Rate:** % of automated PRs that merge without issues
- **Generation Accuracy:** % of generated tests requiring minor vs major edits
- **Time Savings:** Hours saved vs manual test writing

### Maintenance Metrics

- **Time to Test:** Days from component release to Tier 1 tests complete
- **Test Staleness:** Age of oldest uncompleted matrix entry
- **Bot PR Review Time:** Avg time to review automated PRs

### Quality Metrics

- **False Positive Rate:** % of test failures that aren't real issues
- **Bug Detection:** % of component bugs caught by tests
- **Cross-browser Issues:** # of platform-specific bugs found

---

## Timeline

**Phase 1: Foundation (Weeks 1-2)**

- Implement Step 1 (restructure)
- Create Step 2 (coverage matrix) for existing 41 components
- Set up Step 5 (helpers) base utilities

**Phase 2: Automation (Weeks 3-4)**

- Implement Step 3 (AI test generation) orchestrator
- Create test templates
- Generate Tier 1 tests for all components

**Phase 3: Integration (Weeks 5-6)**

- Install and configure GitHub Copilot SDK
- Implement Step 4 (maintenance workflow)
- Set up GitHub Actions with Copilot CLI authentication
- Test automated sync process

**Phase 4: Documentation & Refinement (Weeks 7-8)**

- Complete Step 6 (documentation)
- Refine AI prompts based on feedback
- Enable visual regression testing (Chrome only)

**Phase 5: Scale & Optimize (Weeks 9-12)**

- Generate Tier 2 tests for priority components
- Expand visual testing to more platforms
- Optimize test execution times
- Gather feedback and iterate

---

## Next Actions

1. **Review and approve** this plan
2. **Install GitHub Copilot SDK prerequisites**:
   - Install Copilot CLI: `npm install -g @githubnext/github-copilot-cli`
   - Authenticate: `copilot auth`
   - Verify: `copilot --version`
   - Review [docs/copilot-sdk.context.md](../docs/copilot-sdk.context.md)
3. **Prioritize** which steps to implement first
4. **Set up** development environment with Copilot SDK: `npm install @github/copilot-sdk`
5. **Create** initial coverage matrix for existing components
6. **Prototype** test generation for 2-3 components using Copilot SDK to validate approach

---

**Plan Status:** ✅ READY FOR REVIEW  
**Last Updated:** January 26, 2026  
**Next Review:** After Phase 1 completion
