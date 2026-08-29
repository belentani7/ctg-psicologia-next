import ElCentroPage from '@/components/pages/ElCentroPage';
import { Locale } from '@/data/content';

const LOCALES: Locale[] = ['es', 'ca', 'en'];

export default async function LocaleTheCentre({ params }: { params: Promise<{ locale: string }> }) {
  const localeRaw = (await params).locale;
  const locale = (LOCALES.includes(localeRaw as Locale) ? localeRaw : 'es') as Locale;
  return <ElCentroPage locale={locale} />;
}