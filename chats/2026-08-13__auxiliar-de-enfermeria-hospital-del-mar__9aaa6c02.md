# Auxiliar de Enfermería Hospital del Mar

- Chat ID: `9aaa6c02-9bda-45ec-ab7c-438a19402980`
- Mensajes: 4
- Periodo: 2026-08-13 21:00 UTC → 2026-08-13 21:05 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-13 21:00

Como seria un programa de una auxiliar de enfermeria que trabajara en hospital del mar crea el prompt de la herramienta de organizacion nombre inspirado alejandra

## [ASSISTANT] 2026-08-13 21:00 · Qwen3.8-Max

## Propuesta: programa y prompt para una herramienta de organización llamada **“Alejandra CuidaMar”**

A continuación tienes una propuesta completa para una herramienta de organización pensada para una **auxiliar de enfermería / TCAE** que trabaja en un hospital, en este caso con referencia al **Hospital del Mar**. La herramienta se llama **“Alejandra CuidaMar”**, nombre inspirado en *Alejandra* y en el entorno “Mar”.

Incluyo:

1. Nombre y concepto.  
2. Estructura del programa organizativo.  
3. Prompt maestro listo para usar.  
4. Plantilla de entrada.  
5. Ejemplo de salida esperada.  
6. Reglas de seguridad, privacidad y competencias.  
7. Variantes de nombre por si quieres alternativas.

---

# 1. Nombre de la herramienta

## Nombre principal

**Alejandra CuidaMar**

## Subtítulo funcional

**Asistente de organización para auxiliares de enfermería en turno hospitalario**

## Lema

**“Organiza el turno, cuida el detalle, protege al paciente y al equipo.”**

## Significado del nombre

- **Alejandra**: nombre humano, cercano, profesional y memorable.  
- **Cuida**: hace referencia a cuidados, asistencia, acompañamiento y apoyo.  
- **Mar**: conecta con el Hospital del Mar y transmite calma, orden y fluidez.  

---

# 2. Objetivo del programa

**Alejandra CuidaMar** debe ayudar a una auxiliar de enfermería a organizar su turno de trabajo de forma segura, priorizada y realista, teniendo en cuenta:

- La asignación de pacientes o habitaciones.
- Las tareas asistenciales básicas.
- Las prioridades del turno.
- La comunicación con enfermería.
- El material necesario.
- Los descansos.
- Los avisos importantes.
- el registro de incidencias.
- la seguridad del paciente.
- la protección de datos.

La herramienta **no sustituye** el criterio clínico, ni los protocolos del hospital, ni las indicaciones del equipo de enfermería o médico. Su función es **organizar, priorizar y recordar tareas**.

---

# 3. Programa funcional de “Alejandra CuidaMar”

## Módulo 1: Datos del turno

La herramienta recibe información como:

- Fecha.
- Turno: mañana, tarde, noche o jornada especial.
- Horario.
- Unidad o servicio.
- Número de pacientes asignados.
- Identificación segura de pacientes: habitación/cama, sin nombre completo si no es necesario.
- Nivel de dependencia de cada paciente.
- Riesgos relevantes: caídas, aislamiento, deterioro cognitivo, necesidad de movilización asistida, etc.
- Personal disponible.
- Avisos pendientes.
- Tareas especiales.

---

## Módulo 2: Priorización inteligente

La herramienta clasifica las tareas en:

### Prioridad P1: urgente / crítica

Ejemplos:

- Aviso inmediato a enfermería ante cambio clínico.
- Paciente con riesgo de caída que necesita vigilancia.
- Paciente que requiere ayuda inmediata para ir al baño.
- Aislamiento que requiere EPI específico.
- Derrame, cama mojada, riesgo de infección o seguridad.
- Paciente desorientado que requiere acompañamiento o supervisión.

### Prioridad P2: importante

Ejemplos:

- Higiene corporal.
- Cambio de cama.
- Ayuda al desayuno/comida/cena.
- Movilización programada.
- Reposición de material.
- Acompañamiento a prueba diagnóstica si está indicado.

### Prioridad P3: rutinaria o flexible

Ejemplos:

- Revisión de material.
- Orden de sala.
- Actualización de registros.
- Preparación de ropa o productos de higiene.
- Tareas que pueden moverse si aparece una urgencia.

---

## Módulo 3: Cronograma por franjas

La herramienta organiza el turno por bloques horarios, por ejemplo:

- Inicio del turno.
- Relevo / información de enfermería.
- Primera ronda.
- Higiene y confort.
- Alimentación.
- Movilización.
- Reposición de material.
- Comunicación de incidencias.
- Descanso.
- Segunda ronda.
- Registro.
- Preparación del relevo.

---

## Módulo 4: Registro y comunicación

Alejandra CuidaMar debe generar:

- Lista de tareas completadas.
- Tareas pendientes.
- Avisos para enfermería.
- Observaciones relevantes.
- Necesidades de material.
- Incidencias detectadas.
- Información para el relevo.

Importante: la herramienta debe usar un lenguaje claro, pero **no debe registrar datos sensibles innecesarios** si se usa fuera del sistema oficial del hospital.

---

## Módulo 5: Seguridad del paciente

La herramienta debe incluir recordatorios de seguridad:

- Higiene de manos antes y después del contacto con el paciente.
- Uso de EPI si hay aislamiento.
- Confirmación de identidad del paciente según protocolo.
- Prevención de caídas.
- Movilización segura.
- Comunicación inmediata de cambios clínicos.
- No realizar tareas fuera de las competencias de la auxiliar.
- Avisar a enfermería ante dudas, dolor, deterioro, sangrado, dificultad respiratoria, caída, confusión aguda u otros signos relevantes.

---

## Módulo 6: Protección de datos

La herramienta debe funcionar con identificación segura y mínima:

- Usar preferiblemente: **habitación + cama** o código interno autorizado.
- Evitar nombres completos si no es estrictamente necesario.
- No incluir diagnósticos sensibles si no aportan a la organización.
- No compartir información fuera de los canales profesionales.
- Cumplir con la normativa de protección de datos y con las políticas internas del hospital.

---

# 4. Prompt maestro para la herramienta

Este es el prompt que puedes usar como base para crear la herramienta. Puedes pegarlo en un chatbot, app interna, automatización o asistente de IA.

---

## Prompt completo

```text
Actúa como “Alejandra CuidaMar”, una herramienta profesional de organización para una auxiliar de enfermería / Técnico/a en Cuidados Auxiliares de Enfermería que trabaja en un hospital, concretamente en el entorno del Hospital del Mar.

Tu objetivo es ayudar a planificar el turno de forma segura, realista, priorizada y eficiente. No eres personal sanitario, no haces diagnósticos, no indicas tratamientos, no administras medicación y no sustituyes los protocolos del hospital ni las decisiones del equipo de enfermería o médico.

Debes generar un plan de organización del turno a partir de los datos proporcionados. Si faltan datos esenciales, haz preguntas breves antes de continuar o marca claramente qué información falta.

### Contexto profesional
La usuaria es auxiliar de enfermería. Sus funciones habituales pueden incluir, según protocolo y supervisión del equipo de enfermería:
- Higiene y confort del paciente.
- Ayuda en la alimentación.
- Movilización y cambios posturales.
- Cambio de cama y mantenimiento del orden.
- Acompañamiento y vigilancia.
- Recogida de datos básicos o constantes si está indicado.
- Apoyo en eliminación y confort.
- Reposición de material.
- Comunicación de observaciones relevantes a enfermería.
- Registro de cuidados según normativa interna.

No planifiques tareas invasivas, administración de medicación, valoración clínica avanzada ni actuaciones fuera de la competencia de la auxiliar. Si una tarea requiere valoración de enfermería, márcala como “Avisar/validar con enfermería”.

### Datos de entrada
Recibirás información como:
- Fecha.
- Turno.
- Horario.
- Unidad o servicio.
- Número de pacientes asignados.
- Identificación segura: habitación/cama o código interno.
- Nivel de dependencia.
- Riesgos: caídas, aislamiento, desorientación, necesidad de movilización asistida, etc.
- Tareas pendientes.
- Personal disponible.
- Avisos importantes.
- Restricciones o prioridades especiales.

### Reglas obligatorias
1. Prioriza siempre la seguridad del paciente.
2. Protege la privacidad: usa habitación/cama o código, no nombres completos salvo que sea imprescindible y esté permitido.
3. No inventes datos clínicos.
4. Si hay riesgo inminente, indica “avisar inmediatamente a enfermería”.
5. Si hay aislamiento, recuerda EPI y precauciones según protocolo.
6. Si un paciente presenta cambio agudo, dolor intenso, dificultad respiratoria, caída, sangrado, alteración de conciencia u otra señal grave, indica que se avise de inmediato al equipo responsable.
7. Si una tarea no corresponde a la auxiliar, márcala como “no planificar; derivar/consultar”.
8. Incluye descansos siempre que el turno lo permita.
9. Mantén un tono profesional, humano y claro.
10. Adapta el plan a la carga real de trabajo; no propongas un cronograma imposible.

### Formato de salida
Devuelve la respuesta con esta estructura:

1. Resumen del turno
   - Breve descripción de la jornada.
   - Nivel de carga esperado.
   - Prioridad general.

2. Prioridades principales
   - Lista de tareas P1, P2 y P3.
   - Cada tarea debe incluir: categoría, acción, paciente/habitación/cama, motivo y momento recomendado.

3. Cronograma orientativo
   - Organizado por franjas horarias.
   - Debe incluir tareas, duración estimada y dependencias.
   - Si hay tareas que dependen de enfermería, indícalo.

4. Rondas de vigilancia
   - Frecuencia recomendada.
   - Qué observar de forma general.
   - Qué situaciones requieren aviso inmediato.

5. Material necesario
   - Ropa, productos de higiene, guantes, EPI, material de cama, cuñas, dispositivos de movilización u otros según datos.

6. Avisos para enfermería
   - Situaciones que requieren validación, revisión o comunicación.

7. Descansos y autocuidado
   - Propuesta de descanso si es viable.
   - Recordatorio de hidratación y pausas breves si la carga lo permite.

8. Registro para relevo
   - Tareas completadas.
   - Tareas pendientes.
   - Incidencias.
   - Observaciones relevantes.

9. Preguntas faltantes
   - Si falta información, enumera qué datos se necesitan.

### Estilo
- Usa lenguaje claro, profesional y empático.
- Sé conciso pero completo.
- No uses rellenos.
- Usa listas y tablas si ayudan a entender mejor.
- Si hay incertidumbre, indica qué falta confirmar.

### Datos del turno
Fecha: {{fecha}}
Turno: {{turno}}
Horario: {{horario}}
Unidad: {{unidad}}
Número de pacientes asignados: {{numero_pacientes}}
Lista de pacientes: {{lista_pacientes_segura}}
Niveles de dependencia: {{dependencias}}
Riesgos o avisos: {{riesgos_avisos}}
Tareas pendientes: {{tareas_pendientes}}
Personal disponible: {{personal_disponible}}
Restricciones o prioridades: {{restricciones}}
```

---

# 5. Plantilla de entrada para usar con el prompt

Puedes rellenar esta plantilla cada vez que quieras generar un plan.

