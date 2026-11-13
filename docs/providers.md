---
sidebar_position: 7
title: Providers
---

# Providers

The runtime package contains provider adapters for Anthropic, OpenAI, Gemini and Groq, plus a provider router and an execution gateway that applies the governance decision before a provider is called.

## What is validated

- The default suite runs without any provider credentials.
- The live provider test, `pnpm test:live`, runs against Groq and requires `GROQ_API_KEY`. It verifies real provider execution for ALLOW and zero provider execution for BLOCK and ESCALATE.
- The live provider matrix added in 4.5.0 covers Gemini and Groq for the enforcement gate, together with forged-identity and injection probes.

No adapter exists in the source for other providers, so none is documented here.
