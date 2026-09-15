"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  categoriasEventos,
  eventos,
  type CategoriaEvento,
} from "@/lib/events-data";

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
                    <Link
                      href={`/eventos/${e.slug}`}
                      className={`rounded-full ${e.color} px-6 py-3 text-sm font-black text-white shadow-md`}
                    >
                      Ver más →
                    </Link>
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
