---
sidebar_position: 3
title: Concepts
---

# Concepts

## The three decisions

The public decision vocabulary is ALLOW, BLOCK or ESCALATE. It is defined as `DecisionStatus` in `@aegisora/core`.

- **ALLOW**: the action proceeds through controlled execution.
- **BLOCK**: the action has no downstream side effect.
- **ESCALATE**: the action goes to human review.

A policy result carries a `status`, a `reason`, a `riskScore` and optional `signals`.

## Policy evaluation

The `PolicyEngine` class in `@aegisora/policy-engine` holds an ordered list of rules. It evaluates them in order and returns the result of the first rule that returns one. If no rule returns a result, it returns ALLOW with risk score 0 and the reason "No policy violation detected".

This means the engine is default-allow: anything that must be blocked or escalated has to be matched by an explicit rule.

## Separation of duties

Since 4.5.0 a requester can no longer approve their own request. This is enforced in the enterprise approval registry and in the runtime `ApprovalEngine`.

## The invariant

No governed capability crosses the execution boundary before the canonical enforcement path has produced an explicit decision. See [Architecture](./architecture.md).
