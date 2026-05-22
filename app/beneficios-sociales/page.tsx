"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const beneficios = [
  {
    title: "Subsidio Único Familiar",
    sigla: "SUF",
    description:
      "Beneficio estatal dirigido a familias que cumplen los requisitos establecidos, orientado a apoyar económicamente a personas causantes del subsidio.",
    icon: "👨‍👩‍👧",
    color: "bg-blue-600",
  },
  {
    title: "Subsidio de Agua Potable",
    sigla: "SAP",
    description:
      "Apoyo destinado a familias que requieren ayuda para cubrir parte del pago del consumo de agua potable y alcantarillado, según evaluación social.",
    icon: "💧",
    color: "bg-cyan-600",
  },
  {
    title: "Pensión Garantizada Universal",
    sigla: "PGU",
    description:
      "Orientación y apoyo municipal para personas mayores que requieren información o acompañamiento respecto a la Pensión Garantizada Universal.",
    icon: "👵",
    color: "bg-emerald-600",
  },
  {
    title: "Ayuda Social Municipal",
    sigla: "ASM",
    description:
      "Entrega de apoyo social municipal acorde al reglamento de ayudas sociales vigente y a la evaluación realizada por los equipos correspondientes.",
    icon: "🤝",
    color: "bg-violet-600",
  },
  {
    title: "Entrega de Agua Potable",
    sigla: "Agua",
    description:
      "Apoyo para familias vulnerables que requieren entrega de agua potable, de acuerdo con criterios sociales y disponibilidad municipal.",
    icon: "🚰",
    color: "bg-sky-600",
  },
];

const programas = [
  {
    title: "Gas al alcance de todos",
    category: "Convenio / Descuento",
    description:
      "Iniciativa que permite acceder a descuentos para la compra de cilindros de gas, orientada a vecinos y vecinas de la comuna.",
    image: "/images/beneficios-sociales/gas-lipigas.png",
    button: "Ver información",
  },
  {
    title: "Programa Acceso a la Justicia",
    category: "Orientación legal",
    description:
      "Apoyo y orientación legal en materias de derecho de familia y derecho civil, según los canales y horarios informados por el municipio.",
    image: "/images/beneficios-sociales/acceso-justicia.png",
    button: "Conocer programa",
  },
  {
    title: "Yo me controlo",
    category: "Salud comunitaria",
    description:
      "Iniciativa de coordinación de exámenes, controles y otras prestaciones de salud mediante contacto informado por WhatsApp.",
    image: "/images/beneficios-sociales/yo-me-controlo.png",
    button: "Más información",
  },
  {
    title: "Beneficios para municipios asociados",
    category: "Descuentos combustibles",
    description:
      "Beneficios y descuentos informados para vecinos/as en estaciones asociadas, según condiciones y vigencia de la promoción.",
    image: "/images/beneficios-sociales/beneficio-combustible.png",
    button: "Revisar beneficio",
  },
];

const pasos = [
  {
    title: "Consulta el beneficio",
    text: "Revisa si el apoyo social corresponde a subsidio, ayuda municipal, orientación o programa vigente.",
    icon: "🔎",
  },
  {
    title: "Reúne antecedentes",
    text: "Prepara tu cédula de identidad, Registro Social de Hogares y documentos que puedan respaldar tu situación.",
    icon: "📄",
  },
  {
    title: "Solicita orientación",
    text: "Acércate a la unidad municipal correspondiente o consulta a través de los canales de atención disponibles.",
    icon: "🏛️",
  },
  {
    title: "Evaluación social",
    text: "El equipo municipal revisará los antecedentes y determinará si corresponde entregar apoyo según normativa vigente.",
    icon: "✅",
  },
];

