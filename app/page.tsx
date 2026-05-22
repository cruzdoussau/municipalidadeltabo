"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const logo = "/images/header/logo-el-tabo.png";
const lobby = "/images/header/ley-lobby.png";
const transparencia = "/images/header/transparencia-activa.png";
const solicitar = "/images/header/solicitar-informacion.png";
const oirs = "/images/header/oirs.png";

const servicios = [
  {
    title: "Vecino Digital",
    icon: "💻",
    text: "Paga tus contribuciones en línea de forma rápida, segura y sin filas.",
    cta: "Ir al portal",
    color: "bg-blue-600",
    href: "/vecino-digital",
  },
  {
    title: "DOM en Línea",
    icon: "🏠",
    text: "Solicita certificados y documentos de obras a través de MINVU.",
    cta: "Más información",
    color: "bg-emerald-500",
    href: "/dom-en-linea",
  },
  {
    title: "Licencias de Conducir",
    icon: "🪪",
    text: "Conoce los requisitos, pasos y valores para obtener tu licencia.",
    cta: "Saber más",
    color: "bg-yellow-500",
    href: "/licencias-conducir",
  },
  {
    title: "Beneficios Sociales",
    icon: "🎁",
    text: "Accede a apoyos como caja de mercadería, vales de gas y más.",
    cta: "Ver beneficios",
    color: "bg-rose-500",
    href: "/beneficios-sociales",
  },
  {
    title: "Talleres Comunales",
    icon: "🎨",
    text: "Descubre talleres disponibles por dirección, programa y departamento.",
    cta: "Ver talleres",
    color: "bg-violet-600",
    href: "/talleres",
  },
  {
    title: "Trámites y Servicios",
    icon: "📄",
    text: "Encuentra información clara sobre cada trámite, requisitos y contactos.",
    cta: "Explorar",
    color: "bg-sky-500",
    href: "/tramites-y-servicios",
  },
];

const eventos = [
  {
    fecha: "12 ABR",
    title: "Festival Costumbrista de El Tabo",
    tag: "Cultura",
    lugar: "Plaza principal · 18:00 hrs",
    text: "Encuentro familiar con música, gastronomía y emprendedores locales.",
    color: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "14 ABR",
    title: "Corrida Familiar por la Comunidad",
    tag: "Deporte",
    lugar: "Costanera El Tabo",
    text: "Actividad deportiva abierta a vecinas y vecinos de todas las edades.",
    color: "bg-emerald-600",
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "16 ABR",
    title: "Feria de Servicios Municipales",
    tag: "Comunidad",
    lugar: "Frontis Municipal",
    text: "Actividad comunal de servicios hacia la comunidad en nuestro frontis municipal.",
    color: "bg-yellow-600",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "17 ABR",
    title: "Taller de Manualidades",
    tag: "Juventud",
    lugar: "Oficina de la Juventud",
    text: "Ven a compartir y aprender en nuestro taller de manualidades de juventud.",
    color: "bg-violet-600",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "20 ABR",
    title: "Encuentro de Niñez y Familia",
    tag: "Niñez",
    lugar: "Plaza El Tabo",
    text: "Jornada recreativa con juegos, actividades familiares y espacios de participación.",
    color: "bg-sky-600",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "22 ABR",
    title: "Mateada del Adulto Mayor",
    tag: "Adulto Mayor",
    lugar: "Sede comunitaria",
    text: "Encuentro comunitario para compartir, conversar y fortalecer la vida social.",
    color: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "25 ABR",
    title: "Ruta Turística Patrimonial",
    tag: "Turismo",
    lugar: "Borde costero",
    text: "Recorrido guiado por espacios patrimoniales, naturales y culturales de la comuna.",
    color: "bg-teal-600",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  },
];

const categoriasEventos = [
  { label: "Todos", icon: "" },
  { label: "Cultura", icon: "📍" },
  { label: "Deporte", icon: "⚽" },
  { label: "Comunidad", icon: "👥" },
  { label: "Juventud", icon: "🎨" },
  { label: "Niñez", icon: "🧒" },
  { label: "Adulto Mayor", icon: "♿" },
  { label: "Turismo", icon: "🌴" },
];

