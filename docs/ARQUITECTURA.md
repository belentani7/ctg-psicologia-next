

<!-- repo-forge:docs-arquitectura:inicio -->
# Arquitectura

## Tipo

aplicación web con build (Next/Vite/Expo)

## Piezas observadas

| Pieza | Evidencia |
|---|---|
| Lenguajes | JavaScript 93.9%, JSON 4.5%, TypeScript 1.1%, HTML 0.3%, Markdown 0.2%, CSS 0.1% |
| Puntos de entrada | ninguno detectado |
| Páginas HTML | 2 |
| Tests | 2 archivos |
| Dependencias de paquete | 5 |

## Capas propuestas

```text
contenido/      datos y textos versionados
plataforma/     ficha, diseño y contrato del producto
brand/          tokens, marca y activos
scripts/        verificación y operación
tests/          pruebas ejecutables
```

La propuesta no mueve archivos existentes: describe dónde debe vivir lo nuevo para que
el repositorio siga siendo legible.

## Deuda declarada

- Archivos grandes: public/tesseract/tesseract-core-simd.wasm.js, public/tesseract/tesseract-core-simd.wasm, public/tessdata/spa.traineddata.gz.
- 6 lenguajes: coste de contexto alto.

<!-- repo-forge:arquitectura -->
<!-- repo-forge:docs-arquitectura:fin -->
