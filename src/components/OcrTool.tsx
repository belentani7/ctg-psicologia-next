'use client';

import { useRef, useState } from 'react';
import type { Locale } from '@/data/content';

const COPY: Record<
  Locale,
  {
    title: string;
    intro: string;
    choose: string;
    processing: string;
    statusIdle: string;
    statusReading: string;
    statusDone: string;
    statusError: string;
    invalidType: string;
    result: string;
    copy: string;
    copied: string;
    download: string;
    reset: string;
    privacy: string;
    progress: string;
  }
> = {
  es: {
    title: 'OCR — extrae texto de una imagen',
    intro:
      'Sube una imagen (PNG, JPG o WebP) y extrae su contenido. El reconocimiento se ejecuta en tu navegador: la imagen no se envía a ningún servidor.',
    choose: 'Elegir imagen',
    processing: 'Procesando…',
    statusIdle: 'Esperando una imagen.',
    statusReading: 'Leyendo la imagen…',
    statusDone: 'Texto extraído.',
    statusError: 'No se ha podido leer la imagen.',
    invalidType: 'Selecciona una imagen PNG, JPG o WebP.',
    result: 'Texto extraído',
    copy: 'Copiar',
    copied: 'Copiado',
    download: 'Descargar .txt',
    reset: 'Empezar de nuevo',
    privacy:
      'El motor OCR y el modelo de idioma se descargan de este mismo sitio y se cachean en tu navegador. No hay analítica ni subida de ficheros.',
    progress: 'Progreso del reconocimiento',
  },
  ca: {
    title: 'OCR — extreu text d’una imatge',
    intro:
      'Puja una imatge (PNG, JPG o WebP) i extreu-ne el contingut. El reconeixement s’executa al teu navegador: la imatge no s’envia a cap servidor.',
    choose: 'Triar imatge',
    processing: 'Processant…',
    statusIdle: 'Esperant una imatge.',
    statusReading: 'Llegint la imatge…',
    statusDone: 'Text extret.',
    statusError: 'No s’ha pogut llegir la imatge.',
    invalidType: 'Selecciona una imatge PNG, JPG o WebP.',
    result: 'Text extret',
    copy: 'Copiar',
    copied: 'Copiat',
    download: 'Descarregar .txt',
    reset: 'Tornar a començar',
    privacy:
      'El motor OCR i el model d’idioma es descarreguen d’aquest mateix lloc i es desen a la memòria cau del navegador. Sense analítica ni pujada de fitxers.',
    progress: 'Progrés del reconeixement',
  },
  en: {
    title: 'OCR — extract text from an image',
    intro:
      'Upload an image (PNG, JPG or WebP) and extract its content. Recognition runs in your browser: the image is never sent to a server.',
    choose: 'Choose image',
    processing: 'Processing…',
    statusIdle: 'Waiting for an image.',
    statusReading: 'Reading the image…',
    statusDone: 'Text extracted.',
    statusError: 'The image could not be read.',
    invalidType: 'Select a PNG, JPG or WebP image.',
    result: 'Extracted text',
    copy: 'Copy',
    copied: 'Copied',
    download: 'Download .txt',
    reset: 'Start again',
    privacy:
      'The OCR engine and language model are downloaded from this site and cached in your browser. No analytics and no file uploads.',
    progress: 'Recognition progress',
  },
};

const MAX_BYTES = 15 * 1024 * 1024;

export default function OcrTool({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [status, setStatus] = useState<string>(t.statusIdle);
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setStatus(t.invalidType);
      return;
    }
    if (file.size > MAX_BYTES) {
      setStatus(`${t.statusError} (max. 15 MB)`);
      return;
    }

    setBusy(true);
    setResult('');
    setCopied(false);
    setProgress(0);
    setStatus(t.statusReading);

    let worker: { recognize: (f: File) => Promise<{ data: { text: string } }>; terminate: () => Promise<unknown> } | null =
      null;

    try {
      const { createWorker } = await import('tesseract.js');
      worker = await createWorker('spa', undefined, {
        workerPath: '/tesseract/worker.min.js',
        corePath: '/tesseract',
        langPath: '/tessdata',
        logger: (message: { status: string; progress: number }) => {
          if (message.status === 'recognizing text') {
            setProgress(Math.round(message.progress * 100));
          }
        },
      });

      const { data } = await worker.recognize(file);
      setResult(data.text.trim());
      setStatus(t.statusDone);
      setProgress(100);
      if (inputRef.current) inputRef.current.value = '';
    } catch (error) {
      setStatus(`${t.statusError} ${(error as Error).message}`);
    } finally {
      if (worker) await worker.terminate();
      setBusy(false);
    }
  }

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  function downloadResult() {
    const blob = new Blob([result], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'texto-ocr.txt';
    link.click();
    URL.revokeObjectURL(url);
  }

  function reset() {
    setResult('');
    setProgress(0);
    setStatus(t.statusIdle);
    setCopied(false);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16" aria-busy={busy}>
      <h1 className="font-display text-4xl text-brand-deep">{t.title}</h1>
      <p className="mt-4 text-slate-700">{t.intro}</p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label
          htmlFor="ocr-file"
          className="inline-flex min-h-11 cursor-pointer items-center rounded-full bg-brand-teal px-6 font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          {busy ? t.processing : t.choose}
          <input
            ref={inputRef}
            id="ocr-file"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            disabled={busy}
            className="sr-only"
            aria-describedby="ocr-status"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) void handleFile(file);
            }}
          />
        </label>

        <p id="ocr-status" role="status" aria-live="polite" className="mt-4 text-sm text-slate-700">
          {status}
        </p>

        {busy && (
          <div className="mt-3">
            <label htmlFor="ocr-progress" className="sr-only">
              {t.progress}
            </label>
            <progress id="ocr-progress" value={progress} max={100} className="h-2 w-full overflow-hidden rounded">
              {progress}%
            </progress>
          </div>
        )}

        {result && (
          <div className="mt-6">
            <label htmlFor="ocr-result" className="mb-2 block text-sm font-semibold text-brand-deep">
              {t.result}
            </label>
            <textarea
              id="ocr-result"
              readOnly
              value={result}
              rows={10}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 p-4 font-mono text-sm text-slate-900"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => void copyResult()}
                className="min-h-11 rounded-full border-2 border-brand-teal px-5 font-semibold text-brand-teal hover:bg-brand-soft"
              >
                {copied ? t.copied : t.copy}
              </button>
              <button
                type="button"
                onClick={downloadResult}
                className="min-h-11 rounded-full border-2 border-brand-teal px-5 font-semibold text-brand-teal hover:bg-brand-soft"
              >
                {t.download}
              </button>
              <button
                type="button"
                onClick={reset}
                className="min-h-11 rounded-full px-5 font-semibold text-slate-700 underline hover:text-brand-teal"
              >
                {t.reset}
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-sm text-slate-600">{t.privacy}</p>
    </section>
  );
}
