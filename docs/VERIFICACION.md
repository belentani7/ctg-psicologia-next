# Verificación — antes y después

Todo lo que sigue se midió en este repositorio con los comandos indicados. No hay
estimaciones.

## Contexto

`main` estaba vacío: el commit `ec58d7a` («emptied») dejó el árbol vacío y
`e9a3457` (PR #13) solo añadió `.gitignore`. El estado «antes» corresponde al
último commit bueno recuperable, `41b8c6e` (2026-11-17), restaurado en la rama de
trabajo. El «después» es el resultado de esta intervención.

## Cuadro comparativo

| Indicador | Antes (`41b8c6e`) | Después | Cómo se comprueba |
| :--- | :--- | :--- | :--- |
| `npm run build` | OK | OK | `next build` + copia `standalone` |
| Rutas prerenderizadas | 10 estáticas + 8 dinámicas (`ƒ`) | **30 estáticas (SSG)** | tabla de rutas del build |
| `npm run typecheck` | 0 errores | 0 errores | `tsc --noEmit` |
| `npm run lint` | 0 errores · 17 avisos | **0 errores · 0 avisos** | `eslint .` |
| `npm test` | **falla** (`Cannot find module '…/test'`) | **23/23 OK** | `node --test` |
| `node --test` (directo) | 6/8 (2 fallos en el catálogo) | 23/23 | autodescubrimiento |
| Tests de Python | 1 trivial (`assert True`) | **4 reales** | `python -m unittest discover -s tests` |
| CI de GitHub | **rojo** (exige `CODE_OF_CONDUCT.md`, ignorado por git) | pipeline completo | `.github/workflows/ci.yml` |
| Accesibilidad | sin medir; `lang` fijado por JS en cliente | **31 páginas, 607 comprobaciones, 0 violaciones** | `npm run audit:a11y` (axe-core + jsdom) |
| SEO | sin `sitemap`, `robots`, `canonical`, `hreflang` ni JSON-LD | 30 URLs + hreflang ×4 + JSON-LD `MedicalClinic` | `npm run smoke` |
| E2E | no existía | **63 comprobaciones HTTP** | `npm run smoke` |
| JS compartido (First Load) | 103 kB | 103 kB | tabla del build |
| Página OCR (First Load JS) | 114 kB (tesseract en el bundle) | **109 kB** (tesseract diferido) | tabla del build |
| Despliegue Vercel | roto: `@vercel/static-build` + `/dist` | `framework: nextjs` | `vercel.json` |
| Peso de `public/` | 10 MB | 9,8 MB | `du -sh public` |

## Detalle de las comprobaciones

### Build

```
✓ Compiled successfully
✓ Generating static pages (36/36)
● /[locale]             → /es, /ca, /en
● /[locale]/[section]   → 27 rutas (3 idiomas × 9 secciones)
+ First Load JS shared by all   103 kB
```

Antes, `/[locale]` y sus secciones salían marcadas como `ƒ` (render en servidor
en cada petición) porque no existía `generateStaticParams`.

### Tests de Node (23)

| Archivo | Qué garantiza |
| :--- | :--- |
| `test/content.test.mjs` | catálogo, equipo y blog completos en es/ca/en; sin contacto duplicado |
| `test/site.test.mjs` | registro de rutas: slugs únicos, `pathFor` ↔ `sectionBySlug`, hreflang, formato de contacto |
| `test/catalog.test.mjs` | coherencia `catalogo.json` ↔ `.mjs` ↔ `.py` y con el código |
| `test/tokens.test.mjs` | hexadecimales válidos y pares de contraste ≥ 4.5:1 (uno ≥ 7:1) |
| `test/assets.test.mjs` | worker, cores WASM y modelo `spa` presentes; el OCR no usa CDN |

### Accesibilidad

`npm run audit:a11y` recorre las 31 páginas prerenderizadas con las etiquetas
`wcag2a`, `wcag2aa`, `wcag21a` y `wcag21aa`: **0 violaciones**.

Limitación declarada: `color-contrast` no se evalúa en jsdom (necesita layout
real). Se cubre con `test/tokens.test.mjs`, que calcula el ratio WCAG de los
pares declarados en `src/lib/tokens.json`.

### Humo HTTP (63 comprobaciones)

`npm run smoke` levanta el servidor `standalone` y verifica: 30 rutas 200,
`<html lang>` por idioma, `canonical`, 4 `hreflang`, JSON-LD, un solo `h1`,
cabeceras de seguridad, ausencia de `X-Powered-By`, `/` y `/servicios` y
`/ca/services` con 308 al destino correcto, 404 para rutas inventadas,
`sitemap.xml` con 30 URLs, `robots.txt`, manifiesto, icono y `og.png`.

## Lo que no se pudo medir

- **Lighthouse / Core Web Vitals:** no hay Chromium en el entorno y el binario no
  es descargable desde aquí. Se sustituye por: JS compartido (103 kB), número de
  páginas prerenderizadas (30), ausencia de dependencias de terceros en el
  arranque y auditoría axe-core. Para medirlo en tu máquina:
  `npx lighthouse http://localhost:3000/es --view`.
- **Ejecución real del OCR en navegador:** requiere un navegador con
  WebAssembly. Se verifica de forma estática que worker, core y modelo existen y
  que `OcrTool.tsx` apunta a rutas locales (regla cubierta por
  `test/assets.test.mjs`).
- **CSP en producción:** la cabecera se envía y se comprueba con `curl`, pero la
  ejecución de scripts bajo esa política solo puede validarse en un navegador.
  Si algo se bloqueara, la CSP está aislada en `next.config.js` y puede relajarse
  sin tocar el resto.
