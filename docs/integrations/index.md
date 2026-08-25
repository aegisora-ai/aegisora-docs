# Integrations

Aegisora is designed to work with the AI stack developers already use.

The governance layer remains independent from the framework or provider underneath it.

## Agent frameworks

- [LangChain](./langchain/index.md)
- [LangGraph](./langgraph/index.md)
- [MCP](./mcp/index.md)
- [Custom Agents](./custom-agents/index.md)

## Model providers

- [OpenAI](./openai/index.md)
- [Anthropic](./anthropic/index.md)
- [Google](./google/index.md)
- [Groq](./groq/index.md)
- [Qwen](./qwen/index.md)

## Integration model

```text
Application
    |
    v
Framework / Provider
    |
    v
+---------------------+
|      AEGISORA        |
| Governance Runtime   |
| Security + Policy    |
| Risk + Enforcement   |
| Audit + Evidence     |
+---------------------+
    |
    v
Protected Execution
```

Each integration guide should document only verified interfaces and tested configurations.
