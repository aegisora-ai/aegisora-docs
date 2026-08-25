# Aegisora Documentation

**Zero-trust security and governance for autonomous AI agents.**

Aegisora is a runtime governance layer that evaluates and enforces agent actions before they cross protected execution boundaries.

This repository is the developer documentation hub for the Aegisora ecosystem.

**Core repository:** https://github.com/aegisora-ai/aegisora

---

## Start building

- [Getting Started](./getting-started/)
- [Concepts](./concepts/)
- [Architecture](./architecture/)
- [Security](./security/)
- [Governance](./governance/)
- [Policies](./policies/)
- [Integrations](./integrations/)
- [SDK](./sdk/)
- [API Reference](./api/)
- [Examples](./examples/)
- [Reference](./reference/)

---

## Where Aegisora fits

Aegisora is designed to work with the existing AI stack rather than replace it.

`	ext
Application
    |
    v
Agent / Workflow
    |
    v
+---------------------------+
|        AEGISORA           |
| Identity                  |
| Permissions               |
| Security                  |
| Context                   |
| Policy                    |
| Risk                      |
| Approval                  |
| Enforcement               |
| Audit                     |
+-------------+-------------+
              |
       +------+------+
       |             |
     Models         Tools
`

## Integrations

### Agent frameworks

- [LangChain](./integrations/langchain/)
- [LangGraph](./integrations/langgraph/)
- [MCP](./integrations/mcp/)
- [Custom Agents](./integrations/custom-agents/)

### Model providers

- [OpenAI](./integrations/openai/)
- [Anthropic](./integrations/anthropic/)
- [Google](./integrations/google/)
- [Groq](./integrations/groq/)
- [Qwen](./integrations/qwen/)

---

## Runtime governance

`	ext
Agent Action
     |
     v
Interception
     |
     v
Security Analysis
     |
     v
Policy Evaluation
     |
     v
Risk Assessment
     |
     v
Decision
  /   |   \\
ALLOW BLOCK ESCALATE
`

The decision is enforced at the execution boundary and recorded as auditable runtime evidence.

## Core principles

- Zero-trust execution
- Framework independence
- Provider independence
- Runtime enforcement
- Auditable decisions

## Ecosystem repositories

| Repository | Role |
| --- | --- |
| https://github.com/aegisora-ai/aegisora | Core OSS runtime and governance platform. |
| egisora-docs | Documentation and developer portal source. |
| egisora-examples | Planned maintained examples and recipes repository. |

---

**Aegisora — let agents act, but never without runtime control.**
