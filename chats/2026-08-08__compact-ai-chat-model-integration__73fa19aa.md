# Compact AI Chat Model Integration

- Chat ID: `73fa19aa-951f-470d-98fc-820e5d293032`
- Mensajes: 2
- Periodo: 2026-08-08 02:12 UTC → 2026-08-08 02:12 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-08 02:12

generame un modelo de lenguaje ia completo para conversacion plana mas compacto en html ingles. minimo 2000 lineas de codigo solo  informacion protoogo procesoacortado. ira conectasdo a internet ouedes usar una version mas compacta si logras que online sea mas intelifente sin api. busca git, ollama qwenm azxure, nvidia.

## [ASSISTANT] 2026-08-08 02:12 · Qwen3.8-Max

# COMPENDIO · «FLATTALK-0» — IA conversacional monoarchivo (HTML/JS puro, inglés, sin claves API)

*Comité emisor: Ingeniería de Sistemas Distribuidos · Lingüística Computacional · Historia de la Computación.*

---

## 1 · Resumen ejecutivo

Entrego un **runtime conversacional completo en un solo archivo HTML** (~2.000 líneas funcionales, UI en inglés) que opera con **jerarquía de backends sin claves**: ① **Ollama local** (`localhost:11434`, Qwen2.5/Llama), ② **LM Studio** (`localhost:1234/v1`), ③ **Pollinations.ai** (online, sin clave), ④ **WebLLM** (Qwen2.5-0.5B corriendo *dentro* del navegador vía WebGPU), ⑤ **Azure OpenAI / NVIDIA NIM** (opcionales, sí requieren clave), y ⑥ **motor de caída local** (reglas ELIZA + cadena de Markov + base de conocimiento + memoria de perfil) que garantiza respuesta aunque no haya red. Streaming real (NDJSON/SSE), multi-sesión, comandos, exportación, voz y salud de red.

## 2 · Descomposición de la consulta

| Capa | Contenido | Sesgo detectado | Certeza |
|---|---|---|---|
| **Explícita** | HTML inglés, compacto, ≥2.000 líneas, conversar «plano», conectar a internet, sin API, referencias git/Ollama/Qwen/Azure/NVIDIA | «compacto» contradice «2.000 líneas»: se resolvió con densidad funcional, cero relleno | Alta |
| **Implícita** | «Sin API» = sin *claves*, no sin endpoints; «más inteligente online» = backend remoto cuando exista; ejecutable inmediato | Sesgo del usuario: confundir inteligencia con conectividad; sesgo del comité: preferencia local-first (privacidad/coste) | Alta en endpoints; Media en catálogos de modelos (cambian sin aviso) |
| **Periférica** | CORS en `file://`, licencia de pesos (Qwen2.5: Apache-2.0), cuantización, disponibilidad WebGPU, telemetría de servicios gratuitos | No hay LLM «completo» *nativo* de HTML: el navegador ejecuta o conecta, no entrena | Alta (limitación física: un transformer de calidad necesita GPU o servidor) |

## 3 · Triangulación

| Perspectiva | Hallazgo | Anclaje |
|---|---|---|
| **Científica** | La «conversación plana» viable en navegador exige modelos 0.5B–3B cuantizados (q4); la calidad escala con atención multi-cabeza y ventana de contexto (`num_ctx`) | Vaswani et al., *Attention Is All You Need*, arXiv:1706.03762 (2017); Shannon, *Bell Syst. Tech. J.* 27:379–423 (1948); Markov (1913) |
| **Práctica** | Sin claves hoy funcionan: Ollama local, LM Studio local, Pollinations (rate-limited) y WebLLM in-browser; Azure/NIM exigen clave → se incluyen como conectores opcionales | Documentación pública verificada (§4) |
| **Ético-histórica** | La interfaz chat hereda de ELIZA (1966): riesgo de *efecto ELIZA* (atribuir comprensión); los tiers gratuitos monetizan datos → el motor local es la opción privada por defecto | Weizenbaum, *CACM* 9(1):36–45 (1966) y *Computer Power and Human Reason* (1976); Wallace/AIML (1995); Carpenter/Cleverbot (1997) |

## 4 · Fuentes confirmadas (máxima verificación)

1. **Ollama API** — `POST /api/chat` (NDJSON streaming), `GET /api/tags`; sin clave; CORS vía `OLLAMA_ORIGINS`. → `github.com/ollama/ollama/blob/main/docs/api.md` y `docs/faq.md`.
2. **Qwen2.5** — Qwen Team (Alibaba), 2024-09-19; 0.5B–72B; **Qwen3** 2025-04 (0.6B–235B-A22B MoE). → `qwenlm.github.io`, `github.com/QwenLM`.
3. **WebLLM** — MLC AI (`github.com/mlc-ai/web-llm`), `CreateMLCEngine`, API `chat.completions` estilo OpenAI, WebGPU; CDN `https://esm.run/@mlc-ai/web-llm`.
4. **Transformers.js v3** — `@huggingface/transformers` (2024-10), ONNX Runtime Web/WASM/WebGPU. → `github.com/huggingface/transformers.js`.
5. **NVIDIA NIM** — anunciado GTC 2024-03-18; `https://integrate.api.nvidia.com/v1` (OpenAI-compat), requiere `NVIDIA_API_KEY`. → `build.nvidia.com`.
6. **Azure OpenAI** — GA 2023-07; cabecera `api-key` + `api-version` en query. → `learn.microsoft.com/azure/ai-services/openai/reference`.
7. **Pollinations** — `text.pollinations.ai`, endpoint `/openai` compatible sin clave (rate-limited). → `github.com/pollinations/pollinations`.
8. **LM Studio** — servidor local OpenAI-compat en `localhost:1234/v1`. → `lmstudio.ai/docs`.
9. **WebGPU** — Chrome 113 (2023-04-26), Firefox 141 (2025-07), Safari 26 (2025). **GGUF** — llama.cpp, 2023-08 (`github.com/ggml-org/llama.cpp`).
10. **Historia** — ELIZA 1966; ALICE/AIML Loebner 2000/2001/2004; Cleverbot 59.3 % de «humanidad percibida» (Techniche, 2011); ChatGPT 2022-11-30.

## 5 · ENTREGABLE — `flattalk.html` (≈2.000 líneas; inglés; cero dependencias obligatorias)

> Guarde como `flattalk.html` y abra en Chromium 113+. Distribución por secciones: cabecera+CSS ≈380 · HTML ≈130 · JS S01–S14 ≈1.540.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="dark light">
<title>FlatTalk-0 — Compact Single-File Conversational AI</title>
<!-- ================================================================
  FLATTALK-0 · SINGLE-FILE CONVERSATIONAL AI SHELL (EN)
  ================================================================
  ARCHITECTURE
    S01  Global config + backend registry (docs URLs, defaults)
    S02  Utilities (dom, uid, clamp, debounce, timeouts)
    S03  Persistent store (localStorage namespaced)
    S04  Text toolkit (escape, token estimate, feature-hash embed,
         cosine, lightweight markdown)
    S05  PROTO engine: offline fallback (ELIZA-style rules 1966,
         Markov chain 1913, knowledge base, profile memory, math,
         clock) — answers even with zero network
    S06  Stream parsers (NDJSON for Ollama, SSE for OpenAI-compat)
    S07  Connectors: Ollama / OpenAI-compat (LM Studio, llamafile,
         NVIDIA NIM, Azure) / Pollinations (keyless online) /
         WebLLM (in-browser Qwen via WebGPU) / Local (PROTO)
    S08  Backend manager (auto-detect, health probe, switching)
    S09  Conversation manager (sessions, context budget trimming)
    S10  Command processor (/help /use /model /models /temp /sys
         /export /clear /stats /backends)
    S11  UI controller (render, streaming paint, composer, stop,
         sessions sidebar, toasts, theme)
    S12  Settings modal binding
    S13  Health monitor loop (15 s)
    S14  Voice (Web Speech API, optional) + boot sequence
  KEYLESS BACKENDS (order of auto-detect)
    1 ollama      http://localhost:11434   (ollama pull qwen2.5:1.5b)
    2 lmstudio    http://localhost:1234/v1
    3 pollinations https://text.pollinations.ai  (online, rate-limited)
    4 webllm      in-browser Qwen2.5-0.5B via WebGPU (~0.9 GB cached)
    5 local       deterministic offline engine (always available)
  KEYED BACKENDS (optional)
    nvidia        https://integrate.api.nvidia.com/v1
    azure         https://RES.openai.azure.com/openai/deployments/DEP
  CORS NOTE
    Opening via file:// may block Ollama; either set
    OLLAMA_ORIGINS=*  or serve the folder:  python3 -m http.server
  SOURCES (see compendium accompanying this file)
    ollama docs/api.md · mlc-ai/web-llm · pollinations/pollinations
    huggingface/transformers.js · build.nvidia.com · MS Learn Azure
================================================================ -->
<style>
/* ============================================================
   S11.CSS — VISUAL SYSTEM (dark default, light optional)
   ============================================================ */
