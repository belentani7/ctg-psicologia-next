#!/usr/bin/env node
/**
 * Export de datos del proyecto (protocolo 14 — Belentani).
 * Genera un JSON independiente con los datos principales del centro
 * (servicios, equipo, blog y contacto) leídos de `src/data/content.ts`.
 *
 * Uso:
 *   node scripts/export.mjs              # imprime el JSON por stdout
 *   node scripts/export.mjs --out f.txt  # escribe el JSON en el fichero indicado
 */
import { writeFileSync } from 'node:fs';
import { loadContent } from './lib/load-content.mjs';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const outFile = outIndex !== -1 ? args[outIndex + 1] : null;

const { services, team, blogPosts, contact } = await loadContent();

const payload = {
  generatedAt: new Date().toISOString(),
  source: 'src/data/content.ts',
  services,
  team,
  blogPosts,
  contact,
};

const json = JSON.stringify(payload, null, 2);

if (outFile) {
  writeFileSync(outFile, `${json}\n`, 'utf8');
  console.error(`Export escrito en ${outFile}`);
} else {
  console.log(json);
}
