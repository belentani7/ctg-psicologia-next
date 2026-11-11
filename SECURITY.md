# Security

## Reportar una vulnerabilidad

No abras un issue publico para reportar una vulnerabilidad. Usa el canal privado
de seguridad de GitHub en la pestana Security de este repositorio, o escribe al
contacto indicado abajo.

## Buenas practicas

- Nunca commitees claves, tokens ni ficheros `.env`.
- Usa variables de entorno y ejemplos en `.env.example`.
- Manten las dependencias actualizadas.

<!-- repo-forge:security:inicio -->
# Seguridad

## Reportar una vulnerabilidad

No abras un issue público. Usa el canal privado de GitHub Security del repositorio.
Incluye: versión o commit, pasos para reproducir, impacto y, si puedes, una corrección.

## Qué se considera vulnerabilidad

- Ejecución de código o comandos no previstos.
- Lectura o escritura de archivos fuera del alcance declarado.
- Exposición de credenciales en logs, informes o manifiestos.
- Dependencia con CVE conocido en una ruta ejecutable.

## Reglas del proyecto

- Ningún secreto se escribe en disco, en un log ni en un informe.
- Toda operación de escritura requiere `--apply` explícito.
- Las operaciones destructivas están bloqueadas por diseño.

<!-- repo-forge:security -->
<!-- repo-forge:security:fin -->
