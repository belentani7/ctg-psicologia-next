import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'cTg Psicología | Centro de Terapia Global',
  description: 'Centro de Terapia Global en L\'Hospitalet de Llobregat. Psicología, logopedia, psiquiatría y más.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-brand-soft text-slate-800 font-body antialiased">
        {children}
      </body>
    </html>
  );
}