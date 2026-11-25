import Link from 'next/link';
import {
  HTML_LANG,
  LOCALE_NAMES,
  LOCALES,
  NAV_SECTIONS,
  SECTION_LABELS,
  SITE,
  pathFor,
  type Locale,
  type SectionKey,
} from '@/lib/site';

const COPY: Record<
  Locale,
  {
    navLabel: string;
    menu: string;
    languages: string;
    links: string;
    legal: string;
    contact: string;
    whatsapp: string;
    rights: string;
  }
> = {
  es: {
    navLabel: 'Navegación principal',
    menu: 'Menú',
    languages: 'Idioma',
    links: 'Enlaces',
    legal: 'Legal',
    contact: 'Contacto',
    whatsapp: 'Escríbenos por WhatsApp',
    rights: 'Todos los derechos reservados.',
  },
  ca: {
    navLabel: 'Navegació principal',
    menu: 'Menú',
    languages: 'Idioma',
    links: 'Enllaços',
    legal: 'Legal',
    contact: 'Contacte',
    whatsapp: 'Escriu-nos per WhatsApp',
    rights: 'Tots els drets reservats.',
  },
  en: {
    navLabel: 'Main navigation',
    menu: 'Menu',
    languages: 'Language',
    links: 'Links',
    legal: 'Legal',
    contact: 'Contact',
    whatsapp: 'Message us on WhatsApp',
    rights: 'All rights reserved.',
  },
};

const FOOTER_LEGAL: SectionKey[] = ['legal', 'privacy', 'cookies'];

function LanguageSwitcher({
  locale,
  section,
  label,
  className = '',
}: {
  locale: Locale;
  section?: SectionKey;
  label: string;
  className?: string;
}) {
  return (
    <ul aria-label={label} className={`flex items-center gap-1 ${className}`}>
      {LOCALES.map((code) => {
        const current = code === locale;
        return (
          <li key={code}>
            <Link
              href={pathFor(code, section)}
              hrefLang={HTML_LANG[code]}
              lang={HTML_LANG[code]}
              aria-current={current ? 'true' : undefined}
              className={`inline-flex min-h-9 items-center rounded-md px-2 text-xs uppercase tracking-wide transition-colors ${
                current
                  ? 'bg-brand-teal text-white font-semibold'
                  : 'text-slate-600 hover:text-brand-teal hover:bg-brand-soft'
              }`}
            >
              {code}
              <span className="sr-only"> — {LOCALE_NAMES[code]}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Header({ locale, section }: { locale: Locale; section?: SectionKey }) {
  const t = COPY[locale];

  const navLinks = NAV_SECTIONS.map((key) => ({
    key,
    href: pathFor(locale, key),
    label: SECTION_LABELS[key][locale],
    current: key === section,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href={pathFor(locale)}
          className="flex items-center gap-2 rounded-md"
          aria-label={`${SITE.name} — ${SITE.tagline[locale]}`}
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal font-display text-lg text-white"
          >
            c
          </span>
          <span>
            <span className="block font-display text-lg leading-none text-brand-deep">{SITE.name}</span>
            <span className="text-xs text-slate-600">{SITE.tagline[locale]}</span>
          </span>
        </Link>

        <nav aria-label={t.navLabel} className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-brand-soft hover:text-brand-teal ${
                item.current ? 'font-semibold text-brand-teal' : 'text-slate-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden="true" className="mx-2 h-6 w-px bg-slate-200" />
          <LanguageSwitcher locale={locale} section={section} label={t.languages} />
          <Link
            href={pathFor(locale, 'contact')}
            className="ml-2 inline-flex min-h-10 items-center rounded-full bg-brand-teal px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            {t.contact}
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md border border-slate-300 px-3 text-sm font-semibold text-brand-deep">
            {t.menu}
          </summary>
          <nav
            aria-label={t.navLabel}
            className="absolute right-0 top-full mt-2 min-w-64 rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-lg"
          >
            <ul className="grid gap-1">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={`flex min-h-11 items-center rounded-md px-3 hover:bg-brand-soft hover:text-brand-teal ${
                      item.current ? 'font-semibold text-brand-teal' : 'text-slate-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-slate-200 pt-3">
              <p className="mb-1 px-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.languages}
              </p>
              <LanguageSwitcher locale={locale} section={section} label={t.languages} className="flex-wrap" />
            </div>
            <Link
              href={pathFor(locale, 'contact')}
              className="mt-3 flex min-h-11 items-center justify-center rounded-full bg-brand-teal px-4 font-semibold text-white hover:bg-brand-deep"
            >
              {t.contact}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-brand-deep text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm md:grid-cols-3">
        <div>
          <h2 className="mb-3 font-semibold text-white">{SITE.name}</h2>
          <address className="not-italic leading-relaxed text-slate-300">
            {SITE.addressLine}
            <br />
            <a href={`tel:${SITE.phoneHref}`} className="hover:text-white hover:underline">
              {SITE.phone}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="break-all hover:text-white hover:underline">
              {SITE.email}
            </a>
          </address>
          <a
            href={SITE.whatsapp}
            className="mt-4 inline-flex min-h-10 items-center rounded-full bg-brand-amber px-4 font-semibold text-white hover:bg-brand-amber/90"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t.whatsapp}
            <span className="sr-only"> ({SITE.phone})</span>
          </a>
        </div>

        <nav aria-label={t.links}>
          <h2 className="mb-3 font-semibold text-white">{t.links}</h2>
          <ul className="space-y-2">
            {NAV_SECTIONS.map((key) => (
              <li key={key}>
                <Link href={pathFor(locale, key)} className="hover:text-white hover:underline">
                  {SECTION_LABELS[key][locale]}
                </Link>
              </li>
            ))}
            <li>
              <Link href={pathFor(locale, 'ocr')} className="hover:text-white hover:underline">
                OCR
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={t.legal}>
          <h2 className="mb-3 font-semibold text-white">{t.legal}</h2>
          <ul className="space-y-2">
            {FOOTER_LEGAL.map((key) => (
              <li key={key}>
                <Link href={pathFor(locale, key)} className="hover:text-white hover:underline">
                  {SECTION_LABELS[key][locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-300">
        © {year} {SITE.name} · {SITE.tagline[locale]} — {t.rights}
      </div>
    </footer>
  );
}
