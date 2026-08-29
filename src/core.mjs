export function routeSentientTask(input) {
  const task = input?.task;
  if (!task || !String(task.taskId ?? "").trim() || !String(task.principalId ?? "").trim() || !String(task.purpose ?? "").trim()) {
    return { mode: "HOLD", mayExecuteConsequentially: false, reasons: ["task_identity_required"] };
  }
  if (task.consequential && !String(task.authorityRef ?? "").trim()) {
    return { mode: "HOLD", mayExecuteConsequentially: false, reasons: ["consequential_authority_required"] };
  }
  if (input.localAvailable) {
    return { mode: "local", mayExecuteConsequentially: Boolean(task.consequential), reasons: [] };
  }
  if (task.dataSensitivity === "sensitive" && !input.externalSensitiveExportAuthorized) {
    return { mode: "HOLD", mayExecuteConsequentially: false, reasons: ["sensitive_export_not_authorized"] };
  }
  if (input.approvedProviderAvailable) {
    return { mode: "approved_provider", mayExecuteConsequentially: Boolean(task.consequential), reasons: [] };
  }
  return { mode: "HOLD", mayExecuteConsequentially: false, reasons: ["no_permitted_execution_route"] };
}
