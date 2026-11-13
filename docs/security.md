---
sidebar_position: 8
title: Security
---

# Security

The security documents are versioned together with the code and tests they describe, so they live in the main repository and are not copied here.

- [Threat model](https://github.com/aegisora-ai/aegisora/blob/main/docs/security/THREAT_MODEL.md)
- [Security controls](https://github.com/aegisora-ai/aegisora/blob/main/docs/security/SECURITY_CONTROLS.md)
- [Product proof](https://github.com/aegisora-ai/aegisora/blob/main/docs/security/PRODUCT_PROOF.md)
- [Evidence register](https://github.com/aegisora-ai/aegisora/blob/main/docs/security/EVIDENCE_REGISTER.md)
- [Reproducible pilot evidence](https://github.com/aegisora-ai/aegisora/blob/main/docs/evidence/README.md)

## Known limits in 4.5.0

- The prompt-injection guard is pattern-based. Paraphrased payloads can bypass it, and the broad mode-switch pattern can block harmless text.
- Rate limiting is in-memory and per gate instance, and resets when the process restarts.
- Aegisora does not claim SOC 2, ISO 27001 or HIPAA certification.

## Reporting a vulnerability

Follow the process in [SECURITY.md](https://github.com/aegisora-ai/aegisora/blob/main/SECURITY.md). Please do not open public issues for security reports.
