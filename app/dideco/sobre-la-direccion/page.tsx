import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/dideco/hero-direccion-desarrollo-comunitario.jpg";

const description =
  "La Dirección de Desarrollo Comunitario (DIDECO) es un pilar esencial en nuestra comunidad, enfocado en brindar asistencia y apoyo a personas vulnerables. Su labor se fundamenta en la idea de que los recursos y la asistencialidad son herramientas poderosas para responder a las necesidades de la comunidad.";

const contact = [
  { label: "Directora", value: "Cleria García García" },
  {
    label: "Correo electrónico",
    value: "dideco@eltabo.cl",
    href: "mailto:dideco@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3536" },
];

const highlights = [
  {
    title: "Apoyo social",
    text: "Acompañamiento y orientación para vecinos y familias que requieren asistencia.",
  },
  {
    title: "Emergencias",
    text: "Presencia activa ante necesidades urgentes y situaciones que afectan a la comunidad.",
  },
  {
    title: "Trabajo comunitario",
    text: "Coordinación de programas, equipos y acciones enfocadas en mejorar la calidad de vida.",
  },
];

const focusAreas = [
  {
    title: "Enfoque en personas vulnerables",
    details: [
      "La dirección trabaja con personas y familias vulnerables, reconociendo que la asistencia y el acceso a recursos son fundamentales para mejorar sus condiciones de vida.",
      "Su objetivo es brindar apoyo en momentos difíciles y fomentar un entorno de cuidado y ayuda mutua.",
    ],
  },
  {
    title: "Un equipo profesional y comprometido",
    details: [
      "DIDECO cuenta con trabajadores profesionales y humanos que son el corazón de la labor comunitaria.",
      "El equipo está comprometido con estar presente en emergencias y necesidades urgentes, entregando atención y soluciones efectivas.",
    ],
  },
  {
    title: "Ambiente de trabajo saludable",
    details: [
      "La dirección promueve un ambiente de trabajo sano y colaborativo dentro de sus equipos.",
      "Los funcionarios cuentan con respaldo de su jefatura para proponer ideas y ejecutar su labor de manera más efectiva.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Sobre la Dirección DIDECO | Municipalidad de El Tabo",
  description:
    "Dirección de Desarrollo Comunitario de El Tabo: contacto, enfoque de trabajo, apoyo social, equipo profesional y labor comunitaria.",
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
          Sobre la dirección
        </p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-[#0b274e]">
          Ejes de trabajo DIDECO
        </h2>
      </div>

      <div className="grid gap-3 p-6">
        {focusAreas.map((item, index) => (
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

            <div className="ml-[58px] mt-4 grid gap-3 border-l-2 border-[#dbe8f5] pl-4">
              {item.details.map((detail) => (
                <p key={detail} className="text-sm leading-7 text-slate-600">
                  {detail}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </article>
  );
}

export default function SobreDireccionDidecoPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Desarrollo Comunitario de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#5d6f78]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                DIDECO
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Desarrollo Comunitario
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Apoyo social, trabajo territorial y acompañamiento humano para
                las personas y familias de la comuna.
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
                Sobre DIDECO
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Una dirección presente para acompañar, orientar y responder.
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
                    Dirección de Desarrollo Comunitario
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-3">
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
