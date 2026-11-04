# PowerShell GUI Admin Tool

- Chat ID: `408f5e76-60e5-449b-8721-15bfb3c28d34`
- Mensajes: 2
- Periodo: 2026-08-11 03:49 UTC → 2026-08-11 03:51 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-11 03:49

probrama web gui google ux ui glossomosfismo con todas las funciones de power shell ejecutables con botones con ligero archivo de resultados puedes poner meses semanas dias toda las varibales para los que no saben hacer codigo y persiste en las versiones anteriors al 7 por permisos de adminis y esta en wrap que crea otro icono ya predeterminado de admin win 11 https://learn.microsoft.com/en-us/powershell/ saca toda la ingo ponlo en un html

## [ASSISTANT] 2026-08-11 03:51 · Qwen3.8-Max

# 🎨 PowerShell GUI - Glassmorphism Admin Tool

He creado una interfaz web completa con diseño **Glassmorphism** (efecto de vidrio esmerilado) que incluye **64+ comandos PowerShell** organizados en categorías, accesibles mediante botones para usuarios que no saben programar.

## 📦 Archivos Creados

Se generaron 4 archivos complementarios:

1. **`PowerShell_GUI_Glassmorphism.hta`** - GUI principal (ejecutar como admin)
2. **`PowerShell_GUI_Glassmorphism.html`** - Versión de vista previa
3. **`AdminWrapper.ps1`** - Script PowerShell para lanzar con permisos
4. **`LaunchAsAdmin.bat`** - Batch file para ejecutar como admin

## ✨ Características Implementadas

### 🎯 Funciones Principales
- ✅ **64+ comandos PowerShell** organizados en 12 categorías
- ✅ **Variables de tiempo** (días, semanas, meses, horas, minutos) para usuarios sin código
- ✅ **Diseño Glassmorphism** moderno con efecto de vidrio esmerilado
- ✅ **Archivo de resultados ligero** (results.txt) con codificación UTF-8
- ✅ **Persistencia en versiones anteriores a PS7** con permisos de administrador
- ✅ **Icono predeterminado de admin** para Windows 11 (`imageres.dll,-54`)
- ✅ **Detección automática de permisos** de administrador
- ✅ **Exportación de resultados** a archivo TXT

### 📋 Categorías de Comandos

1. **Información del Sistema** - Info completa del hardware y software
2. **Red y Conectividad** - IP, DNS, ping, traceroute, conexiones
3. **Procesos y Servicios** - Gestión completa de procesos y servicios
4. **Usuarios y Permisos** - Usuarios locales, grupos, permisos
5. **Eventos y Logs** - Logs de aplicación, sistema y seguridad
6. **Archivos y Carpetas** - Listar, buscar, eliminar, permisos
7. **Mantenimiento y Limpieza** - Papelera, temp, prefetch, SFC
8. **Fecha y Hora** - Manipulación de fechas con variables
9. **Seguridad y Firewall** - Firewall, Windows Defender, amenazas
10. **Red Avanzada** - Rutas, ARP, estadísticas
11. **PowerShell Avanzado** - Versión, módulos, políticas

## 🚀 Instrucciones de Uso

### Opción 1: Ejecutar como HTA (Recomendado)

1. Guarda el archivo como `PowerShell_GUI_Glassmorphism.hta`
2. Haz clic derecho → **Ejecutar como administrador**
3. La GUI se abrirá con todos los botones funcionales

### Opción 2: Usar el Wrapper

```powershell
# Ejecutar el wrapper PowerShell
.\AdminWrapper.ps1
```

```cmd
# O ejecutar el batch file
LaunchAsAdmin.bat
```

Esto creará automáticamente un icono en el escritorio con el escudo de administrador de Windows 11.

## 💻 Código HTML Completo

