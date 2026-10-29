import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const services = readFileSync(new URL('../src/components/pages/ServiciosPage.tsx', import.meta.url), 'utf8');
const blog = readFileSync(new URL('../src/components/pages/BlogPage.tsx', import.meta.url), 'utf8');

test('service CTA routes to the real localized contact pages', () => {
  assert.ok(services.includes("import Link from 'next/link'"));
  for (const route of ['/contacto', '/ca/contacte', '/en/contact']) {
    assert.ok(services.includes(route), 'Missing contact route ' + route);
  }
  assert.ok(services.includes('href={contactHref}'));
  assert.ok(services.includes('aria-label='));
  assert.ok(services.includes('s.name[locale]'));
});

test('service cards never bypass contact privacy guidance with hard-coded messaging links', () => {
  assert.doesNotMatch(services, /wa\.me\/\d{8,}/);
  assert.doesNotMatch(services, /<a\s+href="https:\/\/wa\.me/);
  assert.match(services, /Consultar disponibilidad/);
  assert.match(services, /Consultar disponibilitat/);
  assert.match(services, /Ask about availability/);
});

test('blog previews are explicitly labeled summaries, not broken read-more actions', () => {
  assert.ok(blog.includes('const summary ='));
  assert.ok(blog.includes('{summary}'));
  assert.doesNotMatch(blog, /\{read\}\s*→/);
  assert.match(blog, /artículos completos aún no están disponibles/);
  assert.match(blog, /articles complets encara no estan disponibles/);
  assert.match(blog, /Full articles are not yet available/);
});
