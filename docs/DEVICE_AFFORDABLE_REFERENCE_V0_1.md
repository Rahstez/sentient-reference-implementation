# SENTIENT Affordable Device Reference — v0.1

Status: DESIGN CANDIDATE / NOT A PURCHASE AUTHORIZATION

## Objective

Design a high-quality dedicated personal-AI device that preserves the SENTIENT principles while being affordable enough to serve ordinary households and underserved users.

The existing flagship device concept remains the premium ceiling. This document defines a separate affordability track optimized for broad access.

## Product position

The affordable device is not a disposable smart speaker and not a cloud terminal. It is a local-first personal-AI appliance designed to keep essential capability available when connectivity, subscriptions, or providers are unavailable.

## Target experience

The device should support:
- local wake/interaction controls;
- microphone and speaker;
- optional small display or paired-phone display mode;
- local model inference appropriate to the hardware class;
- encrypted local user state;
- offline/degraded operation;
- user-visible privacy and network controls;
- replaceable model/runtime software;
- secure pairing with the SENTIENT App;
- bounded sensors only when a use case justifies them;
- explicit hardware mute/privacy control;
- recoverable/updateable software without vendor lock-in.

## Cost architecture

The engineering goal is to minimize total cost without degrading the trust boundary.

### Prototype cost bands

These are engineering targets, not retail promises:

- **Access prototype:** target core electronics BOM under $150 where practical.
- **Enhanced local-AI prototype:** target core electronics BOM under $250 where practical.
- **Flagship:** separate premium path with substantially higher compute, sensing, display, audio, materials, and expansion capability.

Final retail affordability must be evaluated using manufacturing volume, certification, enclosure, power supply, storage, assembly, logistics, warranty, and support costs.

## Compute profiles

### Profile A — Access

Target:
- ARM64 single-board or compute-module class platform;
- 4–8 GB RAM preferred;
- low-power local inference;
- CPU/GPU or modest accelerator path;
- microSD/eMMC/NVMe depending cost and reliability;
- Wi-Fi/Bluetooth;
- USB or internal audio codec;
- fanless or quiet active cooling where feasible.

Purpose:
- deterministic safety functions;
- local speech pipeline where feasible;
- small language models;
- App pairing;
- encrypted memory/state;
- offline reference workflows.

### Profile B — Enhanced local AI

Target:
- 8–16 GB RAM preferred;
- integrated NPU/GPU accelerator where available;
- NVMe storage;
- higher quality local speech and small/medium model inference;
- improved multimodal and vision capability;
- still consumer-affordable and power-conscious.

## Device interfaces

Required interfaces should be modular:
- microphone input;
- speaker output;
- hardware mute/privacy switch;
- status indicator;
- power button;
- USB-C power;
- optional camera module with physical disable/shutter;
- optional display;
- optional battery module;
- optional sensor expansion.

A feature is not added merely because the board exposes a port. Capability must have an approved user benefit, privacy model, and power/cost justification.

## Privacy design

Minimum requirements:
- hardware microphone mute state must be detectable by software and visible to the person;
- camera, if used, should have a physical privacy mechanism;
- no default cloud audio/video streaming;
- sensitive data stays local by default;
- network egress should be inspectable and suppressible;
- local state encrypted where practical;
- factory-reset and user-controlled export paths;
- provider credentials, if ever configured, remain optional and separately controlled.

## App and Core relationship

The device is one deployment target for the same SENTIENT architecture, not a separate AI product.

`SENTIENT Core -> local runtime + privacy + model abstraction`

`SENTIENT App -> graphical/mobile/desktop interface + pairing/control`

`SENTIENT Device -> dedicated local hardware embodiment`

The App should be able to discover/pair with the Device using a secure local interface without granting consequential authority merely because pairing succeeded.

## Trust/action boundary

A device action request may pass through public-safe permission/Take-Gate-compatible interfaces, but the public reference design must not expose proprietary ALLEN/OIAGP/Guardian implementation.

Physical actuation must remain deny-by-default unless an explicitly defined device capability and authorization path exists.

## Quality goals

Affordable must not mean visibly cheap or fragile.

Design priorities:
1. reliable thermals and power;
2. clean audio capture/playback;
3. solid enclosure and serviceability;
4. replaceable storage/compute where feasible;
5. accessible controls;
6. quiet operation;
7. minimal unnecessary sensors;
8. repairable modular construction;
9. documented parts and interfaces;
10. graceful degradation when larger models are unavailable.

## Validation plan

Bench tests should measure:
- cold boot and recovery;
- idle/load power;
- sustained thermals;
- local inference latency;
- memory pressure;
- microphone/speaker quality;
- offline operation;
- network-denied operation;
- update rollback;
- factory reset;
- encrypted state recovery;
- App pairing/revocation;
- hardware privacy controls;
- accessibility.

## Manufacturing path

Phase 1: dev-board prototype.
Phase 2: reference enclosure + modular audio/power/storage.
Phase 3: compute-module/carrier evaluation for cost reduction.
Phase 4: custom carrier/PCB only if volume, cost, reliability, and certification evidence justify it.

Do not jump to custom silicon or custom motherboard development before commodity/reference hardware demonstrates the product and cost model.

## Open boundary

Publicly releasable candidates may include:
- device interface contract;
- reference enclosure dimensions/files approved for release;
- BOM categories and compatible component classes;
- assembly/test procedures;
- privacy/control requirements;
- local-runtime compatibility requirements;
- benchmark methodology.

Protected institutional implementations, credentials, private governance controls, unreleased industrial design, and proprietary ALLEN/OIAGP/Guardian internals remain outside this repository unless separately approved.
