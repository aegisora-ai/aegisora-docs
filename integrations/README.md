# Integrations

Aegisora is designed to work with the AI stack developers already use.

The governance layer remains independent from the framework or provider underneath it.

## Agent frameworks

- [LangChain](./langchain/)
- [LangGraph](./langgraph/)
- [MCP](./mcp/)
- [Custom Agents](./custom-agents/)

## Model providers

- [OpenAI](./openai/)
- [Anthropic](./anthropic/)
- [Google](./google/)
- [Groq](./groq/)
- [Qwen](./qwen/)

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