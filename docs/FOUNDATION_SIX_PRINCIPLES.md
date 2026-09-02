# SENTIENT — Six Product Principles

Status: PUBLIC REFERENCE BOUNDARY CANDIDATE

These six principles are product acceptance criteria for the SENTIENT Core, App, and Device reference implementation.

## 1. Open

At least the approved public reference layer must be inspectable, runnable, reproducible, and buildable by others. Public interfaces, conformance tests, device contracts, and approved reference implementations must not depend on a single proprietary provider.

Acceptance evidence:
- public source for the approved reference layer;
- reproducible build/test instructions;
- provider-neutral interfaces;
- conformance vectors and negative tests;
- documented open/proprietary boundary.

## 2. Yours to keep

A person must retain ordinary use of SENTIENT if a cloud provider, account, subscription, model endpoint, or company disappears.

Acceptance evidence:
- local execution path;
- exportable user-controlled state;
- replaceable model/provider adapters;
- no proprietary project/state lock-in;
- offline/degraded operation.

## 3. Accessible

SENTIENT must target hardware people actually own and an affordable dedicated reference device, not require datacenter-class hardware for ordinary personal use.

Acceptance evidence:
- modest-hardware profiles;
- low-memory/local-model profiles;
- accessible App UX;
- affordable Device reference design;
- measured latency/memory/power behavior.

## 4. Good for humanity

SENTIENT must be evaluated on measurable human benefit, especially for people underserved by current AI products.

Candidate evaluation domains include emergency guidance, elder scam resistance, literacy assistance, accessibility, deepfake/impersonation defense, child-safety education, and elder companionship with bounded safety behavior.

Acceptance evidence:
- scenario-specific threat models;
- synthetic or expressly authorized evaluation data;
- measurable outcomes and limitations;
- accessibility/usability review.

## 5. Private by default

Sensitive personal information should remain on the person's own device unless the person knowingly authorizes a bounded transfer.

Acceptance evidence:
- local-first data flow;
- explicit egress boundaries;
- raw-sensitive-data minimization;
- encrypted local storage where durable storage is needed;
- tests rejecting unintended remote endpoints.

## 6. Empowering, not extractive

SENTIENT exists to hand capability to the person, not make surveillance, data harvesting, attention capture, or perpetual provider dependence the business model.

Acceptance evidence:
- user remains principal;
- model output is not authority;
- consequential actions require appropriate authorization;
- revocation/interruption paths;
- portable state and provider substitution;
- no requirement to monetize personal data.

## Cross-project note

Selected trust, permission, provenance, delegation, and Take Gate-compatible concepts may also be researched and evaluated through OIAGP/NSF work. Shared research lineage does not collapse the separate IP, governance, publication, or authority boundaries of SENTIENT, OIAGP, ALLEN, Guardian, or NSF-funded work.
