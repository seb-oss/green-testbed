# Plan Module: Agentic Workflows (Copilot SDK)

Created: 2026-01-26  
Status: Active (living document)

## Goal

Use GitHub Copilot SDK agents (with Green MCP as primary knowledge source) to:

- keep the coverage matrix up to date
- generate/update component scaffolds and tests
- review the coverage matrix for MCP alignment
- review tests/scaffolds for quality issues

## Dependencies

- Copilot SDK is the runtime for agentic workflows.
- Green MCP provides component docs and metadata (accessed directly via Copilot SDK `mcpServers`).

## Workflows

### 1) Matrix sync agent (inventory + repo → matrix)

Objective:

- Ensure `test/coverage-matrix.json` matches:
  - actual component inventory
  - existing scaffolds/pages
  - existing specs

Capabilities:

- Query Green MCP for component inventory and docs.
- Inspect repo paths to detect existing pages/specs.
- Propose add/update/remove operations in the matrix.

Human-in-loop:

- Changes should be reviewable (PR or explicit output diff) before merging.

Open questions:

- Inventory source of truth: **Green MCP is authoritative**.
- Optional: installed `@sebgroup/green-core` exports may be used as a sanity check, but must not override MCP.
- MCP integration approach: use Copilot SDK `mcpServers` to connect to Green MCP tools (no bespoke Green MCP client wrapper).
- Invocation: start manual-first; add scheduling when stable.

### 2) Matrix review agent (matrix + MCP → feedback → matrix)

Objective:

- Review the **coverage matrix itself** for correctness and usefulness, primarily against Green MCP.
- Produce structured feedback that can be applied back to the matrix in a bounded, low-churn way.

Primary inputs:

- `test/coverage-matrix.json`
- Green MCP component docs (API tables: properties/events/slots/methods)

Optional inputs (actionability check; keep as opt-in):

- Existing scaffolds/specs to answer “is this requirement realistically automatable with stable selectors/fixtures?”

Outputs:

- A machine-readable “matrix review feedback” report (JSON) containing:
  - findings + rationale
  - suggested matrix patches (minimal changes)
  - confidence (`high|medium|low`)
- A concise console summary

Iteration loop (matrix orchestration):

1. Matrix sync generates/updates the matrix (mechanical)
2. Matrix review agent reviews matrix vs MCP and emits feedback
3. Matrix sync applies high-confidence feedback (optional flag)
4. Matrix review agent re-runs (max N iterations)
5. Stop and surface unresolved items for human decision

Notes:

- This agent should remain **advisory** and conservative in its suggested patches.
- It must not attempt to enforce “test every API row”; MCP API tables are used as a heuristic signal.

### 3) Test generator agent (matrix + feedback → scaffolds + tests)

Objective:

- Own **all repo-writing** for tests and scaffolds.
- Produce missing/updated:
  - component showcase pages (scaffolds)
  - WDIO specs (Interaction / Accessibility / Visual)
- Apply **exactly one** fix attempt when given a fix request from the orchestrator.

Implementation approach:

- `scripts/generate-tests.js` remains the single-pass generator (scaffolds + specs).
- Add a generator “fix mode” entrypoint (same script or a sibling) that:
  - reads a structured fix request (from an orchestrator run folder)
  - makes one bounded change (spec and/or scaffold)
  - writes a structured fix response

Verification:

- Test execution is performed by the orchestrator (local-only for now).
- The generator should rely on orchestrator artifacts (e.g. `run-summary.json`) rather than duplicating command details.

Human-in-loop:

- Generated work should set matrix status to `review` until accepted.
- Final sign-off for test correctness is owned by review agents.

Quality & safety rules:

- Never "cheat" tests to pass (no bypasses like removing assertions, unconditional expects, or hiding failures).
- If the generator can’t make progress within a single fix attempt, it must return a structured outcome with evidence (e.g. suspect component bug, environment issue).

Goal comments:

- Generated tests should include a short `/** Goal: ... */` comment above each test to make intent explicit.

Iteration limits (defaults):

- The generator performs one fix attempt per request.
- Attempt budgets are owned by the orchestrator.

Operator controls:

- Support focusing generation scope (e.g. `--components gds-button --categories interaction`).
- Keep scaffolds default safe: create missing scaffolds only, update existing only when explicitly requested.
- Use derived locations for now (e.g. `testbed/components/<slug>.ts`).

Open questions:

- Canonical component-page URL for tests and generation:
  - `${TESTBED_URL}/green-testbed/component/<name>`

### 4) Test run orchestrator (runs tests → analyzes → requests updates)

Objective:

- Run tests, analyze results, and request updates from the test generator.
- Be deterministic and auditable: **no direct file edits**.

Implementation approach:

- `scripts/orchestrate-tests.local.js` remains the iterative loop:
  - generate → run → analyze → request fix → rerun → report.

Artifacts:

- Writes per-run artifacts under `logs/orchestrator-runs/<run-id>/`:
  - `run-summary.json`
  - raw command logs
  - `fix-request.json` (per fix attempt)
  - `fix-response.json` (from the generator, per fix attempt)

Iteration limits (defaults):

- Max attempts to fix test logic: 3
- Max reruns to rule out flakiness: 2
- Max attempts to rule out component bug: 2

Matrix status progression:

- After a clean pass: set category `status` to `review`.
- After max attempts reached: set category `status` to `blocked`.
- Review agents may set category `status` to `validated`.

Status update mechanism:

- Introduce a dedicated CLI tool that can only update coverage status fields.
- Orchestrator is allowed to invoke this tool, but is not allowed to edit the matrix directly.

### 5) Quality review agent (specs/scaffolds quality gate)

Objective:

- Review existing/new specs and scaffolds and report issues such as:
  - assertions that can’t fail / always-pass patterns
  - wrong selectors or testing the wrong behavior
  - missing waits / likely flakiness
  - anti-patterns for shadow DOM access

Fit in the end-to-end workflow:

1. Matrix sync updates component inventory + current coverage status
2. Matrix (optionally after matrix-review iteration) informs what needs tests/scaffolds generated
3. Orchestrator iterates (generate → run → request fix → rerun)
4. Quality review agent validates spec/scaffold quality (advisory)
5. Quality review agent outputs an actionable todo list
6. Orchestrator can consume that todo list and re-run step (3)

The goal is to automate this loop with minimal human intervention, except when there are real component issues.

Recommended storage model (hybrid):

- Keep `test/coverage-matrix.json` as the source of truth for coverage requirements + coverage status.
- Add a small, stable per-component/per-category **quality summary** in the matrix.
- Write full, detailed review findings (with evidence) into a separate per-run artifact under `logs/`.

This keeps the matrix decision-friendly (easy for automation to consume) while preserving a rich audit trail and avoiding constant large diffs in the matrix.

Proposed matrix additions (plan-level; optional fields):

- Under each category object (`interaction|accessibility|visual`), add:
  - `qualityStatus`: `unknown|needs-work|review|approved`
  - `qualityLastReviewed`: ISO date (YYYY-MM-DD)
  - `qualityLastReport`: relative path to latest review report JSON

Additional output stream (optional): matrix improvement feedback

- The quality review agent may also emit **matrix improvement feedback** as a separate JSON artifact.
- This is distinct from the matrix review agent:
  - Matrix review agent: evaluates the matrix itself against MCP (mechanical correctness + requirement quality)
  - Quality review agent: evaluates “what we are actually testing” and suggests improvements holistically
- This feedback can be an optional input for the matrix sync agent (apply only high-confidence, bounded changes).

Inputs:

- The spec under review (initially the generated spec paths like `test/specs/components/<slug>.<category>.generated.spec.ts`)
- The related scaffold (e.g. `testbed/components/<slug>.ts`) and registry entry when relevant
- Optional: latest orchestrator logs and run summary (e.g. `logs/orchestrator-runs/<run>/...`) to detect flakiness patterns

Checks (what the review agent should validate):

- Static checks (fast, deterministic)
  - No bypass patterns (`describe.skip`, `it.skip`, `pending`, etc)
  - No markdown code fences (```)
  - Each test has a `/** Goal: ... */` comment and a meaningful assertion
  - Selector quality: prefer stable `#id` fixtures when scaffolds provide them
  - Wait discipline: flag missing waits for async state changes; flag excessive static sleeps
  - Navigation uses the shared helper `testbedUrl('/component/<tag>')`
- Dynamic/heuristic checks (optional)
  - Parse WDIO output for flake signals (timeouts/stale element) and mark as likely flaky
  - Heuristic mapping: compare goal comments/test names to matrix requirements to detect obvious gaps

Output:

- A structured, machine-readable review report (JSON) containing:
  - findings with severity, evidence (snippets/paths), and suggested actions
  - a generated “todo list” section suitable for feeding back into the orchestrator
- A concise console summary for humans

Output location (proposed):

- Detailed report: `logs/review-runs/<run-id>/review-report.json` (or per-target files under that dir)
- Matrix updates: write only the small `qualityStatus` + `qualityLastReviewed` + `qualityLastReport` pointer

Open questions:

- This agent is **advisory only** (must not block CI).
- Whether to run review only on passing specs (recommended initially) vs also on failing specs.
- Whether the orchestrator should auto-apply low-risk quality fixes (recommended: start as “todo only”).

Status updates:

- Quality review agent may set category `status` to `validated` when it deems the tests to cover the intended target.
- This should be done via the same dedicated status-update CLI tool (not by editing the matrix directly).

## Maintenance automation (CI)

Objective:

- Detect green-core updates and orchestrate:
  - matrix sync
  - scaffold/test generation
  - PR creation for review

Note:

- Start manual-first; introduce scheduling when workflows are stable.
