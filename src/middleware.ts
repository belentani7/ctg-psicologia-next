import { NextResponse, type NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALES,
  isLocale,
  localeOfSlug,
  pathFor,
  sectionBySlug,
  type Locale,
} from '@/lib/site';

const COOKIE = 'NEXT_LOCALE';

function fromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const tags = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: q ? Number.parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    const base = tag.split('-')[0];
    if ((LOCALES as readonly string[]).includes(base)) return base as Locale;
  }
  return null;
}

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;
  return fromAcceptLanguage(request.headers.get('accept-language')) ?? DEFAULT_LOCALE;
}

function withLocaleCookie(response: NextResponse, locale: Locale): NextResponse {
  response.cookies.set(COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: false,
  });
  return response;
}

/**
 * Canonicaliza las URLs:
 *  - `/` y rutas sin idioma → `/{idioma detectado}`
 *  - slugs heredados (`/servicios`, `/contact`…) → ruta canónica del idioma
 *  - slugs de otro idioma bajo un prefijo equivocado (`/ca/services`) → ruta correcta
 * Las redirecciones son 308 (permanentes, conservan el método).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    const slug = segments[1];
    if (slug && slug !== 'opengraph-image') {
      const valid = sectionBySlug(first, slug);
      if (!valid) {
        const owner = localeOfSlug(slug);
        if (owner) {
          const target = sectionBySlug(owner, slug);
          if (target) {
            const url = request.nextUrl.clone();
            url.pathname = pathFor(first, target);
            return withLocaleCookie(NextResponse.redirect(url, 308), first);
          }
        }
      }
    }
    return withLocaleCookie(NextResponse.next(), first);
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();

  if (first) {
    const owner = localeOfSlug(first);
    if (owner) {
      const section = sectionBySlug(owner, first);
      if (section) {
        url.pathname = pathFor(locale, section);
        return withLocaleCookie(NextResponse.redirect(url, 308), locale);
      }
    }
    url.pathname = `/${locale}${pathname}`;
    return withLocaleCookie(NextResponse.redirect(url, 308), locale);
  }

  url.pathname = `/${locale}`;
  return withLocaleCookie(NextResponse.redirect(url, 308), locale);
}

export const config = {
  // Excluye assets internos, API y ficheros con extensión (og.png, robots.txt, sitemap.xml…).
  matcher: ['/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)'],
};
