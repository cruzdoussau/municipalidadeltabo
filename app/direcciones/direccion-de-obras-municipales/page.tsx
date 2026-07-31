import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage =
  "/images/direccion-obras-municipales/hero-direccion-obras-municipales.jpg";

const description =
  "La Unidad de Obras Municipales (DOM) es un pilar fundamental en el desarrollo y crecimiento urbanístico de la comunidad. Su función es velar por el cumplimiento de la Ley General de Urbanismo y Construcciones, el plan regulador comunal y las ordenanzas correspondientes.";

const contact = [
  { label: "Directora", value: "Patricia Miranda Barra" },
  {
    label: "Correo DOM",
    value: "obras@eltabo.cl",
    href: "mailto:obras@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3508" },
];

const schedules = [
  {
    title: "Atención ventanilla DOM",
    details: [
      "Recepción y retiro de documentos.",
      "Lunes a viernes de 08:30 a 14:00 hrs. y sábados de 09:00 a 13:00 hrs.",
      "Contacto Secretaría DOM: obras@eltabo.cl / +56 35 220 3508.",
    ],
  },
  {
    title: "Atención de expedientes DOM",
    details: [
      "Miércoles y viernes de 09:00 a 13:30 hrs.",
      "Contacto Arquitecta revisora: fernanda.perez@eltabo.cl.",
    ],
  },
  {
    title: "Atención de inspecciones y reclamos",
    details: [
      "Lunes y jueves de 09:00 a 13:30 hrs.",
      "Contacto Profesional DOM: carla.espinoza@eltabo.cl.",
    ],
  },
  {
    title: "Atención Transparencia DOM",
    details: [
      "Lunes a viernes de 08:30 a 14:00 hrs.",
      "Contacto Técnico DOM, María Jesús Santibañez: +56 35 220 3504.",
    ],
  },
  {
    title: "Atención SII",
    details: [
      "Lunes a viernes de 08:30 a 14:00 hrs.",
      "Contacto Profesional SII: paola.gamonal@eltabo.cl.",
    ],
  },
];

const highlights = [
  {
    title: "Normativa urbana",
    text: "Aplicación de la Ley General de Urbanismo y Construcciones, OGUC, plan regulador y ordenanzas.",
  },
  {
    title: "Permisos y certificados",
    text: "Revisión de expedientes, certificados, permisos de edificación y trámites asociados a predios.",
  },
  {
    title: "Territorialidad",
    text: "Gestión del PRC, control de uso de suelo y orientación para proyectos urbanos.",
  },
];

const constructionFunctions = [
  {
    title: "Funciones principales del Departamento",
    details: [
      "Revisar y aprobar proyectos de construcción.",
      "Evaluar planos y documentos técnicos presentados por arquitectos, ingenieros y constructores civiles.",
      "Verificar cumplimiento de OGUC, reglamento de seguridad de edificios y normas locales de zonificación y uso de suelo.",
      "Fiscalizar obras y gestionar recepciones finales.",
    ],
  },
  {
    title: "Documentación requerida para trámites de construcción",
    details: [
      "Planos arquitectónicos y estructurales firmados por profesional habilitado.",
      "Memoria de cálculo con detalles técnicos de la estructura.",
      "Certificado de idoneidad del terreno emitido por geotecnista.",
      "Declaración de Impacto Ambiental, si aplica según la escala del proyecto.",
      "Certificado de Información Municipal para verificar compatibilidad con el plan regulador.",
      "Pago de derechos municipales por revisión y aprobación del proyecto.",
    ],
  },
  {
    title: "Funciones principales de la Oficina Técnica",
    details: [
      "Revisar y aprobar proyectos de construcción.",
      "Garantizar el cumplimiento de normativas técnicas y urbanísticas.",
      "Supervisar y fiscalizar obras en terreno.",
      "Brindar asesoría técnica a ciudadanos y profesionales.",
      "Gestionar documentación técnica de los proyectos.",
      "Participar en la recepción final de obras.",
    ],
  },
];

const territorialidad = [
  {
    title: "Gestión del Plano Regulador Comunal (PRC)",
    details: [
      "Interpretar el PRC y aplicar zonificaciones para determinar usos permitidos de cada terreno.",
      "Participar en procesos de modificación o actualización del plan regulador junto a organismos como MINVU.",
      "Gestionar participación ciudadana en cambios al PRC.",
    ],
  },
  {
    title: "Control del uso de suelo",
    details: [
      "Emitir Certificado de Información Municipal (CIM), indicando el uso permitido según PRC.",
      "Fiscalizar usos irregulares o no autorizados del territorio.",
      "Administrar áreas con regulaciones especiales, como zonas de protección ambiental, patrimonial o de riesgo.",
    ],
  },
];

