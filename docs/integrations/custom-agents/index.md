# Custom Agent Integration

Aegisora can govern custom agent runtimes without requiring a specific orchestration framework.

## Integration contract

```text
Agent
  |
  v
Execution Intent
  |
  v
Aegisora Governance
  |
  +--> ALLOW
  +--> BLOCK
  +--> ESCALATE
  |
  v
Protected Execution
```

The integration should preserve the canonical execution identity, governance context, and enforcement boundary.