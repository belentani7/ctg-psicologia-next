import { Header, Footer } from '@/components/Layout';
import OcrTool from '@/components/OcrTool';
import type { Locale } from '@/data/content';

export default function OcrPage({ locale }: { locale: Locale }) {
  return (
    <>
      <Header locale={locale} section="ocr" />
      <main id="contenido">
        <OcrTool locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
