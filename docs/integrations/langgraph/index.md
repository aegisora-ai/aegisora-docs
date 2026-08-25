# LangGraph Integration

Aegisora is designed to sit alongside LangGraph rather than replace its orchestration responsibilities.

## Responsibility split

| Layer | Responsibility |
| --- | --- |
| LangGraph | Graph execution, state transitions, workflow orchestration. |
| Aegisora | Security, governance, policy, risk, decisions, and enforcement. |

## Target integration flow

```text
LangGraph
   |
   v
Agent Action / Tool Intent
   |
   v
Aegisora Governance
   |
   +---- ALLOW ----> execution
   +---- BLOCK ----> stop
   +---- ESCALATE -> review
```

The final guide will be expanded once the maintained LangGraph adapter and executable example are released.