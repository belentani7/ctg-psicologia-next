import Link from 'next/link';
import { Header, Footer } from '@/components/Layout';
import { services, contact, Locale } from '@/data/content';

export default function HomePage({ locale }: { locale: Locale }) {
  const t = {
    hero: locale === 'es'
      ? '«El ser humano es como el agua: tiene el poder de transformarse y adaptarse a lo que le rodea. El terapeuta es la persona que lo puede guiar hacia su propio cambio hasta conseguir fluir.»'
      : locale === 'ca'
      ? '«L\'ésser humà és com l\'aigua: té el poder de transformar-se i adaptar-se al que l\'envolta. El terapeuta és la persona que el pot guiar cap al seu propi canvi fins a aconseguir fluir.»'
      : '«The human being is like water: it has the power to transform and adapt to its surroundings. The therapist is the person who can guide it toward its own change until it flows.»',
    cta: locale === 'es' ? 'Llama ahora o manda un Whatsapp' : locale === 'ca' ? 'Truca ara o envia\'ns un Whatsapp' : 'Call now or send a WhatsApp',
    services: locale === 'es' ? 'Terapias y servicios' : locale === 'ca' ? 'Teràpies i serveis' : 'Therapies and services',
    readMore: locale === 'es' ? 'Saber más' : locale === 'ca' ? 'Saber-ne més' : 'Learn more',
    servicesHref: locale === 'es' ? '/servicios' : locale === 'ca' ? '/ca/serveis' : '/en/services',
  };

  return (
    <>
      <Header locale={locale} />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-brand-teal/10">
          <div className="max-w-4xl mx-auto px-4 py-24 text-center">
            <p className="font-display text-2xl md:text-3xl text-brand-deep leading-relaxed italic">{t.hero}</p>
            <a
              href={`https://wa.me/34605362664`}
              className="mt-10 inline-block bg-brand-amber text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-brand-amber/90 transition-colors"
            >
              {t.cta}
            </a>
            <p className="mt-3 text-slate-500">{contact.phone}</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-brand-deep mb-10 text-center">{t.services}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                href={t.servicesHref}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
              >
                <h3 className="font-semibold text-brand-teal group-hover:text-brand-amber transition-colors">
                  {s.name[locale]}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.description[locale]}</p>
                <span className="mt-4 inline-block text-xs font-medium text-brand-teal uppercase tracking-wide">
                  {t.readMore} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}