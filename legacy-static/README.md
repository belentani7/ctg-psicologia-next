# legacy-static — archivo de la etapa anterior a Next.js

Este directorio **no forma parte de la aplicación** y no se despliega. Guarda,
íntegro y sin editar, el material que quedó en la raíz del repositorio antes de
la restauración de noviembre de 2026, para que nada se pierda:

| Carpeta | Contenido | Por qué está aquí |
| :--- | :--- | :--- |
| `web/` | `index.html`, `404.html`, `ampliacion.html`, `accesibilidad.html`, `accessibility.html`, `aviso-legal.html`, `docs.html`, `privacidad.html`, `test.html`, `index.html.bak-premium-20261108`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest` | Páginas estáticas sueltas que se servían desde la raíz. `index.html` era en realidad el *hub de artista* («Universo del artista», Judas Era), contenido ajeno a la clínica. |
| `assets/` | `assets/`, `brand/`, `_shared/`, `site/`, `locales/` | CSS/JS/tokens de esas páginas estáticas y traducciones de 9 idiomas que ninguna ruta usaba. |
| `.well-known/` | `security.txt` | Duplicado en la raíz; la copia vigente vive en `public/.well-known/security.txt`. |
| `docs-archive/` | `docs/*.md` | Documentación autogenerada por `repo_forge.py` (decía «puntos de entrada: ninguno detectado»). Sustituida por `docs/ARCHITECTURE.md` y `docs/VERIFICACION.md`. |
| `archive/` | `AUDITORIA_ESTADO.md`, `AUDITORIA-ESTADO-Y-PLAN.md`, `BIBLIA.md`, `CAMBIOS.md`, `ORGANIZACION.md`, `doctor.py` | Informes y glosarios de la herramienta de andamiaje, con rutas de Windows y métricas que ya no correspondían al repositorio. |
| `producto/`, `plataforma/` | Fichas comerciales, precios, paywall, prototipo | Documentos de negocio, no código. Se conservan por su valor de contexto. |

## ¿Se puede recuperar algo de aquí?

Sí, todo está versionado en Git. Para consultar el sitio estático anterior:

```bash
git log -- legacy-static/          # historial
python3 -m http.server 8080 -d legacy-static/web
```

## Reglas

- No se añaden dependencias ni código nuevo aquí.
- Si algo de esta carpeta vuelve al producto, se reescribe como componente de
  `src/` (React + Tailwind) en lugar de copiarse.
