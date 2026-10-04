import { verifyTrustedAuthorization } from '../contracts/trusted-authorization.js';
export const SENTIENT_PRIVACY_POLICY_VERSION = "0.2.0";

export function evaluateDataEgress({ sensitivity = "sensitive", destination = "local", userApproved = false, authorization = null } = {}, dependencies = {}) {
  if (!['sensitive', 'internal', 'public'].includes(sensitivity) || !['local', 'remote'].includes(destination) || typeof userApproved !== 'boolean') {
    return Object.freeze({ allowed: false, reason: 'invalid_egress_request' });
  }
  if (destination === "local") {
    return Object.freeze({ allowed: true, reason: "local_processing" });
  }
  if (!userApproved) {
    return Object.freeze({ allowed: false, reason: "sensitive_remote_egress_requires_user_approval" });
  }
  const allowed = verifyTrustedAuthorization(dependencies?.verifyUserApproval, { operation: 'data.egress', sensitivity, destination, authorization });
  return Object.freeze({ allowed, reason: allowed ? 'verified_bounded_user_approval' : 'user_approval_unverified' });
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
