import type { MetadataRoute } from 'next';
import { LOCALES, SECTIONS, absoluteUrl, languageAlternates, pathFor } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    pages.push({
      url: absoluteUrl(pathFor(locale)),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: languageAlternates() },
    });

    for (const section of SECTIONS) {
      const isLegal = section === 'legal' || section === 'privacy' || section === 'cookies';
      pages.push({
        url: absoluteUrl(pathFor(locale, section)),
        lastModified,
        changeFrequency: isLegal ? 'yearly' : 'monthly',
        priority: isLegal ? 0.3 : section === 'services' || section === 'contact' ? 0.9 : 0.7,
        alternates: { languages: languageAlternates(section) },
      });
    }
  }

  return pages;
}
