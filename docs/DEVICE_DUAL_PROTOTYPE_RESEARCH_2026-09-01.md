# SENTIENT Dual Affordable-Device Prototype Research — 2026-09-01

Status: ALLEN research packet / R&D input candidate
Authority conveyed: none

## Purpose

Define two real prototype stacks for an affordable, high-quality SENTIENT personal-AI device while keeping the separate ALLEN flagship platform-device program outside the affordability constraint.

The prototypes are deliberately different. Prototype A optimizes software ecosystem, long-term support, productization path, and development simplicity. Prototype B optimizes integrated edge-AI capability and memory/compute headroom.

Prices below are observed retail/list-price evidence as of the research date and are not purchasing commitments. Availability and memory-market pricing can change.

---

## Prototype A — Raspberry Pi / Compute Module path

### Research conclusion

Use Raspberry Pi 5 for the first bench prototype, but design the production architecture so Compute Module 5 can replace the dev board without changing SENTIENT Core/App contracts.

Current Raspberry Pi memory-market increases make the 8GB Pi 5 materially more expensive than its historical price, so R&D should benchmark both 4GB and 8GB requirements rather than assume 8GB is mandatory.

### Robust prototype BOM

Required core:
- Raspberry Pi 5, 4GB or 8GB depending measured local-model requirement.
- Raspberry Pi Active Cooler.
- Raspberry Pi 27W USB-C power supply.
- Raspberry Pi 256GB SSD Kit or equivalent supported NVMe storage.
- Seeed Studio ReSpeaker 2-Mics Pi HAT V2.0 or equivalent dual-microphone local audio front end.
- 4-ohm / approximately 5W enclosed speaker with compact amplifier path.
- physical microphone hard-mute control that electrically disables microphone capture independent of application state.
- status/privacy LED physically tied to capture state where practical.
- custom 3D-printed serviceable enclosure for prototype.

Optional user-interface module:
- Raspberry Pi Touch Display 2, 5-inch, for a self-contained visual prototype.
- Lowest-cost Access configuration may omit the built-in display and use voice plus secure pairing to the SENTIENT App on a phone/tablet/computer.

Optional later AI acceleration:
- AI HAT+ 13/26 TOPS for supported vision/neural workloads only after workload evidence justifies it.
- AI HAT+ 2 adds local LLM/VLM acceleration but is not presently appropriate for the affordability baseline because of cost.

### Current evidence anchors

- Raspberry Pi 5: BCM2712 quad Cortex-A76 2.4GHz; Wi-Fi/Bluetooth; PCIe; current 2026 product brief lists 4GB at $110 and 8GB at $175 after memory-price increases.
- Active Cooler: $5 original list price; designed for sustained Pi 5 load.
- Touch Display 2: 5-inch model $40; 720x1280; capacitive multi-touch.
- Raspberry Pi SSD Kit: 256GB kit historically listed at $40.
- ReSpeaker 2-Mics Pi HAT V2.0: observed $13.99.
- Compute Module 5 is the intended productization bridge; current range starts at $67.50, with wireless/RAM/eMMC variants and production support into the 2030s.

### Prototype-A packaging targets

A1 — Access Hub:
- voice-first;
- no integrated display required;
- 4GB minimum benchmark target;
- local deterministic safety functions;
- local STT/TTS where practical;
- small local-model capability;
- secure App pairing;
- USB-C powered tabletop device initially.

A2 — Access Display:
- same software/device contract;
- 5-inch touch display;
- 8GB preferred benchmark target if local-model UX materially benefits;
- NVMe local storage;
- same physical privacy controls.

### Why this path matters

Strengths:
- mature Raspberry Pi OS and hardware ecosystem;
- large developer/support community;
- strong accessory and compliance documentation;
- long production-lifetime commitments;
- clean path from SBC prototype to Compute Module 5 + custom carrier board;
- easiest path to repeatable builds and community replication.

Risks:
- 2026 RAM-price increases materially weakened Pi 5 cost advantage;
- no substantial built-in NPU;
- CPU-only generative local inference may become the UX bottleneck;
- adding a generative-AI accelerator can make the low-cost route expensive.

---

## Prototype B — RK3588/RK3588S integrated-AI path

### Research conclusion

Prototype the second device around an RK3588-class board with 8GB LPDDR5-class memory, integrated 6-TOPS NPU, local storage, and a compact voice-first enclosure. R&D should select the exact board by availability/support at procurement time, not bind SENTIENT to one vendor.