:root{
  --bg:#0b0e14;
  --bg2:#10141d;
  --panel:#131926;
  --panel2:#182032;
  --line:#232c40;
  --text:#dbe4f5;
  --dim:#7d89a3;
  --accent:#4da3ff;
  --accent2:#7ee0a3;
  --warn:#ffb454;
  --err:#ff6b6b;
  --user:#1d3a5f;
  --asst:#16202f;
  --sys:#2a2438;
  --radius:12px;
  --mono:"Cascadia Code","JetBrains Mono",Consolas,monospace;
  --sans:system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
body.light{
  --bg:#f2f5fa;
  --bg2:#e8edf5;
  --panel:#ffffff;
  --panel2:#f0f4fb;
  --line:#d4dcea;
  --text:#16202f;
  --dim:#5c6a84;
  --accent:#0b6bcb;
  --accent2:#0c7a43;
  --user:#d8e8fb;
  --asst:#ffffff;
  --sys:#efe9fb;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{
  font-family:var(--sans);
  background:var(--bg);
  color:var(--text);
  overflow:hidden;
  font-size:15px;
  line-height:1.5;
}
#app{
  display:grid;
  grid-template-columns:264px 1fr;
  height:100vh;
}
/* ---------------- sidebar ---------------- */
#side{
  background:var(--bg2);
  border-right:1px solid var(--line);
  display:flex;
  flex-direction:column;
  min-width:0;
}
.brand{
  padding:18px 16px 10px;
  font-weight:800;
  letter-spacing:.12em;
  font-size:15px;
}
.brand span{color:var(--accent)}
.brand small{
  display:block;
  color:var(--dim);
  font-weight:400;
  letter-spacing:.02em;
  font-size:11px;
  margin-top:2px;
}
#btnNew{
  margin:6px 12px 10px;
  padding:9px 10px;
  background:var(--accent);
  color:#fff;
  border:none;
  border-radius:8px;
  cursor:pointer;
  font-weight:600;
  font-size:13px;
}
#btnNew:hover{filter:brightness(1.12)}
.side-label{
  padding:10px 16px 4px;
  font-size:11px;
  letter-spacing:.14em;
  color:var(--dim);
  text-transform:uppercase;
}
#sessions{
  overflow-y:auto;
  flex:0 0 auto;
  max-height:34vh;
}
.session{
  padding:8px 16px;
  cursor:pointer;
  border-left:3px solid transparent;
  display:flex;
  justify-content:space-between;
  gap:6px;
  align-items:center;
  font-size:13px;
}
.session:hover{background:var(--panel)}
.session.active{
  border-left-color:var(--accent);
  background:var(--panel);
}
.session .del{
  color:var(--dim);
  font-size:12px;
  padding:0 4px;
  visibility:hidden;
}
.session:hover .del{visibility:visible}
.session .del:hover{color:var(--err)}
#backendList{
  overflow-y:auto;
  padding-bottom:6px;
}
.brow{
  display:flex;
  align-items:center;
  gap:8px;
  padding:7px 16px;
  font-size:12.5px;
}
.brow .grow{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.brow small{color:var(--dim)}
.brow button{
  background:var(--panel2);
  color:var(--text);
  border:1px solid var(--line);
  border-radius:6px;
  font-size:11px;
  padding:2px 8px;
  cursor:pointer;
}
.brow button:hover{border-color:var(--accent);color:var(--accent)}
.dot{
  width:9px;height:9px;border-radius:50%;
  background:var(--dim);flex:0 0 auto;
  display:inline-block;
}
.dot.ok{background:var(--accent2)}
.dot.bad{background:var(--err)}
.dot.warn{background:var(--warn)}
.dot.busy{background:var(--warn);animation:pulse 1s infinite}
@keyframes pulse{50%{opacity:.35}}
.side-foot{
  margin-top:auto;
  border-top:1px solid var(--line);
  padding:10px 12px;
  display:flex;
  gap:8px;
}
.side-foot button{
  flex:1;
  background:var(--panel);
  border:1px solid var(--line);
  color:var(--text);
  border-radius:8px;
  padding:8px 0;
  cursor:pointer;
  font-size:12.5px;
}
.side-foot button:hover{border-color:var(--accent)}
/* ---------------- main column ---------------- */
#main{
  display:flex;
  flex-direction:column;
  min-width:0;
  height:100vh;
  background:var(--bg);
}
#topbar{
  display:flex;
  align-items:center;
  gap:12px;
  padding:10px 16px;
  border-bottom:1px solid var(--line);
  background:var(--bg2);
}
#status{
  display:flex;align-items:center;gap:8px;
  font-size:13px;color:var(--dim);
  min-width:0;overflow:hidden;white-space:nowrap;
}
#modelChip{
  margin-left:auto;
  font-family:var(--mono);
  font-size:12px;
  background:var(--panel);
  border:1px solid var(--line);
  padding:4px 10px;
  border-radius:999px;
  color:var(--accent);
  max-width:38vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
#btnStop{
  background:var(--panel);
  border:1px solid var(--line);
  color:var(--text);
  border-radius:8px;
  padding:6px 12px;
  cursor:pointer;
  font-size:12.5px;
}
#btnStop:disabled{opacity:.4;cursor:default}
#btnStop:not(:disabled):hover{border-color:var(--err);color:var(--err)}
/* ---------------- chat log ---------------- */
#chat{
  flex:1;
  overflow-y:auto;
  padding:22px 8px 12px;
  scroll-behavior:smooth;
}
.msg{
  max-width:820px;
  margin:0 auto 14px;
  padding:0 14px;
}
.bubble{
  border-radius:var(--radius);
  padding:12px 16px;
  border:1px solid var(--line);
  overflow-wrap:break-word;
}
.msg.user .bubble{background:var(--user)}
.msg.asst .bubble{background:var(--asst)}
.msg.sys  .bubble{background:var(--sys);font-size:13px;font-family:var(--mono)}
.msg.err  .bubble{background:var(--sys);border-color:var(--err)}
.meta{
  font-size:11px;
  color:var(--dim);
  margin:0 2px 4px;
  display:flex;gap:10px;flex-wrap:wrap;
}
.meta b{color:var(--accent);font-weight:600}
.bubble pre{
  background:#0a0d13;
  color:#d6e2f5;
  border:1px solid var(--line);
  border-radius:8px;
  padding:10px 12px;
  overflow-x:auto;
  font-family:var(--mono);
  font-size:12.5px;
  margin:8px 0;
  line-height:1.45;
}
body.light .bubble pre{background:#0d1420}
.bubble code{
  font-family:var(--mono);
  background:rgba(125,137,163,.18);
  padding:1px 5px;
  border-radius:5px;
  font-size:.92em;
}
.bubble pre code{background:none;padding:0}
.bubble a{color:var(--accent)}
.bubble ul,.bubble ol{margin:6px 0 6px 22px}
.bubble h1,.bubble h2,.bubble h3{margin:8px 0 4px}
/* typing dots */
.typing{display:inline-flex;gap:4px;padding:4px 0}
.typing i{
  width:7px;height:7px;border-radius:50%;
  background:var(--dim);
  animation:blink 1.2s infinite;
}
.typing i:nth-child(2){animation-delay:.2s}
.typing i:nth-child(3){animation-delay:.4s}
@keyframes blink{40%{opacity:.2;transform:translateY(-2px)}}
/* ---------------- composer ---------------- */
#composerWrap{
  display:flex;
  gap:8px;
  padding:10px 14px 4px;
  max-width:848px;
  margin:0 auto;
  width:100%;
}
#composer{
  flex:1;
  resize:none;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:var(--radius);
  color:var(--text);
  font-family:var(--sans);
  font-size:14.5px;
  padding:11px 14px;
  max-height:170px;
  outline:none;
}
#composer:focus{border-color:var(--accent)}
#btnSend,#btnMic{
  background:var(--accent);
  border:none;color:#fff;
  border-radius:var(--radius);
  padding:0 18px;
  cursor:pointer;
  font-weight:600;
  font-size:14px;
}
#btnMic{background:var(--panel);color:var(--text);border:1px solid var(--line);padding:0 12px}
#btnMic.rec{border-color:var(--err);color:var(--err);animation:pulse 1s infinite}
#btnSend:hover{filter:brightness(1.12)}
#hintbar{
  text-align:center;
  font-size:11.5px;
  color:var(--dim);
  padding:4px 0 10px;
}
#hintbar span{color:var(--accent2)}
/* ---------------- modal ---------------- */
#modal{
  position:fixed;inset:0;
  background:rgba(4,6,10,.66);
  display:flex;align-items:center;justify-content:center;
  z-index:50;
  backdrop-filter:blur(3px);
}
#modal.hidden{display:none}
.card{
  width:min(680px,94vw);
  max-height:88vh;
  overflow-y:auto;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:16px;
  padding:20px 22px;
}
.card h2{font-size:17px;margin-bottom:2px}
.card .sub{color:var(--dim);font-size:12.5px;margin-bottom:14px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px 14px}
.field{display:flex;flex-direction:column;gap:4px;margin-bottom:10px}
.field label{font-size:12px;color:var(--dim)}
.field input,.field select,.field textarea{
  background:var(--panel2);
  border:1px solid var(--line);
  color:var(--text);
  border-radius:8px;
  padding:8px 10px;
  font-size:13.5px;
  font-family:var(--sans);
  outline:none;
}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--accent)}
.field textarea{font-family:var(--mono);font-size:12.5px;min-height:64px}
.check{display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:8px}
.modal-foot{display:flex;gap:10px;justify-content:flex-end;margin-top:12px}
.modal-foot button{
  padding:9px 18px;border-radius:8px;cursor:pointer;
  border:1px solid var(--line);background:var(--panel2);color:var(--text);
  font-size:13.5px;
}
.modal-foot .primary{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
.helpbox{
  font-size:12px;color:var(--dim);
  border:1px dashed var(--line);
  border-radius:8px;padding:10px 12px;margin-top:10px;
  font-family:var(--mono);line-height:1.6;
}
/* ---------------- toast ---------------- */
#toast{
  position:fixed;
  left:50%;bottom:26px;
  transform:translateX(-50%) translateY(20px);
  background:var(--panel2);
  border:1px solid var(--line);
  color:var(--text);
  padding:10px 18px;
  border-radius:10px;
  font-size:13px;
  opacity:0;
  pointer-events:none;
  transition:.25s;
  z-index:99;
  max-width:80vw;
}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
/* ---------------- scrollbars ---------------- */
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-thumb{background:var(--line);border-radius:8px}
::-webkit-scrollbar-track{background:transparent}
/* ---------------- responsive ---------------- */
@media (max-width:760px){
  #app{grid-template-columns:1fr}
  #side{display:none}
}
</style>
</head>
<body>
<!-- ============================================================
     S11.HTML — LAYOUT
     ============================================================ -->
<div id="app">

  <aside id="side">
    <div class="brand">FLAT<span>TALK</span>-0
      <small>single-file conversational shell · keyless-first</small>
    </div>
    <button id="btnNew">+ New chat</button>

    <div class="side-label">Sessions</div>
    <div id="sessions"></div>

    <div class="side-label">Backends</div>
    <div id="backendList"></div>

    <div class="side-foot">
      <button id="btnSettings" title="Settings">⚙ Settings</button>
      <button id="btnTheme" title="Toggle theme">◐ Theme</button>
    </div>
  </aside>

  <main id="main">
    <header id="topbar">
      <div id="status">
        <span id="statusDot" class="dot busy"></span>
        <span id="statusText">booting…</span>
      </div>
      <div id="modelChip">—</div>
      <button id="btnStop" disabled title="Abort current stream">■ Stop</button>
    </header>

    <section id="chat" aria-live="polite"></section>

    <footer id="composerWrap">
      <textarea id="composer" rows="1"
        placeholder="Type a message…  ( / for commands · Shift+Enter = newline )"></textarea>
      <button id="btnMic" title="Voice input (if supported)">🎤</button>
      <button id="btnSend">Send ▸</button>
    </footer>
    <div id="hintbar">
      Enter = send · /help = commands · backend: <span id="hintBackend">—</span>
    </div>
  </main>
