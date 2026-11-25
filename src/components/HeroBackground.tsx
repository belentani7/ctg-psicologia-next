'use client';

import dynamic from 'next/dynamic';

/**
 * Carga diferida del shader WebGL: no entra en el bundle inicial y nunca
 * bloquea el render del texto. `ssr: false` evita ejecutar WebGL en servidor.
 * Es puramente decorativo (aria-hidden en el contenedor del consumidor).
 */
const HeroShader = dynamic(() => import('./HeroShader'), {
  ssr: false,
  loading: () => null,
});

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <HeroShader colorA="#0f766e" colorB="#5eead4" />
    </div>
  );
}
