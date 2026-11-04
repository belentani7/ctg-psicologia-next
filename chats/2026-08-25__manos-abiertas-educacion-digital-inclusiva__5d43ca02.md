# Manos Abiertas: Educación Digital Inclusiva

- Chat ID: `5d43ca02-3484-47db-80f6-61aa328abb5e`
- Mensajes: 6
- Periodo: 2026-08-25 15:12 UTC → 2026-08-25 15:18 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-25 15:12

con el avance de la ia , la cantidad de recursos que hay en githubm hugging face, la informacion disponible. que tal posible y probable es de craeat una plataforma digital para personas no familiarizadas con las nuevas tecnogias, ordenadores, telefonos, intelifencias artificiales. si lo c¡hicietamos en españa como el nombre de manos abiertas. y quisieramos enseñar de nivel 0 a nivel experto, windows, linux IA, pack office, html recreando entornos dfigitales, assistente tutor presente, 39 idiomas hertamirenta para crear cv grauito, que tantas cosas se podrian hacer, como exactament se trairia esa ifotmacion  que tan profundo preciso deberia ser esos cursos, hasta cuainto se podria llegar, donde estan todas las reposicipnes de git necesarioa para eso, contestame con el maximo de respuestas resoliutivas

## [ASSISTANT] 2026-08-25 15:12 · Qwen3.7-Plus

Es **altamente posible y técnicamente probable** crear una plataforma como "Manos Abiertas" en España en 2026. La convergencia de modelos de lenguaje de código abierto (Hugging Face), sistemas de gestión de aprendizaje (LMS) maduros y el marco normativo europeo de competencias digitales (DigComp) ha eliminado las barreras técnicas que hace 5 años hacían esto inviable. A continuación, se detalla una hoja de ruta resolutiva, sin rellenos, con fuentes y repositorios específicos.

---

### 1. Viabilidad y Probabilidad
La probabilidad de éxito técnico es **muy alta (>85%)**, siempre que se priorice la experiencia de usuario (UX) para personas con alfabetización digital cero. La viabilidad económica y operativa depende de alinearse con iniciativas públicas como el plan **España Digital 2026** y los programas de **Red.es** de competencias digitales básicas, que ya han demostrado su eficacia formando a cientos de miles de personas en el territorio nacional [[24]]. El principal desafío no es la tecnología, sino el diseño pedagógico y la contención del "ruido" técnico para el usuario final.

---

### 2. Qué se podría hacer exactamente (Alcance del Proyecto)
La plataforma puede estructurarse en 4 pilares interconectados:
- **Ruta de Aprendizaje Progresiva (Nivel 0 a Experto)**: Basada en el marco **DigComp 3.0** (Marco Europeo de Competencia Digital Ciudadana) [[42]]. 
  - *Nivel 0*: Encendido, uso del ratón/táctil, navegación web segura, prevención de estafas.
  - *Nivel Intermedio*: Paquete Office (alternativas libres como LibreOffice), HTML básico, uso consciente de IA.
  - *Nivel Experto*: Administración de sistemas Linux, desarrollo web, automatización con Python y fine-tuning de modelos locales.
- **Entornos Digitales Recreados**: Simuladores en el navegador (vía WebAssembly) que permitan practicar con un "falso" escritorio de Windows o una terminal de Linux sin riesgo a romper el sistema real del usuario.
- **Asistente Tutor Presente**: Un sistema híbrido. Un agente de IA con "Teoría de la Mente" que adapta la explicación al estado de frustración o comprensión del alumno [[12]], complementado con intervención humana remota (screen-sharing) para el Nivel 0.
- **Multilingüismo (39 idiomas)**: Integración de modelos de traducción neuronal de código abierto para atender a la diversidad lingüística en España (incluyendo lenguas cooficiales y lenguas de inmigrantes).
- **Creador de CV Gratuito**: Una herramienta integrada que genere currículums profesionales sin muros de pago ni publicidad, exportables a PDF.

---

