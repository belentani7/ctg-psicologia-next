import ContactoPage from '@/components/pages/ContactoPage';
import { Locale } from '@/data/content';

const LOCALES: Locale[] = ['es', 'ca', 'en'];

export default async function LocaleContact({ params }: { params: Promise<{ locale: string }> }) {
  const localeRaw = (await params).locale;
  const locale = (LOCALES.includes(localeRaw as Locale) ? localeRaw : 'es') as Locale;
  return <ContactoPage locale={locale} />;
}