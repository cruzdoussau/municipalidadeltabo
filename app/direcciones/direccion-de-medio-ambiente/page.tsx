import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage =
  "/images/direccion-medio-ambiente/hero-direccion-medio-ambiente.jpg";

const description =
  "La Dirección de Medio Ambiente, a través de sus distintos programas, gestiona y coordina actividades relacionadas con la protección y conservación del medio ambiente, el cuidado de la salud humana y la tenencia responsable de mascotas, felinos y caninos, de acuerdo a la normativa vigente.";

const contact = [
  { label: "Directora", value: "Amelia Clavijo García" },
  {
    label: "Correo",
    value: "aclavijo@eltabo.cl",
    href: "mailto:aclavijo@eltabo.cl",
  },
  { label: "Oficina Directora", value: "+56 35 220 3541" },
  { label: "Oficina Administrativa", value: "+56 35 220 3557" },
  { label: "WhatsApp Administrativo", value: "+56 9 5680 3841" },
];

const programContacts = [
  {
    title: "Programa Gestión Integral de Residuos",
    person: "Amelia Clavijo García",
    email: "lizett.hernandez@eltabo.cl",
    text: "Implementa una gestión sostenible de residuos, con reciclaje en hogares y comercios, recolección selectiva y manejo de residuos orgánicos, peligrosos y electrónicos.",
  },
  {
    title: "Programa de Zoonosis y Tenencia Responsable",
    person: "Daniela Tapia Arcos",
    email: "tenenciaresponsable@eltabo.cl",
    secondaryEmail: "carolina.martinez@eltabo.cl",
    text: "Previene y controla enfermedades transmisibles entre animales y personas, promoviendo el cuidado responsable de mascotas y el bienestar de la comunidad.",
  },
  {
    title: "Programa de Gestión Ambiental",
    person: "Juan Tomas Pérez Valdés",
    email: "gestión.ambiental@eltabo.cl",
    phone: "+56 35 220 3557",
    text: "Promueve desarrollo sustentable, políticas ambientales, educación, fiscalización y acciones para proteger el patrimonio ambiental comunal.",
  },
];

const highlights = [
  {
    title: "Protección ambiental",
    text: "Conservación del medio ambiente, biodiversidad y recursos naturales de la comuna.",
  },
  {
    title: "Residuos y reciclaje",
    text: "Gestión integral de residuos, reciclaje, operativos y reducción de impacto ambiental.",
  },
  {
    title: "Tenencia responsable",
    text: "Zoonosis, control de natalidad, atención veterinaria básica y fiscalización.",
  },
];

const objectives = [
  {
    title: "Objetivos generales",
    details: [
      "Proteger el medio ambiente.",
      "Promover el desarrollo sostenible.",
      "Reducir el impacto ambiental.",
      "Prevenir la transmisión de enfermedades zoonóticas y apoyar el control de natalidad.",
    ],
  },
  {
    title: "Objetivos específicos",
    details: [
      "Desarrollar la gestión integral de residuos.",
      "Generar procesos de conservación de recursos.",
      "Promover la reducción de emisiones.",
      "Propender a la protección de la biodiversidad comunal.",
      "Desarrollar educación y conciencia ambiental.",
      "Fomentar el cumplimiento normativo de leyes y ordenanzas municipales ambientales.",
    ],
  },
];

const residuos = [
  {
    title: "Objetivo del programa",
    details: [
      "Instaurar medidas y acciones concretas para una gestión sostenible y responsable de los residuos generados por la comuna.",
      "Reducir el impacto ambiental y maximizar el aprovechamiento de los residuos.",
      "Fomentar la reutilización y el reciclaje para reducir la cantidad de residuos generados.",
    ],
  },
  {
    title: "Identificación de residuos",
    details: [
      "Residuos orgánicos: generados por ferias libres, verdulerías y fruterías.",
      "Residuos inorgánicos: plásticos, vidrio, papel, cartón, Tetra Pak y latas de aluminio.",
      "Residuos peligrosos: baterías, aceites de vehículos y aceite de cocina.",
      "Residuos electrónicos: aparatos eléctricos y electrónicos en desuso.",
    ],
  },
  {
    title: "Iniciativas del programa",
    details: [
      "Limpia tu Patio.",
      "Reciclaje en origen de residuos inorgánicos con recolección selectiva por vivienda.",
      "Operativos de voluminosos.",
      "Reciclaje de residuos inorgánicos en locales comerciales establecidos.",
      "Reciclaje de residuos orgánicos en ferias libres, verdulerías y fruterías.",
      "Reciclaje de aceite usado de cocina.",
      "Reciclaje de ropa usada.",
    ],
  },
];

