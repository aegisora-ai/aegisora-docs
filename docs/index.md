---
slug: /
sidebar_position: 1
title: Aegisora 4.5
---

# Aegisora 4.5

Aegisora is a runtime governance layer for AI agents. Before a governed action reaches a tool, provider or API, it is evaluated and ends in one of three decisions: ALLOW, BLOCK or ESCALATE. Each decision is recorded as audit evidence.

This site documents release 4.5.0. Statements are checked against the source in the main repository at https://github.com/aegisora-ai/aegisora, and limits are stated next to the behavior they apply to.

## Where to start

- [Getting started](./getting-started.md): install, build and test from a clean clone.
- [Concepts](./concepts.md): the three decisions, escalation and separation of duties.
- [Architecture](./architecture.md): the execution boundary and the enforcement path.
- [Packages](./packages.md): the workspace packages and what each one exports.
- [Configuration](./configuration.md): every environment variable the source reads.
- [Providers](./providers.md): which provider adapters exist and what is validated.
- [Security](./security.md): where the threat model and evidence live, and the known limits.
- [Testing](./testing.md): the default suite and the live provider suite.
- [Release 4.5.0](./release-4-5-0.md) and the [FAQ](./faq.md).

## What this site does not claim

Aegisora is not SOC 2, ISO 27001 or HIPAA certified. Container images, Helm charts and Terraform modules are not part of the repository yet.
