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
- Green MCP provides component docs and metadata.

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
- Invocation: start manual-first; add scheduling when stable.

### 2) Generator agent (matrix → scaffolds + tests + execution)

Objective:

- Read the matrix entry and produce missing/updated:
  - component showcase pages (scaffolds)
  - WDIO specs (Interaction / Accessibility / Visual)

Verification:

- Execute tests after generation and report pass/fail.
- Test execution must be supported as **optional** (workflow can run with or without it).

Human-in-loop:

- Generated work should set matrix status to `review` until accepted.

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
