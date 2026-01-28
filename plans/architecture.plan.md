# Architecture Plan: Green Testbed + Coverage + Agentic Workflows

Created: 2026-01-26  
Status: Active (living document)

## Goal

Provide a scalable testbed architecture for Green Design System web components with:

- a single source of truth for coverage requirements and status
- repeatable component/scenario pages for stable automation
- automated maintenance workflows that keep pace with `@sebgroup/green-core`

## System Overview

This repo consists of four cooperating layers:

1. **Testbed UI (Vite + Lit + Green web components)**
   - Hosts component showcase pages and scenario pages.
   - Provides stable URLs and selectors for automation.

2. **Test execution (WebdriverIO + BrowserStack + Visual service)**
   - Runs specs across desktop/mobile capabilities.
   - Supports visual baselines (progressively enabled).

3. **Coverage tracking (coverage matrix + validation/report scripts)**
   - `test/coverage-matrix.json` defines: what must be tested, where pages/specs live, and status.
   - Scripts validate integrity and produce summary reports.

4. **Agentic workflows (Copilot SDK + Green MCP)**
   - Agents read Green MCP docs and repo state to:
     - keep the matrix in sync
     - generate/update pages and tests
       - review tests for quality issues and produce actionable todos

## Data Flow (high level)

- Green MCP (authoritative) → component inventory + API metadata
- Copilot SDK connects to Green MCP via `mcpServers` (no bespoke MCP client wrapper)
- Optional: installed `@sebgroup/green-core` exports → sanity check only
- Agent(s) → propose/update `test/coverage-matrix.json`
- Agent(s) → generate/maintain `testbed/components/*` and `test/specs/components/*`
- WDIO → executes tests → diffs/artifacts (visual diffs, logs)
- Review agent → emits review findings/todos → stored as per-run reports under `logs/`
- Review agent → updates a small “quality summary” in `test/coverage-matrix.json` (optional fields)

## Solution anatomy (diagram)

```mermaid
%%{init: {
   "theme": "base",
   "themeVariables": {
      "background": "#ffffff",
      "primaryTextColor": "#333333",
      "secondaryTextColor": "#333333",
      "tertiaryTextColor": "#333333",
      "lineColor": "#333333",
      "noteTextColor": "#333333",
      "actorTextColor": "#333333",
      "signalTextColor": "#333333"
   }
}}%%
sequenceDiagram
   autonumber

   participant MCP as Green MCP
   participant CORE as @sebgroup/green-core
   participant MS as Matrix Sync Agent
   participant MATRIX as test/coverage-matrix.json
   participant MR as Matrix Review Agent
   participant GEN as Generator
   participant SPECS as test/specs/components
   participant SCAFFOLDS as testbed/components
   participant ORCH as Orchestrator
   participant WDIO as WebdriverIO
   participant QR as Quality Review Agent
   participant LOGS as logs/
   actor HUMAN as Human

   rect rgb(238, 246, 255)
      note over MS,MATRIX: Matrix loop
      MS->>MCP: Read component inventory and API docs
      MS->>CORE: Read installed package signals (optional)
      MS->>MATRIX: Update matrix (apply)
      MS->>LOGS: Write matrix-sync-report.json

      MR->>MATRIX: Read requirements and current status
      MR->>MCP: Compare with docs (heuristic gap detection)
      MR->>LOGS: Write matrix-review-report.json

      opt Human review when needed
         HUMAN-->>LOGS: Review matrix-review-report.json
      end
   end

   rect rgb(248, 250, 252)
      note over GEN,WDIO: Test + scaffold loop
      GEN->>MATRIX: Select components + categories
      GEN->>SPECS: Generate or update specs
      GEN->>SCAFFOLDS: Generate or update pages and registry

      loop Iterate until pass or limits hit
         ORCH->>WDIO: Run tests
         WDIO-->>ORCH: Results + errors
         ORCH->>LOGS: Write run-summary.json and logs
         opt Fix attempt
            ORCH->>SPECS: Patch generated specs (guarded)
            ORCH->>SCAFFOLDS: Patch pages/registry (guarded)
         end
      end

      opt Human review when needed
         HUMAN-->>LOGS: Review run-summary.json
      end
   end

   rect rgb(255, 247, 237)
      note over QR,LOGS: Quality review loop
      QR->>SPECS: Review spec quality
      QR->>SCAFFOLDS: Review page/scaffold quality
      QR->>LOGS: Write review-report.json and todo-list.json
      QR->>LOGS: Write matrix-improvement.json (optional)

      opt Feed back into automation
         ORCH-->>LOGS: Consume todo-list.json (optional)
         MS-->>LOGS: Consume matrix-improvement.json (optional)
      end

      opt Human review when needed
         HUMAN-->>LOGS: Review review-report.json
      end
   end

```

## Principles

- **Matrix as source of truth** for coverage requirements and status.
- **Stable automation surfaces**: component pages expose stable IDs/attributes for selectors.
- **Human-in-the-loop**: generated changes move statuses to `review` until confirmed.
- **Incremental rollout**: enable heavier checks (visual + accessibility + more platforms) gradually.

## Interfaces (contracts)

- **Routing contract**: there is a canonical component-page URL format used by all specs and generators.
- **Matrix contract**: each component entry must reference existing `testbedPage` and `testSpec` paths.
- **Agent contract**: agents must use tools (matrix/docs/repo inspection) and should never silently change broad parts of the repo.

## Non-goals (for now)

- Full “auto-merge” automation. Generated changes require review.
- Perfect static proof that tests cover every matrix requirement (we aim for practical audit signals first).