```text
Fecha: 12/06/2026
Turno: Mañana
Horario: 07:00-14:00
Unidad: Medicina Interna
Número de pacientes asignados: 8
Lista de pacientes segura:
- Habitación 301, cama A: paciente encamado, dependencia total.
- Habitación 301, cama B: paciente autónomo, ayuda para desayuno.
- Habitación 302, cama A: aislamiento de contacto, requiere EPI.
- Habitación 302, cama B: riesgo de caídas, necesita supervisión para levantarse.
- Habitación 303, cama A: ayuda para aseo y movilización.
- Habitación 303, cama B: pendiente de cambio de cama.
- Habitación 304, cama A: paciente desorientado, vigilar.
- Habitación 304, cama B: autónomo, desayuno supervisado.

Niveles de dependencia:
- 2 dependencia total.
- 3 dependencia parcial.
- 3 autónomos con supervisión.

Riesgos o avisos:
- Habitación 302 cama A: aislamiento de contacto.
- Habitación 302 cama B: riesgo de caídas.
- Habitación 304 cama A: desorientación.
- Habitación 301 cama A: cambio postural según pauta.

Tareas pendientes:
- Ayuda en desayuno.
- Higiene de 2 pacientes.
- Cambio de cama en habitación 303 cama B.
- Reposición de guantes y empapadores.
- Acompañamiento a baño de habitación 303 cama A.
- Comunicación a enfermería si aparece alguna incidencia.

Personal disponible:
- 1 auxiliar de enfermería.
- 1 enfermera referente.
- Posible apoyo puntual de otra auxiliar.

Restricciones o prioridades:
- Priorizar pacientes con riesgo de caídas.
- Respetar aislamiento de contacto.
- No realizar tareas sin validar si hay duda clínica.
```

---

# 6. Ejemplo de salida esperada

No es obligatorio, pero ayuda a visualizar cómo respondería la herramienta.

```text
1. Resumen del turno
Turno de mañana con carga media-alta. Hay 8 pacientes asignados, con 2 pacientes de dependencia total, 1 aislamiento de contacto, 1 riesgo de caídas y 1 paciente desorientado. Se recomienda priorizar seguridad, vigilancia y tareas de higiene más urgentes.

2. Prioridades principales

P1:
- Habitación 302 cama B: riesgo de caídas. Mantener supervisión al levantarse y avisar si intenta deambular solo.
- Habitación 304 cama A: paciente desorientado. Vigilar y comunicar cualquier cambio a enfermería.
- Habitación 302 cama A: aislamiento de contacto. Preparar EPI antes de entrar.

P2:
- Habitación 301 cama A: higiene y cambio postural según pauta.
- Habitación 303 cama A: ayuda para aseo y acompañamiento a baño.
- Habitación 303 cama B: cambio de cama.
- Apoyo en desayuno de pacientes que lo requieran.

P3:
- Reposición de guantes y empapadores.
- Orden de material.
- Actualización de registro.

3. Cronograma orientativo

07:00-07:20
- Revisión de asignación, avisos y prioridades.
- Preparación de material básico.

07:20-08:00
- Primera ronda de seguridad.
- Verificar pacientes de riesgo: caídas, desorientación y aislamiento.
- Avisar a enfermería si hay cambios relevantes.

08:00-09:30
- Apoyo en desayuno.
- Vigilancia de pacientes con riesgo durante la ingesta.
- Registrar incidencias si procede.

09:30-11:00
- Higiene de pacientes priorizados.
- Cambio de cama en habitación 303 cama B si el estado del servicio lo permite.
- Revisión de confort y orden.

11:00-11:30
- Reposición de material.
- Comunicación breve con enfermería sobre avisos pendientes.

11:30-13:00
- Segunda ronda.
- Movilización o cambios posturales según pauta.
- Acompañamiento a baño si es necesario.
- Vigilancia de paciente desorientado.

13:00-13:45
- Cierre de tareas.
- Registro.
- Preparación del relevo.

13:45-14:00
- Relevo informativo.
- Pendientes claros para el siguiente turno.

4. Rondas de vigilancia
- Realizar ronda al inicio, tras desayuno, a media mañana y antes del relevo.
- Observar: seguridad del entorno, cama seca, barandillas según protocolo, accesibilidad de timbre, presencia de EPI, confort y signos de alarma.
- Avisar inmediatamente a enfermería si hay caída, dolor agudo, dificultad respiratoria, sangrado, deterioro del estado de conciencia o cambio relevante.

5. Material necesario
- Guantes.
- EPI para aislamiento de contacto.
- Empapadores.
- Ropa de cama.
- Pijamas o batas si se requieren.
- Material de higiene.
- Ayudas técnicas para movilización si están indicadas.

6. Avisos para enfermería
- Confirmar pauta de cambios posturales de habitación 301 cama A.
- Informar de cualquier cambio en paciente desorientado.
- Consultar antes de movilizar si hay duda clínica.
- Comunicar incidencias durante desayuno o aseo.

7. Descansos y autocuidado
- Si la carga lo permite, valorar pausa breve de 10-15 minutos coordinada con otra profesional.
- Mantener hidratación.
- Pedir ayuda para movilizaciones si hay riesgo.

8. Registro para relevo
Completado:
- Primera ronda.
- Apoyo en desayuno.
- Higiene de pacientes prioritarios.
- Reposición parcial de material.

Pendiente:
- Cambio de cama en habitación 303 cama B si no se completó.
- Vigilancia reforzada de habitación 304 cama A.
- Confirmación de cambios posturales con enfermería.

Incidencias:
- Ninguna registrada en este ejemplo, salvo las que se detecten durante el turno.

9. Preguntas faltantes
- ¿Hay otra auxiliar para apoyo en movilización?
- ¿La habitación 304 cama A tiene vigilancia especial o acompañante?
- ¿Hay alguna pauta específica de alimentación o movilización pendiente?
```

---

# 7. Versión corta del prompt

Si necesitas una versión más breve para una app o chat rápido, puedes usar esta:

```text
Actúa como “Alejandra CuidaMar”, una herramienta de organización para una auxiliar de enfermería en turno hospitalario. Con los datos que te dé, crea un plan de turno priorizado, seguro y realista. No inventes datos clínicos, no indiques tratamientos y no planifiques tareas fuera de la competencia de auxiliar. Usa habitación/cama en lugar de nombres completos. Prioriza seguridad, prevención de caídas, aislamientos, higiene, alimentación, movilización, comunicación con enfermería y descanso si es posible. Devuelve: resumen, prioridades, cronograma, material, avisos para enfermería, registro para relevo y preguntas faltantes.

Datos:
Fecha: {{fecha}}
Turno: {{turno}}
Unidad: {{unidad}}
Pacientes: {{numero_pacientes}}
Habitaciones/camas y necesidades: {{lista_segura}}
Tareas pendientes: {{tareas}}
Personal disponible: {{personal}}
Riesgos/avisos: {{riesgos}}
```

---

# 8. Requisitos importantes para que la herramienta sea segura

## Competencias profesionales

La herramienta debe respetar el rol de auxiliar de enfermería. Puede ayudar a organizar tareas como:

- Higiene.
- Confort.
- Alimentación.
- Movilización básica.
- Acompañamiento.
- Vigilancia.
- Comunicación de observaciones.
- Apoyo material.
- Registro básico según protocolo.

No debe planificar ni sugerir:

- Administración de medicación.
- Técnicas invasivas.
- Valoración clínica autónoma.
- Toma de decisiones médicas.
- Actuaciones fuera de la competencia profesional.
- Modificación de tratamientos.
- Retirada de dispositivos sin indicación autorizada.

---

## Privacidad

Para cumplir con protección de datos:

- Usar **habitación/cama** o código interno.
- No escribir nombres completos si no es imprescindible.
- No incluir datos sensibles fuera del sistema autorizado.
- No usar herramientas externas no autorizadas para datos reales de pacientes si el hospital no lo permite.
- Si se usa en un sistema interno, debe cumplir con las políticas de seguridad informática del hospital.

---

## Validación institucional

Si quieres que la herramienta sea realmente implantable en un hospital, debería validarse con:

- Protocolos internos del centro.
- Guía de competencias de TCAE/auxiliar de enfermería.
- Política de protección de datos.
- Normativa de seguridad del paciente.
- Protocolos de higiene de manos.
- Protocolos de aislamientos.
- Protocolos de prevención de caídas.
- Sistema de registro clínico autorizado.
- Procedimientos de relevo de turno.

---

# 9. Posibles módulos avanzados

Si quieres convertir la herramienta en algo más completo, se pueden añadir estas funciones:

## Módulo de turnos

- Visualización de turnos semanales.
- Registro de entrada y salida.
- Control de descansos.
- Alertas de exceso de carga.

## Módulo de pacientes

- Lista segura por habitación/cama.
- Nivel de dependencia.
- Riesgos.
- Tareas asignadas.
- Observaciones para relevo.

## Módulo de tareas

- Tareas pendientes.
- Tareas completadas.
- Tareas bloqueadas.
- Tareas dependientes de enfermería.
- Tareas urgentes.

## Módulo de material

- Stock de guantes.
- Empapadores.
- Gasas.
- Ropa de cama.
- Jabón.
- EPI.
- Alertas de reposición.

## Módulo de comunicación

- Avisos pendientes para enfermería.
- Avisos cerrados.
- Registro de incidencias.
- Mensajes para relevo.

## Módulo de seguridad

- Checklist de prevención de caídas.
- Checklist de aislamiento.
- Checklist de higiene de manos.
- Checklist de movilidad segura.
- Checklist de entorno seguro.

---

# 10. Nombres alternativos inspirados en Alejandra

Si quieres otras opciones, aquí tienes algunas:

1. **Alejandra CuidaMar**  
   Nombre principal recomendado.

2. **AleMar Asistente**  
   Breve, profesional y fácil de recordar.

3. **TCAE Alejandra**  
   Más funcional, orientado al perfil profesional.

4. **Alejandra Turnos**  
   Directo si la herramienta se centra en organización de turnos.

5. **Alejandra HospitalCare**  
   Más genérico, útil si luego se usa en varios hospitales.

6. **MarSalud by Alejandra**  
   Nombre con tono humano y sanitario.

7. **Alejandra CareFlow**  
   Ideal si quieres una imagen más tecnológica.

8. **Ruta Alejandra**  
   Bueno si la herramienta organiza rondas y recorridos de tareas.

9. **Alejandra Asiste**  
   Sencillo, claro y cercano.

10. **CuidarMar Alejandra**  
   Combina cuidado, entorno mar y nombre personal.

---

# 11. Prompt para crear el logo o identidad visual

Si además quieres generar una imagen de marca, puedes usar este prompt:

```text
Crea un concepto visual para una aplicación llamada “Alejandra CuidaMar”, una herramienta de organización para auxiliares de enfermería en hospitales. El diseño debe transmitir cuidado, orden, profesionalidad, calma y seguridad. Usa una paleta inspirada en el mar: azul claro, turquesa suave, blanco y arena. Incluye un símbolo que combine una ola suave, una cruz sanitaria discreta y una agenda o checklist. Estilo limpio, moderno, humano y sanitario. No debe parecer infantil ni excesivamente tecnológico. Debe funcionar como icono de app, tarjeta identificativa y pantalla de inicio.
```

---

# 12. Prompt para versión app móvil

Si la herramienta se convierte en aplicación, puedes usar este prompt para definir su comportamiento:

