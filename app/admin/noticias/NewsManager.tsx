"use client";

import React from "react";
import Link from "next/link";
import {
  categoriasNoticias,
  type Noticia,
  type CategoriaNoticia,
} from "@/lib/news-data";
import type { InternalUser } from "@/lib/auth";
import LogoutButton from "@/components/admin/LogoutButton";

const categories = categoriasNoticias.filter(
  (item): item is { label: Exclude<CategoriaNoticia, "Todas">; icon: string } =>
    item.label !== "Todas"
);

export default function NewsManager({
  initialNews,
  user,
}: {
  initialNews: Noticia[];
  user: InternalUser;
}) {
  const [news, setNews] = React.useState(initialNews);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [form, setForm] = React.useState({
    title: "",
    category: "Municipalidad" as Exclude<CategoriaNoticia, "Todas">,
    publishedAt: new Date().toISOString().slice(0, 10),
    excerpt: "",
    image: "",
    body: "",
    tags: "",
    featured: false,
  });

  async function uploadImage(file: File) {
    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/uploads", {
      method: "POST",
      body: formData,
    });

    const data = (await response.json()) as { path?: string; message?: string };
    setUploading(false);

    if (!response.ok || !data.path) {
      setMessage(data.message ?? "No pudimos subir la imagen.");
      return;
    }

    const imagePath = data.path;
    setForm((current) => ({ ...current, image: imagePath }));
    setMessage("Imagen cargada correctamente.");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/noticias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = (await response.json()) as {
      noticia?: Noticia;
      message?: string;
    };
    setLoading(false);

    if (!response.ok || !data.noticia) {
      setMessage(data.message ?? "No pudimos crear la noticia.");
      return;
    }

    setNews((current) => [data.noticia!, ...current]);
    setMessage("Noticia publicada correctamente.");
    setForm({
      title: "",
      category: "Municipalidad",
      publishedAt: new Date().toISOString().slice(0, 10),
      excerpt: "",
      image: "",
      body: "",
      tags: "",
      featured: false,
    });
  }

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-6 py-12 text-slate-800">
      <section className="mx-auto max-w-[1180px]">
        <div className="rounded-[30px] bg-[#001b4f] p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
            Panel de prensa
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="text-4xl font-black md:text-5xl">
              Cargar noticias
            </h1>
            <LogoutButton />
          </div>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/80">
            Las publicaciones creadas aquí aparecen en el listado público y en
            una página interna con formato de noticia.
          </p>
          <p className="mt-4 text-sm text-white/70">Sesión: {user.email}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_420px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8"
          >
            <h2 className="text-3xl font-black text-[#00174a]">
              Nueva publicación
            </h2>

            <label className="mt-6 block text-sm font-black text-[#00174a]">
              Título
              <input
                value={form.title}
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none ring-blue-200 transition focus:ring-4"
              />
            </label>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-black text-[#00174a]">
                Categoría
                <select
                  value={form.category}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      category: event.target.value as Exclude<
                        CategoriaNoticia,
                        "Todas"
                      >,
                    })
                  }
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none ring-blue-200 transition focus:ring-4"
                >
                  {categories.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-black text-[#00174a]">
                Fecha de publicación
                <input
                  value={form.publishedAt}
                  onChange={(event) =>
                    setForm({ ...form, publishedAt: event.target.value })
                  }
                  type="date"
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none ring-blue-200 transition focus:ring-4"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-black text-[#00174a]">
              Bajada
              <textarea
                value={form.excerpt}
                onChange={(event) =>
                  setForm({ ...form, excerpt: event.target.value })
                }
                rows={3}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none ring-blue-200 transition focus:ring-4"
              />
            </label>

            <div className="mt-5 rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-4">
              <label className="block text-sm font-black text-[#00174a]">
                Imagen destacada
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) uploadImage(file);
                  }}
                  className="mt-3 block w-full text-sm"
                />
              </label>
              <input
                value={form.image}
                onChange={(event) =>
                  setForm({ ...form, image: event.target.value })
                }
                placeholder="/images/uploads/imagen.jpg"
                className="mt-3 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none ring-blue-200 transition focus:ring-4"
              />
              <p className="mt-2 text-xs font-bold text-slate-600">
                {uploading
                  ? "Subiendo imagen..."
                  : "También puedes pegar una ruta existente de public/images."}
              </p>
            </div>

            <label className="mt-5 block text-sm font-black text-[#00174a]">
              Cuerpo de la noticia
              <textarea
                value={form.body}
                onChange={(event) =>
                  setForm({ ...form, body: event.target.value })
                }
                rows={10}
                placeholder="Escribe la noticia completa. Separa párrafos con una línea en blanco."
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none ring-blue-200 transition focus:ring-4"
              />
            </label>

            <label className="mt-5 block text-sm font-black text-[#00174a]">
              Etiquetas separadas por coma
              <input
                value={form.tags}
                onChange={(event) =>
                  setForm({ ...form, tags: event.target.value })
                }
                placeholder="Comunidad, Actividad, El Tabo"
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none ring-blue-200 transition focus:ring-4"
              />
            </label>

            <label className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-black text-[#00174a]">
              <input
                checked={form.featured}
                onChange={(event) =>
                  setForm({ ...form, featured: event.target.checked })
                }
                type="checkbox"
                className="h-5 w-5"
              />
              Marcar como noticia destacada
            </label>

            {message && (
              <p className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-bold text-blue-800">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || uploading}
              className="mt-6 h-12 rounded-2xl bg-blue-700 px-8 font-black text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? "Publicando..." : "Publicar noticia"}
            </button>
          </form>

          <aside className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-[#00174a]">
              Últimas publicadas
            </h2>
            <div className="mt-5 space-y-4">
              {news.slice(0, 8).map((item) => (
                <Link
                  key={item.id}
                  href={`/noticias/${item.slug}`}
                  className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50"
                >
                  <p className="text-xs font-black uppercase text-blue-700">
                    {item.date} · {item.category}
                  </p>
                  <p className="mt-1 font-black leading-snug text-[#00174a]">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
