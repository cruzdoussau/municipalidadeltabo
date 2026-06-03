import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const intro = [
  "El Consejo de la Sociedad Civil (COSOC) de El Tabo es un órgano consultivo y de participación ciudadana establecido por ley, que representa los intereses de las organizaciones sociales de nuestra comuna ante el municipio.",
  "Este consejo actúa como espacio de diálogo y colaboración entre las organizaciones sociales y las autoridades comunales, promoviendo que vecinas y vecinos puedan aportar ideas, sugerencias y observaciones sobre materias de interés público y desarrollo comunal.",
];

const groups = [
  "Organizaciones Territoriales",
  "Organizaciones Funcionales",
  "Organizaciones de Interés Público",
];

const functions = [
  "Representar los intereses de las organizaciones sociales ante el municipio.",
  "Proponer iniciativas y proyectos para el desarrollo comunal.",
  "Ser consultados por el alcalde y el concejo municipal sobre materias relevantes.",
  "Promover la participación ciudadana en la toma de decisiones.",
  "Colaborar en la formulación de políticas públicas locales.",
];

const notes = [
  "El COSOC es presidido por el alcalde de la comuna y constituye un puente de coordinación entre la comunidad organizada y las autoridades municipales, fortaleciendo la democracia participativa en El Tabo.",
  "Esta instancia refleja el compromiso municipal con la participación ciudadana y el trabajo colaborativo en beneficio del desarrollo integral de la comuna.",
];

const highlights = [
  {
    value: "3",
    label: "Tipos de organizaciones",
    detail: "Territoriales, funcionales y de interés público.",
  },
  {
    value: "5",
    label: "Funciones principales",
    detail: "Representación, consulta, propuestas y colaboración local.",
  },
  {
    value: "1",
    label: "Espacio común",
    detail: "Un punto de encuentro entre municipio y comunidad organizada.",
  },
];

export const metadata: Metadata = {
  title: "COSOC | Municipalidad de El Tabo",
  description:
    "Consejo de la Sociedad Civil de la Municipalidad de El Tabo.",
};

export default function CosocPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/cosoc/foto-cosoc.jpg"
              alt="Consejo de la Sociedad Civil de El Tabo"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#0f6b87]/70" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Participación ciudadana
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Consejo de la Sociedad Civil
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                COSOC de El Tabo: comunidad organizada, diálogo local y
                colaboración para el desarrollo comunal.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                src="/images/cosoc/foto-cosoc.jpg"
                alt="Integrantes y representantes del COSOC"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-black leading-none text-[#0b274e]">
                    {item.value}
                  </span>
                  <h2 className="pb-1 text-lg font-black leading-tight text-[#0b274e]">
                    {item.label}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                ¿Qué es el COSOC?
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Una instancia consultiva para fortalecer la democracia local.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-white/88">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Composición
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Integración
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    El COSOC de El Tabo está conformado por representantes
                    electos de:
                  </p>
                </div>

                <div className="grid gap-4 p-6 sm:grid-cols-3">
                  {groups.map((group) => (
                    <div
                      key={group}
                      className="rounded-lg border border-[#e7edf5] bg-white p-4 shadow-sm"
                    >
                      <div className="h-1.5 w-10 rounded-full bg-[#ffd44d]" />
                      <h3 className="mt-4 text-lg font-black leading-tight text-[#0b274e]">
                        {group}
                      </h3>
                    </div>
                  ))}
                </div>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Trabajo ciudadano
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Funciones principales
                  </h2>
                </div>

                <ol className="grid gap-4 p-6">
                  {functions.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[44px_1fr] gap-4 rounded-lg bg-[#f8fbff] p-4"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-base leading-7 text-[#2a3650]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:grid-cols-[1fr_1.35fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                Comunidad organizada
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                Un puente entre organizaciones sociales y autoridades.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-8 text-slate-700">
              {notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
