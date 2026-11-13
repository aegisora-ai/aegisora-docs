---
sidebar_position: 10
title: Release 4.5.0
---

# Release 4.5.0

Released 2026-11-12. The full changelog is in the [main repository](https://github.com/aegisora-ai/aegisora/blob/main/CHANGELOG.md).

## Security

- Separation of duties is enforced in the enterprise approval registry and in the runtime `ApprovalEngine`: a requester can no longer approve their own request.
- A prompt-injection mode-switch gap in the security guard is closed. The guard is pattern-based, see [Security](./security.md).
- Per-agent rate limiting at the enforcement gate. In-memory and per gate instance.

## Added

- The `@aegisora/core` test suite runs as part of `pnpm test` and CI.
- Live provider matrix test for Gemini and Groq, with forged-identity and injection probes.
- Reproducible pilot evidence report and generator.
- Reproducible mobility security harness with approval and identity scenarios.

## Changed

- Rate limiting is on by default: 100 calls per 60 seconds per agent. Configure it as described in [Configuration](./configuration.md).
- Package versions are aligned to 4.5.0.
- The stale `website` workspace entry is removed.
