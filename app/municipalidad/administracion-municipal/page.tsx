import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const description =
  "La Administración Municipal es colaboradora directa del Alcalde en las tareas de coordinación y gestión permanente del municipio y de todas sus unidades municipales. A su vez, tiene a su cargo la Oficina de Informática, la cual cumple con asesorar en estas materias al conjunto de la organización de manera de utilizar la tecnología en beneficio del mejor funcionamiento municipal. Del mismo modo, tiene a su cargo la Oficina de Infraestructura Municipal, que se preocupa de la habilitación y mantención de recintos municipales para efectos públicos y municipales. Bajo esta coordinación también se articula la Oficina de Gabinete, vinculada a la agenda, actividades institucionales y protocolares de la Alcaldía.";

const contacts = [
  { label: "Administrador Municipal", value: "Patricio Lagos Cortes" },
  {
    label: "Correo Administración Municipal",
    value: "administradormunicipal@eltabo.cl",
    href: "mailto:administradormunicipal@eltabo.cl",
  },
  {
    label: "Correo Oficina de Informática",
    value: "soporte@eltabo.cl",
    href: "mailto:jorge.ramirez@eltabo.cl",
  },
  {
    label: "Correo Infraestructura Municipal",
    value: "miguel.herrera@eltabo.cl",
    href: "mailto:miguel.herrera@eltabo.cl",
  },
  {
    label: "Teléfonos Administración Municipal",
    value: "+56 352 203569 - +56 352 203587",
  },
  { label: "Teléfono Oficina de Informática", value: "+56 352 203522" },
  {
    label: "Teléfono Infraestructura Municipal",
    value: "+56 352 203584",
  },
];

const services = [
  "Ejercer las atribuciones que le delegue expresamente el Alcalde en conformidad con la Ley.",
  "Adoptar las providencias necesarias para el adecuado cumplimiento de las políticas, planes, programas y proyectos municipales relacionados con la gestión interna del Municipio.",
  "Colaborar con las unidades correspondientes en la preparación y elaboración de instrumentos de gestión municipal y formulación de políticas de gestión interna.",
  "Participar en la elaboración y evaluación del presupuesto y en las políticas, planes, programas y proyectos.",
  "Dictar instructivos de acuerdo a sugerencias del alcalde o por análisis del mejoramiento de la gestión municipal.",
  "Velar por la oportuna provisión de recursos computacionales en hardware, software y comunicaciones de datos necesarios para el cumplimiento del Plan Informático Municipal.",
  "Evaluar y supervisar el mantenimiento de los sistemas computacionales de las diferentes unidades municipales.",
  "Colaborar con SECPLA para la ejecución y formulación de proyectos y programas de infraestructura comunal.",
];

const activities = [
  "Coordinar y gestionar con las unidades municipales las solicitudes y requerimientos de la ciudadanía dirigidos al municipio.",
  "Colaborar en la gestión de solicitudes de información ingresadas a través de la Ley de Transparencia.",
  "Coordinar y gestionar las solicitudes de audiencia dirigidas al Administrador Municipal a través de la Plataforma Ley del Lobby.",
  "Habilitación y mantención de recintos municipales para efectos públicos y municipales.",
  "Velar por la seguridad, confiabilidad y confidencialidad de los sistemas computacionales y de la información contenida en las bases de datos municipales.",
];

const units = [
  {
    title: "Gestión municipal",
    text: "Coordina el funcionamiento interno y apoya el cumplimiento de políticas, planes y programas municipales.",
  },
  {
    title: "Oficina de Informática",
    text: "Asesora tecnológicamente a la organización y mantiene sistemas, equipos y comunicaciones de datos.",
  },
  {
    title: "Infraestructura Municipal",
    text: "Habilita y mantiene recintos municipales para su uso público e institucional.",
  },
  {
    title: "Oficina de Gabinete",
    text: "Coordina la agenda, actividades institucionales y protocolares de Alcaldía, además del vínculo con la comunidad.",
  },
];

const subpages = [
  {
    title: "Oficina de Gabinete",
    href: "/municipalidad/administracion-municipal/oficina-de-gabinete",
    text: "Programación, coordinación y supervisión de actividades de Alcaldía, comunicaciones y relaciones públicas.",
  },
  {
    title: "Oficina de Informática",
    href: "/municipalidad/administracion-municipal/oficina-de-informatica",
    text: "Gestión tecnológica municipal, soporte, sistemas, redes y servicios digitales.",
  },
];

export const metadata: Metadata = {
  title: "Administración Municipal | Municipalidad de El Tabo",
  description:
    "Información, contacto, trámites y actividades de la Administración Municipal de El Tabo.",
};

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-3">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[42px_1fr] gap-4 rounded-lg bg-[#f8fbff] p-4"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-sm leading-7 text-[#2a3650]">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export default function AdministracionMunicipalPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/administracion-municipal/hero-administracion-municipal.png"
              alt="Administración Municipal de El Tabo"
              className="h-full w-full object-cover opacity-32"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#143c74]/70" />
          </div>

          <div className="relative mx-auto max-w-[1160px] px-6 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Municipalidad
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Administración Municipal
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/92">
              Coordinación, gestión interna, apoyo tecnológico e infraestructura
              al servicio del funcionamiento municipal.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {units.map((unit) => (
              <article
                key={unit.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
                <h2 className="mt-4 text-xl font-black text-[#0b274e]">
                  {unit.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {unit.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Datos de contacto
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Canales de Administración Municipal
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-white/90">
                {contacts.map((contact) => (
                  <div key={contact.label}>
                    <p className="font-black text-white">{contact.label}</p>
                    {contact.href ? (
                      <a className="underline" href={contact.href}>
                        {contact.value}
                      </a>
                    ) : (
                      <p>{contact.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Sobre la unidad
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Coordinación permanente del municipio
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {description}
                </p>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Subunidades
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Páginas internas
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {subpages.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <h3 className="text-xl font-black text-[#0b274e]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                      <span className="mt-5 inline-flex rounded-full bg-[#0b274e] px-4 py-2 text-xs font-black text-white">
                        Ver página
                      </span>
                    </Link>
                  ))}
                </div>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Gestión interna
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Trámites y servicios
                  </h2>
                </div>
                <div className="p-6">
                  <NumberedList items={services} />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                  Actividades relevantes
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                  Apoyo directo a la ciudadanía y a las unidades municipales.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  La Administración Municipal articula requerimientos,
                  solicitudes de información, audiencias, mantención de recintos
                  y seguridad de sistemas municipales.
                </p>
              </div>
              <NumberedList items={activities} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
