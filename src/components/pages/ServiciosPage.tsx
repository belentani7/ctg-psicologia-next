import Link from 'next/link';
import { Header, Footer } from '@/components/Layout';
import { services, type Locale } from '@/data/content';
import { pathFor } from '@/lib/site';

const COPY: Record<Locale, { title: string; intro: string; cta: string; note: string }> = {
  es: {
    title: 'Terapias y servicios',
    intro:
      'Trabajamos desde una orientación ecléctica e integradora, adaptando la técnica a la persona y no al revés. Estas son las áreas principales de atención.',
    cta: 'Pide cita',
    note: 'También ofrecemos psiquiatría, acupuntura, medicina tradicional china y dietética y nutrición.',
  },
  ca: {
    title: 'Teràpies i serveis',
    intro:
      'Treballen des d’una orientació eclèctica i integradora, adaptant la tècnica a la persona i no a l’inrevés. Aquestes són les àrees principals d’atenció.',
    cta: 'Demana cita',
    note: 'També oferim psiquiatria, acupuntura, medicina tradicional xinesa i dietètica i nutrició.',
  },
  en: {
    title: 'Therapies and services',
    intro:
      'We work from an eclectic, integrative orientation, adapting the technique to the person rather than the other way round. These are our main areas of care.',
    cta: 'Book an appointment',
    note: 'We also offer psychiatry, acupuncture, traditional Chinese medicine and dietetics and nutrition.',
  },
};

export default function ServiciosPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <Header locale={locale} section="services" />
      <main id="contenido" className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center font-display text-4xl text-brand-deep">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-prose text-center text-slate-700">{t.intro}</p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft font-display text-xl text-brand-teal"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-4 font-semibold text-brand-deep">{service.name[locale]}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-700">{service.description[locale]}</p>
              <Link
                href={pathFor(locale, 'contact')}
                className="mt-5 inline-flex min-h-10 w-fit items-center rounded-full bg-brand-teal px-5 text-sm font-semibold text-white hover:bg-brand-deep"
              >
                {t.cta} →
              </Link>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-prose rounded-xl bg-brand-soft p-5 text-sm text-brand-deep">{t.note}</p>
      </main>
      <Footer locale={locale} />
    </>
  );
}
