import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { HTML_LANG, LOCALES, LOCALE_NAMES, SITE, pathFor } from '@/lib/site';

/**
 * 404 global (fuera del árbol `[locale]`). Next solo aplica aquí este archivo
 * cuando la ruta no coincide con ningún layout; por eso define su propio
 * `<html lang>` y no hereda el layout de idioma.
 */
export const metadata: Metadata = {
  title: `404 | ${SITE.name}`,
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className="font-body text-surface-ink antialiased">
        <main id="contenido" className="mx-auto max-w-2xl px-4 py-24 text-center">
          <p className="font-display text-6xl text-brand-teal">404</p>
          <h1 className="mt-4 font-display text-3xl text-brand-deep">
            Página no encontrada · Pàgina no trobada · Page not found
          </h1>
          <p className="mt-4 text-slate-700">
            La dirección no existe o ha cambiado. · L&apos;adreça no existeix o ha canviat. · The address does not
            exist or has changed.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {LOCALES.map((locale) => (
              <li key={locale}>
                <Link
                  href={pathFor(locale)}
                  hrefLang={HTML_LANG[locale]}
                  lang={HTML_LANG[locale]}
                  className="inline-flex min-h-11 items-center rounded-full bg-brand-teal px-6 font-semibold text-white hover:bg-brand-deep"
                >
                  {LOCALE_NAMES[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
