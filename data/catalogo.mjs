// Banco de datos generado por scripts/build-catalog.mjs. No editar a mano.
import { readFileSync } from 'node:fs';

export const catalogo = JSON.parse(
  readFileSync(new URL('./catalogo.json', import.meta.url), 'utf8'),
);

export default catalogo;
