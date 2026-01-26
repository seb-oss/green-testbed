# Implementation status (living document)

Last updated: 2026-01-26

Goal: Track what’s implemented vs what’s left, without duplicating the full plan.

## Structure

**Implemented**

- Component pages scaffold exists: `testbed/components/` with registry + host
- Scenario split exists: `testbed/scenarios/` and the form scenario lives there
- Router supports component pages and component index

**Remaining**

- Expand component pages beyond the current small subset (start from a component inventory source)
- Canonical component-page URL is decided: `${TESTBED_URL}/green-testbed/component/<name>`

## Coverage matrix

**Implemented**

- Matrix file exists: `test/coverage-matrix.json`
- Scripts exist: `npm run validate-matrix`, `npm run coverage-report`
- Matrix validation checks basic shape + referenced file existence

**Remaining**

- Populate matrix for the full component set (current matrix covers only a few components)
- Add schema validation (plan calls for `test/schemas/coverage-matrix.schema.json`)
- Add higher-value validations mentioned in the plan (e.g., staleness / category consistency / green-core version alignment)
- Add audit tooling that compares “matrix requirements” vs “what tests actually cover”
- Update matrix structure to reflect the new policy: Interaction + Accessibility required; Visual optional

## Agentic workflow implementation

### A) Matrix sync agent (keeps matrix in sync)

**Status**: Not implemented

**Definition (from requirement)**

- An agentic workflow that:
  - Queries Green MCP for component inventory + metadata
  - Inspects current test scaffolds/pages and test specs
  - Updates `test/coverage-matrix.json` to keep it in sync

**Remaining**

- Decide how the workflow is invoked (manual CLI vs CI schedule vs both)
- Define what “in sync” means (source of truth: Green MCP + repo state)

### B) Scaffolds + tests generator agent (matrix → pages/tests)

**Status**: Partially implemented (scaffold)

**Implemented**

- A generator script exists: `scripts/generate-tests.js` using `@github/copilot-sdk`

**Gaps to close**

- Use Green MCP as reference by connecting via Copilot SDK `mcpServers` (no cached/placeholder doc fetch)
- Create/verify scaffolds (component pages) in addition to tests (if required)
- Execute tests after generation and report pass/fail
- Ensure generated spec naming/path matches the matrix `testSpec` convention
- Support optional verification by running `npm run test-local` (opt-in)

### C) Test review agent (quality gate)

**Status**: Not implemented

**Definition (from requirement)**

- An agent that reads tests and reports issues (e.g., always-pass assertions, wrong selectors, testing the wrong thing, missing awaits, flaky waits)

**Remaining**

- Decide output format (console report vs markdown report vs PR review comments)
- Confirmed: advisory-only (must not block CI)

## Docs

**Implemented**

- Copilot SDK context doc exists: `docs/copilot-sdk.context.md`

**Remaining**

- Add short usage + maintenance docs for human maintainers (see `docs/maintenance.md`)

## Decisions (resolved)

- Canonical component-page URL in tests: `${TESTBED_URL}/green-testbed/component/<name>`
- Inventory authority for matrix sync: Green MCP is authoritative
- Generator may optionally run `npm run test-local` (opt-in)
- Review agent is advisory-only