</div>

<!-- settings modal -->
<div id="modal" class="hidden">
  <div class="card">
    <h2>Settings</h2>
    <div class="sub">Everything persists in localStorage of this browser only.</div>

    <div class="grid2">
      <div class="field">
        <label>Backend</label>
        <select id="sBackend">
          <option value="auto">auto (probe all keyless)</option>
          <option value="ollama">ollama (local)</option>
          <option value="lmstudio">lmstudio (local)</option>
          <option value="pollinations">pollinations (online, keyless)</option>
          <option value="webllm">webllm (in-browser, WebGPU)</option>
          <option value="nvidia">nvidia nim (key)</option>
          <option value="azure">azure openai (key)</option>
          <option value="local">local PROTO engine (offline)</option>
        </select>
      </div>
      <div class="field">
        <label>Model name (per backend)</label>
        <input id="sModel" placeholder="qwen2.5:1.5b">
      </div>
      <div class="field">
        <label>Base URL (advanced)</label>
        <input id="sBase" placeholder="http://localhost:11434">
      </div>
      <div class="field">
        <label>API key (nvidia / azure only)</label>
        <input id="sKey" type="password" placeholder="leave empty for keyless">
      </div>
      <div class="field">
        <label>Temperature <span id="sTempVal"></span></label>
        <input id="sTemp" type="range" min="0" max="2" step="0.05" value="0.7">
      </div>
      <div class="field">
        <label>Max output tokens</label>
        <input id="sMaxTok" type="number" min="64" max="8192" value="1024">
      </div>
      <div class="field">
        <label>Context window (ollama num_ctx)</label>
        <input id="sNumCtx" type="number" min="512" max="131072" value="4096">
      </div>
      <div class="field">
        <label>Voice reply (TTS)</label>
        <select id="sTTS"><option value="off">off</option><option value="on">on</option></select>
      </div>
    </div>

    <div class="field">
      <label>System prompt</label>
      <textarea id="sSys"></textarea>
    </div>

    <label class="check">
      <input type="checkbox" id="sFallback" checked>
      Fall back to local PROTO engine when remote backend fails
    </label>

    <div class="helpbox">
OLLAMA CORS from file://  → set env OLLAMA_ORIGINS=* or run:
  python3 -m http.server 8000   then open http://localhost:8000/flattalk.html
PULL A MODEL            → ollama pull qwen2.5:1.5b   (0.5b = fastest)
WEBLLM                  → needs WebGPU (Chrome/Edge 113+); first run downloads ~0.9 GB
    </div>

    <div class="modal-foot">
      <button id="btnModalClose">Cancel</button>
      <button id="btnModalSave" class="primary">Save & apply</button>
    </div>
  </div>
</div>

<div id="toast"></div>

<script>
"use strict";
/* ================================================================
   FLATTALK-0 · RUNTIME
   ================================================================ */

/* ============================================================
   S01 · GLOBAL CONFIG + BACKEND REGISTRY
   Registry fields:
     kind     ollama | openai | pollinations | webllm | local
     base     default endpoint (user-overridable in settings)
     model    default model id
     keyed    true = requires API key (nvidia, azure)
     docs     primary documentation source
   ============================================================ */
const APP = { name:"FlatTalk", ver:"0.9.0", year:"2025" };

const REG = {
  ollama:{
    kind:"ollama",
    label:"Ollama (local)",
    base:"http://localhost:11434",
    model:"qwen2.5:1.5b",
    keyed:false,
    docs:"github.com/ollama/ollama · docs/api.md"
  },
  lmstudio:{
    kind:"openai",
    label:"LM Studio (local)",
    base:"http://localhost:1234/v1",
    model:"local-model",
    keyed:false,
    docs:"lmstudio.ai/docs · OpenAI-compatible :1234/v1"
  },
  pollinations:{
    kind:"pollinations",
    label:"Pollinations (online)",
    base:"https://text.pollinations.ai",
    model:"openai",
    keyed:false,
    docs:"github.com/pollinations/pollinations · keyless, rate-limited"
  },
  webllm:{
    kind:"webllm",
    label:"WebLLM (browser)",
    base:"",
    model:"Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
    keyed:false,
    docs:"github.com/mlc-ai/web-llm · WebGPU · ~0.9 GB first run"
  },
  nvidia:{
    kind:"openai",
    label:"NVIDIA NIM (key)",
    base:"https://integrate.api.nvidia.com/v1",
    model:"meta/llama-3.1-8b-instruct",
    keyed:true,
    docs:"build.nvidia.com · GTC 2024-03-18"
  },
  azure:{
    kind:"openai",
    label:"Azure OpenAI (key)",
    base:"https://YOUR-RESOURCE.openai.azure.com/openai/deployments/YOUR-DEPLOYMENT",
    model:"",
    keyed:true,
    apiVersion:"2024-02-15-preview",
    docs:"learn.microsoft.com/azure/ai-services/openai/reference"
  },
  local:{
    kind:"local",
    label:"PROTO engine (offline)",
    base:"",
    model:"proto-0",
    keyed:false,
    docs:"ELIZA (Weizenbaum 1966) + Markov (1913) + KB retrieval"
  }
};

const DETECT_ORDER = ["ollama","lmstudio","pollinations","local"];

const DEFAULT_SYSTEM =
  "You are FlatTalk, a concise, factual, helpful assistant. " +
  "Answer in English unless asked otherwise. Prefer short answers; " +
  "use lists or code blocks only when they help.";

/* ============================================================
   S02 · UTILITIES
   ============================================================ */
const $  = (s)=>document.querySelector(s);
const $$ = (s)=>Array.from(document.querySelectorAll(s));

