# Quickstart

## Clone

``bash
git clone https://github.com/aegisora-ai/aegisora.git
cd aegisora
``

## Install

``bash
pnpm install
``

## Verify

``bash
pnpm build
pnpm typecheck
pnpm test
``

## LangGraph example

``bash
pnpm --filter @aegisora/example-langgraph-agent-governance test
``

Expected: STATUS=SUCCESS and EXAMPLE_RESULT=PASS.