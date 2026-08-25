# Architecture

Aegisora introduces a deterministic governance boundary between autonomous agent intent and protected execution.

## Core invariant

> No governed capability crosses the execution boundary before the canonical governance and enforcement path has produced an explicit decision.

## Runtime stages

1. Context Resolution
2. Identity and Access
3. Security Analysis
4. Policy Evaluation
5. Risk Analysis
6. Decision Resolution
7. Audit Evidence

See [Runtime Architecture](./runtime-architecture.md) for the end-to-end flow.

See [Execution Boundary](./execution-boundary.md) for the side-effect protection model.