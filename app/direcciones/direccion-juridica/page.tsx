import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/direccion-juridica/hero-direccion-juridica.jpg";

const description =
  "La Dirección Jurídica tiene como función principal asesorar jurídicamente al alcalde y al Concejo Municipal en la interpretación y aplicación de las normas legales y reglamentarias. Además, vela por la legalidad de los actos municipales, asegurando que las decisiones y acciones del municipio se ajusten a derecho.";

const contact = [
  { label: "Director", value: "Alejandro Sepúlveda" },
  {
    label: "Correo Dirección Jurídica",
    value: "direccionjuridica@eltabo.cl",
    href: "mailto:direccionjuridica@eltabo.cl",
  },
  {
    label: "Correo Jurídico",
    value: "juridico@eltabo.cl",
    href: "mailto:juridico@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3531" },
  { label: "Horario de atención", value: "Lunes a viernes, 08:30 a 14:00 horas." },
  {
    label: "Dirección",
    value: "Avenida Las Cruces Norte N.º 401, Las Cruces, comuna El Tabo.",
  },
];

const highlights = [
  {
    title: "Asesoría legal",
    text: "Apoyo jurídico al alcalde, Concejo Municipal y unidades municipales.",
  },
  {
    title: "Legalidad municipal",
    text: "Revisión de actos, contratos, convenios y decisiones administrativas.",
  },
  {
    title: "Control interno",
    text: "Fiscalía administrativa, revisión disciplinaria y cumplimiento normativo.",
  },
];

const serviceAreas = [
  {
    title: "Fiscalía Administrativa",
    details: [
      "Revisa procedimientos disciplinarios, denuncias internas y el cumplimiento normativo.",
      "Actúa como órgano fiscalizador interno de la municipalidad.",
      "Previene, detecta y sanciona irregularidades o infracciones administrativas.",
    ],
  },
  {
    title: "Programa de Bienes Nacionales",
    details: [
      "Administra, resguarda y regulariza terrenos fiscales de la comuna.",
      "Busca garantizar el uso adecuado y legal de dichos terrenos.",
    ],
  },
  {
    title: "Servicios jurídicos",
    details: [
      "Asesoría jurídica interna.",
      "Revisión de contratos y convenios.",
      "Representación jurídica del municipio.",
    ],
  },
];

const fiscaliaFunctions = [
  {
    title: "Fiscalización interna",
    details: [
      "Revisar y evaluar procedimientos administrativos, financieros y operativos.",
      "Supervisar normas de contratación pública, licitaciones, adjudicaciones y contratos.",
      "Realizar auditorías internas para detectar posibles irregularidades.",
    ],
  },
  {
    title: "Investigación de irregularidades",
    details: [
      "Analizar denuncias o sospechas de malversación, corrupción, nepotismo u otras conductas impropias.",
      "Iniciar procesos disciplinarios para determinar responsabilidades.",
      "Coordinar con organismos de control como Contraloría General de la República o Ministerio Público cuando corresponda.",
    ],
  },
  {
    title: "Asesoría jurídica fiscalizadora",
    details: [
      "Orientar técnica y legalmente a otras áreas municipales.",
      "Apoyar la elaboración de informes, dictámenes y recomendaciones para mejorar la gestión.",
    ],
  },
  {
    title: "Prevención de irregularidades",
    details: [
      "Capacitar a funcionarios sobre cumplimiento normativo y ética pública.",
      "Diseñar políticas y protocolos preventivos para evitar prácticas irregulares.",
    ],
  },
  {
    title: "Rendición de cuentas y transparencia",
    details: [
      "Contribuir a procesos de rendición de cuentas del municipio.",
      "Promover que la información fiscal y administrativa sea accesible y comprensible para la ciudadanía.",
    ],
  },
  {
    title: "Apoyo en litigios y reclamaciones",
    details: [
      "Defender intereses municipales en reclamos o demandas administrativas.",
      "Participar en mediación o resolución de disputas internas y externas.",
    ],
  },
];

const regularizacion = [
  {
    title: "Objetivo general",
    text: "Resolver situaciones de irregularidad en terrenos y viviendas, especialmente cuando existen dificultades para obtener títulos de propiedad.",
  },
  {
    title: "Seguridad jurídica",
    text: "Facilitar que las personas obtengan títulos de propiedad legales y reduzcan riesgos de conflictos o desalojos.",
  },
  {
    title: "Inclusión social",
    text: "Ayudar al acceso a servicios básicos, beneficios públicos y posibilidades de financiamiento asociadas a la propiedad regularizada.",
  },
  {
    title: "Ordenamiento territorial",
    text: "Contribuir a una planificación comunal adecuada y evitar asentamientos irregulares.",
  },
  {
    title: "Trabajo comunitario",
    text: "Acompañar a comunidades mediante orientación, reuniones informativas y coordinación interinstitucional.",
  },
];

export const metadata: Metadata = {
  title: "Dirección Jurídica | Municipalidad de El Tabo",
  description:
    "Dirección Jurídica de El Tabo: contacto, asesoría legal, fiscalía administrativa, bienes nacionales y regularización de pequeña propiedad raíz.",
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

export default function DireccionJuridicaPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección Jurídica de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#4a3d61]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección Jurídica
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Asesoría legal, control de legalidad, fiscalía administrativa y
                apoyo jurídico para la gestión municipal.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Sobre la dirección
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Legalidad y soporte jurídico para la gestión municipal.
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
                    Atención jurídica municipal
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <AccordionBlock
                eyebrow="Áreas"
                title="Servicios y programas"
                items={serviceAreas}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:py-16 lg:grid-cols-2">
            <AccordionBlock
              eyebrow="Fiscalía Administrativa"
              title="Funciones principales"
              items={fiscaliaFunctions}
            />

            <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Propiedad raíz
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Regularización pequeña propiedad raíz
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Programa comunitario orientado a facilitar la regularización de
                terrenos y viviendas en casos con dificultades de titularidad o
                documentación legal.
              </p>
              <div className="mt-6 grid gap-4">
                {regularizacion.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg bg-[#f8fbff] p-4 ring-1 ring-[#e1e9f2]"
                  >
                    <h3 className="text-base font-black text-[#0b274e]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