export default function BeneficiosSocialesPage() {
  const beneficiosRef = React.useRef<HTMLElement | null>(null);

  const scrollToBeneficios = () => {
    beneficiosRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#1e88e5] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174a]/95 via-[#0b4ca8]/85 to-[#00174a]/60" />

          <div className="relative mx-auto max-w-[1040px] px-4 py-16 md:py-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              DIDECO / Apoyo Social
            </span>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              Beneficios Sociales
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
              Conoce los principales beneficios, subsidios, programas y apoyos
              sociales disponibles para vecinos y vecinas de la comuna de El
              Tabo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={scrollToBeneficios}
                className="rounded-full bg-white px-8 py-4 font-black text-[#00174a] shadow-lg"
                type="button"
              >
                Ver beneficios disponibles
              </button>

              <button
                className="rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg ring-1 ring-white/20"
                type="button"
              >
                Solicitar orientación social
              </button>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-[1040px] px-4 py-14">
          <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  Información general
                </span>

                <h2 className="mt-4 text-3xl font-black text-[#00174a]">
                  ¿Qué son los beneficios sociales municipales?
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700">
                  <p>
                    Los beneficios sociales son apoyos, subsidios, programas u
                    orientaciones que buscan acompañar a familias, personas
                    mayores, niños, niñas, cuidadores y vecinos que requieren
                    asistencia o información para mejorar su calidad de vida.
                  </p>

                  <p>
                    La Municipalidad, a través de sus equipos sociales, orienta
                    y apoya la postulación o acceso a beneficios como el Subsidio
                    Único Familiar, Subsidio de Agua Potable, Pensión
                    Garantizada Universal y ayudas sociales municipales.
                  </p>

                  <p>
                    La entrega de cada apoyo depende de los requisitos, la
                    evaluación social, la disponibilidad y el reglamento de
                    ayudas sociales vigente.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#f6f9fe] p-6 ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-[#00174a]">
                  Antes de solicitar apoyo
                </h3>

                <ul className="mt-5 space-y-3">
                  {[
                    "Mantén actualizado tu Registro Social de Hogares.",
                    "Ten disponible tu cédula de identidad.",
                    "Reúne antecedentes que respalden tu solicitud.",
                    "Consulta previamente horarios y unidad responsable.",
                    "Considera que algunos apoyos requieren evaluación social.",
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

        {/* BENEFICIOS */}
        <section
          ref={beneficiosRef}
          className="mx-auto max-w-[1040px] scroll-mt-32 px-4 py-6"
        >
          <span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#1d4ed8]">
            Beneficios principales
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#00174a]">
            Apoyos sociales disponibles
          </h2>

          <p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-600">
            Estos son algunos de los beneficios y apoyos que pueden ser
            orientados o gestionados desde el municipio, según requisitos y
            evaluación correspondiente.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-3xl">
                    {item.icon}
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-black text-white ${item.color}`}
                  >
                    {item.sigla}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-[#00174a]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>

                <button
                  className="mt-5 rounded-full bg-blue-700 px-5 py-3 text-sm font-black text-white"
                  type="button"
                >
                  Ver requisitos →
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* PROGRAMAS DESTACADOS */}
        <section className="mx-auto max-w-[1040px] px-4 py-14">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">
            Programas y campañas
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#00174a]">
            Información destacada para la comunidad
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            Revisa campañas, convenios y programas informativos que pueden ser
            de utilidad para vecinos y vecinas de El Tabo.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {programas.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="relative h-[420px] bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-black text-[#00174a]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {item.description}
                  </p>

                  <button
                    className="mt-5 rounded-full bg-blue-700 px-5 py-3 text-sm font-black text-white"
                    type="button"
                  >
                    {item.button} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PASO A PASO */}
        <section className="mx-auto max-w-[1040px] px-4 py-6">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-yellow-700">
            Paso a paso
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#00174a]">
            ¿Cómo solicitar orientación o apoyo?
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            Antes de iniciar una solicitud, revisa este proceso general para
            preparar tus antecedentes y recibir orientación adecuada.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso) => (
              <article
                key={paso.title}
                className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <div className="text-3xl">{paso.icon}</div>

                <h3 className="mt-5 text-lg font-black text-[#00174a]">
                  {paso.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {paso.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1040px] px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                Atención social
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#00174a]">
                ¿Tienes dudas sobre un beneficio?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Puedes solicitar orientación para conocer requisitos, documentos
                necesarios, horarios de atención y unidad municipal responsable.
                La información debe ser confirmada directamente con el municipio
                antes de iniciar una solicitud.
              </p>
            </div>

            <div className="rounded-[32px] bg-gradient-to-br from-[#00174a] to-[#1649b8] p-8 text-white shadow-sm">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                DIDECO
              </span>

              <h2 className="mt-4 text-3xl font-black">
                Solicita orientación municipal
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/90">
                Revisa tus antecedentes y acércate a los canales de atención
                correspondientes para recibir apoyo según tu situación.
              </p>

              <div className="mt-8 space-y-4">
                <button
                  className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-center font-black text-[#00174a] shadow-lg"
                  type="button"
                >
                  Ver canales de atención
                </button>

                <button
                  className="flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-center font-black text-white"
                  type="button"
                >
                  Volver al inicio
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}