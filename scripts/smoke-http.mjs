#!/usr/bin/env node
/**
 * Prueba de humo end-to-end contra el servidor de producción (`standalone`).
 * Levanta el servidor en un puerto libre, recorre las 30 rutas canónicas,
 * comprueba redirecciones, 404, sitemap, robots, cabeceras de seguridad y
 * hreflang, y lo apaga al terminar.
 *
 * Uso:
 *   npm run build && npm run smoke
 *   node scripts/smoke-http.mjs --help
 *   node scripts/smoke-http.mjs --port 4321 --keep   # deja el servidor vivo
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;
const args = process.argv.slice(2);

const HELP = `smoke-http — verificación end-to-end del servidor de producción

Uso:
  npm run build && npm run smoke [--port 4321] [--keep]

Opciones:
  --port <n>   Puerto para el servidor (por defecto 4321).
  --keep       No apaga el servidor al terminar.
  --help       Muestra esta ayuda.

Requiere .next/standalone (npm run build).
`;

if (args.includes('--help') || args.includes('-h')) {
  process.stdout.write(HELP);
  process.exit(0);
}

const portIndex = args.indexOf('--port');
const PORT = portIndex !== -1 ? Number(args[portIndex + 1]) : 4321;
const KEEP = args.includes('--keep');
const BASE = `http://127.0.0.1:${PORT}`;

const serverFile = join(ROOT, '.next/standalone/server.js');
if (!existsSync(serverFile)) {
  console.error('No existe .next/standalone/server.js. Ejecuta `npm run build`.');
  process.exit(2);
}

let failures = 0;
function check(name, condition, detail = '') {
  if (condition) {
    console.log(`OK    ${name}`);
  } else {
    failures += 1;
    console.error(`FALLA ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

async function waitForServer(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(`${BASE}/es`, { redirect: 'manual' });
      if (response.status > 0) return true;
    } catch {
      // el servidor todavía no escucha
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  return false;
}

const server = spawn(process.execPath, [serverFile], {
  cwd: join(ROOT, '.next/standalone'),
  env: { ...process.env, PORT: String(PORT), HOSTNAME: '127.0.0.1', NODE_ENV: 'production' },
  stdio: ['ignore', 'pipe', 'pipe'],
});

let serverLog = '';
server.stdout.on('data', (chunk) => {
  serverLog += chunk.toString();
});
server.stderr.on('data', (chunk) => {
  serverLog += chunk.toString();
});

const cleanup = () => {
  if (!KEEP && !server.killed) server.kill('SIGTERM');
};
process.on('exit', cleanup);

try {
  if (!(await waitForServer())) {
    console.error('El servidor no arrancó a tiempo.\n' + serverLog);
    process.exit(1);
  }

  // Matriz de rutas canónicas: 3 portadas + 3×9 secciones.
  const locales = ['es', 'ca', 'en'];
  const slugs = {
    es: ['el-centro', 'equipo', 'servicios', 'blog', 'contacto', 'ocr', 'aviso-legal', 'privacidad', 'cookies'],
    ca: ['el-centre', 'equip', 'serveis', 'blog', 'contacte', 'ocr', 'avis-legal', 'privacitat', 'cookies'],
    en: ['the-centre', 'team', 'services', 'blog', 'contact', 'ocr', 'legal-notice', 'privacy', 'cookies'],
  };

  for (const locale of locales) {
    const home = await fetch(`${BASE}/${locale}`, { redirect: 'manual' });
    const html = await home.text();
    check(`GET /${locale}`, home.status === 200, `status ${home.status}`);
    check(`  html[lang] en /${locale}`, new RegExp(`<html[^>]+lang="${locale}`).test(html), 'lang ausente');
    check(`  canonical en /${locale}`, html.includes('rel="canonical"'), 'sin canonical');
    const hreflang = (html.match(/hreflang=/gi) ?? []).length;
    check(`  hreflang x4 en /${locale}`, hreflang >= 4, `solo ${hreflang}`);
    check(`  JSON-LD en /${locale}`, html.includes('application/ld+json'), 'sin JSON-LD');
    check(`  un solo h1 en /${locale}`, (html.match(/<h1/g) ?? []).length === 1, 'h1 duplicado o ausente');

    for (const slug of slugs[locale]) {
      const response = await fetch(`${BASE}/${locale}/${slug}`, { redirect: 'manual' });
      check(`GET /${locale}/${slug}`, response.status === 200, `status ${response.status}`);
    }
  }

  const headers = await fetch(`${BASE}/es`);
  check('cabecera X-Content-Type-Options', headers.headers.get('x-content-type-options') === 'nosniff');
  check('cabecera Referrer-Policy', headers.headers.get('referrer-policy') === 'strict-origin-when-cross-origin');
  check('cabecera CSP', Boolean(headers.headers.get('content-security-policy')), 'sin CSP en producción');
  check('sin cabecera X-Powered-By', headers.headers.get('x-powered-by') === null);

  const root = await fetch(`${BASE}/`, { redirect: 'manual' });
  check('GET / redirige', [307, 308].includes(root.status), `status ${root.status}`);
  check('  destino con idioma', /\/[a-z]{2}$/.test(root.headers.get('location') ?? ''), root.headers.get('location') ?? '');

  const legacy = await fetch(`${BASE}/servicios`, { redirect: 'manual' });
  check('GET /servicios redirige', [307, 308].includes(legacy.status), `status ${legacy.status}`);
  check(
    '  destino /es/servicios',
    (legacy.headers.get('location') ?? '').endsWith('/es/servicios'),
    legacy.headers.get('location') ?? '',
  );

  const wrongLocale = await fetch(`${BASE}/ca/services`, { redirect: 'manual' });
  check('GET /ca/services redirige a slug catalán', [307, 308].includes(wrongLocale.status));
  check('  destino /ca/serveis', (wrongLocale.headers.get('location') ?? '').endsWith('/ca/serveis'));

  const missing = await fetch(`${BASE}/es/no-existe`, { redirect: 'manual' });
  check('GET ruta inexistente = 404', missing.status === 404, `status ${missing.status}`);

  for (const path of ['/sitemap.xml', '/robots.txt', '/manifest.webmanifest', '/icon.svg', '/og.png']) {
    const response = await fetch(`${BASE}${path}`, { redirect: 'manual' });
    check(`GET ${path}`, response.status === 200, `status ${response.status}`);
  }

  const sitemap = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
  check('sitemap con 30 URLs', (sitemap.match(/<url>/g) ?? []).length === 30, `${(sitemap.match(/<url>/g) ?? []).length}`);
} finally {
  cleanup();
}

if (failures > 0) {
  console.error(`\n${failures} comprobación/es fallida/s.`);
  process.exit(1);
}
console.log('\nOK  humo HTTP completo: rutas, redirecciones, 404, sitemap y cabeceras.');