const zoonosis = [
  {
    title: "Trámites y servicios",
    details: [
      "Control de natalidad de caninos y felinos mediante esterilización y castración.",
      "Operativos de atención veterinaria básica, vacunación, desparasitación, microchip y registro en el Registro Nacional de Mascotas.",
      "Educación y concientización sobre tenencia responsable de mascotas.",
      "Fiscalización para asegurar cumplimiento de la Ley 21.020, ordenanza municipal y bienestar animal.",
    ],
  },
];

const gestionAmbiental = [
  {
    title: "Trámites y servicios",
    details: [
      "Educación y concientización ambiental para proteger recursos naturales y biodiversidad local.",
      "Limpiezas de playas y quebradas para reducir contaminación e impulsar hábitos amigables con el medio ambiente.",
      "Fiscalización de denuncias según competencias, normativas ambientales y ordenanza ambiental local.",
    ],
  },
  {
    title: "Actividades relevantes",
    details: [
      "Celebración de fechas relevantes del calendario ambiental, con acciones de cuidado, mitigación y adaptación al cambio climático.",
      "Ejecución del Nivel Intermedio del Sistema de Certificación Ambiental Municipal (SCAM).",
    ],
  },
  {
    title: "Sistema de Certificación Ambiental Municipal (SCAM)",
    details: [
      "La comuna se encuentra ejecutando el Nivel Intermedio del Sistema de Certificación Ambiental Municipal.",
      "Contacto asociado: gestion.ambiental@eltabo.cl.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Dirección de Medio Ambiente | Municipalidad de El Tabo",
  description:
    "Dirección de Medio Ambiente de El Tabo: contacto, objetivos, gestión de residuos, zoonosis, tenencia responsable y gestión ambiental.",
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
      <div className="h-1.5 w-12 rounded-full bg-[#87c56a]" />
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

export default function DireccionMedioAmbientePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Medio Ambiente de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#0b3d4a]/90 to-[#336d3b]/68" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9f26a]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Medio Ambiente
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Protección ambiental, gestión de residuos, zoonosis, tenencia
                responsable y educación ambiental para la comuna de El Tabo.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d9f26a]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                {contact.slice(0, 4).map((item) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9f26a]">
                Sobre la dirección
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Cuidado ambiental, salud humana y convivencia responsable.
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
                    Atención medioambiental
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <AccordionBlock
                eyebrow="Objetivos"
                title="Lineamientos de la dirección"
                items={objectives}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                Programas
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                Áreas de trabajo
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {programContacts.map((program) => (
                <article
                  key={program.title}
                  className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm"
                >
                  <div className="h-1.5 w-12 rounded-full bg-[#87c56a]" />
                  <h3 className="mt-4 text-xl font-black leading-tight text-[#0b274e]">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm font-black text-slate-700">
                    {program.person}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {program.text}
                  </p>
                  <a
                    href={`mailto:${program.email}`}
                    className="mt-4 block text-sm font-semibold text-[#1453a4] underline"
                  >
                    {program.email}
                  </a>
                  {program.secondaryEmail && (
                    <a
                      href={`mailto:${program.secondaryEmail}`}
                      className="mt-2 block text-sm font-semibold text-[#1453a4] underline"
                    >
                      {program.secondaryEmail}
                    </a>
                  )}
                  {program.phone && (
                    <p className="mt-2 text-sm font-semibold text-slate-600">
                      {program.phone}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <AccordionBlock
              eyebrow="Residuos"
              title="Gestión Integral de Residuos"
              items={residuos}
            />
            <AccordionBlock
              eyebrow="Zoonosis"
              title="Tenencia responsable"
              items={zoonosis}
            />
          </div>
        </section>

        <section className="bg-[#0b274e] text-white">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:py-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9f26a]">
                Gestión Ambiental
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Educación, fiscalización y certificación ambiental.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/86">
                La Dirección promueve acciones educativas, limpiezas de espacios
                naturales, fiscalización ambiental y avances en el Sistema de
                Certificación Ambiental Municipal.
              </p>
            </div>
            <div className="[&_article]:border-white/10 [&_article]:bg-white [&_article]:text-slate-800">
              <AccordionBlock
                eyebrow="Gestión"
                title="Programa de Gestión Ambiental"
                items={gestionAmbiental}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
