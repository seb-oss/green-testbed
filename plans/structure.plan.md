# Plan Module: Structure

Created: 2026-01-26  
Status: Active (living document)

## Goal

Create a modular testbed structure that scales with the component library and enables reliable automation.

## Target structure

- Component pages: `testbed/components/`
  - One file per component showcase.
  - Each page focuses on variants, states, and common props.
  - Each showcase should expose stable selectors (prefer explicit `id`s for key elements).

- Scenario pages: `testbed/scenarios/`
  - End-to-end user flows across multiple components.
  - Scenarios are not “component catalog pages”.

- Tests:
  - Component specs: `test/specs/components/`
  - Scenario specs: `test/specs/scenarios/` (future)

## Routing

- Provide:
  - an index page listing entry points
  - a component index listing component showcase pages
  - a per-component route for component pages

- Routing must work on GitHub Pages and locally.

## Testing ergonomics

- Component pages should be designed for automation:
  - deterministic default state
  - stable IDs for key variants/states
  - avoid animation-dependent timing where possible

## Done definition

- Each component has:
  - a showcase page
  - a stable route
  - at least Interaction tests (see coverage matrix module)

## Open decisions

- Canonical component route format used by tests and generators:
  - `${TESTBED_URL}/green-testbed/component/<name>`
