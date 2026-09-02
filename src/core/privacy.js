export const SENTIENT_PRIVACY_POLICY_VERSION = "0.1.0";

export function evaluateDataEgress({ sensitivity = "sensitive", destination = "local", userApproved = false } = {}) {
  if (destination === "local") {
    return Object.freeze({ allowed: true, reason: "local_processing" });
  }
  if (sensitivity === "sensitive" && !userApproved) {
    return Object.freeze({ allowed: false, reason: "sensitive_remote_egress_requires_user_approval" });
  }
  return Object.freeze({ allowed: Boolean(userApproved), reason: userApproved ? "bounded_user_approval" : "remote_egress_not_approved" });
}

export function minimizeDurableRecord(input = {}) {
  return Object.freeze({
    caseId: input.caseId ?? null,
    createdAt: input.createdAt ?? null,
    classification: input.classification ?? null,
    warningSignals: Object.freeze([...(input.warningSignals ?? [])]),
    recommendedVerification: Object.freeze([...(input.recommendedVerification ?? [])]),
    rawSensitiveContentStored: false,
  });
}
