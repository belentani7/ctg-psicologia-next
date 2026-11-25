#!/usr/bin/env node
/**
 * Completa la salida `standalone` de Next.js copiando los assets estáticos y la
 * carpeta `public`, que Next no incluye en ese modo. Se ejecuta tras `next build`.
 *
 * Uso:
 *   node scripts/postbuild.mjs --help
 */
import { cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;

const HELP = `postbuild — copia assets a la salida standalone

Uso (lo invoca npm run build tras next build):
  node scripts/postbuild.mjs

Copia:
  .next/static  ->  .next/standalone/.next/static
  public        ->  .next/standalone/public
`;

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  process.stdout.write(HELP);
  process.exit(0);
}

const standalone = join(ROOT, '.next/standalone');

if (!existsSync(standalone)) {
  console.error('FALLA: no existe .next/standalone. ¿Se ejecutó `next build` con output: "standalone"?');
  process.exit(1);
}

const copies = [
  [join(ROOT, '.next/static'), join(standalone, '.next/static')],
  [join(ROOT, 'public'), join(standalone, 'public')],
];

for (const [from, to] of copies) {
  if (!existsSync(from)) {
    console.error(`FALLA: no existe el origen ${from}`);
    process.exit(1);
  }
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
  console.log(`copiado ${from.replace(ROOT, '')} -> ${to.replace(ROOT, '')}`);
}

console.log('OK  salida standalone lista para `npm start`.');