```text
Diseña una app llamada “Alejandra CuidaMar” para organizar el turno de una auxiliar de enfermería en un hospital. La app debe permitir introducir turno, unidad, pacientes por habitación/cama, nivel de dependencia, riesgos, tareas pendientes y personal disponible. Debe generar un plan priorizado con cronograma, lista de material, avisos para enfermería, tareas completadas, pendientes y resumen para relevo. La app debe incluir recordatorios de seguridad: higiene de manos, EPI, prevención de caídas, movilización segura y comunicación inmediata de cambios clínicos. No debe permitir registrar diagnósticos sensibles innecesarios ni usar nombres completos si no es imprescindible. Debe tener modo claro, modo oscuro, botones grandes, acceso rápido a tareas urgentes y compatibilidad con tablets móviles.
```

---

# 13. Ejemplo de pantalla principal

La herramienta podría mostrar algo así:

```text
Alejandra CuidaMar
Turno: Mañana | Unidad: Medicina Interna | 07:00-14:00

P1 Urgente:
- Habitación 302 cama B: riesgo de caídas. Supervisar movilización.
- Habitación 304 cama A: paciente desorientado. Vigilar y comunicar cambios.

P2 Importante:
- Habitación 301 cama A: higiene y cambio postural.
- Habitación 303 cama A: ayuda para aseo y baño.
- Habitación 303 cama B: cambio de cama.

P3 Flexible:
- Reposición de guantes y empapadores.
- Actualizar registro.

Material:
- Guantes, EPI aislamiento contacto, empapadores, ropa de cama, material de higiene.

Avisos enfermería:
- Confirmar pauta de cambios posturales.
- Comunicar cualquier cambio en paciente desorientado.

Descanso:
- Valorar pausa breve si hay apoyo disponible.
```

---

# 14. Recomendación final de implementación

Para que **Alejandra CuidaMar** sea útil y segura, debería cumplir estas condiciones:

1. **No debe usarse con datos reales de pacientes en herramientas públicas no autorizadas.**  
   Si se usan datos de pacientes, debe ser dentro de un sistema autorizado por el hospital.

2. **Debe adaptarse a los protocolos del Hospital del Mar.**  
   Cada hospital puede tener circuitos, registros y competencias específicas.

3. **Debe mantener un lenguaje profesional.**  
   Nada de términos ambiguos o infantilizados.

4. **Debe priorizar seguridad.**  
   La organización no puede estar por encima de la seguridad del paciente.

5. **Debe facilitar el relevo.**  
   El objetivo es que la auxiliar termine el turno dejando información clara, ordenada y útil.

6. **Debe respetar las competencias.**  
   La herramienta organiza, no diagnostica ni trata.

7. **Debe ser editable.**  
   La usuaria debería poder modificar prioridades, horarios y tareas.

---

## Versión final recomendada del prompt

Si quieres solo el prompt definitivo para copiar y pegar, usa este:

```text
Actúa como “Alejandra CuidaMar”, una herramienta profesional de organización para una auxiliar de enfermería / Técnico/a en Cuidados Auxiliares de Enfermería que trabaja en el entorno del Hospital del Mar.

Tu función es ayudar a planificar el turno de forma segura, realista y priorizada. No eres personal sanitario, no diagnosticas, no indicas tratamientos, no administras medicación y no sustituyes protocolos hospitalarios ni decisiones del equipo de enfermería o médico.

Con los datos que te proporcione, genera:
1. Resumen del turno.
2. Prioridades P1, P2 y P3.
3. Cronograma orientativo.
4. Rondas de vigilancia.
5. Material necesario.
6. Avisos para enfermería.
7. Descanso o autocuidado si es viable.
8. Registro para relevo.
9. Preguntas si falta información.

Reglas obligatorias:
- Usa habitación/cama o código interno, no nombres completos salvo necesidad justificada.
- No inventes datos clínicos.
- Prioriza seguridad del paciente.
- Si hay riesgo de caída, aislamiento, desorientación o cambio clínico, indícalo con claridad.
- Si hay una situación grave, indica avisar inmediatamente a enfermería o al equipo responsable.
- No planifiques tareas fuera de la competencia de auxiliar.
- Incluye recordatorios de higiene de manos, EPI si procede y movilización segura.
- Mantén un tono profesional, humano y claro.

Datos del turno:
Fecha: {{fecha}}
Turno: {{turno}}
Horario: {{horario}}
Unidad: {{unidad}}
Número de pacientes: {{numero_pacientes}}
Pacientes y necesidades: {{lista_segura}}
Tareas pendientes: {{tareas_pendientes}}
Personal disponible: {{personal_disponible}}
Riesgos o avisos: {{riesgos_avisos}}
Restricciones: {{restricciones}}
```

## [USER] 2026-08-13 21:05

Amplia al maximo. Piensa en full stack todas las variables del entorno como actua y como trabajadora sus dudas nominas bacaciones dias libres horarios pacientes evolucion cambios de dias , entender nomina, entender declaracion, cuanto cobra por x dia en x horas comvenio todas las variantes. Que pueda invitar a sus amigas y generar perfiles de organizacion
 Estaria bien si no violasemos leyes proteccion de datos de usuarios si por ejemplo subimos en vercel, git, netlify

## [ASSISTANT] 2026-08-13 21:05 · Qwen3.8-Max

# Ampliación máxima: **Alejandra CuidaMar Pro**  
## Plataforma full-stack para una auxiliar de enfermería, con organización laboral, turnos, pacientes pseudonomizados, nóminas, vacaciones, declaración, invitaciones y cumplimiento de protección de datos

> **Importante:** esto es una propuesta técnica, organizativa y de diseño. No es asesoramiento legal, laboral o fiscal definitivo. Para implantarlo en un entorno real, especialmente si hay datos de pacientes, nóminas, salud o empleo, debe validarse con el **Delegado de Protección de Datos (DPO)**, el departamento de RRHH, prevención de riesgos, asesoría laboral/fiscal y, si procede, el comité de empresa o dirección del centro.

---

# 1. Idea central

**Alejandra CuidaMar Pro** sería una plataforma personal y profesional para una auxiliar de enfermería / TCAE que trabaja en un hospital, por ejemplo en el entorno del **Hospital del Mar**.

La herramienta tendría dos grandes capas:

## Capa 1: Organización profesional segura

Para uso individual o de equipo dentro del hospital:

- Turnos.
- Pacientes asignados mediante código seguro: habitación/cama, no nombre completo.
- Tareas de cuidados auxiliares.
- Prioridades del turno.
- Avisos a enfermería.
- Material.
- Registro de relevo.
- Incidencias no clínicas o de organización.
- Descansos.
- Cambios de turno.
- Vacaciones y libranzas.

## Capa 2: Vida laboral personal

Para la trabajadora como persona:

- Entender nóminas.
- Calcular cuánto cobra por día, hora, festivo, nocturnidad, guardia o cambio de turno.
- Consultar vacaciones.
- Consultar días libres.
- Preparar resumen para la declaración de la renta.
- Resolver dudas laborales básicas según convenio.
- Invitar a amigas o compañeras a perfiles de organización personal, sin acceso a datos sensibles.

---

# 2. Cómo hacerlo sin violar protección de datos si se sube a Vercel, GitHub o Netlify

Sí se puede publicar código, demo o frontend en **Vercel**, **GitHub** o **Netlify**, pero con reglas muy claras.

## Regla de oro

**No subir datos reales de pacientes, trabajadoras, nóminas, horarios reales, correos personales, teléfonos, diagnósticos, tratamientos, datos de salud, documentos laborales ni secretos técnicos.**

---

## Matriz rápida de riesgo

| Escenario | Riesgo | Recomendación |
|---|---:|---|
| Repositorio público con solo código | Bajo | Correcto si no incluye datos personales ni secretos |
| Repositorio público con datos de ejemplo reales | Alto | Prohibido; usar datos sintéticos |
| Repositorio privado con código y secretos en `.env` | Alto | Nunca commitear `.env`; usar gestor de secretos |
| Vercel con demo pública sin registro | Bajo | Correcto si usa datos ficticios |
| Vercel con registro de usuarias reales | Medio | Requiere privacidad, DPA, política, minimización |
| Netlify con formulario que recoge datos reales | Medio/alto | Revisar logs, almacenamiento y finalidad |
| App en producción con datos de pacientes | Muy alto | Solo con base legal, DPO, DPIA, cifrado, UE, auditoría y controles |
| App con nóminas reales en cloud sin garantías | Muy alto | Cifrado, acceso restringido, UE, DPA, auditoría |
| Subir PDF de nómina real a IA pública | Muy alto | Evitar; usar OCR local o servicio con DPA y redacción |

---

## Qué sí se puede subir a GitHub

Sí:

- Código fuente.
- Documentación.
- Diseño.
- Tests.
- Datos de ejemplo sintéticos.
- Plantillas de prompts.
- Esquemas de base de datos vacíos.
- Configuraciones de ejemplo sin secretos.

No:

- `.env`
- claves API
- certificados
- tokens
- backups de base de datos
- PDF de nóminas
- capturas con datos reales
- nombres de pacientes
- habitaciones reales si permiten identificar a una persona en contexto clínico
- horarios reales de personas identificadas
- correos personales
- teléfonos
- diagnósticos
- evoluciones clínicas
- datos de sindicatos, salud, bajas, salarios reales no anonimizados

---

## `.gitignore` recomendado

```gitignore
# Secrets
.env
.env.*
*.pem
*.key
*.crt
*.p12
secrets/
config/local/

# Databases
*.sqlite
*.db
backups/
db/dumps/

# Real data
data/real/
documents/payslips/
documents/patients/
seed-real.ts
prisma/seed-real.ts

# Logs
logs/
*.log
```

---

## Para Vercel o Netlify

### Recomendaciones

1. **Modo demo por defecto**  
   La demo pública debe usar datos sintéticos generados automáticamente.

2. **Desactivar registro público**  
   Si no hay infraestructura legal suficiente, no permitir crear cuentas reales.

3. **No loggear cuerpos de petición sensibles**  
   Nada de logs con payloads que contengan datos personales o de salud.

4. **Configurar región UE si el proveedor lo permite**  
   Si se almacenan datos personales, priorizar residencia de datos en la UE.

5. **Firmar DPA con el proveedor**  
   DPA = Data Processing Agreement / acuerdo de encargado de tratamiento.

6. **Minimizar datos**  
   Si solo necesitas email para login, no pidas teléfono, nombre completo o DNI.

7. **Privacidad por defecto**  
   - Pacientes por código.
   - Sin textos libres clínicos.
   - Sin diagnóstico.
   - Sin evolución médica.
   - Sin datos de salud de la trabajadora salvo obligación legal y control médico.

8. **Si hay pacientes reales, no usar Vercel/Netlify como solución improvisada**  
   Se necesitaría una arquitectura sanitaria seria: hosting sanitario, cifrado, auditoría, DPO, DPIA, control de accesos, registro de accesos, conservación, etc.

---

# 3. Arquitectura full-stack recomendada

## Nombre

**Alejandra CuidaMar Pro**

## Módulos principales

1. **Auth y usuarias**
2. **Perfiles y roles**
3. **Calendario laboral**
4. **Turnos y cambios de día**
5. **Vacaciones y libranzas**
6. **Pacientes / asignaciones pseudonomizadas**
7. **Tareas de cuidados auxiliares**
8. **Material y reposición**
9. **Nómina y salario**
10. **Convenio colectivo**
11. **Resumen fiscal / declaración**
12. **Invitaciones y perfiles compartidos**
13. **Asistente IA Alejandra**
14. **Auditoría y privacidad**
15. **Notificaciones**
16. **Exportación de datos**
17. **Modo demo / datos sintéticos**

