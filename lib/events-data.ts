export type CategoriaEvento =
  | "Todos"
  | "Cultura"
  | "Deporte"
  | "Comunidad"
  | "Juventud"
  | "Niñez"
  | "Adulto Mayor"
  | "Turismo";

export type Evento = {
  slug: string;
  fecha: string;
  title: string;
  tag: Exclude<CategoriaEvento, "Todos">;
  lugar: string;
  text: string;
  color: string;
  image: string;
  publishedAt: string;
  eventDate: string;
  body: string[];
  sourceUrl: string;
};

export const categoriasEventos: { label: CategoriaEvento; icon: string }[] = [
  { label: "Todos", icon: "" },
  { label: "Cultura", icon: "📍" },
  { label: "Deporte", icon: "⚽" },
  { label: "Comunidad", icon: "👥" },
  { label: "Juventud", icon: "🎨" },
  { label: "Niñez", icon: "🧒" },
  { label: "Adulto Mayor", icon: "♿" },
  { label: "Turismo", icon: "🌴" },
];

export const eventos: Evento[] = [
  {
    slug: "conmemoracion-natalicio-de-nicanor-parra",
    fecha: "05 SEP",
    title: "Conmemoración natalicio de Nicanor Parra",
    tag: "Cultura",
    lugar: "Las Cruces · sábado 5 de septiembre",
    text: "Una jornada de letras, memoria y arte para homenajear la obra y la vida del antipoeta y vecino de Las Cruces.",
    color: "bg-blue-600",
    image: "/images/eventos/conmemoracion-natalicio-nicanor-parra.png",
    publishedAt: "2026-09-02",
    eventDate: "2026-09-05",
    body: [
      "¡Acompáñanos a conmemorar el natalicio del vecino Nicanor Parra!",
      "Invitamos a toda la comunidad a un emotivo viaje de letras, emoción y arte este sábado 5 de septiembre. La jornada está dedicada a homenajear al antipoeta Nicanor Parra, quien durante años fue un destacado vecino de Las Cruces, localidad donde dejó una huella imborrable.",
      "La programación contempla exposiciones, campanadas de memoria, una romería hasta el que fuera su hogar y un recital para culminar este día dedicado a poner en valor su obra y su vida.",
      "Revisa la gráfica de esta publicación para conocer el programa completo y sumarte a cada uno de los homenajes y encuentros preparados.",
    ],
    sourceUrl:
      "https://eltabo.cl/conmemoracion-natalicio-de-nicanor-parra/",
  },
  {
    slug: "esquinazos-de-fiestas-patrias",
    fecha: "02 SEP",
    title: "Esquinazos de Fiestas Patrias",
    tag: "Cultura",
    lugar: "Desde Las Cruces al frontis municipal · 11:00 hrs",
    text: "Pasacalle, cueca, música y tradiciones para dar la bienvenida al Mes de la Patria en El Tabo.",
    color: "bg-red-600",
    image: "/images/eventos/esquinazos-fiestas-patrias.png",
    publishedAt: "2026-09-01",
    eventDate: "2026-09-02",
    body: [
      "En El Tabo damos la bienvenida al Mes de la Patria.",
      "Este miércoles 2 de septiembre invitamos a la comunidad a ser parte de una jornada llena de música, baile y tradiciones para comenzar a vivir nuestras Fiestas Patrias.",
      "A las 11:00 horas se realizará el pasacalle Bienvenida al Mes de la Patria. El recorrido comenzará en el Centro Cultural Nicanor Parra y pasará por Malloco, Los Pibes, El Búnker y CVT, para finalizar en la Municipalidad.",
      "A las 12:00 horas se realizará un gran esquinazo en el frontis municipal, con cueca, música y un espacio para compartir entre vecinas, vecinos y agrupaciones de nuestra comuna.",
      "Durante todos los lunes de septiembre, desde las 12:00 horas, continuarán los esquinazos semanales en el municipio junto a destacadas agrupaciones locales.",
    ],
    sourceUrl: "https://eltabo.cl/esquinazos-de-fiestas-patrias/",
  },
];

export function getEventoBySlug(slug: string) {
  return eventos.find((evento) => evento.slug === slug);
}
