import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadContent } from '../scripts/lib/load-content.mjs';

const LOCALES = ['es', 'ca', 'en'];
const content = await loadContent();

test('services: catálogo no vacío con ids únicos y textos en los 3 idiomas', () => {
  assert.ok(Array.isArray(content.services), 'services debe ser un array');
  assert.ok(content.services.length > 0, 'services no puede estar vacío');
  const ids = content.services.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length, 'ids de servicios duplicados');
  for (const s of content.services) {
    for (const l of LOCALES) {
      assert.ok(s.name?.[l]?.length > 0, `servicio ${s.id}: falta name.${l}`);
      assert.ok(s.description?.[l]?.length > 0, `servicio ${s.id}: falta description.${l}`);
    }
  }
});

test('services: contiene las terapias principales del centro', () => {
  const ids = new Set(content.services.map((s) => s.id));
  for (const esperado of ['adultos', 'pareja', 'familiar', 'infantojuvenil', 'logopedia']) {
    assert.ok(ids.has(esperado), `falta el servicio "${esperado}"`);
  }
});

test('team: cada miembro tiene nombre, rol en 3 idiomas y credenciales', () => {
  assert.ok(Array.isArray(content.team) && content.team.length > 0, 'team no puede estar vacío');
  const ids = content.team.map((m) => m.id);
  assert.equal(new Set(ids).size, ids.length, 'ids de equipo duplicados');
  for (const m of content.team) {
    assert.ok(m.name?.length > 0, `miembro ${m.id}: falta name`);
    for (const l of LOCALES) {
      assert.ok(m.role?.[l]?.length > 0, `miembro ${m.id}: falta role.${l}`);
      assert.ok(Array.isArray(m.credentials?.[l]) && m.credentials[l].length > 0, `miembro ${m.id}: falta credentials.${l}`);
    }
  }
});

test('blogPosts: slugs únicos con título y extracto en los 3 idiomas', () => {
  assert.ok(Array.isArray(content.blogPosts) && content.blogPosts.length > 0, 'blogPosts no puede estar vacío');
  const slugs = content.blogPosts.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length, 'slugs duplicados');
  for (const p of content.blogPosts) {
    for (const l of LOCALES) {
      assert.ok(p.title?.[l]?.length > 0, `post ${p.slug}: falta title.${l}`);
      assert.ok(p.excerpt?.[l]?.length > 0, `post ${p.slug}: falta excerpt.${l}`);
    }
    assert.match(p.date, /^\d{4}/, `post ${p.slug}: fecha inválida`);
  }
});

test('contact: dirección, teléfono y email presentes', () => {
  const { contact } = content;
  assert.ok(contact.address?.es?.length > 0, 'falta address');
  assert.match(contact.phone, /^\+\d/, 'teléfono con formato internacional');
  assert.match(contact.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email inválido');
});
