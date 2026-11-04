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
    email: locale === 'es' ? 'Email' : 'Email',
    phone: locale === 'es' ? 'Teléfono' : locale === 'ca' ? 'Telèfon' : 'Phone',
    message: locale === 'es' ? 'Mensaje' : locale === 'ca' ? 'Missatge' : 'Message',
    send: locale === 'es' ? 'Enviar' : locale === 'ca' ? 'Envia' : 'Send',
    privacy: locale === 'es' ? 'Aceptar la Política de Privacidad' : locale === 'ca' ? 'Acceptar la Política de Privacitat' : 'Accept the Privacy Policy',
  };

  return (
    <>
      <Header locale={locale} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-4">{t.title}</h1>
        <p className="text-slate-600 mb-10">{t.intro}</p>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t.name}</label>
              <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t.email} *</label>
              <input type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t.phone}</label>
              <input type="tel" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t.message}</label>
              <textarea rows={5} className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" />
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" required className="rounded" /> {t.privacy}
            </label>
            <button type="submit" className="bg-brand-teal text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-deep transition-colors">
              {t.send}
            </button>
          </form>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-fit">
            <h2 className="font-semibold text-brand-deep mb-3">cTg Psicología</h2>
            <p className="text-slate-600">{contact.address[locale]}</p>
            <p className="text-slate-600 mt-2">Telf: {contact.phone}</p>
            <p className="text-slate-600 mt-2 break-all">Email: {contact.email}</p>
            <a href="https://wa.me/34605362664" className="mt-5 inline-block bg-brand-amber text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-amber/90">
              WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}