/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

/**
 * CSP de producción. Next.js inyecta scripts inline propios, y el motor OCR
 * usa WebAssembly y un Web Worker del mismo origen; por eso `'unsafe-inline'`
 * en script-src, `'wasm-unsafe-eval'` y `worker-src blob:`.
 * No se aplica en desarrollo para no romper el HMR.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self' mailto:",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'",
  "worker-src 'self' blob:",
  "connect-src 'self' blob: data:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  ...(isProd ? [{ key: 'Content-Security-Policy', value: csp }] : []),
];

const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: { globalNotFound: true },

  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        // Los binarios del OCR son inmutables dentro de una versión.
        source: '/tesseract/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/tessdata/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  async redirects() {
    // Rutas heredadas de la etapa de páginas estáticas.
    return [
      { source: '/index.html', destination: '/es', permanent: true },
      { source: '/404.html', destination: '/es', permanent: true },
      { source: '/aviso-legal.html', destination: '/es/aviso-legal', permanent: true },
      { source: '/privacidad.html', destination: '/es/privacidad', permanent: true },
      { source: '/accessibility.html', destination: '/es', permanent: true },
      { source: '/accesibilidad.html', destination: '/es', permanent: true },
    ];
  },
};

module.exports = nextConfig;
