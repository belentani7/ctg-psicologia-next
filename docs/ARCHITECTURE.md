# Arquitectura

## Principio

Todo el sitio se deriva de dos fuentes de verdad, y nada más:

1. `src/lib/site.ts` — idiomas, slugs, rutas, contacto, URL pública y etiquetas.
2. `src/data/content.ts` — servicios, equipo y blog (textos en es/ca/en).

Los componentes no contienen URLs ni datos de contacto: llaman a `pathFor()` y a
`SITE`. Así un cambio de slug o de teléfono se hace en un sitio y se propaga a la
navegación, al footer, al `sitemap`, al JSON-LD y a los tests.

## Árbol de rutas

```
src/app/
  [locale]/layout.tsx        ← layout raíz (único <html lang> del sitio)
  [locale]/page.tsx          ← portada (SSG × 3 idiomas)
  [locale]/[section]/page.tsx← 9 secciones × 3 idiomas = 27 (SSG)
  [locale]/not-found.tsx     ← 404 con el layout del idioma
  global-not-found.tsx       ← 404 global (experimental.globalNotFound)
  sitemap.ts / robots.ts / manifest.ts
```

No existe `src/app/layout.tsx` a propósito: el layout raíz es el de `[locale]`,
lo que permite renderizar `<html lang="ca-ES">` en servidor (algo imposible si el
layout raíz no conoce el idioma). `generateStaticParams` en el layout y en la
página de sección produce las 30 páginas estáticas y `dynamicParams = false`
garantiza que no se genere ninguna ruta fuera del registro.

## Middleware

`src/middleware.ts` normaliza la entrada antes de llegar a React:

| Entrada | Salida | Motivo |
| :--- | :--- | :--- |
| `/` | `/es`, `/ca` o `/en` según cookie/`Accept-Language` | Idioma explícito en URL, cacheable |
| `/servicios` | `/es/servicios` | Slug heredado de la etapa estática |
| `/contact` | `/{idioma}/contact…` | Slug de otro idioma → canónico |
| `/ca/services` | `/ca/serveis` | Slug inglés bajo prefijo catalán |
| `/api/…`, `/_next/…`, `*.png` | sin tocar | Excluidos por `matcher` |

Todas las redirecciones son 308 (permanentes, conservan el método) y fijan la
cookie `NEXT_LOCALE` para recordar la preferencia.

## SEO

`src/lib/seo.ts` construye:

- `title` y `description` por sección e idioma;
- `canonical` + `hreflang` (es-ES, ca-ES, en, x-default) con URL absoluta;
- Open Graph y Twitter con `public/og.png` (1200×630);
- JSON-LD `MedicalClinic` y `WebSite` con los datos reales del centro.

`metadataBase` sale de `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` →
`localhost`. No hay dominio inventado en el código.

## Capa visual

- **Tailwind** con tokens en `src/lib/tokens.json` (única paleta; la consumen
  `tailwind.config.ts`, el catálogo y el test de contraste).
- **`HeroShader.tsx`** (WebGL puro, sin librerías): se carga con
  `next/dynamic` y `ssr: false`, dibuja un frame si `prefers-reduced-motion`
  está activo, pausa el `requestAnimationFrame` cuando sale del viewport o la
  pestaña se oculta, y cae a un degradado CSS si no hay WebGL. Es decorativo
  (`aria-hidden`), y el texto del hero nunca se superpone al canvas para no
  comprometer el contraste.

## OCR

`OcrTool.tsx` importa `tesseract.js` de forma dinámica al seleccionar la imagen
(no en el bundle inicial) y lo configura con rutas locales:

```ts
await createWorker('spa', undefined, {
  workerPath: '/tesseract/worker.min.js',
  corePath: '/tesseract',      // tesseract-core-{simd-,}lstm.wasm.js
  langPath: '/tessdata',       // spa.traineddata.gz
  logger: (m) => …             // progreso accesible
});
```

Los tres binarios se sirven con `Cache-Control: immutable` y el modelo queda
cacheado en el navegador por Tesseract. Cualquier cambio de versión de
`tesseract.js` obliga a recopiar los ficheros desde `node_modules` (test
`test/assets.test.mjs` lo verifica).

## Verificación

La cadena de confianza, de menos a más costosa:

1. `eslint` + `tsc` — errores de código.
2. `node --test` — invariantes de datos, rutas, contraste y assets.
3. `python -m unittest` — coherencia del catálogo generado.
4. `next build` — que compile y prefetche las 30 rutas.
5. `axe-core` sobre el HTML — accesibilidad WCAG A-AA.
6. `smoke-http` — servidor real: 200/404/308, cabeceras, sitemap y hreflang.

Ver [`VERIFICACION.md`](VERIFICACION.md) para los números.
