---
sidebar_position: 5
title: Packages
---

# Packages

All workspace packages are at version 4.5.0.

| Package | Main exports |
| --- | --- |
| `@aegisora/core` | Shared contracts, types and errors, including `DecisionStatus` and the enterprise access and tenant types |
| `@aegisora/policy-engine` | `PolicyEngine`, `PolicyRule`, `PolicyContext`, `PolicyEvaluation` |
| `@aegisora/security-engine` | `SecurityEngine`, `PromptInjectionAnalyzer`, `PIIDetector`, `SecurityAnalyzer` |
| `@aegisora/runtime` | `Agent`, `AgentRuntime`, `AgentManager`, the governance pipeline, the enforcement gate and the provider adapters |
| `@aegisora/sdk` | `AegisoraClient`, `SDKAgent`, `Aegisora`, `protect` |
| `@aegisora/audit` | `AuditLogger`, `MemoryEvidenceStore`, `AuditEvent` |
| `@aegisora/observability` | Runtime, security and policy events, event logger, trace types |
| `@aegisora/plugins` | `PluginRegistry`, `PluginLoader`, `AegisoraPlugin` |
| `@aegisora/storage` | Memory and file storage adapters, agent and decision repositories |

## What `protect` does in 4.5.0

`protect(agent)` in `@aegisora/sdk` wraps an agent so that `run(input)` calls the agent's own `run` and returns its output as a string with a timestamp. It does not itself evaluate policy. Policy evaluation and enforcement happen in the runtime enforcement path described in [Architecture](./architecture.md).