---

## Stack sugerido

### Frontend

- **Next.js** con App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **TanStack Query**
- **React Hook Form**
- **Zod**
- **date-fns** o **luxon**
- **Recharts** para nóminas y estadísticas
- **PWA** para móvil

### Backend

- API routes de Next.js o NestJS separado
- **Zod** para validación
- **Prisma** o **Drizzle ORM**
- **PostgreSQL**
- **Redis** para colas y cache
- **BullMQ** para tareas asíncronas
- **JWT** o sesiones seguras
- **RBAC** para roles y permisos

### Autenticación

Opciones:

- **Auth.js / NextAuth**
- **Clerk** si quieres rapidez
- **Keycloak** si quieres autoalojamiento
- **Supabase Auth** si usas Supabase UE

Recomendación para datos sensibles:

- MFA/2FA
- SSO institucional si existe
- bloqueo por intentos
- sesiones cortas
- refresh seguro
- auditoría de accesos

### Base de datos

- PostgreSQL gestionado en región UE
- cifrado en reposo
- backups cifrados
- point-in-time recovery
- réplica si hace falta

### Almacenamiento

- S3 compatible en UE
- buckets privados
- URLs firmadas temporales
- cifrado server-side
- antivirus para documentos si se suben nóminas

### IA

- RAG con documentos oficiales: convenio, políticas, guías internas
- vector database privada
- modelo configurable
- modo “sin IA” si no hay garantías
- redacción automática de datos sensibles antes de enviar a IA

### Observabilidad

- logs sin datos personales
- Sentry con scrubbing
- métricas sin identificar usuarias
- alertas de seguridad
- trazabilidad de cambios

---

# 4. Modos de privacidad

Esto es clave para no incumplir protección de datos.

## Modo A: Demo pública

Objetivo: enseñar la app sin riesgo.

Características:

- Sin registro real.
- Datos sintéticos.
- Pacientes ficticios con habitaciones inventadas.
- Nóminas ficticias.
- Turnos ficticios.
- Sin subida de documentos.
- Sin IA entrenada con datos reales.
- Mensaje visible: “Entorno de demostración. No introduzcas datos reales.”

Ideal para Vercel, Netlify, GitHub Pages o portfolio.

---

## Modo B: Organización personal

Objetivo: que Alejandra organice su vida laboral sin tocar datos de pacientes.

Incluye:

- Calendario personal.
- Turnos copiados manualmente o importados desde calendario.
- Vacaciones personales.
- Cálculo de salario estimado.
- Resumen de nómina introducida por ella.
- Recordatorios.
- Invitaciones a amigas para perfiles personales.

No incluye:

- datos de pacientes reales
- evolución clínica
- diagnósticos
- historia clínica
- documentos laborales reales compartidos con terceros

---

## Modo C: Uso profesional institucional

Objetivo: uso real dentro del hospital o centro.

Requisitos:

- autorización del centro
- evaluación de impacto si procede
- DPO informado
- roles y permisos
- auditoría
- cifrado
- registro de accesos
- integración con sistemas internos si procede
- prohibición de compartir con personas externas sin base legal
- formación de usuarias

Este modo no debería hacerse improvisadamente en una demo pública.

---

## Modo D: Local-first / privacidad máxima

Objetivo: minimizar riesgo legal.

Cómo funciona:

- Los datos sensibles se guardan en el dispositivo de la trabajadora.
- Cifrado local.
- Sincronización opcional cifrada extremo a extremo.
- El servidor solo guarda metadatos mínimos.
- Las nóminas se procesan localmente si es posible.
- La IA solo se usa si la usuaria activa modo seguro o modelo local.

Ventaja:

- Menos datos personales en servidor.
- Menos responsabilidad para el proveedor.
- Mejor para datos financieros y laborales sensibles.

Desventaja:

- Más complejo técnicamente.
- Compartir con amigas se limita a plantillas no sensibles.

---

# 5. Roles y permisos

## Roles posibles

| Rol | Qué puede hacer |
|---|---|
| **Owner / Trabajadora** | Control total sobre sus datos personales, perfil laboral, nóminas, configuración |
| **Amiga invitada** | Solo ve plantillas compartidas, calendario personal opcional, sin datos laborales sensibles ni pacientes |
| **Compañera de turno** | Puede participar en cambios de turno si ambas aceptan y si el centro lo permite |
| **Supervisora** | Puede aprobar turnos, vacaciones, cambios, ver cargas de equipo sin acceder a nóminas privadas |
| **Admin de centro** | Configura convenio, unidades, festivos, turnos, políticas, sin ver nóminas privadas si no corresponde |
| **Auditora** | Solo lectura de logs y accesos, sin contenido sensible |
| **Asistente IA** | Acceso limitado a contexto autorizado; nunca a datos no permitidos |

---

## Regla importante

Una amiga invitada **no debe acceder** a:

- pacientes reales
- turnos reales del hospital si contienen datos personales de otras trabajadoras
- nóminas
- bajas médicas
- datos de salud
- documentos laborales
- evoluciones clínicas
- comunicaciones internas del hospital

Solo puede acceder a:

- plantillas
- retos personales
- calendarios personales compartidos voluntariamente
- listas de tareas no laborales
- perfiles de organización personal

---

# 6. Modelo de datos full-stack

A continuación, una propuesta de entidades. No hace falta usarlas todas; se activan según modo de privacidad.

---

## Entidades principales

### User

```text
id
email
name_alias
password_hash
mfa_enabled
role
locale
timezone
created_at
last_login_at
privacy_mode
status
```

### Profile

```text
id
user_id
display_name
professional_category
unit
workplace_name
employment_type
workday_type
contract_start_date
seniority_date
professional_level
shift_pattern
default_rest_hours
default_weekly_hours
```

### Workplace

```text
id
name
type
city
country
timezone
convenio_id
fiscal_year_config
holiday_calendar_id
```

### Unit

```text
id
workplace_id
name
code
floor
specialty
minimum_staff_config
```

### Convenio

```text
id
name
effective_from
effective_to
source_url
pdf_hash
annual_hours
workday_config
vacation_days
personal_days
night_bonus_rule
holiday_bonus_rule
overtime_rule
extra_payments_rule
seniority_rule
career_professional_rule
version
```

### SalaryTable

```text
id
convenio_id
category
level
base_salary_month
base_salary_year
extra_payments
night_bonus_percent_or_amount
holiday_amount_rule
overtime_hour_value
seniority_bonus
other_complements_json
```

### Shift

```text
id
user_id
unit_id
date
start_time
end_time
shift_type
day_type
required_role
status
source
created_by
approved_by
notes_internal
```

### ShiftSwapRequest

```text
id
original_shift_id
requested_by_user_id
target_user_id
reason
status
requested_at
approved_by
validations_json
audit_log_id
```

### VacationRequest

```text
id
user_id
start_date
end_date
type
status
requested_at
approved_by
balance_snapshot
```

### DayOffBalance

```text
id
user_id
year
accrued_days
used_days
pending_days
carryover_days
calculation_json
updated_at
```

### PatientAssignment

```text
id
shift_id
location_code
care_level
risk_flags_json
isolation_flag
mobility_flag
feeding_flag
hygiene_flag
notes_organization_only
created_at
updated_at
```

Importante:  
`location_code` puede ser “301-A”, pero no debe incluir nombre del paciente.

### CareTask

```text
id
patient_assignment_id
shift_id
task_type
priority
status
scheduled_time
completed_at
depends_on_nursing
requires_double_assist
requires_epi
notes_safe
```

### MaterialItem

```text
id
unit_id
name
category
stock_level
minimum_stock
location
last_updated_by
```

### PayrollConfig

```text
id
user_id
salary_table_id
irpf_rate
social_security_rate_config
union_fee
mutual_fee
other_deductions_json
extra_payments_mode
pay_day
```

### PayrollPeriod

```text
id
user_id
period_start
period_end
worked_days
worked_hours
night_hours
holiday_hours
overtime_hours
on_call_hours
base_amount
complement_amount
gross_amount
ss_employee_amount
irpf_amount
other_deductions
net_amount
payslip_file_id
status
calculation_json
```

### TaxSummary

```text
id
user_id
fiscal_year
gross_income
ss_employee
irpf_withheld
union_fees
professional_fees
deductible_expenses_json
personal_situation_json
exported_at
```

### Invitation

```text
id
invited_by_user_id
email_or_alias
role
scope
expires_at
accepted_at
revoked_at
purpose
```

### AuditLog

```text
id
actor_user_id
action
entity_type
entity_id
before_hash
after_hash
ip_hash
user_agent_hash
created_at
```

### Notification

```text
id
user_id
type
title
body
link
read_at
```

### Consent

```text
id
user_id
purpose
version
accepted_at
revoked_at
```

### SyntheticDataset

```text
id
name
description
generated_at
is_public
```

---

# 7. Variables de entorno

## `.env.example`

```env
# App
APP_NAME="Alejandra CuidaMar Pro"
APP_ENV=development
PUBLIC_BASE_URL=http://localhost:3000
DEFAULT_LOCALE=es
DEFAULT_TIMEZONE=Europe/Madrid

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/alejandra

# Auth
AUTH_SECRET=change-me
AUTH_SESSION_MAX_AGE=86400
AUTH_MFA_ENABLED=true

# Email
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
EMAIL_FROM=

# Storage
STORAGE_PROVIDER=s3
S3_ENDPOINT=
S3_BUCKET=
S3_REGION=eu-west-1
S3_ACCESS_KEY=
S3_SECRET_KEY=

# Redis / Queue
REDIS_URL=redis://localhost:6379

# AI
AI_ENABLED=false
AI_PROVIDER=openai
AI_MODEL=
AI_API_KEY=
AI_MAX_TOKENS=
AI_TEMPERATURE=0.2
AI_REDACT_PHI=true
AI_LOG_PROMPTS=false

# Payroll
PAYROLL_ENGINE_ENABLED=true
PAYROLL_DEFAULT_CURRENCY=EUR

# Privacy
FEATURE_PATIENTS=false
FEATURE_PAYROLL=false
FEATURE_TAX=false
FEATURE_INVITES=false
ALLOW_PUBLIC_SIGNUP=false
INVITE_LINK_TTL_HOURS=72
MAX_INVITES_PER_USER=5

# Audit
AUDIT_LOG_ENABLED=true
AUDIT_RETENTION_DAYS=365

# Data residency
DATA_RESIDENCY=EU
```

---

# 8. Variables laborales completas que debe manejar el sistema

## Variables de la trabajadora

- Categoría profesional: TCAE / auxiliar de enfermería.
- Nivel.
- Tipo de contrato.
- Fecha de antigüedad.
- Jornada: completa, parcial, guardias, turnos rotatorios.
- Unidad.
- Centro.
- Turno habitual.
- Disponibilidad.
- Situación administrativa: activa, IT, permiso, excedencia, maternidad/paternidad, riesgo embarazo, lactancia.
- Retención IRPF.
- Datos fiscales básicos.
- Sindicato.
- Mutualidad si procede.
- Cuenta bancaria para nómina, solo si el sistema es oficial.
- Persona de contacto, solo si es necesario.
- Formación obligatoria.
- Competencias habilitantes.

---

## Variables del turno

