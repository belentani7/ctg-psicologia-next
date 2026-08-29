import { Header, Footer } from '@/components/Layout';
import { team, Locale } from '@/data/content';

export default function EquipoPage({ locale }: { locale: Locale }) {
  const title = locale === 'es' ? 'Nuestro equipo' : locale === 'ca' ? 'El nostre equip' : 'Our team';
  const sub = locale === 'es' ? 'Nº de colegiada' : locale === 'ca' ? 'Nº de col·legiada' : 'Registration no.';

  return (
    <>
      <Header locale={locale} />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-12 text-center">{title}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((m) => (
            <div key={m.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center font-display text-2xl shrink-0">
                  {m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-brand-deep">{m.name}</h2>
                  <p className="text-sm text-brand-teal">{m.role[locale]}</p>
                  {m.colegiada && (
                    <p className="text-xs text-slate-400 mt-1">{sub}: {m.colegiada}</p>
                  )}
                </div>
              </div>
              <ul className="mt-4 space-y-1.5">
                {m.credentials[locale].map((c, i) => (
                  <li key={i} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-brand-amber shrink-0">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}