/**
 * Métricas reales del repositorio, medidas sobre el árbol de trabajo.
 * Fuente única para data/catalogo.json y para el informe de estado.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../../', import.meta.url).pathname;

const TEXT_EXTENSIONS = new Set([
  '.ts', '.tsx', '.mjs', '.js', '.jsx', '.json', '.css', '.md', '.py', '.yml', '.yaml', '.svg', '.txt',
]);

const IGNORED_DIRS = new Set(['node_modules', '.next', '.git', 'out', 'dist', 'build', 'legacy-static', 'coverage', 'test-results', 'playwright-report']);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) {
      if (entry.name === '.well-known') {
        // se mide más abajo si interesa; se ignora para el conteo de código
      }
      continue;
    }
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      walk(full, files);
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

function sum(files, fn) {
  return files.reduce((total, file) => total + fn(file), 0);
}

export function measure({ roots = ['src', 'scripts', 'test', 'data', 'public', 'assets'] } = {}) {
  const files = roots
    .flatMap((root) => {
      try {
        const full = join(ROOT, root);
        return walk(full);
      } catch {
        return [];
      }
    })
    .filter((file) => TEXT_EXTENSIONS.has(file.slice(file.lastIndexOf('.'))));

  const linesOf = (file) => readFileSync(file, 'utf8').split('\n').length;
  const sizeOf = (file) => statSync(file).size;

  const byExtension = {};
  for (const file of files) {
    const ext = file.slice(file.lastIndexOf('.'));
    byExtension[ext] = (byExtension[ext] ?? 0) + 1;
  }

  return {
    archivos: files.length,
    lineas: sum(files, linesOf),
    bytes: sum(files, sizeOf),
    tests: byExtension['.mjs'] ? countTestFiles() : 0,
    porExtension: byExtension,
  };
}

export function countTestFiles() {
  const testDir = join(ROOT, 'test');
  try {
    return readdirSync(testDir).filter((name) => name.endsWith('.test.mjs')).length;
  } catch {
    return 0;
  }
}

export function gitCommit() {
  try {
    return readFileSync(join(ROOT, '.git/HEAD'), 'utf8').trim();
  } catch {
    return null;
  }
}

export { ROOT, relative };
