import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage =
  "/images/secretaria-municipal/hero-secretaria-municipal.jpeg";

const description =
  "La Secretaría Municipal depende directamente del Alcalde y está a cargo del Secretario Municipal. Su objetivo principal es otorgar carácter cierto y oficial a los actos municipales, además de velar por el resguardo y conservación de los archivos oficiales del municipio.";

const contact = [
  { label: "Contacto principal", value: "Maria Eugenia Ampuero" },
  {
    label: "Correo electrónico",
    value: "secretariamunicipal@eltabo.cl",
    href: "mailto:secretariamunicipal@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3512" },
  { label: "Teléfono alternativo", value: "+56 35 220 3507" },
];

const highlights = [
  {
    title: "Ministro de fe",
    text: "Da carácter oficial a las actuaciones municipales que correspondan.",
  },
  {
    title: "Archivo municipal",
    text: "Resguarda decretos alcaldicios, resoluciones, actas y acuerdos de concejo.",
  },
  {
    title: "Apoyo institucional",
    text: "Coordina la secretaría administrativa del alcalde y del Concejo Municipal.",
  },
];

const legalFunctions = [
  "Dirigir las actividades de secretaría administrativa del alcalde y del concejo.",
  "Desempeñarse como ministro de fe en todas las actuaciones municipales.",
  "Recibir, mantener y tramitar, cuando corresponda, la declaración de intereses establecida por la Ley N° 18.575.",
];

const units = [
  {
    title: "Secretaría Administrativa",
    details: [
      "Objetivo: desarrollar las funciones administrativas de la Secretaría Municipal y del Concejo.",
      "Daniela Silva: tramitación de decretos alcaldicios.",
      "Jessica Medina: desarrollo de la parte administrativa del Concejo.",
      "Daniela García: tramitación de correspondencia externa e interna de la unidad y decretos de pago.",
      "Constanza Vivanco González: correspondencia externa e interna, registro de organizaciones comunitarias y digitalización de la unidad.",
    ],
  },
  {
    title: "Oficina de Partes",
    details: [
      "Objetivo: recepcionar, registrar, tramitar, despachar y archivar de forma ordenada la documentación interna y externa del municipio.",
      "Juan Sartore Herman: ingreso al sistema de correspondencia externa que llega al municipio.",
      "Jorge Valenzuela Machuca: ingreso al sistema de correspondencia interna del municipio.",
    ],
  },
  {
    title: "Central Telefónica e Informaciones",
    details: [
      "Objetivo: orientar de manera telefónica y presencial a los usuarios que lo requieran.",
      "Juana Gálvez Caro: centralista.",
    ],
  },
  {
    title: "Administrativa Concejales",
    details: [
      "Objetivo: atender necesidades y mantener informados a los concejales sobre capacitaciones, documentación, invitaciones, comisiones y materias relacionadas.",
      "Claudia Fernández Ramírez: tramitación de la parte administrativa de los concejales.",
    ],
  },
];

const team = [
  "David Garate Soto: Secretario Municipal Titular.",
  "Patricio Lagos Cortés: Secretario Municipal Subrogante.",
  "Daniela Silva Plaza: Administrativa, decretos alcaldicios.",
  "Jessica Medina Velásquez: Administrativa, Concejo Municipal.",
  "Daniela García Vera: Administrativa, correspondencia y decretos de pago.",
  "Constanza Vivanco González: Administrativa, correspondencia OO.CC. y digitalización.",
  "Claudia Fernández Ramírez: Administrativa, concejales.",
  "Juan Sartore Herman: Administrativo, oficina de partes externa.",
  "Jorge Valenzuela Machuca: Administrativo, oficina de partes interna.",
  "Juana Gálvez Caro: Administrativa, central telefónica.",
];

export const metadata: Metadata = {
  title: "Secretaría Municipal | Municipalidad de El Tabo",
  description:
    "Secretaría Municipal de El Tabo: contacto, funciones legales, unidades a cargo, Oficina de Partes, central telefónica y equipo de trabajo.",
};

function AccordionBlock({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: { title: string; details: string[] }[];
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-[#0b274e]">
          {title}
        </h2>
      </div>

      <div className="grid gap-3 p-6">
        {items.map((item, index) => (
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

export default function SecretariaMunicipalPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Secretaría Municipal de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#466b72]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Secretaría Municipal
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Fe pública municipal, coordinación administrativa, archivo
                oficial y apoyo al alcalde y al Concejo Municipal.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                {contact.map((item) => (
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
                Sobre la secretaría
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Unidad clave para la validez y memoria institucional del
                municipio.
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
                    Secretaría Municipal
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Ley 18.695, artículo 20
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Funciones principales
                  </h2>
                </div>
                <ol className="grid gap-4 p-6">
                  {legalFunctions.map((item, index) => (
                    <li
                      key={item}
                      className="grid gap-4 rounded-lg bg-[#f8fbff] p-4 sm:grid-cols-[42px_1fr]"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-7 text-slate-600">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>

              <AccordionBlock
                eyebrow="Unidades a cargo"
                title="Áreas de atención y gestión"
                items={units}
              />

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Equipos de trabajo
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Funcionarios de la unidad
                  </h2>
                </div>
                <div className="grid gap-3 p-6 sm:grid-cols-2">
                  {team.map((member) => (
                    <p
                      key={member}
                      className="rounded-lg bg-[#f8fbff] p-4 text-sm leading-7 text-slate-600"
                    >
                      {member}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
