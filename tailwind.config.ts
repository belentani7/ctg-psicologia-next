import type { Config } from 'tailwindcss';
import tokens from './src/lib/tokens.json';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: tokens.brand.teal,
          soft: tokens.brand.soft,
          deep: tokens.brand.deep,
          amber: tokens.brand.amber,
        },
        surface: {
          DEFAULT: tokens.surface.bg,
          ink: tokens.surface.ink,
          muted: tokens.surface.muted,
        },
      },
      fontFamily: {
        display: ['Iowan Old Style', 'Palatino Linotype', 'Palatino', 'Georgia', 'serif'],
        body: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};

export default config;
