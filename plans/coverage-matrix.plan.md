# Plan Module: Coverage Matrix

Created: 2026-01-26  
Status: Active (living document)

## Goal

Use `test/coverage-matrix.json` as the single source of truth for:

- what to test (requirements per tier)
- where the testbed page and spec live
- progress/status tracking

## Requirements

- Matrix must include:
  - `greenCoreVersion`
  - a component inventory (all supported `gds-*` components)
  - per-component:
    - category and tiering
    - `testbedPage` and `testSpec` references
    - tier requirements (tier1 required; tier2 required; tier3 optional)
    - tier statuses (`pending | in-progress | review | complete`)

## Tiers (summary)

- Tier 1 (required): renders + basic props + optional visual snapshot
- Tier 2 (required): interactions + events + states + keyboard + validation (for form controls)
- Tier 3 (optional): accessibility + edge cases + responsiveness

## Validation rules

- Tier sequencing: tier2 cannot be `complete` unless tier1 is `complete`.
- Required tier1 fields exist and have correct types.
- File references: referenced pages/specs exist.
- Category consistency checks (e.g. form controls must include validation requirements in tier2).
- Staleness checks (flag entries not updated recently).

## Tooling

- `npm run validate-matrix`
  - validates matrix integrity (and later JSON schema)

- `npm run coverage-report`
  - prints status summary (counts per tier/status)

## Update process

- Manual updates (human): adjust requirements when component APIs change.
- Agentic updates (preferred): matrix sync agent proposes updates based on Green MCP + repo state.

## Success criteria

- Matrix stays aligned with the real component inventory.
- Coverage reports reflect real progress and highlight gaps.
