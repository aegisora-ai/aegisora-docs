# Decisions

Aegisora exposes three governance decision statuses:

| Status | Meaning |
| --- | --- |
| `ALLOW` | The governed action may proceed to protected execution. |
| `BLOCK` | The governed action is denied and must not continue to the protected execution surface. |
| `ESCALATE` | The action requires a review or escalation path. |

A policy result also carries a reason and risk score, with optional security or policy signals.

The canonical runtime decision contract contains an identifier, status, reason, and creation timestamp.