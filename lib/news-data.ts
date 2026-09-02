export type CategoriaNoticia =
  | "Todas"
  | "Municipalidad"
  | "Comunidad"
  | "Deportes"
  | "Cultura"
  | "DIDECO"
  | "Educación"
  | "Empleo"
  | "Medio Ambiente"
  | "Salud"
  | "Seguridad";

export type Noticia = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<CategoriaNoticia, "Todas">;
  date: string;
  publishedAt: string;
  excerpt: string;
  image: string;
  sourceUrl?: string;
  author: string;
  body: string[];
  tags: string[];
  featured?: boolean;
};

export const categoriasNoticias: { label: CategoriaNoticia; icon: string }[] = [
  { label: "Todas", icon: "✨" },
  { label: "Municipalidad", icon: "🏛️" },
  { label: "Comunidad", icon: "👥" },
  { label: "Deportes", icon: "⚽" },
  { label: "Cultura", icon: "🎭" },
  { label: "DIDECO", icon: "🤝" },
  { label: "Educación", icon: "📚" },
  { label: "Empleo", icon: "💼" },
  { label: "Medio Ambiente", icon: "🌿" },
  { label: "Salud", icon: "🏥" },
  { label: "Seguridad", icon: "🛡️" },
];

export const initialNoticias: Noticia[] = [
  {
    id: "agosto-2026-omil-seminario-financiamiento",
    slug: "omil-de-el-tabo-realiza-seminario-sobre-financiamiento-y-empleo",
    title: "OMIL de El Tabo realiza seminario sobre financiamiento y empleo",
    category: "Empleo",
    date: "27 de agosto de 2026",
    publishedAt: "2026-08-27",
    excerpt:
      "El seminario Oportunidades que Crecen reunió a emprendedores, microempresas y vecinos interesados en alternativas de financiamiento y herramientas para fortalecer sus iniciativas.",
    image: "/images/home/noticias/agosto-2026-omil-seminario-financiamiento.jpg",
    sourceUrl:
      "https://eltabo.cl/omil-de-el-tabo-realiza-seminario-sobre-financiamiento-y-empleo/",
    author: "Equipo de Prensa",
    body: [
      "La Oficina Municipal de Información Laboral de El Tabo realizó el seminario Oportunidades que Crecen, una jornada orientada a emprendedores, microempresas y vecinos de la comuna.",
      "La actividad permitió compartir información útil sobre financiamiento, empleabilidad y herramientas disponibles para fortalecer iniciativas productivas locales.",
      "Desde el municipio se destacó la importancia de acercar oportunidades concretas a la comunidad y acompañar el desarrollo económico local.",
    ],
    tags: ["OMIL", "Empleo", "Fomento productivo"],
  },
  {
    id: "agosto-2026-gimnasia-senior-las-cruces",
    slug: "nace-la-agrupacion-personas-mayores-gimnasia-senior-las-cruces",
    title: "Nace la Agrupación Personas Mayores Gimnasia Sénior Las Cruces",
    category: "Deportes",
    date: "25 de agosto de 2026",
    publishedAt: "2026-08-25",
    excerpt:
      "La nueva organización comunitaria busca promover la actividad física, la vida saludable y la participación activa de personas mayores de Las Cruces.",
    image: "/images/home/noticias/agosto-2026-gimnasia-senior-las-cruces.jpeg",
    sourceUrl:
      "https://eltabo.cl/nace-la-agrupacion-personas-mayores-gimnasia-senior-las-cruces/",
    author: "Equipo de Prensa",
    body: [
      "La comuna suma una nueva agrupación dedicada a promover la actividad física, la vida saludable y el encuentro comunitario entre personas mayores.",
      "Gimnasia Sénior Las Cruces nace como un espacio de participación activa, bienestar y acompañamiento para vecinas y vecinos del sector.",
      "El municipio valoró la organización vecinal y el compromiso de quienes impulsan iniciativas que fortalecen la calidad de vida en comunidad.",
    ],
    tags: ["Personas mayores", "Deportes", "Las Cruces"],
  },
  {
    id: "agosto-2026-oferta-laboral-abogada",
    slug: "oferta-laboral-para-abogada-o-para-desempenarse-en-la-direccion-juridica",
    title: "Oferta laboral para abogada/o para desempeñarse en la Dirección Jurídica",
    category: "Empleo",
    date: "24 de agosto de 2026",
    publishedAt: "2026-08-24",
    excerpt:
      "La Municipalidad de El Tabo abrió convocatoria para profesional del Derecho que brinde apoyo y asesoría jurídica en materias relacionadas con la gestión municipal.",
    image: "/images/home/noticias/agosto-2026-oferta-laboral-abogada.png",
    sourceUrl:
      "https://eltabo.cl/oferta-laboral-para-abogada-o-para-desempenarse-en-la-direccion-juridica/",
    author: "Equipo de Prensa",
    body: [
      "La Ilustre Municipalidad de El Tabo busca incorporar a un/a abogado/a para fortalecer su equipo profesional en la Dirección Jurídica.",
      "El cargo tendrá como principal función brindar apoyo y asesoría jurídica en materias relacionadas con la gestión municipal, contribuyendo al cumplimiento de la normativa vigente.",
      "Entre sus funciones se contempla analizar pronunciamientos jurídicos, revisar actos administrativos, contratos, convenios, ordenanzas y otros instrumentos municipales.",
    ],
    tags: ["Oferta laboral", "Dirección Jurídica"],
  },
  {
    id: "agosto-2026-beca-tic-junaeb",
    slug: "121-estudiantes-de-colegios-de-el-tabo-reciben-notebooks-gracias-a-la-beca-tic-de-junaeb",
    title:
      "121 estudiantes de colegios de El Tabo reciben notebooks gracias a la Beca TIC de JUNAEB",
    category: "Educación",
    date: "13 de agosto de 2026",
    publishedAt: "2026-08-13",
    excerpt:
      "Estudiantes de séptimo básico de la Escuela Las Cruces, Colegio Quillaycillo y Colegio El Tabo recibieron notebooks para apoyar sus procesos de aprendizaje.",
    image: "/images/home/noticias/agosto-2026-beca-tic-junaeb.jpg",
    sourceUrl:
      "https://eltabo.cl/121-estudiantes-de-colegios-de-el-tabo-reciben-notebooks-gracias-a-la-beca-tic-de-junaeb/",
    author: "Equipo de Prensa",
    body: [
      "Estudiantes de establecimientos educacionales de El Tabo recibieron notebooks gracias a la Beca TIC de JUNAEB, fortaleciendo el acceso a herramientas digitales para sus procesos de aprendizaje.",
      "La entrega benefició a alumnos y alumnas de séptimo básico de la Escuela Las Cruces, Colegio Quillaycillo y Colegio El Tabo.",
      "Esta iniciativa contribuye a disminuir brechas de acceso tecnológico y entrega nuevas oportunidades para estudiar, investigar y desarrollar habilidades digitales.",
    ],
    tags: ["Educación", "JUNAEB", "Tecnología"],
    featured: true,
  },
  {
    id: "agosto-2026-feria-garaje",
    slug: "feria-garaje-invita-a-la-comunidad-a-participar-en-espacio-de-reutilizacion-y-consumo-responsable",
    title:
      "Feria Garaje invita a la comunidad a participar en espacio de reutilización y consumo responsable",
    category: "Medio Ambiente",
    date: "7 de agosto de 2026",
    publishedAt: "2026-08-07",
    excerpt:
      "La iniciativa fomenta la comercialización de productos de segunda mano y antigüedades, impulsando la reutilización y el consumo responsable en la comuna.",
    image: "/images/home/noticias/agosto-2026-feria-garaje.png",
    sourceUrl:
      "https://eltabo.cl/feria-garaje-invita-a-la-comunidad-a-participar-en-espacio-de-reutilizacion-y-consumo-responsable/",
    author: "Equipo de Prensa",
    body: [
      "La Feria Garaje invita a vecinas y vecinos a participar en un espacio dedicado a la reutilización, el consumo responsable y la circulación de productos de segunda mano.",
      "La actividad busca promover hábitos sustentables y abrir una vitrina comunitaria para antigüedades, artículos usados y emprendimientos locales.",
      "El municipio refuerza así su compromiso con iniciativas que reducen residuos y fortalecen la economía circular en El Tabo.",
    ],
    tags: ["Medio Ambiente", "Sustentabilidad", "Feria"],
  },
  {
    id: "agosto-2026-celebra-la-ninez-en-familia",
    slug: "celebremos-a-la-ninez-en-familia",
    title: "Celebremos a la Niñez en Familia",
    category: "Comunidad",
    date: "6 de agosto de 2026",
    publishedAt: "2026-08-06",
    excerpt:
      "La Municipalidad invita a niñas, niños y familias a reunirse en el frontis municipal para disfrutar música en vivo, concursos, Zumba Kids, pinta caritas y entrega de colaciones.",
    image: "/images/home/noticias/agosto-2026-celebra-la-ninez-en-familia.jpg",
    author: "Equipo de Prensa",
    body: [
      "Este sábado 8 de agosto, entre las 11:00 y las 14:00 horas, la comunidad está invitada a reunirse en el frontis de la Municipalidad de El Tabo para disfrutar una jornada dedicada a niños, niñas y sus familias.",
      "Durante la actividad habrá música en vivo, concursos, Zumba Kids, pinta caritas y entrega de colaciones, en un ambiente pensado para compartir y celebrar en familia.",
      "Se recomienda asistir con botella de agua y muchas ganas de participar en una mañana de alegría comunitaria.",
    ],
    tags: ["Niñez", "Familia", "Comunidad"],
    featured: true,
  },
  {
    id: "agosto-2026-operativo-veterinario",
    slug: "nuevo-operativo-de-servicios-veterinarios-basicos",
    title: "Nuevo operativo de servicios veterinarios básicos",
    category: "Medio Ambiente",
    date: "5 de agosto de 2026",
    publishedAt: "2026-08-05",
    excerpt:
      "Vecinas y vecinos podrán inscribir a sus perros y gatos para acceder a desparasitación, vacunación antirrábica, vacuna óctuple e implantación de microchip.",
    image:
      "/images/home/noticias/765887042_1387126666929338_8729002024291502511_n.jpg",
    author: "Equipo de Prensa",
    body: [
      "En El Tabo queremos mascotas sanas y felices. Por eso, el Programa de Zoonosis invita a vecinas y vecinos a inscribir a sus perros y gatos para acceder a servicios veterinarios básicos.",
      "El operativo contempla desparasitación, vacunación antirrábica, vacuna óctuple e implantación de microchip, y se realizará el viernes 7 de agosto desde las 10:00 horas en la sede del Club de Pesca y Caza Los Halcones, sector Las Cruces.",
      "Los cupos son limitados. Las inscripciones se realizan en la oficina de Zoonosis, ubicada en dependencias municipales, o llamando al teléfono 352203533.",
    ],
    tags: ["Zoonosis", "Mascotas", "Las Cruces"],
  },
  {
    id: "agosto-2026-cueca-adulto-mayor",
    slug: "la-cueca-se-vive-con-orgullo-en-el-tabo",
    title: "La cueca se vive con orgullo en El Tabo",
    category: "Cultura",
    date: "4 de agosto de 2026",
    publishedAt: "2026-08-04",
    excerpt:
      "El Campeonato Comunal de Cueca Adulto Mayor 2026 invita a la comunidad a apoyar a las parejas que buscarán representar a El Tabo en Tomé.",
    image:
      "/images/home/noticias/764340089_18102853769180359_8041568145544355602_n.jpg",
    author: "Equipo de Prensa",
    body: [
      "Este fin de semana la comunidad está invitada a disfrutar del Campeonato Comunal de Cueca Adulto Mayor 2026, una jornada donde talentosas parejas demostrarán su pasión por nuestra danza nacional.",
      "Las parejas participantes buscarán representar a la comuna en el Campeonato Nacional de Cueca Adulto Mayor de Tomé 2026.",
      "La actividad se realizará el viernes 7 de agosto a las 14:00 horas en el Gimnasio de la Escuela Básica Las Cruces.",
    ],
    tags: ["Cultura", "Cueca", "Adulto mayor"],
    featured: true,
  },
  {
    id: "agosto-2026-muni-en-terreno",
    slug: "nuevas-fechas-de-muni-en-terreno",
    title: "Nuevas fechas de Muni en Terreno",
    category: "Municipalidad",
    date: "3 de agosto de 2026",
    publishedAt: "2026-08-03",
    excerpt:
      "El municipio anuncia nuevos operativos en Playas Blancas, Villa La Nación y sector Errázuriz, acercando servicios y orientaciones municipales.",
    image:
      "/images/home/noticias/763500191_18102765068180359_8916356358256857674_n.jpg",
    author: "Equipo de Prensa",
    body: [
      "La Municipalidad de El Tabo anunció nuevas fechas de Muni en Terreno para acercar servicios municipales a distintos sectores de la comuna.",
      "Los operativos se realizarán el miércoles 5 de agosto en la sede vecinal de Playas Blancas, el jueves 6 de agosto en Villa La Nación y el viernes 7 de agosto en el sector Errázuriz.",
      "Durante estas jornadas se ofrecen servicios como fonoaudiología, peluquería, manicure, masajes, barbería, podología y orientación de distintas direcciones municipales.",
    ],
    tags: ["Muni en Terreno", "Servicios municipales"],
  },
];
