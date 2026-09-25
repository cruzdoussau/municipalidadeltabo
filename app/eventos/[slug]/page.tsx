import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { eventos, getEventoBySlug } from "@/lib/events-data";

export function generateStaticParams() {
  return eventos.map((evento) => ({ slug: evento.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const evento = getEventoBySlug(slug);

  return evento
    ? {
        title: `${evento.title} | Municipalidad de El Tabo`,
        description: evento.text,
      }
    : { title: "Evento no encontrado | Municipalidad de El Tabo" };
}

export default async function EventoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const evento = getEventoBySlug(slug);

  if (!evento) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-[#f6f8fb] text-slate-800">
        <section className="bg-[#001b4f] px-6 py-14 text-white">
          <div className="mx-auto max-w-[1120px]">
            <Link
              href="/eventos"
              className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/20"
            >
              Volver a la cartelera
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
                  {evento.tag} · {evento.fecha}
                </p>
                <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                  {evento.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
                  {evento.text}
                </p>
                <p className="mt-6 font-bold text-cyan-100">
                  📍 {evento.lugar}
                </p>
              </div>

              <div className="overflow-hidden rounded-[26px] bg-white/10 p-3 shadow-2xl ring-1 ring-white/20">
                <img
                  src={evento.image}
                  alt={`Afiche de ${evento.title}`}
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[920px] px-6 py-12">
          <article className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10">
            <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-6 text-sm font-bold text-slate-600">
              <span>Fecha del evento: {evento.fecha}</span>
              <span>Publicado por la Municipalidad de El Tabo</span>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
              {evento.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/eventos"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-md transition hover:bg-blue-800"
              >
                Ver todos los eventos
              </Link>
              <a
                href={evento.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Ver publicación original del evento (se abre en una nueva pestaña)"
                className="rounded-full bg-slate-100 px-6 py-3 text-sm font-black text-[#00174a] ring-1 ring-slate-200"
              >
                Ver publicación original ↗
              </a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
