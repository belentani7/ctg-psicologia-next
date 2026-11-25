#!/usr/bin/env node
/**
 * Genera el banco de datos canónico del proyecto (data/catalogo.json,
 * data/catalogo.mjs y data/catalogo.py) a partir de métricas reales del árbol
 * y del registro de rutas de src/lib/site.ts.
 *
 * Uso:
 *   npm run catalog              # regenera los tres archivos
 *   node scripts/build-catalog.mjs --check   # falla si están desactualizados
 *   node scripts/build-catalog.mjs --help
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { loadTs } from './lib/load-ts.mjs';
import { measure } from './lib/repo-metrics.mjs';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');
const tokens = require('../src/lib/tokens.json');

const HELP = `build-catalog — regenera el banco de datos del repositorio

Opciones:
  --check   No escribe nada; sale con código 1 si los archivos no coinciden.
  --help    Muestra esta ayuda.

Salida:
  data/catalogo.json   (canónico, lo consumen tests y scripts)
  data/catalogo.mjs    (re-export para Node/ESM)
  data/catalogo.py     (constantes para el Makefile y tests de Python)
`;

const args = new Set(process.argv.slice(2));
if (args.has('--help') || args.has('-h')) {
  process.stdout.write(HELP);
  process.exit(0);
}

const site = await loadTs(new URL('../src/lib/site.ts', import.meta.url));

const metrics = measure();
const paginas = site.LOCALES.length * (1 + site.SECTIONS.length);

const catalogo = {
  nombre: 'ctg-psicologia-next',
  remoto: site.SITE.repo,
  tipo: 'web-app',
  modelo: 'web trilingüe de centro sanitario (Next.js App Router)',
  publico: "pacientes y familias en L'Hospitalet de Llobregat",
  licencia: pkg.license,
  version: pkg.version,
  idiomas: [...site.LOCALES],
  paginas_estaticas: paginas,
  medido: {
    archivos: metrics.archivos,
    lineas: metrics.lineas,
    bytes: metrics.bytes,
    tests: metrics.tests,
    paginas,
  },
  modulos: ['Especialidades', 'Equipo', 'Blog clínico', 'Contacto', 'OCR local', 'Legal'],
  paleta: {
    bg: tokens.surface.bg,
    ink: tokens.surface.ink,
    accent: tokens.brand.teal,
    soft: tokens.brand.soft,
    deep: tokens.brand.deep,
    amber: tokens.brand.amber,
  },
  fuente: {
    repo: 'belentani7/ctg-psicologia-next',
    generado_por: 'scripts/build-catalog.mjs',
  },
};

const json = `${JSON.stringify(catalogo, null, 2)}\n`;

const mjs = `// Banco de datos generado por scripts/build-catalog.mjs. No editar a mano.
import { readFileSync } from 'node:fs';

export const catalogo = JSON.parse(
  readFileSync(new URL('./catalogo.json', import.meta.url), 'utf8'),
);

export default catalogo;
`;

const py = `# catalogo.py — generado por scripts/build-catalog.mjs. No editar a mano.

REPO = ${JSON.stringify(catalogo.nombre)}
REMOTO = ${JSON.stringify(catalogo.remoto)}
LICENCIA = ${JSON.stringify(catalogo.licencia)}
IDIOMAS = ${JSON.stringify(catalogo.idiomas)}
PAGINAS = ${catalogo.paginas_estaticas}
ARCHIVOS = ${catalogo.medido.archivos}
LINEAS = ${catalogo.medido.lineas}
BYTES = ${catalogo.medido.bytes}
PALETA = ${JSON.stringify(catalogo.paleta)}


def info() -> dict:
    return {
        "nombre": REPO,
        "remoto": REMOTO,
        "licencia": LICENCIA,
        "idiomas": IDIOMAS,
        "paginas": PAGINAS,
        "archivos": ARCHIVOS,
        "lineas": LINEAS,
        "bytes": BYTES,
        "paleta": PALETA,
    }
`;

const targets = [
  [new URL('../data/catalogo.json', import.meta.url), json],
  [new URL('../data/catalogo.mjs', import.meta.url), mjs],
  [new URL('../data/catalogo.py', import.meta.url), py],
];

let changed = false;
for (const [url, content] of targets) {
  let current = null;
  try {
    current = readFileSync(url, 'utf8');
  } catch {
    current = null;
  }
  if (current !== content) {
    changed = true;
    if (!args.has('--check')) writeFileSync(url, content);
  }
}

if (args.has('--check')) {
  if (changed) {
    console.error('FALLA: el banco de datos no está actualizado. Ejecuta `npm run catalog`.');
    process.exit(1);
  }
  console.log(`OK  banco de datos actualizado (${catalogo.medido.archivos} archivos, ${paginas} páginas)`);
} else {
  console.log(
    `${changed ? 'Actualizado' : 'Sin cambios'}: ${catalogo.medido.archivos} archivos, ` +
      `${catalogo.medido.lineas} líneas, ${paginas} páginas estáticas.`,
  );
}
