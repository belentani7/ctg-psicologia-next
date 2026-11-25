# Tareas del proyecto. `make` sin argumentos muestra la ayuda.
.DEFAULT_GOAL := help
.PHONY: help install dev build start lint typecheck test test-python catalog a11y smoke check clean

help: ## Muestra esta ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Instala dependencias exactas del lockfile
	npm ci

dev: ## Servidor de desarrollo
	npm run dev

build: ## Build de producción + salida standalone
	npm run build

start: ## Servidor de producción
	npm start

lint: ## ESLint
	npm run lint

typecheck: ## TypeScript estricto
	npm run typecheck

test: ## Tests de Node
	npm test

test-python: ## Tests del banco de datos en Python
	python3 -m unittest discover -s tests -v

catalog: ## Regenera data/catalogo.{json,mjs,py}
	npm run catalog

a11y: ## Auditoría WCAG con axe-core (requiere build)
	npm run audit:a11y

smoke: ## Humo HTTP end-to-end (requiere build)
	npm run smoke

check: ## Lint + tipos + catálogo + tests + build
	npm run check

clean: ## Borra artefactos de build
	rm -rf .next
