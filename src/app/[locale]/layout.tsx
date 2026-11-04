import type { Metadata } from 'next';
import SetLang from '@/components/SetLang';
import { Locale } from '@/data/content';

const LOCALES: Locale[] = ['es', 'ca', 'en'];

const META: Record<Locale, { title: string; description: string }> = {
  es: {
    title: 'cTg Psicología | Centro de Terapia Global',
    description: 'Centro de Terapia Global en L\'Hospitalet de Llobregat. Psicología, logopedia, psiquiatría y más.',
  },
  ca: {
    title: 'cTg Psicologia | Centre de Teràpia Global',
    description: 'Centre de Teràpia Global a L\'Hospitalet de Llobregat. Psicologia, logopèdia, psiquiatria i més.',
  },
  en: {
    title: 'cTg Psychology | Global Therapy Centre',
    description: 'Global Therapy Centre in L\'Hospitalet de Llobregat. Psychology, speech therapy, psychiatry and more.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const localeRaw = (await params).locale;
  const locale = (LOCALES.includes(localeRaw as Locale) ? localeRaw : 'es') as Locale;
  return { title: META[locale].title, description: META[locale].description };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const localeRaw = (await params).locale;
  const locale = (LOCALES.includes(localeRaw as Locale) ? localeRaw : 'es') as Locale;
  return (
    <>
      <SetLang lang={locale === 'es' ? 'es' : locale === 'ca' ? 'ca' : 'en'} />
      {children}
    </>
  );
}