import { verifyTrustedAuthorization } from './trusted-authorization.js';
export const SENTIENT_DEVICE_INTERFACE_VERSION = "0.2.0";

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
    paired: device.paired === true,
    privacy: Object.freeze({
      microphoneMuted: device.privacy?.microphoneMuted === true,
      cameraDisabled: device.privacy?.cameraDisabled === true,
      networkAllowed: device.privacy?.networkAllowed === true,
    }),
  });
}

export function mayPerformPhysicalAction(device, requestedCapability, authorization, dependencies = {}) {
  const descriptor = validateDeviceDescriptor(device);
  if (!descriptor.capabilities.includes(requestedCapability)) return false;
  if (!descriptor.paired) return false;
  if (authorization?.decision !== "ALLOW" || authorization?.scope !== requestedCapability) return false;
  return verifyTrustedAuthorization(dependencies?.verifyAuthorization, { operation: 'physical.action', deviceId: descriptor.id, capability: requestedCapability, authorization });
}
