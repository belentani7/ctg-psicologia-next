# Educación Integral para Jóvenes Migrantes

- Chat ID: `8d50782b-f2a6-4908-bfd0-538c7caf3e56`
- Mensajes: 2
- Periodo: 2026-09-12 23:57 UTC → 2026-09-12 23:57 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-09-12 23:57

para chico de brasil 14 años se mueve a españa, necesita app o web mejor si con tutor inteligente, mejor si con ia. para aprender español catalan ingles, asignaturas eso, matematicas. buscame progundamente en github y en toda internet, gratis open

## [ASSISTANT] 2026-09-12 23:57 · Qwen3.7-Plus

Para un estudiante de 14 años (edad de 1º a 3º de la ESO) que se traslada de Brasil a España, la transición lingüística y académica requiere herramientas específicas. Al ser hablante nativo de portugués, la adquisición del español y el catalán será rápida a nivel conversacional, pero el reto real será el **vocabulario académico** y la **gramática formal**. 

A continuación, se presenta una investigación exhaustiva de aplicaciones, plataformas web y repositorios de GitHub que son **gratuitos y de código abierto (Open Source) o de acceso abierto (Open Access)**, integrando Inteligencia Artificial y enfocados en el currículo de la ESO.

---

### 1. Matemáticas y Asignaturas STEM (ESO) con IA y Open Source

Las matemáticas en la ESO española (1º a 4º) abarcan desde aritmética básica hasta álgebra, geometría analítica y estadística.

*   **GeoGebra (Web / App / Open Source)**
    *   **Fuente GitHub:** `geogebra/geogebra`
    *   **Detalles:** Es el estándar de oro en software matemático educativo de código abierto. GeoGebra ha integrado recientemente funciones de **IA (GeoGebra Math Apps)** que permiten resolver ecuaciones paso a paso, graficar funciones complejas y verificar ejercicios de geometría.
    *   **Utilidad para la ESO:** Fundamental para álgebra y geometría. Permite crear o usar "Libros" (apuntes interactivos) creados por profesores españoles alineados exactamente con el currículo de la ESO.
    *   **Coste:** 100% Gratis y Open Source.

*   **CK-12 (Web / App / IA Gratuita)**
    *   **Plataforma:** `ck12.org` (Acceso abierto, no open-source en código, pero 100% gratuito).
    *   **Detalles:** Cuenta con **Flexi AI**, un tutor inteligente gratuito especializado en STEM. El estudiante puede hacer preguntas sobre conceptos de matemáticas, física o química de la ESO, y la IA le explicará el concepto, le dará ejemplos y le generará ejercicios de práctica.
    *   **Idioma:** Disponible en español. Los contenidos están adaptados a niveles de secundaria.

*   **Khan Academy (Web / App / Acceso Abierto)**
    *   **Plataforma:** `es.khanacademy.org`
    *   **Detalles:** Aunque su código no es abierto, es la plataforma de acceso abierto más grande del mundo. Para la ESO en España, su curso de Matemáticas está perfectamente estructurado. 
    *   **Nota sobre IA:** Su tutor de IA avanzado (Khanmigo) es de pago, pero el sistema de **práctica inteligente** de la plataforma gratuita actúa como un tutor adaptativo, identificando los puntos débiles del alumno y ajustando la dificultad.

---

### 2. Idiomas: Español, Catalán e Inglés (Enfoque Open Source)

Para un brasileño, Duolingo es ineficiente para el español (pérdida de tiempo en basics). El enfoque debe ser vocabulario académico, falsos amigos y estructura gramatical. El catalán requiere un enfoque desde cero o intercomprensión.

*   **Anki (Web / Android / Open Source)**
    *   **Fuente GitHub:** `ankitects/anki` (Código base), `ankidroid/AnkiDroid` (Android).
    *   **Detalles:** Sistema de repetición espaciada (SRS) de código abierto. Es la herramienta más potente para memorizar vocabulario.
    *   **Estrategia para el perfil:** 
        *   *Español:* Descargar mazos (decks) de "Portugués a Español: Falsos Amigos" o "Español Académico".
        *   *Catalán:* Buscar mazos de "Catalan for Spanish/Portuguese speakers".
        *   *Inglés:* Mazos de "ESO English Vocabulary" o "Cambridge PET/B1" (nivel exigido en 4º ESO).
    *   **IA Integrada:** Se pueden usar add-ons de IA en Anki para generar automáticamente tarjetas con ejemplos de contexto y audio.

*   **LibreLingo (Web / Open Source)**
    *   **Fuente GitHub:** `LibreLingo/LibreLingo`
    *   **Detalles:** Es la alternativa de código abierto a Duolingo. Funciona directamente en el navegador. Actualmente tiene cursos de Español para hablantes de inglés, y Inglés para hablantes de español/portugués. Es totalmente gratuito y sin anuncios.

