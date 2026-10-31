/**
 * Carga el módulo de contenido `src/data/content.ts` desde scripts y tests
 * Node puros (sin proceso de build): lo transpila con el paquete `typescript`
 * (ya presente en devDependencies) y lo importa como módulo ESM en memoria.
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const CONTENT_TS = new URL('../../src/data/content.ts', import.meta.url);

export async function loadContent() {
  const source = readFileSync(CONTENT_TS, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(outputText, 'utf8').toString('base64')}`;
  return import(dataUrl);
}
