"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeQVDyPjt9PJPrD6fpYZ1nFVRVYsYjkr5DizJVV7_qwLBjwqw/viewform";

type Categoria =
  | "Todos"
  | "Deportes"
  | "Juventud"
  | "Cultura"
  | "Adulto Mayor"
  | "Social"
  | "Infantil"
  | "Programa";

const categorias: { label: Categoria; icon: string }[] = [
  { label: "Todos", icon: "✨" },
  { label: "Deportes", icon: "⚽" },
  { label: "Juventud", icon: "🎨" },
  { label: "Cultura", icon: "🎭" },
  { label: "Adulto Mayor", icon: "👵" },
  { label: "Social", icon: "🤝" },
  { label: "Infantil", icon: "🧒" },
  { label: "Programa", icon: "🏛️" },
];

const talleres = [
  {
    nombre: "Karate",
    categoria: "Deportes",
    grupo: "12 a 17 años",
    horario: "Miércoles 19:00 a 21:00 / Sábado 11:00 a 13:00",
    recinto: "Gimnasio La Araucana / Sede Villa La Laguna",
    descripcion:
      "Taller deportivo orientado al desarrollo físico, disciplina, autocontrol y trabajo formativo.",
    icon: "🥋",
  },
  {
    nombre: "Multideportes",
    categoria: "Deportes",
    grupo: "12 a 18 años / 19 a 59 años",
    horario: "Lunes y miércoles 17:00 a 19:00",
    recinto: "Multicancha Piedra del Elefante / Multicancha Playas Blancas",
    descripcion:
      "Espacio deportivo recreativo para practicar distintas disciplinas y fortalecer la vida activa.",
    icon: "🏃",
  },
  {
    nombre: "Fútbol femenino",
    categoria: "Deportes",
    grupo: "15 a 59 años",
    horario: "Lunes y jueves 20:00 a 22:00",
    recinto: "Estadio El Tabo / Cancha Los Halcones",
    descripcion:
      "Taller enfocado en promover la participación femenina en el deporte comunal.",
    icon: "⚽",
  },
  {
    nombre: "Patinaje artístico",
    categoria: "Deportes",
    grupo: "04 a 17 años",
    horario: "Martes y jueves 18:00 a 20:00",
    recinto: "Multicancha Chile España / Multicancha Playas Blancas",
    descripcion:
      "Actividad deportiva y artística para niñas, niños y jóvenes de la comuna.",
    icon: "🛼",
  },
  {
    nombre: "Bochas",
    categoria: "Adulto Mayor",
    grupo: "PcD +18 años / 12 a 18 años",
    horario: "Miércoles y viernes / lunes, miércoles y sábado",
    recinto: "Colegio Nadiel / Sede Agrupación Hawking",
    descripcion:
      "Taller inclusivo y recreativo que promueve participación, precisión y convivencia.",
    icon: "🎯",
  },
  {
    nombre: "Voleibol NNA",
    categoria: "Infantil",
    grupo: "12 a 18 años",
    horario: "Lunes y miércoles 17:00 a 18:30",
    recinto: "Multicancha Villa La Laguna",
    descripcion:
      "Taller deportivo para niñas, niños y adolescentes interesados en el voleibol.",
    icon: "🏐",
  },
  {
    nombre: "Voleibol adultos",
    categoria: "Deportes",
    grupo: "18 a 59 años",
    horario: "Lunes y miércoles 19:00 a 20:30",
    recinto: "Multicancha Villa La Laguna",
    descripcion:
      "Taller deportivo comunitario para fortalecer actividad física y encuentro vecinal.",
    icon: "🏐",
  },
  {
    nombre: "Deportes acuáticos",
    categoria: "Deportes",
    grupo: "12 a 18 años / 18 a 59 años",
    horario: "Miércoles, viernes, sábado y domingo",
    recinto: "Playa Chépica B / Playa Las Ágatas / Playa Chica Las Cruces",
    descripcion:
      "Escuela deportiva ligada al entorno costero de la comuna y sus playas.",
    icon: "🏄",
  },
  {
    nombre: "Tenis NNA",
    categoria: "Infantil",
    grupo: "6 a 10 años / 11 a 14 años",
    horario: "Martes y jueves",
    recinto: "Estadio Las Cruces",
    descripcion:
      "Taller formativo para niños, niñas y adolescentes que quieran aprender tenis.",
    icon: "🎾",
  },
  {
    nombre: "Tenis adulto",
    categoria: "Deportes",
    grupo: "+15 años",
    horario: "Martes y jueves",
    recinto: "Estadio Las Cruces",
    descripcion:
      "Espacio deportivo para jóvenes y adultos con interés en desarrollar habilidades en tenis.",
    icon: "🎾",
  },
  {
    nombre: "Baile entretenido",
    categoria: "Deportes",
    grupo: "18 a 59 años",
    horario: "Lunes, miércoles y viernes",
    recinto: "Gimnasio La Araucana / Sede Villa La Laguna",
    descripcion:
      "Actividad física, recreativa y comunitaria mediante baile y movimiento.",
    icon: "💃",
  },
  {
    nombre: "Baile entretenido adulto mayor",
    categoria: "Adulto Mayor",
    grupo: "+60 años",
    horario: "Lunes, miércoles, viernes / martes y jueves",
    recinto: "Gimnasio La Araucana / Casa de la Cultura El Tabo",
    descripcion:
      "Taller orientado al bienestar, movimiento y participación activa de personas mayores.",
    icon: "🕺",
  },
  {
    nombre: "Básquetbol adultos",
    categoria: "Deportes",
    grupo: "18 a 59 años",
    horario: "Lunes y miércoles 20:00 a 21:30",
    recinto: "Multicancha Fermín García",
    descripcion:
      "Taller deportivo para práctica y fortalecimiento del básquetbol comunitario.",
    icon: "🏀",
  },
  {
    nombre: "Básquetbol NNA",
    categoria: "Infantil",
    grupo: "12 a 17 años",
    horario: "Martes, jueves y sábado",
    recinto: "Multicancha Fermín García",
    descripcion:
      "Taller deportivo para niñas, niños y adolescentes interesados en el básquetbol.",
    icon: "🏀",
  },
  {
    nombre: "Repostería",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Lunes 09:00 a 12:00",
    recinto: "Arturo Prat 51 Casa B, El Tabo",
    descripcion:
      "Taller del Programa de la Mujer orientado al aprendizaje práctico de repostería.",
    icon: "🧁",
  },
  {
    nombre: "Gasfitería",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Lunes 09:00 a 12:00",
    recinto: "Arturo Prat 51 Casa A, El Tabo",
    descripcion:
      "Taller de oficio para desarrollar habilidades prácticas en gasfitería.",
    icon: "🔧",
  },
  {
    nombre: "Folclore",
    categoria: "Cultura",
    grupo: "Comunidad general",
    horario: "Lunes 11:00 a 12:30 / martes 15:30 a 17:00",
    recinto: "JJ.VV. Errázuriz / CEDIAM",
    descripcion:
      "Espacio cultural para fortalecer identidad, tradición y expresión artística local.",
    icon: "🎶",
  },
  {
    nombre: "Manualidades",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Martes y jueves 15:00 a 16:30",
    recinto: "JJ.VV. Rural N°2 / JJ.VV. Errázuriz",
    descripcion:
      "Taller creativo para aprender técnicas manuales y fortalecer habilidades comunitarias.",
    icon: "🧵",
  },
  {
    nombre: "Manicure",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Lunes 11:00 a 12:30 / jueves 15:30 a 17:00",
    recinto: "JJ.VV. Playas Blancas / Arturo Prat 51 Casa B",
    descripcion:
      "Taller de oficio enfocado en técnicas básicas de manicure y cuidado personal.",
    icon: "💅",
  },
  {
    nombre: "Peluquería",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Miércoles 15:00 a 18:00",
    recinto: "Comité de Adelanto Villa La Unión",
    descripcion:
      "Taller práctico de peluquería orientado al aprendizaje de técnicas de cuidado capilar.",
    icon: "💇",
  },
  {
    nombre: "Joyería en mostacilla",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Lunes / miércoles / viernes",
    recinto: "Arturo Prat 51 Casa B / JJ.VV. Mauricio Peña",
    descripcion:
      "Taller creativo para elaborar piezas artesanales mediante técnicas de mostacilla.",
    icon: "📿",
  },
  {
    nombre: "Mosaico",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Miércoles 11:00 a 12:30 / viernes 09:30 a 11:00",
    recinto: "JJ.VV. N°1 Las Cruces / Arturo Prat 51 Casa B",
    descripcion:
      "Taller artístico y manual orientado a la creación de piezas decorativas en mosaico.",
    icon: "🧩",
  },
  {
    nombre: "Yoga",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Martes y viernes 15:00 a 16:30",
    recinto: "JJ.VV. Errázuriz / Arturo Prat 51 Casa B",
    descripcion:
      "Espacio de bienestar físico y emocional mediante práctica guiada de yoga.",
    icon: "🧘",
  },
  {
    nombre: "Desarrollo personal basado en nutrición emocional",
    categoria: "Social",
    grupo: "18 años o más",
    horario: "Martes y jueves 15:00 a 16:30",
    recinto: "JJ.VV. Playas Blancas / CEDIAM",
    descripcion:
      "Taller de acompañamiento y crecimiento personal con enfoque en bienestar emocional.",
    icon: "🌱",
  },
  {
    nombre: "El arte de sanar jugando",
    categoria: "Social",
    grupo: "Comunidad general",
    horario: "Martes 15:30 a 17:00 / jueves 12:00 a 13:30",
    recinto: "Arturo Prat 51 Casa B / JJ.VV. N°1 Las Cruces",
    descripcion:
      "Taller de bienestar y expresión lúdica para promover autocuidado y participación.",
    icon: "🎲",
  },
  {
    nombre: "Mueblería",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Jueves 09:00 a 12:00",
    recinto: "Arturo Prat 51 Casa A, El Tabo",
    descripcion:
      "Taller de oficio orientado al aprendizaje básico de técnicas de mueblería.",
    icon: "🪚",
  },
  {
    nombre: "Diseño y confección",
    categoria: "Programa",
    grupo: "Personas inscritas según requisitos",
    horario: "Jueves 09:00 a 12:00",
    recinto: "Arturo Prat 51 Casa B, El Tabo",
    descripcion:
      "Taller de oficio para desarrollar habilidades en confección y diseño textil.",
    icon: "🧶",
  },
  {
    nombre: "Encuadernación",
    categoria: "Juventud",
    grupo: "15 a 29 años",
    horario: "Jueves 17:00",
    recinto: "Arturo Prat #51, El Tabo",
    descripcion:
      "Taller de oficio para jóvenes enfocado en técnicas básicas de encuadernación.",
    icon: "📚",
  },
  {
    nombre: "Arte",
    categoria: "Juventud",
    grupo: "15 a 29 años y desde 8 años con adulto responsable",
    horario: "Viernes 15:00",
    recinto: "Arturo Prat #51, El Tabo",
    descripcion:
      "Taller artístico para desarrollar creatividad mediante dibujo, pintura y expresión visual.",
    icon: "🎨",
  },
  {
    nombre: "Tejido a crochet",
    categoria: "Juventud",
    grupo: "15 a 29 años y desde 8 años con adulto responsable",
    horario: "Jueves 16:00",
    recinto: "Arturo Prat #51, El Tabo",
    descripcion:
      "Taller de oficio creativo para aprender técnicas iniciales de tejido a crochet.",
    icon: "🧶",
  },
  {
    nombre: "Fotografía naturalista",
    categoria: "Juventud",
    grupo: "15 a 29 años",
    horario: "Lunes 17:00",
    recinto: "Arturo Prat #51, El Tabo",
    descripcion:
      "Taller orientado a jóvenes interesados en fotografía, naturaleza y entorno comunal.",
    icon: "📷",
  },
  {
    nombre: "Masoterapia",
    categoria: "Juventud",
    grupo: "15 a 29 años",
    horario: "Lunes 16:00",
    recinto: "Arturo Prat #51, El Tabo",
    descripcion:
      "Taller de oficio para introducir técnicas de bienestar y masoterapia.",
    icon: "💆",
  },
  {
    nombre: "Barbería",
    categoria: "Juventud",
    grupo: "15 a 29 años",
    horario: "Miércoles 17:00",
    recinto: "Arturo Prat #51, El Tabo",
    descripcion:
      "Taller de oficio juvenil enfocado en técnicas básicas de barbería.",
    icon: "💈",
  },
  {
    nombre: "Tintes fantasía",
    categoria: "Social",
    grupo: "Comunidad LGBTIQA+ y/o comunidades migrantes",
    horario: "Inscripción según disponibilidad",
    recinto: "Casa Azul",
    descripcion:
      "Taller de oficio en un espacio libre de prejuicios y discriminación.",
    icon: "🌈",
  },
];

