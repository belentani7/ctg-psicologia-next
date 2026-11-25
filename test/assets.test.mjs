import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';

const url = (path) => new URL(`../${path}`, import.meta.url);

test('el motor OCR se sirve desde el propio sitio (nada de CDN en tiempo de ejecución)', () => {
  const files = [
    'public/tesseract/worker.min.js',
    'public/tesseract/tesseract-core-simd-lstm.wasm.js',
    'public/tesseract/tesseract-core-lstm.wasm.js',
    'public/tessdata/spa.traineddata.gz',
  ];
  for (const file of files) {
    assert.ok(existsSync(url(file)), `falta ${file}`);
    assert.ok(statSync(url(file)).size > 100_000, `${file} parece incompleto`);
  }
});

test('OcrTool apunta a las rutas locales y no descarga desde terceros', () => {
  const source = readFileSync(url('src/components/OcrTool.tsx'), 'utf8');
  assert.match(source, /workerPath: '\/tesseract\/worker\.min\.js'/);
  assert.match(source, /corePath: '\/tesseract'/);
  assert.match(source, /langPath: '\/tessdata'/);
  assert.doesNotMatch(source, /jsdelivr|unpkg|cdn\./i, 'no debe usar CDN');
});

test('los assets de marca y sociales existen', () => {
  for (const file of ['public/icon.svg', 'public/og.png', 'public/robots.txt', 'public/.well-known/security.txt']) {
    assert.ok(existsSync(url(file)), `falta ${file}`);
  }
});

test('los assets del OCR son inmutables y están excluidos del bundle JS', () => {
  const config = readFileSync(url('next.config.js'), 'utf8');
  assert.match(config, /tesseract\/:file\*/, 'falta la regla de caché para /tesseract');
  assert.match(config, /immutable/, 'los binarios deben declararse inmutables');
});
