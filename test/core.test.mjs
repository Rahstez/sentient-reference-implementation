import assert from "node:assert/strict";import test from "node:test";import {routeSentientTask} from "../src/core.mjs";
const task={taskId:"t",principalId:"u",purpose:"assist",dataSensitivity:"sensitive",consequential:false,authorityRef:null};
test("local execution is preferred for sensitive personal work",()=>{assert.equal(routeSentientTask({task,localAvailable:true,approvedProviderAvailable:true,externalSensitiveExportAuthorized:false}).mode,"local");});
test("sensitive export fails closed without authority",()=>{assert.equal(routeSentientTask({task,localAvailable:false,approvedProviderAvailable:true,externalSensitiveExportAuthorized:false}).mode,"HOLD");});
test("consequential work requires separate authority",()=>{assert.equal(routeSentientTask({task:{...task,consequential:true},localAvailable:true,approvedProviderAvailable:true,externalSensitiveExportAuthorized:false}).mode,"HOLD");});