const imagenesDestacadas = [
  {
    title: "Talleres Deportivos",
    image: "/images/talleres/talleres-deportivos.png",
  },
  {
    title: "Programa de la Mujer",
    image: "/images/talleres/programa-mujer.png",
  },
  {
    title: "Talleres y Oficios Juventud",
    image: "/images/talleres/juventud-oficios.png",
  },
  {
    title: "Talleres Artísticos y Culturales",
    image: "/images/talleres/cultura.png",
  },
];

export default function TalleresPage() {
  const [categoriaActiva, setCategoriaActiva] =
    React.useState<Categoria>("Todos");

  const talleresFiltrados =
    categoriaActiva === "Todos"
      ? talleres
      : talleres.filter((item) => item.categoria === categoriaActiva);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#00bcd4] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174a]/95 via-[#0b4ca8]/85 to-[#00174a]/50" />

          <div className="relative mx-auto max-w-[1040px] px-4 py-16 md:py-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              Talleres Municipales 2026
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              Talleres para toda la comunidad
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
              Revisa talleres deportivos, culturales, sociales, infantiles,
              juveniles y programas municipales disponibles en El Tabo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-8 py-4 text-center font-black text-[#00174a] shadow-lg"
              >
                Inscribirme en talleres
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("listado-talleres")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-cyan-500 px-8 py-4 font-black text-white shadow-lg"
                type="button"
              >
                Ver listado de talleres
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1040px] px-4 py-14">
          <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  Información general
                </span>

                <h2 className="mt-4 text-3xl font-black text-[#00174a]">
                  ¿Cómo participar?
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700">
                  <p>
                    Los talleres municipales son espacios gratuitos o de acceso
                    comunitario orientados a fortalecer la participación,
                    recreación, aprendizaje, bienestar y desarrollo de
                    habilidades de vecinas y vecinos.
                  </p>

                  <p>
                    La inscripción puede depender de cupos disponibles,
                    requisitos de edad, residencia en la comuna, Registro Social
                    de Hogares u otros antecedentes solicitados por cada
                    programa municipal.
                  </p>

                  <p>
                    Revisa la categoría del taller, horario, recinto y grupo
                    etario antes de completar el formulario de inscripción.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#f6f9fe] p-6 ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-[#00174a]">
                  Requisitos frecuentes
                </h3>

                <ul className="mt-5 space-y-3">
                  {[
                    "Cédula de identidad.",
                    "Registro Social de Hogares en la comuna, cuando corresponda.",
                    "Cumplir con el grupo etario indicado.",
                    "Inscripción presencial o mediante formulario, según cada programa.",
                    "Cupos sujetos a disponibilidad.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200"
                    >
                      <span>✔️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1040px] px-4 py-4">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
            Destacados
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#00174a]">
            Programas y talleres destacados
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {imagenesDestacadas.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="h-72 bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-black text-[#00174a]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="listado-talleres"
          className="mx-auto max-w-[1040px] scroll-mt-32 px-4 py-14"
        >
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-yellow-700">
            Categorías
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#00174a]">
            Explora los talleres por categoría
          </h2>

          <p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-600">
            Filtra los talleres disponibles según el área que más te interese.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
            {categorias.map((item) => {
              const active = categoriaActiva === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => setCategoriaActiva(item.label)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition ${
                    active
                      ? "bg-blue-700 text-white shadow"
                      : "bg-slate-50 text-[#17356f] hover:bg-blue-50"
                  }`}
                  type="button"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {talleresFiltrados.map((item) => (
              <article
                key={`${item.nombre}-${item.recinto}-${item.horario}`}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-3xl">
                    {item.icon}
                  </div>

                  <span className="rounded-full bg-[#00174a] px-4 py-2 text-xs font-black text-white">
                    {item.categoria}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-[#00174a]">
                  {item.nombre}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.descripcion}
                </p>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <p>
                    <strong>Grupo etario:</strong> {item.grupo}
                  </p>
                  <p>
                    <strong>Horario:</strong> {item.horario}
                  </p>
                  <p>
                    <strong>Recinto:</strong> {item.recinto}
                  </p>
                </div>

                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-black text-white"
                >
                  Inscribirme →
                </a>
              </article>
            ))}
          </div>

          {talleresFiltrados.length === 0 && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-8 text-center text-[#061f5c]">
              No hay talleres disponibles en esta categoría por el momento.
            </div>
          )}
        </section>

        <section className="mx-auto max-w-[1040px] px-4 pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                Inscripción
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#00174a]">
                ¿Tienes dudas sobre un taller?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Antes de inscribirte, revisa si el taller corresponde a tu
                grupo etario, lugar de residencia, disponibilidad horaria y
                requisitos del programa municipal responsable.
              </p>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-[#00174a] to-[#1649b8] p-8 text-white shadow-sm">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                Formulario
              </span>

              <h2 className="mt-4 text-3xl font-black">
                Inscríbete en los talleres 2026
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/90">
                Completa el formulario oficial para postular o solicitar cupo en
                los talleres disponibles.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-center font-black text-[#00174a] shadow-lg"
                >
                  Ir al formulario de inscripción
                </a>

                <a
                  href="/"
                  className="flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-center font-black text-white"
                >
                  Volver al inicio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}