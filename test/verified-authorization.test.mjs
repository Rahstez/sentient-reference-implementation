import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateDataEgress } from '../src/core/privacy.js';
import { validateDeviceDescriptor, mayPerformPhysicalAction } from '../src/contracts/device-interface.js';

const device = { id: 'device-1', capabilities: ['audio.output'], paired: true };
const approval = { decision: 'ALLOW', scope: 'audio.output', grantId: 'grant-1' };

test('string false cannot authorize remote egress or device pairing', () => {
  assert.equal(evaluateDataEgress({ destination: 'remote', userApproved: 'false' }, { verifyUserApproval: () => true }).allowed, false);
  assert.equal(validateDeviceDescriptor({ ...device, paired: 'false' }).paired, false);
  assert.equal(mayPerformPhysicalAction({ ...device, paired: 'false' }, 'audio.output', approval, { verifyAuthorization: () => true }), false);
});
test('invented approval fields alone cannot authorize either boundary', () => {
  assert.equal(evaluateDataEgress({ destination: 'remote', userApproved: true, authorization: { approved: true } }).allowed, false);
  assert.equal(mayPerformPhysicalAction(device, 'audio.output', approval), false);
});
test('host resolves the actual device/action binding rather than an allow flag', () => {
  const host = { verifyAuthorization: request => request.deviceId === 'device-1' && request.capability === 'audio.output' && request.authorization.grantId === 'grant-1' };
  assert.equal(mayPerformPhysicalAction(device, 'audio.output', approval, host), true);
  assert.equal(mayPerformPhysicalAction({ ...device, id: 'device-2' }, 'audio.output', approval, host), false);
  assert.equal(mayPerformPhysicalAction(device, 'audio.output', { ...approval, grantId: 'invented' }, host), false);
});
test('nonboolean, unavailable and asynchronous verifier outcomes deny', async () => {
  for (const value of ['true', 'false', 1, {}, Promise.resolve(true), Promise.reject(new Error('unavailable'))]) {
    assert.equal(mayPerformPhysicalAction(device, 'audio.output', approval, { verifyAuthorization: () => value }), false);
    assert.equal(evaluateDataEgress({ destination: 'remote', userApproved: true }, { verifyUserApproval: () => value }).allowed, false);
  }
  assert.equal(mayPerformPhysicalAction(device, 'audio.output', approval, { verifyAuthorization: () => { throw new Error('unavailable'); } }), false);
  await Promise.resolve();
});
test('verifier gets a detached frozen proof and cannot rebind the caller input', () => {
  const proof = { decision: 'ALLOW', scope: 'audio.output', nested: { grantId: 'approved' } };
  const host = { verifyAuthorization: request => {
    assert.ok(Object.isFrozen(request) && Object.isFrozen(request.authorization.nested));
    proof.nested.grantId = 'mutated';
    return request.authorization.nested.grantId === 'approved';
  } };
  assert.equal(mayPerformPhysicalAction(device, 'audio.output', proof, host), true);
});
test('unknown egress labels fail closed before calling a verifier', () => {
  let calls = 0;
  assert.equal(evaluateDataEgress({ destination: 'unknown', userApproved: true }, { verifyUserApproval: () => { calls++; return true; } }).allowed, false);
  assert.equal(calls, 0);
});
