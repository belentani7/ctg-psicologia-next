import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadTs } from '../scripts/lib/load-ts.mjs';

const site = await loadTs(new URL('../src/lib/site.ts', import.meta.url));
const { LOCALES, SECTIONS, SECTION_SLUGS, SITE, pathFor, sectionBySlug, localeOfSlug, languageAlternates, isLocale } = site;

test('registro: tres idiomas y BCP-47 completo', () => {
  assert.deepEqual([...LOCALES], ['es', 'ca', 'en']);
  for (const locale of LOCALES) {
    assert.match(site.HTML_LANG[locale], /^[a-z]{2}(-[A-Z]{2})?$/, `HTML_LANG inválido para ${locale}`);
  }
  assert.equal(isLocale('es'), true);
  assert.equal(isLocale('fr'), false);
});

test('registro: cada sección tiene slug en los tres idiomas y son únicos por idioma', () => {
  for (const section of SECTIONS) {
    for (const locale of LOCALES) {
      const slug = SECTION_SLUGS[section][locale];
      assert.ok(slug && slug.length > 0, `falta slug ${section}.${locale}`);
      assert.match(slug, /^[a-z0-9-]+$/, `slug no válido: ${slug}`);
    }
  }

  for (const locale of LOCALES) {
    const slugs = SECTIONS.map((section) => SECTION_SLUGS[section][locale]);
    assert.equal(new Set(slugs).size, slugs.length, `slugs duplicados en ${locale}`);
  }
});

test('registro: pathFor y sectionBySlug son inversos', () => {
  assert.equal(pathFor('es'), '/es');
  assert.equal(pathFor('ca', 'services'), '/ca/serveis');
  assert.equal(pathFor('en', 'contact'), '/en/contact');

  for (const locale of LOCALES) {
    for (const section of SECTIONS) {
      const path = pathFor(locale, section);
      const slug = path.split('/')[2];
      assert.equal(sectionBySlug(locale, slug), section);
      const owner = localeOfSlug(slug);
      assert.ok(owner, `el slug ${slug} no pertenece a ningún idioma`);
      assert.equal(SECTION_SLUGS[section][owner], slug, `el slug ${slug} apunta a la sección equivocada`);
    }
  }
  assert.equal(sectionBySlug('es', 'inventado'), null);
  assert.equal(localeOfSlug('inventado'), null);
});

test('registro: los slugs compartidos (blog, ocr, cookies) son iguales en los tres idiomas', () => {
  for (const section of ['blog', 'ocr', 'cookies']) {
    const slugs = new Set(SECTIONS.map(() => SECTION_SLUGS[section]));
    assert.equal(slugs.size, 1);
    assert.equal(new Set(LOCALES.map((locale) => SECTION_SLUGS[section][locale])).size, 1, `${section} debe ser igual en los 3 idiomas`);
  }
  // El resto sí se traduce.
  assert.notEqual(SECTION_SLUGS.services.es, SECTION_SLUGS.services.en);
});

test('registro: hreflang genera alternativas para los tres idiomas y x-default', () => {
  const alternates = languageAlternates('services');
  assert.equal(alternates['es-ES'], `${SITE.url}/es/servicios`);
  assert.equal(alternates['ca-ES'], `${SITE.url}/ca/serveis`);
  assert.equal(alternates.en, `${SITE.url}/en/services`);
  assert.equal(alternates['x-default'], `${SITE.url}/es/servicios`);
  assert.equal(Object.keys(alternates).length, 4);

  const home = languageAlternates();
  assert.equal(home['x-default'], `${SITE.url}/es`);
});

test('contacto: dirección, teléfono y email con formato válido', () => {
  assert.match(SITE.phone, /^\+\d{2} \d{3} \d{3} \d{3}$/, 'teléfono con formato internacional');
  assert.match(SITE.phoneHref, /^\+\d{11}$/, 'phoneHref debe ser enlazable (tel:)');
  assert.match(SITE.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'email inválido');
  assert.ok(SITE.addressLine.length > 10, 'falta la dirección postal');
  assert.equal(SITE.address.postalCode, '08901');
  assert.equal(SITE.address.city, "L'Hospitalet de Llobregat");
  assert.ok(SITE.url.startsWith('http'), 'SITE.url debe ser una URL absoluta');
});

test('SEO: cada idioma tiene descripción no vacía y distinta', () => {
  const descriptions = LOCALES.map((locale) => SITE.description[locale]);
  for (const value of descriptions) {
    assert.ok(value.length > 40, 'descripción demasiado corta');
  }
  assert.equal(new Set(descriptions).size, descriptions.length, 'descripciones duplicadas entre idiomas');
});