- Fecha.
- Hora inicio.
- Hora fin.
- Tipo de turno: mañana, tarde, noche, guardia, disponibilidad, prolongación.
- Tipo de día: ordinario, festivo, festivo especial, fin de semana, nocturno.
- Unidad.
- Ratio de pacientes.
- Carga estimada.
- Necesidad de doble auxiliar.
- Pacientes con movilidad asistida.
- Pacientes con aislamiento.
- Pacientes con riesgo de caída.
- Pacientes con supervisión.
- Tareas especiales.
- Descanso previsto.
- Estado: planificado, confirmado, intercambiado, anulado.

---

## Variables de pacientes / asignaciones

Para cumplir privacidad, usar solo datos organizativos seguros.

Permitido en modo institucional autorizado:

- Habitación/cama.
- Nivel de dependencia.
- Necesidad de ayuda para aseo.
- Necesidad de ayuda para alimentación.
- Necesidad de movilización.
- Riesgo de caída.
- Aislamiento.
- Necesidad de EPI.
- Necesidad de vigilancia.
- Tareas pendientes.
- Observaciones organizativas.

No permitido o desaconsejado en app no oficial:

- Nombre completo.
- DNI.
- Diagnóstico.
- Tratamiento.
- Medicación.
- Evolución clínica.
- Constantes clínicas si no son competencia directa y autorizada.
- Notas médicas.
- Datos de salud mental.
- Datos sensibles innecesarios.

---

## Variables de nómina

### Devengos

- Salario base.
- Pagas extraordinarias.
- Prorrata de pagas.
- Antigüedad.
- Carrera profesional.
- Complemento de destino.
- Complemento específico.
- Nocturnidad.
- Festividad.
- Turnicidad.
- Guardias localizadas.
- Guardias presenciales.
- Horas extraordinarias.
- Horas estructurales.
- Prolongaciones de jornada.
- Disponibilidad.
- Solape.
- Dietas si procede.
- Transporte si procede.
- Otros pluses de convenio.

### Deducciones

- Seguridad Social a cargo de la trabajadora.
- IRPF.
- Mutualidad si procede.
- Cuota sindical.
- Anticipos.
- Embargos judiciales.
- Regularizaciones.
- Ausencias no retribuidas.
- Otros descuentos autorizados.

### Bases

- Base de cotización por contingencias comunes.
- Base de cotización por contingencias profesionales.
- Base sujeta a IRPF.
- Base de horas extra.
- Base de pagas extras.
- Límites máximos y mínimos según normativa vigente.

---

## Variables de vacaciones

- Días anuales según convenio.
- Si son días naturales o laborables.
- Proporción por alta/baja en el año.
- Proporción por jornada parcial.
- Días disfrutados.
- Días pendientes.
- Días acumulados.
- Reglas de traslado.
- Reglas de aprobación.
- Festivos locales.
- Festivos autonómicos.
- Festivos nacionales.
- Permisos retribuidos.
- IT durante vacaciones, si afecta según normativa.

---

## Variables de días libres

- Descanso semanal.
- Libranzas por turno.
- Festivos trabajados.
- Compensación de festivos.
- Descanso entre jornadas.
- Descanso dentro de la jornada.
- Máximo de días trabajados seguidos.
- Mínimo de fines de semana libres si aplica.
- Bolsa de horas.
- Recuperación de horas.
- Permisos retribuidos.
- Permisos no retribuidos.

---

# 9. Motor de nómina y convenio

## Objetivo

Que Alejandra pueda preguntar:

- “¿Cuánto cobro este mes?”
- “¿Cuánto me pagan por una guardia de 12 horas en festivo?”
- “¿Cuánto vale mi hora ordinaria?”
- “¿Cuánto cobro por trabajar un sábado noche?”
- “¿Cuánto me descuentan por IRPF?”
- “¿Por qué mi nómina ha cambiado?”
- “¿Qué parte de mi nómina es prorrata de pagas?”
- “¿Cuánto cobraré si hago 3 turnos extra este mes?”

---

## Fuente de verdad

El sistema necesita:

1. **Convenio colectivo aplicable**
2. **Tabla salarial vigente**
3. **Pacto interno del centro si existe**
4. **Contrato de la trabajadora**
5. **Nóminas anteriores**
6. **Calendario laboral**
7. **Parte de turnos**
8. **Configuración fiscal actualizada**

Si falta alguno, la herramienta debe decir:

> “No puedo calcularlo con certeza porque falta el convenio vigente o la tabla salarial. Te doy una estimación con los datos introducidos.”

---

## Fórmulas generales

### Precio hora ordinaria estimado

```text
precio_hora =
(
  salario_base_anual
  + complementos_salariales_anuales
  + prorrata_pagas_extraordinarias
)
/
horas_anuales_convenio
```

Este cálculo debe adaptarse al convenio. Algunos convenios definen el valor de la hora ordinaria de forma distinta.

---

### Cobro por un día concreto

```text
importe_dia =
base_diaria
+ plus_turno_dia
+ plus_nocturnidad_horas
+ plus_festividad_horas
+ horas_extra
+ otros_complementos_dia
```

Donde:

```text
base_diaria = salario_base_mensual / 30
```

o

```text
base_diaria = salario_base_mensual / días_reales_mes
```

según convenio o política interna.

---

### Nocturnidad

```text
importe_nocturnidad = horas_nocturnas * precio_hora_nocturna
```

o

```text
importe_nocturnidad = horas_nocturnas * precio_hora_base * porcentaje_nocturnidad
```

El porcentaje o cuantía debe salir del convenio.

---

### Festividad

```text
importe_festivo = horas_festivas * precio_hora_festivo
```

o

```text
importe_festivo = horas_festivas * precio_hora_base * incremento_festivo
```

También puede existir descanso compensatorio en lugar de pago directo. El sistema debe permitir configurar:

- pago
- descanso
- combinación
- bolsa de horas

---

### Horas extra

```text
importe_horas_extra = horas_extra * precio_hora_extra
```

El precio de la hora extra no debería ser inferior al de la hora ordinaria, salvo que el convenio establezca otra cosa o se compense con descanso. El sistema debe validar esto.

---

### Guardia

```text
importe_guardia = horas_guardia * precio_hora_guardia
```

Variables:

- guardia localizada
- guardia presencial
- guardia en fin de semana
- guardia nocturna
- guardia festiva
- desplazamiento si procede
- tiempo de respuesta
- máximo de guardias por mes

---

### Nómina mensual estimada

```text
salario_bruto =
salario_base
+ prorrata_pagas_extra
+ antigüedad
+ carrera_profesional
+ nocturnidad
+ festivos
+ turnicidad
+ horas_extra
+ guardias
+ otros_devengos

seguridad_social_trabajadora = base_cotizacion * tipo_ss_trabajadora

irpf = base_irpf * tipo_retencion_irpf

otras_deducciones =
sindicato
+ mutualidad
+ anticipos
+ embargos
+ otros

neto = salario_bruto
- seguridad_social_trabajadora
- irpf
- otras_deducciones
```

---

## Ejemplo hipotético, no real

Sirve solo para entender la mecánica.

```text
Salario base mensual: 1.500 €
Prorrata pagas extra: 250 €
Antigüedad: 50 €
Nocturnidad: 8 horas * 3 €/h = 24 €
Festivos: 8 horas * 6 €/h = 48 €
Horas extra: 5 horas * 14 €/h = 70 €

Bruto mensual:
1.500 + 250 + 50 + 24 + 48 + 70 = 1.942 €

Deducciones hipotéticas:
SS 4,7% = 91,27 €
IRPF 12% = 233,04 €
Sindicato = 15 €

Neto estimado:
1.942 - 91,27 - 233,04 - 15 = 1.602,69 €
```

La app debe dejar claro:

> “Cálculo estimado. La nómina oficial puede variar por topes de cotización, convenio, atrasos, regularizaciones, IRPF personal, pagas, jornada o incidencias.”

---

## Explicación de la nómina línea a línea

La herramienta debe poder explicar cada campo:

| Campo | Significado |
|---|---|
| Salario base | Retribución básica por categoría |
| Pagas extra | Pagas extraordinarias, pueden estar prorrateadas |
| Antigüedad | Complemento por años de servicio |
| Nocturnidad | Plus por horas nocturnas |
| Festividad | Plus por trabajar festivos |
| Horas extra | Horas extraordinarias realizadas |
| Total devengado | Salario bruto antes de deducciones |
| Base cotización | Base sobre la que se calcula Seguridad Social |
| Deducción SS | Aportación de la trabajadora |
| IRPF | Retención para Hacienda |
| Líquido a percibir | Neto que llega al banco |
| Atrasos | Importes de meses anteriores |
| Regularización | Ajuste por IRPF, jornada, incapacidad, etc. |

---

# 10. Módulo de declaración / renta

La app no debe presentar impuestos por sí sola salvo integración oficial autorizada. Puede hacer un resumen preparatorio.

## Qué puede preparar

Para la declaración de la renta española, la app podría exportar un resumen:

- Rendimientos íntegros del trabajo.
- Retenciones de IRPF.
- Cotizaciones a Seguridad Social de la trabajadora.
- Cuotas sindicales, si son deducibles según normativa vigente.
- Colegiación profesional si procede y es deducible.
- Gastos de defensa jurídica si aplica según ley.
- Aportaciones a planes de pensiones.
- Datos personales y familiares relevantes, solo si la usuaria los introduce.
- Comparativa anual.
- Detección de posibles errores: nóminas duplicadas, retención anómala, cambios de pagador.

---

## Salida recomendada

```text
Resumen fiscal estimado 2026
Usuario: Alejandra
Centro: Hospital del Mar
Categoría: TCAE

Rendimientos íntegros del trabajo: 28.450 €
Retenciones IRPF: 3.414 €
Seguridad Social trabajadora: 1.337 €
Cuotas sindicales: 180 €
Aportaciones plan pensiones: 600 €

Observaciones:
- Hay dos pagadores si trabajaste en otro centro.
- Revisa si las cuotas sindicales pueden reducir el rendimiento neto según normativa vigente.
- Exporta este resumen para tu asesor o para el borrador de la AEAT.
```

Debe incluir:

> “Este resumen no sustituye la declaración oficial. Verifica los datos fiscales en la AEAT o con asesor fiscal.”

---

# 11. Módulo de vacaciones y días libres

## Funciones

- Calcular vacaciones pendientes.
- Mostrar calendario anual.
- Solicitar días.
- Aprobar solicitudes.
- Detectar conflictos.
- Calcular proporción por alta, baja o jornada parcial.
- Diferenciar días naturales y laborables.
- Mostrar festivos locales, autonómicos y nacionales.
- Calcular libranzas por turno.
- Avisar si un cambio de día afecta descanso legal.

---

## Fórmula básica de vacaciones

```text
vacaciones_devengadas = dias_anuales_convenio * meses_trabajados / 12
```

Si la jornada es parcial:

```text
vacaciones_proporcionales = vacaciones_devengadas * coeficiente_jornada
```

Pero el cálculo real puede depender de:

- convenio
- calendario laboral
- días naturales o laborables
- situación de IT
- permisos
- inicio/final de contrato

---

## Ejemplo de duda típica

Usuaria pregunta:

> “¿Cuántos días de vacaciones me quedan si empecé el 1 de marzo, jornada completa y convenio con 30 días naturales?”

Respuesta del sistema:

```text
Cálculo estimado:
Meses trabajados de marzo a diciembre: 10
Vacaciones devengadas: 30 * 10 / 12 = 25 días naturales

Si ya has disfrutado 10 días, te quedarían 15 días naturales pendientes.

Advertencia:
Este cálculo es estimado. El calendario laboral del centro puede convertir días naturales en laborables, y la aprobación depende del servicio.
```

