import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { HTML_LANG, LOCALES, SITE, isLocale } from '@/lib/site';
import { jsonLdGraph } from '@/lib/seo';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s`,
  },
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.repo }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'health',
  referrer: 'strict-origin-when-cross-origin',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f766e',
};

const SKIP: Record<string, string> = {
  es: 'Saltar al contenido principal',
  ca: 'Salta al contingut principal',
  en: 'Skip to main content',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={HTML_LANG[locale]}>
      <body className="font-body text-surface-ink antialiased">
        <a href="#contenido" className="skip-link">
          {SKIP[locale]}
        </a>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD generado en servidor a partir de datos propios; no hay entrada de usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph(locale)) }}
        />
      </body>
    </html>
  );
}
