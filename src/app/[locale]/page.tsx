import HomePage from '@/components/pages/HomePage';
import { Locale } from '@/data/content';

const LOCALES: Locale[] = ['es', 'ca', 'en'];

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const localeRaw = (await params).locale;
  const locale = (LOCALES.includes(localeRaw as Locale) ? localeRaw : 'es') as Locale;
  return <HomePage locale={locale} />;
}