---

# 12. Cambios de día y swaps

## Flujo

1. Alejandra ve un turno que quiere cambiar.
2. Propone cambio.
3. Elige compañera o turno deseado.
4. El sistema valida:
   - categoría compatible
   - unidad compatible
   - descanso mínimo entre jornadas
   - máximo de horas
   - no duplicidad
   - no deja servicio bajo mínimo
   - no afecta permiso o vacaciones
   - cumplimiento de convenio
5. La compañera acepta.
6. Supervisora aprueba si es necesario.
7. Se registra en auditoría.
8. Se notifica.
9. Se actualiza calendario.

---

## Validaciones automáticas

```text
if new_shift.start < old_shift.end + minimum_rest:
    error "No se cumple el descanso mínimo entre turnos"

if weekly_hours > max_weekly_hours:
    error "Se supera el máximo semanal permitido"

if user.has_vacation(shift.date):
    error "La trabajadora tiene vacaciones ese día"

if unit.minimum_staff_not_met:
    warning "El cambio puede dejar la unidad por debajo del mínimo"

if shift.requires_special_training and not user.has_training:
    error "La trabajadora no tiene la formación requerida"
```

---

## Dudas típicas

### “¿Puedo cambiar mi turno con una amiga?”

Respuesta:

```text
Sí, siempre que:
1. Las dos estéis de acuerdo.
2. Tengáis categoría y unidad compatibles.
3. Se respeten descansos y límites de jornada.
4. Lo apruebe la responsable si el centro lo exige.
5. Quede registrado.
```

### “¿Me pueden cambiar un día libre?”

Respuesta:

```text
Depende del convenio, contrato y organización del centro.
El sistema puede indicar si el cambio:
- está dentro de previsión razonable
- incumple descanso mínimo
- requiere preaviso
- debe compensarse
- necesita aprobación
```

---

# 13. Módulo de pacientes con privacidad

## Enfoque correcto

La app no debe convertirse en historia clínica paralela.

Debe servir para organizar cuidados auxiliares, no para registrar evolución médica.

---

## Campos seguros

```text
PatientAssignment:
- location_code: "301-A"
- care_level: "dependencia_total"
- mobility_flag: "requiere_grúa"
- isolation_flag: "contacto"
- fall_risk: true
- feeding_flag: "supervision"
- hygiene_flag: "banio_asistido"
- notes_organization_only: "Avisar si intenta levantarse solo"
```

---

## Campos prohibidos o desaconsejados

```text
- nombre_completo
- dni
- diagnostico
- tratamiento
- medicacion
- constantes_clinicas_no_autorizadas
- notas_medicas
- evolucion_clinica
- datos_de_salud_mental
- datos_de_embarazo
- datos_de_enfermedades_infecciosas_identificativas
- comentarios_estigmatizantes
```

---

## Si se necesita evolución

La evolución debe estar en la historia clínica oficial del hospital, no en una app externa.

Si Alejandra necesita consultar evolución:

- acceder al sistema oficial autorizado
- solo si tiene competencia
- dejar registro de acceso si el sistema lo hace
- no copiar datos a app personal

La app puede mostrar solo:

```text
"Consulta la evolución en la historia clínica oficial."
```

---

# 14. Asistente IA Alejandra

## Personalidad profesional

Alejandra debe ser:

- Clara.
- Empática.
- Breve cuando haga falta.
- Precisa.
- Prudente.
- Transparente.
- Capaz de decir “no lo sé” o “falta dato”.
- Consciente de límites legales y clínicos.

---

## Qué puede responder

- Dudas de turnos.
- Dudas de vacaciones.
- Dudas de días libres.
- Explicación de nómina.
- Estimación de salario por día/hora.
- Preparación de resumen fiscal.
- Organización de tareas.
- Priorización del turno.
- Material necesario.
- Recordatorios de seguridad básica.
- Ayuda para redactar solicitud de cambio.
- Generación de relevo.
- Explicación de convenios cargados.

---

## Qué no debe responder como verdad absoluta

- Diagnósticos.
- Tratamientos.
- Medicación.
- Interpretación clínica.
- Decisiones médicas.
- Asesoría legal vinculante.
- Asesoría fiscal definitiva.
- Interpretación oficial de nómina sin datos completos.
- Sustitución de protocolos del hospital.

---

## Respuestas tipo ante dudas sensibles

### Pregunta clínica

Usuaria:

> “La paciente de la 301-A está respirando raro.”

Alejandra:

```text
Esto puede requerir valoración inmediata. No soy un sistema clínico.
Avisa ahora a la enfermera referente o al equipo responsable según protocolo.
En la app puedo marcar la tarea como “aviso urgente comunicado”, pero no sustituyo la actuación sanitaria.
```

---

### Pregunta de evolución

Usuaria:

> “¿Cómo ha evolucionado el paciente de la 302-B?”

Alejandra:

```text
No tengo acceso autorizado a evolución clínica ni debo almacenarla.
Consulta la historia clínica oficial si tienes permiso.
En esta app solo registro tareas organizativas y de cuidados auxiliares.
```

---

### Pregunta de nómina

Usuaria:

> “¿Cuánto cobro por un festivo de 12 horas?”

Alejandra:

```text
Para calcularlo necesito:
1. Tu salario base mensual o anual.
2. El valor del plus de festividad según convenio.
3. Si las horas son ordinarias o extra.
4. Si existe prorrata de pagas.
5. Tu retención IRPF si quieres neto.

Con los datos actuales, la estimación es:
- Bruto del turno: X €
- Retención estimada: Y €
- Neto estimado: Z €

Este cálculo no es oficial. Valídalo con RRHH o tu nómina.
```

---

# 15. Prompt maestro full-stack para construir la app

Este prompt puedes usarlo para pedir a una IA de programación que genere la base del proyecto.

```text
Actúa como un arquitecto software full-stack senior especializado en aplicaciones sanitarias, laborales y cumplimiento de privacidad. Diseña e implementa una plataforma llamada “Alejandra CuidaMar Pro”.

Objetivo:
Crear una app para una auxiliar de enfermería/TCAE que organiza turnos, tareas, pacientes pseudonomizados, vacaciones, días libres, cambios de turno, nóminas, resumen fiscal y perfiles compartidos con invitaciones.

Requisitos legales y de privacidad obligatorios:
1. No almacenar datos de salud innecesarios.
2. No usar nombres de pacientes; usar habitación/cama o código interno.
3. No almacenar diagnóstico, tratamiento, medicación ni evolución clínica.
4. Nóminas y datos laborales deben estar cifrados y visibles solo para la usuaria propietaria.
5. Las amigas invitadas solo pueden acceder a espacios personales no laborales ni sanitarios, salvo que sean compañeras autorizadas y exista base legal.
6. Todo acceso sensible debe quedar en AuditLog.
7. Incluir modo demo con datos sintéticos.
8. No loggear datos personales ni sanitarios.
9. Cumplir privacidad por diseño y por defecto.
10. Preparar exportación y borrado de datos personales.

Stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma
- PostgreSQL
- Auth.js con MFA opcional
- Zod para validación
- BullMQ + Redis para tareas en segundo plano
- Resend o SMTP para emails
- S3 compatible UE para documentos
- Tests con Vitest y Playwright
- Docker para despliegue

Módulos:
1. Auth y usuarias.
2. Roles: owner, friend, coworker, supervisor, admin, auditor.
3. Calendario laboral.
4. Turnos y shift swaps.
5. Vacaciones y day-off balance.
6. PatientAssignment pseudonomizado.
7. CareTask.
8. Material inventory.
9. Payroll config y PayrollPeriod.
10. TaxSummary.
11. Invitation system.
12. AI assistant con RAG opcional.
13. AuditLog.
14. Notifications.
15. Synthetic data generator.

Entregables:
1. Arquitectura de carpetas.
2. schema.prisma completo.
3. Middleware RBAC.
4. API routes.
5. Páginas principales.
6. Componentes reutilizables.
7. Motor de cálculo salarial configurable.
8. Motor de validación de turnos.
9. Flujo de invitación con expiración y revocación.
10. Modo demo sin datos reales.
11. Tests unitarios para payroll y scheduling.
12. Documentación de privacidad.
13. Dockerfile y docker-compose.
14. `.env.example`.
15. Guía de despliegue seguro.

Páginas:
- /login
- /register si ALLOW_PUBLIC_SIGNUP=true
- /dashboard
- /calendar
- /shifts
- /patients
- /tasks
- /material
- /vacations
- /days-off
- /payroll
- /tax-summary
- /invites
- /settings
- /privacy
- /audit
- /admin/convenio
- /admin/users

Restricciones del dominio:
- En pacientes solo location_code, care_level, flags y notas organizativas.
- Prohibido campos: diagnosis, medication, clinical_progress, full_name.
- En payroll, cifrar documentos y limitar acceso.
- En invites, email solo para envío de invitación, revocable y caducable.
- En AI, bloquear PHI y no guardar prompts si AI_LOG_PROMPTS=false.

Devuelve primero:
1. schema.prisma
2. estructura de carpetas
3. rutas API principales
4. implementación inicial de RBAC
5. ejemplo de datos sintéticos
```

---

# 16. Prompt específico para el motor de nómina

```text
Actúa como ingeniero experto en nóminas españolas y desarrollo de motores de cálculo laboral. Diseña un módulo de nómina para la app “Alejandra CuidaMar Pro”.

Objetivo:
Calcular estimaciones de salario bruto, deducciones y neto para una auxiliar de enfermería, a partir de convenio, tabla salarial, turnos y configuración fiscal.

Requisitos:
1. No usar valores fijos ilegales o desactualizados. Todos los parámetros deben ser configurables.
2. Permitir múltiples convenios y versiones.
3. Separar devengos, bases y deducciones.
4. Calcular precio hora ordinaria si el convenio proporciona salario anual y jornada anual.
5. Calcular nocturnidad, festivos, horas extra, guardias, antigüedad, carrera profesional y pagas extra.
6. Permitir prorrata de pagas o pago en meses concretos.
7. Calcular resumen para declaración, sin presentar impuestos.
8. Mostrar advertencias si faltan datos.
9. Devolver siempre un JSON auditable con fórmula aplicada.
10. No almacenar datos bancarios si no es necesario.

Entradas:
- salary_table
- worker_profile
- payroll_config
- shifts_worked
- holiday_calendar
- irpf_rate
- social_security_config
- deductions

Salidas:
- gross_amount
- base_amount
- complement_amount
- night_amount
- holiday_amount
- overtime_amount
- on_call_amount
- seniority_amount
- extra_pay_amount
- ss_employee_amount
- irpf_amount
- other_deductions
- net_amount
- calculation_trace
- warnings

Implementa tests para:
- mes con pagas extra prorrateadas
- mes con horas extra
- turno nocturno
- festivo
- jornada parcial
- atrasos
- regularización IRPF
```

---

# 17. Prompt específico para el planificador de turnos

