# cTg Psicología — web del centro

Web oficial del centro de psicología **cTg Psicología (Teràpia Global)** de L'Hospitalet de Llobregat (Barcelona). Construida con Next.js 15 (App Router), React 19 y Tailwind CSS, en tres idiomas (español, catalán e inglés) e incluye una herramienta OCR que extrae texto de imágenes y PDFs directamente en el navegador.

## Qué hace

- **Web del centro**: páginas de inicio (con cita y llamada a la acción por WhatsApp), servicios (12 terapias), equipo (9 profesionales con sus credenciales), el centro, blog (artículos) y contacto con dirección, teléfono y email reales del centro.
- **Multilingüe**: rutas dinámicas `/[locale]/...` con contenido íntegro en `es`, `ca` y `en` (definido en `src/data/content.ts`).
- **OCR en el navegador** (`/ocr`): sube una imagen (PNG/JPG) o un PDF escaneado y extrae su texto con `tesseract.js` (idioma `spa`, con motor y datos servidos desde `public/`); el archivo no sale del dispositivo del usuario.

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router, `output: standalone`)
- [React](https://react.dev/) 19 + TypeScript 5
- [Tailwind CSS](https://tailwindcss.com/) 3 + PostCSS/autoprefixer
- [tesseract.js](https://github.com/naptha/tesseract.js) 5 para el OCR cliente
- Tests con `node:test` y lint con ESLint 9 (`eslint-config-next`)

## Instalación

Requisitos: Node.js 20+ y npm.

```bash
npm ci        # instala dependencias exactas según package-lock.json
```

## Uso

```bash
npm run dev     # desarrollo en http://localhost:3000
npm run build   # build de producción (standalone) + copia de estáticos
npm run start   # sirve el build standalone (node .next/standalone/server.js)
```

## Estructura

```
├── public/                  # estáticos: motor y datos de tesseract (spa)
├── scripts/
│   ├── export.mjs           # export de datos principales a JSON (protocolo Belentani)
│   └── lib/load-content.mjs # carga TS de contenido desde Node puro
├── src/
│   ├── app/                 # rutas (App Router): es/ y [locale]/ (ca, en)
│   ├── components/          # Layout, OcrTool y páginas (HomePage, Servicios…)
│   └── data/content.ts      # datos reales: servicios, equipo, blog y contacto
├── test/basic.test.mjs      # tests (node --test)
└── eslint.config.mjs        # configuración ESLint (flat config)
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | servidor de desarrollo |
| `npm run build` | build de producción standalone + copia de `.next/static` y `public/` |
| `npm run start` | arranca el servidor standalone compilado |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm test` | tests con `node --test test/` |
| `node scripts/export.mjs` | exporta servicios/equipo/blog/contacto como JSON a stdout (`--out <fichero>` para guardarlo) |

## Utilidad

- **Utilidad social:** da presencia accesible y trilingüe (es/ca/en) a un centro de psicología de L'Hospitalet, acercando información clara de 12 terapias y su equipo, y ofrece una herramienta OCR gratuita que funciona sin subir documentos a ningún servidor.
- **Utilidad comercial:** es el escaparate y canal de captación del centro (CTA directo por WhatsApp, SEO local por servicio y ciudad), y la exportación JSON de su catálogo (`scripts/export.mjs`) permite reutilizar esos datos en otros canales o integraciones.

## Licencia

[MIT](./LICENSE) © 2026 Belentani

<!-- repo-forge:readme:inicio -->
## Qué es

**cTg Psicología** — web de centro sanitario (Next.js).

Un artefacto editorial que respeta al lector: dato con fuente, voz con autoría, límite declarado.

## Estado medido

| Dato | Valor |
|---|---|
| Lenguajes | JavaScript, JSON, TypeScript, HTML, Markdown, CSS |
| Archivos / líneas | 65 / 9559 |
| Páginas HTML | 2 |
| Tests detectados | 2 |
| Cumplimiento de reglas | 37/37 (100.0%) |

Todo lo anterior se midió en disco el 2026-11-10; no es una estimación.

## Uso

```bash
npm install
npm run dev
```

## Estructura

```
assets/
brand/
data/
docs/
plataforma/
producto/
public/
scripts/
site/
src/
```

## Diseño de plataforma

- Especialidades
- Equipo
- Reserva
- Blog clínico
- Legal

La ficha completa —máximo potencial, marca, fases de monetización y recursos— vive en
[`plataforma/FICHA.md`](plataforma/FICHA.md). Los tokens de marca están en
[`brand/tokens.css`](brand/tokens.css).

## Reglas del proyecto

Este repositorio sigue el catálogo oficial del ecosistema (`GH-*`, `WEB-*`, `ACC-*`,
`SEO-*`, `COH-*`, `DEV-*`). El gate se ejecuta con:

```bash
python scripts/doctor.py
```

## Licencia

MIT. Ver [`LICENSE`](LICENSE).
<!-- repo-forge:readme:fin -->
<!-- repo-forge:readme:fin -->
<!-- repo-forge:readme:fin -->
<!-- repo-forge:readme:fin -->

## Producto

Oferta, precio y cobro: [`producto/OFERTA.md`](producto/OFERTA.md) · [`producto/precios.json`](producto/precios.json) · [`producto/landing.html`](producto/landing.html)
