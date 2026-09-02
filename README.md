# Sentient Reference Implementation

Status: PUBLIC / OPEN REFERENCE IMPLEMENTATION

## Purpose

Sentient is a human-facing reference implementation for personal AI that is private by default, model-independent, user-controlled, and capable of governed action without making any single AI model or provider the permanent custodian of the user relationship.

The core idea is simple:

**The person owns the relationship; models are interchangeable workers.**

## Current public boundary

This repository now contains the first runnable approved reference boundary:

- provider-neutral model/provider contract;
- loopback enforcement for local providers;
- public device capability/interface contract;
- deny-by-default physical action check;
- private-by-default data-egress policy;
- durable-record minimization example;
- deterministic evidence receipts;
- model/provider-substitutable continuity checkpoints;
- public conformance/negative tests;
- affordable dedicated Device design track;
- explicit six-principle product acceptance criteria.

Run the current reference tests with:

```bash
npm test
```

## Six product principles

SENTIENT Core, App, and Device are evaluated against six product principles:

1. **Open** — approved public components are inspectable, runnable, reproducible, and buildable.
2. **Yours to keep** — ordinary use does not disappear with one provider, account, subscription, or model.
3. **Accessible** — target hardware people actually own, plus an affordable dedicated Device path.
4. **Good for humanity** — measurable benefit for real human needs, especially underserved users.
5. **Private by default** — sensitive personal information stays local unless a bounded transfer is knowingly authorized.
6. **Empowering, not extractive** — the person receives capability without requiring surveillance, data harvesting, attention capture, or perpetual provider dependence.

Detailed acceptance criteria are in `docs/FOUNDATION_SIX_PRINCIPLES.md`.

## Core / App / Device

SENTIENT is one personal-AI architecture with three deployment forms:

- **Core** — local runtime, privacy, model/provider abstraction, continuity, evidence, and governed capability interfaces;
- **App** — accessible graphical/mobile/desktop experience and Device pairing/control surface;
- **Device** — dedicated local hardware embodiment for private, resilient personal AI.

The Device program has two design tracks:

- **Affordable Reference Device** — quality, repairable, consumer-accessible local AI using commodity/reference hardware first;
- **Flagship Device** — premium design ceiling with higher compute, sensing, display, audio, materials, and expansion capability.

The affordable design is documented in `docs/DEVICE_AFFORDABLE_REFERENCE_V0_1.md`.

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
- Take Gate-compatible public interfaces;
- Guardian observation interfaces;
- execution and evidence receipts;
- durable checkpoints;
- interruption and recovery;
- model/provider substitution;
- task continuity;
- device-interface contracts;
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

## Relationship to ALLEN, OIAGP, NSF research, and Guardian

Sentient is the human-facing reference implementation.

Selected trust, permission, provenance, delegation, and Take Gate-compatible concepts may also be developed and evaluated through OIAGP/NSF research. Shared technical lineage does not collapse the separate IP, governance, publication, or authority boundaries of the projects.

ALLEN remains the broader protected institutional architecture.

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

Early runnable public reference implementation. The current code is intentionally small and dependency-light so the public boundary can be inspected and tested without requiring a proprietary model provider.