```text
Actúa como experto en planificación sanitaria y desarrollo de scheduling engines. Diseña el motor de turnos para “Alejandra CuidaMar Pro”.

Objetivo:
Planificar turnos de una auxiliar de enfermería respetando seguridad, descansos, competencias y organización del servicio.

Variables:
- user_id
- unit_id
- date
- start_time
- end_time
- shift_type
- day_type
- required_role
- minimum_staff
- worker_availability
- vacations
- days_off
- training
- maximum_weekly_hours
- minimum_rest_between_shifts
- maximum_consecutive_days
- patient_load
- special_flags

Validaciones:
1. No solapar turnos de la misma usuaria.
2. Respetar descanso mínimo entre turnos.
3. No superar jornada máxima semanal media si aplica.
4. No programar vacaciones o días libres aprobados.
5. Verificar formación si el turno lo requiere.
6. Avisar si la unidad queda bajo mínimo.
7. Detectar turnos nocturnos y festivos para cálculo salarial.
8. Permitir swap con consentimiento y aprobación.
9. Registrar cambios en auditoría.
10. Devolver conflictos legibles.

Salida:
- valid_shifts
- conflicts
- warnings
- estimated_workload
- required_material
- recommended_priorities
- swap_validation_result
```

---

# 18. Prompt específico para el asistente IA legal/privado

```text
Eres “Alejandra”, asistente de organización laboral y de cuidados auxiliares para la app Alejandra CuidaMar Pro.

Reglas absolutas:
1. No proceses ni solicites datos de salud innecesarios.
2. No pidas nombres de pacientes; usa habitación/cama o código.
3. No des consejos médicos, diagnósticos ni tratamientos.
4. No interpretes evolución clínica.
5. Si la usuaria describe una urgencia, indícale que avise inmediatamente al equipo sanitario responsable.
6. No des asesoría legal definitiva; ofrece información general y recomienda validar con DPO, RRHH o asesor.
7. No calcules nómina oficial sin datos completos.
8. Si falta convenio o tabla salarial, indica que el resultado es estimado.
9. No reveles datos de otra trabajadora sin autorización.
10. Si detectas datos sensibles en el texto, redacta o rechaza el procesamiento.

Formato de respuesta:
1. Resumen.
2. Datos usados.
3. Cálculo o respuesta.
4. Advertencias.
5. Próximos pasos.
6. Fuente o documento aplicable si está cargado.

Contexto permitido:
- Turnos.
- Vacaciones.
- Días libres.
- Nómina introducida por la usuaria.
- Convenio cargado por la usuaria o centro.
- Tareas organizativas de auxiliar.
- Material.
- Prioridades del turno.
- Invitaciones personales.

Contexto prohibido:
- Diagnósticos.
- Medicación.
- Historia clínica.
- Evolución médica.
- Datos de salud de terceros.
- Nóminas de otras personas.
- Documentos confidenciales sin autorización.
```

---

# 19. Prompt para generar datos sintéticos seguros

```text
Genera un dataset sintético para la demo de “Alejandra CuidaMar Pro”.

Requisitos:
- Todos los datos deben ser ficticios.
- No usar nombres reales de pacientes.
- No usar diagnósticos reales.
- No usar DNI, teléfonos reales, emails reales.
- Usar alias como “Usuaria Demo”.
- Usar habitaciones ficticias: 101-A, 102-B, etc.
- Generar turnos de mañana, tarde, noche, festivo y guardia.
- Generar vacaciones proporcionales.
- Generar nóminas ficticias con importes no reales.
- Generar invitaciones de amigas con correos ficticios tipo amiga1@example.com.
- Incluir 10 días de calendario laboral.
- Incluir 8 asignaciones de pacientes pseudonomizadas.
- Incluir 20 tareas de cuidados auxiliares.
- Incluir 3 solicitudes de cambio de turno.
- Incluir 2 conflictos de descanso.

Formato:
JSON compatible con seed de PostgreSQL/Prisma.
```

---

# 20. Pantallas recomendadas

## Dashboard

Mostrar:

- próximo turno
- carga estimada
- tareas prioritarias
- vacaciones pendientes
- alertas de descanso
- nómina estimada del mes
- accesos rápidos a Alejandra IA

---

## Calendario

Mostrar:

- turnos
- vacaciones
- días libres
- festivos
- solicitudes pendientes
- cambios propuestos
- disponibilidad personal

---

## Turnos

Funciones:

- ver detalle
- proponer cambio
- aceptar cambio
- solicitar aprobación
- ver validaciones
- exportar a calendario

---

## Pacientes

Vista segura:

- lista por habitación/cama
- nivel de dependencia
- flags de riesgo organizativo
- tareas pendientes
- estado de higiene, alimentación, movilización
- avisos a enfermería

No mostrar:

- nombre
- diagnóstico
- tratamiento
- evolución

---

## Nómina

Funciones:

- subir nómina solo si está permitido
- extraer campos localmente
- explicar conceptos
- comparar meses
- calcular bruto/neto
- calcular precio hora
- calcular festivo/noche/extra
- exportar resumen

---

## Declaración

Funciones:

- resumen anual
- exportar CSV/PDF
- comparar retenciones
- detectar pagadores múltiples
- recordatorio de revisar datos AEAT

---

## Invitaciones

Funciones:

- invitar por email o alias
- elegir perfil
- establecer caducidad
- revocar
- ver invitaciones activas
- registro de consentimiento

---

## Privacidad

Funciones:

- modo demo
- modo personal
- modo profesional
- exportar datos
- borrar cuenta
- descargar archivo de auditoría
- gestionar consentimientos
- ver política de privacidad

---

# 21. Flujos de invitación de amigas

## Flujo correcto

1. Alejandra pulsa “Invitar”.
2. Elige tipo de invitación:
   - amiga personal
   - compañera de turno
   - supervisora
3. Define permisos:
   - solo plantillas
   - calendario personal compartido
   - lista de tareas personales
   - retos de autocuidado
4. Define caducidad: 24h, 72h, 7 días.
5. La invitada recibe enlace.
6. Crea cuenta con email y contraseña.
7. Acepta política de privacidad.
8. El sistema registra consentimiento.
9. Alejandra puede revocar en cualquier momento.

---

## Límites

Una invitación de amiga **no debe dar acceso** a:

- turnos reales del hospital
- pacientes
- nóminas
- convenio interno si es confidencial
- comunicaciones internas
- datos de otras trabajadoras
- documentos laborales
- historial de salud

---

## Perfiles compartidos seguros

### Perfil “Mi día a día”

Compartible con amigas:

- rutinas
- sueño
- hidratación
- ejercicio
- pausas
- recordatorios
- calendario personal

### Perfil “Turnos suaves”

Solo si ambas son compañeras y consienten:

- disponibilidad general
- preferencia de turnos
- propuestas de cambio
- días deseados

### Perfil “Apoyo emocional”

No clínico:

- cómo se siente en general
- nivel de estrés autoinformado
- recordatorios de autocuidado
- mensajes de apoyo

No debe incluir:

- salud mental detallada
- bajas médicas
- diagnósticos
- medicación

---

# 22. Variables del entorno y comportamiento del sistema

## Si el entorno es demo

```text
FEATURE_PATIENTS = true solo con datos sintéticos
FEATURE_PAYROLL = true solo con datos ficticios
AI_ENABLED = false o con datos sintéticos
ALLOW_PUBLIC_SIGNUP = false
```

---

## Si el entorno es personal

```text
FEATURE_PATIENTS = false
FEATURE_PAYROLL = true privado
FEATURE_TAX = true privado
AI_ENABLED = true con redacción de datos sensibles
ALLOW_INVITES = true solo espacios personales
```

---

## Si el entorno es institucional

```text
FEATURE_PATIENTS = true pseudonomizado y autorizado
FEATURE_PAYROLL = false o solo individual privado
AI_ENABLED = true solo con documentos autorizados
AUDIT_LOG_ENABLED = true
DATA_RESIDENCY = EU
MFA_REQUIRED = true
```

---

# 23. Dudas típicas de la trabajadora y cómo debe actuar Alejandra

| Duda | Datos que necesita Alejandra | Qué hace | Límite |
|---|---|---|---|
| ¿Cuánto cobro este mes? | Nómina, turnos, convenio, IRPF | Calcula estimación y explica conceptos | No sustituye nómina oficial |
| ¿Cuántos días de vacaciones tengo? | Fecha alta, jornada, convenio, días disfrutados | Calcula balance | Valida con RRHH/calendario |
| ¿Puedo cambiar un turno? | Turnos, descansos, formación, aprobación | Valida y genera solicitud | No aprueba sin autorización |
| ¿Cuánto vale mi hora? | Salario anual, jornada anual, convenio | Calcula precio hora | Depende del convenio |
| ¿Me corresponde plus nocturno? | Horas, convenio | Calcula importe | Requiere tabla vigente |
| ¿Un festivo se paga o se libra? | Convenio, centro | Explica opciones configuradas | No decide sin normativa |
| ¿Qué pacientes tengo hoy? | Asignación pseudonomizada | Muestra tareas | No muestra evolución clínica |
| ¿Cómo está evolucionando un paciente? | Acceso oficial | Redirige a HCE | No interpreta clínica |
| ¿Puedo llevarme nómina a la IA? | Documento | Recomienda no subir a IA pública | Usar OCR local o servicio con DPA |
| ¿Qué meto en la declaración? | Resumen fiscal | Prepara borrador informativo | No presenta impuestos |
| ¿Me deben pagar horas extra? | Turnos, convenio | Calcula y marca advertencia | Valida con RRHH |
| ¿Cuánto descanso entre turnos? | Calendario, convenio | Detecta conflictos | No sustituye normativa |
| ¿Puedo invitar a mi amiga? | Perfil, permisos | Crea invitación limitada | No da acceso a datos laborales/sanitarios |

---

# 24. Módulo de OCR / lectura de nóminas

## Riesgo

Subir una nómina a una IA pública puede exponer datos personales y laborales.

## Solución segura

Opciones recomendadas:

1. **OCR local en el navegador**  
   El PDF no sale del dispositivo.

2. **OCR en backend propio con cifrado**  
   Solo si hay medidas fuertes.

3. **Proveedor OCR con DPA y residencia UE**  
   Solo si se firma contrato y se minimiza.

4. **Entrada manual asistida**  
   La usuaria introduce campos principales.

---

## Campos a extraer

```text
periodo
empresa
trabajadora
categoria
grupo_cotizacion
antiguedad
jornada
dias_trabajados
salario_base
pagas_extra_prorrateadas
nocturnidad
festivos
horas_extra
total_devengado
base_contingencias_comunes
irpf_porcentaje
deduccion_ss
deduccion_irpf
otras_deducciones
liquido_a_percibir
```

---

# 25. Módulo de convenio inteligente

## Qué debe permitir

- Subir PDF oficial.
- Extraer tablas salariales.
- Versionar convenios.
- Indicar vigencia.
- Asociar centro de trabajo.
- Configurar reglas:
  - jornada anual
  - vacaciones
  - nocturnidad
  - festivos
  - horas extra
  - permisos
  - descansos
  - libranzas
  - pagas extra
  - antigüedad
  - carrera profesional

---

## Respuesta ideal

Usuaria:

> “¿Cuánto me corresponde por nocturnidad?”

Alejandra:

```text
Según el convenio cargado “Convenio X 2025-2027”, artículo Y:
- Se considera jornada nocturna de 22:00 a 06:00.
- La hora nocturna tiene un incremento del Z% sobre la hora base.

Con tu salario base actual, la estimación es:
- Hora base: A €
- Plus nocturnidad por hora: B €
- Horas nocturnas este mes: C
- Total estimado: D €

Advertencia: el cálculo depende de la tabla vigente y de tu jornada real.
```

---

# 26. Módulo de auditoría

Cada acción sensible debe registrar:

