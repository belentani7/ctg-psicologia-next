# ZTE y Motorola: Información Técnica

- Chat ID: `7e076917-8329-4939-8e24-1a94801120ea`
- Mensajes: 4
- Periodo: 2026-08-30 20:02 UTC → 2026-08-30 20:05 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-30 20:02

Maxima informacion de estos aparatos Modelo / Nº serie: ZTE ZXHN F601 / ZTEGD38627A6 Precio (Euros): 
Modelo / Nº serie: ZTE H3600P / ZTEKH93Q4Q05577 Precio (Euros): 
Modelo / Nº serie: Telefono inalambrico Motorola C1001CB / 2406ES091641

## [ASSISTANT] 2026-08-30 20:03 · Qwen3.8-Max

A continuación, se detalla el análisis técnico exhaustivo, contexto de mercado y valoración económica de los tres dispositivos. La lista proporcionada coincide exactamente con el **kit estándar de instalación de Fibra Óptica (FTTH) y Voz IP** que operadoras españolas (principalmente Digi, y en algunos casos MásMóvil o Jazztel) entregan en régimen de comodato a sus clientes.

### 1. Terminal de Red Óptica (ONT)
**Modelo / Nº serie:** ZTE ZXHN F601 / ZTEGD38627A6
**Precio (Euros):** 0 € (Comodato de operadora) | 12 € - 15 € (Mercado residual de segunda mano)

*   **Especificaciones Técnicas:** Es una ONT (Optical Network Terminal) GPON pura, lo que significa que no actúa como router ni emite red Wi-Fi [[2]]. Su única función es actuar como conversor de medios, transformando la señal óptica de la fibra en una señal eléctrica Ethernet [[8]]. Cumple con el estándar ITU-T G.984, soportando velocidades de hasta 2.488 Gbps de bajada y 1.244 Gbps de subida desde la OLT de la central, con una sensibilidad de recepción óptica de -28 dBm [[8]].
*   **Puertos:** 1 x Puerto PON (conector SC/APC para la fibra), 1 x Puerto GE (Gigabit Ethernet RJ45) para enlazar con el router principal, y 1 x Puerto de alimentación (12V) [[2]].
*   **Análisis del Número de Serie (ZTEGD...):** El prefijo "ZTEGD" identifica lotes de fabricación ensamblados por ZTE, frecuentemente configurados con firmwares personalizados (TR-069) para su provisionamiento automático en las redes de Digi o Movistar [[52]].
*   **Valoración Económica:** Al ser un equipo cedido gratuitamente por la operadora durante la instalación, no tiene precio de venta al público (PVP) oficial para el consumidor final [[52]]. En plataformas de reventa como Wallapop o eBay, su valor residual oscila entre los 12 € y 15 € para usuarios avanzados que desean reemplazar la ONT integrada de otros routers [[46]].

### 2. Router Home Gateway Wi-Fi 6
**Modelo / Nº serie:** ZTE H3600P / ZTEKH93Q4Q05577
**Precio (Euros):** 0 € (Comodato de operadora) | 14 € - 35 € (Mercado de segunda mano) | ~75 € (Valor teórico de hardware nuevo)

*   **Especificaciones Técnicas:** Es un router de última generación con certificación **Wi-Fi 6 (802.11ax)** de doble banda simultánea (AX3000) [[11]]. Es el modelo de referencia que instala Digi para sus modalidades de Fibra Smart de hasta 1 Gbps, destacando por su diseño vertical optimizado para la disipación térmica [[11]].
*   **Rendimiento Inalámbrico:** Soporta canales de ancho de banda de 160 MHz en la banda de 5 GHz, lo que le permite alcanzar velocidades teóricas de enlace inalámbrico de hasta 2402 Mbps [[15]]. Es totalmente compatible con el protocolo EasyMesh de ZTE para crear redes malladas con otros nodos de la misma marca.
*   **Puertos:** 1 x WAN Gigabit (para conectar al puerto GE de la ONT F601), 4 x LAN Gigabit Ethernet, y puertos FXS (RJ11) integrados para gestionar la telefonía VoIP [[11]].
*   **Análisis del Número de Serie (ZTEKH...):** Este identificador es el que la OLT de la operadora utiliza para autenticar el dispositivo en la red y asignarle los parámetros de VoIP y configuración remota. El router suele estar bloqueado por MAC/TR-069 para impedir su uso en otras operadoras sin un proceso de liberación.
*   **Valoración Económica:** Su precio de mercado teórico (si se comprara libre a distribuidores de hardware de red) ronda los 75 € [[30]]. Sin embargo, en el mercado de segunda mano, los usuarios los venden entre 14 € y 20 € tras darse de baja de la compañía y no devolverlos, o al intentar reutilizarlos como routers neutros o puntos de acceso [[29]].

