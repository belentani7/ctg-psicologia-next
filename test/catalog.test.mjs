import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { catalogo } from '../data/catalogo.mjs';

const jsonUrl = new URL('../data/catalogo.json', import.meta.url);
const pyUrl = new URL('../data/catalogo.py', import.meta.url);

test('el banco de datos existe y tiene identidad', () => {
  assert.ok(existsSync(jsonUrl), 'falta data/catalogo.json');
  const data = JSON.parse(readFileSync(jsonUrl, 'utf8'));
  assert.equal(typeof data.nombre, 'string');
  assert.ok(data.nombre.length > 0);
  assert.equal(typeof data.remoto, 'string');
  assert.ok(data.remoto.startsWith('https://'));
  assert.ok(data.medido && data.medido.archivos > 0, 'medido.archivos debe ser > 0');
  assert.ok(data.medido.paginas >= 30, 'el sitio debe declarar al menos 30 páginas estáticas');
});

test('la paleta declara colores válidos', () => {
  const data = JSON.parse(readFileSync(jsonUrl, 'utf8'));
  for (const clave of ['bg', 'ink', 'accent']) {
    assert.match(data.paleta[clave], /^#[0-9a-f]{6}$/i, `${clave} inválido`);
  }
});

test('catalogo.json, catalogo.mjs y catalogo.py coinciden', () => {
  const data = JSON.parse(readFileSync(jsonUrl, 'utf8'));
  assert.deepEqual(catalogo, data, 'catalogo.mjs no refleja catalogo.json');

  assert.ok(existsSync(pyUrl), 'falta data/catalogo.py');
  const py = readFileSync(pyUrl, 'utf8');
  assert.match(py, new RegExp(`REPO = "${data.nombre}"`));
  assert.match(py, new RegExp(`ARCHIVOS = ${data.medido.archivos}`));
  assert.match(py, new RegExp(`PAGINAS = ${data.paginas_estaticas}`));
});

test('el catálogo declara los tres idiomas y las seis áreas del producto', () => {
  const data = JSON.parse(readFileSync(jsonUrl, 'utf8'));
  assert.deepEqual(data.idiomas, ['es', 'ca', 'en']);
  for (const modulo of ['Especialidades', 'Equipo', 'Contacto', 'OCR local', 'Legal']) {
    assert.ok(data.modulos.includes(modulo), `falta el módulo "${modulo}"`);
  }
});
