import type { Locale } from '@/data/content';

/**
 * Registro central del sitio: idiomas, secciones, rutas canónicas y datos de
 * contacto. Es la única fuente de verdad de la estructura de URLs; cualquier
 * componente o script que necesite un enlace debe usar `pathFor()`.
 *
 * Este módulo no importa valores de otros módulos (solo tipos, que TypeScript
 * elimina al transpilar) para que los tests de Node puedan cargarlo sin build.
 */

export type { Locale };

export const LOCALES = ['es', 'ca', 'en'] as const satisfies readonly Locale[];
export const DEFAULT_LOCALE: Locale = 'es';

/** Etiqueta BCP-47 completa, necesaria para `hreflang` y `<html lang>`. */
export const HTML_LANG: Record<Locale, string> = {
  es: 'es-ES',
  ca: 'ca-ES',
  en: 'en',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
};

export type SectionKey =
  | 'centre'
  | 'team'
  | 'services'
  | 'blog'
  | 'contact'
  | 'ocr'
  | 'legal'
  | 'privacy'
  | 'cookies';

export const SECTIONS = [
  'centre',
  'team',
  'services',
  'blog',
  'contact',
  'ocr',
  'legal',
  'privacy',
  'cookies',
] as const satisfies readonly SectionKey[];

/** Slugs localizados. Cada combinación idioma+sección es única. */
export const SECTION_SLUGS: Record<SectionKey, Record<Locale, string>> = {
  centre: { es: 'el-centro', ca: 'el-centre', en: 'the-centre' },
  team: { es: 'equipo', ca: 'equip', en: 'team' },
  services: { es: 'servicios', ca: 'serveis', en: 'services' },
  blog: { es: 'blog', ca: 'blog', en: 'blog' },
  contact: { es: 'contacto', ca: 'contacte', en: 'contact' },
  ocr: { es: 'ocr', ca: 'ocr', en: 'ocr' },
  legal: { es: 'aviso-legal', ca: 'avis-legal', en: 'legal-notice' },
  privacy: { es: 'privacidad', ca: 'privacitat', en: 'privacy' },
  cookies: { es: 'cookies', ca: 'cookies', en: 'cookies' },
};

export const SECTION_LABELS: Record<SectionKey, Record<Locale, string>> = {
  centre: { es: 'El centro', ca: 'El centre', en: 'The centre' },
  team: { es: 'Nuestro equipo', ca: 'El nostre equip', en: 'Our team' },
  services: { es: 'Terapias y servicios', ca: 'Teràpies i serveis', en: 'Therapies and services' },
  blog: { es: 'Blog', ca: 'Blog', en: 'Blog' },
  contact: { es: 'Contacto', ca: 'Contacte', en: 'Contact' },
  ocr: { es: 'OCR', ca: 'OCR', en: 'OCR' },
  legal: { es: 'Aviso legal', ca: 'Avís legal', en: 'Legal notice' },
  privacy: { es: 'Privacidad', ca: 'Privacitat', en: 'Privacy' },
  cookies: { es: 'Cookies', ca: 'Cookies', en: 'Cookies' },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Ruta canónica. Sin sección devuelve la portada del idioma. */
export function pathFor(locale: Locale, section?: SectionKey): string {
  if (!section) return `/${locale}`;
  return `/${locale}/${SECTION_SLUGS[section][locale]}`;
}

export function sectionBySlug(locale: Locale, slug: string): SectionKey | null {
  const entry = SECTIONS.find((key) => SECTION_SLUGS[key][locale] === slug);
  return entry ?? null;
}

/** Devuelve qué idioma usa ese slug, si lo usa alguno. */
export function localeOfSlug(slug: string): Locale | null {
  const entry = LOCALES.find((locale) =>
    SECTIONS.some((key) => SECTION_SLUGS[key][locale] === slug),
  );
  return entry ?? null;
}

/** Los 6-7 enlaces de la navegación principal, ya resueltos. */
export const NAV_SECTIONS = ['centre', 'team', 'services', 'blog'] as const satisfies readonly SectionKey[];

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;
  return 'http://localhost:3000';
}

export const SITE = {
  name: 'cTg Psicología',
  legalName: 'cTg Centre Mèdic — cTg Psicología',
  tagline: {
    es: 'Centro de Terapia Global',
    ca: 'Centre de Teràpia Global',
    en: 'Global Therapy Centre',
  } satisfies Record<Locale, string>,
  description: {
    es: "Centro de psicología, logopedia y psiquiatría en el centro de L'Hospitalet de Llobregat. Terapia para adultos, pareja, familia e infancia.",
    ca: "Centre de psicologia, logopèdia i psiquiatria al centre de L'Hospitalet de Llobregat. Teràpia per a adults, parella, família i infància.",
    en: "Psychology, speech therapy and psychiatry centre in central L'Hospitalet de Llobregat. Therapy for adults, couples, families and children.",
  } satisfies Record<Locale, string>,
  url: resolveSiteUrl(),
  phone: '+34 605 362 664',
  phoneHref: '+34605362664',
  email: 'centre@ctgterapiaglobal.com',
  whatsapp: 'https://wa.me/34605362664',
  address: {
    street: 'C/ Girona 21',
    postalCode: '08901',
    city: "L'Hospitalet de Llobregat",
    region: 'Barcelona',
    country: 'ES',
  },
  addressLine: "C/ Girona 21, 08901 L'Hospitalet de Llobregat",
  openingYear: 1998,
  repo: 'https://github.com/belentani7/ctg-psicologia-next',
} as const;

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/** `hreflang` completo para una sección (o portada) en los tres idiomas. */
export function languageAlternates(section?: SectionKey): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[HTML_LANG[locale]] = absoluteUrl(pathFor(locale, section));
  }
  languages['x-default'] = absoluteUrl(pathFor(DEFAULT_LOCALE, section));
  return languages;
}
