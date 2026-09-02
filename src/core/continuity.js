export const SENTIENT_CHECKPOINT_VERSION = "0.1.0";

export function createCheckpoint({ taskId, state = {}, evidenceRefs = [], provider = null, model = null }) {
  if (!taskId) throw new Error("task_id_required");
  return Object.freeze({
    version: SENTIENT_CHECKPOINT_VERSION,
    taskId,
    state: Object.freeze({ ...state }),
    evidenceRefs: Object.freeze([...evidenceRefs]),
    provider,
    model,
    authorityConveyed: false,
  });
}

export function resumeCheckpoint(checkpoint, replacement = {}) {
  if (!checkpoint?.taskId) throw new Error("invalid_checkpoint");
  return Object.freeze({
    ...checkpoint,
    provider: replacement.provider ?? checkpoint.provider,
    model: replacement.model ?? checkpoint.model,
    resumed: true,
    authorityConveyed: false,
  });
}
