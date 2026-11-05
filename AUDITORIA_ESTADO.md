# AUDITORIA_ESTADO — ctg-psicologia-next

> Repositorio físico: `belentani-ecosystem/educacion/ctg-psicologia-next`

## Situación actual

| Indicador | Valor |
|-----------|-------|
| Categoría | educacion |
| Lenguaje | TypeScript |
| Rama | main |
| package.json | Sí |
| Python | No |
| Docker | No |
| README | Sí |
| AGENTS.md | No |
| Tests | No |
| CI | No |

## Comentarios

- Repo activo del ecosistema, clonado en `educacion/`.
- Falta AGENTS.md, CI y tests.

## Comando para arreglar y elevar

```bash
npm install
npm run dev
npm run build
npm run test  # crear si no existe
# Crear AGENTS.md con reglas del ecosistema belentani7
# Crear .github/workflows/ci.yml
gitleaks detect --source .
