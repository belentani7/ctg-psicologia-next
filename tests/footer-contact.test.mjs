import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../src/components/Layout.tsx', import.meta.url), 'utf8');
const content = readFileSync(new URL('../src/data/content.ts', import.meta.url), 'utf8');

test('footer reads all contact details from the canonical localized record', () => {
  assert.match(layout, /import \{ contact, type Locale \}/);
  assert.match(layout, /contact\.address\[locale\]/);
  assert.match(layout, /href=\{\x60tel:\$\{contact\.phone\.replace/);
  assert.match(layout, /href=\{\x60mailto:\$\{contact\.email\}/);
  assert.match(layout, /\{contact\.phone\}/);
  assert.match(layout, /\{contact\.email\}/);
  const phone = content.match(/\bphone:\s*'([^']+)'/);
  const email = content.match(/\bemail:\s*'([^']+)'/);
  assert.ok(phone && email);
  assert.ok(!layout.includes(phone[1]), 'footer must not duplicate phone literal');
  assert.ok(!layout.includes(email[1]), 'footer must not duplicate email literal');
});

test('unpublished legal documents are not deceptive links', () => {
  assert.doesNotMatch(layout, /href=["']#["']/);
  assert.match(layout, /Documentos legales pendientes de publicación/);
  assert.match(layout, /Documents legals pendents de publicació/);
  assert.match(layout, /Legal documents are pending publication/);
  assert.match(layout, /\{t\.legalPending\}/);
});
