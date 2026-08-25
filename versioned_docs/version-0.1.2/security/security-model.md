# Security Model

Aegisora is built around a zero-trust execution model.

Protected agent actions are not trusted merely because they originate from an agent. The runtime resolves context, identity and access, security signals, policy, and risk before producing a governance decision.

## Security invariants

### Identity authenticity

A caller-provided identifier is not treated as proof of identity. Protected execution must resolve identity through the canonical runtime authority.

### Capability authority

Runtime-owned capabilities must have a single canonical authority.

### Enforcement before side effects

Governance decisions must reach the enforcement boundary before protected side effects occur.

### Provider and model identity

Provider and model identity should come from the canonical runtime request path rather than untrusted metadata.

### Auditability

Governance decisions should preserve sufficient identity, capability, decision, reason, risk, correlation, timestamp, and execution metadata to support review.