### 3. Teléfono Fijo Inalámbrico (Extensión VoIP)
**Modelo / Nº serie:** Telefono inalambrico Motorola C1001CB / 2406ES091641
**Precio (Euros):** 20,99 € - 21,99 € (PVP Minorista) | 10 € - 12 € (Mercado de segunda mano / Liquidación)

*   **Especificaciones Técnicas:** Es un teléfono digital inalámbrico bajo el estándar DECT/GAP [[37]]. Es un terminal de gama de entrada, muy habitual como "segundo teléfono" o terminal de cortesía en las instalaciones de fibra que incluyen línea de voz fija. Incluye pantalla retroiluminada, identificador de llamadas (CLI), función de manos libres, agenda para 50 contactos y modo de bloqueo de llamadas entrantes no deseadas [[37]].
*   **Alimentación:** Funciona mediante 2 pilas recargables tamaño AAA (Ni-MH) que se cargan al posar el auricular en su base, la cual debe conectarse a uno de los puertos RJ11 del router ZTE H3600P o a un rosetón telefónico adaptado.
*   **Análisis del Número de Serie (2406ES091641):** La nomenclatura del serial revela su fecha y mercado. "2406" indica que fue fabricado en el **mes 06 (junio) del año 2024** [[38]]. El sufijo "ES" confirma que es un lote destinado a la distribución europea/española, y "CB" hace referencia a la variante del producto (frecuentemente asociada al color *Black/Negro* o al empaquetado de retail de grandes superficies) [[40]].
*   **Valoración Económica:** Es el único equipo de la lista que tiene un precio de venta al público (PVP) claro, ya que Motorola lo comercializa libremente. En tiendas como Amazon su precio oficial es de 21,99 € [[38]], mientras que en distribuidores de electrónica ronda los 20,99 € [[40]]. En el mercado de segunda mano o liquidación de stocks, se puede encontrar por 10 € - 12 € [[41]].

## [USER] 2026-08-30 20:05

Cono ver quien te llamó dias atras en ese telefono

## [ASSISTANT] 2026-08-30 20:05 · Qwen3.8-Max

Para consultar el historial de llamadas de días anteriores en tu teléfono **Motorola C1001CB** (que funciona como terminal VoIP conectado a tu router ZTE H3600P), existen tres métodos distintos. 

Debes tener en cuenta una limitación técnica fundamental: **la memoria interna de los teléfonos DECT básicos como el C1001CB es muy reducida** (suele almacenar solo las últimas 10 a 20 llamadas perdidas, recibidas o marcadas). Si han entrado muchas llamadas en los últimos días, el registro antiguo se habrá sobrescrito y borrado del aparato físico. 

A continuación, te detallo las tres vías para recuperar esa información, ordenadas de la más sencilla a la más técnica y fiable.

---

### Opción 1: Desde el propio teléfono Motorola C1001CB (Memoria local)
Si la llamada fue hace pocos días y no has recibido decenas de llamadas desde entonces, el número seguirá en la memoria del terminal.

1.  **Acceso al Menú:** En el auricular, pulsa el botón central **OK** o **Menú**.
2.  **Navegación:** Usa las flechas de dirección para buscar el icono o la opción llamada **Historial**, **Registro de llamadas** o **Listas** (suele tener un icono de un reloj o una libreta). Pulsa **OK**.
3.  **Selección del tipo de llamada:** Te mostrará tres submenús:
    *   **Llamadas perdidas:** (Suele ser la opción por defecto).
    *   **Llamadas recibidas:** (Contestadas).
    *   **Llamadas marcadas:** (Emitidas por ti).
