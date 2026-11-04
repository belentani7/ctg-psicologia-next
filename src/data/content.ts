export type Locale = 'es' | 'ca' | 'en';

export interface Service {
  id: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Locale, string>;
  colegiada?: string;
  credentials: Record<Locale, string[]>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body?: Record<Locale, string>;
  date: string;
}

export const services: Service[] = [
  {
    id: 'adultos',
    name: { es: 'Terapia de adultos', ca: 'Teràpia d\'adults', en: 'Adult therapy' },
    description: {
      es: 'Terapia individual para adultos que buscan estabilidad emocional y herramientas para su crecimiento personal.',
      ca: 'Teràpia individual per a adults que busquen estabilitat emocional i eines per al seu creixement personal.',
      en: 'Individual therapy for adults seeking emotional stability and tools for personal growth.',
    },
  },
  {
    id: 'pareja',
    name: { es: 'Terapia sexual y de pareja', ca: 'Teràpia sexual i de parella', en: 'Sexual and couples therapy' },
    description: {
      es: 'Abordamos las dificultades de la relación de pareja y la sexualidad desde un enfoque integrador.',
      ca: 'Abordem les dificultats de la relació de parella i la sexualitat des d\'un enfocament integrador.',
      en: 'We address couple relationship and sexuality difficulties from an integrative approach.',
    },
  },
  {
    id: 'familiar',
    name: { es: 'Terapia familiar', ca: 'Teràpia familiar', en: 'Family therapy' },
    description: {
      es: 'Intervención sistémica para mejorar la dinámica y comunicación dentro de la familia.',
      ca: 'Intervenció sistèmica per millorar la dinàmica i comunicació dins la família.',
      en: 'Systemic intervention to improve family dynamics and communication.',
    },
  },
  {
    id: 'infantojuvenil',
    name: { es: 'Terapia infantojuvenil', ca: 'Teràpia infanto-juvenil', en: 'Child and youth therapy' },
    description: {
      es: 'Atención psicológica para niños y adolescentes, adaptada a su etapa evolutiva.',
      ca: 'Atenció psicològica per a infants i adolescents, adaptada a la seva etapa evolutiva.',
      en: 'Psychological care for children and adolescents, adapted to their developmental stage.',
    },
  },
  {
    id: 'precoz',
    name: { es: 'Atención precoz', ca: 'Atenció precoç', en: 'Early intervention' },
    description: {
      es: 'Detección e intervención temprana en trastornos del desarrollo infantil.',
      ca: 'Detecció i intervenció precoç en trastorns del desenvolupament infantil.',
      en: 'Early detection and intervention in childhood developmental disorders.',
    },
  },
  {
    id: 'aprendizaje',
    name: { es: 'Tratamiento de las dificultades de aprendizaje', ca: 'Tractament de les dificultats d\'aprenentatge', en: 'Learning difficulties treatment' },
    description: {
      es: 'Evaluación y tratamiento de dificultades como dislexia, TDAH y otros trastornos del aprendizaje.',
      ca: 'Avaluació i tractament de dificultats com dislèxia, TDAH i altres trastorns de l\'aprenentatge.',
      en: 'Assessment and treatment of difficulties such as dyslexia, ADHD and other learning disorders.',
    },
  },
  {
    id: 'logopedia',
    name: { es: 'Logopedia', ca: 'Logopèdia', en: 'Speech therapy' },
    description: {
      es: 'Rehabilitación de los trastornos del lenguaje, del habla y de la voz.',
      ca: 'Rehabilitació dels trastorns del llenguatge, de la parla i de la veu.',
      en: 'Rehabilitation of language, speech and voice disorders.',
    },
  },
  {
    id: 'juridica',
    name: { es: 'Psicología jurídica y pericial', ca: 'Psicologia jurídica i pericial', en: 'Forensic and legal psychology' },
    description: {
      es: 'Informes periciales y evaluación psicológica en el ámbito judicial.',
      ca: 'Informes pericials i avaluació psicològica en l\'àmbit judicial.',
      en: 'Expert reports and psychological assessment in the judicial field.',
    },
  },
  {
    id: 'psiquiatria',
    name: { es: 'Psiquiatría', ca: 'Psiquiatria', en: 'Psychiatry' },
    description: {
      es: 'Diagnóstico y tratamiento médico de los trastornos de salud mental.',
      ca: 'Diagnòstic i tractament mèdic dels trastorns de salut mental.',
      en: 'Medical diagnosis and treatment of mental health disorders.',
    },
  },
  {
    id: 'mct',
    name: { es: 'Medicina tradicional china y acupuntura', ca: 'Medicina tradicional xinesa i acupuntura', en: 'Traditional Chinese medicine and acupuncture' },
    description: {
      es: 'Tratamientos milenarios para el equilibrio del cuerpo y la mente.',
      ca: 'Tractaments mil·lenaris per a l\'equilibri del cos i la ment.',
      en: 'Ancient treatments for body and mind balance.',
    },
  },
  {
    id: 'nutricion',
    name: { es: 'Dietética y nutrición', ca: 'Dietètica i nutrició', en: 'Dietetics and nutrition' },
    description: {
      es: 'Asesoramiento nutricional personalizado para una vida más saludable.',
      ca: 'Assessorament nutricional personalitzat per a una vida més saludable.',
      en: 'Personalised nutritional advice for a healthier life.',
    },
  },
  {
    id: 'bach',
    name: { es: 'Flores de Bach', ca: 'Flors de Bach', en: 'Bach flower remedies' },
    description: {
      es: 'Esencia floral para el equilibrio emocional, según la terapia del Dr. Bach.',
      ca: 'Essència floral per a l\'equilibri emocional, segons la teràpia del Dr. Bach.',
      en: 'Floral essences for emotional balance, following Dr. Bach\'s therapy.',
    },
  },
];

