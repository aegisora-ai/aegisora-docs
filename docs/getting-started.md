---
sidebar_position: 2
title: Getting started
---

# Getting started

This is the clean-clone path for developers and engineering teams.

## Prerequisites

- Git
- Node.js 22 or newer (CI runs on Node 22; the release and Security Readiness workflows run on Node 24)
- pnpm 11.20.0

## Install, build, typecheck and test

~~~bash
git clone https://github.com/aegisora-ai/aegisora.git
cd aegisora
pnpm install
pnpm build
pnpm typecheck
pnpm test
~~~

The default suite needs no provider API key. At the 4.5.0 release it reported CORE_TESTS_PASSED=55/55 and ALL 119 RUNTIME TESTS PASSED.

`pnpm verify` runs build, typecheck and tests across the workspace packages in one command.

## LangGraph example

~~~bash
pnpm --filter "@aegisora/example-langgraph-agent-governance" start
~~~

Expected result:

~~~text
STATUS=SUCCESS
EXAMPLE_RESULT=PASS
~~~

This example shows the SDK wired into a LangGraph node. It calls `Aegisora.protect`, which wraps the agent's `run` and does not evaluate policy, so the example does not exercise the enforcement gate. See [Concepts](./concepts.md) and [Packages](./packages.md).

## Decisions at the provider boundary

~~~bash
pnpm --filter "@aegisora/runtime" exec tsx test/trace-79-provider-gateway-boundary.ts
~~~

This script demonstrates ALLOW, BLOCK and ESCALATE at the provider boundary.

## Next steps

- [Concepts](./concepts.md)
- [Configuration](./configuration.md)
- [Testing](./testing.md), including the live provider suite

Never commit API keys or local environment files.
