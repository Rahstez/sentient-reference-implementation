export const SENTIENT_MODEL_PROVIDER_CONTRACT_VERSION = "0.1.0";

export function validateModelProvider(provider) {
  if (!provider || typeof provider !== "object") throw new Error("provider_required");
  if (typeof provider.id !== "string" || !provider.id.trim()) throw new Error("provider_id_required");
  if (typeof provider.kind !== "string" || !["local", "remote"].includes(provider.kind)) throw new Error("provider_kind_invalid");
  if (provider.kind === "local" && provider.endpoint && !isLoopbackEndpoint(provider.endpoint)) throw new Error("local_provider_must_be_loopback");
  return Object.freeze({
    id: provider.id,
    kind: provider.kind,
    endpoint: provider.endpoint ?? null,
    model: provider.model ?? null,
    capabilities: Object.freeze([...(provider.capabilities ?? [])]),
  });
}

export function isLoopbackEndpoint(value) {
  if (!value) return true;
  const url = new URL(value);
  return ["127.0.0.1", "localhost", "::1"].includes(url.hostname);
}