const services = [
  {
    category: "Certificados",
    title: "Certificado de Número",
    text: "Certifica el número de una propiedad o edificación bajo rol de avalúo.",
    time: "4 días hábiles / 15 días corridos por DOM en línea.",
  },
  {
    category: "Certificados",
    title: "Certificado de Afectación",
    text: "Acredita si una propiedad tiene superficie afecta a utilidad pública o expropiación por PRC.",
    time: "4 días hábiles / 15 días corridos por DOM en línea.",
  },
  {
    category: "Certificados",
    title: "Certificado de Informaciones Previas",
    text: "Informa normas urbanísticas del PRC vigente, perfiles viales, usos de suelo y exigencias aplicables.",
    time: "4 días hábiles / 15 días por DOM en línea.",
  },
  {
    category: "Certificados",
    title: "Certificado de Vivienda Social",
    text: "Acredita que una vivienda cumple requisitos para ser considerada vivienda social.",
    time: "5 días hábiles / 15 días corridos por DOM en línea.",
  },
  {
    category: "Certificados",
    title: "Certificado de Urbanización",
    text: "Acredita que un terreno o área fue urbanizada conforme a normativas y requisitos locales.",
    time: "4 días hábiles / 15 días corridos por DOM en línea.",
  },
  {
    category: "Planos",
    title: "Plano regulador comunal y ordenanza",
    text: "Entrega copia del plano regulador en tamaño original junto a su ordenanza municipal.",
    time: "1 día.",
  },
  {
    category: "Permisos",
    title: "Obra Nueva",
    text: "Permiso asociado a una nueva edificación realizada en un predio.",
    time: "30 días.",
  },
  {
    category: "Permisos",
    title: "Obra Menor",
    text: "Modificación de edificaciones existentes y ampliaciones conforme a OGUC.",
    time: "15 días.",
  },
  {
    category: "Permisos",
    title: "Subdivisión y/o Fusión",
    text: "División de suelo sin obras de urbanización o unión de lotes colindantes.",
    time: "30 días.",
  },
  {
    category: "Permisos",
    title: "Ley 20.898",
    text: "Procedimiento simplificado para regularización de vivienda o edificación sin recepción definitiva.",
    time: "90 días hábiles.",
  },
  {
    category: "Expedientes",
    title: "Desarchivo de expediente",
    text: "Solicitud de desarchivo para revisión y consulta de expediente por dirección y rol de propiedad.",
    time: "3 días hábiles.",
  },
  {
    category: "BNUP",
    title: "Solicitud de rompimiento en BNUP",
    text: "Permiso para ocupar o romper espacio público por trabajos requeridos por residentes.",
    time: "4 días hábiles.",
  },
];

export const metadata: Metadata = {
  title: "Dirección de Obras Municipales | Municipalidad de El Tabo",
  description:
    "Dirección de Obras Municipales de El Tabo: contacto, horarios DOM, certificados, permisos, oficina técnica y territorialidad.",
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

function ServiceCard({
  category,
  title,
  text,
  time,
}: {
  category: string;
  title: string;
  text: string;
  time: string;
}) {
  return (
    <article className="rounded-xl border border-[#e4ebf4] bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-[#e8f0fa] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#0b274e]">
        {category}
      </span>
      <h3 className="mt-4 text-xl font-black leading-tight text-[#0b274e]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      <p className="mt-4 text-sm font-black text-[#2a5298]">{time}</p>
    </article>
  );
}

export default function DireccionObrasMunicipalesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Obras Municipales de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#5b5f2c]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Obras Municipales
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Desarrollo urbano, permisos, certificados, expedientes y
                fiscalización técnica para un crecimiento comunal ordenado.
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
                Sobre la dirección
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Regulación técnica para un desarrollo urbano coherente.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/90">
                {description}
              </p>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Atención DOM
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Horarios y contactos
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
                <div className="border-t border-slate-200 p-6">
                  <AccordionBlock
                    eyebrow="Ventanilla y atención"
                    title="Canales de atención"
                    items={schedules}
                  />
                </div>
              </article>

              <AccordionBlock
                eyebrow="Construcción"
                title="Departamento de Construcción"
                items={constructionFunctions}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                Trámites y servicios
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                Solicitudes frecuentes
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={`${service.category}-${service.title}`} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Oficina Técnica
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Revisión y fiscalización especializada
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                La Oficina Técnica del Departamento de Construcción lleva a cabo
                tareas técnicas especializadas para garantizar que los proyectos
                cumplan normativas legales, urbanísticas y de seguridad.
              </p>
            </article>

            <AccordionBlock
              eyebrow="Territorialidad"
              title="Oficina de Territorialidad"
              items={territorialidad}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
