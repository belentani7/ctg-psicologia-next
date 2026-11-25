# AGENTS.md — instrucciones para agentes automáticos

Este repositorio es la web oficial de **cTg Psicología** (L'Hospitalet de
Llobregat). Antes de tocar nada, lee esta página entera: evita los errores que ya
se cometieron.

## Stack real

- Next.js 15 (App Router) + React 19 + TypeScript estricto.
- Tailwind CSS 3 con tokens en `src/lib/tokens.json`.
- Tesseract.js 5 (OCR en el navegador, assets locales).
- Tests: `node --test` (23 comprobaciones), Python `unittest` (4) para el banco
  de datos, axe-core + jsdom para accesibilidad y un humo HTTP end-to-end.
- Node ≥ 20 (`.nvmrc`).

## Comandos

| Comando | Efecto |
| :--- | :--- |
| `npm run dev` | Servidor de desarrollo (redirige `/` → `/es`). |
| `npm run build` | Build de producción + `standalone` + copia de assets. |
| `npm start` | Sirve la salida `standalone`. |
| `npm run lint` / `typecheck` | Calidad estática. |
| `npm test` | Tests de Node (contenido, rutas, catálogo, tokens, assets). |
| `npm run catalog:check` | Verifica que el banco de datos coincide con el código. |
| `npm run audit:a11y` | axe-core sobre el HTML de `.next/server/app`. |
| `npm run smoke` | E2E contra el servidor de producción. |
| `npm run check` | Todo lo anterior salvo auditoría y humo. |
| `make help` | Lista de tareas equivalentes. |

## Reglas que no se negocian

1. **No borrar historia.** Si algo no pertenece al producto, se mueve a
   `legacy-static/`, no se elimina.
2. **Rutas siempre por `pathFor()`** (`src/lib/site.ts`). Nunca escribas `/es/...`
   a mano en un componente.
3. **Trilingüe de verdad**: cualquier texto visible en `es`, `ca` y `en`.
4. **Accesibilidad**: un `h1` por página, contraste ≥ 4.5:1, foco visible,
   `prefers-reduced-motion`. La auditoría debe seguir en 0 violaciones.
5. **Privacidad**: sin analítica, sin cookies de seguimiento, sin subida de
   ficheros. El OCR corre en el dispositivo del usuario con assets locales
   (`public/tesseract`, `public/tessdata`).
6. **Si regeneras el catálogo**, ejecuta `npm run catalog` y commitea los tres
   archivos (`catalogo.json`, `.mjs`, `.py` juntos).
7. **No inventes datos clínicos**: el contenido sale de `src/data/content.ts`.
   No añadas especialidades, personas ni credenciales que no estén ya ahí.

## Trampas conocidas

- `node --test test/` **no funciona** en Node 22 (interpreta el directorio como
  módulo). Usa `npm test` (equivale a `node --test` con autodescubrimiento).
- El layout raíz vive en `src/app/[locale]/layout.tsx`; no crees
  `src/app/layout.tsx` o romperás el `lang` del documento.
- `next build` con `output: "standalone"` no copia `public/` ni `.next/static`:
  de eso se encarga `scripts/postbuild.mjs`.
- El 404 global necesita `experimental.globalNotFound` (ya activado) para tener
  `<html lang>`.

## Verificación mínima antes de dar algo por terminado

```bash
npm run lint && npm run typecheck && npm run catalog:check && npm test && npm run build && npm run audit:a11y && npm run smoke
```

Si alguno falla, no está terminado.
