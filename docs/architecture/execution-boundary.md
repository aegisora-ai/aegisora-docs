# Execution Boundary

The execution boundary is the point where an agent intent can become an external side effect.

Aegisora separates governance evaluation from protected execution so that a decision can be enforced before a governed capability is allowed to proceed.

```text
Execution Request
      |
      v
Governance Evaluation
      |
      v
+-------------------+
| Decision           |
|                   |
| ALLOW             |----> Protected execution
| BLOCK             |----> Stop
| ESCALATE          |----> Review / escalation path
+-------------------+
```

The canonical implementation exposes an `EnforcementGate` as the runtime enforcement surface.