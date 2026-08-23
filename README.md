# Sentient Reference Implementation

Status: PUBLIC / OPEN REFERENCE IMPLEMENTATION

## Purpose

Sentient is a human-facing reference implementation for personal AI that is private by default, model-independent, user-controlled, and capable of governed action without making any single AI model or provider the permanent custodian of the user relationship.

The core idea is simple:

**The person owns the relationship; models are interchangeable workers.**

## Design goals

Sentient is intended to demonstrate a personal AI architecture that can:

- use different AI models and providers;
- prefer local or privacy-preserving execution when appropriate;
- preserve durable task continuity outside any one model session;
- distinguish authentication from authority;
- require explicit authorization for consequential actions;
- preserve evidence and decision lineage;
- recover after model, provider, process, or context loss;
- support interruption and revocation;
- protect personal data by default;
- remain understandable and controllable by the person using it.

## Core architecture

A Sentient request may flow through:

1. task classification;
2. privacy and locality decision;
3. capability requirements;
4. permitted model/provider selection;
5. cost and performance routing;
6. authority verification for tools or actions;
7. Guardian-style observation or supervision where applicable;
8. execution;
9. evidence and decision receipt creation;
10. durable continuity state.

## Core principles

- The user remains the principal.
- Model output is not authority.
- Authentication is not authority.
- Persistence is not authority.
- Supervision is not authority.
- Models and providers must be replaceable.
- Personal data should remain local when practical.
- Sensitive data should not be exported merely because a model requests it.
- Durable continuity should preserve evidence-backed state, not unquestioned model belief.
- Delegated or child agents must receive independent authority.
- Consequential actions should fail closed when required authorization is absent.

## Reference capabilities

This repository may include approved open implementations of:

- provider-neutral model contracts;
- model routing;
- privacy and data-sovereignty policies;
- governed action envelopes;
- Take Gate integration;
- Guardian observation interfaces;
- execution and evidence receipts;
- durable checkpoints;
- interruption and recovery;
- model/provider substitution;
- task continuity;
- user-facing reference workflows;
- conformance and security tests.

## What this repository is not

This repository is not the proprietary ALLEN platform.

It does not automatically include:

- private ALLEN implementation;
- private OIAGP implementation;
- Guardian production intervention logic;
- proprietary Wardens;
- private prompts;
- private schemas or institutional data;
- proprietary orchestration;
- credentials or operational secrets;
- commercial modules.

Those remain outside the public Sentient boundary unless separately approved for release.

## Relationship to ALLEN, OIAGP, and Guardian

Sentient is the human-facing reference implementation.

ALLEN provides the broader proprietary institutional architecture.

OIAGP provides reusable authority, identity, governance, and interoperability concepts.

Guardian provides monitoring, supervision, and intervention concepts, subject to explicit authority.

Public Sentient components are independently authored and released through the controlled clean-room process.

## Clean-room boundary

Approved artifacts flow through:

`allen-oiagp-clean-room`

Protected ALLEN/OIAGP material should not be copied directly into this repository.

## Open-source posture

Sentient is intended to expose enough of the architecture to provide a useful, inspectable, reusable personal-AI reference implementation while preserving proprietary institutional technology outside the public boundary.

The exact license, contribution model, and release profile will be documented before formal release.

## Current status

Early public reference implementation.

Initial engineering areas include:

- model/provider independence;
- privacy and personal data sovereignty;
- governed action;
- evidence receipts;
- durable continuity;
- checkpoint/resume/recovery;
- model substitution;
- security and negative testing.
