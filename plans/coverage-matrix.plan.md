# Plan Module: Coverage Matrix

Created: 2026-01-26  
Status: Active (living document)

## Goal

Use `test/coverage-matrix.json` as the single source of truth for:

- what to test (requirements per test category)
- where the testbed page and spec live
- progress/status tracking

## Requirements

- Matrix must include:
  - `greenCoreVersion`
  - a component inventory (all supported `gds-*` components)
  - per-component:
    - component classification (e.g. interactive, form-control, container, display)
    - `testbedPage` and `testSpec` references
    - test category requirements (what must be validated)
    - test category statuses (`pending | in-progress | review | complete`)

## Test categories (summary)

- Interaction tests (required): user interaction, keyboard navigation, events, and behavior/state validation.
- Accessibility tests (required): semantic roles/ARIA, focus handling, and other a11y checks.
- Visual tests (optional): baseline-backed visual comparisons using the visual regression tooling.

Policy:

- Every component must have Interaction + Accessibility coverage requirements and track their status.
- Visual coverage requirements/status may be omitted or kept `pending` depending on adoption.

## Validation rules

- Required fields exist and have correct types.
- Interaction and Accessibility sections must exist for every component.
- File references: referenced pages/specs exist.
- Category consistency checks (e.g. form controls must include validation-related requirements under Interaction tests).
- Staleness checks (flag entries not updated recently).

## Tooling

- `npm run validate-matrix`
  - validates matrix integrity (and later JSON schema)

- `npm run coverage-report`
  - prints status summary (counts per test category/status)

## Update process

- Manual updates (human): adjust requirements when component APIs change.
- Agentic updates (preferred): Coverage Matrix Maintainer proposes updates based on Green MCP + repo state.

## Success criteria

- Matrix stays aligned with the real component inventory.
- Coverage reports reflect real progress and highlight gaps.
