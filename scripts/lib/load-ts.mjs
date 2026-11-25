/**
 * Carga un módulo TypeScript de `src/` en Node puro, sin proceso de build.
 * Transpila con el paquete `typescript` (devDependency) y lo importa desde una
 * URL `data:`. Solo sirve para módulos sin imports de valor (solo `import type`),
 * que es el caso de `src/lib/site.ts` y `src/data/content.ts`.
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

export async function loadTs(url) {
  const source = readFileSync(url, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(outputText, 'utf8').toString('base64')}`;
  return import(dataUrl);
}
