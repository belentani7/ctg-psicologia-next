# Auditoría, situación y plan de elevación — `ctg-psicologia-next`

Generado 2026-11-03 por el pase de reglas del ecosistema (catálogo `_meta/reglas-oficiales.md`).
Todo lo afirmado aquí sale de datos reales: base de consolidación, gate oficial y git.

- **Categoría:** educacion · **Ruta:** `C:\Users\USER\belentani-ecosystem\educacion\ctg-psicologia-next`
- **Remoto:** https://github.com/belentani7/ctg-psicologia-next.git · **Rama:** main · **HEAD:** 82c5d86 (docs(auditoria): gobernanza GH-01..10 verificada (GH-09/GH-10 OK) + estado y pla)
- **Lenguajes:** .tsx:28,.md:7,.mjs:4,.js:4,.yml:3,.json:3 · **Commits (git real):** 18 · **Tamaño worktree:** 574.3 MB
- **Visibilidad GitHub:** public · **Homepage:** (ninguna) · **HTTP:** —
- **GitHub Pages:** no activo

## 1. Situación actual

- **Consolidación:** familia `proyecto-ctgpsicologianext` · acción survivor (estable).
- **Git:** 2 ficheros sin commitear · 5 commits sin push · 4 commits del pase de reglas (desde 2026-11-02).
- **Reglas web (gate oficial):** 0 HTML · **0 hallazgos** · 0 títulos duplicados.
- **Gobernanza GitHub (protocolo MS):** 11/11 reglas aplicadas · completo.
- **Secretos (triaje):** sin hallazgos.

## 2. Comandos para arreglar y elevar (ejecutar en este orden)

1. **Reglas web: ya cumplidas (0 hallazgos).** Barrera continua:
   ```powershell
   python C:\Users\USER\belentani-ecosystem\_meta\check_web_rules.py ctg-psicologia-next
   ```
2. **Publicar en GitHub Pages** (repo público; la cuenta free solo publica repos públicos):
   ```powershell
   gh api -X POST repos/belentani7/ctg-psicologia-next/pages -f source[branch]=main -f source[path]=/
   gh api -X POST repos/belentani7/ctg-psicologia-next/pages/builds/latest -X POST 2>$null   # o dejar que el workflow publique
   ```
3. **Limpiar 2 ficheros sin commitear** (revisar antes; si son del pase de reglas, commitear):
   ```powershell
   git -C "C:\Users\USER\belentani-ecosystem\educacion\ctg-psicologia-next" status --short
   git -C "C:\Users\USER\belentani-ecosystem\educacion\ctg-psicologia-next" add -- <solo los ficheros del pase> ; git -C "C:\Users\USER\belentani-ecosystem\educacion\ctg-psicologia-next" commit -m "fix(web-rules): ..."
   ```
4. **Subir al remoto** (requiere tu confirmación explícita; hoy ningún repo tiene push):
   ```powershell
   git -C "C:\Users\USER\belentani-ecosystem\educacion\ctg-psicologia-next" push origin main
   ```

## 3. Qué puede alcanzar este repositorio

- **Repositorio público**: puede publicar gratis en GitHub Pages (`https://belentani7.github.io/ctg-psicologia-next/`) y mantener Vercel; hoy tiene Pages desactivado
- Proyecto sin HTML: su elevación es gobernanza (README/LICENSE/CI/tests reales) y empaquetado, no publicación web.

---
*Evidencia: `_meta/consolidacion/consolidacion.db` · `_meta/specs/2026-11-01-*` · gate `check_web_rules.py` · git log. Regenerable con `python _meta/gen_auditoria_repos.py`.*
