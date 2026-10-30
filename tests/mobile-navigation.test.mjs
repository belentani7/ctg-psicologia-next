import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/components/Layout.tsx', import.meta.url), 'utf8');

test('all primary routes remain navigable below desktop width without JavaScript', () => {
  assert.match(source, /<details className="relative lg:hidden">/);
  assert.match(source, /<summary className=/);
  assert.match(source, /<nav aria-label=\{locale === 'es' \? 'Navegación móvil'/);
  assert.match(source, /items\.map\(\(item\) => \(/);
  assert.match(source, /<Link key=\{item\.href\} href=\{item\.href\}/);
  assert.match(source, /className="hidden lg:flex/);
});

test('mobile menu includes all language switches and visible focus styling', () => {
  assert.match(source, /LANGS\.map\(\(language\) => \(/);
  assert.match(source, /lang=\{language\.code\}/);
  assert.match(source, /focus-visible:outline/);
  assert.match(source, /max-w-\[calc\(100vw-2rem\)\]/);
});
