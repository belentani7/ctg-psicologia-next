// Prueba de humo: comprueba que el paquete declara lo que dice y que el banco de datos es válido.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const leer = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));

test("el banco de datos existe y tiene identidad", () => {
  const url = new URL("../data/catalogo.json", import.meta.url);
  assert.ok(existsSync(url), "falta data/catalogo.json");
  const data = JSON.parse(readFileSync(url, "utf8"));
  assert.equal(typeof data.nombre, "string");
  assert.ok(data.nombre.length > 0);
  assert.ok(data.medido && data.medido.archivos > 0);
});

test("la paleta declara colores válidos", () => {
  const data = JSON.parse(readFileSync(new URL("../data/catalogo.json", import.meta.url), "utf8"));
  for (const clave of ["bg", "ink", "accent"]) {
    assert.match(data.paleta[clave], /^#[0-9a-f]{6}$/i, `${clave} inválido`);
  }
});

test("el README existe y no está vacío", () => {
  const txt = readFileSync(new URL("../README.md", import.meta.url), "utf8");
  assert.ok(txt.trim().length > 100);
});