*   **LanguageTool (Web / Extensión / Open Source)**
    *   **Fuente GitHub:** `languagetool-org/languagetool`
    *   **Detalles:** Corrector gramatical y de estilo impulsado por IA. Es fundamental para que el chico escriba redacciones en español, catalán e inglés y reciba correcciones instantáneas con explicaciones de la regla gramatical.
    *   **Idiomas:** Soporta Español, Catalán e Inglés con alta precisión.

---

### 3. Tutores Inteligentes 100% Open Source (Desde GitHub)

Si el estudiante o sus padres tienen conocimientos técnicos básicos y quieren un **Tutor IA privado, ilimitado y 100% gratuito** (sin pagar APIs ni suscripciones), la mejor opción es desplegar herramientas de GitHub localmente o en la nube gratuita.

*   **Open WebUI + Ollama (La mejor alternativa a Khanmigo/ChatGPT)**
    *   **Fuente GitHub:** `open-webui/open-webui` y `ollama/ollama`
    *   **Cómo funciona:** Ollama permite descargar modelos de lenguaje de IA (como Llama 3 o Mistral) y ejecutarlos en el propio ordenador (PC/Mac). Open WebUI proporciona una interfaz web idéntica a ChatGPT.
    *   **Configuración para Tutor ESO:** Se puede configurar el "System Prompt" (Instrucción del sistema) en Open WebUI para que la IA actúe exclusivamente como un tutor de la ESO. 
    *   *Ejemplo de Prompt:* "Actúa como un profesor de matemáticas y ciencias de la ESO en España. Explica los conceptos paso a paso, no des la respuesta final inmediatamente, haz preguntas guía para que el alumno de 14 años llegue a la conclusión. Usa un tono motivador."
    *   **Ventaja:** Cero coste, privacidad total, sin límites de mensajes.

*   **Socratic by Google (Alternativa Web)**
    *   Aunque no es open-source, es gratuita y utiliza IA de visión por computadora. El alumno sube una foto de un problema de matemáticas o física de su libro de texto de la ESO, y la IA desglosa la solución paso a paso, proporcionando enlaces a recursos para entender el concepto base.

---

### 4. Recursos Específicos para el Sistema Educativo Español (ESO)

Para integrarse en el sistema español, es vital utilizar materiales alineados con la LOMLOE (la ley educativa actual).

*   **Procomún (MEFP - Ministerio de Educación de España)**
    *   **Web:** `procomun.educalab.es`
    *   **Detalles:** Red de recursos educativos abiertos (REA). Aquí los profesores españoles suben unidades didácticas completas (Biología, Matemáticas, Lengua) para la ESO. Son de código abierto (Creative Commons) y se pueden descargar o usar online.

*   **XTEC (Si se traslada a Cataluña)**
    *   **Web:** `xtec.gencat.cat`
    *   **Detalles:** Si el destino es Cataluña, el catalán es lengua vehicular. XTEC es el portal educativo de la Generalitat. Contiene miles de recursos abiertos, libros de texto digitales y herramientas interactivas para todas las asignaturas de la ESO en catalán. Es la mejor fuente para aprender el vocabulario técnico de las matemáticas o la historia en catalán.

*   **EducaPlus / Portal Educativo de la ONCE**
    *   Recursos adaptados y abiertos para diversas necesidades, útiles si se requiere refuerzo en comprensión lectora o accesibilidad.

---

### 5. Hoja de Ruta Estratégica para el Estudiante

Para maximizar el éxito en los primeros 6 meses en España, se recomienda la siguiente distribución de herramientas:

1.  **Inmersión Académica (Primeras 4 semanas):**
    *   Usar **Anki** diariamente (20 min) para memorizar el vocabulario transversal de las asignaturas (ej. *arrel/arrel cuadrada* en catalán, *ecuación de segundo grado*, *sujeto/predicado*).
    *   Instalar **LanguageTool** en el navegador para corregir cada texto que escriba para el instituto.

2.  **Refuerzo de Matemáticas y Ciencias (Continuo):**
    *   Utilizar **GeoGebra** para visualizar los conceptos que no entienda en clase.
    *   Usar **CK-12 (Flexi AI)** o **Khan Academy** para practicar ejercicios de matemáticas en español hasta que el lenguaje deje de ser una barrera para el razonamiento lógico.

3.  **Tutoría Personalizada (Fines de semana):**
    *   Configurar **Open WebUI + Ollama** (o usar la versión web gratuita de HuggingChat, `huggingface.co/chat`, que es open-source y gratuita) para que le explique temas de Historia, Biología o Física de la ESO en un lenguaje sencillo, adaptado a su nivel de español en evolución.

4.  **Inglés (Mantenimiento y mejora):**
    *   Dado que el portugués, español y catalán consumirán mucho esfuerzo cognitivo al principio, mantener el inglés con **LibreLingo** o consumiendo media en inglés (YouTube, videojuegos) ayudará a mantener la neuroplasticidad para los idiomas sin saturar el estudio formal.

Esta combinación garantiza que el estudiante tenga acceso a tecnología de punta (IA), materiales estrictamente alineados con el currículo español (ESO), y herramientas de código abierto que aseguran la gratuidad y la libertad de uso a largo plazo.