4.  **Visualización:** Usa las flechas para bajar en la lista. Si el número está guardado, verás el nombre; si no, verás la secuencia numérica. Puedes pulsar la tecla verde de "Descolgar" para devolver la llamada directamente desde ese registro.

*Nota:* Si la lista está vacía o la llamada que buscas no aparece, significa que la memoria RAM del teléfono se ha sobrescrito. Debes pasar a la Opción 2.

---

### Opción 2: Desde el Área de Cliente de tu Operadora (El método 100% fiable)
Dado que el teléfono está conectado a una línea de Fibra Óptica (FTTH) con Voz IP (probablemente Digi, Movistar u Orange, dado el router ZTE H3600P), **el servidor de la operadora registra cada llamada por ley y para facturación**, independientemente de si el teléfono físico la guardó o no.

1.  **Acceso:** Entra en la página web de tu operadora (ej. *Mi Digi*, *Mi Movistar*, *Área Cliente Orange*) o abre su aplicación móvil oficial con tus credenciales.
2.  **Ubicación del registro:** 
    *   Busca la sección de **Tu Línea Fija** o **Productos**.
    *   Busca un apartado llamado **Consumo**, **Desglose de llamadas**, **Historial de voz** o **Facturación**.
3.  **Filtrado:** Selecciona el mes en curso o el mes anterior (dependiendo de cuándo ocurriera la llamada).
4.  **Resultado:** Verás un listado exhaustivo con la **Fecha, Hora exacta, Duración y el Número de origen/destino**. 

*Ventaja:* Este método ignora el límite de memoria del Motorola y te mostrará llamadas de hace semanas o meses.

---

### Opción 3: Desde la Interfaz Web del Router ZTE H3600P (Nivel Avanzado)
El router ZTE H3600P es el que gestiona el protocolo SIP (la señal de voz por internet). Algunos routers mantienen un registro (Log) de las llamadas a nivel de firmware, aunque las operadoras a veces capan esta visibilidad en los routers que instalan en comodato.

1.  **Conexión:** Conecta un PC o móvil a la red Wi-Fi o por cable al router ZTE.
2.  **Acceso a la IP:** Abre un navegador web y escribe la puerta de enlace predeterminada, que suele ser `192.168.1.1` o `192.168.0.1`.
3.  **Login:** Introduce las credenciales. Suelen estar en la pegatina bajo el router (Usuario: `admin` / Contraseña: la que indique la etiqueta, o a veces `admin`).
4.  **Navegación al Log de Voz:**
    *   Ve a la pestaña **Voice** (Voz), **VoIP Services** o **SIP**.
    *   Busca una subpestaña llamada **Call Log**, **History** o **SIP Registration Log**.
5.  **Análisis:** Verás un listado técnico con marcas de tiempo (Timestamps) y direcciones IP o números SIP. Si la operadora no ha bloqueado la interfaz de VoIP, podrás ver los números entrantes que el router procesó antes de enviarlos al teléfono Motorola.

---

### ⚠️ Limitación Crítica: Números Privados u Ocultos
Si la persona que te llamó hace días marcó la opción de **"Ocultar ID de llamante" (Número Privado)**, te enfrentas a una barrera técnica y legal:
*   El teléfono Motorola mostrará simplemente la leyenda "Privado", "Oculto" o "Fuera de área".
*   El Área de Cliente de la operadora mostrará el número como "Oculto" o "Desconocido".
*   **Excepción:** Solo las Fuerzas y Cuerpos de Seguridad del Estado, mediante orden judicial y en casos de acoso o amenazas graves, pueden solicitar a la operadora telefónica que levante el anonimato de la llamada a nivel de centralita (traceo de red), revelando el número real origen. Ningún usuario particular ni técnico puede desvelar un número oculto a posteriori.
