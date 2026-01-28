# Plan Module: Agentic Workflows (Copilot SDK)

Created: 2026-01-26  
Status: Active (living document)

## Goal

Use GitHub Copilot SDK agents (with Green MCP as primary knowledge source) to:

- keep the coverage matrix up to date
- generate/update component scaffolds and tests
- review tests for quality issues

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

### 2) Generator agent (matrix → scaffolds + tests + execution)

Objective:

- Read the matrix entry and produce missing/updated:
  - component showcase pages (scaffolds)
  - WDIO specs (Interaction / Accessibility / Visual)

Implementation approach:

- Separate concerns:
  - `scripts/generate-tests.js` remains the single-pass generator (scaffolds + specs).
  - A new local-only orchestrator script runs the iterative workflow:
    - generate → run → analyze → fix → rerun → report.

Verification:

- Execute tests after generation and report pass/fail.
- Test execution is implemented in the local orchestrator (local-only for now).
- The orchestrator prints agent-authored progress commentary (reasoning) for each step, e.g.
  - "Now writing tests for button ranks"
  - "Test X failed because of Y; I will change Z to fix it"

Human-in-loop:

- Generated work should set matrix status to `review` until accepted.

Quality & safety rules:

- Never "cheat" tests to pass (no bypasses like removing assertions, unconditional expects, or hiding failures).
- If the agent can’t make progress, it must stop and report a reason with evidence, e.g.
  - component bug
  - scaffold issue (missing fixture/IDs)
  - test/framework/config issue

Goal comments:

- Generated tests should include a short `/** Goal: ... */` comment above each test to make intent explicit.

Iteration limits (defaults):

- Max attempts to fix test logic: 3
- Max reruns to rule out flakiness: 2
- Max attempts to rule out component bug: 2

Operator controls:

- Support focusing generation scope (e.g. `--components gds-button --categories interaction`).
- Keep scaffolds default safe: create missing scaffolds only, update existing only when explicitly requested.

Open questions:

- Canonical component-page URL for tests and generation:
  - `${TESTBED_URL}/green-testbed/component/<name>`

### 3) Test review agent (quality gate)

Objective:

- Review existing/new specs and scaffolds and report issues such as:
  - assertions that can’t fail / always-pass patterns
  - wrong selectors or testing the wrong behavior
  - missing waits / likely flakiness
  - anti-patterns for shadow DOM access

Fit in the end-to-end workflow:

1. Matrix sync updates component inventory + current coverage status
2. Matrix informs what needs new/updated tests generated
3. Orchestrator iterates on specs + scaffolds (generate → run → fix → rerun)
4. Review agent validates test/scaffold quality (advisory)
5. Review agent outputs an actionable todo list
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

## Maintenance automation (CI)

Objective:

- Detect green-core updates and orchestrate:
  - matrix sync
  - scaffold/test generation
  - PR creation for review

Note:

- Start manual-first; introduce scheduling when workflows are stable.
