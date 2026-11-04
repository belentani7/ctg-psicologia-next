'use client';

import { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function OcrTool() {
  const [status, setStatus] = useState<string>('Esperando archivo…');
  const [result, setResult] = useState<string>('');
  const [busy, setBusy] = useState(false);

  async function handleFile(file: File) {
    if (!file) return;
    setBusy(true);
    setResult('');
    setStatus('Cargando motor OCR…');
    try {
      const worker = await createWorker('spa');
      setStatus(`Leyendo ${file.name}…`);
      const { data } = await worker.recognize(file);
      setResult(data.text);
      await worker.terminate();
      setStatus('Texto extraído ✔');
    } catch (e) {
      setStatus(`Error: ${(e as Error).message}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl text-brand-deep mb-4">OCR — Extract texto de imágenes/PDF</h1>
      <p className="text-slate-600 mb-8">
        Sube una imagen (PNG/JPG) o un PDF con texto escaneado y extrae su contenido en el navegador.
      </p>
      <label className="inline-block bg-brand-teal text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-deep transition-colors cursor-pointer">
        {busy ? 'Procesando…' : 'Elegir archivo'}
        <input type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      </label>
      <p className="mt-4 text-sm text-slate-500">{status}</p>
      {result && (
        <textarea
          readOnly
          value={result}
          className="mt-6 w-full h-72 rounded-xl border border-slate-300 p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
          placeholder="Texto extraído…"
        />
      )}
    </section>
  );
}