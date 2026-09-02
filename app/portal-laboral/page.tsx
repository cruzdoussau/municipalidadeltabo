"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Oferta = {
  id: string;
  cargo: string;
  area: string;
  fechaPublicacion: string;
  postulacion: string;
  correo: string;
  asunto: string;
  estado: "Abierta" | "Cerrada";
  resumen: string;
  funciones: string[];
  image: string;
};

const documentos = [
  "Currículum Vitae actualizado.",
  "Copia de cédula de identidad por ambos lados.",
  "Certificado de título profesional.",
  "Certificados que acrediten experiencia laboral.",
  "Certificados de capacitaciones y/o perfeccionamientos, si corresponde.",
  "Certificado de antecedentes para fines especiales.",
];

const ofertas: Oferta[] = [
  {
    id: "direccion-juridica-abogado",
    cargo: "Abogado/a",
    area: "Dirección Jurídica",
    fechaPublicacion: "24 de agosto de 2026",
    postulacion: "Desde el 24 al 28 de agosto de 2026, hasta las 00:00 horas.",
    correo: "juridico@eltabo.cl",
    asunto: "Postulación Abogado/a Dirección Jurídica",
    estado: "Cerrada",
    resumen:
      "Profesional del Derecho para brindar apoyo y asesoría jurídica en materias relacionadas con la gestión municipal.",
    funciones: [
      "Analizar y emitir pronunciamientos jurídicos.",
      "Elaborar y revisar actos administrativos.",
      "Revisar contratos y convenios.",
      "Colaborar en la elaboración de ordenanzas, decretos y otros instrumentos jurídicos.",
      "Apoyar jurídicamente la gestión municipal.",
    ],
    image: "/images/portal-laboral/oferta-direccion-juridica-abogado.jpg",
  },
  {
    id: "programa-familias-afi",
    cargo: "Apoyo Familiar Integral",
    area: "Programa Familias",
    fechaPublicacion: "12 de julio de 2026",
    postulacion: "Desde el 13 al 17 de julio de 2026, hasta las 14:00 horas.",
    correo: "programafamilias@eltabo.cl",
    asunto: "concurso AFI",
    estado: "Cerrada",
    resumen:
      "Profesional o técnico del área de las ciencias sociales para desempeñarse como Apoyo Familiar Integral en la comuna.",
    funciones: [
      "Acompañar procesos familiares del Subsistema Seguridad y Oportunidades.",
      "Realizar intervención social y seguimiento territorial.",
      "Coordinar redes de apoyo y derivación según requerimientos del programa.",
    ],
    image: "/images/portal-laboral/oferta-programa-familias-afi.jpg",
  },
  {
    id: "programa-vinculos-psicosocial",
    cargo: "Profesional Área Psicosocial",
    area: "Programa Vínculos",
    fechaPublicacion: "3 de julio de 2026",
    postulacion: "Desde el 4 al 7 de julio de 2026.",
    correo: "liliana.leiva@eltabo.cl",
    asunto: "Postulación Profesional Área Psicosocial Programa Vínculos",
    estado: "Cerrada",
    resumen:
      "Profesional del área psicosocial para desempeñarse en el Programa Vínculos, dependiente de DIDECO.",
    funciones: [
      "Ejecutar acompañamiento psicosocial a personas usuarias del programa.",
      "Apoyar la intervención social vinculada al Subsistema Seguridad y Oportunidades.",
      "Coordinar acciones con equipos municipales y redes comunitarias.",
    ],
    image: "/images/portal-laboral/oferta-programa-vinculos-psicosocial.jpg",
  },
];

function buildMailto(oferta: Oferta) {
  const body = [
    `Postulación al cargo: ${oferta.cargo}`,
    `Área: ${oferta.area}`,
    "",
    "Datos del postulante:",
    "Nombre:",
    "RUT:",
    "Teléfono:",
    "Correo:",
    "",
    "Documentos que debe adjuntar:",
    ...documentos.map((item) => `- ${item}`),
  ].join("\n");

  return `mailto:${oferta.correo}?subject=${encodeURIComponent(
    oferta.asunto,
  )}&body=${encodeURIComponent(body)}`;
}

