import ContactForm from '@/components/ContactForm';
import { Header, Footer } from '@/components/Layout';
import type { Locale } from '@/data/content';
import { SITE, pathFor } from '@/lib/site';

const COPY: Record<
  Locale,
  {
    title: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    privacy: string;
    privacyLink: string;
    help: string;
    subject: string;
    errorRequired: string;
    errorEmail: string;
    ready: string;
    where: string;
    how: string;
    whatsapp: string;
    map: string;
  }
> = {
  es: {
    title: 'Contacto',
    intro:
      'Podéis poneros en contacto con nosotros para cualquier consulta, duda o propuesta. Nos encontraréis en el centro de L’Hospitalet.',
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    message: 'Mensaje',
    send: 'Enviar',
    privacy: 'He leído y acepto la',
    privacyLink: 'política de privacidad',
    help: 'Al enviar se abrirá tu aplicación de correo con el mensaje preparado. No guardamos datos en el servidor.',
    subject: 'Consulta desde la web de cTg Psicología',
    errorRequired: 'Campo obligatorio',
    errorEmail: 'Introduce un email válido',
    ready: 'Se ha abierto tu aplicación de correo con el mensaje.',
    where: 'Dónde estamos',
    how: 'Cómo llegar',
    whatsapp: 'Escribir por WhatsApp',
    map: "C/ Girona 21, a pocos minutos de la estación de L'Hospitalet – Av. Carrilet.",
  },
  ca: {
    title: 'Contacte',
    intro:
      'Podeu posar-vos en contacte amb nosaltres per a qualsevol consulta, dubte o proposta. Ens trobareu al centre de L’Hospitalet.',
    name: 'Nom',
    email: 'Email',
    phone: 'Telèfon',
    message: 'Missatge',
    send: 'Envia',
    privacy: 'He llegit i accepto la',
    privacyLink: 'política de privacitat',
    help: 'En enviar s’obrirà la teva aplicació de correu amb el missatge preparat. No guardem dades al servidor.',
    subject: 'Consulta des de la web de cTg Psicologia',
    errorRequired: 'Camp obligatori',
    errorEmail: 'Introdueix un email vàlid',
    ready: 'S’ha obert la teva aplicació de correu amb el missatge.',
    where: 'On som',
    how: 'Com arribar-hi',
    whatsapp: 'Escriure per WhatsApp',
    map: "C/ Girona 21, a pocs minuts de l'estació de L'Hospitalet – Av. Carrilet.",
  },
  en: {
    title: 'Contact',
    intro:
      'You can contact us for any query, doubt or proposal. You will find us in the centre of L’Hospitalet.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    privacy: 'I have read and accept the',
    privacyLink: 'privacy policy',
    help: 'Sending opens your email application with the message prepared. We do not store data on the server.',
    subject: 'Enquiry from the cTg Psychology website',
    errorRequired: 'Required field',
    errorEmail: 'Enter a valid email',
    ready: 'Your email application has opened with the message.',
    where: 'Where we are',
    how: 'How to get here',
    whatsapp: 'Message on WhatsApp',
    map: "C/ Girona 21, a few minutes from L'Hospitalet – Av. Carrilet station.",
  },
};

export default function ContactoPage({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <>
      <Header locale={locale} section="contact" />
      <main id="contenido" className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep">{t.title}</h1>
        <p className="mt-4 max-w-prose text-slate-700">{t.intro}</p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ContactForm email={SITE.email} privacyHref={pathFor(locale, 'privacy')} copy={t} />

          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-brand-deep">{SITE.name}</h2>
            <dl className="mt-4 space-y-3 text-slate-800">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.where}</dt>
                <dd className="mt-1">
                  <address className="not-italic">{SITE.addressLine}</address>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="break-all text-brand-teal underline hover:text-brand-deep">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">{t.phone}</dt>
                <dd className="mt-1">
                  <a href={`tel:${SITE.phoneHref}`} className="text-brand-teal underline hover:text-brand-deep">
                    {SITE.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-amber px-6 font-semibold text-white hover:bg-brand-amber/90"
            >
              {t.whatsapp}
            </a>

            <h2 className="mt-8 font-semibold text-brand-deep">{t.how}</h2>
            <p className="mt-2 text-sm text-slate-700">{t.map}</p>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
