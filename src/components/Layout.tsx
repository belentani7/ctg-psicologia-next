import Link from 'next/link';
import { contact, type Locale } from '@/data/content';

const NAV: Record<Locale, { href: string; label: string }[]> = {
  es: [
    { href: '/', label: 'Inicio' },
    { href: '/el-centro', label: 'El centro' },
    { href: '/equipo', label: 'Nuestro equipo' },
    { href: '/servicios', label: 'Terapias y servicios' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ],
  ca: [
    { href: '/ca', label: 'Inici' },
    { href: '/ca/el-centre', label: 'El centre' },
    { href: '/ca/equip', label: 'El nostre equip' },
    { href: '/ca/serveis', label: 'Teràpies i serveis' },
    { href: '/ca/blog', label: 'Blog' },
    { href: '/ca/contacte', label: 'Contacte' },
  ],
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/the-centre', label: 'The centre' },
    { href: '/en/team', label: 'Our team' },
    { href: '/en/services', label: 'Therapies and services' },
    { href: '/en/blog', label: 'Blog' },
    { href: '/en/contact', label: 'Contact' },
  ],
};

const LANGS: { code: Locale; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'ca', label: 'Català' },
  { code: 'en', label: 'English' },
];

const BRAND_SUB: Record<Locale, string> = {
  es: 'Centro de Terapia Global',
  ca: 'Centre de Teràpia Global',
  en: 'Global Therapy Centre',
};

export function Header({ locale = 'es' }: { locale?: Locale }) {
  const items = NAV[locale];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={items[0].href} className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center font-display text-lg">c</span>
          <span>
            <span className="font-display text-brand-deep text-lg leading-none block">cTg Psicología</span>
            <span className="text-xs text-slate-500">{BRAND_SUB[locale]}</span>
          </span>
        </Link>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">
            {locale === 'es' ? 'Menú' : locale === 'ca' ? 'Menú' : 'Menu'}
          </summary>
          <nav aria-label={locale === 'es' ? 'Navegación móvil' : locale === 'ca' ? 'Navegació mòbil' : 'Mobile navigation'} className="absolute right-0 top-full z-50 mt-2 flex w-72 max-w-[calc(100vw-2rem)] flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm text-brand-deep hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-teal">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-slate-200 pt-3">
              {LANGS.map((language) => (
                <Link key={language.code} href={language.code === 'es' ? '/' : `/${language.code}`} lang={language.code} className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-teal">
                  {language.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>
        <nav aria-label={locale === 'es' ? 'Navegación principal' : locale === 'ca' ? 'Navegació principal' : 'Main navigation'} className="hidden lg:flex items-center gap-4 text-sm">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="text-slate-600 hover:text-brand-teal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">
              {i.label}
            </Link>
          ))}
          <div className="flex gap-2 border-l pl-4 border-slate-200">
            {LANGS.map((l) => (
              <Link key={l.code} href={l.code === 'es' ? '/' : `/${l.code}`} lang={l.code} className="text-xs uppercase text-slate-500 hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

const FOOTER: Record<Locale, { links: string; legal: string; legalPending: string; nav: { href: string; label: string }[]; legalItems: string[] }> = {
  es: {
    links: 'Enlaces',
    legal: 'Legal',
    legalPending: 'Documentos legales pendientes de publicación y revisión profesional.'
    nav: [
      { href: '/el-centro', label: 'El centro' },
      { href: '/equipo', label: 'Nuestro equipo' },
      { href: '/servicios', label: 'Terapias y servicios' },
      { href: '/blog', label: 'Blog' },
    ],
    legalItems: ['Aviso legal', 'Política de privacidad', 'Política de cookies'],
  },
  ca: {
    links: 'Enllaços',
    legal: 'Legal',
    legalPending: 'Documents legals pendents de publicació i revisió professional.'
    nav: [
      { href: '/ca/el-centre', label: 'El centre' },
      { href: '/ca/equip', label: 'El nostre equip' },
      { href: '/ca/serveis', label: 'Teràpies i serveis' },
      { href: '/ca/blog', label: 'Blog' },
    ],
    legalItems: ['Avís legal', 'Política de privacitat', 'Política de cookies'],
  },
  en: {
    links: 'Links',
    legal: 'Legal',
    legalPending: 'Legal documents are pending publication and professional review.'
    nav: [
      { href: '/en/the-centre', label: 'The centre' },
      { href: '/en/team', label: 'Our team' },
      { href: '/en/services', label: 'Therapies and services' },
      { href: '/en/blog', label: 'Blog' },
    ],
    legalItems: ['Legal notice', 'Privacy policy', 'Cookie policy'],
  },
};

export function Footer({ locale = 'es' }: { locale?: Locale }) {
  const t = FOOTER[locale];
  return (
    <footer className="bg-brand-deep text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">cTg Psicología</h4>
          <address className="not-italic">
            <p>{contact.address[locale]}</p>
            <p className="mt-2">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{contact.phone}</a>
            </p>
            <p className="mt-2 break-all">
              <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{contact.email}</a>
            </p>
          </address>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">{t.links}</h4>
          <ul className="space-y-1">
            {t.nav.map((i) => (
              <li key={i.href}><Link href={i.href} className="hover:text-white">{i.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">{t.legal}</h4>
          <ul className="space-y-1">
            {t.legalItems.map((l) => (
              <li key={l}><span>{l}</span></li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-300">{t.legalPending}</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs">
        © 2026 cTg Psicología · Centro de Terapia Global
      </div>
    </footer>
  );
}