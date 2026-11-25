import type { Metadata } from 'next';
import type { Locale } from '@/data/content';
import {
  HTML_LANG,
  LOCALES,
  SITE,
  SECTION_LABELS,
  absoluteUrl,
  languageAlternates,
  pathFor,
  type SectionKey,
} from './site';

type Copy = Record<Locale, string>;

/** Título de la portada por idioma. */
const HOME_TITLE: Copy = {
  es: "cTg Psicología | Centro de Terapia Global en L'Hospitalet",
  ca: "cTg Psicologia | Centre de Teràpia Global a L'Hospitalet",
  en: "cTg Psychology | Global Therapy Centre in L'Hospitalet",
};

/** Descripción por sección e idioma. */
const SECTION_DESCRIPTION: Partial<Record<SectionKey, Copy>> = {
  centre: {
    es: "El cTg Centre Mèdic (1998) y su área de psicología: orientación ecléctica, terapias EMDR y Brainspotting en L'Hospitalet de Llobregat.",
    ca: "El cTg Centre Mèdic (1998) i la seva àrea de psicologia: orientació eclèctica, teràpies EMDR i Brainspotting a L'Hospitalet de Llobregat.",
    en: "The cTg Centre Mèdic (1998) and its psychology area: eclectic orientation, EMDR and Brainspotting in L'Hospitalet de Llobregat.",
  },
  team: {
    es: "Psicólogas y psicólogos colegiados del equipo de cTg Psicología, con formación en terapia humanista, sistémica y EMDR.",
    ca: "Psicòlogues i psicòlegs col·legiats de l'equip de cTg Psicologia, amb formació en teràpia humanista, sistèmica i EMDR.",
    en: "Registered psychologists from the cTg Psychology team, trained in humanistic, systemic and EMDR therapy.",
  },
  services: {
    es: "Terapia de adultos, terapia sexual y de pareja, familiar, infantojuvenil y logopedia en L'Hospitalet de Llobregat.",
    ca: "Teràpia d'adults, teràpia sexual i de parella, familiar, infanto-juvenil i logopèdia a L'Hospitalet de Llobregat.",
    en: "Adult therapy, sexual and couples therapy, family and child therapy, and speech therapy in L'Hospitalet de Llobregat.",
  },
  blog: {
    es: "Artículos sobre dependencia emocional, adicciones, abusos y terapia online del equipo de cTg Psicología.",
    ca: "Articles sobre dependència emocional, addiccions, abusos i teràpia online de l'equip de cTg Psicologia.",
    en: "Articles on emotional dependence, addiction, abuse and online therapy from the cTg Psychology team.",
  },
  contact: {
    es: "Pide cita en cTg Psicología: C/ Girona 21, L'Hospitalet de Llobregat. Teléfono, email y WhatsApp.",
    ca: "Demana cita a cTg Psicologia: C/ Girona 21, L'Hospitalet de Llobregat. Telèfon, email i WhatsApp.",
    en: "Book an appointment at cTg Psychology: C/ Girona 21, L'Hospitalet de Llobregat. Phone, email and WhatsApp.",
  },
  ocr: {
    es: "Herramienta gratuita de OCR que extrae texto de imágenes en tu navegador. La imagen nunca se sube a ningún servidor.",
    ca: "Eina gratuïta d'OCR que extreu text d'imatges al teu navegador. La imatge no s'envia mai a cap servidor.",
    en: "Free OCR tool that extracts text from images in your browser. The image is never uploaded to any server.",
  },
  legal: {
    es: "Aviso legal del sitio web de cTg Psicología.",
    ca: "Avís legal del lloc web de cTg Psicologia.",
    en: "Legal notice for the cTg Psychology website.",
  },
  privacy: {
    es: "Política de privacidad: sin analítica de terceros, sin cookies de seguimiento y con el OCR procesado en tu dispositivo.",
    ca: "Política de privacitat: sense analítica de tercers, sense galetes de seguiment i amb l'OCR processat al teu dispositiu.",
    en: "Privacy policy: no third-party analytics, no tracking cookies, and OCR processed on your device.",
  },
  cookies: {
    es: "Política de cookies: este sitio no utiliza cookies de seguimiento ni publicidad.",
    ca: "Política de galetes: aquest lloc no utilitza galetes de seguiment ni publicitat.",
    en: "Cookie policy: this site does not use tracking or advertising cookies.",
  },
};

export function descriptionFor(locale: Locale, section?: SectionKey): string {
  if (!section) return SITE.description[locale];
  return SECTION_DESCRIPTION[section]?.[locale] ?? SITE.description[locale];
}

export function titleFor(locale: Locale, section?: SectionKey): string {
  if (!section) return HOME_TITLE[locale];
  const label = SECTION_LABELS[section][locale];
  return section === 'blog' ? `Blog | ${SITE.name}` : `${label} | ${SITE.name}`;
}

/** Metadata completa: canonical, hreflang, Open Graph y Twitter. */
export function buildMetadata(locale: Locale, section?: SectionKey): Metadata {
  const title = titleFor(locale, section);
  const description = descriptionFor(locale, section);
  const url = absoluteUrl(pathFor(locale, section));
  const image = absoluteUrl('/og.png');

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(section),
    },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      title,
      description,
      locale: HTML_LANG[locale].replace('-', '_'),
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => HTML_LANG[l].replace('-', '_')),
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline[locale]}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

/** JSON-LD de negocio sanitario, con datos que constan en el sitio. */
export function jsonLdGraph(locale: Locale) {
  const clinic = {
    '@type': 'MedicalClinic',
    '@id': `${SITE.url}/#clinica`,
    name: SITE.name,
    alternateName: SITE.legalName,
    url: absoluteUrl(pathFor(locale)),
    telephone: SITE.phoneHref,
    email: SITE.email,
    image: absoluteUrl('/og.png'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    availableLanguage: ['es', 'ca', 'en'],
    medicalSpecialty: ['Psychiatric', 'SpeechPathology'],
    sameAs: [SITE.repo],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#web`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: LOCALES.map((l) => HTML_LANG[l]),
    publisher: { '@id': `${SITE.url}/#clinica` },
  };

  return { '@context': 'https://schema.org', '@graph': [clinic, website] };
}
