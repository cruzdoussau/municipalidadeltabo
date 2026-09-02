import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getNews, getNewsBySlug } from "@/lib/news-store";

export default async function NoticiaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noticia = await getNewsBySlug(slug);

  if (!noticia) {
    notFound();
  }

  const latest = (await getNews())
    .filter((item) => item.slug !== noticia.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f8fb] text-slate-800">
        <section className="bg-[#001b4f] px-6 py-14 text-white">
          <div className="mx-auto max-w-[1120px]">
            <Link
              href="/noticias"
              className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/20"
            >
              Volver a noticias
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_460px] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
                  {noticia.category}
                </p>
                <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                  {noticia.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
                  {noticia.excerpt}
                </p>
              </div>

              <div className="overflow-hidden rounded-[26px] bg-white/10 shadow-2xl ring-1 ring-white/20">
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1120px] gap-8 px-6 py-12 lg:grid-cols-[1fr_320px]">
          <article className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-10">
            <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-6 text-sm font-bold text-slate-600">
              <span>Publicado: {noticia.date}</span>
              <span>Autor: {noticia.author}</span>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
              {noticia.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {noticia.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                Newsletter municipal
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#00174a]">
                Información oficial para la comunidad
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Esta publicación reúne los antecedentes principales, fechas y
                llamados relevantes para vecinas y vecinos de El Tabo.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-black text-[#00174a]">
                Últimas noticias
              </h2>
              <div className="mt-4 space-y-4">
                {latest.map((item) => (
                  <Link
                    key={item.id}
                    href={`/noticias/${item.slug}`}
                    className="block rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50"
                  >
                    <p className="text-xs font-black uppercase text-blue-700">
                      {item.date}
                    </p>
                    <p className="mt-1 font-black leading-snug text-[#00174a]">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
