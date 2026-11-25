import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const tokens = JSON.parse(readFileSync(new URL('../src/lib/tokens.json', import.meta.url), 'utf8'));

function resolve(reference) {
  if (reference.startsWith('#')) return reference;
  const [group, name] = reference.split('.');
  const value = tokens[group]?.[name];
  assert.ok(value, `token desconocido: ${reference}`);
  return value;
}

function luminance(hex) {
  const channels = [1, 3, 5].map((offset) => {
    const value = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground, background) {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

test('la paleta declara hexadecimales válidos', () => {
  for (const group of Object.values(tokens).filter((value) => typeof value === 'object')) {
    for (const [name, value] of Object.entries(group)) {
      if (typeof value === 'string') {
        assert.match(value, /^#[0-9a-f]{6}$/i, `${name} inválido: ${value}`);
      }
    }
  }
});

test('todos los pares de contraste declarados cumplen WCAG AA (>= 4.5:1)', () => {
  for (const pair of tokens.contrastPairs) {
    const ratio = contrast(resolve(pair.foreground), resolve(pair.background));
    const rounded = Math.round(ratio * 100) / 100;
    assert.ok(
      ratio >= pair.min,
      `${pair.foreground} sobre ${pair.background} = ${rounded}:1, mínimo ${pair.min}:1`,
    );
  }
});

test('el texto principal cumple AAA sobre el fondo de la marca', () => {
  const ratio = contrast(tokens.surface.ink, tokens.brand.soft);
  assert.ok(ratio >= 7, `ink sobre soft = ${Math.round(ratio * 100) / 100}:1, mínimo 7:1`);
});
