#!/usr/bin/env node
/**
 * Valida que el banco de datos (JSON, MJS y PY) sea coherente entre sí y con el
 * registro de rutas de la aplicación. No escribe nada.
 *
 * Uso:
 *   npm run catalog:check
 *   node scripts/validate-catalog.mjs --help
 */
import { readFileSync } from 'node:fs';
import { catalogo } from '../data/catalogo.mjs';
import { loadTs } from './lib/load-ts.mjs';

const HELP = `validate-catalog — comprueba el banco de datos del repositorio

Opciones:
  --help   Muestra esta ayuda.

Comprueba:
  - campos obligatorios y tipos
  - paleta en formato #rrggbb
  - coherencia entre catalogo.json, catalogo.mjs y catalogo.py
  - coherencia con src/lib/site.ts (idiomas, páginas, repositorio)
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  process.stdout.write(HELP);
  process.exit(0);
}

const errores = [];

const REQUIRED = ['nombre', 'remoto', 'tipo', 'modelo', 'licencia', 'idiomas', 'medido', 'paleta'];
for (const key of REQUIRED) {
  if (!(key in catalogo)) errores.push(`falta el campo "${key}"`);
}

if (catalogo.medido && !(catalogo.medido.archivos > 0)) errores.push('medido.archivos debe ser > 0');
if (catalogo.idiomas && !Array.isArray(catalogo.idiomas)) errores.push('idiomas debe ser un array');

for (const [clave, valor] of Object.entries(catalogo.paleta ?? {})) {
  if (!/^#[0-9a-f]{6}$/i.test(valor)) errores.push(`paleta.${clave} inválido: ${valor}`);
}

const json = JSON.parse(readFileSync(new URL('../data/catalogo.json', import.meta.url), 'utf8'));
if (JSON.stringify(json) !== JSON.stringify(catalogo)) {
  errores.push('catalogo.json y catalogo.mjs no coinciden (regenera con npm run catalog)');
}

const py = readFileSync(new URL('../data/catalogo.py', import.meta.url), 'utf8');
for (const [nombre, valor] of [
  ['REPO', catalogo.nombre],
  ['REMOTO', catalogo.remoto],
  ['LICENCIA', catalogo.licencia],
  ['PAGINAS', catalogo.paginas_estaticas],
  ['ARCHIVOS', catalogo.medido.archivos],
]) {
  const esperado = `const ${nombre} = ${JSON.stringify(valor).replace(/"/g, '')}`;
  const esperadoJson = `const ${nombre} = ${JSON.stringify(valor)}`;
  if (!py.includes(esperado) && !py.includes(esperadoJson) && !py.includes(`${nombre} = ${JSON.stringify(valor)}`)) {
    errores.push(`catalogo.py: ${nombre} no coincide con el catálogo (${valor})`);
  }
}

const site = await loadTs(new URL('../src/lib/site.ts', import.meta.url));
if (JSON.stringify(site.LOCALES) !== JSON.stringify(catalogo.idiomas)) {
  errores.push('catalogo.idiomas no coincide con LOCALES de src/lib/site.ts');
}
const paginasEsperadas = site.LOCALES.length * (1 + site.SECTIONS.length);
if (catalogo.paginas_estaticas !== paginasEsperadas) {
  errores.push(
    `catalogo.paginas_estaticas=${catalogo.paginas_estaticas} pero el registro genera ${paginasEsperadas}`,
  );
}
if (catalogo.remoto !== site.SITE.repo) {
  errores.push('catalogo.remoto no coincide con SITE.repo');
}

if (errores.length > 0) {
  console.error(`FALLA\n- ${errores.join('\n- ')}`);
  process.exit(1);
}

console.log(
  `OK  ${catalogo.nombre}: ${catalogo.medido.archivos} archivos · ${catalogo.paginas_estaticas} páginas · ${catalogo.idiomas.join('/')}`,
);
