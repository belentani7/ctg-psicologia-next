import Link from 'next/link';
import { Locale } from '@/data/content';

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
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="text-slate-600 hover:text-brand-teal transition-colors">
              {i.label}
            </Link>
          ))}
          <div className="flex gap-2 border-l pl-4 border-slate-200">
            {LANGS.map((l) => (
              <Link key={l.code} href={l.code === 'es' ? '/' : `/${l.code}`} className="text-xs uppercase text-slate-500 hover:text-brand-teal">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

const FOOTER: Record<Locale, { links: string; legal: string; nav: { href: string; label: string }[]; legalItems: string[] }> = {
  es: {
    links: 'Enlaces',
    legal: 'Legal',
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
          <p>C/ Girona 21, 08901 L&apos;Hospitalet de Llobregat</p>
          <p>+34 605 362 664</p>
          <p className="break-all">centre@ctgterapiaglobal.com</p>
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
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs">
        © 2026 cTg Psicología · Centro de Terapia Global
      </div>
    </footer>
  );
}