# Changelog

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado: [SemVer](https://semver.org/lang/es/).

## [1.1.0] — 2026-11-25

### Corregido

- **`main` había quedado vacío.** El commit `ec58d7a` («emptied») sustituyó el
  árbol completo por el árbol vacío y `e9a3457` (PR #13) solo añadió
  `.gitignore`. Se restauró el proyecto desde `41b8c6e` y se reconstruyó la aplicación.
- `npm test` fallaba siempre: `node --test test/` trata el directorio como módulo
  en Node 22 (`MODULE_NOT_FOUND`). Ahora es `node --test` con autodescubrimiento.
- Dos tests de humo fallaban contra un `data/catalogo.json` que no era el catálogo
  del sitio (`nombre`, `medido` y `paleta` no existían).
- CI fallaba en el paso de gobernanza porque exigía `CODE_OF_CONDUCT.md`, un
  archivo que estaba en `.gitignore` y no existía.
- `codeql.yml` declaraba `permissions:` dos veces (clave YAML duplicada).
- `vercel.json` forzaba `@vercel/static-build` sobre `package.json` y publicaba
  `/dist`: incompatible con Next.js, el despliegue habría servido un 404.
- El `<html lang>` se fijaba con JavaScript en el cliente; ahora se renderiza en
  servidor para los tres idiomas.
- El OCR anunciaba PDF y descargaba worker, core WASM y modelo desde un CDN de
  terceros; ahora usa assets locales y acepta solo imágenes (lo que realmente hace).

### Añadido

- Arquitectura i18n canónica: `/[locale]` con `generateStaticParams` (30 páginas
  estáticas), slugs traducidos y `middleware.ts` que redirige 308 las URLs
  antiguas y los slugs del idioma equivocado.
- `sitemap.xml`, `robots.txt` y `manifest.webmanifest` generados por Next.
- `canonical`, `hreflang` (es-ES/ca-ES/en/x-default), Open Graph, Twitter Card y
  JSON-LD `MedicalClinic` en todas las páginas.
- Páginas legales reales por idioma (aviso legal, privacidad, cookies) que
  describen lo que el código hace de verdad.
- Cabeceras de seguridad (CSP en producción, HSTS, `Permissions-Policy`,
  `nosniff`, `Referrer-Policy`) y `poweredByHeader: false`.
- Enlace «saltar al contenido», `aria-current` en la navegación, `role="status"`
  en el formulario y en el OCR, y `prefers-reduced-motion` respetado.
- Tests: 23 de Node (contenido, registro de rutas, catálogo, contraste WCAG,
  assets del OCR) y 4 de Python; auditoría axe-core y humo HTTP end-to-end.
- Herramientas internas: `build-catalog`, `validate-catalog`, `audit-a11y`,
  `smoke-http`, `postbuild` y `make-og.sh`, todas con `--help`.
- `Makefile` con tareas documentadas y `legacy-static/` con el archivo del sitio
  estático anterior (incluido el `index.html` del «Universo del artista», ajeno
  a la clínica).

### Cambiado

- `contact` deja de estar duplicado en `content.ts`: vive solo en `SITE`.
- Paleta única en `src/lib/tokens.json`; Tailwind y el test de contraste la leen.
- `HeroShader` pasa de `.jsx` sin tipos y sin usar a `.tsx` tipado, integrado en
  la portada con carga diferida, pausa por visibilidad y fallback sin WebGL.
- Se retiró la dependencia `wouter` (no se usaba en ningún sitio).
- README, `AGENTS.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` y `docs/`
  reescritos con datos verificables del repositorio.

### Rendimiento

- Las páginas de idioma pasan de dinámicas (`ƒ`) a estáticas (`●`): 30 rutas
  prerenderizadas.
- `tesseract.js` y el shader salen del bundle inicial mediante `import()`
  dinámico: 103 kB de JS compartido en todas las rutas.

## [1.0.0] — 2026-10

- Versión inicial del centro con App Router, catálogo de terapias, equipo, blog
  y OCR.
