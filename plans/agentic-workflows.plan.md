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

- Review existing/new specs and report issues such as:
  - assertions that can’t fail / always-pass patterns
  - wrong selectors or testing the wrong behavior
  - missing waits / likely flakiness
  - anti-patterns for shadow DOM access

Output:

- Should produce a concise report per spec/component.

Open questions:

- This agent is **advisory only** (must not block CI).
- Report location is TBD (stdout vs markdown vs PR comments).

## Maintenance automation (CI)

Objective:

- Detect green-core updates and orchestrate:
  - matrix sync
  - scaffold/test generation
  - PR creation for review

Note:

- Start manual-first; introduce scheduling when workflows are stable.
