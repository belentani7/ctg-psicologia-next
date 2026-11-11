# Como contribuir

1. Crea una rama con prefijo `feat/`, `fix/` o `docs/`.
2. Manten los commits pequenos y con un mensaje claro.
3. Abre un Pull Request describiendo el cambio y como se prueba.
4. Revisa que el CI pasa antes de pedir revision.

## Reportar problemas

Usa las plantillas de issue. Un reporte util incluye pasos para reproducir,
entorno y esperado frente a obtenido.

<!-- repo-forge:contributing:inicio -->
# Contribuir

## Antes de tocar nada

1. Lee `BIBLIA.md` (doctrina del repositorio) y `plataforma/FICHA.md` (alcance permitido).
2. Ejecuta `python scripts/doctor.py` y guarda la salida: es la línea base.
3. Un cambio resuelve **un solo resultado verificable**.

## Cómo enviar

```bash
git checkout -b fix/<asunto-corto>
# ... cambio mínimo ...
python scripts/doctor.py
git commit -m "fix(alcance): <qué se arregla>"
```

Convención de commit: `type(scope): resumen` con tipos `feat|fix|docs|chore|refactor|test|perf`.

## Qué no se acepta

- Cambios que rompan una regla del catálogo sin justificar la excepción.
- Archivos generados a mano que el build regenera.
- Datos personales, credenciales o capturas de clientes.
- Promesas en el README que el código no cumpla.

<!-- repo-forge:contributing -->
<!-- repo-forge:contributing:fin -->
