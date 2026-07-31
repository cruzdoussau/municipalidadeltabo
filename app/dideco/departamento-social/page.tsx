import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/dideco/hero-departamento-social.jpg";

const description =
  "El Departamento Social es parte de la Dirección de Desarrollo Comunitario. Diariamente contribuye al mejoramiento de la calidad de vida de los habitantes de El Tabo que se encuentran en estado de indigencia, vulnerabilidad y/o necesidad manifiesta, promoviendo la corresponsabilidad como mecanismo de inclusión, movilidad y desarrollo social.";

const contact = [
  { label: "Jefa Departamento Social", value: "Carolina Fuentes Navarro" },
  {
    label: "Correo electrónico",
    value: "jefadepartamentosocial@eltabo.cl",
    href: "mailto:jefadepartamentosocial@eltabo.cl",
  },
  { label: "Asistencia Social", value: "+56 35 220 3560 / +56 35 220 3503" },
  { label: "Prestaciones Monetarias", value: "+56 35 220 3559" },
];

const highlights = [
  {
    title: "Asistencia social",
    text: "Atención personalizada e integral para personas y familias que requieren apoyo.",
  },
  {
    title: "Prestaciones",
    text: "Orientación para postulación a beneficios y red asistencial del Estado.",
  },
  {
    title: "Promoción social",
    text: "Acciones orientadas a superar pobreza, vulnerabilidad y necesidad manifiesta.",
  },
];

const accordions = [
  {
    title: "Líneas de trabajo",
    details: [
      "Producción y administración de la información mediante el Registro Social de Hogares y respaldo de atenciones entregadas.",
      "Administración de la red asistencial del Estado mediante postulación a prestaciones monetarias como Subsidio Único Familiar, Subsidio de Agua Potable, Pensión Garantizada Universal y entrega de ayuda social municipal acorde al reglamento de ayudas sociales.",
      "Acciones de promoción social con personas y familias atendidas, entrega de ayuda social, elaboración de informes sociales y evaluación realizada por profesionales del Departamento Social.",
    ],
  },
  {
    title: "Misión y visión",
    details: [
      "Misión: contribuir a que las personas que habitan la comuna de El Tabo accedan a condiciones que les permitan mejorar su calidad de vida, así como también la de sus familias y la comunidad.",
      "Visión: entregar una atención social de calidad e integral, priorizando recursos hacia personas y familias en situación de pobreza, vulnerabilidad social o necesidad manifiesta, mediante la red asistencial del Estado y recursos locales.",
    ],
  },
  {
    title: "Equipo de trabajo",
    details: [
      "El equipo está compuesto por seis trabajadores sociales y dos apoyos administrativos.",
      "Mediante atención personalizada e integral, responden a inquietudes asociadas a asistencia social, prestaciones monetarias, aplicación del instrumento de estratificación social y sus diversos cambios.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Departamento Social | DIDECO | Municipalidad de El Tabo",
  description:
    "Departamento Social de DIDECO El Tabo: contacto, objetivo, líneas de trabajo, misión, visión, prestaciones y asistencia social.",
};

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <article className="rounded-xl border border-[#e4ebf4] bg-white p-5 shadow-sm">
      <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
      <h3 className="mt-4 text-lg font-black leading-tight text-[#0b274e]">
        {label}
      </h3>
      {href ? (
        <a
          href={href}
          className="mt-3 block text-sm font-semibold leading-6 text-[#1453a4] underline"
        >
          {value}
        </a>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-600">{value}</p>
      )}
    </article>
  );
}

function AccordionBlock() {
  return (
    <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
          Objetivo del departamento
        </p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-[#0b274e]">
          Atención social y superación de vulnerabilidad
        </h2>
      </div>

      <div className="grid gap-3 p-6">
        {accordions.map((item, index) => (
          <details
            key={item.title}
            className="group rounded-lg bg-[#f8fbff] p-4 open:bg-white open:ring-1 open:ring-[#d9e6f5]"
          >
            <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_28px] gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                {index + 1}
              </span>
              <span className="pt-1 text-sm font-black leading-7 text-[#0b274e]">
                {item.title}
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e8f0fa] text-lg font-black text-[#0b274e] transition group-open:rotate-45">
                +
              </span>
            </summary>

            <ul className="ml-[58px] mt-4 grid gap-2 border-l-2 border-[#dbe8f5] pl-4">
              {item.details.map((detail) => (
                <li key={detail} className="text-sm leading-7 text-slate-600">
                  {detail}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </article>
  );
}

export default function DepartamentoSocialPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Departamento Social de DIDECO El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#6f5d78]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                DIDECO
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Departamento Social
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Atención social, orientación en beneficios y apoyo a personas y
                familias en situación de vulnerabilidad.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                {contact.slice(0, 3).map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-black text-white">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-semibold text-white/90 underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-white/90">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#0b274e]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Sobre el departamento
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Contribuir a superar pobreza y condiciones de vulnerabilidad.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/90">
                {description}
              </p>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Datos de contacto
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Departamento Social
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <AccordionBlock />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
