export type SentientTask = Readonly<{
  taskId: string;
  principalId: string;
  purpose: string;
  dataSensitivity: "public" | "personal" | "sensitive";
  consequential: boolean;
  authorityRef: string | null;
}>;

export type SentientRouteDecision = Readonly<{
  mode: "local" | "approved_provider" | "HOLD";
  mayExecuteConsequentially: boolean;
  reasons: readonly string[];
}>;

export function routeSentientTask(input:{
  task: SentientTask;
  localAvailable: boolean;
  approvedProviderAvailable: boolean;
  externalSensitiveExportAuthorized: boolean;
}): SentientRouteDecision {
  const reasons:string[]=[];
  if(!input.task.taskId.trim()||!input.task.principalId.trim()||!input.task.purpose.trim()) {
    return {mode:"HOLD",mayExecuteConsequentially:false,reasons:["task_identity_required"]};
  }
  if(input.task.consequential&&!input.task.authorityRef?.trim()) {
    return {mode:"HOLD",mayExecuteConsequentially:false,reasons:["consequential_authority_required"]};
  }
  if(input.localAvailable) {
    return {mode:"local",mayExecuteConsequentially:input.task.consequential,reasons:[]};
  }
  if(input.task.dataSensitivity==="sensitive"&&!input.externalSensitiveExportAuthorized) {
    return {mode:"HOLD",mayExecuteConsequentially:false,reasons:["sensitive_export_not_authorized"]};
  }
  if(input.approvedProviderAvailable) {
    return {mode:"approved_provider",mayExecuteConsequentially:input.task.consequential,reasons:[]};
  }
  reasons.push("no_permitted_execution_route");
  return {mode:"HOLD",mayExecuteConsequentially:false,reasons};
}
