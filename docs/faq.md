---
sidebar_position: 11
title: FAQ
---

# FAQ

## What is Aegisora?

A runtime security and governance layer for AI agents. It evaluates agent actions against policy and returns ALLOW, BLOCK or ESCALATE decisions with audit evidence.

## Is Aegisora SOC 2, ISO 27001 or HIPAA certified?

No. See the compliance readiness document in the [main repository](https://github.com/aegisora-ai/aegisora/blob/main/docs/security/COMPLIANCE_READINESS.md) for the current status.

## How do I run the tests?

Run `pnpm verify` for the full check, or `pnpm --filter "@aegisora/runtime" test` for the runtime suite only. See [Testing](./testing.md).

## Are Docker images or Helm charts available?

Not yet. Packaging is not part of the repository at the moment.

## How do I report a vulnerability?

See [Security](./security.md).
