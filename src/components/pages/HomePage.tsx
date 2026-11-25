import Link from 'next/link';
import { Header, Footer } from '@/components/Layout';
import HeroBackground from '@/components/HeroBackground';
import { services, team, type Locale } from '@/data/content';
import { SITE, pathFor } from '@/lib/site';

const COPY: Record<
  Locale,
  {
    hero: string;
    cta: string;
    call: string;
    services: string;
    readMore: string;
    team: string;
    teamMore: string;
    contact: string;
    contactText: string;
    address: string;
    since: string;
  }
> = {
  es: {
    hero: '«El ser humano es como el agua: tiene el poder de transformarse y adaptarse a lo que le rodea. El terapeuta es la persona que lo puede guiar hacia su propio cambio hasta conseguir fluir.»',
    cta: 'Llama ahora o escríbenos por WhatsApp',
    call: 'Llamar',
    services: 'Terapias y servicios',
    readMore: 'Saber más',
    team: 'Nuestro equipo',
    teamMore: 'Conoce al equipo',
    contact: 'Contacto',
    contactText: 'Estamos en el centro de L’Hospitalet de Llobregat. Pide cita por teléfono, WhatsApp o email.',
    address: 'Dirección',
    since: 'Centro de referencia en L’Hospitalet desde 1998',
  },
  ca: {
    hero: '«L’ésser humà és com l’aigua: té el poder de transformar-se i adaptar-se al que l’envolta. El terapeuta és la persona que el pot guiar cap al seu propi canvi fins a aconseguir fluir.»',
    cta: 'Truca ara o escriu-nos per WhatsApp',
    call: 'Trucar',
    services: 'Teràpies i serveis',
    readMore: 'Saber-ne més',
    team: 'El nostre equip',
    teamMore: 'Coneix l’equip',
    contact: 'Contacte',
    contactText: 'Som al centre de L’Hospitalet de Llobregat. Demana cita per telèfon, WhatsApp o email.',
    address: 'Adreça',
    since: 'Centre de referència a L’Hospitalet des de 1998',
  },
  en: {
    hero: '«The human being is like water: it has the power to transform and adapt to its surroundings. The therapist is the person who can guide it toward its own change until it flows.»',
    cta: 'Call now or message us on WhatsApp',
    call: 'Call',
    services: 'Therapies and services',
    readMore: 'Learn more',
    team: 'Our team',
    teamMore: 'Meet the team',
    contact: 'Contact',
    contactText: 'We are in the centre of L’Hospitalet de Llobregat. Book by phone, WhatsApp or email.',
    address: 'Address',
    since: 'A reference centre in L’Hospitalet since 1998',
  },
};

export default function HomePage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const featuredTeam = team.slice(0, 3);

  return (
    <>
      <Header locale={locale} />
      <main id="contenido">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0 h-36 overflow-hidden md:h-44">
            <HeroBackground />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-44 text-center md:pt-52">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">{t.since}</p>
            <h1 className="mt-6 font-display text-2xl italic leading-relaxed text-brand-deep md:text-3xl">
              {t.hero}
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${SITE.phoneHref}`}
                className="inline-flex min-h-12 items-center rounded-full bg-brand-amber px-6 font-semibold text-white transition-colors hover:bg-brand-amber/90"
              >
                {t.call} · {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-brand-teal px-6 font-semibold text-brand-teal transition-colors hover:bg-brand-soft"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-services" className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="home-services" className="mb-10 text-center font-display text-3xl text-brand-deep">
            {t.services}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={pathFor(locale, 'services')}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold text-brand-teal group-hover:text-brand-amber">{service.name[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-700">{service.description[locale]}</p>
                  <span aria-hidden="true" className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-teal">
                    {t.readMore} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="home-team" className="bg-brand-soft/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 id="home-team" className="mb-10 text-center font-display text-3xl text-brand-deep">
              {t.team}
            </h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {featuredTeam.map((member) => (
                <li key={member.id} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="font-semibold text-brand-deep">{member.name}</p>
                  <p className="mt-1 text-sm text-brand-teal">{member.role[locale]}</p>
                  <p className="mt-3 text-sm text-slate-700">{member.credentials[locale][0]}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link
                href={pathFor(locale, 'team')}
                className="inline-flex min-h-11 items-center rounded-full bg-brand-teal px-6 font-semibold text-white hover:bg-brand-deep"
              >
                {t.teamMore}
              </Link>
            </p>
          </div>
        </section>

        <section aria-labelledby="home-contact" className="mx-auto max-w-4xl px-4 py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 id="home-contact" className="font-display text-2xl text-brand-deep">
              {t.contact}
            </h2>
            <p className="mt-3 text-slate-700">{t.contactText}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.address}</dt>
                <dd className="mt-1 text-slate-800">
                  <address className="not-italic">{SITE.addressLine}</address>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="break-all text-brand-teal underline hover:text-brand-deep">
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href={pathFor(locale, 'contact')}
              className="mt-8 inline-flex min-h-11 items-center rounded-full bg-brand-teal px-6 font-semibold text-white hover:bg-brand-deep"
            >
              {t.contact} →
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
