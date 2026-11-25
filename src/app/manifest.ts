import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'cTg',
    description: SITE.description.es,
    lang: 'es',
    start_url: '/es',
    scope: '/',
    display: 'standalone',
    background_color: '#f7f4ef',
    theme_color: '#0f766e',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}
