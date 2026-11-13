---
sidebar_position: 9
title: Testing
---

# Testing

Aegisora separates deterministic validation from live provider validation.

## Default suite

~~~bash
pnpm build
pnpm typecheck
pnpm test
~~~

No provider secret is required. Since 4.5.0 the `@aegisora/core` test suite runs as part of `pnpm test` and CI.

## Live provider suite

~~~bash
pnpm test:live
~~~

Requires `GROQ_API_KEY`. See [Providers](./providers.md).

## Security coverage

- direct ToolRegistry bypass
- direct provider resolution
- provider generation bypass
- identity immutability
- lifecycle integrity
- provider and model identity integrity
- cross-provider resolution authority
- protected-agent boundaries

## CI

CI runs install, build, typecheck, the deterministic tests and the example smoke test. The Security Readiness workflow validates the security artifacts and the published tarballs.
