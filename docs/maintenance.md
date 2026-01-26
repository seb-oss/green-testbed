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

- what each component must cover (tier requirements)
- where the testbed page and spec live
- status tracking (pending / in-progress / review / complete)

After edits:

- run `npm run validate-matrix`
- run `npm run coverage-report`

### 2) Generate tests (current state)

There is a generator script: `npm run generate-tests <gds-component> --tier <1|2|3>`.

Important:

- The generator currently uses cached docs (see `scripts/green-mcp-client.js`); it does not yet fetch live docs from Green MCP.
- Always run the generated tests locally (`npm run test-local`) and review them before merging.

### 3) Review test changes

When reviewing a new/updated spec, look for:

- assertions that can’t fail (e.g., checking existence after selecting an element that would already throw)
- unstable selectors (prefer explicit ids in showcase pages where possible)
- missing waits for async UI state changes
- inconsistent routing (tests should use the canonical component-page URL)

## CI workflows

- Publish GitHub Pages: `.github/workflows/publish-page.yml`
- BrowserStack regression: `.github/workflows/run-tests.yml`
