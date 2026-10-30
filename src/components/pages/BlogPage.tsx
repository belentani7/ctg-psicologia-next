import { Header, Footer } from '@/components/Layout';
import { blogPosts, Locale } from '@/data/content';

export default function BlogPage({ locale }: { locale: Locale }) {
  const summary = locale === 'es' ? 'Resumen' : locale === 'ca' ? 'Resum' : 'Summary';
  const notice = locale === 'es'
    ? 'Estos son resúmenes informativos. Los artículos completos aún no están disponibles en esta web.'
    : locale === 'ca'
      ? 'Aquests són resums informatius. Els articles complets encara no estan disponibles en aquest web.'
      : 'These are informational summaries. Full articles are not yet available on this website.';

  return (
    <>
      <Header locale={locale} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-3">Blog</h1>
        <p className="mb-10 max-w-2xl text-sm text-slate-700">{notice}</p>
        <div className="space-y-6">
          {blogPosts.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">{p.date}</p>
              <h2 className="font-semibold text-lg text-brand-deep">{p.title[locale]}</h2>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt[locale]}</p>
              <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-brand-teal">{summary}</span>
            </article>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}