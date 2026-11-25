# cTg Psicología — web del centro

Web oficial de **cTg Psicología (Centre de Teràpia Global)**, centro sanitario en
el centro de L'Hospitalet de Llobregat (Barcelona), en funcionamiento desde 1998.
Trilingüe (español · catalán · inglés), con catálogo de terapias, equipo,
blog clínico, contacto y una herramienta de **OCR que se ejecuta en el navegador**.

> **Estado:** restaurado y verificado en noviembre de 2026. `main` había quedado
> vacío (un único commit con `.gitignore`); el proyecto se recuperó íntegro desde
> el último estado bueno (`41b8c6e`) y se reconstruyó la capa de aplicación.
> Detalles y métricas: [`docs/VERIFICACION.md`](docs/VERIFICACION.md).

## Stack

| Pieza | Versión | Notas |
| :--- | :--- | :--- |
| Next.js | 15.5 (App Router) | Salida `standalone`, 30 páginas estáticas |
| React | 19.2 | Server Components por defecto |
| TypeScript | 5.7 | `strict: true`, 0 errores |
| Tailwind CSS | 3.4 | Tokens en `src/lib/tokens.json` |
| Tesseract.js | 5.1 | OCR en el cliente, WASM servido desde `public/` |
| Node.js | ≥ 20 | `.nvmrc` fija la versión de CI |

## Cómo se ejecuta

```bash
npm ci
npm run dev        # http://localhost:3000 → redirige a /es según el navegador
```

Producción:

```bash
npm run build      # next build + copia de assets a .next/standalone
npm start          # node .next/standalone/server.js
```

## Rutas

Todo el sitio vive bajo el idioma en la URL. Estructura canónica (30 páginas
estáticas):

| Sección | Español | Català | English |
| :--- | :--- | :--- | :--- |
| Portada | `/es` | `/ca` | `/en` |
| El centro | `/es/el-centro` | `/ca/el-centre` | `/en/the-centre` |
| Equipo | `/es/equipo` | `/ca/equip` | `/en/team` |
| Terapias | `/es/servicios` | `/ca/serveis` | `/en/services` |
| Blog | `/es/blog` | `/ca/blog` | `/en/blog` |
| Contacto | `/es/contacto` | `/ca/contacte` | `/en/contact` |
| OCR | `/es/ocr` | `/ca/ocr` | `/en/ocr` |
| Aviso legal | `/es/aviso-legal` | `/ca/avis-legal` | `/en/legal-notice` |
| Privacidad | `/es/privacidad` | `/ca/privacitat` | `/en/privacy` |
| Cookies | `/es/cookies` | `/ca/cookies` | `/en/cookies` |

`middleware.ts` detecta el idioma (cookie → `Accept-Language` → español) y
redirige con 308 las URLs antiguas (`/servicios`, `/contacto`, `/ca/services`…)
a su ruta canónica. Los slugs traducidos son la única fuente de verdad
(`src/lib/site.ts`).

## Estructura

```
src/
  app/
    [locale]/layout.tsx      layout raíz: <html lang>, metadata, JSON-LD
    [locale]/page.tsx        portada
    [locale]/[section]/      las 9 secciones × 3 idiomas (generateStaticParams)
    [locale]/not-found.tsx   404 dentro del idioma
    global-not-found.tsx     404 global con <html lang>
    sitemap.ts robots.ts manifest.ts
  components/                Layout (header/footer), páginas, OCR, shader WebGL
  data/content.ts            servicios, equipo y blog en 3 idiomas
  lib/site.ts                idiomas, rutas, contacto y datos del negocio
  lib/seo.ts                 metadata, hreflang, Open Graph y JSON-LD
  lib/tokens.json            paleta única (la leen Tailwind y los tests)
  middleware.ts              canonización de URLs e idioma
scripts/                     herramientas internas (ver más abajo)
test/                        tests de Node (contenido, rutas, catálogo, tokens)
tests/                       tests de Python del banco de datos
legacy-static/               archivo del sitio estático anterior (no se despliega)
```

## Scripts

| Script | Qué hace |
| :--- | :--- |
| `npm run dev` | Desarrollo con recarga en caliente. |
| `npm run build` | Build de producción + salida `standalone` completa. |
| `npm start` | Sirve la salida de producción. |
| `npm run lint` | ESLint (`next/core-web-vitals` + TypeScript). |
| `npm run typecheck` | `tsc --noEmit` en modo estricto. |
| `npm test` | Tests de Node: contenido, rutas, catálogo, contraste, assets. |
| `npm run catalog` | Regenera `data/catalogo.{json,mjs,py}` con métricas reales. |
| `npm run catalog:check` | Falla si el banco de datos quedó desactualizado. |
| `npm run audit:a11y` | axe-core (WCAG 2.0/2.1 A-AA) sobre el HTML construido. |
| `npm run smoke` | E2E: levanta el servidor y recorre 30 rutas + 404 + redirecciones + cabeceras. |
| `npm run check` | lint + tipos + catálogo + tests + build. |

Herramientas internas (todas con `--help`):

```bash
node scripts/build-catalog.mjs --help   # mide el repo y escribe el catálogo
node scripts/validate-catalog.mjs       # coherencia JSON/MJS/PY/código
node scripts/audit-a11y.mjs --verbose   # detalle de cada violación
node scripts/smoke-http.mjs --port 4321 # E2E con puerto a medida
./scripts/make-og.sh                    # regenera public/og.png (ImageMagick)
```

## Decisiones que conviene conocer

- **SEO:** cada página tiene `canonical`, `hreflang` para los tres idiomas +
  `x-default`, Open Graph con imagen 1200×630, `sitemap.xml` y `robots.txt`
  generados por Next, y JSON-LD `MedicalClinic` + `WebSite`.
- **Accesibilidad:** un `h1` por página, enlace «saltar al contenido», foco
  visible de 3 px, `aria-current` en la navegación, contraste verificado por test
  (≥ 4.5:1) y respeto a `prefers-reduced-motion`.
- **Rendimiento:** las 30 páginas se prerenderizan; el OCR y el shader WebGL se
  cargan bajo demanda, así que no entran en el bundle inicial (103 kB de JS
  compartido).
- **Privacidad:** sin analítica ni cookies de seguimiento. La única cookie es
  `NEXT_LOCALE` (idioma, 1 año). El OCR usa Tesseract.js con *worker*, core WASM
  y modelo de español servidos desde `public/`: la imagen nunca sale del
  navegador.
- **Seguridad:** cabeceras CSP, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy` y HSTS definidas en `next.config.js` (CSP solo en
  producción para no romper el HMR).

## Despliegue

- **Vercel:** importa el repositorio; `vercel.json` declara `framework: nextjs`.
  Define `NEXT_PUBLIC_SITE_URL` (por ejemplo `https://tu-dominio.com`) para que
  canonical, `hreflang` y `sitemap.xml` usen el dominio correcto. Si no se
  define, se usa `VERCEL_PROJECT_PRODUCTION_URL` y, en local,
  `http://localhost:3000`.
- **Node propio:** `npm ci && npm run build && npm start` (la carpeta
  `.next/standalone` es autosuficiente, incluido `public/`).

## Licencia

MIT — ver [`LICENSE`](LICENSE). El contenido clínico y la marca pertenecen a
cTg Psicología.
