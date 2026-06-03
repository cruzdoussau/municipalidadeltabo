import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const intro = [
  "El Consejo Comunal de Seguridad Pública de El Tabo es un órgano colegiado de carácter consultivo y vinculante, cuyo objetivo principal es coordinar y articular las acciones de seguridad pública en la comuna.",
  "Promueve el trabajo interinstitucional y la participación ciudadana para prevenir delitos, mejorar la percepción de seguridad y fortalecer las redes comunitarias.",
];

const objectives = [
  "Diseñar, implementar y evaluar el Plan Comunal de Seguridad Pública.",
  "Coordinar esfuerzos entre el municipio, instituciones públicas y la comunidad.",
  "Promover la participación ciudadana en materia de seguridad.",
  "Monitorear y evaluar el impacto de las acciones implementadas.",
];

const members = [
  "Alcalde de El Tabo (Presidente).",
  "Representantes de las policías (Carabineros de Chile y Policía de Investigaciones).",
  "Representantes del Poder Judicial.",
  "Representantes de organizaciones comunitarias.",
  "Representantes de instituciones educativas.",
  "Miembros del Concejo Municipal.",
  "Profesionales del área social y comunitaria.",
  "Representantes de organizaciones sociales.",
];

const functions = [
  "Analizar la situación de seguridad en la comuna.",
  "Establecer prioridades en materia de seguridad pública.",
  "Coordinar acciones interinstitucionales.",
  "Supervisar la implementación del Plan Comunal de Seguridad Pública.",
  "Evaluar periódicamente los resultados obtenidos.",
  "Proponer ajustes y mejoras al plan según sea necesario.",
  "Fomentar la participación ciudadana en iniciativas de prevención.",
];

const mechanisms = [
  "Sesiones ordinarias mensuales.",
  "Comisiones temáticas de trabajo.",
  "Mesas técnicas especializadas.",
  "Instancias de diálogo con la comunidad.",
  "Sistemas de monitoreo y evaluación permanente.",
];

const priorityAreas = [
  "Prevención del Robo en Lugar Habitado.",
  "Combate al Robo con Violencia o Intimidación.",
  "Abordaje de la Violencia Intrafamiliar.",
];

const expectedResults = [
  "Reducción de índices delictuales.",
  "Mayor percepción de seguridad en la comunidad.",
  "Mejor coordinación entre instituciones.",
  "Fortalecimiento de redes comunitarias.",
  "Implementación efectiva de medidas preventivas.",
];

const metrics = [
  { value: "4", label: "Objetivos principales" },
  { value: "8", label: "Actores representados" },
  { value: "3", label: "Áreas prioritarias" },
];

export const metadata: Metadata = {
  title: "Consejo Comunal de Seguridad Pública | Municipalidad de El Tabo",
  description:
    "Consejo Comunal de Seguridad Pública de la Municipalidad de El Tabo.",
};

function ListCard({
  title,
  eyebrow,
  items,
  ordered = false,
}: {
  title: string;
  eyebrow: string;
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-black text-[#0b274e]">{title}</h2>
      </div>

      <Tag className="grid gap-3 p-6">
        {items.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[42px_1fr] gap-4 rounded-lg bg-[#f8fbff] p-4"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
              {ordered ? index + 1 : "•"}
            </span>
            <p className="pt-1 text-base leading-7 text-[#2a3650]">{item}</p>
          </li>
        ))}
      </Tag>
    </article>
  );
}

export default function ConsejoComunalSeguridadPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/ccsp/consejo-comunal-seguridad-publica.jpg"
              alt="Consejo Comunal de Seguridad Pública de El Tabo"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#143c74]/75" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Seguridad pública
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Consejo Comunal de Seguridad Pública
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Coordinación municipal, instituciones públicas y comunidad para
                fortalecer la prevención y la seguridad en El Tabo.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <img
                src="/images/ccsp/consejo-comunal-seguridad-publica.jpg"
                alt="Sesión del Consejo Comunal de Seguridad Pública"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <span className="text-5xl font-black leading-none text-[#0b274e]">
                  {metric.value}
                </span>
                <h2 className="mt-3 text-lg font-black leading-tight text-[#0b274e]">
                  {metric.label}
                </h2>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Propósito
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Una mesa comunal para articular prevención, respuesta y
                participación.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-white/88">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <ListCard
                eyebrow="Plan comunal"
                title="Objetivos principales"
                items={objectives}
              />

              <ListCard
                eyebrow="Composición"
                title="Integrantes"
                items={members}
              />

              <ListCard
                eyebrow="Gestión"
                title="Funciones principales"
                items={functions}
                ordered
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-3">
              <ListCard
                eyebrow="Trabajo"
                title="Mecanismos"
                items={mechanisms}
              />
              <ListCard
                eyebrow="Foco"
                title="Áreas prioritarias"
                items={priorityAreas}
                ordered
              />
              <ListCard
                eyebrow="Impacto"
                title="Resultados esperados"
                items={expectedResults}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
