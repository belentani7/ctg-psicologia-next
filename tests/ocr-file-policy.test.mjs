import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MAX_OCR_FILE_BYTES, validateOcrFile, validateOcrImageSignature } from '../src/components/ocr-file-policy.mjs';

const file = (type, size) => ({ type, size });

test('allows supported images up to the exact size limit', () => {
  for (const type of ['image/png', 'image/jpeg', 'image/webp']) {
    assert.equal(validateOcrFile(file(type, 1)), null);
    assert.equal(validateOcrFile(file(type, MAX_OCR_FILE_BYTES)), null);
  }
});

test('rejects PDFs and arbitrary file formats before OCR', () => {
  assert.equal(validateOcrFile(file('application/pdf', 100)), 'unsupported');
  assert.equal(validateOcrFile(file('text/html', 100)), 'unsupported');
  assert.equal(validateOcrFile(file('', 100)), 'unsupported');
});

test('rejects oversized, empty, and malformed files', () => {
  assert.equal(validateOcrFile(file('image/png', MAX_OCR_FILE_BYTES + 1)), 'too-large');
  assert.equal(validateOcrFile(file('image/png', 0)), 'empty');
  assert.equal(validateOcrFile(file('image/png', Number.POSITIVE_INFINITY)), 'empty');
  assert.equal(validateOcrFile(null), 'empty');
});

test('OCR component uses the policy and always releases its worker', () => {
  const source = readFileSync(new URL('../src/components/OcrTool.tsx', import.meta.url), 'utf8');
  assert.match(source, /validateOcrFile\(file\)/);
  assert.match(source, /finally\s*\{[\s\S]*?worker\.terminate\(\)/);
  assert.match(source, /accept="image\/png,image\/jpeg,image\/webp"/);
  assert.match(source, /className="sr-only"/);
  assert.match(source, /role="status" aria-live="polite"/);
  assert.doesNotMatch(source, /application\/pdf"/);
});

const imageBlob = (type, bytes) => new Blob([Uint8Array.from(bytes)], { type });
const pngHeader = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const jpegHeader = [0xff, 0xd8, 0xff, 0xe0];
const webpHeader = [0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50];

test('accepts matching PNG, JPEG and WebP file signatures', async () => {
  for (const [type, header] of [
    ['image/png', pngHeader], ['image/jpeg', jpegHeader], ['image/webp', webpHeader],
  ]) {
    assert.equal(await validateOcrImageSignature(imageBlob(type, header)), null, type);
  }
});

test('rejects disguised or truncated images before OCR starts', async () => {
  const disguised = imageBlob('image/png', [60, 115, 99, 114, 105, 112, 116, 62]);
  assert.equal(validateOcrFile(disguised), null, 'metadata alone accepts the disguised file');
  assert.equal(await validateOcrImageSignature(disguised), 'invalid-content');
  assert.equal(await validateOcrImageSignature(imageBlob('image/jpeg', pngHeader)), 'invalid-content');
  assert.equal(await validateOcrImageSignature(imageBlob('image/webp', webpHeader.slice(0, 10))), 'invalid-content');
  assert.equal(await validateOcrImageSignature(imageBlob('image/png', pngHeader.slice(0, 4))), 'invalid-content');
});

test('unreadable image headers fail closed and OCR checks bytes before worker creation', async () => {
  assert.equal(await validateOcrImageSignature(null), 'invalid-content');
  assert.equal(await validateOcrImageSignature({ type: 'image/png', slice() { throw Error('read denied'); } }), 'invalid-content');
  assert.equal(await validateOcrImageSignature({ type: 'image/png', slice() { return { arrayBuffer: async () => { throw Error('read denied'); } }; } }), 'invalid-content');
  const source = readFileSync(new URL('../src/components/OcrTool.tsx', import.meta.url), 'utf8');
  const signatureCheck = source.indexOf('await validateOcrImageSignature(file)');
  const workerStart = source.indexOf("await createWorker('spa')");
  assert.ok(signatureCheck !== -1 && workerStart > signatureCheck, 'header check must precede OCR worker startup');
  assert.match(source, /Comprobando formato de imagen/);
});
