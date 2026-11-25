import { Header, Footer } from '@/components/Layout';
import type { Locale } from '@/data/content';
import { SITE } from '@/lib/site';

export type LegalDocument = 'legal' | 'privacy' | 'cookies';

type Section = { heading: string; paragraphs: string[] };
type Document = { title: string; intro: string; updated: string; sections: Section[] };

const UPDATED = '2026-11-25';

const CONTENT: Record<LegalDocument, Record<Locale, Document>> = {
  legal: {
    es: {
      title: 'Aviso legal',
      intro: 'Datos identificativos y condiciones de uso del sitio web de cTg Psicología.',
      updated: 'Última actualización',
      sections: [
        {
          heading: 'Titular del sitio',
          paragraphs: [
            `Este sitio web corresponde a ${SITE.legalName}, con domicilio en ${SITE.addressLine}.`,
            `Para cualquier comunicación puede utilizarse el teléfono ${SITE.phone} o el correo electrónico ${SITE.email}.`,
          ],
        },
        {
          heading: 'Objeto',
          paragraphs: [
            'El sitio ofrece información sobre los servicios de psicología, logopedia y psiquiatría del centro, permite contactar con el equipo y pone a disposición una herramienta de reconocimiento óptico de caracteres (OCR) que se ejecuta íntegramente en el navegador.',
            'La información publicada tiene carácter divulgativo y en ningún caso sustituye una consulta profesional, un diagnóstico ni un tratamiento.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          paragraphs: [
            'Los textos, la estructura y los elementos gráficos del sitio son propiedad de su titular o se utilizan con autorización. Queda prohibida su reproducción total o parcial sin consentimiento previo, salvo los usos permitidos por la ley.',
            'El código fuente se distribuye con licencia MIT a través del repositorio público del proyecto.',
          ],
        },
        {
          heading: 'Responsabilidad',
          paragraphs: [
            'El titular adopta medidas razonables para mantener la información actualizada y el servicio disponible, pero no garantiza la ausencia de interrupciones ni de errores. El uso de la información del sitio es responsabilidad de quien la consulta.',
            'Los enlaces externos se ofrecen únicamente como referencia; el titular no controla ni responde de sus contenidos.',
          ],
        },
        {
          heading: 'Legislación aplicable',
          paragraphs: [
            'Estas condiciones se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales de Barcelona, salvo que la normativa de consumo establezca otro fuero.',
          ],
        },
      ],
    },
    ca: {
      title: 'Avís legal',
      intro: 'Dades identificatives i condicions d’ús del lloc web de cTg Psicologia.',
      updated: 'Darrera actualització',
      sections: [
        {
          heading: 'Titular del lloc',
          paragraphs: [
            `Aquest lloc web correspon a ${SITE.legalName}, amb domicili a ${SITE.addressLine}.`,
            `Per a qualsevol comunicació es pot utilitzar el telèfon ${SITE.phone} o el correu electrònic ${SITE.email}.`,
          ],
        },
        {
          heading: 'Objecte',
          paragraphs: [
            'El lloc ofereix informació sobre els serveis de psicologia, logopèdia i psiquiatria del centre, permet contactar amb l’equip i posa a disposició una eina de reconeixement òptic de caràcters (OCR) que s’executa íntegrament al navegador.',
            'La informació publicada té caràcter divulgatiu i en cap cas substitueix una consulta professional, un diagnòstic ni un tractament.',
          ],
        },
        {
          heading: 'Propietat intel·lectual',
          paragraphs: [
            'Els textos, l’estructura i els elements gràfics del lloc són propietat del titular o s’utilitzen amb autorització. En queda prohibida la reproducció total o parcial sense el consentiment previ, llevat dels usos permesos per la llei.',
            'El codi font es distribueix amb llicència MIT a través del repositori públic del projecte.',
          ],
        },
        {
          heading: 'Responsabilitat',
          paragraphs: [
            'El titular pren mesures raonables per mantenir la informació actualitzada i el servei disponible, però no garanteix l’absència d’interrupcions ni d’errors. L’ús de la informació del lloc és responsabilitat de qui la consulta.',
            'Els enllaços externs s’ofereixen només com a referència; el titular no controla ni respon dels seus continguts.',
          ],
        },
        {
          heading: 'Legislació aplicable',
          paragraphs: [
            'Aquestes condicions es regeixen per la legislació espanyola. Qualsevol controvèrsia se sotmetrà als jutjats i tribunals de Barcelona, llevat que la normativa de consum estableixi un altre fur.',
          ],
        },
      ],
    },
    en: {
      title: 'Legal notice',
      intro: 'Identifying details and conditions of use for the cTg Psychology website.',
      updated: 'Last updated',
      sections: [
        {
          heading: 'Site owner',
          paragraphs: [
            `This website belongs to ${SITE.legalName}, with registered address at ${SITE.addressLine}.`,
            `For any communication you may use the phone number ${SITE.phone} or the email address ${SITE.email}.`,
          ],
        },
        {
          heading: 'Purpose',
          paragraphs: [
            'The site provides information about the centre’s psychology, speech therapy and psychiatry services, allows contact with the team and offers an optical character recognition (OCR) tool that runs entirely in the browser.',
            'The information published here is informative and never replaces a professional consultation, diagnosis or treatment.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'The texts, structure and graphic elements of the site are owned by its holder or used with authorisation. Total or partial reproduction without prior consent is prohibited, except for uses permitted by law.',
            'The source code is distributed under the MIT licence through the project’s public repository.',
          ],
        },
        {
          heading: 'Liability',
          paragraphs: [
            'The holder takes reasonable steps to keep information current and the service available, but does not guarantee the absence of interruptions or errors. Use of the information on the site is the responsibility of the reader.',
            'External links are provided for reference only; the holder neither controls nor is responsible for their content.',
          ],
        },
        {
          heading: 'Applicable law',
          paragraphs: [
            'These conditions are governed by Spanish law. Any dispute shall be submitted to the courts of Barcelona, unless consumer regulations establish another jurisdiction.',
          ],
        },
      ],
    },
  },
  privacy: {
    es: {
      title: 'Política de privacidad',
      intro: 'Qué datos trata este sitio web, con qué finalidad y qué derechos puedes ejercer.',
      updated: 'Última actualización',
      sections: [
        {
          heading: 'Responsable del tratamiento',
          paragraphs: [
            `${SITE.legalName}, con domicilio en ${SITE.addressLine}. Contacto: ${SITE.email}.`,
          ],
        },
        {
          heading: 'Datos que se tratan',
          paragraphs: [
            'Este sitio no dispone de base de datos propia ni de formulario con envío al servidor. El formulario de contacto compone un mensaje en tu aplicación de correo: los datos que escribes no pasan por el servidor del sitio y solo se transmiten cuando tú envías el correo desde tu cuenta.',
            'El servidor registra únicamente datos técnicos imprescindibles para servir las páginas (dirección IP y agente de usuario) en los registros del proveedor de alojamiento, con la finalidad de garantizar la seguridad y la disponibilidad del servicio.',
          ],
        },
        {
          heading: 'Herramienta OCR',
          paragraphs: [
            'El reconocimiento de texto se ejecuta en tu navegador mediante WebAssembly. La imagen que seleccionas no se sube a ningún servidor y no se conserva: al cerrar o recargar la página, el resultado desaparece.',
          ],
        },
        {
          heading: 'Cookies y almacenamiento local',
          paragraphs: [
            'Solo se utiliza una cookie técnica (`NEXT_LOCALE`) que recuerda el idioma elegido durante un año. No hay cookies publicitarias, de perfilado ni analítica de terceros.',
            'El motor OCR guarda en el almacenamiento local del navegador el modelo de idioma descargado para no repetir la descarga. Puedes borrarlo desde la configuración de tu navegador.',
          ],
        },
        {
          heading: 'Derechos',
          paragraphs: [
            'Puedes ejercer los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a la dirección de contacto indicada. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
          ],
        },
      ],
    },
    ca: {
      title: 'Política de privacitat',
      intro: 'Quines dades tracta aquest lloc web, amb quina finalitat i quins drets pots exercir.',
      updated: 'Darrera actualització',
      sections: [
        {
          heading: 'Responsable del tractament',
          paragraphs: [
            `${SITE.legalName}, amb domicili a ${SITE.addressLine}. Contacte: ${SITE.email}.`,
          ],
        },
        {
          heading: 'Dades que es tracten',
          paragraphs: [
            'Aquest lloc no disposa de base de dades pròpia ni de formulari amb enviament al servidor. El formulari de contacte compon un missatge a la teva aplicació de correu: les dades que escrius no passen pel servidor del lloc i només es transmeten quan tu envies el correu des del teu compte.',
            'El servidor registra únicament dades tècniques imprescindibles per servir les pàgines (adreça IP i agent d’usuari) als registres del proveïdor d’allotjament, amb la finalitat de garantir la seguretat i la disponibilitat del servei.',
          ],
        },
        {
          heading: 'Eina OCR',
          paragraphs: [
            'El reconeixement de text s’executa al teu navegador mitjançant WebAssembly. La imatge que selecciones no es puja a cap servidor i no es conserva: en tancar o recarregar la pàgina, el resultat desapareix.',
          ],
        },
        {
          heading: 'Galetes i emmagatzematge local',
          paragraphs: [
            'Només s’utilitza una galeta tècnica (`NEXT_LOCALE`) que recorda l’idioma triat durant un any. No hi ha galetes publicitàries, de perfilat ni analítica de tercers.',
            'El motor OCR desa a l’emmagatzematge local del navegador el model d’idioma descarregat per no repetir la descàrrega. Pots esborrar-lo des de la configuració del navegador.',
          ],
        },
        {
          heading: 'Drets',
          paragraphs: [
            'Pots exercir els drets d’accés, rectificació, supressió, limitació, oposició i portabilitat escrivint a l’adreça de contacte indicada. També pots presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (www.aepd.es).',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy policy',
      intro: 'What data this website processes, for what purpose, and which rights you can exercise.',
      updated: 'Last updated',
      sections: [
        {
          heading: 'Data controller',
          paragraphs: [
            `${SITE.legalName}, registered at ${SITE.addressLine}. Contact: ${SITE.email}.`,
          ],
        },
        {
          heading: 'Data processed',
          paragraphs: [
            'This site has no database of its own and no form that submits to the server. The contact form composes a message in your email application: what you type never passes through the site’s server and is only transmitted when you send the email from your own account.',
            'The server only records technical data essential to serve the pages (IP address and user agent) in the hosting provider’s logs, for the purpose of ensuring the security and availability of the service.',
          ],
        },
        {
          heading: 'OCR tool',
          paragraphs: [
            'Text recognition runs in your browser using WebAssembly. The image you select is not uploaded to any server and is not retained: when you close or reload the page, the result disappears.',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'Only one technical cookie (`NEXT_LOCALE`) is used, which remembers the chosen language for one year. There are no advertising, profiling or third-party analytics cookies.',
            'The OCR engine stores the downloaded language model in the browser’s local storage to avoid downloading it again. You can delete it from your browser settings.',
          ],
        },
        {
          heading: 'Rights',
          paragraphs: [
            'You may exercise your rights of access, rectification, erasure, restriction, objection and portability by writing to the contact address above. You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
          ],
        },
      ],
    },
  },
  cookies: {
    es: {
      title: 'Política de cookies',
      intro: 'Este sitio no utiliza cookies publicitarias ni de seguimiento. Solo una cookie técnica de idioma.',
      updated: 'Última actualización',
      sections: [
        {
          heading: 'Qué son las cookies',
          paragraphs: [
            'Una cookie es un pequeño archivo que un sitio guarda en tu navegador para recordar información entre visitas. También se usa el término para el almacenamiento local del navegador.',
          ],
        },
        {
          heading: 'Cookies que se utilizan',
          paragraphs: [
            '`NEXT_LOCALE` (técnica, propia, 1 año): guarda el idioma que has elegido (es, ca o en) para mostrarte el sitio en ese idioma en tu siguiente visita. No identifica a personas ni se comparte con terceros.',
          ],
        },
        {
          heading: 'Almacenamiento local del OCR',
          paragraphs: [
            'Cuando utilizas la herramienta OCR, el modelo de idioma (unos 2 MB) se guarda en el almacenamiento local del navegador para no descargarlo de nuevo. No contiene datos personales.',
          ],
        },
        {
          heading: 'Cómo desactivarlas',
          paragraphs: [
            'Puedes borrar o bloquear las cookies y el almacenamiento local desde la configuración de tu navegador. Si bloqueas la cookie de idioma, el sitio seguirá funcionando y mostrará el idioma de tu navegador.',
          ],
        },
      ],
    },
    ca: {
      title: 'Política de galetes',
      intro: 'Aquest lloc no utilitza galetes publicitàries ni de seguiment. Només una galeta tècnica d’idioma.',
      updated: 'Darrera actualització',
      sections: [
        {
          heading: 'Què són les galetes',
          paragraphs: [
            'Una galeta és un petit fitxer que un lloc desa al teu navegador per recordar informació entre visites. També s’utilitza el terme per a l’emmagatzematge local del navegador.',
          ],
        },
        {
          heading: 'Galetes que s’utilitzen',
          paragraphs: [
            '`NEXT_LOCALE` (tècnica, pròpia, 1 any): desa l’idioma que has triat (es, ca o en) per mostrar-te el lloc en aquest idioma a la propera visita. No identifica persones ni es comparteix amb tercers.',
          ],
        },
        {
          heading: 'Emmagatzematge local de l’OCR',
          paragraphs: [
            'Quan utilitzes l’eina OCR, el model d’idioma (uns 2 MB) es desa a l’emmagatzematge local del navegador per no tornar-lo a descarregar. No conté dades personals.',
          ],
        },
        {
          heading: 'Com desactivar-les',
          paragraphs: [
            'Pots esborrar o bloquejar les galetes i l’emmagatzematge local des de la configuració del navegador. Si bloques la galeta d’idioma, el lloc continuarà funcionant i mostrarà l’idioma del navegador.',
          ],
        },
      ],
    },
    en: {
      title: 'Cookie policy',
      intro: 'This site uses no advertising or tracking cookies. Only one technical language cookie.',
      updated: 'Last updated',
      sections: [
        {
          heading: 'What cookies are',
          paragraphs: [
            'A cookie is a small file that a site stores in your browser to remember information between visits. The term is also used for browser local storage.',
          ],
        },
        {
          heading: 'Cookies used',
          paragraphs: [
            '`NEXT_LOCALE` (technical, first-party, 1 year): stores the language you chose (es, ca or en) so the site is shown in that language on your next visit. It does not identify individuals and is not shared with third parties.',
          ],
        },
        {
          heading: 'OCR local storage',
          paragraphs: [
            'When you use the OCR tool, the language model (about 2 MB) is stored in your browser’s local storage so it does not need to be downloaded again. It contains no personal data.',
          ],
        },
        {
          heading: 'How to disable them',
          paragraphs: [
            'You can delete or block cookies and local storage in your browser settings. If you block the language cookie, the site keeps working and will show your browser’s language.',
          ],
        },
      ],
    },
  },
};

export default function LegalPage({
  locale,
  document,
}: {
  locale: Locale;
  document: LegalDocument;
}) {
  const doc = CONTENT[document][locale];

  return (
    <>
      <Header locale={locale} section={document} />
      <main id="contenido" className="mx-auto max-w-prose px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep">{doc.title}</h1>
        <p className="mt-4 text-slate-700">{doc.intro}</p>
        <p className="mt-2 text-sm text-slate-600">
          {doc.updated}: <time dateTime={UPDATED}>{UPDATED}</time>
        </p>

        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-brand-deep">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-xl bg-brand-soft p-5 text-sm text-brand-deep">
          {SITE.addressLine} · {SITE.phone} · {SITE.email}
        </p>
      </main>
      <Footer locale={locale} />
    </>
  );
}
