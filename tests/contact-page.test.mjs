import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/components/pages/ContactoPage.tsx', import.meta.url), 'utf8');

test('contact page does not display a fake message form or silently collect health data', () => {
  assert.doesNotMatch(source, /<form\b/i);
  assert.doesNotMatch(source, /type="submit"/);
  assert.match(source, /formulario web no está disponible/);
  assert.match(source, /No message is stored/);
});

test('all three languages provide privacy notice and real phone, email and WhatsApp actions', () => {
  assert.match(source, /const COPY: Record<Locale/);
  for (const locale of ['es:', 'ca:', 'en:']) assert.ok(source.includes(locale));
  assert.match(source, /No envíes informes clínicos/);
  assert.match(source, /No enviïs informes clínics/);
  assert.match(source, /Do not send clinical records/);
  assert.match(source, /href=\{phoneUri\}/);
  assert.match(source, /mailto:\$\{contact\.email\}/);
  assert.match(source, /href=\{whatsappUri\}/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.doesNotMatch(source, /wa\.me\/34605362664/);
});

test('contact channels and address are labelled, keyboard-reachable and locale-aware', () => {
  assert.match(source, /<main id="main-content" lang=\{locale\}/);
  assert.match(source, /aria-labelledby="contact-channels"/);
  assert.match(source, /aria-labelledby="contact-address"/);
  assert.match(source, /focus-visible:outline/);
  assert.match(source, /contact\.address\[locale\]/);
});