Preferred current development candidates:
1. FriendlyElec NanoPi M6V2 8GB — currently observed in stock at $179; compact 62x90mm RK3588S design; LPDDR5; 6-TOPS NPU; M.2/eMMC; analog microphone input and headphone output; USB-C PD.
2. Radxa ROCK 5-class board — RK3588/RK3588S family, 6-TOPS NPU, strong documentation and expansion; use a board/variant with sane current pricing and availability.
3. Orange Pi 5 Max/Plus only if current channel pricing and availability are competitive; current US reseller evidence is inconsistent and frequently substantially higher than list/RRP.

### Robust prototype BOM

Required core:
- RK3588/RK3588S SBC with 8GB RAM minimum for prototype B.
- 64GB eMMC minimum or 128/256GB NVMe preferred depending board economics.
- supported heatsink + fan sized for sustained local inference.
- vendor-recommended USB-C PD power supply.
- Wi-Fi/Bluetooth module if not onboard.
- dual-microphone or microphone-array front end compatible with Linux ALSA/PulseAudio/PipeWire.
- approximately 5W enclosed speaker/amplifier path.
- physical microphone hard-mute switch independent of operating system.
- visible capture/privacy indicator.
- custom serviceable 3D-printed enclosure.

Optional display:
- 5–7 inch MIPI/HDMI capacitive touch display only if UX testing shows a built-in screen materially improves access.

### Current evidence anchors

RK3588 provides:
- 4x Cortex-A76 + 4x Cortex-A55 CPU architecture;
- Mali-G610 GPU;
- integrated NPU rated up to 6 TOPS;
- INT4/INT8/INT16/FP16/BF16/TF32 support depending software stack;
- strong media acceleration up to 8K-class decode;
- LPDDR4X/LPDDR5 and eMMC/NVMe support.

NanoPi M6V2 current observed stack:
- RK3588S;
- 8GB LPDDR5 bare board at $179 observed in stock;
- optional metal case +$16;
- optional Wi-Fi module +$6.90;
- 64GB eMMC +$34;
- M.2 NVMe support;
- analog microphone input and 3.5mm audio output;
- USB-C PD input;
- compact 62x90mm footprint.

### Why this path matters

Strengths:
- twice the CPU-core count of Pi 5 class;
- integrated 6-TOPS NPU at roughly the same current price class as an 8GB Pi 5 board;
- better built-in AI/vision/speech acceleration potential;
- more RAM/storage/interface options on many boards;
- potentially stronger local multimodal device without separate accelerator hardware.

Risks:
- NPU capability is not automatically useful to every model; model conversion/runtime support must be proven with RKNN/RKNPU tooling;
- Linux/kernel/vendor support is less uniform than Raspberry Pi;
- board availability/pricing varies widely by vendor and region;
- productization and long-term maintenance require more integration ownership from GAI.

---

## Common prototype requirements

Both prototypes must run the same SENTIENT device contract and be evaluated without changing application semantics.

Required common functions:
- secure local App pairing and revocation;
- provider/model substitution;
- local encrypted state;
- hardware microphone privacy switch;
- offline/degraded operation;
- deterministic safety functions without a cloud dependency;
- local STT/TTS benchmark;
- small-model local inference benchmark;
- thermal and sustained-load benchmark;
- idle/load power measurement;
- recovery after power loss;
- update/reinstall/recovery procedure;
- accessibility controls;
- no physical actuation by default;
- provenance/receipt generation for benchmark runs.

## R&D benchmark matrix

Measure on both platforms:
1. cold boot to ready;
2. idle watts;
3. voice-listening idle watts;
4. peak and 30-minute sustained watts;
5. CPU/NPU temperatures and throttling;
6. wake-word latency;
7. STT real-time factor;
8. TTS time-to-first-audio;
9. 0.5B / 1.5B / 3B local-model tokens per second where memory permits;
10. memory pressure and swap behavior;
11. NPU-supported workloads on RK3588;
12. privacy-switch behavior under software fault;
13. offline end-to-end request completion;
14. secure pairing/revocation latency;
15. image/vision workload only if camera is part of the evaluated configuration;
16. reproducible reinstall/recovery time;
17. total prototype BOM and projected 100/1,000-unit cost-down path.

## Decision rule

Do not pick a winner before measurement.

Prototype A wins if ecosystem stability, maintenance, power, repeatability, and productization materially outweigh its weaker built-in AI acceleration.

Prototype B wins if integrated NPU/CPU headroom produces meaningfully better local private AI UX without unacceptable software-maintenance, supply, or power penalties.

Both may remain valid products if they serve different price/capability bands while exposing the same SENTIENT contract.

## Flagship boundary

The existing premium flagship design is not a SENTIENT affordability baseline. It is retained as a separate potential ALLEN platform-device program with its own performance, authority, security, sensor, expansion, and industrial design ceiling.
