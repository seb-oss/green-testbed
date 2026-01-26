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

- Is MCP the authoritative inventory, or should we cross-check installed `@sebgroup/green-core` exports?
- Should this run on a schedule, or be manual-only initially?

### 2) Generator agent (matrix → scaffolds + tests + execution)

Objective:

- Read the matrix entry and produce missing/updated:
  - component showcase pages (scaffolds)
  - WDIO specs (Interaction / Accessibility / Visual)

Verification:

- Execute tests after generation (local or CI) and report pass/fail.

Human-in-loop:

- Generated work should set matrix status to `review` until accepted.

Open questions:

- Canonical component-page URL format to use in generated tests.
- Whether test execution is default or opt-in.

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

- Should it be CI-blocking or advisory-only?
- Where should reports live (stdout, markdown file, PR comments)?

## Maintenance automation (CI)

Objective:

- Detect green-core updates and orchestrate:
  - matrix sync
  - scaffold/test generation
  - PR creation for review

Note:

- Start manual-first; introduce scheduling when workflows are stable.
