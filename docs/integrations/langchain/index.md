# LangChain Integration

Aegisora is designed to complement LangChain by governing actions that cross protected execution boundaries.

## Responsibility split

| Layer | Responsibility |
| --- | --- |
| LangChain | Agent abstractions and application orchestration. |
| Aegisora | Runtime governance, policy, security, risk, and enforcement. |

## Target integration

The maintained integration will provide a framework adapter that preserves the Aegisora governance boundary without coupling the core runtime to LangChain internals.