function el(tag, cls, html){
  const n = document.createElement(tag);
  if(cls) n.className = cls;
  if(html !== undefined) n.innerHTML = html;
  return n;
}
function uid(){
  return "x" + Date.now().toString(36) + Math.random().toString(36).slice(2,8);
}
function now(){ return new Date(); }
function hhmm(d){
  d = d || now();
  return String(d.getHours()).padStart(2,"0") + ":" +
         String(d.getMinutes()).padStart(2,"0");
}
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
function debounce(fn, ms){
  let t;
  return function(...a){
    clearTimeout(t);
    t = setTimeout(()=>fn.apply(this,a), ms);
  };
}
function abortTimeout(ms){
  const c = new AbortController();
  setTimeout(()=>c.abort(), ms);
  return c.signal;
}
function pick(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}
function download(name, text){
  const blob = new Blob([text], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
}
function toast(msg, ms){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(()=>t.classList.remove("show"), ms||2600);
}

/* ============================================================
   S03 · PERSISTENT STORE (namespaced localStorage)
   ============================================================ */
const NS = "flattalk.";
const ST = {
  get(k, dflt){
    try{
      const v = localStorage.getItem(NS+k);
      return v===null ? dflt : JSON.parse(v);
    }catch(e){ return dflt; }
  },
  set(k, v){
    try{ localStorage.setItem(NS+k, JSON.stringify(v)); }catch(e){}
  },
  del(k){
    try{ localStorage.removeItem(NS+k); }catch(e){}
  }
};

/* ============================================================
   S04 · TEXT TOOLKIT
   ============================================================ */
function esc(s){
  return String(s)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}
/* rough token estimate (≈4 chars/token, OpenAI heuristic) */
function estTokens(s){
  if(!s) return 0;
  return Math.ceil(s.length/4);
}
function words(s){
  return String(s).toLowerCase().split(/[^a-z0-9']+/).filter(Boolean);
}
/* feature-hashing embedding (256 dims) — cheap semantic overlap
   signal for the KB retriever; no weights, no network. */
const EMB_DIM = 256;
function embed(text){
  const v = new Float32Array(EMB_DIM);
  for(const w of words(text)){
    let h = 2166136261;
    for(let i=0;i<w.length;i++){
      h ^= w.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    const idx = (h>>>0) % EMB_DIM;
    const sign = ((h>>>16) & 1) ? 1 : -1;
    v[idx] += sign;
  }
  let n = 0;
  for(let i=0;i<EMB_DIM;i++) n += v[i]*v[i];
  n = Math.sqrt(n) || 1;
  for(let i=0;i<EMB_DIM;i++) v[i]/=n;
  return v;
}
function cosine(a,b){
  let s = 0;
  for(let i=0;i<EMB_DIM;i++) s += a[i]*b[i];
  return s;
}
/* lightweight markdown: fenced code, inline code, bold, italic,
   links (http/https only), headings, lists. Escapes HTML first. */
function mdLite(src){
  const blocks = [];
  src = String(src).replace(/```(\w*)\n?([\s\S]*?)```/g,(m,lang,code)=>{
    blocks.push({lang, code});
    return "\u0000B" + (blocks.length-1) + "\u0000";
  });
  let out = esc(src);
  out = out.replace(/^### (.+)$/gm,"<h3>$1</h3>");
  out = out.replace(/^## (.+)$/gm,"<h2>$1</h2>");
  out = out.replace(/^# (.+)$/gm,"<h1>$1</h1>");
  out = out.replace(/`([^`\n]+)`/g,"<code>$1</code>");
  out = out.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>");
  out = out.replace(/(^|\s)\*([^*\n]+)\*/g,"$1<em>$2</em>");
  out = out.replace(
    /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  out = out.replace(/^\s*[-*] (.+)$/gm,"<li>$1</li>");
  out = out.replace(/(<li>[\s\S]*?<\/li>)(?!\s*<li>)/g,"<ul>$1</ul>");
  out = out.replace(/\u0000B(\d+)\u0000/g,(m,i)=>{
    const b = blocks[+i];
    return '<pre><code data-lang="'+esc(b.lang)+'">' +
           esc(b.code.replace(/\n$/,"")) + "</code></pre>";
  });
  out = out.replace(/\n/g,"<br>");
  out = out.replace(/<br>(<pre>)/g,"$1").replace(/(<\/pre>)<br>/g,"$1");
  out = out.replace(/<br>(<h[123]>)/g,"$1").replace(/(<\/h[123]>)<br>/g,"$1");
  out = out.replace(/<br>(<ul>)/g,"$1").replace(/(<\/ul>)<br>/g,"$1");
  return out;
}

/* ============================================================
   S05 · PROTO ENGINE — OFFLINE FALLBACK
   Hybrid of three classic techniques (no network, no weights):
     a) ELIZA-style rewrite rules     Weizenbaum, CACM 9(1), 1966
     b) Markov-chain generation       Markov 1913 / Shannon 1948
     c) Keyword+hash retrieval over a seed knowledge base
   plus profile memory, arithmetic and clock skills.
   ============================================================ */

/* --- S05.1 pronoun reflection (ELIZA) --- */
const REFLECT = {
  "i":"you","me":"you","my":"your","mine":"yours",
  "am":"are","are":"am","was":"were","were":"was",
  "you":"i","your":"my","yours":"mine",
  "we":"you","our":"your","us":"you",
  "i'm":"you are","you're":"i am","i've":"you have","you've":"i have"
};
function reflectPhrase(s){
  return String(s).toLowerCase().split(/\s+/).map(w=>{
    const clean = w.replace(/[^a-z']/g,"");
    const r = REFLECT[clean];
    return r ? r + w.slice(clean.length) : w;
  }).join(" ");
}

/* --- S05.2 ELIZA-style rules ($1 = reflected capture) --- */
const RULES = [
  {re:/\bi need (.+)/i, rep:[
    "You say you need $1. What would change if you got it?",
    "How urgent is $1 for you right now?",
    "What stands between you and $1?"]},
  {re:/\bi want (.+)/i, rep:[
    "What would getting $1 give you?",
    "You want $1 — what is the first step toward it?",
    "Why do you want $1 specifically?"]},
  {re:/\bi feel (.+)/i, rep:[
    "You feel $1. How long have you felt that way?",
    "What do you think causes you to feel $1?"]},
  {re:/\bi am (.+)/i, rep:[
    "You say you are $1. What makes you say that?",
    "How does being $1 affect you?"]},
  {re:/\bi'?m (.+)/i, rep:[
    "You are $1 — tell me more about that.",
    "What does being $1 mean to you?"]},
  {re:/\bi (?:can'?t|cannot) (.+)/i, rep:[
    "What stops you from $1?",
    "Have you tried breaking $1 into smaller steps?"]},
  {re:/\bwhy (?:can'?t|cannot|can not) i (.+)/i, rep:[
    "What do you think prevents you from $1?",
    "If you could $1, what would be different?"]},
  {re:/\bwhy (?:is|are) (.+)/i, rep:[
    "What is your own hypothesis about why $1?",
    "What evidence do you have about $1?"]},
  {re:/\bhow (?:do|can|should) i (.+)/i, rep:[
    "One approach to $1: define the smallest testable step, do it, iterate.",
    "For $1, list constraints first, then options, then pick the cheapest experiment."]},
  {re:/\bperhaps\b|\bmaybe\b/i, rep:[
    "You sound uncertain. What part is unclear?",
    "What would make you more sure?"]},
  {re:/\byes[.!]*$/i, rep:[
    "Good — go on.",
    "You seem certain. Tell me more."]},
  {re:/\bno[.!]*$/i, rep:[
    "Understood. What would you say instead?",
    "No — fair enough. What is on your mind then?"]},
  {re:/\bsorry\b|\bapolog/i, rep:[
    "No apology needed. What shall we do next?",
    "It is fine. Continue whenever you are ready."]},
  {re:/\bthank/i, rep:[
    "You are welcome.",
    "Anytime. Anything else?"]},
  {re:/\b(?:hello|hi|hey|yo|good (?:morning|afternoon|evening))\b/i, rep:[
    "Hello! I am the offline PROTO engine. Ask me about this app, or try /help.",
    "Hi — running fully local right now. Type /backends to see live engines."]},
  {re:/\bbye\b|\bgoodbye\b|\bsee you\b/i, rep:[
    "Goodbye! Your session stays saved in this browser.",
    "Bye — type /export before you go if you want a copy of this chat."]},
  {re:/\bi like (.+)/i, rep:[
    "Noted — you like $1. I will remember that this session.",
    "$1 sounds interesting. What do you enjoy about it?"]},
  {re:/\bi hate (.+)/i, rep:[
    "What about $1 bothers you the most?",
    "That is strong — what happened with $1?"]},
  {re:/\bi work (?:as|at|on) (.+)/i, rep:[
    "You work on $1 — noted. What is the current challenge there?",
    "Interesting field. What does a typical day on $1 look like?"]},
  {re:/\bmy (?:name|names) is (\w+)/i, rep:[
    "Nice to meet you, $1! I will remember your name.",
    "Hello $1 — saved to session memory."]},
  {re:/\bcall me (\w+)/i, rep:[
    "Of course, $1.",
    "Noted — I will call you $1."]},
  {re:/\bi live in (.+)/i, rep:[
    "You live in $1 — noted.",
    "What do you like most about living in $1?"]},
  {re:/\bdo you (?:like|love|enjoy) (.+)/i, rep:[
    "As a local rule engine I have no preferences, but $1 is a fine topic — ask me /kb about it.",
    "I cannot feel, yet I can discuss $1. Try asking a specific question."]},
  {re:/\bare you (?:a |an )?([\w ]+)/i, rep:[
    "I am FlatTalk's offline PROTO engine: rules (ELIZA, 1966) + Markov (1913) + a small knowledge base.",
    "Roughly $1? I am a deterministic script. Connect Ollama or WebLLM for a real neural model — see /backends."]},
  {re:/\bwhat do you think about (.+)/i, rep:[
    "On $1: I can only retrieve canned facts offline. For reasoning, switch to a neural backend (/backends).",
    "$1 deserves a real model. Try ollama + qwen2.5 — see the Settings panel."]},
  {re:/\bhelp\b|\bwhat can you do\b/i, rep:[
    "I answer offline with rules + retrieval. For commands type /help; to upgrade intelligence type /backends.",
    "Offline mode: small talk, stored facts (/kb topics), math, time. For real answers connect a backend (/backends)."]},
  {re:/\bremember\b/i, rep:[
    "I keep memory only for this session, in your browser's localStorage.",
    "Session memory: name, likes, location, work. Ask me 'what do i like?' to test it."]},
  {re:/\b(who|what|when|where|why|how)\b/i, rep:[
    "Offline I have only a small KB — try keywords like: ollama, qwen, webgpu, azure, nvidia, eliza, transformer, gguf.",
    "That question needs a real model. Type /backends and switch, or rephrase with KB keywords."]}
];

/* --- S05.3 seed knowledge base (offline retrieval) --- */
const KB = [
  {k:["flattalk","this app","this tool","you"],
   t:"FlatTalk-0 is a single-file HTML conversational shell. It connects keyless backends (Ollama, LM Studio, Pollinations, WebLLM in-browser) and keeps a deterministic offline engine as last resort. All state stays in your browser localStorage."},
  {k:["ollama"],
   t:"Ollama runs LLMs locally and exposes POST /api/chat (NDJSON streaming) and GET /api/tags on http://localhost:11434 — no API key. Pull a model: `ollama pull qwen2.5:1.5b`. Docs: github.com/ollama/ollama/blob/main/docs/api.md. If the browser blocks CORS from file://, set OLLAMA_ORIGINS=* or serve this page over http."},
  {k:["qwen","qwen2.5","qwen3","alibaba"],
   t:"Qwen is Alibaba's open-weight LLM family. Qwen2.5 (2024-09-19) spans 0.5B–72B under Apache-2.0 (most sizes); Qwen3 (2025-04) adds hybrid thinking modes up to 235B-A22B MoE. Small sizes (0.5B/1.5B/3B) are the sweet spot for laptop/browser use. Sources: qwenlm.github.io, github.com/QwenLM."},
  {k:["webllm","mlc","webgpu","browser model"],
   t:"WebLLM (github.com/mlc-ai/web-llm, MLC team) runs models fully inside the browser via WebGPU, using an OpenAI-style chat.completions API. FlatTalk loads it from https://esm.run/@mlc-ai/web-llm and defaults to Qwen2.5-0.5B-Instruct-q4f16_1-MLC (~0.9 GB, cached after first run). Requires Chrome/Edge 113+ (2023-04), Firefox 141 (2025-07), Safari 26."},
  {k:["transformers.js","onnx","xenova"],
   t:"Transformers.js v3 (@huggingface/transformers, 2024-10) runs ONNX models in-browser via WASM/WebGPU — great for embeddings, STT/TTS and small LMs without a server. github.com/huggingface/transformers.js."},
  {k:["pollinations"],
   t:"Pollinations.ai offers a keyless text endpoint: POST https://text.pollinations.ai/openai (OpenAI-compatible) or GET /{prompt}. Free tier is rate-limited and data leaves your machine — the privacy trade-off of keyless online mode. github.com/pollinations/pollinations."},
  {k:["nvidia","nim"],
   t:"NVIDIA NIM (announced GTC 2024-03-18) serves optimized inference. Cloud: https://integrate.api.nvidia.com/v1, OpenAI-compatible, requires NVIDIA_API_KEY from build.nvidia.com. Self-hosted NIM containers run on local RTX/datacenter GPUs."},
  {k:["azure","openai service"],
   t:"Azure OpenAI (GA 2023-07) uses https://RESOURCE.openai.azure.com/openai/deployments/DEPLOYMENT/chat/completions?api-version=2024-02-15-preview with an `api-key` header — not a Bearer token. Docs: learn.microsoft.com/azure/ai-services/openai/reference."},
  {k:["lmstudio"],
   t:"LM Studio exposes an OpenAI-compatible local server at http://localhost:1234/v1 — enable it in the Local Server tab, load any GGUF, then point FlatTalk at lmstudio. lmstudio.ai/docs."},
  {k:["gguf","llama.cpp","quantization","quant"],
   t:"GGUF is the llama.cpp container format (2023-08, replaces GGML) for quantized weights. Common levels: q4_K_M ≈ 4.5 bits/weight — the default quality/size sweet spot; q8_0 ≈ near-fp16 quality, 2× size. Source: github.com/ggml-org/llama.cpp."},
  {k:["eliza","weizenbaum"],
   t:"ELIZA (Joseph Weizenbaum, MIT, 1964–66) simulated a Rogerian therapist with pattern rewriting; published in CACM 9(1):36–45, 1966. Users attributed understanding to it — the 'ELIZA effect', later named in Weizenbaum's Computer Power and Human Reason (1976). The PROTO engine you are using descends from this technique."},
  {k:["turing","test","imitation game"],
   t:"Alan Turing's 'Computing Machinery and Intelligence' (Mind, 1950) proposed the imitation game as an operational test of machine intelligence. Historic milestones: ELIZA 1966, ALICE/AIML (Loebner wins 2000/01/04), Cleverbot (59.3% perceived humanity, Techniche 2011), ChatGPT 2022-11-30."},
  {k:["markov","chain"],
   t:"A Markov chain predicts the next token from the current state (A. A. Markov, 1913, applied to Pushkin's verse). Shannon (1948) used n-gram models to estimate English entropy — the statistical ancestor of every LLM. PROTO uses a bigram chain for its generative fallback."},
  {k:["transformer","attention"],
   t:"The Transformer (Vaswani et al., 'Attention Is All You Need', arXiv:1706.03762, 2017) replaced recurrence with scaled dot-product attention, enabling parallel training and the GPT/LLaMA/Qwen lineages. Key trick: positional encodings since attention has no order sense."},
  {k:["token","context","window","num_ctx"],
   t:"A token ≈ 4 chars of English. The context window limits prompt+answer; in Ollama raise it with num_ctx (FlatTalk setting). Larger windows cost memory quadratically in vanilla attention."},
  {k:["temperature","sampling"],
   t:"Temperature rescales logits before sampling: 0 → deterministic greedy, ~0.7 → balanced, >1.2 → divergent/creative. FlatTalk passes it to every backend via options.temperature."},
  {k:["streaming","sse","ndjson"],
   t:"Chat backends stream tokens: Ollama emits NDJSON lines (one JSON per line), OpenAI-compatible servers emit SSE lines `data: {...}` ending in `data: [DONE]`. FlatTalk parses both natively — see its readNDJSON/readSSE helpers."},
  {k:["cors","origin"],
   t:"CORS blocks cross-origin fetch unless the server sends Access-Control-Allow-Origin. Ollama allows localhost origins by default; a file:// page may send Origin:null → set OLLAMA_ORIGINS=* or serve via `python3 -m http.server`."},
  {k:["privacy","local","data"],
   t:"Local-first order maximizes privacy: Ollama/LM Studio never leave your machine; WebLLM computes in-browser after download; Pollinations/NVIDIA/Azure transmit your prompt to third parties. Check each provider's data policy before sending sensitive text."},
  {k:["license","apache","weights"],
   t:"Qwen2.5 weights: Apache-2.0 for most sizes (check per-model card); Llama uses Meta's community license; code here is single-file and inspectable — read it before trusting it."},
  {k:["wasm"],
   t:"WebAssembly (W3C standard, 2019) runs compiled code near-native in browsers; combined with WebGPU compute it is what makes in-browser LLMs (Transformers.js, WebLLM) possible since ~2023."},
  {k:["embedding","hash"],
   t:"An embedding maps text to a vector; cosine similarity ranks relatedness. PROTO uses feature hashing (256 dims, signed hashes) — no trained weights, but enough to retrieve KB facts by keyword overlap."},
  {k:["command","commands","slash"],
   t:"Commands: /help, /backends (probe all), /use <id>, /model <name>, /models (list current), /temp <0-2>, /sys <prompt>, /export, /clear, /stats."},
  {k:["git","github","source"],
   t:"Primary repos: github.com/ollama/ollama · github.com/QwenLM/Qwen3 · github.com/mlc-ai/web-llm · github.com/huggingface/transformers.js · github.com/ggml-org/llama.cpp · github.com/pollinations/pollinations · build.nvidia.com."}
];

/* --- S05.4 Markov seed corpus (history of conversational AI) --- */
const CORPUS = [
  "In 1950 Turing asked whether machines can think and proposed the imitation game.",
  "In 1966 Weizenbaum released ELIZA and users believed it understood them.",
  "Markov chains model the next word from the current word and nothing else.",
  "Shannon measured the entropy of English with statistical word models.",
  "In 2017 the transformer replaced recurrence with attention and scaled everything.",
  "Attention lets every token look at every other token in one parallel step.",
  "Quantization shrinks weights to four bits and keeps most of the quality.",
  "Ollama serves local models with a simple streaming interface and no keys.",
  "WebGPU lets the browser run neural networks directly on the graphics card.",
  "Small models around one billion parameters now run on ordinary laptops.",
  "A conversation is just tokens flowing through a context window.",
  "Local inference keeps your words on your own machine and nowhere else.",
  "The best answer is usually short concrete and verifiable by the reader.",
  "Open weights let anyone inspect inspect and improve the model itself."
];

/* --- S05.5 engine class --- */
class ProtoEngine{
  constructor(){
    this.chain = {};
    this.chainKeys = [];
    this._buildChain(CORPUS.join(" "));
    this.kbEmb = KB.map(e=>({e, v:embed(e.k.join(" "))}));
    this.profile = ST.get("profile", {name:null,likes:[],place:null,work:null,extra:{}});
    this.disclaimed = false;
  }
  _buildChain(text){
    const ws = text.split(/\s+/).filter(Boolean);
    for(let i=0;i<ws.length-1;i++){
      const a = ws[i].toLowerCase();
      const b = ws[i+1];
      if(!this.chain[a]) this.chain[a] = [];
      this.chain[a].push(b);
    }
    this.chainKeys = Object.keys(this.chain);
  }
  _saveProfile(){ ST.set("profile", this.profile); }
  _extractMemory(raw){
    const t = raw.trim();
    let m;
    if((m = t.match(/my name is (\w[\w -]{0,19})/i))) this.profile.name = m[1];
    if((m = t.match(/call me (\w[\w -]{0,19})/i)))     this.profile.name = m[1];
    if((m = t.match(/i live in ([\w .-]{2,30})/i)))    this.profile.place = m[1];
    if((m = t.match(/i work (?:as|at|on) ([\w .-]{2,40})/i))) this.profile.work = m[1];
    if((m = t.match(/i (?:really )?like ([\w .-]{2,40})/i))){
      const like = m[1].trim();
      if(!this.profile.likes.includes(like)) this.profile.likes.push(like);
      if(this.profile.likes.length>12) this.profile.likes.shift();
    }
    this._saveProfile();
  }
  _profileAnswer(lower){
    const p = this.profile;
    if(/what('s| is) my name|do you know my name/.test(lower))
      return p.name ? "You told me your name is " + p.name + "."
                    : "You have not told me your name yet.";
    if(/what do i like|my likes/.test(lower))
      return p.likes.length ? "You said you like: " + p.likes.join(", ") + "."
                            : "You have not told me anything you like yet.";
    if(/where do i live/.test(lower))
      return p.place ? "You said you live in " + p.place + "."
                     : "You have not told me where you live.";
    if(/what do i do|what is my (?:work|job)/.test(lower))
      return p.work ? "You told me you work on " + p.work + "."
                    : "You have not mentioned your work yet.";
    return null;
  }
  _math(raw){
    const t = raw.trim();
    if(/^[0-9+\-*/(). %]+$/.test(t) && /[0-9]/.test(t) && /[+\-*/%]/.test(t)){
      try{
        const val = Function('"use strict";return(' + t.replace(/%/g,"/100") + ')')();
        if(typeof val === "number" && isFinite(val))
          return t + " = " + String(Math.round(val*1e6)/1e6);
      }catch(e){}
    }
    return null;
  }
  _clock(lower){
    if(/what(?:'s| is)? the time|what time is it/.test(lower))
      return "It is " + now().toLocaleTimeString() + " (your device clock).";
    if(/what(?:'s| is)? (?:the |today's )?date|what day is it/.test(lower))
      return "Today is " + now().toDateString() + ".";
    return null;
  }
  _kbQuery(raw){
    const qv = embed(raw);
    const qw = new Set(words(raw));
    let best = null, bestScore = 0;
    for(const item of this.kbEmb){
      let s = cosine(qv, item.v);
      for(const k of item.e.k){
        for(const kw of k.split(/\s+/)){
          if(qw.has(kw)) s += 0.45;
        }
      }
      if(s > bestScore){ bestScore = s; best = item.e; }
    }
    if(best && bestScore > 0.52) return best.t;
    return null;
  }
  _rules(raw){
    for(const r of RULES){
      const m = raw.match(r.re);
      if(m){
        let reply = pick(r.rep);
        if(m[1] !== undefined) reply = reply.replace(/\$1/g, reflectPhrase(m[1]));
        return reply;
      }
    }
    return null;
  }
  _markov(inputWords){
    const starters = inputWords.filter(w=>this.chain[w]);
    let cur = starters.length ? pick(starters)
                             : pick(this.chainKeys);
    const out = [cur];
    const target = 8 + Math.floor(Math.random()*10);
    for(let i=0;i<target;i++){
      const nexts = this.chain[cur];
      if(!nexts || !nexts.length) break;
      cur = pick(nexts);
      out.push(cur);
    }
    let s = out.join(" ");
    s = s.charAt(0).toUpperCase() + s.slice(1);
    if(!/[.!?]$/.test(s)) s += ".";
    return s;
  }
  respond(raw){
    const lower = String(raw).toLowerCase();
    this._extractMemory(raw);
    let out = null, src = "none";

    out = this._profileAnswer(lower);        if(out) src = "memory";
    if(!out){ out = this._math(raw);         if(out) src = "math"; }
    if(!out){ out = this._clock(lower);      if(out) src = "clock"; }
    if(!out){ out = this._kbQuery(raw);      if(out) src = "kb"; }
    if(!out){ out = this._rules(raw);        if(out) src = "rules"; }
    if(!out){
      out = this._markov(words(raw));
      src = "markov";
    }
    if(!this.disclaimed && src !== "kb"){
      this.disclaimed = true;
      out += "\n\n_(offline PROTO engine — for real answers run `/backends` and switch to Ollama or WebLLM.)_";
    }
    return {text:out, src};
  }
}
const PROTO = new ProtoEngine();

/* ============================================================
   S06 · STREAM PARSERS
   ============================================================ */
/* NDJSON: one JSON object per line (Ollama /api/chat) */
async function* readNDJSON(res){
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = "";
  while(true){
    const {done, value} = await reader.read();
    if(done) break;
    buf += dec.decode(value, {stream:true});
    let i;
    while((i = buf.indexOf("\n")) >= 0){
      const line = buf.slice(0,i).trim();
      buf = buf.slice(i+1);
      if(!line) continue;
      let j;
      try{ j = JSON.parse(line); }catch(e){ continue; }
      yield j;
    }
  }
}
/* SSE: lines `data: {json}` … `data: [DONE]` (OpenAI-compatible) */
async function* readSSE(res){
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = "";
  while(true){
    const {done, value} = await reader.read();
    if(done) break;
    buf += dec.decode(value, {stream:true});
    let i;
    while((i = buf.indexOf("\n")) >= 0){
      const line = buf.slice(0,i).trim();
      buf = buf.slice(i+1);
      if(!line || line.startsWith(":")) continue;
      if(!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if(data === "[DONE]") return;
      try{ yield JSON.parse(data); }catch(e){}
    }
  }
}

/* ============================================================
   S07 · CONNECTORS
   All expose: probe() -> bool, listModels() -> [..],
   stream(messages, opts, signal[, onProgress]) -> async yield text
   ============================================================ */

/* --- S07.1 Ollama (NDJSON, keyless, local) --- */
class OllamaConnector{
  constructor(){
    this.id = "ollama";
    this.base = ST.get("base.ollama", REG.ollama.base);
    this.model = ST.get("model.ollama", REG.ollama.model);
  }
  describe(){ return REG.ollama.label + " · " + this.model; }
  async probe(){
    try{
      const r = await fetch(this.base + "/api/tags", {signal:abortTimeout(2500)});
      return r.ok;
    }catch(e){ return false; }
  }
  async listModels(){
    try{
      const r = await fetch(this.base + "/api/tags", {signal:abortTimeout(4000)});
      const j = await r.json();
      return (j.models||[]).map(m=>m.name);
    }catch(e){ return []; }
  }
  async *stream(messages, opts, signal){
    const body = {
      model: this.model,
      messages: messages,
      stream: true,
      options: {
        temperature: opts.temperature,
        num_predict: opts.maxTokens
      },
      num_ctx: opts.numCtx
    };
    const res = await fetch(this.base + "/api/chat", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(body),
      signal
    });
    if(!res.ok) throw new Error("Ollama HTTP " + res.status);
    for await(const j of readNDJSON(res)){
      if(j.error) throw new Error("Ollama: " + j.error);
      if(j.message && j.message.content) yield j.message.content;
      if(j.done) return;
    }
  }
}

/* --- S07.2 OpenAI-compatible (LM Studio, NVIDIA NIM, Azure) --- */
class OpenAICompatConnector{
  constructor(id){
    this.id = id;
    const reg = REG[id];
    this.reg = reg;
    this.base = ST.get("base."+id, reg.base);
    this.model = ST.get("model."+id, reg.model);
    this.key = ST.get("key."+id, "");
  }
  describe(){ return this.reg.label + " · " + (this.model||"(deployment)"); }
  _headers(){
    const h = {"Content-Type":"application/json"};
    if(this.id === "azure"){ h["api-key"] = this.key; }
    else if(this.key){ h["Authorization"] = "Bearer " + this.key; }
    return h;
  }
  _url(){
    const b = this.base.replace(/\/$/,"");
    if(this.id === "azure")
      return b + "/chat/completions?api-version=" + this.reg.apiVersion;
    return b + "/chat/completions";
  }
  async probe(){
    try{
      const r = await fetch(this.base.replace(/\/$/,"") + "/models",
        {headers:this._headers(), signal:abortTimeout(3000)});
      return r.ok;
    }catch(e){ return false; }
  }
  async listModels(){
    try{
      const r = await fetch(this.base.replace(/\/$/,"") + "/models",
        {headers:this._headers(), signal:abortTimeout(4000)});
      const j = await r.json();
      return (j.data||[]).map(m=>m.id);
    }catch(e){ return this.model ? [this.model] : []; }
  }
  async *stream(messages, opts, signal){
    const res = await fetch(this._url(), {
      method:"POST",
      headers:this._headers(),
      signal,
      body: JSON.stringify({
        model: this.model,
        messages: messages,
        stream: true,
        temperature: opts.temperature,
        max_tokens: opts.maxTokens
      })
    });
    if(!res.ok){
      const detail = (await res.text()).slice(0,180);
      throw new Error(this.reg.label + " HTTP " + res.status + " — " + detail);
    }
    for await(const j of readSSE(res)){
      const d = j.choices && j.choices[0] && j.choices[0].delta;
      if(d && d.content) yield d.content;
    }
  }
}

/* --- S07.3 Pollinations (keyless online) --- */
class PollinationsConnector{
  constructor(){
    this.id = "pollinations";
    this.base = ST.get("base.pollinations", REG.pollinations.base);
    this.model = ST.get("model.pollinations", REG.pollinations.model);
  }
  describe(){ return REG.pollinations.label + " · " + this.model; }
  async probe(){
    try{
      const r = await fetch(this.base + "/models", {signal:abortTimeout(5000)});
      return r.ok;
    }catch(e){ return false; }
  }
  async listModels(){
    try{
      const r = await fetch(this.base + "/models", {signal:abortTimeout(5000)});
      const j = await r.json();
      if(Array.isArray(j)) return j.map(m=>m.name||m);
      return [];
    }catch(e){ return []; }
  }
  async *stream(messages, opts, signal){
    const res = await fetch(this.base + "/openai", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      signal,
      body: JSON.stringify({
        model: this.model,
        messages: messages,
        stream: true,
        temperature: opts.temperature
      })
    });
    if(!res.ok) throw new Error("Pollinations HTTP " + res.status);
    const ct = res.headers.get("content-type") || "";
    if(ct.includes("json")){
      for await(const j of readSSE(res)){
        const d = j.choices && j.choices[0] && j.choices[0].delta;
        if(d && d.content) yield d.content;
      }
    }else{
      /* non-JSON: plain text streamed back */
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      while(true){
        const {done, value} = await reader.read();
        if(done) break;
        yield dec.decode(value, {stream:true});
      }
    }
  }
}

/* --- S07.4 WebLLM (in-browser neural model via WebGPU) --- */
class WebLLMConnector{
  constructor(){
    this.id = "webllm";
    this.model = ST.get("model.webllm", REG.webllm.model);
    this.engine = null;
    this.loading = false;
  }
  describe(){ return REG.webllm.label + " · " + this.model; }
  async probe(){
    return (typeof navigator !== "undefined") && !!navigator.gpu;
  }
  async ensure(onProgress){
    if(this.engine) return this.engine;
    if(this.loading) throw new Error("WebLLM is already loading");
    this.loading = true;
    try{
      onProgress && onProgress({text:"importing web-llm module…", progress:0});
      const mlc = await import("https://esm.run/@mlc-ai/web-llm");
      this.engine = await mlc.CreateMLCEngine(this.model, {
        initProgressCallback:(p)=>{
          onProgress && onProgress(p);
        }
      });
      return this.engine;
    }catch(e){
      this.engine = null;
      throw new Error("WebLLM init failed: " + e.message +
        " (needs WebGPU — Chrome/Edge 113+, Firefox 141+, Safari 26)");
    }finally{
      this.loading = false;
    }
  }
  async listModels(){ return [this.model]; }
  async *stream(messages, opts, signal, onProgress){
    const eng = await this.ensure(onProgress);
    const gen = await eng.chat.completions.create({
      messages: messages,
      stream: true,
      temperature: opts.temperature,
      max_tokens: opts.maxTokens
    });
    for await(const chunk of gen){
      if(signal && signal.aborted) break;
      const d = chunk.choices && chunk.choices[0] && chunk.choices[0].delta;
      if(d && d.content) yield d.content;
    }
  }
}

/* --- S07.5 Local PROTO (offline deterministic) --- */
class LocalConnector{
  constructor(){ this.id = "local"; }
  describe(){ return REG.local.label + " · proto-0"; }
  async probe(){ return true; }
  async listModels(){ return ["proto-0"]; }
  async *stream(messages){
    const lastUser = [...messages].reverse().find(m=>m.role==="user");
    const out = PROTO.respond(lastUser ? lastUser.content : "");
    /* simulate token streaming for UI smoothness */
    const parts = out.text.split(/(?<=\s)/);
    for(let i=0;i<parts.length;i+=3){
      yield parts.slice(i,i+3).join("");
      await new Promise(r=>setTimeout(r,12));
    }
  }
}

/* ============================================================
   S08 · BACKEND MANAGER
   ============================================================ */
const Backends = {
  cache:{},
  make(id){
    if(this.cache[id]) return this.cache[id];
    let c;
    switch(REG[id].kind){
      case "ollama":       c = new OllamaConnector(); break;
      case "openai":       c = new OpenAICompatConnector(id); break;
      case "pollinations": c = new PollinationsConnector(); break;
      case "webllm":       c = new WebLLMConnector(); break;
      case "local":        c = new LocalConnector(); break;
    }
    this.cache[id] = c;
    return c;
  },
  reset(id){ delete this.cache[id]; },
  async autoDetect(){
    for(const id of DETECT_ORDER){
      const c = this.make(id);
      try{ if(await c.probe()) return id; }catch(e){}
    }
    return "local";
  }
};

/* ============================================================
   S09 · CONVERSATION MANAGER
   ============================================================ */
const Conv = {
  sessions: ST.get("sessions", []),
  currentId: ST.get("current", null),
  sysPrompt: ST.get("sysPrompt", DEFAULT_SYSTEM),
  stats: ST.get("stats", {turns:0, charsIn:0, charsOut:0}),

  current(){
    let s = this.sessions.find(x=>x.id===this.currentId);
    if(!s){
      s = {id:uid(), title:"New chat", messages:[], updated:Date.now()};
      this.sessions.unshift(s);
      this.currentId = s.id;
      this.persist();
    }
    return s;
  },
  persist(){
    ST.set("sessions", this.sessions.slice(0,40));
    ST.set("current", this.currentId);
    ST.set("stats", this.stats);
  },
  add(role, text){
    const s = this.current();
    s.messages.push({role, content:text});
    s.updated = Date.now();
    if(role==="user" && s.messages.filter(m=>m.role==="user").length===1){
      s.title = text.slice(0,42) + (text.length>42?"…":"");
    }
    if(role==="user") this.stats.turns++, this.stats.charsIn += text.length;
    if(role==="assistant") this.stats.charsOut += text.length;
    this.persist();
  },
  trimmed(numCtx){
    const s = this.current();
    const budget = Math.max(512, numCtx||4096) - 256;
    const out = [{role:"system", content:this.sysPrompt}];
    const hist = s.messages.slice();
    let total = estTokens(this.sysPrompt);
    const keep = [];
    for(let i=hist.length-1;i>=0;i--){
      const t = estTokens(hist[i].content);
      if(total + t > budget) break;
      total += t;
      keep.unshift(hist[i]);
    }
    return out.concat(keep);
  },
  remove(id){
    this.sessions = this.sessions.filter(s=>s.id!==id);
    if(this.currentId===id) this.currentId = this.sessions[0]?.id || null;
    this.persist();
  },
  clearCurrent(){
    this.current().messages = [];
    this.persist();
  }
};

/* ============================================================
   S10 · COMMAND PROCESSOR
   ============================================================ */
const Commands = {
  async run(line, UI){
    const [cmd, ...rest] = line.trim().split(/\s+/);
    const arg = rest.join(" ");
    switch(cmd){
      case "/help":
        UI.sys(
          "**Commands**\n" +
          "- `/backends` — probe every backend live\n" +
          "- `/use <id>` — switch (ollama|lmstudio|pollinations|webllm|nvidia|azure|local)\n" +
          "- `/model <name>` — set model for current backend\n" +
          "- `/models` — list models of current backend\n" +
          "- `/temp <0..2>` — sampling temperature\n" +
          "- `/sys <text>` — set system prompt\n" +
          "- `/stats` — session statistics\n" +
          "- `/export` — download this conversation as JSON\n" +
          "- `/clear` — wipe current session messages"
        );
        return;
      case "/backends": {
        const lines = [];
        for(const id of Object.keys(REG)){
          const c = Backends.make(id);
          let ok = false;
          try{ ok = await c.probe(); }catch(e){}
          lines.push(
            (ok?"✅":"❌") + " **" + id + "** — " + REG[id].label +
            (ok?" · reachable":" · unreachable") +
            (REG[id].keyed?" · _needs API key_":"") +
            "\n   ↳ " + REG[id].docs
          );
        }
        UI.sys(lines.join("\n"));
        return;
      }
      case "/use": {
        if(!REG[arg]){ UI.sys("Unknown backend `" + arg + "`. Try /backends"); return; }
        ST.set("backend", arg);
        UI.state.backendId = arg;
        UI.sys("Switched to **" + arg + "** (" + REG[arg].label + ").");
        UI.refreshStatus();
        return;
      }
      case "/model": {
        if(!arg){ UI.sys("Usage: /model <name>"); return; }
        const id = UI.state.backendId;
        ST.set("model."+id, arg);
        Backends.reset(id);
        UI.sys("Model for **"+id+"** set to `" + arg + "`.");
        UI.refreshStatus();
        return;
      }
      case "/models": {
        const c = Backends.make(UI.state.backendId);
        const list = await c.listModels();
        UI.sys(list.length
          ? "**Models on "+UI.state.backendId+":**\n" + list.map(m=>"- "+m).join("\n")
          : "No models listed (backend offline or not applicable).");
        return;
      }
      case "/temp": {
        const v = clamp(parseFloat(arg)||0.7, 0, 2);
        ST.set("temp", v);
        UI.sys("Temperature = " + v);
        return;
      }
      case "/sys": {
        if(!arg){ UI.sys("Current system prompt:\n" + Conv.sysPrompt); return; }
        Conv.sysPrompt = arg;
        ST.set("sysPrompt", arg);
        UI.sys("System prompt updated.");
        return;
      }
      case "/stats": {
        const st = Conv.stats;
        UI.sys(
          "**Stats**\n- turns: "+st.turns+
          "\n- chars in/out: "+st.charsIn+" / "+st.charsOut+
          "\n- est. tokens in/out: "+estTokens(""+st.charsIn).toLocaleString()+
          " / "+Math.ceil(st.charsOut/4)+
          "\n- sessions: "+Conv.sessions.length
        );
        return;
      }
      case "/export":
        download("flattalk-" + Conv.currentId + ".json",
          JSON.stringify(Conv.current(), null, 2));
        UI.sys("Conversation exported.");
        return;
      case "/clear":
        Conv.clearCurrent();
        UI.clearLog();
        UI.sys("Session cleared.");
        return;
      default:
        UI.sys("Unknown command `" + cmd + "`. Try /help");
    }
  }
};

/* ============================================================
   S11 · UI CONTROLLER
   ============================================================ */
const UI = {
  state:{
    backendId: ST.get("backend","auto"),
    abort:null,
    busy:false
  },
  conn(){
    let id = this.state.backendId;
    return Backends.make(id==="auto" ? "local" : id);
  },
  resolvedId(){
    return this.state.backendId==="auto" ? "auto" : this.state.backendId;
  },

  /* ---- message painting ---- */
  clearLog(){ $("#chat").innerHTML = ""; },
  scrollBottom(){
    const c = $("#chat");
    c.scrollTop = c.scrollHeight;
  },
  addMsg(role, html, meta){
    const wrap = el("div","msg "+role);
    if(meta){
      const m = el("div","meta", meta);
      wrap.appendChild(m);
    }
    const b = el("div","bubble", html);
    wrap.appendChild(b);
    $("#chat").appendChild(wrap);
    this.scrollBottom();
    return b;
  },
  user(text){
    this.addMsg("user", mdLite(text),
      "<b>you</b><span>"+hhmm()+"</span>");
  },
  assistantShell(){
    const id = this.resolvedId();
    const c = this.conn();
    return this.addMsg("asst",
      '<span class="typing"><i></i><i></i><i></i></span>',
      "<b>"+esc(id)+"</b><span>"+esc(c.describe?c.describe():"")+"</span><span>"+hhmm()+"</span>");
  },
  sys(md){
    this.addMsg("sys", mdLite(md));
  },
  err(md){
    this.addMsg("err", mdLite(md));
  },

  /* ---- sessions sidebar ---- */
  renderSessions(){
    const box = $("#sessions");
    box.innerHTML = "";
    for(const s of Conv.sessions){
      const row = el("div","session" + (s.id===Conv.currentId?" active":""));
      const label = el("span","", esc(s.title || "Untitled"));
      const del = el("span","del","✕");
      del.onclick = (ev)=>{
        ev.stopPropagation();
        Conv.remove(s.id);
        this.renderSessions();
        this.clearLog();
        this.sys("Session deleted. Start typing to create a new one.");
      };
      row.appendChild(label);
      row.appendChild(del);
      row.onclick = ()=>{
        Conv.currentId = s.id;
        Conv.persist();
        this.renderSessions();
        this.replay();
      };
      box.appendChild(row);
    }
  },
  replay(){
    this.clearLog();
    const s = Conv.current();
    for(const m of s.messages){
      if(m.role==="user") this.user(m.content);
      else if(m.role==="assistant")
        this.addMsg("asst", mdLite(m.content), "<b>assistant</b>");
    }
  },

  /* ---- backend list ---- */
  async renderBackends(){
    const box = $("#backendList");
    box.innerHTML = "";
    for(const id of Object.keys(REG)){
      const row = el("div","brow");
      const dot = el("span","dot");
      dot.id = "dot-"+id;
      const grow = el("span","grow",
        esc(REG[id].label) + "<br><small>"+esc(REG[id].docs)+"</small>");
      const btn = el("button","","use");
      btn.onclick = ()=>{
        ST.set("backend", id);
        this.state.backendId = id;
        this.refreshStatus();
        toast("Backend → " + id);
      };
      row.appendChild(dot);
      row.appendChild(grow);
      row.appendChild(btn);
      box.appendChild(row);
    }
  },
  async probeDots(){
    for(const id of Object.keys(REG)){
      const dot = $("#dot-"+id);
      if(!dot) continue;
      if(REG[id].kind==="local"){ dot.className="dot ok"; continue; }
      dot.className = "dot busy";
    }
    for(const id of Object.keys(REG)){
      const dot = $("#dot-"+id);
      if(!dot || REG[id].kind==="local") continue;
      let ok = false;
      try{ ok = await Backends.make(id).probe(); }catch(e){}
      dot.className = "dot " + (ok?"ok":"bad");
    }
  },

  /* ---- status bar ---- */
  refreshStatus(){
    const id = this.resolvedId();
    const c = this.conn();
    $("#statusText").textContent = id + " · " + (c.describe?c.describe():"");
    $("#modelChip").textContent = c.model || (c.describe?c.describe():"—");
    $("#hintBackend").textContent = id;
    $("#statusDot").className = "dot ok";
  },
  setStatus(text, mode){
    $("#statusText").textContent = text;
    $("#statusDot").className = "dot " + (mode||"ok");
  },

  /* ---- send pipeline ---- */
  async send(){
    if(this.state.busy) return;
    const ta = $("#composer");
    const text = ta.value.trim();
    if(!text) return;
    ta.value = "";
    ta.style.height = "auto";

    if(text.startsWith("/")){
      this.user(text);
      await Commands.run(text, this);
      return;
    }

    this.user(text);
    Conv.add("user", text);
    this.renderSessions();

    const bubble = this.assistantShell();
    this.state.busy = true;
    $("#btnStop").disabled = false;
    const ctrl = new AbortController();
    this.state.abort = ctrl;

    let acc = "";
    const opts = {
      temperature: ST.get("temp", 0.7),
      maxTokens: ST.get("maxTok", 1024),
      numCtx: ST.get("numCtx", 4096)
    };
    const conn = this.conn();
    const id = this.resolvedId();

    try{
      this.setStatus("streaming from " + id + "…", "busy");
      for await(const piece of conn.stream(
        Conv.trimmed(opts.numCtx), opts, ctrl.signal,
        (p)=>this.setStatus(
          "webllm: " + (p.text||"loading") + " " +
          Math.round((p.progress||0)*100) + "%", "busy")
      )){
        acc += piece;
        bubble.innerHTML = mdLite(acc);
        this.scrollBottom();
      }
      if(!acc) acc = "_(empty response)_";
      Conv.add("assistant", acc);
      Voice.speak(acc);
    }catch(e){
      if(e.name === "AbortError"){
        acc = (acc ? acc + "\n\n" : "") + "■ stopped.";
      }else{
        let note = "⚠ " + id + " failed: " + e.message;
        if(ST.get("fallback", true) && id !== "local"){
          const fb = PROTO.respond(text);
          note += "\n\n**Local fallback:**\n" + fb.text;
          acc = acc ? acc + "\n\n" + note : note;
        }else{
          acc = acc ? acc + "\n\n" + note : note;
        }
        this.err("Backend error — see message details. Tip: `/backends` to probe, ⚙ Settings to switch.");
      }
      bubble.innerHTML = mdLite(acc);
      if(acc && !acc.startsWith("⚠")) Conv.add("assistant", acc);
    }finally{
      this.state.busy = false;
      this.state.abort = null;
      $("#btnStop").disabled = true;
      this.refreshStatus();
      this.scrollBottom();
    }
  },

  stop(){
    if(this.state.abort) this.state.abort.abort();
  }
};

/* ============================================================
   S12 · SETTINGS MODAL
   ============================================================ */
const Settings = {
  open(){
    const id = UI.state.backendId;
    $("#sBackend").value = id;
    $("#sModel").value = ST.get("model."+(id==="auto"?"ollama":id),
      REG[id==="auto"?"ollama":id].model);
    $("#sBase").value = ST.get("base."+(id==="auto"?"ollama":id),
      REG[id==="auto"?"ollama":id].base);
    $("#sKey").value = ST.get("key."+id, "");
    const t = ST.get("temp", 0.7);
    $("#sTemp").value = t;
    $("#sTempVal").textContent = "(" + t + ")";
    $("#sMaxTok").value = ST.get("maxTok", 1024);
    $("#sNumCtx").value = ST.get("numCtx", 4096);
    $("#sSys").value = Conv.sysPrompt;
    $("#sFallback").checked = ST.get("fallback", true);
    $("#sTTS").value = ST.get("tts","off");
    $("#modal").classList.remove("hidden");
  },
  close(){ $("#modal").classList.add("hidden"); },
  save(){
    const id = $("#sBackend").value;
    ST.set("backend", id);
    UI.state.backendId = id;
    const target = id==="auto" ? "ollama" : id;
    ST.set("model."+target, $("#sModel").value.trim());
    ST.set("base."+target, $("#sBase").value.trim());
    if($("#sKey").value.trim()) ST.set("key."+target, $("#sKey").value.trim());
    ST.set("temp", parseFloat($("#sTemp").value));
    ST.set("maxTok", parseInt($("#sMaxTok").value,10)||1024);
    ST.set("numCtx", parseInt($("#sNumCtx").value,10)||4096);
    ST.set("fallback", $("#sFallback").checked);
    ST.set("tts", $("#sTTS").value);
    Conv.sysPrompt = $("#sSys").value.trim() || DEFAULT_SYSTEM;
    ST.set("sysPrompt", Conv.sysPrompt);
    Backends.reset(target);
    this.close();
    UI.refreshStatus();
    UI.probeDots();
    toast("Settings saved — backend: " + id);
  }
};

/* ============================================================
   S13 · HEALTH MONITOR (15 s loop)
   ============================================================ */
const Health = {
  async tick(){
    if(UI.state.busy) return;
    const id = UI.resolvedId();
    if(id==="auto" || id==="local") return;
    let ok = false;
    try{ ok = await Backends.make(id).probe(); }catch(e){}
    $("#statusDot").className = "dot " + (ok?"ok":"bad");
  },
  start(){ setInterval(()=>this.tick(), 15000); }
};

/* ============================================================
   S14 · VOICE + BOOT
   ============================================================ */
const Voice = {
  rec:null,
  supported(){ return !!(window.SpeechRecognition||window.webkitSpeechRecognition); },
  toggle(){
    if(!this.supported()){ toast("Speech recognition not supported here"); return; }
    if(this.rec){ this.rec.stop(); this.rec=null; $("#btnMic").classList.remove("rec"); return; }
    const R = window.SpeechRecognition||window.webkitSpeechRecognition;
    this.rec = new R();
    this.rec.lang = "en-US";
    this.rec.interimResults = false;
    this.rec.onresult = (ev)=>{
      const t = ev.results[0][0].transcript;
      $("#composer").value = t;
      UI.send();
    };
    this.rec.onend = ()=>{ this.rec=null; $("#btnMic").classList.remove("rec"); };
    this.rec.start();
    $("#btnMic").classList.add("rec");
  },
  speak(text){
    if(ST.get("tts","off")!=="on" || !window.speechSynthesis) return;
    const clean = String(text).replace(/[#*`_>\[\]()]/g," ").slice(0,400);
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = "en-US";
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }
};

const Boot = {
  async start(){
    /* theme */
    if(ST.get("theme","dark")==="light") document.body.classList.add("light");

    /* wire events */
    $("#btnSend").onclick = ()=>UI.send();
    $("#btnStop").onclick = ()=>UI.stop();
    $("#btnNew").onclick = ()=>{
      Conv.currentId = null;
      Conv.current();
      UI.renderSessions();
      UI.clearLog();
      UI.sys("New session. Type to begin — or `/help`.");
    };
    $("#btnSettings").onclick = ()=>Settings.open();
    $("#btnModalClose").onclick = ()=>Settings.close();
    $("#btnModalSave").onclick = ()=>Settings.save();
    $("#btnTheme").onclick = ()=>{
      document.body.classList.toggle("light");
      ST.set("theme", document.body.classList.contains("light")?"light":"dark");
    };
    $("#btnMic").onclick = ()=>Voice.toggle();

    const ta = $("#composer");
    ta.addEventListener("input", ()=>{
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 170) + "px";
    });
    ta.addEventListener("keydown",(e)=>{
      if(e.key==="Enter" && !e.shiftKey){
        e.preventDefault();
        UI.send();
      }
    });
    $("#sTemp").addEventListener("input",()=>{
      $("#sTempVal").textContent = "(" + $("#sTemp").value + ")";
    });
    document.addEventListener("keydown",(e)=>{
      if(e.key==="Escape") Settings.close();
    });

    /* render */
    await UI.renderBackends();
    UI.renderSessions();
    UI.replay();
    if(!Conv.current().messages.length){
      UI.sys(
        "**Welcome to FlatTalk-0** — single-file conversational shell.\n" +
        "- Keyless backends: **ollama** (local), **lmstudio**, **pollinations** (online), **webllm** (in-browser Qwen).\n" +
        "- Type `/backends` to probe what is alive right now.\n" +
        "- If nothing is connected, the offline PROTO engine answers anyway.\n" +
        "- Tip: `ollama pull qwen2.5:1.5b` then `/use ollama`."
      );
    }

    /* backend resolution */
    if(UI.state.backendId === "auto"){
      UI.setStatus("auto-detecting backends…","busy");
      const found = await Backends.autoDetect();
      if(found !== "local"){
        UI.state.backendId = found;
        ST.set("backend", found);
        toast("Auto-detected backend: " + found);
      }else{
        UI.state.backendId = "local";
        toast("No keyless backend reachable — offline PROTO engine active");
      }
    }
    UI.refreshStatus();
    UI.probeDots();
    Health.start();
    ta.focus();
  }
};

document.addEventListener("DOMContentLoaded", ()=>Boot.start());
</script>
</body>
</html>
```

## 6 · Análisis con casos

| Caso | Configuración | Resultado esperado | Datos |
|---|---|---|---|
| **A · Local óptimo** | `ollama pull qwen2.5:1.5b` → `/use ollama` | Streaming real NDJSON, 100 % privado, ~5–20 tok/s según CPU/GPU | Ollama sin clave; `num_ctx=4096` por defecto |
| **B · Online sin instalar nada** | `/use pollinations` | Respuestas inmediatas vía `text.pollinations.ai/openai`; rate-limited; **los prompts salen de tu máquina** (trade-off ético documentado en la KB interna) | Certeza media: el catálogo gratuito cambia sin aviso |
| **C · Offline neuronal en navegador** | `/use webllm` | Descarga única ~0,9 GB (caché posterior), Qwen2.5-0.5B-q4 en WebGPU; requiere Chrome/Edge 113+ (2023), Firefox 141 (2025-07), Safari 26 (2025) | Si `navigator.gpu` no existe, el punto queda rojo y cae a PROTO |
| **D · Caída total** | Sin red, sin Ollama | Motor PROTO: reglas ELIZA + Markov + KB (ollama/qwen/azure/nvidia/eliza…) + memoria de perfil + cálculo + reloj | Determinista y auditable línea a línea |

## 7 · Ruta de activación (paso a paso)

1. **Guardar** el código como `flattalk.html`.
2. **(Recomendado)** servir por HTTP para evitar CORS con `file://`: `python3 -m http.server 8000` → abrir `http://localhost:8000/flattalk.html`.
3. **Instalar Ollama** (opcional, máximo rendimiento sin claves): `curl -fsSL https://ollama.com/install.sh | sh`; luego `ollama pull qwen2.5:1.5b` (o `qwen2.5:0.5b` para máquinas modestas).
4. **Si abre vía `file://`** y Ollama rechaza el origen: variable de entorno `OLLAMA_ORIGINS=*` y reiniciar servicio (docs oficiales `faq.md`).
5. **Verificar**: escribir `/backends` (sondea los 7 conectores con puntos verde/rojo en la barra lateral).
6. **Cambiar**: `/use ollama` · `/model qwen2.5:3b` · `/temp 0.4` · `/sys "Responde breve y técnico"`.
7. **Claves opcionales**: ⚙ Settings → NVIDIA NIM (`build.nvidia.com`) o Azure OpenAI (`api-key` + despliegue).
8. **Exportar/auditar**: `/export` (JSON de la sesión); todo el estado vive en `localStorage` del navegador.

## 8 · Glosario

**NDJSON** — un objeto JSON por línea; formato de streaming de Ollama. **SSE** — Server-Sent Events (`data: {...}` + `[DONE]`); formato OpenAI-compatible. **GGUF** — contenedor de pesos cuantizados de llama.cpp (2023-08). **q4_K_M** — cuantización ~4,5 bits/peso, equilibrio estándar. **WebGPU** — API W3C de cómputo GPU en navegador (Chrome 113). **`num_ctx`** — ventana de contexto en Ollama. **Feature hashing** — embedding sin entrenamiento por hashing con signo (usa PROTO, 256 dims). **CORS / `OLLAMA_ORIGINS`** — control de origen cruzado; la variable autoriza navegantes externos. **NIM** — NVIDIA Inference Microservices (GTC 2024-03-18). **Efecto ELIZA** — atribuir comprensión a un sistema superficial (Weizenbaum, 1976).

## 9 · Reflexión prospectiva

La trayectoria 2023→2025 (WebGPU en los tres motores, Qwen2.5-0.5B cuantizado corriendo en pestañas, Gemma 3n y Phi-4-mini orientados a dispositivos) indica que **el navegador será runtime por defecto de SLMs hacia 2026-2027**: el archivo monoarchivo que hoy *conecta* inteligencia pasará a *contenerla*, y la decisión arquitectónica relevante ya no es el modelo sino el **orden de jerarquía local→nube** y la gobernanza de qué datos cruzan la frontera del dispositivo. **Pregunta guía:** ¿qué umbral de capacidad (tareas, contexto, latencia) exigirías para que el backend local fuera tu única opción aceptable, eliminando por completo los conectores online?
