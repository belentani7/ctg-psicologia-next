import { Header, Footer } from '@/components/Layout';
import { blogPosts, Locale } from '@/data/content';

export default function BlogPage({ locale }: { locale: Locale }) {
  const read = locale === 'es' ? 'Leer' : locale === 'ca' ? 'Llegir' : 'Read';

  return (
    <>
      <Header locale={locale} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-12">Blog</h1>
        <div className="space-y-6">
          {blogPosts.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">{p.date}</p>
              <h2 className="font-semibold text-lg text-brand-deep">{p.title[locale]}</h2>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt[locale]}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-teal">{read} →</span>
            </article>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}