import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MAX_OCR_FILE_BYTES, validateOcrFile } from '../src/components/ocr-file-policy.mjs';

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
