# cTg Psicología — web del centro

Web oficial del centro de psicología **cTg Psicología (Teràpia Global)** de L'Hospitalet de Llobregat (Barcelona). Construida con Next.js 15 (App Router), React 19 y Tailwind CSS, en tres idiomas (español, catalán e inglés) e incluye una herramienta OCR que extrae texto de imágenes y PDFs directamente en el navegador.

## Qué hace

- **```

## Scripts

| Script | Qué hace |
| :--- | :--- |
| `dev` | Inicia el servidor de desarrollo de Next.js. |
| `build` | Compila la aplicación para producción en Next.js y copia los archivos estáticos y públicos necesarios en la carpeta standalone. |
| `start` | Inicia el servidor de producción de Node.js a partir de los archivos compilados en standalone. |
| `lint` | Ejecuta ESLint en todo el repositorio para comprobar errores de estilo y calidad de código. |
| `typecheck` | Realiza la comprobación de tipos de TypeScript sin emitir archivos y desactivando la compilación incremental (`--noEmit --incremental false`). |
| `test` | Ejecuta las pruebas del proyecto utilizando el test runner nativo de Node.js sobre la carpeta `test/`. |

## Que es

Web trilingüe (es/ca/en) del centro cTg Psicología de L'Hospitalet: Next.js 15 + React 19, catálogo de terapias, equipo y OCR en el navegador

## Como se ejecuta

```bash
npm install
npm run dev
```

Scripts declarados: `build`, `dev`, `lint`, `start`, `test`, `typecheck`.

## Verificacion

```bash
node --test tests/
```

El test de humo comprueba que el arbol esperado existe y que el HTML o el paquete no esta roto.

## Estructura

```
404.html
AGENTS.md
AUDITORIA-ESTADO-Y-PLAN.md
AUDITORIA_ESTADO.md
BIBLIA.md
CAMBIOS.md
CHANGELOG.md
CODE_OF_CONDUCT.md
CONTRIBUTING.md
LICENSE
LICENSES.md
Makefile
```

## Entorno

- Node.js 20+ o Python 3.11+ segun el stack detectado.
- Windows 10/11, PowerShell 5.1 o bash.

## Licencia

MIT. Ver `LICENSE`.
