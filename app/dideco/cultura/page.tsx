import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/dideco/hero-cultura.png";

const description =
  "El objetivo del Departamento de Cultura de la Municipalidad de El Tabo es fortalecer la identidad territorial y fomentar la creatividad en la formación artística, mediante talleres, capacitaciones y actividades artístico-culturales para todos los habitantes de la comuna.";

const contact = [
  { label: "Encargada", value: "Ximena Reyes Hinojosa" },
  {
    label: "Correo Cultura",
    value: "cultura@eltabo.cl",
    href: "mailto:cultura@eltabo.cl",
  },
  {
    label: "Centro Cultural Nicanor Parra",
    value: "centroculturalnicanorparra@eltabo.cl",
    href: "mailto:centroculturalnicanorparra@eltabo.cl",
  },
  {
    label: "Administración Cultura",
    value: "administrativacultura@eltabo.cl",
    href: "mailto:administrativacultura@eltabo.cl",
  },
  { label: "Lunes a jueves", value: "08:30 a 17:30 horas" },
  { label: "Viernes", value: "08:30 a 16:30 horas" },
];

const highlights = [
  {
    title: "Identidad local",
    text: "Puesta en valor del patrimonio, la tradición local y el legado cultural del territorio.",
  },
  {
    title: "Formación artística",
    text: "Talleres, capacitaciones y proyectos que promueven hábitos artístico-culturales.",
  },
  {
    title: "Participación",
    text: "Acciones culturales con enfoque territorial, comunitario e inclusivo.",
  },
];

const objectiveItems = [
  "Patrimonio e identidad local: fomentar la salvaguarda del patrimonio, la identidad y la tradición local.",
  "Capacitación y formación: promover la formación continua de hábitos artísticos-culturales en la comuna.",
  "Gestión cultural territorial: estimular y promover la participación comunitaria con enfoque identitario y descentralizado.",
  "Espacios culturales: impulsar la construcción, ampliación y habilitación de infraestructura y equipamiento para el desarrollo cultural.",
];

const accordions = [
  {
    title: "Objetivos específicos",
    details: objectiveItems,
  },
  {
    title: "Desarrollo de proyectos de formación",
    details: [
      "Promueve proyectos de formación que salvaguarden y evolucionen las diversas expresiones artísticas presentes en la comunidad.",
      "La educación artística es entendida como una herramienta esencial para preservar y proyectar la cultura local.",
    ],
  },
  {
    title: "Fortalecimiento de la creación y nuevas iniciativas",
    details: [
      "Apoya la creación y generación de nuevas iniciativas culturales.",
      "Contribuye al desarrollo local y ofrece plataformas para que las expresiones culturales puedan florecer.",
    ],
  },
  {
    title: "Ampliación de espacios públicos para la expresión cultural",
    details: [
      "Genera y promueve espacios públicos para la expresión cultural.",
      "Busca enriquecer la oferta cultural y brindar oportunidades para que las personas participen y compartan sus expresiones.",
    ],
  },
  {
    title: "Ejecución del Plan Municipal de Cultura",
    details: [
      "Actualmente se ejecuta el primer Plan Municipal de Cultura de El Tabo para el período 2022-2025.",
      "Su visión es posicionar a El Tabo como centro de desarrollo con identidad artística, cultural y patrimonial en el Litoral de los Poetas.",
    ],
  },
];

const dependencies = [
  {
    title: "Casa de Cultura de El Tabo",
    details: [
      "Espacio para exposiciones artísticas, talleres, reuniones comunitarias y municipales.",
      "Dirección: Poeta Jonás 85, El Tabo.",
    ],
  },
  {
    title: "Centro Cultural Nicanor Parra",
    details: [
      "Espacio para exposiciones artísticas, talleres, reuniones comunitarias y municipales.",
      "Dirección: José Dolores Tobar 901, Las Cruces.",
    ],
  },
  {
    title: "Casa Cultura Gustavo Frías Reyes",
    details: [
      "Casa museo donde se da a conocer la vida y obra del artista mediante objetos significativos.",
      "Dirección: Ignacio Carrera Pinto 575, Las Cruces.",
    ],
  },
  {
    title: "Biblioteca de Las Cruces",
    details: [
      "Facilita computadores, impresiones y fotocopias a usuarios y estudiantes que lo requieran.",
      "Dirección: Ignacio Carrera Pinto 496, Las Cruces.",
    ],
  },
  {
    title: "Biblioteca Pública Daniel de la Vega",
    details: [
      "Biblioteca equipada con Biblioredes, computadores, impresiones y fotocopias.",
      "Dirección: Poeta Jonás 85, El Tabo.",
    ],
  },
];

const visionMission = [
  {
    title: "Visión",
    details: [
      "Que El Tabo sea reconocido como un polo central de desarrollo con identidad artística, cultural y patrimonial en la región.",
      "Resaltar la diversidad de expresiones artísticas y sociales, así como el legado cultural ancestral del territorio.",
    ],
  },
  {
    title: "Misión",
    details: [
      "Ser un facilitador para el desarrollo de estrategias, habilidades y expresiones presentes en la comuna.",
      "Promover la cultura como derecho de participación e inclusión, la formación de audiencias, la protección del medio ambiente, la descentralización de acciones y la valorización del patrimonio local e interculturalidad de pueblos originarios.",
    ],
  },
  {
    title: "Proyectos y actividades relevantes",
    details: [
      "Cine en Tu Barrio.",
      "Expo de Pueblos Originarios.",
      "Feria Literaria Las Cruces.",
      "Fiesta de San Pedro.",
      "Talleres Artísticos Culturales.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Departamento de Cultura | DIDECO | Municipalidad de El Tabo",
  description:
    "Departamento de Cultura de DIDECO El Tabo: contacto, horarios, objetivos, dependencias, misión, visión, proyectos y actividades culturales.",
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
          className="mt-3 block break-words text-sm font-semibold leading-6 text-[#1453a4] underline"
        >
          {value}
        </a>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-600">{value}</p>
      )}
    </article>
  );
}

function AccordionBlock({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; details: string[] }[];
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-[#0b274e]">
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

export default function CulturaPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Departamento de Cultura de El Tabo"
              className="h-full w-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/88 to-[#6f4f79]/62" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                DIDECO
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Departamento de Cultura
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Identidad territorial, formación artística y participación
                cultural para la comunidad de El Tabo.
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
                        className="break-words text-base font-semibold text-white/90 underline"
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
                Sobre Cultura
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Cultura como identidad, patrimonio y participación comunitaria.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-white/90">
                <p>{description}</p>
                <p>
                  El Tabo busca proyectarse como una comuna reconocida por su
                  multisectorialidad y como polo central de desarrollo con
                  identidad artística, cultural y patrimonial en el Litoral de
                  los Poetas.
                </p>
              </div>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Datos de contacto
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Departamento de Cultura
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <AccordionBlock
                eyebrow="Objetivos fundamentales"
                title="Trabajo cultural comunal"
                items={accordions}
              />

              <AccordionBlock
                eyebrow="Servicios y trámites"
                title="Dependencias culturales"
                items={dependencies}
              />

              <AccordionBlock
                eyebrow="Planificación cultural"
                title="Visión, misión y actividades"
                items={visionMission}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