### 3. Cómo se traería y estructuraría la información (Arquitectura de Datos)
No se debe "inventar" el contenido, sino curar y adaptar recursos existentes mediante una arquitectura **RAG (Retrieval-Augmented Generation)**:
1. **Fuentes de Verdad**: Ingesta de documentos oficiales con licencia abierta: manuales de *Red.es*, *Instituto Nacional de Tecnologías Educativas (INTEF)* [[25]], *Linux Documentation Project*, y *Microsoft Learn*.
2. **Vectorización**: Almacenar estos textos en una base de datos vectorial local (ej. Qdrant o ChromaDB) para que el tutor de IA responda solo con información verificada, evitando alucinaciones.
3. **Curación Humana**: Un equipo pedagógico debe transformar los manuales técnicos en "micro-lecciones" con lenguaje llano, apoyadas en imágenes y audio (Text-to-Speech), crucial para usuarios con dificultades de lectura o visión [[17]].

---

### 4. Profundidad y Precisión de los Cursos
La precisión debe ser **quirúrgica en el Nivel 0** y **técnica en el Nivel Experto**:
- **Precisión en Nivel 0**: Cero jerga. No usar palabras como "navegador", "URL" o "backend" sin una analogía inmediata (ej. "el navegador es como la ventanilla del banco"). Evaluación mediante tareas prácticas (ej. "envía un correo a este address de prueba"), no con tests teóricos.
- **Precisión en Nivel Experto**: Alineación con certificaciones oficiales (ej. LPI para Linux, certificaciones de la Fundación Europea de Información). Los entornos de práctica deben ser contenedores Docker reales que el usuario pueda manipular.

---

### 5. Hasta cuánto se podría llegar (Potencial Máximo)
- **Integración con el Sistema Público**: Convertirse en el proveedor tecnológico de los planes de alfabetización de ayuntamientos y comunidades autónomas, emitiendo certificaciones con validez en el Sistema Nacional de Cualificaciones Profesionales.
- **Inclusión Laboral Real**: El módulo de CV y habilidades puede conectarse directamente con bolsas de empleo de inserción (economía social), cerrando el ciclo: *formación -> certificación -> empleo*.
- **Escalabilidad Europea**: Al usar estándares DigComp y modelos multilingües, la plataforma es exportable a cualquier país de la UE con mínimos ajustes.

---

### 6. Repositorios de GitHub y Hugging Face Necesarios (Hoja de Recursos)
Aquí están las herramientas de código abierto exactas para construir cada módulo sin empezar de cero:

