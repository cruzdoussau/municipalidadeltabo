"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type CategoriaEvento =
  | "Todos"
  | "Cultura"
  | "Deporte"
  | "Comunidad"
  | "Juventud"
  | "Niñez"
  | "Adulto Mayor"
  | "Turismo";

type Evento = {
  fecha: string;
  title: string;
  tag: CategoriaEvento;
  lugar: string;
  text: string;
  color: string;
  image: string;
};

const categoriasEventos: { label: CategoriaEvento; icon: string }[] = [
  { label: "Todos", icon: "" },
  { label: "Cultura", icon: "📍" },
  { label: "Deporte", icon: "⚽" },
  { label: "Comunidad", icon: "👥" },
  { label: "Juventud", icon: "🎨" },
  { label: "Niñez", icon: "🧒" },
  { label: "Adulto Mayor", icon: "♿" },
  { label: "Turismo", icon: "🌴" },
];

const eventos: Evento[] = [
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
  {
    fecha: "27 ABR",
    title: "Muestra Artística Comunitaria",
    tag: "Cultura",
    lugar: "Casa de la Cultura",
    text: "Presentaciones artísticas locales, música, danza y expresiones culturales de la comuna.",
    color: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "29 ABR",
    title: "Clínica Deportiva Infantil",
    tag: "Deporte",
    lugar: "Gimnasio Municipal",
    text: "Actividad formativa para niñas, niños y adolescentes interesados en el deporte.",
    color: "bg-emerald-600",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
  },
  {
    fecha: "30 ABR",
    title: "Operativo Municipal en Terreno",
    tag: "Comunidad",
    lugar: "Sector Las Cruces",
    text: "Atención de servicios municipales, orientación social y apoyo comunitario en terreno.",
    color: "bg-yellow-600",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
];

export default function EventosPage() {
  const [categoriaActiva, setCategoriaActiva] =
    React.useState<CategoriaEvento>("Todos");
  const [query, setQuery] = React.useState("");

  const eventosFiltrados = eventos.filter((evento) => {
    const coincideCategoria =
      categoriaActiva === "Todos" || evento.tag === categoriaActiva;

    const texto = `${evento.title} ${evento.tag} ${evento.lugar} ${evento.text}`.toLowerCase();
    const coincideBusqueda = texto.includes(query.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#00a6d6] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174a]/95 via-[#0b4ca8]/85 to-[#00174a]/55" />

          <div className="relative mx-auto max-w-[1120px] px-4 py-16 md:py-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              Agenda comunal
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Eventos de El Tabo
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
              Revisa la cartelera completa de actividades, talleres,
              celebraciones, encuentros comunitarios y eventos disponibles en
              nuestra comuna.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("listado-eventos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white px-8 py-4 font-black text-[#00174a] shadow-lg"
                type="button"
              >
                Ver cartelera
              </button>

              <Link
                href="/"
                className="rounded-full bg-blue-600 px-8 py-4 text-center font-black text-white shadow-lg ring-1 ring-white/20"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>

        <section
          id="listado-eventos"
          className="mx-auto max-w-[1120px] scroll-mt-32 px-4 py-16"
        >
          <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-5 md:grid-cols-[1fr_340px] md:items-end">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  Cartelera
                </span>

                <h2 className="mt-4 text-4xl font-black text-[#00174a]">
                  Explora eventos por categoría
                </h2>

                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  Filtra por tipo de actividad o busca eventos por nombre,
                  lugar o palabra clave.
                </p>
              </div>

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar evento o palabra clave..."
                className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none ring-blue-200 transition focus:ring-4"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {categoriasEventos.map((categoria) => {
                const isActive = categoriaActiva === categoria.label;

                return (
                  <button
                    key={categoria.label}
                    onClick={() => setCategoriaActiva(categoria.label)}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition ${
                      isActive
                        ? "bg-blue-700 text-white shadow"
                        : "bg-slate-50 text-[#17356f] hover:bg-blue-50"
                    }`}
                    type="button"
                  >
                    {categoria.icon && <span>{categoria.icon}</span>}
                    {categoria.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {eventosFiltrados.map((e, index) => (
              <article
                key={`${e.title}-${e.fecha}-${index}`}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={e.image}
                    alt={e.title}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#00174a]/55 via-transparent to-transparent" />

                  <span
                    className={`absolute left-5 top-5 rounded-full ${e.color} px-4 py-2 text-sm font-black text-white shadow-lg`}
                  >
                    {e.fecha}
                  </span>

                  <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[#00174a] shadow-lg">
                    {e.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="min-h-[64px] text-2xl font-black leading-tight text-[#00174a]">
                    {e.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-[#17356f]">
                    📍 {e.lugar}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                    {e.text}
                  </p>

                  <div className="mt-6">
                    <button
                      className={`rounded-full ${e.color} px-6 py-3 text-sm font-black text-white shadow-md`}
                      type="button"
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {eventosFiltrados.length === 0 && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-8 text-center text-[#061f5c]">
              No encontramos eventos asociados a tu búsqueda.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}