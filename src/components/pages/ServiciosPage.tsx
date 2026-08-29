import { Header, Footer } from '@/components/Layout';
import { services, Locale } from '@/data/content';

export default function ServiciosPage({ locale }: { locale: Locale }) {
  const title = locale === 'es' ? 'Terapias y servicios' : locale === 'ca' ? 'Teràpies i serveis' : 'Therapies and services';
  const cta = locale === 'es' ? 'Pide cita' : locale === 'ca' ? 'Demana cita' : 'Book an appointment';

  return (
    <>
      <Header locale={locale} />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-12 text-center">{title}</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.id} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-brand-soft text-brand-teal flex items-center justify-center text-xl mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h2 className="font-semibold text-brand-deep">{s.name[locale]}</h2>
              <p className="mt-2 text-sm text-slate-600">{s.description[locale]}</p>
              <a href="https://wa.me/34605362664" className="mt-4 inline-block text-sm font-medium text-brand-amber hover:underline">
                {cta} →
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}