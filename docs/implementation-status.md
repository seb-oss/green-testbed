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
- Decide and document the canonical route format for component pages (see Open questions)

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
- Define what “in sync” means (source of truth: MCP vs repo vs hybrid)

### B) Scaffolds + tests generator agent (matrix → pages/tests)

**Status**: Partially implemented (scaffold)

**Implemented**

- A generator script exists: `scripts/generate-tests.js` using `@github/copilot-sdk`

**Gaps to close**

- Use Green MCP as reference (current doc fetch is cached placeholder)
- Create/verify scaffolds (component pages) in addition to tests (if required)
- Execute tests after generation and report pass/fail
- Ensure generated spec naming/path matches the matrix `testSpec` convention

### C) Test review agent (quality gate)

**Status**: Not implemented

**Definition (from requirement)**

- An agent that reads tests and reports issues (e.g., always-pass assertions, wrong selectors, testing the wrong thing, missing awaits, flaky waits)

**Remaining**

- Decide output format (console report vs markdown report vs PR review comments)
- Decide whether it should be blocking (CI fail) or advisory

## Docs

**Implemented**

- Copilot SDK context doc exists: `docs/copilot-sdk.context.md`

**Remaining**

- Add short usage + maintenance docs for human maintainers (see `docs/maintenance.md`)

## Open questions (need answers to avoid guessing)

- What should be treated as the canonical component-page URL in tests?
  - Option A: `${TESTBED_URL}/green-testbed/component/<name>` (matches current router)
  - Option B: `${TESTBED_URL}/component/<name>` (matches the plan text)
- For the “matrix sync agent”: is Green MCP the authoritative inventory, or should we cross-check installed `@sebgroup/green-core` exports too?
- For the generator agent: should it be allowed to run `npm run test-local` as part of its workflow (and fail fast), or only generate and leave execution to humans/CI?
- For the review agent: do you want it to be CI-blocking, or purely advisory?
