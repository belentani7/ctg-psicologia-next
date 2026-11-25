#!/usr/bin/env node
/**
 * Auditoría de accesibilidad de las páginas prerenderizadas con axe-core.
 * Lee el HTML estático generado por `next build` y ejecuta las reglas WCAG 2.x
 * sobre un DOM de jsdom. No necesita navegador ni servidor.
 *
 * Uso:
 *   npm run build && npm run audit:a11y
 *   node scripts/audit-a11y.mjs --help
 *   node scripts/audit-a11y.mjs --verbose     # muestra también los nodos afectados
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { JSDOM } = require('jsdom');
const axePath = require.resolve('axe-core/axe.min.js');
const axeSource = readFileSync(axePath, 'utf8');

const ROOT = new URL('../', import.meta.url).pathname;
const APP_DIR = join(ROOT, '.next/server/app');
const VERBOSE = process.argv.includes('--verbose');

const HELP = `audit-a11y — auditoría WCAG con axe-core sobre el HTML construido

Uso:
  npm run build && npm run audit:a11y [--verbose]

Lee:
  .next/server/app/**/*.html  (páginas prerenderizadas)

Códigos de salida:
  0  sin violaciones
  1  hay violaciones (se listan con su criterio WCAG)
  2  no hay HTML construido (ejecuta antes npm run build)

Nota: color-contrast no se evalúa en jsdom (requiere layout real); el contraste
de la paleta se cubre aparte en test/tokens.test.mjs.
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  process.stdout.write(HELP);
  process.exit(0);
}

if (!existsSync(APP_DIR)) {
  console.error('No existe .next/server/app. Ejecuta `npm run build` antes de auditar.');
  process.exit(2);
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

const pages = walk(APP_DIR);
if (pages.length === 0) {
  console.error('No se encontraron páginas .html prerenderizadas.');
  process.exit(2);
}

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

let totalViolations = 0;
let totalPasses = 0;
const summary = [];

for (const file of pages.sort()) {
  const html = readFileSync(file, 'utf8');
  const route = '/' + relative(APP_DIR, file).replace(/\.html$/, '').replace(/\/index$/, '');
  const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
  // jsdom no implementa canvas; el shader del hero es decorativo y axe no lo
  // evalúa, así que se anula el contexto para evitar ruido en stderr.
  dom.window.HTMLCanvasElement.prototype.getContext = () => null;
  dom.window.eval(axeSource);
  const results = await dom.window.axe.run(dom.window.document.documentElement, {
    runOnly: { type: 'tag', values: WCAG_TAGS },
  });

  totalPasses += results.passes.length;
  totalViolations += results.violations.length;

  const status = results.violations.length === 0 ? 'OK ' : 'FALLA';
  summary.push(`${status} ${route.padEnd(28)} ${results.passes.length} reglas ok`);

  for (const violation of results.violations) {
    summary.push(
      `      · [${violation.impact}] ${violation.id}: ${violation.help} (${violation.nodes.length} nodo/s)`,
    );
    if (VERBOSE) {
      for (const node of violation.nodes.slice(0, 3)) {
        summary.push(`        ${node.target.join(' ')} — ${node.failureSummary?.split('\n')[0] ?? ''}`);
      }
    }
  }

  dom.window.close();
}

console.log(summary.join('\n'));
console.log(
  `\n${pages.length} páginas auditadas · ${totalPasses} comprobaciones superadas · ${totalViolations} violaciones`,
);

if (totalViolations > 0) {
  console.error('Auditoría de accesibilidad con violaciones.');
  process.exit(1);
}

console.log('OK  accesibilidad sin violaciones WCAG 2.0/2.1 A-AA (axe-core).');
