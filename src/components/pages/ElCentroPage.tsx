import { Header, Footer } from '@/components/Layout';
import { Locale } from '@/data/content';

const T = {
  es: {
    title: 'El centro',
    p1: 'El cTg Centre Mèdic, inaugurado en 1998, es una entidad de referencia en el ámbito de la salud en el centro de L\'Hospitalet. Está integrado por un amplio equipo de profesionales de diferentes especialidades que forman parte del cuadro médico de varias entidades aseguradoras (mutuas sanitarias), con lo cual nuestros clientes pueden elegir ser atendidos con cargo a estas entidades o bien mediante pago directo.',
    p2: 'cTg Psicología es el área que se especializa en trabajar para mejorar la calidad de vida emocional de las personas proporcionando estabilidad, aportando nuevas herramientas y perspectivas y facilitando estrategias para que cada uno pueda construir su propio cambio.',
    p3: 'Es un espacio de crecimiento donde la persona, a través de la ayuda de un terapeuta, puede entender su problema y encontrar diferentes salidas para resolverlo, aprendiendo, a su vez, estrategias y recursos que la hagan más fuerte y capaz de seguir su proceso evolutivo.',
    p4: 'En cTg Psicología encontrarás especialistas en el mundo de la psicología, pero también de otros ámbitos como la logopedia, la psiquiatría, la acupuntura, la medicina tradicional china o la dietética y nutrición.',
    p5: 'Velamos por ofrecer un servicio de calidad que integre el trabajo emocional, mental y corporal. Ponemos especial cuidado en el buen trato hacia nuestros clientes y nos esforzamos en proporcionar una dedicación plena.',
    quote: '«Sabemos lo que somos, pero aún no sabemos lo que podemos llegar a ser.» — William Shakespeare',
    how: 'Cómo trabajamos',
    howP1: 'En cTg Psicología trabajamos desde una orientación ecléctica; integramos varias técnicas procedentes de diferentes orientaciones (constructivismo, terapia breve estratégica, terapia familiar sistémica, terapia cognitiva-conductual, terapia gestáltica, etc.) teniendo en cuenta la sintomatología del paciente.',
    howP2: 'El abordaje terapéutico se da en un marco existencial que estructura la relación terapéutica según el modelo de Rogers y Egan (enfoque humanista), donde el papel del psicólogo tiene como premisas básicas el respeto, la autenticidad, la empatía y la aceptación incondicional del cliente.',
    howP3: 'Tenemos especialistas en terapias neurocientíficas –EMDR, Brainspotting– dirigidas al trabajo de los pensamientos, emociones y sensaciones corporales. Permiten realizar cambios sinápticos y la relajación de partes del cerebro como la amígdala. Estas terapias trabajan de forma científica y sus resultados son muy potentes, profundos y duraderos.',
  },
  ca: {
    title: 'El centre',
    p1: 'El cTg Centre Mèdic, inaugurat el 1998, és una entitat de referència en l\'àmbit de la salut al centre de L\'Hospitalet. Està integrat per un ampli equip de professionals de diferents especialitats que formen part del quadre mèdic de diverses entitats asseguradores (mútues sanitàries).',
    p2: 'cTg Psicologia és l\'àrea que s\'especialitza a treballar per millorar la qualitat de vida emocional de les persones, proporcionant estabilitat, noves eines i perspectives, i facilitant estratègies perquè cadascú pugui construir el seu propi canvi.',
    p3: 'És un espai de creixement on la persona, amb l\'ajuda d\'un terapeuta, pot entendre el seu problema i trobar diferents sortides per resoldre\'l, aprenent estratègies i recursos que la facin més forta.',
    p4: 'A cTg Psicologia trobaràs especialistes en el món de la psicologia, però també d\'altres àmbits com la logopèdia, la psiquiatria, l\'acupuntura, la medicina tradicional xinesa o la dietètica i nutrició.',
    p5: 'Vetllem per oferir un servei de qualitat que integri el treball emocional, mental i corporal. Posem especial cura en el bon tracte als nostres clients.',
    quote: '«Sabem el que som, però encara no sabem el que podem arribar a ser.» — William Shakespeare',
    how: 'Com treballem',
    howP1: 'A cTg Psicologia treballem des d\'una orientació eclèctica; integrem diverses tècniques procedents de diferents orientacions (constructivisme, teràpia breu estratègica, teràpia familiar sistèmica, teràpia cognitiva-conductual, teràpia gestàltica, etc.).',
    howP2: 'L\'abordatge terapèutic es dóna en un marc existencial que estructura la relació terapèutica segons el model de Rogers i Egan (enfocament humanista), on el paper del psicòleg té com a premisses bàsiques el respecte, l\'autenticitat, l\'empatia i l\'acceptació incondicional del client.',
    howP3: 'Tenim especialistes en teràpies neurocientífiques –EMDR, Brainspotting– adreçades al treball dels pensaments, emocions i sensacions corporals. Permeten fer canvis sinàptics i la relaxació de parts del cervell com l\'amígdala.',
  },
  en: {
    title: 'The centre',
    p1: 'The cTg Centre Mèdic, opened in 1998, is a reference health institution in the centre of L\'Hospitalet. It is made up of a wide team of professionals from different specialties who are part of the medical staff of several insurance entities (health mutuals).',
    p2: 'cTg Psychology is the area specialised in working to improve people\'s emotional quality of life, providing stability, new tools and perspectives, and facilitating strategies so each person can build their own change.',
    p3: 'It is a growth space where the person, with the help of a therapist, can understand their problem and find different ways to solve it, learning strategies and resources that make them stronger.',
    p4: 'At cTg Psychology you will find specialists in psychology, but also in other fields such as speech therapy, psychiatry, acupuncture, traditional Chinese medicine or dietetics and nutrition.',
    p5: 'We strive to offer a quality service that integrates emotional, mental and body work. We take special care in treating our clients well.',
    quote: '«We know what we are, but know not what we may be.» — William Shakespeare',
    how: 'How we work',
    howP1: 'At cTg Psychology we work from an eclectic orientation; we integrate several techniques from different orientations (constructivism, strategic brief therapy, systemic family therapy, cognitive-behavioural therapy, gestalt therapy, etc.).',
    howP2: 'The therapeutic approach takes place in an existential framework that structures the therapeutic relationship according to the Rogers and Egan model (humanist approach), where respect, authenticity, empathy and unconditional acceptance of the client are the basic premises.',
    howP3: 'We have specialists in neuroscientific therapies –EMDR, Brainspotting– aimed at working on thoughts, emotions and bodily sensations. They enable synaptic changes and relaxation of brain parts such as the amygdala.',
  },
};

export default function ElCentroPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <>
      <Header locale={locale} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl text-brand-deep mb-8">{t.title}</h1>
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <p>{t.p4}</p>
          <p>{t.p5}</p>
          <blockquote className="border-l-4 border-brand-amber pl-4 italic font-display text-brand-deep text-lg">
            {t.quote}
          </blockquote>
          <h2 className="font-display text-2xl text-brand-deep pt-4">{t.how}</h2>
          <p>{t.howP1}</p>
          <p>{t.howP2}</p>
          <p>{t.howP3}</p>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}