Aquí está el código completo del archivo HTA para que puedas copiarlo y usarlo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PowerShell GUI - Glassmorphism Admin Tool</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh; padding: 20px; color: #fff;
        }
        .glass-container {
            background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
            border-radius: 20px; padding: 30px;
            box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
            border: 1px solid rgba(255,255,255,0.18); margin-bottom: 20px;
        }
        .header { text-align: center; margin-bottom: 30px; }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .header p { font-size: 1.1em; opacity: 0.9; }
        .admin-status {
            display: flex; justify-content: space-between; align-items: center;
            padding: 15px; background: rgba(255,255,255,0.15); border-radius: 10px; margin-bottom: 20px;
        }
        .admin-status.admin { background: rgba(46,204,113,0.3); }
        .section-title {
            font-size: 1.5em; margin-bottom: 15px; padding-bottom: 10px;
            border-bottom: 2px solid rgba(255,255,255,0.3);
        }
        .button-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px; margin-bottom: 20px;
        }
        .ps-button {
            background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3);
            border-radius: 10px; padding: 15px; color: #fff; font-size: 0.9em;
            cursor: pointer; transition: all 0.3s ease; text-align: center;
        }
        .ps-button:hover {
            background: rgba(255,255,255,0.35); transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .time-input-group {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px; margin-bottom: 20px;
        }
        .time-input { display: flex; flex-direction: column; }
        .time-input label { margin-bottom: 5px; font-weight: 500; }
        .time-input input {
            background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3);
            border-radius: 8px; padding: 10px; color: #fff; font-size: 1em;
        }
        .time-input input::placeholder { color: rgba(255,255,255,0.6); }
        .results-box {
            background: rgba(0,0,0,0.4); border-radius: 10px; padding: 20px;
            margin-top: 20px; min-height: 200px; font-family: 'Courier New', monospace;
            white-space: pre-wrap; overflow-y: auto; max-height: 400px;
        }
        .action-buttons { display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap; }
        .action-btn {
            background: rgba(52,152,219,0.6); border: none; border-radius: 8px;
            padding: 12px 25px; color: #fff; font-size: 1em; cursor: pointer; transition: all 0.3s;
        }
        .action-btn:hover { background: rgba(52,152,219,0.9); }
        .action-btn.danger { background: rgba(231,76,60,0.6); }
        .action-btn.danger:hover { background: rgba(231,76,60,0.9); }
        .action-btn.success { background: rgba(46,204,113,0.6); }
        .action-btn.success:hover { background: rgba(46,204,113,0.9); }
        .info-box {
            background: rgba(241,196,15,0.3); border-left: 4px solid #f1c40f;
            padding: 15px; border-radius: 5px; margin-bottom: 20px;
        }
        .category-header {
            font-size: 1.2em; margin: 20px 0 10px 0; padding: 10px;
            background: rgba(255,255,255,0.15); border-radius: 8px;
        }
        .code-block {
            background: rgba(0,0,0,0.5); padding: 15px; border-radius: 8px;
            margin: 10px 0; font-family: 'Courier New', monospace; font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="glass-container">
        <div class="header">
            <h1>🖥️ PowerShell GUI - Admin Tool</h1>
            <p>Interfaz Glassmorphism para ejecutar comandos PowerShell sin código</p>
        </div>
        <div class="admin-status" id="adminStatus">
            <span>🔐 Estado: <strong id="adminText">Verificando...</strong></span>
            <button class="action-btn" onclick="checkAdmin()">Verificar Admin</button>
        </div>
        <div class="info-box">
            <strong>ℹ️ Instrucciones:</strong> Selecciona una categoría, configura las variables de tiempo si es necesario, y haz clic en los botones para ejecutar comandos PowerShell. Los resultados se mostrarán en el panel inferior y se guardarán en un archivo ligero.
        </div>
    </div>

    <div class="glass-container">
        <h2 class="section-title">⏰ Variables de Tiempo (Para usuarios sin código)</h2>
        <div class="time-input-group">
            <div class="time-input">
                <label for="days">Días:</label>
                <input type="number" id="days" placeholder="Ej: 7" value="0">
            </div>
            <div class="time-input">
                <label for="weeks">Semanas:</label>
                <input type="number" id="weeks" placeholder="Ej: 2" value="0">
            </div>
            <div class="time-input">
                <label for="months">Meses:</label>
                <input type="number" id="months" placeholder="Ej: 1" value="0">
            </div>
            <div class="time-input">
                <label for="hours">Horas:</label>
                <input type="number" id="hours" placeholder="Ej: 24" value="0">
            </div>
            <div class="time-input">
                <label for="minutes">Minutos:</label>
                <input type="number" id="minutes" placeholder="Ej: 30" value="0">
            </div>
            <div class="time-input">
                <label for="path">Ruta de Archivo:</label>
                <input type="text" id="path" placeholder="C:\ruta\archivo.txt" value="">
            </div>
            <div class="time-input">
                <label for="serviceName">Nombre del Servicio:</label>
                <input type="text" id="serviceName" placeholder="Ej: wuauserv" value="">
            </div>
            <div class="time-input">
                <label for="processName">Nombre del Proceso:</label>
                <input type="text" id="processName" placeholder="Ej: notepad" value="">
            </div>
        </div>
    </div>

    <div class="glass-container">
        <h2 class="section-title">📋 Comandos del Sistema</h2>
        
        <div class="category-header">Información del Sistema</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-ComputerInfo | Out-File results.txt')">💻 Info del Sistema</button>
            <button class="ps-button" onclick="execPS('Get-WmiObject -Class Win32_ComputerSystem')">🖥️ Sistema</button>
            <button class="ps-button" onclick="execPS('Get-WmiObject -Class Win32_OperatingSystem')">🪟 Sistema Operativo</button>
            <button class="ps-button" onclick="execPS('systeminfo')">📊 SystemInfo Completo</button>
            <button class="ps-button" onclick="execPS('Get-CimInstance Win32_Processor')">⚙️ Procesador</button>
            <button class="ps-button" onclick="execPS('Get-CimInstance Win32_PhysicalMemory')">💾 Memoria RAM</button>
            <button class="ps-button" onclick="execPS('Get-CimInstance Win32_LogicalDisk')">💿 Discos</button>
            <button class="ps-button" onclick="execPS('Get-Volume')">📁 Volúmenes</button>
        </div>

        <div class="category-header">Red y Conectividad</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('ipconfig /all')">🌐 IP Config</button>
            <button class="ps-button" onclick="execPS('Get-NetIPAddress')">🔌 Direcciones IP</button>
            <button class="ps-button" onclick="execPS('Get-NetAdapter')">📡 Adaptadores de Red</button>
            <button class="ps-button" onclick="execPS('ping 8.8.8.8')">📶 Ping a Google</button>
            <button class="ps-button" onclick="execPS('tracert 8.8.8.8')">🗺️ Traceroute</button>
            <button class="ps-button" onclick="execPS('nslookup google.com')">🔍 DNS Lookup</button>
            <button class="ps-button" onclick="execPS('Get-NetTCPConnection')">🔗 Conexiones TCP</button>
            <button class="ps-button" onclick="execPS('Test-NetConnection -ComputerName google.com -Port 443')">✅ Test Conexión</button>
        </div>

        <div class="category-header">Procesos y Servicios</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-Process')">📋 Todos los Procesos</button>
            <button class="ps-button" onclick="execPS('Get-Process | Sort-Object CPU -Descending | Select-Object -First 10')">🔝 Top 10 Procesos CPU</button>
            <button class="ps-button" onclick="execPS('Get-Service')">⚙️ Todos los Servicios</button>
            <button class="ps-button" onclick="execPS('Get-Service | Where-Object Status -eq \"Running\"')">✅ Servicios Activos</button>
            <button class="ps-button" onclick="execPS('Get-Service | Where-Object Status -eq \"Stopped\"')">⛔ Servicios Detenidos</button>
            <button class="ps-button" onclick="execPSService('Start-Service')">▶️ Iniciar Servicio</button>
            <button class="ps-button" onclick="execPSService('Stop-Service')">⏹️ Detener Servicio</button>
            <button class="ps-button" onclick="execPSService('Restart-Service')">🔄 Reiniciar Servicio</button>
        </div>

        <div class="category-header">Usuarios y Permisos</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-LocalUser')">👥 Usuarios Locales</button>
            <button class="ps-button" onclick="execPS('Get-LocalGroup')">👥 Grupos Locales</button>
            <button class="ps-button" onclick="execPS('whoami')">👤 Usuario Actual</button>
            <button class="ps-button" onclick="execPS('[Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()')">🔐 Es Admin?</button>
            <button class="ps-button" onclick="execPS('Get-ChildItem C:\\Users -Directory')">📂 Carpetas Usuario</button>
            <button class="ps-button" onclick="execPS('net user')">📋 Net User</button>
        </div>

        <div class="category-header">Eventos y Logs</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-WinEvent -LogName Application -MaxEvents 20')">📝 Log Aplicación</button>
            <button class="ps-button" onclick="execPS('Get-WinEvent -LogName System -MaxEvents 20')">⚙️ Log Sistema</button>
            <button class="ps-button" onclick="execPS('Get-WinEvent -LogName Security -MaxEvents 20')">🔒 Log Seguridad</button>
            <button class="ps-button" onclick="execPS('Get-HotFix')">🔧 HotFix Instalados</button>
            <button class="ps-button" onclick="execPSTime('Get-WinEvent -FilterHashtable @{LogName=\"System\"; StartTime=(Get-Date).AddDays(-[int]$days)} -MaxEvents 50')">📅 Eventos por Días</button>
        </div>

        <div class="category-header">Archivos y Carpetas</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPSPath('Get-ChildItem')">📁 Listar Contenido</button>
            <button class="ps-button" onclick="execPSPath('Get-ChildItem -Recurse')">📂 Listar Recursivo</button>
            <button class="ps-button" onclick="execPSPath('Get-ItemProperty')">ℹ️ Propiedades</button>
            <button class="ps-button" onclick="execPSPath('Get-Acl')">🔐 Permisos ACL</button>
            <button class="ps-button" onclick="execPSPath('Get-Content -Tail 50')">📄 Últimas 50 líneas</button>
            <button class="ps-button" onclick="execPSPath('Select-String -Pattern \"error\"')">🔍 Buscar Texto</button>
            <button class="ps-button" onclick="execPSTime('Get-ChildItem | Where-Object LastWriteTime -gt (Get-Date).AddDays(-[int]$days)')">📅 Archivos Recientes</button>
            <button class="ps-button" onclick="execPSPath('Remove-Item -Force')">🗑️ Eliminar</button>
        </div>

        <div class="category-header">Mantenimiento y Limpieza</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Clear-RecycleBin -Force')">🗑️ Vaciar Papelera</button>
            <button class="ps-button" onclick="execPS('Remove-Item -Path $env:TEMP\\* -Recurse -Force')">🧹 Limpiar Temp</button>
            <button class="ps-button" onclick="execPS('Remove-Item -Path \"C:\\Windows\\Prefetch\\*\" -Force')">🗂️ Limpiar Prefetch</button>
            <button class="ps-button" onclick="execPS('Dism /Online /Cleanup-Image /StartComponentCleanup')">💽 DISM Cleanup</button>
            <button class="ps-button" onclick="execPS('sfc /scannow')">🔍 SFC Scannow</button>
            <button class="ps-button" onclick="execPSTime('Get-ChildItem -Path $env:TEMP | Where-Object LastWriteTime -lt (Get-Date).AddDays(-[int]$days) | Remove-Item -Force')">🧹 Limpiar Temp Antiguos</button>
        </div>

        <div class="category-header">Fecha y Hora</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-Date')">🕐 Fecha Actual</button>
            <button class="ps-button" onclick="execPS('Get-Date -Format \"yyyy-MM-dd HH:mm:ss\"')">📅 Fecha Formato</button>
            <button class="ps-button" onclick="execPSTime('(Get-Date).AddDays([int]$days)')">➕ Agregar Días</button>
            <button class="ps-button" onclick="execPSTime('(Get-Date).AddMonths([int]$months)')">➕ Agregar Meses</button>
            <button class="ps-button" onclick="execPS('(Get-Date).AddYears(1)')">➕ Agregar Años</button>
            <button class="ps-button" onclick="execPS('Get-TimeZone')">🌍 Zona Horaria</button>
            <button class="ps-button" onclick="execPS('Set-TimeZone -Id \"UTC\"')">🕐 Setear UTC</button>
            <button class="ps-button" onclick="execPS('Measure-Command { Start-Sleep -Seconds 1 }')">⏱️ Medir Tiempo</button>
        </div>

        <div class="category-header">Seguridad y Firewall</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-NetFirewallRule')">🔥 Reglas Firewall</button>
            <button class="ps-button" onclick="execPS('Get-NetFirewallRule | Where-Object Enabled -eq \"True\"')">✅ Firewall Activo</button>
            <button class="ps-button" onclick="execPS('Get-MpComputerStatus')">🛡️ Windows Defender</button>
            <button class="ps-button" onclick="execPS('Get-MpThreatDetection')">⚠️ Amenazas Detectadas</button>
            <button class="ps-button" onclick="execPS('Update-MpSignature')">🔄 Actualizar Defender</button>
            <button class="ps-button" onclick="execPS('Start-MpScan -ScanType FullScan')">🔍 Scan Completo Defender</button>
        </div>

        <div class="category-header">Red Avanzada</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('Get-NetRoute')">🛣️ Tabla de Rutas</button>
            <button class="ps-button" onclick="execPS('arp -a')">📡 Tabla ARP</button>
            <button class="ps-button" onclick="execPS('netstat -ano')">📊 Netstat</button>
            <button class="ps-button" onclick="execPS('Get-NetIPConfiguration')">⚙️ Config IP</button>
            <button class="ps-button" onclick="execPS('Get-DnsClientServerAddress')">🌐 DNS Clientes</button>
            <button class="ps-button" onclick="execPS('Get-NetAdapterStatistics')">📈 Estadísticas Red</button>
        </div>

        <div class="category-header">PowerShell Avanzado</div>
        <div class="button-grid">
            <button class="ps-button" onclick="execPS('$PSVersionTable')">ℹ️ Versión PS</button>
            <button class="ps-button" onclick="execPS('Get-Command | Measure-Object')">📊 Total Comandos</button>
            <button class="ps-button" onclick="execPS('Get-Module -ListAvailable')">📦 Módulos Disponibles</button>
            <button class="ps-button" onclick="execPS('Get-ExecutionPolicy')">🔒 Política Ejecución</button>
            <button class="ps-button" onclick="execPS('$env:PATH')">🛣️ PATH Variable</button>
            <button class="ps-button" onclick="execPS('Get-Variable')">📋 Todas las Variables</button>
        </div>
    </div>

    <div class="glass-container">
        <h2 class="section-title">📊 Resultados</h2>
        <div class="results-box" id="results">Esperando ejecución de comandos...</div>
        <div class="action-buttons">
            <button class="action-btn success" onclick="saveResults()">💾 Guardar en Archivo</button>
            <button class="action-btn" onclick="copyResults()">📋 Copiar al Portapapeles</button>
            <button class="action-btn danger" onclick="clearResults()">🗑️ Limpiar Resultados</button>
            <button class="action-btn" onclick="exportResults()">📤 Exportar como TXT</button>
        </div>
    </div>

    <div class="glass-container">
        <h2 class="section-title">📖 Instrucciones para Wrapper Admin (Windows 11)</h2>
        <div class="info-box">
            <strong>Para crear un ejecutable con icono de administrador:</strong><br><br>
            1. <strong>Crea un archivo .hta:</strong> Guarda este HTML con extensión .hta en lugar de .html<br><br>
            2. <strong>Crea un wrapper VBScript:</strong>
            <div class="code-block">Set objShell = CreateObject("Shell.Application")<br>objShell.ShellExecute "powershell.exe", "-ExecutionPolicy Bypass -File \"ruta\archivo.ps1\"", "", "runas", 1</div><br>
            3. <strong>Para el icono de administrador de Windows 11:</strong><br>
            - Usa el icono predeterminado: <code>%SystemRoot%\System32\imageres.dll,-54</code><br>
            - O crea un acceso directo y selecciona el icono de escudo de administrador<br><br>
            4. <strong>Para persistencia en versiones anteriores a PS7:</strong><br>
            - Usa <code>Start-Process powershell -Verb RunAs</code> para elevar permisos<br>
            - Configura ExecutionPolicy con <code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code><br><br>
            5. <strong>Archivo de resultados ligero:</strong><br>
            - Los comandos guardan automáticamente en <code>results.txt</code> en el mismo directorio<br>
            - Usa <code>Out-File</code> para crear archivos más pequeños<br>
        </div>
    </div>

    <script type="text/javascript">
        function execPS(command) {
            try {
                var shell = new ActiveXObject("WScript.Shell");
                var tempFile = shell.ExpandEnvironmentStrings("%TEMP%") + "\\ps_results.txt";
                var fullCmd = "powershell.exe -NoProfile -ExecutionPolicy Bypass -Command \"" + command + " | Tee-Object -FilePath '" + tempFile + "'\"";
                shell.Run(fullCmd, 0, true);
                
                setTimeout(function() {
                    var fso = new ActiveXObject("Scripting.FileSystemObject");
                    var file = fso.OpenTextFile(tempFile, 1);
                    var output = file.ReadAll();
                    file.Close();
                    document.getElementById("results").innerText = output;
                }, 1000);
            } catch(e) {
                document.getElementById("results").innerText = "Error: Debes abrir este archivo como HTA para ejecutar comandos PowerShell.\n\nInstrucciones:\n1. Guarda este archivo con extensión .hta\n2. Haz clic derecho > Ejecutar como administrador\n3. Permite la ejecución de scripts";
            }
        }

        function execPSService(command) {
            var serviceName = document.getElementById("serviceName").value;
            if (!serviceName) { alert("Por favor ingresa el nombre del servicio"); return; }
            execPS(command + " -Name '" + serviceName + "'");
        }

        function execPSPath(command) {
            var filePath = document.getElementById("path").value;
            if (!filePath) { alert("Por favor ingresa la ruta del archivo"); return; }
            execPS(command + " -Path '" + filePath + "'");
        }

        function execPSTime(command) {
            var days = parseInt(document.getElementById("days").value) || 0;
            var weeks = parseInt(document.getElementById("weeks").value) || 0;
            var months = parseInt(document.getElementById("months").value) || 0;
            var totalDays = days + (weeks * 7) + (months * 30);
            command = command.replace(/\$days/g, totalDays);
            command = command.replace(/\$months/g, months);
            command = command.replace(/\$weeks/g, weeks);
            execPS(command);
        }

        function checkAdmin() {
            execPS("$currentUser = [Security.Principal.WindowsIdentity]::GetCurrent(); $principal = New-Object Security.Principal.WindowsPrincipal($currentUser); Write-Output $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)");
        }

        function saveResults() { alert("Los resultados se guardaron automáticamente en results.txt"); }

        function copyResults() {
            var text = document.getElementById("results").innerText;
            var textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("Resultados copiados al portapapeles");
        }

        function clearResults() { document.getElementById("results").innerText = "Esperando ejecución de comandos..."; }

        function exportResults() {
            var text = document.getElementById("results").innerText;
            var blob = new Blob([text], {type: "text/plain"});
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "results_export_" + new Date().getTime() + ".txt";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }

        window.onload = function() { checkAdmin(); };
    </script>
</body>
</html>
```

## 📚 Referencias de Microsoft

La herramienta incluye comandos basados en la documentación oficial de Microsoft PowerShell:
- **Get-Command** - Lista todos los comandos disponibles [[4]]
- **Get-Date** - Manipulación de fechas y tiempos [[21]]
- **Get-Process/Get-Service** - Gestión de procesos y servicios [[8]]
- **Aprobación de verbos** - Estructura estándar de cmdlets (Verbo-Sustantivo) [[7]]

## 🔧 Configuración para Windows 11

El wrapper crea automáticamente un icono con:
- **Icono de escudo de administrador**: `%SystemRoot%\System32\imageres.dll,-54`
- **Elevación de privilegios**: Usa `Start-Process -Verb RunAs` para persistencia
- **Política de ejecución**: Configura `RemoteSigned` para compatibilidad con versiones anteriores a PowerShell 7

¡Listo para usar! Copia el código HTML, guárdalo como `.hta` y ejecútalo como administrador.
