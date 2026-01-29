# Implementation status (living document)

Last updated: 2026-01-29

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
- Matrix structure uses categories (`interaction|accessibility|visual`) with the policy: interaction + accessibility required; visual optional

**Remaining**

- Populate matrix for the full component set (current matrix covers only a few components)
- Add schema validation (plan calls for `test/schemas/coverage-matrix.schema.json`)
- Add higher-value validations mentioned in the plan (e.g., staleness / category consistency / green-core version alignment)
- Add audit tooling that compares “matrix requirements” vs “what tests actually cover”

## Agentic workflow implementation

### A) Matrix sync agent (keeps matrix in sync)

**Status**: Implemented

**Definition (from requirement)**

- An agentic workflow that:
  - Queries Green MCP for component inventory + metadata
  - Inspects current test scaffolds/pages and test specs
  - Updates `test/coverage-matrix.json` to keep it in sync

**Remaining**

- Decide how the workflow is invoked (manual CLI vs CI schedule vs both)
- Expand validations for what “in sync” means (source of truth: Green MCP + repo state)

### B) Scaffolds + tests generator agent (matrix → pages/tests)

**Status**: Implemented (generator + local orchestrator)

**Implemented**

- A generator script exists: `scripts/generate-tests.js` using `@github/copilot-sdk`
- The generator supports focusing via `--components` and `--categories` (in addition to the single-target flags).
- The generator can create scaffolds and register them (default behavior: create missing only).
- A local iterative orchestrator exists (generate → run → fix → rerun → report).
- Generated spec output is normalized (no markdown fences, no natural-language preambles).

**Gaps to close**

- Ensure generated tests include a short per-test goal comment (`/** Goal: ... */`) for reviewability.
- Refactor responsibilities so the orchestrator never edits repo files:
  - Orchestrator runs/analyzes and requests fixes.
  - Generator performs one bounded fix attempt per request.
- Add a dedicated CLI tool to update coverage status in the matrix (no direct matrix edits by orchestrator):
  - Set `review` after pass
  - Set `blocked` after max attempts
  - Allow review agents to set `validated`

### C) Test review agent (quality gate)

**Status**: Not implemented (definition split into matrix review + quality review)

**Definition (updated)**

- Matrix review agent: reviews `test/coverage-matrix.json` against Green MCP and emits structured feedback/patch suggestions.
- Quality review agent: reviews specs/scaffolds for test quality and emits actionable todos.

**Remaining**

- Implement matrix review agent + iterative matrix loop (generate → review → apply → review, max N)
- Implement quality review agent that evaluates spec + scaffold quality and produces an actionable todo list
- Store quality review results using the hybrid model:
  - Small per-category quality summary fields in `test/coverage-matrix.json`
  - Full per-run review report JSON under `logs/review-runs/<run-id>/...`
- Define and implement the initial quality static checks:
  - no bypass patterns
  - no markdown code fences (```)
  - per-test `/** Goal: ... */` comments + meaningful assertions
  - selector quality (prefer stable `#id` fixtures)
  - navigation uses `testbedUrl('/component/<tag>')`
- Optionally add dynamic heuristics using orchestrator logs (flake signals)
- Add optional “matrix improvement feedback” output from quality review and an opt-in flag for matrix sync to consume it
- Wire the feedback loop so the orchestrator can consume the todo list and iterate

## Coverage status updates

**Planned**

- Introduce a dedicated status-update CLI that can only modify per-category status fields in `test/coverage-matrix.json`.
- The orchestrator and review agents use it to set `review|blocked|validated`.

Confirmed: advisory-only (must not block CI)

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
