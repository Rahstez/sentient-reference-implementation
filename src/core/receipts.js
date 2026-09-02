import crypto from "node:crypto";

export const SENTIENT_RECEIPT_VERSION = "0.1.0";

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

export function createEvidenceReceipt({ event, actor = "user", provider = null, decision = null, evidence = [] }) {
  const body = {
    version: SENTIENT_RECEIPT_VERSION,
    event,
    actor,
    provider,
    decision,
    evidence: [...evidence],
  };
  const canonical = JSON.stringify(stable(body));
  return Object.freeze({
    ...body,
    sha256: crypto.createHash("sha256").update(canonical).digest("hex"),
  });
}
