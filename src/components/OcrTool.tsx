'use client';

import { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function OcrTool() {
  const [status, setStatus] = useState<string>('Esperando archivo…');
  const [result, setResult] = useState<string>('');
  const [busy, setBusy] = useState(false);

  async function handleFile(file: File) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setStatus('Selecciona una imagen PNG, JPG o WebP.');
      return;
    }

    setBusy(true);
    setResult('');
    setStatus('Cargando motor OCR…');
    let worker: Awaited<ReturnType<typeof createWorker>> | null = null;

    try {
      worker = await createWorker('spa');
      setStatus(`Leyendo ${file.name}…`);
      const { data } = await worker.recognize(file);
      setResult(data.text);
      setStatus('Texto extraído.');
    } catch (e) {
      setStatus(`Error: ${(e as Error).message}`);
    } finally {
      if (worker) await worker.terminate();
      setBusy(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16" aria-busy={busy}>
      <h1 className="font-display text-4xl text-brand-deep mb-4">OCR — Extrae texto de imágenes</h1>
      <p className="text-slate-600 mb-8">
        Sube una imagen (PNG, JPG o WebP) y extrae su contenido en el navegador.
      </p>
      <label htmlFor="ocr-file" className="inline-flex min-h-11 cursor-pointer items-center rounded-full bg-brand-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-deep focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-teal">
        {busy ? 'Procesando…' : 'Elegir archivo'}
        <input id="ocr-file" type="file" accept="image/png,image/jpeg,image/webp" disabled={busy} className="sr-only" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
      </label>
      <p className="mt-4 text-sm text-slate-500" role="status" aria-live="polite">{status}</p>
      {result && (
        <>
          <label htmlFor="ocr-result" className="sr-only">Texto extraído</label>
          <textarea
            id="ocr-result"
            readOnly
            value={result}
            className="mt-6 h-72 w-full rounded-xl border border-slate-300 p-4 font-mono text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          />
        </>
      )}
    </section>
  );
}
