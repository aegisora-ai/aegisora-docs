---
sidebar_position: 4
title: Architecture
---

# Architecture

Aegisora places a deterministic execution boundary between AI agents and the tools, providers, APIs and other side effects they can reach.

~~~text
AI Agent
   |
Execution Intent
   |
Aegisora Governance Boundary
   |-- Identity / Access
   |-- Policy Evaluation
   |-- Security Analysis
   |-- Risk Analysis
   |-- Decision
   |
   +-- ALLOW    -> controlled execution
   +-- BLOCK    -> no side effect
   +-- ESCALATE -> human review
~~~

Every outcome, including BLOCK and ESCALATE, produces audit decision and evidence.

## Where this lives in the source

The governance pipeline stages are implemented in `core/packages/runtime/src/governance/pipeline`: context resolution, identity and access, policy evaluation, security analysis, risk analysis, decision resolution and audit evidence.

The enforcement gate is in `core/packages/runtime/src/enforcement`. It includes the per-agent rate limiter described in [Configuration](./configuration.md).

## Further reading in the main repository

- [Architecture document](https://github.com/aegisora-ai/aegisora/blob/main/docs/ARCHITECTURE.md)
- [Runtime architecture decision record](https://github.com/aegisora-ai/aegisora/blob/main/docs/adr/0001-runtime-architecture.md)
- [Plugin system](https://github.com/aegisora-ai/aegisora/blob/main/docs/PLUGIN_SYSTEM.md)