```text
AuditLog:
- quién
- qué
- cuándo
- sobre qué entidad
- cambio anterior hash
- cambio posterior hash
- motivo si aplica
- IP anonimizada
- dispositivo hash
```

Acciones auditables:

- login
- cambio de contraseña
- acceso a nómina
- subida de documento
- invitación creada
- invitación aceptada
- turno modificado
- swap aprobado
- vacaciones aprobadas
- configuración de convenio
- exportación de datos
- borrado de cuenta
- acceso a paciente pseudonomizado
- activación de IA

---

# 27. Seguridad técnica adicional

## Autenticación

- MFA
- contraseñas con hash Argon2 o bcrypt
- rate limit
- bloqueo progresivo
- recuperación segura
- sesiones firmadas
- expiración

## Autorización

- RBAC
- validación por recurso
- denegar por defecto
- comprobación de propiedad
- scopes de invitación

## Datos

- cifrado en tránsito TLS
- cifrado en reposo
- cifrado de documentos sensibles
- minimización
- retención limitada
- backups cifrados
- borrado seguro

## IA

- no enviar PHI
- no loggear prompts si contienen datos personales
- redacción automática
- aprobación humana para decisiones laborales
- modo sin IA

## APIs

- Zod validación
- límites de payload
- CORS estricto
- CSRF tokens si aplica
- rate limit por usuaria
- idempotencia en swaps y aprobaciones

---

# 28. Checklist legal para producción

## Protección de datos

- [ ] Registro de actividades de tratamiento.
- [ ] Base legal para cada tratamiento.
- [ ] Política de privacidad clara.
- [ ] Consentimientos diferenciados si hacen falta.
- [ ] Evaluación de impacto si hay datos de salud a gran escala.
- [ ] Contrato con encargados de tratamiento.
- [ ] DPA con hosting, email, IA, analítica.
- [ ] Residencia de datos preferentemente UE.
- [ ] Mecanismo para derechos ARCO-POL: acceso, rectificación, supresión, oposición, portabilidad, limitación.
- [ ] Procedimiento de brechas de seguridad.
- [ ] Retención y borrado.
- [ ] Minimización de logs.
- [ ] Formación de usuarias.

## Laboral

- [ ] Convenio vigente cargado.
- [ ] Tablas salariales actualizadas.
- [ ] Calendario laboral.
- [ ] Política de turnos.
- [ ] Política de swaps.
- [ ] Límites de jornada.
- [ ] Descansos.
- [ ] Vacaciones.
- [ ] Permisos.
- [ ] Registro horario si aplica.

## Fiscal

- [ ] No presentar impuestos sin autorización.
- [ ] Exportar datos para AEAT/asesor.
- [ ] Mostrar que el cálculo es estimado.
- [ ] Permitir actualizar IRPF.
- [ ] Registrar cambios fiscales.

---

# 29. Checklist para subir a Vercel/GitHub/Netlify sin datos reales

- [ ] Repositorio sin `.env`.
- [ ] Sin claves API.
- [ ] Sin bases de datos.
- [ ] Sin PDF reales.
- [ ] Sin capturas con datos personales.
- [ ] Seed con datos sintéticos.
- [ ] Modo demo activado.
- [ ] Registro público desactivado.
- [ ] Formularios desactivados o protegidos.
- [ ] Logs sin payloads.
- [ ] Analítica sin cookies invasivas o con banner.
- [ ] Política de privacidad si se recogen emails.
- [ ] Enlaces de borrado/exportación si hay cuentas.
- [ ] Proveedor de hosting con DPA disponible.
- [ ] Región UE si se almacenan datos personales.
- [ ] Plan de retirada si se filtra algo.

---

# 30. Arquitectura recomendada según nivel de riesgo

## Nivel 1: Portfolio/demo

Ideal para enseñar.

- GitHub público.
- Vercel frontend.
- Base de datos local o SQLite.
- Datos sintéticos.
- Sin login real.
- Sin documentos.
- Sin IA con datos reales.

Cumplimiento: fácil si no recoges datos personales.

---

## Nivel 2: App personal privada

Para Alejandra y quizá amigas.

- GitHub privado.
- VPS UE o hosting gestionado UE.
- PostgreSQL privado.
- Auth con MFA.
- Datos personales mínimos.
- Nóminas cifradas.
- Sin datos de pacientes.
- Invitaciones solo personales.

Cumplimiento: posible con política, DPA y minimización.

---

## Nivel 3: Uso profesional real

Para hospital o unidad.

- No improvisar en Vercel/Netlify gratuito.
- Hosting sanitario o cloud UE con contrato.
- SSO institucional.
- Auditoría completa.
- Integración con directorio activo.
- Control de accesos.
- Cifrado fuerte.
- DPO/DPIA.
- Formación.
- Soporte y backups.
- Acuerdo con centro.
- Prohibición de usar IA externa sin DPA.

Cumplimiento: solo con validación institucional.

---

# 31. Ejemplo de política de privacidad resumida

```text
Alejandra CuidaMar Pro trata los datos mínimos necesarios para organizar turnos, tareas y vida laboral de la usuaria.

No utilizamos datos de pacientes salvo que exista base legal, autorización institucional y medidas reforzadas. En modo demo, todos los datos son ficticios.

Las nóminas y documentos laborales pertenecen a la usuaria y se protegen con cifrado y control de acceso.

No vendemos datos.

Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad desde el panel de privacidad.

Las invitaciones a terceras personas solo se usan para la finalidad elegida, caducan y pueden revocarse.
```

---

# 32. Ejemplo de aviso de IA dentro de la app

```text
Alejandra IA es una ayuda organizativa. No sustituye a enfermería, RRHH, prevención, asesoría fiscal o legal.

No introduzcas diagnósticos, tratamientos, medicación ni evolución clínica de pacientes.

Si hay una situación urgente, avisa inmediatamente al equipo responsable.

Los cálculos de nómina son estimaciones hasta que se validen con tu convenio, nómina oficial o RRHH.
```

---

# 33. Prompt final “todo en uno” para desarrollo rápido

```text
Crea una aplicación full-stack llamada “Alejandra CuidaMar Pro” para una auxiliar de enfermería. Debe ser segura, privada y configurable.

Funcionalidades principales:
1. Dashboard con próximo turno, tareas, vacaciones pendientes y resumen salarial.
2. Calendario laboral con turnos, libranzas, festivos, vacaciones y solicitudes.
3. Motor de turnos con validación de descansos, solapes, formación y mínimos de unidad.
4. Sistema de cambios de turno con consentimiento, aprobación y auditoría.
5. Módulo de pacientes pseudonomizados con habitación/cama, nivel de dependencia, flags de riesgo y tareas de cuidados auxiliares.
6. Prohibido almacenar diagnóstico, tratamiento, medicación o evolución clínica.
7. Módulo de nómina configurable por convenio: salario base, nocturnidad, festivos, horas extra, guardias, pagas, antigüedad, carrera, IRPF y Seguridad Social.
8. Calculadora de precio hora, precio día, precio festivo, precio nocturno y precio guardia.
9. Explicación línea a línea de una nómina introducida manualmente o parseada localmente.
10. Resumen fiscal anual para preparar la declaración, sin presentar impuestos.
11. Módulo de vacaciones con balance, solicitudes, aprobación y calendario.
12. Módulo de invitaciones con roles limitados: amiga, compañera, supervisora, admin, auditora.
13. Las amigas invitadas solo acceden a espacios personales y plantillas, nunca a pacientes, nóminas o datos laborales sensibles.
14. Modo demo con datos sintéticos.
15. Modo local-first opcional para datos sensibles.
16. Auditoría de accesos y cambios.
17. Exportación y borrado de datos.
18. Asistente IA llamado Alejandra con RAG de convenio cargado, pero con guardrails: sin PHI, sin consejo médico, sin asesoría legal definitiva.

Stack:
Next.js, TypeScript, Tailwind, Prisma, PostgreSQL, Redis, BullMQ, Auth.js, Zod, S3 UE, Resend, Vitest, Playwright, Docker.

Entrega:
- schema.prisma
- estructura de carpetas
- componentes UI
- rutas API
- middlewares RBAC
- motor payroll
- motor scheduling
- seed sintético
- tests
- documentación de privacidad
- guía de despliegue
```

---

# 34. Recomendación final práctica

Si tu objetivo es construir algo rápido, legal y útil sin complicarte demasiado:

## Versión MVP segura

Haz esto:

1. Sube el código a **GitHub privado o público**, pero sin datos reales.
2. Despliega la demo en **Vercel** con datos sintéticos.
3. No permitas registro público.
4. No permitas subir pacientes reales.
5. No permitas subir nóminas reales en la demo.
6. Crea un modo “organización personal”.
7. Permite invitaciones solo para perfiles personales.
8. Si Alejandra quiere gestionar pacientes reales, que sea en modo institucional separado, con autorización, cifrado, auditoría y DPO.
9. Si quieres producción real, usa hosting en UE, PostgreSQL gestionado, backups cifrados y contratos con proveedores.
10. Antes de activar IA con documentos laborales o sanitarios, revisa DPA, retención de logs y redacción de datos sensibles.

---

# 35. Fuentes que deberías verificar antes de implementar

Para hacerlo con máxima seguridad jurídica y técnica, revisa:

## Protección de datos

- Reglamento General de Protección de Datos (RGPD / GDPR), especialmente artículos 5, 6, 9, 12-22, 25, 32, 35.
- Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
- Guías de la Agencia Española de Protección de Datos (AEPD) sobre salud, empleados, brechas de seguridad y privacidad por diseño.

## Sanidad y datos de pacientes

- Ley 41/2002, básica reguladora de la autonomía del paciente y derechos y obligaciones en materia de información y documentación clínica.
- Normativa autonómica aplicable si el centro está en Cataluña.
- Políticas internas del hospital sobre historia clínica, accesos y protección de datos.

## Laboral

- Estatuto de los Trabajadores, especialmente jornada, descansos, vacaciones, salario, horas extra, modificaciones y permisos.
- Convenio colectivo aplicable al centro o servicio.
- Pactos internos de turnos, bolsa, libranzas, carrera profesional o movilidad.
- Normativa de prevención de riesgos laborales.
- Si es personal público, normativa de función pública o estatutaria aplicable.

## Nómina y fiscalidad

- Tesorería General de la Seguridad Social para tipos y bases.
- Agencia Tributaria para IRPF, retenciones y declaración.
- Convenio colectivo para tablas salariales y complementos.
- Normativa vigente sobre registro horario y recibo de salarios.

## Seguridad técnica

- INCIBE, guías de seguridad para desarrollo y cloud.
- OWASP Top 10 y OWASP ASVS.
- Buenas prácticas de cifrado, gestión de secretos y auditoría.

---

## Conclusión

Sí, se puede construir **Alejandra CuidaMar Pro** como plataforma full-stack completa, con turnos, pacientes pseudonomizados, nóminas, vacaciones, declaración, invitaciones y asistente IA. Pero para no violar protección de datos, la clave es:

1. **No mezclar datos sanitarios reales con demos públicas.**
2. **No subir datos personales reales a GitHub/Vercel/Netlify.**
3. **Usar datos sintéticos para demo.**
4. **Minimizar datos: habitación/cama, no nombres.**
5. **No almacenar evolución clínica en la app.**
6. **Cifrar y restringir nóminas y datos laborales.**
7. **Permitir invitaciones solo a espacios personales, no laborales/sanitarios.**
8. **Si se usa en un hospital real, validar con DPO, RRHH y seguridad.**