const accesos = [
  {
    titulo: "Juzgado de Policía Local",
    href: "/tramites-y-servicios?categoria=juzgado-policia-local",
    icono: "/images/accesos-rapidos/JPL.png",
  },
  {
    titulo: "Portal Laboral Municipal",
    href: "/portal-laboral",
    icono: "/images/accesos-rapidos/portal-laboral.png",
  },
  {
    titulo: "Plan Regulador Comunal",
    href: "/tramites-y-servicios?categoria=secpla",
    icono: "/images/accesos-rapidos/pladeco.png",
  },
  {
    titulo: "Tenencia Responsable",
    href: "/tramites-y-servicios?categoria=medio-ambiente",
    icono: "/images/accesos-rapidos/JPL.png",
  },
  {
    titulo: "Sistema Información Territorial",
    href: "/tramites-y-servicios?categoria=secpla",
    icono: "/images/accesos-rapidos/sitet.png",
  },
  {
    titulo: "Organizaciones Comunitarias",
    href: "/organizaciones-comunitarias",
    icono: "/images/accesos-rapidos/organizaciones-comunitarias.png",
  },
];

function AccesosRapidos() {
  return (
    <section id="accesos-rapidos" className="bg-[#f7f9fc] py-16">
      <div className="mx-auto max-w-[1120px] px-4">
        <h2 className="text-4xl font-black tracking-tight text-[#061f5c] md:text-5xl">
          Accesos Rápidos
        </h2>

        <p className="mt-3 max-w-4xl text-lg text-[#17356f] md:text-xl">
          Encuentra y accede de forma rápida a los servicios y plataformas de la
          municipalidad.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {accesos.map((a, index) => (
            <Link
              key={`${a.titulo}-${index}`}
              href={a.href}
              className="group flex min-h-[260px] flex-col items-center rounded-[24px] bg-white p-5 text-center shadow-md ring-1 ring-blue-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#dfeafb]">
                <Image
                  src={a.icono}
                  alt={a.titulo}
                  width={150}
                  height={150}
                  className="h-[150px] w-[150px] object-contain"
                />
              </div>

              <h3 className="mt-5 flex min-h-[72px] items-center justify-center text-lg font-black leading-tight text-[#061f5c]">
                {a.titulo}
              </h3>

              <div className="mt-auto w-full pt-4">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-2.5 text-sm font-black text-white shadow-md transition group-hover:bg-blue-800">
                  Acceder
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const direcciones = [
  {
    title: "Turismo",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    color: "from-blue-900/90",
  },
  {
    title: "Deportes",
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=900&q=80",
    color: "from-emerald-900/90",
  },
  {
    title: "Cultura",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    color: "from-orange-900/90",
  },
  {
    title: "Mujer",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    color: "from-violet-900/90",
  },
  {
    title: "Juventud",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    color: "from-indigo-900/90",
  },
  {
    title: "Adulto Mayor",
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=900&q=80",
    color: "from-yellow-800/90",
  },
];

const videos = [
  {
    title: "EL TABO TRAS SU IDENTIDAD - Ex Retén El Tabo",
    tag: "Identidad",
    views: "232 vistas",
    duration: "2:05",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "El Tabo tras su identidad - Sra. Rosa Rincón Tabino",
    tag: "Programa",
    views: "71 vistas",
    duration: "7:28",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soniteca Capítulo 15 - Shurelio Entrevista",
    tag: "Juventud",
    views: "141 vistas",
    duration: "16:39",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soniteca Capítulo 15 - Canciones",
    tag: "Música",
    views: "119 vistas",
    duration: "1:14",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soniteca Capítulo 14",
    tag: "Juventud",
    views: "98 vistas",
    duration: "16:04",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soniteca Capítulo 14 - Banda en vivo",
    tag: "Música",
    views: "167 vistas",
    duration: "10:25",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soniteca Capítulo 13 - Fran en la Biblioteca",
    tag: "Cultura",
    views: "221 vistas",
    duration: "7:43",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Soniteca Capítulo 13 - Fran entrevista",
    tag: "Entrevista",
    views: "85 vistas",
    duration: "3:15",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
];

const noticiasDestacadas = [
  {
    kicker: "Conmemoración",
    title: "Mes del Deporte",
    text: "El Tabo invita a toda la comunidad a conmemorar el Mes del Deporte, a través de una serie de actividades que se realizarán durante abril. Eventos gestionados a través de la Dirección de Desarrollo Comunitario y su Programa de Deportes.",
    color: "text-lime-400",
    button: "bg-lime-400 text-[#061f5c]",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    kicker: "Exposición",
    title: "Artesanos/as 2026",
    text: "La comuna invita a vecinos y visitantes a conocer el trabajo de artesanos y artesanas locales, promoviendo nuestra identidad, creatividad y economía comunal.",
    color: "text-emerald-400",
    button: "bg-emerald-400 text-[#061f5c]",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    kicker: "Postulaciones",
    title: "Talleres 2026",
    text: "El programa de la Mujer apertura sus postulaciones para los talleres 2026. Para inscribirse, las personas deben contar con Registro Social de Hogares en la comuna.",
    color: "text-yellow-400",
    button: "bg-yellow-400 text-[#061f5c]",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
];
const heroImages = [
  "/images/home/hero/el-tabo-1.png",
  "/images/home/hero/el-tabo-2.webp",
  "/images/home/hero/el-tabo-3.png",
  "/images/home/hero/el-tabo-4.png",

];
function Hero() {
  const [activeImage, setActiveImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#002d7a]">
      {/* Slider de imágenes */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out ${
              activeImage === index ? "opacity-60" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              animation:
                activeImage === index
                  ? "heroKenBurns 6500ms ease-in-out forwards"
                  : "none",
            }}
          />
        ))}
      </div>

      {/* Capa azul para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001b4f]/95 via-[#002d7a]/75 to-[#0055c7]/25" />

      {/* Efecto decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(0,140,255,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1040px] px-4 py-16 md:py-24">
        <span className="rounded-md bg-blue-700 px-4 py-2 text-xs font-black uppercase text-white shadow-lg">
          El Tabo, compromiso social
        </span>

        <h1 className="mt-5 max-w-2xl text-5xl font-black leading-tight text-white md:text-7xl">
          Juntos construimos Nuestra Comuna
        </h1>

        <p className="mt-4 max-w-md text-lg font-medium text-white">
          Servicios digitales, Trámites simples y Acceso universal
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {servicios.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl bg-white p-5 text-center shadow-xl ring-1 ring-blue-100 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-50 text-3xl">
                {s.icon}
              </div>

              <h3 className="mt-4 min-h-12 text-base font-black text-[#061f5c]">
                {s.title}
              </h3>

              <p className="min-h-20 text-xs leading-relaxed text-[#17356f]">
                {s.text}
              </p>

              <Link
                href={s.href}
                className={`mt-4 block w-full rounded-full px-4 py-2 text-xs font-black text-white ${s.color}`}
              >
                {s.cta}
              </Link>
            </article>
          ))}
        </div>

        {/* Indicadores */}
        <div className="mt-8 flex justify-center gap-2">
          {heroImages.map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveImage(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeImage === index
                  ? "w-10 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticiasSlider() {
  const [active, setActive] = React.useState(0);
  const noticia = noticiasDestacadas[active];

  const next = () =>
    setActive((current) => (current + 1) % noticiasDestacadas.length);

  const prev = () =>
    setActive(
      (current) =>
        (current - 1 + noticiasDestacadas.length) % noticiasDestacadas.length
    );

  return (
    <section className="relative overflow-hidden bg-white py-14 pb-40 ">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1120px] px-4 pb-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#061f5c]">
              Noticias destacadas
            </h2>

            <p className="mt-2 text-lg text-[#17356f]">
              Revisa las últimas novedades de nuestra comuna.
            </p>
          </div>

           <Link
           href="/noticias"
            className="rounded-full bg-blue-700 px-8 py-3 font-black text-white shadow-lg transition hover:bg-blue-800"
          >
           Ver todas las noticias →
           </Link>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-white/90 p-2 md:p-6">
            <p
              className={`text-5xl font-black uppercase leading-none tracking-tight ${noticia.color}`}
            >
              {noticia.kicker}
            </p>

            <h3 className="mt-2 text-5xl font-light uppercase leading-tight text-slate-700 md:text-6xl">
              {noticia.title}
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700">
              {noticia.text}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                className={`rounded-md px-10 py-4 font-semibold shadow-sm ${noticia.button}`}
                type="button"
              >
                Leer Noticia
              </button>

              <button
                onClick={prev}
                className="grid h-12 w-12 place-items-center rounded-full bg-[#02075d] text-3xl font-black text-white shadow-lg"
                aria-label="Noticia anterior"
                type="button"
              >
                ←
              </button>

              <button
                onClick={next}
                className="grid h-12 w-12 place-items-center rounded-full bg-[#02075d] text-3xl font-black text-white shadow-lg"
                aria-label="Noticia siguiente"
                type="button"
              >
                →
              </button>
            </div>

            <div className="mt-6 flex gap-2">
              {noticiasDestacadas.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === index
                      ? "w-10 bg-[#02075d]"
                      : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Ver noticia ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="relative h-[310px] overflow-hidden rounded-sm shadow-xl md:h-[340px]">
            <img
              src={noticia.image}
              alt={noticia.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#00174a]/75 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="rounded bg-white px-3 py-1 text-xs font-black uppercase text-[#00174a]">
                Noticia destacada
              </span>

              <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white">
                {noticia.kicker} {noticia.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarteleraEventos() {
  const [categoriaActiva, setCategoriaActiva] = React.useState("Todos");

  const eventosFiltrados =
    categoriaActiva === "Todos"
      ? eventos
      : eventos.filter((evento) => evento.tag === categoriaActiva);

  const eventosHome = eventosFiltrados.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Fondo ilustrado tipo patrón */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: 'url("/patterns/eventos-bg.png")',
            backgroundRepeat: "repeat",
            backgroundSize: "560px 340px",
            opacity: 1,
          }}
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative mx-auto max-w-[1120px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#061f5c]">
              Cartelera de Eventos
            </h2>

            <p className="mt-2 text-lg text-[#17356f]">
              Descubre actividades, talleres, celebraciones y encuentros para
              toda la comunidad.
            </p>
          </div>

          <Link
            href="/eventos"
            className="rounded-full bg-blue-700 px-8 py-3 font-black text-white shadow-lg transition hover:bg-blue-800"
          >
            Ver todos los eventos →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl bg-white/90 p-2 shadow-sm ring-1 ring-blue-100 backdrop-blur">
          {categoriasEventos.map((categoria) => {
            const isActive = categoriaActiva === categoria.label;

            return (
              <button
                key={categoria.label}
                onClick={() => setCategoriaActiva(categoria.label)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition ${
                  isActive
                    ? "bg-blue-700 text-white shadow-lg"
                    : "text-[#17356f] hover:bg-blue-50"
                }`}
                aria-pressed={isActive}
                type="button"
              >
                {categoria.icon && <span>{categoria.icon}</span>}
                {categoria.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  {eventosHome.map((e, index) => (
    <article
      key={`${e.title}-${e.fecha}-${index}`}
      className="group flex h-[520px] flex-col overflow-hidden rounded-[28px] bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-[190px] shrink-0 overflow-hidden bg-slate-200">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={e.image}
          alt={e.title}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#00174a]/55 via-transparent to-transparent" />

        <span
          className={`absolute left-4 top-4 rounded-full ${e.color} px-4 py-2 text-sm font-black text-white shadow-lg`}
        >
          {e.fecha}
        </span>

        <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-black text-[#061f5c] shadow">
          {e.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-3 text-[24px] font-black leading-[1.12] text-[#061f5c]">
          {e.title}
        </h3>

        <p className="mt-4 line-clamp-1 text-sm font-bold text-[#17356f]">
          📍 {e.lugar}
        </p>

        <p className="mt-4 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
          {e.text}
        </p>

        <div className="mt-auto pt-5">
          <button
            className={`w-full rounded-full ${e.color} px-6 py-3 text-sm font-black text-white shadow-md transition hover:brightness-95`}
            type="button"
          >
            Ver más →
          </button>
        </div>
      </div>
    </article>
  ))}
</div>

        {eventosHome.length === 0 && (
          <div className="mt-8 rounded-2xl bg-blue-50 p-8 text-center text-[#061f5c]">
            No hay eventos disponibles para esta categoría por el momento.
          </div>
        )}
      </div>
    </section>
  );
}


function DireccionesMunicipales() {
  return (
    <section id="direcciones" className="mx-auto max-w-[1040px] px-4 py-14">
      <h2 className="text-4xl font-black tracking-tight text-[#061f5c]">
        Descubre todo lo que ofrece nuestra comuna
      </h2>

      <p className="mt-2 text-lg text-[#17356f]">
        Explora las áreas y servicios municipales destinados al bienestar de
        nuestros vecinos.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {direcciones.map((item) => (
          <article
            key={item.title}
            className="relative h-56 overflow-hidden rounded-2xl shadow-lg ring-1 ring-blue-100"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={item.image}
              alt={item.title}
            />

            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent`}
            />

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-2xl font-black text-white drop-shadow">
                {item.title}
              </h3>

              <button className="mt-3 rounded-full bg-blue-700 px-5 py-2 text-sm font-black text-white shadow-lg">
                Explorar →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VideosElTabo() {
  const categorias = [
    "Todos",
    "Programas",
    "Cultura",
    "Deportes",
    "Entrevistas",
    "Turismo",
    "Juventud",
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-[1040px] px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border-4 border-blue-700 text-xl text-blue-700">
                ▶
              </span>

              <h2 className="text-4xl font-black tracking-tight text-[#061f5c]">
                Videos de El Tabo
              </h2>
            </div>

            <p className="mt-2 text-lg text-[#17356f]">
              Conoce nuestra comuna a través de reportajes, entrevistas, cultura
              y actividades.
            </p>
          </div>

          <button className="rounded-full bg-blue-700 px-7 py-3 font-black text-white shadow-lg">
            ▶ Ir a nuestro canal de YouTube →
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categorias.map((categoria, index) => (
            <button
              key={categoria}
              className={`rounded-full px-6 py-3 font-semibold ${
                index === 0
                  ? "bg-blue-700 text-white"
                  : "bg-white text-[#17356f] ring-1 ring-blue-100"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {videos.map((video) => (
            <article
              key={video.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-blue-50"
            >
              <div className="relative h-36 bg-slate-200">
                <img
                  className="h-full w-full object-cover"
                  src={video.image}
                  alt={video.title}
                />

                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-20 place-items-center rounded-2xl bg-red-600 text-2xl text-white shadow-lg">
                    ▶
                  </span>
                </div>

                <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs text-white">
                  {video.duration}
                </span>
              </div>

              <div className="p-4">
                <h3 className="min-h-14 text-sm font-black leading-tight text-[#061f5c]">
                  {video.title}
                </h3>

                <div className="mt-3 flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span>👁 {video.views}</span>

                  <span className="rounded-full bg-blue-50 px-3 py-1 font-bold text-blue-700">
                    {video.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-full bg-white px-6 py-4 text-center font-black text-[#061f5c] shadow-sm ring-1 ring-blue-50">
          Descubre más contenido en nuestro canal oficial{" "}
          <button className="ml-4 rounded-full bg-blue-700 px-6 py-3 text-white">
            Ver más en YouTube →
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <NoticiasSlider />
      <CarteleraEventos />
      <AccesosRapidos />
      <DireccionesMunicipales />
      <VideosElTabo />
      <Footer />
    </main>
  );
}