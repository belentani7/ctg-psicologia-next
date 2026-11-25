import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadTs } from '../scripts/lib/load-ts.mjs';

const LOCALES = ['es', 'ca', 'en'];
const content = await loadTs(new URL('../src/data/content.ts', import.meta.url));

test('services: catálogo no vacío con ids únicos y textos en los 3 idiomas', () => {
  assert.ok(Array.isArray(content.services), 'services debe ser un array');
  assert.ok(content.services.length > 0, 'services no puede estar vacío');
  const ids = content.services.map((service) => service.id);
  assert.equal(new Set(ids).size, ids.length, 'ids de servicios duplicados');

  for (const service of content.services) {
    for (const locale of LOCALES) {
      assert.ok(service.name?.[locale]?.length > 0, `servicio ${service.id}: falta name.${locale}`);
      assert.ok(service.description?.[locale]?.length > 0, `servicio ${service.id}: falta description.${locale}`);
    }
  }
});

test('services: contiene las terapias principales del centro', () => {
  const ids = new Set(content.services.map((service) => service.id));
  for (const esperado of ['adultos', 'pareja', 'familiar', 'infantojuvenil', 'logopedia']) {
    assert.ok(ids.has(esperado), `falta el servicio "${esperado}"`);
  }
});

test('team: cada miembro tiene nombre, rol en 3 idiomas y credenciales', () => {
  assert.ok(Array.isArray(content.team) && content.team.length > 0, 'team no puede estar vacío');
  const ids = content.team.map((member) => member.id);
  assert.equal(new Set(ids).size, ids.length, 'ids de equipo duplicados');

  for (const member of content.team) {
    assert.ok(member.name?.length > 0, `miembro ${member.id}: falta name`);
    for (const locale of LOCALES) {
      assert.ok(member.role?.[locale]?.length > 0, `miembro ${member.id}: falta role.${locale}`);
      assert.ok(
        Array.isArray(member.credentials?.[locale]) && member.credentials[locale].length > 0,
        `miembro ${member.id}: falta credentials.${locale}`,
      );
    }
  }
});

test('blogPosts: slugs únicos con título y extracto en los 3 idiomas', () => {
  assert.ok(Array.isArray(content.blogPosts) && content.blogPosts.length > 0, 'blogPosts no puede estar vacío');
  const slugs = content.blogPosts.map((post) => post.slug);
  assert.equal(new Set(slugs).size, slugs.length, 'slugs duplicados');

  for (const post of content.blogPosts) {
    for (const locale of LOCALES) {
      assert.ok(post.title?.[locale]?.length > 0, `post ${post.slug}: falta title.${locale}`);
      assert.ok(post.excerpt?.[locale]?.length > 0, `post ${post.slug}: falta excerpt.${locale}`);
    }
    assert.match(post.date, /^\d{4}/, `post ${post.slug}: fecha inválida`);
  }
});

test('content.ts no contiene datos de contacto duplicados (viven en src/lib/site.ts)', () => {
  assert.equal(content.contact, undefined, 'contact debe vivir solo en SITE (src/lib/site.ts)');
});
