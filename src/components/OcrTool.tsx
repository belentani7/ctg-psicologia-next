'use client';

import { useState } from 'react';
import { createWorker } from 'tesseract.js';
import { validateOcrFile, validateOcrImageSignature } from './ocr-file-policy.mjs';

const FILE_ERRORS = {
  empty: 'Selecciona una imagen que no esté vacía.',
  'too-large': 'La imagen supera el límite de 10 MB. Reduce su tamaño antes de continuar.',
  unsupported: 'Formato no compatible. Selecciona PNG, JPG o WebP; convierte primero las páginas de un PDF a imágenes.',
  'invalid-content': 'El archivo no coincide con su formato PNG, JPG o WebP. Prueba con otra imagen válida.',
} as const;

export default function OcrTool() {
  const [status, setStatus] = useState<string>('Esperando archivo…');
  const [result, setResult] = useState<string>('');
  const [busy, setBusy] = useState(false);

  async function handleFile(file: File) {
    if (busy) return;
    const issue = validateOcrFile(file);
    if (issue) {
      setResult('');
      setStatus(FILE_ERRORS[issue]);
      return;
    }

    setBusy(true);
    setResult('');
    setStatus('Comprobando formato de imagen…');
    let worker: Awaited<ReturnType<typeof createWorker>> | undefined;
    try {
      if (await validateOcrImageSignature(file)) {
        setStatus(FILE_ERRORS['invalid-content']);
        return;
      }
      setStatus('Cargando motor OCR…');
      worker = await createWorker('spa');
      setStatus(`Leyendo ${file.name}…`);
      const { data } = await worker.recognize(file);
      setResult(data.text);
      setStatus('Texto extraído ✔');
    } catch {
      setStatus('No se pudo procesar la imagen. Prueba con otro archivo PNG, JPG o WebP.');
    } finally {
      if (worker) {
        try {
          await worker.terminate();
        } catch {
          // Do not hide the OCR result if worker cleanup itself fails.
        }
      }
      setBusy(false);
    }
  }

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl text-brand-deep mb-4">OCR — Extraer texto de imágenes</h1>
      <p id="ocr-help" className="text-slate-600 mb-8">
        Selecciona una imagen PNG, JPG o WebP (máximo 10 MB) para extraer su texto en el navegador.
        Los PDF necesitan convertirse primero a imágenes: este motor no admite archivos PDF directamente.
      </p>
      <label className="inline-flex items-center rounded-full bg-brand-teal px-8 py-4 font-semibold text-white hover:bg-brand-deep focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-deep cursor-pointer">
        <span>{busy ? 'Procesando…' : 'Elegir imagen'}</span>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="sr-only"
          aria-describedby="ocr-help"
          disabled={busy}
          onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            event.currentTarget.value = '';
            if (file) void handleFile(file);
          }}
        />
      </label>
      <p role="status" aria-live="polite" className="mt-4 text-sm text-slate-600">{status}</p>
      {result && (
        <div className="mt-6">
          <label htmlFor="ocr-result" className="mb-2 block font-semibold text-brand-deep">Texto extraído</label>
          <textarea
            id="ocr-result"
            readOnly
            value={result}
            className="w-full h-72 rounded-xl border border-slate-300 p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
      )}
    </main>
  );
}
