import test from "node:test";
import assert from "node:assert/strict";

import { validateModelProvider } from "../src/contracts/model-provider.js";
import { validateDeviceDescriptor, mayPerformPhysicalAction } from "../src/contracts/device-interface.js";
import { evaluateDataEgress, minimizeDurableRecord } from "../src/core/privacy.js";
import { createEvidenceReceipt } from "../src/core/receipts.js";
import { createCheckpoint, resumeCheckpoint } from "../src/core/continuity.js";

test("local providers reject non-loopback endpoints", () => {
  assert.throws(() => validateModelProvider({ id: "local", kind: "local", endpoint: "https://example.com" }), /local_provider_must_be_loopback/);
  assert.equal(validateModelProvider({ id: "local", kind: "local", endpoint: "http://127.0.0.1:8080" }).kind, "local");
});

test("sensitive remote egress fails closed without user approval", () => {
  assert.equal(evaluateDataEgress({ sensitivity: "sensitive", destination: "remote" }).allowed, false);
  assert.equal(evaluateDataEgress({ sensitivity: "sensitive", destination: "remote", userApproved: true }).allowed, true);
});

test("durable record excludes raw sensitive content", () => {
  const record = minimizeDurableRecord({ caseId: "case-1", rawMessage: "secret" });
  assert.equal(record.rawSensitiveContentStored, false);
  assert.equal("rawMessage" in record, false);
});

test("pairing alone does not authorize physical action", () => {
  const device = validateDeviceDescriptor({ id: "device-1", capabilities: ["audio.output"], paired: true });
  assert.equal(mayPerformPhysicalAction(device, "audio.output", null), false);
  assert.equal(mayPerformPhysicalAction(device, "audio.output", { decision: "ALLOW", scope: "audio.output" }), true);
});

test("evidence receipts are deterministic", () => {
  const a = createEvidenceReceipt({ event: "assessment", evidence: ["fixture:1"] });
  const b = createEvidenceReceipt({ event: "assessment", evidence: ["fixture:1"] });
  assert.equal(a.sha256, b.sha256);
});

test("checkpoint supports provider substitution without conveying authority", () => {
  const checkpoint = createCheckpoint({ taskId: "task-1", provider: "provider-a", model: "model-a" });
  const resumed = resumeCheckpoint(checkpoint, { provider: "provider-b", model: "model-b" });
  assert.equal(resumed.provider, "provider-b");
  assert.equal(resumed.authorityConveyed, false);
});
