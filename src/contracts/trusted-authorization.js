// The verifier is an in-process dependency installed by the trusted host.
// Never populate it from a request, model output, provider payload or user JSON.
// It must resolve current principal/scope/expiry/revocation and replay policy.
function freeze(value, seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return value;
  seen.add(value);
  for (const child of Object.values(value)) freeze(child, seen);
  return Object.freeze(value);
}

export function verifyTrustedAuthorization(verifier, input) {
  if (typeof verifier !== 'function') return false;
  try {
    const request = freeze(structuredClone(input));
    const result = verifier(request);
    // This reference boundary is synchronous; async verification must resolve
    // in the host before invoking it. A Promise is never an approval.
    if (result instanceof Promise) result.catch(() => {});
    return result === true;
  } catch {
    return false;
  }
}
