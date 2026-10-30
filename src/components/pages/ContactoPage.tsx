import { Header, Footer } from '@/components/Layout';
import { contact, type Locale } from '@/data/content';

const COPY: Record<Locale, {
  title: string; intro: string; channels: string; unavailable: string;
  call: string; email: string; whatsapp: string; external: string;
  caution: string; address: string;
}> = {
  es: {
    title: 'Contacto',
    intro: 'Estamos en el centro de L’Hospitalet. Para consultas generales o solicitar una cita, utiliza uno de los canales disponibles.',
    channels: 'Cómo contactar',
    unavailable: 'El formulario web no está disponible: todavía no existe un sistema de envío seguro. No se guardará ningún mensaje en esta página.',
    call: 'Llamar al centro', email: 'Escribir un correo', whatsapp: 'Abrir WhatsApp',
    external: '(se abre en una pestaña nueva)',
    caution: 'El correo electrónico y WhatsApp son servicios externos. No envíes informes clínicos, diagnósticos ni otros datos de salud por estos canales. Para información sensible, llama al centro y consulta un medio seguro.',
    address: 'Dirección del centro',
  },
  ca: {
    title: 'Contacte',
    intro: 'Som al centre de L’Hospitalet. Per a consultes generals o demanar cita, utilitza un dels canals disponibles.',
    channels: 'Com contactar',
    unavailable: 'El formulari web no està disponible: encara no hi ha un sistema d’enviament segur. No es desarà cap missatge en aquesta pàgina.',
    call: 'Trucar al centre', email: 'Escriure un correu', whatsapp: 'Obrir WhatsApp',
    external: '(s’obre en una pestanya nova)',
    caution: 'El correu electrònic i WhatsApp són serveis externs. No enviïs informes clínics, diagnòstics ni altres dades de salut per aquests canals. Per a informació sensible, truca al centre i consulta un mitjà segur.',
    address: 'Adreça del centre',
  },
  en: {
    title: 'Contact',
    intro: 'Find us in central L’Hospitalet. For general enquiries or to request an appointment, choose a contact channel below.',
    channels: 'Contact options',
    unavailable: 'The web form is unavailable because a secure submission service has not been implemented. No message is stored on this page.',
    call: 'Call the centre', email: 'Send an email', whatsapp: 'Open WhatsApp',
    external: '(opens in a new tab)',
    caution: 'Email and WhatsApp are external services. Do not send clinical records, diagnoses or other health information through these channels. For sensitive information, call the centre and ask about a secure method.',
    address: 'Centre address',
  },
};

export default function ContactoPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const phoneUri = `tel:${contact.phone.replace(/\s/g, '')}`;
  const whatsappUri = `https://wa.me/${contact.phone.replace(/\D/g, '')}`;

  const actionClass = 'inline-flex min-h-12 items-center justify-center rounded-full bg-brand-deep px-6 py-3 text-center font-semibold text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep';

  return (
    <>
      <Header locale={locale} />
      <main id="main-content" lang={locale} className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h1 className="mb-4 font-display text-4xl text-brand-deep">{t.title}</h1>
        <p className="mb-10 max-w-3xl text-slate-700">{t.intro}</p>
        <div className="grid gap-8 md:grid-cols-2">
          <section aria-labelledby="contact-channels" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 id="contact-channels" className="mb-3 text-xl font-semibold text-brand-deep">{t.channels}</h2>
            <p className="mb-4 text-sm text-slate-700">{t.unavailable}</p>
            <p role="note" className="mb-6 rounded-lg border-l-4 border-brand-amber bg-amber-50 p-4 text-sm text-slate-800">
              {t.caution}
            </p>
            <ul className="flex flex-col gap-3">
              <li><a href={phoneUri} className={actionClass}>{t.call}</a></li>
              <li><a href={`mailto:${contact.email}`} className={actionClass}>{t.email}</a></li>
              <li>
                <a href={whatsappUri} target="_blank" rel="noopener noreferrer" className={actionClass}>
                  {t.whatsapp} <span className="ml-2 text-xs">{t.external}</span>
                </a>
              </li>
            </ul>
          </section>
          <section aria-labelledby="contact-address" className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 id="contact-address" className="mb-3 text-xl font-semibold text-brand-deep">{t.address}</h2>
            <address className="not-italic">
              <p className="text-slate-700">{contact.address[locale]}</p>
              <p className="mt-3"><a href={phoneUri} className="break-words text-brand-deep underline underline-offset-4 focus-visible:outline focus-visible:outline-2">{contact.phone}</a></p>
              <p className="mt-3"><a href={`mailto:${contact.email}`} className="break-all text-brand-deep underline underline-offset-4 focus-visible:outline focus-visible:outline-2">{contact.email}</a></p>
            </address>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
