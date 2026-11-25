import ContactForm from '@/components/ContactForm';
import { Header, Footer } from '@/components/Layout';
import { contact, Locale } from '@/data/content';

export default function ContactoPage({ locale }: { locale: Locale }) {
  const t = {
    title: locale === 'es' ? 'Contacto' : locale === 'ca' ? 'Contacte' : 'Contact',
    intro: locale === 'es'
      ? 'Podéis poneros en contacto con nosotros para cualquier tipo de consulta, duda o propuesta que tengáis. Nos encontraréis en el centro de L\'Hospitalet.'
      : locale === 'ca'
      ? 'Podeu posar-vos en contacte amb nosaltres per a qualsevol consulta, dubte o proposta. Ens trobareu al centre de L\'Hospitalet.'
      : 'You can contact us for any query, doubt or proposal. You will find us in the centre of L\'Hospitalet.',
    name: locale === 'es' ? 'Nombre' : locale === 'ca' ? 'Nom' : 'Name',
    email: 'Email',
    phone: locale === 'es' ? 'Teléfono' : locale === 'ca' ? 'Telèfon' : 'Phone',
    message: locale === 'es' ? 'Mensaje' : locale === 'ca' ? 'Missatge' : 'Message',
    send: locale === 'es' ? 'Enviar' : locale === 'ca' ? 'Envia' : 'Send',
    privacy: locale === 'es' ? 'Aceptar la Política de Privacidad' : locale === 'ca' ? 'Acceptar la Política de Privacitat' : 'Accept the Privacy Policy',
    help: locale === 'es' ? 'Al enviar se abrirá tu aplicación de correo con el mensaje preparado.' : locale === 'ca' ? 'En enviar s’obrirà la teva aplicació de correu amb el missatge preparat.' : 'Sending opens your email application with the message prepared.',
    subject: locale === 'es' ? 'Consulta desde la web de cTg Psicología' : locale === 'ca' ? 'Consulta des de la web de cTg Psicologia' : 'Enquiry from the cTg Psychology website',
  };

  return (
    <>
      <Header locale={locale} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-4">{t.title}</h1>
        <p className="text-slate-600 mb-10">{t.intro}</p>
        <div className="grid md:grid-cols-2 gap-10">
          <ContactForm email={contact.email} copy={t} />
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-fit">
            <h2 className="font-semibold text-brand-deep mb-3">cTg Psicología</h2>
            <p className="text-slate-600">{contact.address[locale]}</p>
            <p className="text-slate-600 mt-2"><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="rounded-sm hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">Telf: {contact.phone}</a></p>
            <p className="text-slate-600 mt-2 break-all"><a href={`mailto:${contact.email}`} className="rounded-sm hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal">Email: {contact.email}</a></p>
            <a href="https://wa.me/34605362664" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-brand-amber px-6 py-3 font-semibold text-white hover:bg-brand-amber/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber">
              WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
