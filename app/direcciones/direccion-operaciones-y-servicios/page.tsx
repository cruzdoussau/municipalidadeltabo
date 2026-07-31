import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage =
  "/images/direccion-operaciones-servicios/hero-direccion-operaciones-servicios.jpg";

const description =
  "La Dirección de Operaciones y Servicios de la comuna de El Tabo juega un rol crucial en la gestión de residuos y el mantenimiento de la limpieza comunal. Su objetivo fundamental es mantener la comuna libre de residuos, articulando servicios operativos, apoyo territorial y labores de mantención en espacios públicos.";

const contact = [
  { label: "Director", value: "Jorge Ramírez Rivera" },
  {
    label: "Correo Director",
    value: "director.operaciones@eltabo.cl",
    href: "mailto:director.operaciones@eltabo.cl",
  },
  {
    label: "Correo Administrativo",
    value: "patricia.devia@eltabo.cl",
    href: "mailto:patricia.devia@eltabo.cl",
  },
  {
    label: "Correo Operaciones",
    value: "operaciones@eltabo.cl",
    href: "mailto:operaciones@eltabo.cl",
  },
  {
    label: "Entrega de agua",
    value: "entregaagua.operaciones@eltabo.cl",
    href: "mailto:entregaagua.operaciones@eltabo.cl",
  },
  {
    label: "Secretaría",
    value: "secretario.operaciones@eltabo.cl",
    href: "mailto:secretario.operaciones@eltabo.cl",
  },
  { label: "Secretaría Operaciones", value: "+56 35 220 3518" },
  { label: "Beneficio de agua", value: "+56 35 220 3574" },
  { label: "Técnico en Operaciones", value: "+56 35 220 3566" },
];

const highlights = [
  {
    title: "Limpieza comunal",
    text: "Mantención de espacios públicos y acciones para conservar un entorno limpio y agradable.",
  },
  {
    title: "Residuos domiciliarios",
    text: "Coordinación de la recolección de residuos sólidos generados en hogares.",
  },
  {
    title: "Apoyo operativo",
    text: "Servicios de cubicación, entrega de agua potable y arriendo de maquinaria.",
  },
];

const services = [
  {
    title: "Servicio de cubicaciones para retiro de escombros",
    details: [
      "Atiende necesidades de cubicación y mediciones precisas.",
      "Entrega información detallada para distintos proyectos, ayudando a tomar decisiones informadas.",
    ],
  },
  {
    title: "Recolección de residuos domiciliarios",
    details: [
      "Servicio orientado a la recolección de residuos sólidos domiciliarios.",
      "Corresponde a la basura generada en hogares producto de actividades diarias.",
    ],
  },
  {
    title: "Entrega de beneficio de agua potable",
    details: [
      "Busca asegurar acceso confiable y continuo al recurso vital del agua.",
      "Facilita la entrega de beneficios de agua mediante un proceso fluido y transparente.",
    ],
  },
  {
    title: "Arriendo de maquinarias",
    details: [
      "Dispone opciones de alquiler para proyectos que requieren maquinaria especializada.",
      "Busca garantizar equipos en óptimas condiciones y un proceso de arrendamiento eficiente.",
    ],
  },
  {
    title: "Labores de limpieza en espacios públicos",
    details: [
      "Realiza labores de limpieza en bienes nacionales de uso público.",
      "Cuida distintos puntos de la comuna para asegurar un entorno limpio y agradable.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Dirección de Operaciones y Servicios | Municipalidad de El Tabo",
  description:
    "Dirección de Operaciones y Servicios de El Tabo: contacto, recolección de residuos, cubicaciones, agua potable, maquinaria y limpieza de espacios públicos.",
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

export default function DireccionOperacionesServiciosPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Operaciones y Servicios de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#4d6573]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Operaciones y Servicios
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Gestión operativa, residuos domiciliarios, limpieza de espacios
                públicos, entrega de agua y apoyo con maquinaria.
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
                Servicios operativos para mantener la comuna limpia y funcional.
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
                    Canales de Operaciones
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <AccordionBlock
                eyebrow="Trámites y servicios"
                title="Servicios disponibles"
                items={services}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
