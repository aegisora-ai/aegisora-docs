---
sidebar_position: 6
title: Configuration
---

# Configuration

These are the environment variable names read by the source of the main repository.

## Rate limiting

| Variable | Default | Meaning |
| --- | --- | --- |
| `AEGISORA_RATE_LIMIT_MAX` | 100 | Maximum calls per agent per window. Set to 0 to disable. |
| `AEGISORA_RATE_LIMIT_WINDOW_MS` | 60000 | Window length in milliseconds. |

Rate limiting is on by default. The limiter is in-memory and per gate instance, so counters reset when the process restarts.

## Provider credentials

`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY` and `GROQ_API_KEY`. None of them is needed for the default test suite.

## Provider matrix models

`MATRIX_MODEL_ANTHROPIC`, `MATRIX_MODEL_GEMINI`, `MATRIX_MODEL_GROQ` and `MATRIX_MODEL_OPENAI` select the models used by the provider matrix.

## Supabase

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are used by the Supabase-backed writers in the runtime package. The service role key is a secret: never commit it.