export const team: TeamMember[] = [
  {
    id: 'laura-miro',
    name: 'Laura Miró Galan',
    role: {
      es: 'Psicóloga de adultos · Coordinadora de cTg Psicología',
      ca: 'Psicòloga d\'adults · Coordinadora de cTg Psicologia',
      en: 'Adult psychologist · cTg Psychology coordinator',
    },
    colegiada: '14750',
    credentials: {
      es: [
        'Licenciada en Psicología por la Universitat Autònoma de Barcelona',
        'Máster en Terapia Cognitivo-Social por la Universitat de Barcelona',
        'Postgrado en Terapia Breve Estratégica por la Universitat de Girona',
        'Especialista en técnicas de neuroprocesamiento',
      ],
      ca: [
        'Llicenciada en Psicologia per la Universitat Autònoma de Barcelona',
        'Màster en Teràpia Cognitiu-Social per la Universitat de Barcelona',
        'Postgrau en Teràpia Breu Estratègica per la Universitat de Girona',
        'Especialista en tècniques de neuroprocessament',
      ],
      en: [
        'Degree in Psychology, Universitat Autònoma de Barcelona',
        'Master in Cognitive-Social Therapy, Universitat de Barcelona',
        'Postgraduate in Strategic Brief Therapy, Universitat de Girona',
        'Neuroprocessing techniques specialist',
      ],
    },
  },
  {
    id: 'sara-viguera',
    name: 'Sara de Viguera Servat',
    role: {
      es: 'Psicóloga infantojuvenil y de adultos · Terapeuta sexual y de pareja',
      ca: 'Psicòloga infanto-juvenil i d\'adults · Terapeuta sexual i de parella',
      en: 'Child, youth and adult psychologist · Sexual and couples therapist',
    },
    colegiada: '10973',
    credentials: {
      es: [
        'Licenciada en Psicología por la Universitat Ramon Llull, Barcelona',
        'Máster en Trabajo Clínico y Salud Mental en la Universitat de Barcelona',
        'Postgrado de Intervención en Pareja y Familia en la Universitat Ramon Llull',
        'Formación en Terapia Familiar Sistémica, Escola de Teràpia Familiar (UAB)',
      ],
      ca: [
        'Llicenciada en Psicologia per la Universitat Ramon Llull, Barcelona',
        'Màster en Treball Clínic i Salut Mental a la Universitat de Barcelona',
        'Postgrau d\'Intervenció en Parella i Família a la Universitat Ramon Llull',
        'Formació en Teràpia Familiar Sistèmica, Escola de Teràpia Familiar (UAB)',
      ],
      en: [
        'Degree in Psychology, Universitat Ramon Llull, Barcelona',
        'Master in Clinical Work and Mental Health, Universitat de Barcelona',
        'Postgraduate in Couple and Family Intervention, Universitat Ramon Llull',
        'Training in Systemic Family Therapy, Escola de Teràpia Familiar (UAB)',
      ],
    },
  },
  {
    id: 'elisabet-clapes',
    name: 'Elisabet Clapés Roca',
    role: {
      es: 'Psicóloga infantojuvenil · Especialista en psicología jurídica · Logopeda',
      ca: 'Psicòloga infanto-juvenil · Especialista en psicologia jurídica · Logopeda',
      en: 'Child and youth psychologist · Forensic psychology specialist · Speech therapist',
    },
    colegiada: '5710 · 2710',
    credentials: {
      es: [
        'Licenciada en Psicología por la Universitat de Barcelona',
        'Postgrado en Psicopatología Clínica en la Universitat Ramon Llull',
        'Máster en Logopedia: Rehabilitación de los Trastornos del Lenguaje, del Habla y de la Voz (UPC)',
        'Miembro del TIP del Col.legi Oficial de Psicòlegs de Catalunya',
      ],
      ca: [
        'Llicenciada en Psicologia per la Universitat de Barcelona',
        'Postgrau en Psicopatologia Clínica a la Universitat Ramon Llull',
        'Màster en Logopèdia: Rehabilitació dels Trastorns del Llenguatge, de la Parla i de la Veu (UPC)',
        'Membre del TIP del Col·legi Oficial de Psicòlegs de Catalunya',
      ],
      en: [
        'Degree in Psychology, Universitat de Barcelona',
        'Postgraduate in Clinical Psychopathology, Universitat Ramon Llull',
        'Master in Speech Therapy: Rehabilitation of Language, Speech and Voice Disorders (UPC)',
        'Member of TIP, Official College of Psychologists of Catalonia',
      ],
    },
  },
  {
    id: 'silvia-rodriguez',
    name: 'Silvia Rodríguez Díez',
    role: {
      es: 'Psicóloga de adultos · Terapeuta sexual y de pareja',
      ca: 'Psicòloga d\'adults · Terapeuta sexual i de parella',
      en: 'Adult psychologist · Sexual and couples therapist',
    },
    colegiada: '16572',
    credentials: {
      es: [
        'Licenciada en Psicología por la Universitat de Barcelona',
        'Máster en Terapia sexual y de pareja por la Universitat de Barcelona',
        'Postgrado en Terapia breve estratégica por la Universitat de Girona',
        'Postgrado en Terapia Integradora por Dendros Centro de Psicología',
      ],
      ca: [
        'Llicenciada en Psicologia per la Universitat de Barcelona',
        'Màster en Teràpia sexual i de parella per la Universitat de Barcelona',
        'Postgrau en Teràpia breu estratègica per la Universitat de Girona',
        'Postgrau en Teràpia Integradora per Dendros Centre de Psicologia',
      ],
      en: [
        'Degree in Psychology, Universitat de Barcelona',
        'Master in Sexual and Couples Therapy, Universitat de Barcelona',
        'Postgraduate in Strategic Brief Therapy, Universitat de Girona',
        'Postgraduate in Integrative Therapy, Dendros Psychology Centre',
      ],
    },
  },
  {
    id: 'anna-solans',
    name: 'Anna Solans Caballer',
    role: {
      es: 'Psicóloga general sanitaria · Adultos',
      ca: 'Psicòloga general sanitària · Adults',
      en: 'General health psychologist · Adults',
    },
    colegiada: '15478',
    credentials: {
      es: [
        'Licenciada en Psicología. Universitat Blanquerna – Ramon Llull',
        'Postgrado Psicología Perinatal - Universitat Rovira i Virgili',
        'Asesora de sueño infantil. Especialización en neurociencia del sueño infantil (CESI)',
      ],
      ca: [
        'Llicenciada en Psicologia. Universitat Blanquerna – Ramon Llull',
        'Postgrau Psicologia Perinatal - Universitat Rovira i Virgili',
        'Assessora de son infantil. Especialització en neurociència del son infantil (CESI)',
      ],
      en: [
        'Degree in Psychology. Universitat Blanquerna – Ramon Llull',
        'Postgraduate in Perinatal Psychology - Universitat Rovira i Virgili',
        'Infant sleep consultant. Specialisation in infant sleep neuroscience (CESI)',
      ],
    },
  },
  {
    id: 'albert-ferrer',
    name: 'Albert Ferrer',
    role: {
      es: 'Psicólogo de adultos',
      ca: 'Psicòleg d\'adults',
      en: 'Adult psychologist',
    },
    colegiada: '30938',
    credentials: {
      es: [
        'Formación EMDR Trauma en Asociación Internacional de EMDR',
        'Máster Psicología General Sanitaria en Blanquerna',
        'Experto en intervención en adicciones tecnológicas y drogodependencias (UNIR)',
        'Máster en Programación Neurolingüística (PNL) en OKPNL',
      ],
      ca: [
        'Formació EMDR Trauma a l\'Associació Internacional d\'EMDR',
        'Màster Psicologia General Sanitària a Blanquerna',
        'Expert en intervenció en addiccions tecnològiques i drogodependències (UNIR)',
        'Màster en Programació Neurolingüística (PNL) a OKPNL',
      ],
      en: [
        'EMDR Trauma training, International EMDR Association',
        'Master in General Health Psychology, Blanquerna',
        'Expert in technological addictions and substance dependence intervention (UNIR)',
        'Master in Neuro-Linguistic Programming (NLP), OKPNL',
      ],
    },
  },
  {
    id: 'iris-basagana',
    name: 'Iris Basagaña',
    role: {
      es: 'Psicóloga infanto-juvenil',
      ca: 'Psicòloga infanto-juvenil',
      en: 'Child and youth psychologist',
    },
    colegiada: '29456',
    credentials: {
      es: [
        'Máster en Psicología General Sanitaria – UNIR',
        'Programa Universitario Avanzado en Apego y Psicología Perinatal',
        'Máster en Psicología Clínica Infanto-juvenil',
        'Máster en Psicopedagogía (Psicología Educativa)',
      ],
      ca: [
        'Màster en Psicologia General Sanitària – UNIR',
        'Programa Universitari Avançat en Aferrament i Psicologia Perinatal',
        'Màster en Psicologia Clínica Infanto-juvenil',
        'Màster en Psicopedagogia (Psicologia Educativa)',
      ],
      en: [
        'Master in General Health Psychology – UNIR',
        'Advanced University Programme in Attachment and Perinatal Psychology',
        'Master in Clinical Child and Youth Psychology',
        'Master in Educational Psychology',
      ],
    },
  },
  {
    id: 'ariadna-aguado',
    name: 'Ariadna Aguado',
    role: {
      es: 'Psicóloga de adultos',
      ca: 'Psicòloga d\'adults',
      en: 'Adult psychologist',
    },
    colegiada: '30367',
    credentials: {
      es: [
        'Formación básica EMDR, Nivel I',
        'Postgrado en Terapia Integradora – Dendros',
        'Máster Universitario en Nutrición y Salud – UOC',
        'Máster Universitario en Psicología General Sanitaria – Blanquerna',
      ],
      ca: [
        'Formació bàsica EMDR, Nivell I',
        'Postgrau en Teràpia Integradora – Dendros',
        'Màster Universitari en Nutrició i Salut – UOC',
        'Màster Universitari en Psicologia General Sanitària – Blanquerna',
      ],
      en: [
        'Basic EMDR training, Level I',
        'Postgraduate in Integrative Therapy – Dendros',
        'University Master in Nutrition and Health – UOC',
        'University Master in General Health Psychology – Blanquerna',
      ],
    },
  },
  {
    id: 'virginia-paz',
    name: 'Maria Virginia Paz D\'Amico',
    role: {
      es: 'Psicóloga juvenil, adultos e inmigrantes',
      ca: 'Psicòloga juvenil, adults i immigrants',
      en: 'Youth, adult and immigrant psychologist',
    },
    colegiada: '34172',
    credentials: {
      es: [
        'Licenciada en Psicología, Universidad Nacional de Córdoba, Argentina',
        'Especialización en Terapia Cognitivo-Conductual',
        'Postgrado en Salud Mental, género e intervenciones Psicológicas con Inmigrantes (UB)',
        'Especialización en Terapia Cognitivo Conductual para trastornos de ansiedad',
      ],
      ca: [
        'Llicenciada en Psicologia, Universidad Nacional de Córdoba, Argentina',
        'Especialització en Teràpia Cognitiu-Conductual',
        'Postgrau en Salut Mental, gènere i intervencions psicològiques amb immigrants (UB)',
        'Especialització en Teràpia Cognitiu Conductual per a trastorns d\'ansietat',
      ],
      en: [
        'Degree in Psychology, National University of Córdoba, Argentina',
        'Specialisation in Cognitive-Behavioural Therapy',
        'Postgraduate in Mental Health, gender and psychological intervention with immigrants (UB)',
        'Specialisation in Cognitive Behavioural Therapy for anxiety disorders',
      ],
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'terapia-dependencia-emocional-online',
    title: {
      es: 'Terapia para superar dependencia emocional online',
      ca: 'Teràpia per superar la dependència emocional online',
      en: 'Online therapy to overcome emotional dependence',
    },
    excerpt: {
      es: 'Recupera tu bienestar emocional desde cualquier lugar con terapia profesional online.',
      ca: 'Recupera el teu benestar emocional des de qualsevol lloc amb teràpia professional online.',
      en: 'Recover your emotional well-being from anywhere with professional online therapy.',
    },
    date: '2026',
  },
  {
    id: '2',
    slug: 'psicologo-abusos-sexuales-barcelona',
    title: {
      es: 'Psicólogo especializado en abusos sexuales Barcelona',
      ca: 'Psicòleg especialitzat en abusos sexuals Barcelona',
      en: 'Psychologist specialised in sexual abuse in Barcelona',
    },
    excerpt: {
      es: 'Recupera tu bienestar emocional con ayuda profesional en Barcelona.',
      ca: 'Recupera el teu benestar emocional amb ajuda professional a Barcelona.',
      en: 'Recover your emotional well-being with professional help in Barcelona.',
    },
    date: '2026',
  },
  {
    id: '3',
    slug: 'tratamiento-adicciones-hospitalet',
    title: {
      es: 'Tratamiento adicciones Hospitalet de Llobregat',
      ca: 'Tractament d\'addiccions L\'Hospitalet de Llobregat',
      en: 'Addiction treatment in Hospitalet de Llobregat',
    },
    excerpt: {
      es: 'Recupera el control de tu vida con ayuda profesional en L\'Hospitalet de Llobregat.',
      ca: 'Recupera el control de la teva vida amb ajuda professional a L\'Hospitalet de Llobregat.',
      en: 'Regain control of your life with professional help in Hospitalet de Llobregat.',
    },
    date: '2026',
  },
  {
    id: '4',
    slug: 'psicologo-dependencia-emocional-barcelona',
    title: {
      es: 'Psicólogo dependencia emocional Barcelona',
      ca: 'Psicòleg dependència emocional Barcelona',
      en: 'Psychologist for emotional dependence in Barcelona',
    },
    excerpt: {
      es: 'Supera la dependencia emocional con ayuda profesional en Barcelona.',
      ca: 'Supera la dependència emocional amb ajuda professional a Barcelona.',
      en: 'Overcome emotional dependence with professional help in Barcelona.',
    },
    date: '2026',
  },
  {
    id: '5',
    slug: 'terapia-dependencia-emocional-hospitalet',
    title: {
      es: 'Terapia dependencia emocional Hospitalet de Llobregat',
      ca: 'Teràpia dependència emocional L\'Hospitalet de Llobregat',
      en: 'Emotional dependence therapy in Hospitalet de Llobregat',
    },
    excerpt: {
      es: 'Recupera tu bienestar emocional con ayuda profesional en L\'Hospitalet de Llobregat.',
      ca: 'Recupera el teu benestar emocional amb ajuda professional a L\'Hospitalet de Llobregat.',
      en: 'Recover your emotional well-being with professional help in Hospitalet de Llobregat.',
    },
    date: '2026',
  },
  {
    id: '6',
    slug: 'terapia-online',
    title: { es: 'Terapia online', ca: 'Teràpia online', en: 'Online therapy' },
    excerpt: {
      es: 'Psicoterapia online para quienes no pueden acudir de manera presencial.',
      ca: 'Psicoteràpia online per a qui no pot assistir de manera presencial.',
      en: 'Online psychotherapy for those who cannot attend in person.',
    },
    date: '2026',
  },
];

export const contact = {
  address: { es: 'C/ Girona 21, 08901 L\'Hospitalet de Llobregat', ca: 'C/ Girona 21, 08901 L\'Hospitalet de Llobregat', en: 'C/ Girona 21, 08901 L\'Hospitalet de Llobregat' },
  phone: '+34 605 362 664',
  email: 'centre@ctgterapiaglobal.com',
};