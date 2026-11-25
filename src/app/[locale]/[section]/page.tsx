import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPage from '@/components/pages/BlogPage';
import ContactoPage from '@/components/pages/ContactoPage';
import ElCentroPage from '@/components/pages/ElCentroPage';
import EquipoPage from '@/components/pages/EquipoPage';
import LegalPage from '@/components/pages/LegalPage';
import OcrPage from '@/components/pages/OcrPage';
import ServiciosPage from '@/components/pages/ServiciosPage';
import { LOCALES, SECTIONS, SECTION_SLUGS, isLocale, sectionBySlug, type Locale, type SectionKey } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string; section: string }> };

/** Las 30 combinaciones idioma × sección se generan estáticamente. */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    SECTIONS.map((section) => ({ locale, section: SECTION_SLUGS[section][locale] })),
  );
}

/** Sin rutas dinámicas: cualquier otro slug responde 404. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return buildMetadata('es');
  const key = sectionBySlug(locale, section);
  return buildMetadata(locale, key ?? undefined);
}

function renderSection(key: SectionKey, locale: Locale) {
  switch (key) {
    case 'centre':
      return <ElCentroPage locale={locale} />;
    case 'team':
      return <EquipoPage locale={locale} />;
    case 'services':
      return <ServiciosPage locale={locale} />;
    case 'blog':
      return <BlogPage locale={locale} />;
    case 'contact':
      return <ContactoPage locale={locale} />;
    case 'ocr':
      return <OcrPage locale={locale} />;
    case 'legal':
      return <LegalPage locale={locale} document="legal" />;
    case 'privacy':
      return <LegalPage locale={locale} document="privacy" />;
    case 'cookies':
      return <LegalPage locale={locale} document="cookies" />;
  }
}

export default async function SectionRoute({ params }: Props) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const key = sectionBySlug(locale, section);
  if (!key) notFound();
  return renderSection(key, locale);
}