#### A. Sistema de Gestión de Aprendizaje (LMS Base)
- **Moodle** (https://github.com/moodle/moodle): El LMS de código abierto más usado del mundo, con más de 300 millones de usuarios [[1]]. La versión 4.3+ ya integra funcionalidades de IA y es altamente personalizable para interfaces simplificadas [[6]].
- **Open edX** (https://github.com/openedx/edx-platform): Alternativa robusta usada por universidades, ideal para gestionar rutas de aprendizaje complejas.

#### B. Asistente Tutor de IA (Pedagogía Adaptativa)
- **LlamaTutor** (https://github.com/Nutlope/llamatutor): Tutor de IA de código abierto impulsado por Llama 3.1, diseñado para guiar en lugar de dar respuestas directas [[14]].
- **TutorGPT** o **DeepTutor**: Frameworks que utilizan razonamiento de "Teoría de la Mente" para adaptar las explicaciones al estado mental inferido del alumno [[12]], [[15]].
- **Modelos locales**: Despliegue de **Qwen2.5** o **Llama-3.1-8B-Instruct** vía **Ollama** o **vLLM** para garantizar que los datos de los usuarios no salgan de servidores europeos (cumplimiento RGPD).

#### C. Traducción a 39 Idiomas
- **NLLB (No Language Left Behind) de Meta** (https://huggingface.co/facebook/nllb-200-distilled-600M): Modelo de traducción neuronal de código abierto que soporta 200 idiomas, incluyendo lenguas de bajos recursos [[33]]. 
- **nllb-api** (https://github.com/winstxnhdw/nllb-api): Implementación optimizada para ejecutarse en CPU con CTranslate2, reduciendo drásticamente los costes de infraestructura [[32]].

#### D. Creador de CV Gratuito
- **Reactive Resume** (https://github.com/amruthpillai/reactive-resume): Constructor de currículums gratuito, de código abierto, sin anuncios ni muros de pago. Permite crear, actualizar y compartir CVs profesionales en minutos [[16]].
- **OpenResume** (https://github.com/xitanggg/open-resume): Alternativa potente que incluye también un analizador (parser) de CV para dar feedback al usuario sobre cómo mejorar su documento [[19]].

#### E. Entornos Simulados (Windows/Linux/HTML)
- **WebVM** (https://github.com/leaningtech/webvm): Máquina virtual de Linux (Alpine) que se ejecuta completamente en el navegador mediante WebAssembly. Perfecto para enseñar Linux sin que el usuario instale nada [[17]].
- **freeCodeCamp** (https://github.com/freeCodeCamp/freeCodeCamp): El currículo de HTML, CSS y JavaScript más probado del mundo, con licencia abierta, adaptable para el módulo de desarrollo web.

---

### 7. Recomendaciones Estratégicas Críticas para "Manos Abiertas"
1. **Diseño "Kiosco"**: La interfaz para el Nivel 0 debe tener botones enormes, alto contraste, navegación por voz (usando modelos como **Whisper** de OpenAI para transcripción local) y retroalimentación auditiva.
2. **Soberanía de Datos**: Alojar la infraestructura en proveedores europeos (ej. OVHcloud, Scaleway o servicios de la nube pública española) para garantizar la confianza de usuarios vulnerables y cumplir con la normativa de protección de datos.
3. **Modelo de Sostenibilidad**: La plataforma debe ser gratuita para el usuario final. La financiación debe buscarse a través de fondos **NextGenerationEU**, convenios con **Red.es** (que ya colabora con áreas de mayores en ayuntamientos [[26]]), o un modelo B2B donde las empresas paguen por acceder a la bolsa de talento certificada por la plataforma.

**Conclusión**: La tecnología para construir "Manos Abiertas" ya existe, está madura y es gratuita en su núcleo. El éxito no dependerá del código, sino de la empatía en el diseño instruccional y la capacidad de tejer alianzas con la administración pública española para garantizar la llegada a la población que realmente no sabe cómo empezar.

## [USER] 2026-08-25 15:15

mas informacion

## [ASSISTANT] 2026-08-25 15:15 · Qwen3.7-Plus

Aquí tienes una expansión técnica, pedagógica y estratégica de nivel profundo para materializar **"Manos Abiertas"**. Esta información está orientada a la ejecución real, con arquitectura de software, principios de diseño instruccional y vías de financiación verificables en el ecosistema español actual.

---

### 1. Arquitectura Técnica de Producción (El Stack Concreto)
Para que la plataforma sea escalable, segura y gratuita para el usuario final, se debe evitar el *vendor lock-in* y usar una arquitectura modular de código abierto:

- **Frontend (Interfaz de Usuario)**: **Next.js** o **SvelteKit**. Son rápidos, permiten renderizado del lado del servidor (SSR) para un SEO óptimo y funcionan bien en dispositivos de gama baja, comunes en usuarios con baja alfabetización digital [[17]].
- **Backend y Gestión de Usuarios**: **Node.js** con **NestJS** o **Python (FastAPI)**. FastAPI es ideal para integrar posteriormente los microservicios de IA.
- **Base de Datos**: **PostgreSQL** para datos relacionales (usuarios, progreso, certificados) y **Qdrant** o **ChromaDB** (bases de datos vectoriales) para el sistema RAG del tutor de IA.
- **Capa de IA (Orquestación)**: **LangChain** o **LlamaIndex** para conectar el modelo de lenguaje local con la base de conocimientos vectorizada. El modelo recomendado para despliegue local en España (cumpliendo RGPD) es **Qwen2.5-7B-Instruct** o **Llama-3.1-8B**, ejecutados vía **vLLM** o **Ollama** en servidores con GPU (ej. NVIDIA L4 o A10G).
- **Traducción en Tiempo Real**: API autohospedada de **NLLB-200** (No Language Left Behind) usando **CTranslate2**, que permite traducción de alta calidad a 200 idiomas consumiendo solo CPU, reduciendo costes de infraestructura en un 80% frente a APIs comerciales [[32]].

---

### 2. Ingeniería Pedagógica y UX/UI para el "Nivel 0" (Accesibilidad Radical)
Enseñar a alguien que nunca ha usado un ratón requiere abandonar la lógica del "desarrollador". El diseño instruccional con enfoque UX/UI es un mandato legal y ético para garantizar la equidad en colectivos vulnerables [[25]]. 

- **Principio de "Andamiaje Digital"**: Nunca presentar más de un concepto nuevo por pantalla. Ejemplo: antes de enseñar a "crear una carpeta", el sistema debe validar que el usuario entiende qué es un "clic izquierdo" mediante un minijuego de 10 segundos.
- **Diseño "Kiosco" y Tolerancia al Error**: 
  - Botones con un área táctil mínima de 48x48 píxeles (estándar WCAG 2.1).
  - Lenguaje no técnico: En lugar de "Error 404: Servidor no encontrado", usar "No hemos podido encontrar esta página. ¿Quieres volver al inicio?".
  - Retroalimentación multimodal: Cada acción importante debe tener un icono claro + texto breve + sonido suave de confirmación (crucial para usuarios con dificultades visuales o cognitivas) [[28]].
- **Modo "Asistente Presente"**: Integración de **WebRTC** (vía **PeerJS** o **Jitsi Meet** de código abierto) que permita a un voluntario humano solicitar permiso para tomar el control del navegador del usuario y guiarle en tiempo real, algo que la IA por sí sola no puede resolver en el nivel 0 absoluto.

---

### 3. Simulación de Entornos (Repositorios Específicos)
Para enseñar Windows, Linux o HTML sin que el usuario instale nada ni corra el riesgo de "romper" su ordenador, se utilizan entornos virtualizados en el navegador:

- **Simulador de SO Interactivo**: Existen proyectos en GitHub como simuladores de SO basados en web (con Next.js/React) que replican la gestión de ventanas, menús de inicio y aplicaciones básicas directamente en el navegador [[13]], [[17]]. Esto permite crear un "falso Windows" o "falso macOS" donde el usuario practica arrastrar archivos o abrir menús de forma segura.
- **Terminal Linux Real en el Navegador**: **WebVM** (de Leaning Tech) o **Xterm.js** conectado a un contenedor **Docker** efímero en el backend. Cada vez que el usuario inicia el módulo de Linux, se le asigna un contenedor que se destruye al cerrar la pestaña. Es un Linux real, pero aislado y seguro [[17]].
- **Editor de Código Progresivo**: Integración de **Monaco Editor** (el motor de VS Code) en la web, preconfigurado con plantillas de HTML/CSS. El usuario ve el código a la izquierda y el resultado en tiempo real a la derecha, basado en la metodología de **freeCodeCamp** [[17]].

---

### 4. Estrategia de Financiación y Alianzas en España (2025-2026)
El modelo de negocio debe ser **gratuito para el usuario final**, sostenido por fondos públicos y alianzas estratégicas. España tiene un ecosistema activo de financiación para este fin exacto:

- **Programa "Capacitación Digital de la Ciudadanía" de Red.es**: Financiados por los Fondos Next Generation EU (Componente 19 del Plan de Recuperación). Red.es habilita convocatorias periódicas para entidades que impartan formación en competencias digitales básicas [[2]], [[3]]. Tu plataforma podría ser el socio tecnológico de una entidad sin ánimo de lucro que opte a estas ayudas.
- **Programa "Generación D"**: Iniciativa de Red.es y el Ministerio para la Transformación Digital que busca formar a colectivos vulnerables. Ofrecen cursos de 8 horas totalmente gratuitos y buscan aliados para escalar [[1]], [[7]].
- **Fundación ONCE y "Xtalento Digital"**: Tienen líneas de financiación específicas para la inclusión digital de personas con discapacidad o en riesgo de exclusión, alineadas con los fondos europeos [[4]], [[10]].
- **Diputaciones y Ayuntamientos**: Muchos municipios tienen partidas presupuestarias para "Envejecimiento Activo" o "Alfabetización Digital de Mayores". La plataforma puede venderse como un servicio *white-label* (marca blanca) a estos ayuntamientos.

---

### 5. Hoja de Ruta de Ejecución (Roadmap de 12 Meses)

| Fase | Duración | Hitos Técnicos y Operativos |
| :--- | :--- | :--- |
| **Fase 1: MVP (Producto Mínimo Viable)** | Meses 1-3 | - Despliegue de Moodle personalizado con tema UX de alto contraste.<br>- Integración de **Reactive Resume** para el módulo de CV.<br>- Creación de 5 micro-cursos de "Nivel 0" (ratón, teclado, navegador, correo, seguridad básica). |
| **Fase 2: Capa de IA y Simulación** | Meses 4-6 | - Implementación del simulador de SO web y terminal Linux (WebVM).<br>- Despliegue del tutor de IA (Llama-3.1/Qwen2.5) con RAG sobre los manuales de Red.es.<br>- Integración de NLLB para traducción a catalán, euskera, gallego, árabe y rumano (top 5 lenguas migrantes en España). |
| **Fase 3: Piloto Controlado** | Meses 7-9 | - Prueba con 200 usuarios reales en colaboración con un centro cívico o asociación de mayores.<br>- Recogida de métricas de usabilidad (tasa de abandono, tiempo en tarea, errores de clic).<br>- Ajuste del andamiaje pedagógico basado en datos reales. |
| **Fase 4: Escalado y Certificación** | Meses 10-12 | - Solicitud de acreditación de las horas formativas a través de entidades colaboradoras de Red.es.<br>- Apertura del módulo "Nivel Experto" (Linux, HTML, Python).<br>- Lanzamiento público y campaña de comunicación institucional. |

---

### 6. Consideración Crítica de Seguridad y Ética (RGPD)
Dado que la plataforma manejará datos de personas potencialmente vulnerables (mayores, personas en inserción laboral):
1. **Minimización de Datos**: No pedir DNI ni datos sensibles en el registro inicial. Usar un sistema de "usuario anónimo con progreso guardado por token" hasta que sea estrictamente necesario para la certificación.
2. **Soberanía de Datos**: Todos los servidores (base de datos, modelos de IA, logs) deben estar físicamente ubicados en la Unión Europea (ej. centros de datos de **OVHcloud** en Francia o **Scaleway**).
3. **Transparencia de la IA**: El tutor debe identificarse siempre como una IA y ofrecer inmediatamente la opción de "hablar con una persona" si el usuario muestra signos de frustración (detectado por análisis de sentimiento en las consultas o múltiples reintentos fallidos en una tarea).

Esta estructura convierte la idea de "Manos Abiertas" de un concepto teórico a un proyecto de ingeniería social y tecnológica ejecutable, con herramientas reales, financiación identificada y un camino claro hacia el impacto social medible.

## [USER] 2026-08-25 15:18

maazino de repositorios necesarios indicaciones de como hacer los cursos

## [ASSISTANT] 2026-08-25 15:18 · Qwen3.7-Plus

A continuación, se presenta el **Catálogo Exhaustivo (Magazine) de Repositorios y Herramientas de Código Abierto** requeridas, seguido de las **Instrucciones Técnicas y Pedagógicas paso a paso** para la creación de los cursos, desde el Nivel 0 hasta el Nivel Experto.

---

### PARTE I: MAGAZINE DE REPOSITORIOS Y HERRAMIENTAS NECESARIAS

Este catálogo está seleccionado por su madurez, licencia abierta (MIT, GPL, Apache) y adecuación específica para un entorno educativo inclusivo.

#### 1. Núcleo de la Plataforma (LMS y Gestión)
*   **Chamilo LMS** (`github.com/chamilo/chamilo-lms`): A diferencia de Moodle (que puede ser abrumador), Chamilo está diseñado específicamente para ser intuitivo para profesores y alumnos con baja alfabetización digital. Es el estándar en proyectos de cooperación digital en Europa y Latinoamérica.
*   **H5P** (`github.com/h5p/h5p-cli` y `h5p.org`): **Crucial**. Es el estándar de oro para crear contenido interactivo (vídeos interactivos, presentaciones con preguntas, arrastrar y soltar). Se integra como plugin en Chamilo/Moodle.

#### 2. Simulación de Entornos (Sandboxes Seguros)
*   **noVNC** (`github.com/novnc/noVNC`): Implementación VNC mediante el protocolo WebSocket. Permite transmitir el escritorio real de un servidor Linux o Windows al navegador del usuario. *Uso:* El alumno ve y controla un escritorio real de Windows 10 o Ubuntu en su navegador sin instalar nada.
*   **WebVM** (`github.com/leaningtech/webvm`): Máquina virtual completa que corre en el navegador vía WebAssembly. Ideal para enseñar terminal de Linux y sistemas de archivos de forma aislada.
*   **JupyterLab** (`github.com/jupyterlab/jupyterlab`): Entorno interactivo para los módulos de Python, HTML y Ciencia de Datos. Permite ejecutar código en bloques y ver el resultado inmediatamente.

#### 3. Inteligencia Artificial y Tutoría (RAG y LLMs)
*   **Anything-LLM** (`github.com/Mintplex-Labs/anything-llm`): La herramienta más sencilla para crear un sistema RAG (Retrieval-Augmented Generation) local. Permite subir los PDFs y manuales de los cursos, y crea un chatbot que responde *exclusivamente* basándose en esos documentos, evitando alucinaciones.
*   **Ollama** (`github.com/ollama/ollama`): Motor para correr modelos locales (Llama-3, Qwen2.5) en el servidor de forma sencilla.
*   **LocalXpose / Cloudflare Tunnels** (`github.com/cloudflare/cloudflared`): Para exponer los servicios locales del servidor a los alumnos de forma segura sin abrir puertos en el firewall.

#### 4. Herramientas de Apoyo (CV, Traducción, Accesibilidad)
*   **Reactive Resume** (`github.com/amruthpillai/reactive-resume`): Creador de CVs gratuito, sin anuncios, con plantillas ATS-friendly (optimizadas para sistemas de recursos humanos).
*   **Argos Translate** (`github.com/argosopentech/argos-translate`): Alternativa offline y ligera a NLLB para traducción de interfaces en tiempo real si los recursos de servidor son limitados.
*   **WAVE Evaluation API** (`github.com/w3c/wcag-act-rules`): Para auditar automáticamente que las páginas de los cursos cumplan con la normativa WCAG 2.1 (Accesibilidad web).

---

### PARTE II: INSTRUCCIONES PARA CREAR LOS CURSOS (METODOLOGÍA)

Crear cursos para personas que nunca han tocado un ordenador (Nivel 0) requiere un cambio de paradigma: no se enseña tecnología, se enseña una **nueva motricidad y lógica espacial**.

#### FASE 1: Diseño Curricular (Alineación con DigComp 2.2)
No inventes los temas. Estructura los cursos basándote en las 5 áreas del marco europeo **DigComp 2.2**:
1.  Información y alfabetización informacional.
2.  Comunicación y colaboración.
3.  Creación de contenido digital.
4.  Seguridad.
5.  Resolución de problemas.

#### FASE 2: Creación de Contenido para el NIVEL 0 (Alfabetización Básica)
El objetivo aquí es la **supervivencia digital** y la pérdida del miedo.

1.  **Formato de los Materiales (Regla de la Lectura Fácil):**
    *   **Texto:** Frases de máximo 15 palabras. Un solo concepto por párrafo. Uso de tipografía *sans-serif* (ej. Verdana o Atkinson Hyperlegible) a tamaño mínimo 16px.
    *   **Visuales:** No uses iconos abstractos (ej. una "nube" para internet). Usa capturas de pantalla **reales** del sistema operativo, con un círculo rojo grueso y una flecha indicando exactamente dónde hacer clic.
2.  **Producción de Vídeos (Tutoriales Screencast):**
    *   Graba la pantalla real.
    *   **El ratón debe ser gigante** (configura el puntero del OS para que sea grande y con rastro visual).
    *   Habla despacio, narrando la acción *antes* de hacerla: "Ahora vamos a buscar la letra 'E' mayúscula en el teclado... la encontramos aquí a la derecha. Ahora hacemos un clic izquierdo".
3.  **Implementación Técnica en el LMS (Usando H5P):**
    *   No subas el vídeo como un MP4 pasivo. Usa la herramienta **H5P Interactive Video**.
    *   *Cómo funciona:* El vídeo se pausa automáticamente a los 10 segundos y aparece un botón en la pantalla: "Haz clic en el icono de la carpeta". Si el alumno hace clic bien, el vídeo sigue. Si falla, le muestra un mensaje de ánimo y le deja reintentar. Esto obliga a la práctica motora.

#### FASE 3: Creación de Contenido para NIVELES INTERMEDIO Y EXPERTO
El objetivo aquí es la **competencia técnica y la autonomía**.

1.  **Metodología de Aprendizaje Basado en Retos (ABR):**
    *   Abandona la teoría frontal. El curso debe empezar con el problema: "Tu jefe te ha pedido que extraigas los correos de este archivo de texto y los ponga en una hoja de cálculo".
    *   El alumno debe investigar y usar las herramientas para resolverlo.
2.  **Implementación de Entornos Sandbox (Usando noVNC y WebVM):**
    *   Para el módulo de **Linux/Redes**: Integra **noVNC** en el LMS. El alumno entra a la web y tiene un escritorio Ubuntu completo en su navegador. El ejercicio es: "Abre la terminal, usa el comando `ls` para ver los archivos y luego `mkdir` para crear una carpeta". Si rompen el sistema, al recargar la página, el contenedor Docker se reinicia.
    *   Para el módulo de **HTML/Web**: Usa **JupyterLab** o integraciones de **Monaco Editor** donde el código se escribe a la izquierda y el renderizado del navegador se ve a la derecha en tiempo real.

#### FASE 4: Configuración del "Asistente Tutor IA" (El Copiloto Pedagógico)
La IA no debe dar las respuestas, debe actuar como un tutor socrático.

1.  **Ingesta de Documentos (RAG):**
    *   Sube a **Anything-LLM** todos los manuales de los cursos, los guiones de los vídeos y la documentación oficial de Red.es.
2.  **Ingeniería del Prompt del Sistema (System Prompt):**
    *   Configura el modelo (ej. Llama-3.1-8B) con el siguiente *System Prompt* estricto:
    > *"Eres 'Manos', el asistente de la plataforma Manos Abiertas. Tu usuario puede ser una persona mayor o con nula experiencia tecnológica. Reglas inquebrantables: 1. NUNCA des la respuesta final o el código completo de golpe. 2. Responde siempre con frases cortas y sencillas. 3. Si el usuario está atascado, dale solo el primer paso y pregúntale si lo ha completado. 4. Usa analogías de la vida cotidiana (ej. comparar una carpeta con una carpeta física de oficina). 5. Si detectas frustración, ofrece inmediatamente la opción de 'Hablar con un tutor humano'."*
3.  **Interfaz de Chat:**
    *   El chat debe tener un botón de "Leer en voz alta" (Text-to-Speech) siempre visible, y un botón de "Escribir por voz" (Speech-to-Text) para usuarios que no dominen el teclado físico.

#### FASE 5: Evaluación, Certificación y Gamificación
Los exámenes tradicionales generan ansiedad y abandono en adultos en proceso de alfabetización.

1.  **Evaluación Continua:**
    *   La calificación se basa en la finalización de los interactivos H5P y los retos en los sandboxes.
2.  **Sistema de Open Badges (Insignias Abiertas):**
    *   Utiliza el estándar **Open Badges 3.0** (respaldado por la Comisión Europea).
    *   En lugar de un diploma en PDF al final de un curso de 100 horas, el usuario gana insignias digitales verificables por cada micro-habilidad superada (ej. Insignia "Navegación Segura", Insignia "Creación de CV").
    *   *Repositorio útil:* `github.com/1EdTech/openbadges-specification`.
3.  **El Módulo de CV como Cierre del Ciclo:**
    *   Al finalizar el nivel intermedio, el usuario accede a **Reactive Resume**.
    *   El tutor de IA le hace preguntas (vía chat o voz) sobre su experiencia, y la IA va rellenando los campos del CV automáticamente. El usuario solo tiene que revisar, ajustar y exportar el PDF. Esto proporciona una victoria tangible e inmediata (un CV profesional) que justifica todo el esfuerzo de aprendizaje.
