# Cómo contribuir

Gracias por querer mejorar la web de cTg Psicología. Estas reglas existen para
que cualquier cambio se pueda verificar y revertir sin sustos.

## Requisitos

- Node.js ≥ 22.22 (el repo declara la versión en `.nvmrc`).
- npm 10+.
- Opcional: Python 3.11+ para los tests del banco de datos y ImageMagick para
  regenerar la imagen Open Graph.

## Puesta en marcha

```bash
npm ci
npm run dev        # http://localhost:3000 → redirige a /es
```

## Antes de abrir un pull request

```bash
npm run lint        # ESLint (0 errores)
npm run typecheck   # TypeScript estricto
npm run catalog:check
npm test            # tests de Node
npm run build
npm run audit:a11y  # axe-core sobre el HTML construido
npm run smoke       # end-to-end contra el servidor de producción
```

O todo a la vez (sin la auditoría ni el humo):

```bash
npm run check
```

## Convenciones

- **Idiomas:** todo texto visible debe existir en `es`, `ca` y `en`. Los datos
  viven en `src/data/content.ts` (contenido) y `src/lib/site.ts` (identidad,
  rutas, contacto).
- **Rutas:** nunca escribas una URL a mano. Usa `pathFor(locale, sección)`.
- **Estilos:** Tailwind con los tokens de `src/lib/tokens.json`. No se añaden
  colores sueltos; si hace falta un color nuevo, se añade al token y al test de
  contraste.
- **Accesibilidad:** un solo `<h1>` por página, `alt` en imágenes con contenido,
  foco visible, contraste ≥ 4.5:1 y respeto a `prefers-reduced-motion`.
- **Privacidad:** nada de analítica de terceros, cookies de seguimiento ni
  subida de ficheros. La herramienta OCR se ejecuta en el navegador.
- **Dependencias:** se justifican en el PR. `wouter` se retiró por no usarse.

## Commits

Formato *Conventional Commits*: `feat:`, `fix:`, `chore:`, `docs:`, `test:`,
`perf:`, `refactor:`. Un commit = un cambio verificable.

## Pull requests

Rellena la plantilla, indica qué has probado y adjunta la salida de `npm run
check`. Los cambios de contenido clínico deben indicar la fuente.

## Seguridad

No abras issues públicos con vulnerabilidades: usa los avisos privados del
repositorio (`SECURITY.md`).
