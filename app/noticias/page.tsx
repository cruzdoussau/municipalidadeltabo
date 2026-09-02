"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  categoriasNoticias,
  initialNoticias,
  type CategoriaNoticia,
  type Noticia,
} from "@/lib/news-data";

export default function NoticiasPage() {
  const [categoriaActiva, setCategoriaActiva] =
    React.useState<CategoriaNoticia>("Todas");
  const [query, setQuery] = React.useState("");
  const [noticias, setNoticias] = React.useState<Noticia[]>(initialNoticias);

  React.useEffect(() => {
    fetch("/api/noticias")
      .then((response) => response.json())
      .then((data: { news?: Noticia[] }) => {
        if (data.news?.length) {
          setNoticias(data.news);
        }
      })
      .catch(() => setNoticias(initialNoticias));
  }, []);

  const noticiasFiltradas = noticias.filter((item) => {
    const coincideCategoria =
      categoriaActiva === "Todas" || item.category === categoriaActiva;

    const texto = `${item.title} ${item.category} ${item.excerpt}`.toLowerCase();
    const coincideBusqueda = texto.includes(query.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#00a6d6] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174a]/95 via-[#0b4ca8]/85 to-[#00174a]/55" />

          <div className="relative mx-auto max-w-[1120px] px-4 py-16 md:py-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              Noticias municipales
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Noticias de El Tabo
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
              Revisa las últimas novedades, actividades, programas y anuncios
              importantes de nuestra comuna.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("listado-noticias")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white px-8 py-4 font-black text-[#00174a] shadow-lg"
                type="button"
              >
                Ver noticias
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
          id="listado-noticias"
          className="mx-auto max-w-[1180px] scroll-mt-32 px-6 py-16"
        >
          <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-5 md:grid-cols-[1fr_340px] md:items-end">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  Buscador
                </span>

                <h2 className="mt-4 text-4xl font-black text-[#00174a]">
                  Todas las noticias
                </h2>

                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  Filtra por categoría o busca información relevante para la
                  comunidad.
                </p>
              </div>

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar noticia o palabra clave..."
                className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none ring-blue-200 transition focus:ring-4"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {categoriasNoticias.map((item) => {
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
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {noticiasFiltradas.map((item, index) => (
              <article
               key={`${item.title}-${index}`}
               className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#00174a]/45 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#00174a] px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                    {item.date}
                  </p>

                  <h3 className="mt-3 min-h-[64px] text-2xl font-black leading-tight text-[#00174a]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                    {item.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/noticias/${item.slug}`}
                      className="rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-md transition hover:bg-blue-800"
                    >
                      Leer noticia →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {noticiasFiltradas.length === 0 && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-8 text-center text-[#061f5c]">
              No encontramos noticias asociadas a tu búsqueda.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
