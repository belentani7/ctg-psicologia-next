import { Header, Footer } from '@/components/Layout';
import { team, type Locale } from '@/data/content';

const COPY: Record<Locale, { title: string; intro: string; colegiada: string; credentials: string }> = {
  es: {
    title: 'Nuestro equipo',
    intro: 'Psicólogas y psicólogos colegiados, con formación continua en distintas orientaciones terapéuticas.',
    colegiada: 'Nº de colegiada',
    credentials: 'Formación y especialidades',
  },
  ca: {
    title: 'El nostre equip',
    intro: 'Psicòlogues i psicòlegs col·legiats, amb formació contínua en diferents orientacions terapèutiques.',
    colegiada: 'Nº de col·legiada',
    credentials: 'Formació i especialitats',
  },
  en: {
    title: 'Our team',
    intro: 'Registered psychologists with ongoing training across different therapeutic orientations.',
    colegiada: 'Registration no.',
    credentials: 'Training and specialities',
  },
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
}

export default function EquipoPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <Header locale={locale} section="team" />
      <main id="contenido" className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center font-display text-4xl text-brand-deep">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-prose text-center text-slate-700">{t.intro}</p>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <li key={member.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-soft font-display text-xl text-brand-teal"
                >
                  {initials(member.name)}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-brand-deep">{member.name}</h2>
                  <p className="text-sm text-brand-teal">{member.role[locale]}</p>
                  {member.colegiada && (
                    <p className="mt-1 text-xs text-slate-600">
                      {t.colegiada}: {member.colegiada}
                    </p>
                  )}
                </div>
              </div>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">{t.credentials}</h3>
              <ul className="mt-2 space-y-1.5">
                {member.credentials[locale].map((credential) => (
                  <li key={credential} className="flex gap-2 text-sm text-slate-700">
                    <span aria-hidden="true" className="shrink-0 text-brand-amber">
                      •
                    </span>
                    {credential}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={locale} />
    </>
  );
}
