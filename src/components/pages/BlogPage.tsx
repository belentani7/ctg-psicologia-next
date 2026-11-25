import { Header, Footer } from '@/components/Layout';
import { blogPosts, type Locale } from '@/data/content';

const COPY: Record<Locale, { title: string; intro: string }> = {
  es: {
    title: 'Blog',
    intro: 'Notas breves del equipo sobre los temas que más consultan las personas que nos visitan.',
  },
  ca: {
    title: 'Blog',
    intro: 'Notes breus de l’equip sobre els temes que més consulten les persones que ens visiten.',
  },
  en: {
    title: 'Blog',
    intro: 'Short notes from the team on the topics people ask us about most.',
  },
};

const DATE_PREFIX: Record<Locale, string> = { es: 'Publicado', ca: 'Publicat', en: 'Published' };

export default function BlogPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <Header locale={locale} section="blog" />
      <main id="contenido" className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep">{t.title}</h1>
        <p className="mt-4 max-w-prose text-slate-700">{t.intro}</p>

        <ul className="mt-10 space-y-6">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-600">
                  <time dateTime={post.date}>
                    {DATE_PREFIX[locale]} {post.date}
                  </time>
                </p>
                <h2 className="mt-2 text-lg font-semibold text-brand-deep">{post.title[locale]}</h2>
                <p className="mt-2 text-sm text-slate-700">{post.excerpt[locale]}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={locale} />
    </>
  );
}
