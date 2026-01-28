# Maintenance (human quick guide)

This is a short guide for keeping the testbed healthy.

## Daily commands

- Validate the coverage matrix: `npm run validate-matrix`
- Print coverage status summary: `npm run coverage-report`
- Run tests locally: `npm run test-local`
- Run tests on BrowserStack (CI style): `npm run test`

## Current structure

- Component pages: `testbed/components/` (one showcase per component)
- Scenarios: `testbed/scenarios/` (user flows)
- Component specs: `test/specs/components/`

## Workflow overview

### 1) Update the matrix

Until the matrix-sync agent exists, treat `test/coverage-matrix.json` as the source of truth for:

- what each component must cover (interaction + accessibility required; visual optional)
- where the testbed page and spec live
- status tracking (pending / in-progress / review / complete)

After edits:

- run `npm run validate-matrix`
- run `npm run coverage-report`

### 2) Generate tests (current state)

There is a generator script that can focus generation:

- `npm run generate-tests -- --components gds-button --categories interaction`
- Multiple targets: `npm run generate-tests -- --components gds-button,gds-input --categories interaction,accessibility`

Scaffold generation:

- Default behavior creates missing scaffolds only (safe).
- Force scaffold updates (modify existing showcase pages): `--scaffold-mode update`
- Never touch scaffolds: `--no-scaffolds` (or `--scaffold-mode keep`)

Backwards compatible:

- `npm run generate-tests -- gds-button --category interaction`

Important:

- The generator should fetch live docs from Green MCP via Copilot SDK MCP integration (`mcpServers`).
- Prefer running generated tests locally and iterating on failures instead of merging blind generation.

Recommended workflow (local):

- Generate: `npm run generate-tests -- --components gds-button --categories interaction`
- Run: `npm run test-local -- --spec test/specs/components/button.interaction.generated.spec.ts`

Policy:

- Do not bypass failures to make tests pass; fix the underlying issue or report the cause.
- If the failure appears flaky, rerun a limited number of times before changing logic.

### 3) Review test changes

When reviewing a new/updated spec, look for:

- assertions that can’t fail (e.g., checking existence after selecting an element that would already throw)
- unstable selectors (prefer explicit ids in showcase pages where possible)
- missing waits for async UI state changes
- inconsistent routing (tests should use the canonical component-page URL)

## CI workflows

- Publish GitHub Pages: `.github/workflows/publish-page.yml`
- BrowserStack regression: `.github/workflows/run-tests.yml`
