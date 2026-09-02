export const SENTIENT_DEVICE_INTERFACE_VERSION = "0.1.0";

export const DeviceCapabilities = Object.freeze([
  "audio.input",
  "audio.output",
  "display.output",
  "camera.input",
  "sensor.input",
  "local.inference",
  "storage.local",
]);

export function validateDeviceDescriptor(device) {
  if (!device || typeof device !== "object") throw new Error("device_required");
  if (typeof device.id !== "string" || !device.id.trim()) throw new Error("device_id_required");
  const capabilities = [...new Set(device.capabilities ?? [])];
  for (const capability of capabilities) {
    if (!DeviceCapabilities.includes(capability)) throw new Error(`unsupported_capability:${capability}`);
  }
  return Object.freeze({
    id: device.id,
    interfaceVersion: SENTIENT_DEVICE_INTERFACE_VERSION,
    capabilities: Object.freeze(capabilities),
    paired: Boolean(device.paired),
    privacy: Object.freeze({
      microphoneMuted: Boolean(device.privacy?.microphoneMuted),
      cameraDisabled: Boolean(device.privacy?.cameraDisabled),
      networkAllowed: Boolean(device.privacy?.networkAllowed),
    }),
  });
}

export function mayPerformPhysicalAction(device, requestedCapability, authorization) {
  const descriptor = validateDeviceDescriptor(device);
  if (!descriptor.capabilities.includes(requestedCapability)) return false;
  if (!descriptor.paired) return false;
  return authorization?.decision === "ALLOW" && authorization?.scope === requestedCapability;
}