export default function PortalLaboralPage() {
  const [selectedId, setSelectedId] = React.useState(ofertas[0].id);
  const selected = ofertas.find((oferta) => oferta.id === selectedId) ?? ofertas[0];

  const scrollToForm = (id: string) => {
    setSelectedId(id);
    window.setTimeout(() => {
      document
        .getElementById("postulacion")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailto(selected);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#071f4a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/portal-laboral/oferta-direccion-juridica-abogado.jpg"
              alt="Portal laboral Municipalidad de El Tabo"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#0b4ca8]/88 to-[#00a6d6]/62" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Municipalidad de El Tabo
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Portal Laboral
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Revisa convocatorias municipales, requisitos de postulación y
                prepara tus antecedentes para participar en los procesos
                disponibles.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("ofertas")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-full bg-white px-7 py-4 text-sm font-black text-[#061b3d] shadow-lg transition hover:bg-[#ffd44d]"
                >
                  Ver ofertas
                </button>
                <Link
                  href="/dideco/desarrollo-economico-local/omil"
                  className="rounded-full bg-[#0d5db8] px-7 py-4 text-center text-sm font-black text-white shadow-lg ring-1 ring-white/20 transition hover:bg-[#09498f]"
                >
                  Ir a OMIL
                </Link>
              </div>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Postulación
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Adjunta tus documentos y envía tus antecedentes al correo del
                proceso.
              </h2>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-white/90">
                {documentos.slice(0, 4).map((item) => (
                  <p key={item} className="rounded-lg bg-white/10 px-4 py-3">
                    {item}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="ofertas" className="mx-auto max-w-[1160px] scroll-mt-32 px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <aside className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Documentos requeridos
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e]">
                Antecedentes para postular
              </h2>
              <ul className="mt-6 grid gap-3">
                {documentos.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[#e2eaf4] bg-[#f8fbff] px-4 py-3 text-sm font-semibold leading-6 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Convocatorias
                </p>
                <h2 className="mt-2 text-4xl font-black text-[#0b274e]">
                  Ofertas laborales publicadas
                </h2>
              </div>

              <div className="grid gap-6">
                {ofertas.map((oferta) => (
                  <article
                    key={oferta.id}
                    className="grid overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 md:grid-cols-[260px_1fr]"
                  >
                    <div className="relative min-h-[260px] bg-slate-200">
                      <img
                        src={oferta.image}
                        alt={oferta.cargo}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#0b274e] px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                          {oferta.estado}
                        </span>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                          {oferta.fechaPublicacion}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-black leading-tight text-[#0b274e]">
                        {oferta.cargo}
                      </h3>
                      <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-[#2a5298]">
                        {oferta.area}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {oferta.resumen}
                      </p>

                      <details className="mt-5 rounded-lg bg-[#f8fbff] p-4">
                        <summary className="cursor-pointer text-sm font-black text-[#0b274e]">
                          Ver funciones y periodo
                        </summary>
                        <p className="mt-3 text-sm font-semibold text-slate-700">
                          Postulación: {oferta.postulacion}
                        </p>
                        <ul className="mt-3 grid gap-2 border-l-2 border-[#dbe8f5] pl-4">
                          {oferta.funciones.map((item) => (
                            <li key={item} className="text-sm leading-6 text-slate-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </details>

                      <button
                        type="button"
                        onClick={() => scrollToForm(oferta.id)}
                        className="mt-5 rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white shadow-md transition hover:bg-blue-800"
                      >
                        Postular a esta oferta
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="postulacion" className="bg-white py-12 md:py-16">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Formulario
              </p>
              <h2 className="mt-2 text-4xl font-black leading-tight text-[#0b274e]">
                Preparar postulación
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Selecciona la oferta, completa tus datos y adjunta los
                antecedentes solicitados. El envío se prepara para el correo
                oficial indicado en cada convocatoria.
              </p>
              <div className="mt-6 rounded-xl bg-[#0b274e] p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                  Oferta seleccionada
                </p>
                <h3 className="mt-3 text-2xl font-black">{selected.cargo}</h3>
                <p className="mt-2 text-sm font-semibold text-white/85">
                  {selected.area} · {selected.correo}
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[#e2eaf4] bg-[#f8fbff] p-6 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-black text-[#0b274e] sm:col-span-2">
                  Oferta laboral
                  <select
                    value={selectedId}
                    onChange={(event) => setSelectedId(event.target.value)}
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none ring-blue-200 transition focus:ring-4"
                  >
                    {ofertas.map((oferta) => (
                      <option key={oferta.id} value={oferta.id}>
                        {oferta.cargo} - {oferta.area}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-black text-[#0b274e]">
                  Nombre completo
                  <input
                    required
                    name="nombre"
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold outline-none ring-blue-200 transition focus:ring-4"
                  />
                </label>

                <label className="grid gap-2 text-sm font-black text-[#0b274e]">
                  RUT
                  <input
                    required
                    name="rut"
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold outline-none ring-blue-200 transition focus:ring-4"
                  />
                </label>

                <label className="grid gap-2 text-sm font-black text-[#0b274e]">
                  Correo
                  <input
                    required
                    type="email"
                    name="correo"
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold outline-none ring-blue-200 transition focus:ring-4"
                  />
                </label>

                <label className="grid gap-2 text-sm font-black text-[#0b274e]">
                  Teléfono
                  <input
                    required
                    name="telefono"
                    className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold outline-none ring-blue-200 transition focus:ring-4"
                  />
                </label>
              </div>

              <div className="mt-6 grid gap-4">
                {documentos.map((item) => (
                  <label
                    key={item}
                    className="grid gap-2 rounded-lg border border-[#e2eaf4] bg-white p-4 text-sm font-black text-[#0b274e]"
                  >
                    {item}
                    <input
                      type="file"
                      className="text-sm font-semibold text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-700 file:px-4 file:py-2 file:text-sm file:font-black file:text-white"
                    />
                  </label>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="rounded-full bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-md transition hover:bg-blue-800"
                >
                  Preparar envío
                </button>
                <a
                  href={buildMailto(selected)}
                  className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-[#0b274e] shadow-sm ring-1 ring-slate-200 transition hover:bg-blue-50"
                >
                  Escribir al correo
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
