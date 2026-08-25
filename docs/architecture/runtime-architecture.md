# Runtime Architecture

Aegisora evaluates an execution intent through an ordered governance pipeline before protected execution.

## Request lifecycle

```text
AI Agent
   |
   v
Execution Intent
   |
   v
Context Resolution
   |
   v
Identity + Access
   |
   v
Security Analysis
   |
   v
Policy Evaluation
   |
   v
Risk Analysis
   |
   v
Decision Resolution
   |
   v
Audit Evidence
   |
   v
Enforcement / Protected Execution
```

The runtime governance engine orders the governance stages and evaluates them sequentially.

## Decision behavior

- `BLOCK` stops evaluation and returns a blocking reason.
- `ESCALATE` records an escalation decision while allowing later stages to continue according to the runtime pipeline.
- `ALLOW` remains the default only when governance checks do not produce a blocking or escalation result.

Risk is aggregated during evaluation and translated into a risk level.