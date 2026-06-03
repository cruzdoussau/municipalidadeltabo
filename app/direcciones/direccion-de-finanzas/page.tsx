import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/direccion-finanzas/hero-direccion-finanzas.jpeg";

const description =
  "La Dirección de Administración y Finanzas tiene como objetivo prestar apoyo y colaborar en la gestión financiera mediante asesorías técnicas y financieras, poniendo a disposición de la repartición sistemas de información que permitan y faciliten la toma de decisiones estratégicas.";

const legalDescription =
  "También vela por la generación, captación y percepción de recursos financieros para el funcionamiento del servicio, regulados por las leyes N° 3.063 y N° 18.695 y los contenidos en leyes especiales.";

const mainContact = [
  { label: "Director", value: "Mauricio Farías Monroy" },
  {
    label: "Correo",
    value: "finanzas@eltabo.cl",
    href: "mailto:finanzas@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3520" },
];

const unitContacts = [
  {
    title: "Departamento de Rentas",
    person: "Claudia Carreño Peralta",
    email: "rentas@eltabo.cl",
    phone: "+56 35 220 3516",
  },
  {
    title: "Prevención de Riesgos",
    person: "Frank Viveros Morales",
    email: "prevencionista@eltabo.cl",
    phone: "+56 35 220 3549",
  },
  {
    title: "Adquisiciones",
    person: "Claudia Larraín Medina",
    email: "adquisiciones@eltabo.cl",
    phone: "+56 35 220 3521",
  },
  {
    title: "Tesorería",
    person: "Pedro Espinoza Cerda",
    email: "tesoreria@eltabo.cl",
    phone: "+56 35 220 3517",
  },
  {
    title: "Departamento de Personal",
    person: "Lenin Torres Vargas",
    email: "personal@eltabo.cl",
    phone: "+56 35 220 3565",
  },
  {
    title: "Encargada de Prácticas Laborales",
    person: "Giselle Ureta Hernández",
    email: "giselle.ureta@eltabo.cl",
    phone: "+56 35 220 3565",
  },
];

const managedUnits = [
  "Contabilidad",
  "Adquisiciones",
  "Tesorería y caja",
  "Rentas",
  "Personal",
  "Bodega",
  "Prevención de riesgos",
];

const focusAreas = [
  {
    title: "Gestión financiera",
    text: "Apoyo técnico para ordenar, proyectar y administrar los recursos financieros municipales.",
  },
  {
    title: "Información para decisiones",
    text: "Sistemas y antecedentes que facilitan la toma de decisiones estratégicas del municipio.",
  },
  {
    title: "Captación de recursos",
    text: "Generación, captación y percepción de recursos para el funcionamiento del servicio.",
  },
];

export const metadata: Metadata = {
  title: "Dirección de Finanzas | Municipalidad de El Tabo",
  description:
    "Dirección de Administración y Finanzas de la Municipalidad de El Tabo: contacto, unidades y funciones principales.",
};

function ContactCard({
  title,
  person,
  email,
  phone,
}: {
  title: string;
  person: string;
  email: string;
  phone: string;
}) {
  return (
    <article className="rounded-xl border border-[#e4ebf4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
      <h3 className="mt-4 text-xl font-black leading-tight text-[#0b274e]">
        {title}
      </h3>
      <p className="mt-3 text-sm font-black text-slate-700">{person}</p>
      <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
        <a className="block font-semibold text-[#1453a4] underline" href={`mailto:${email}`}>
          {email}
        </a>
        <p>{phone}</p>
      </div>
    </article>
  );
}

export default function DireccionFinanzasPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Administración y Finanzas de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#0c5b72]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Administración y Finanzas
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Gestión financiera, recursos municipales y apoyo técnico para la
                toma de decisiones de la Municipalidad de El Tabo.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                {mainContact.map((item) => (
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
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#0b274e]">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Unidades a cargo
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Áreas que sostienen la gestión administrativa y financiera.
              </h2>
              <div className="mt-6 grid gap-3">
                {managedUnits.map((unit) => (
                  <div
                    key={unit}
                    className="rounded-lg border border-white/12 bg-white/10 px-4 py-3 text-sm font-black text-white/92"
                  >
                    {unit}
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Sobre la dirección
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Apoyo financiero para el funcionamiento municipal
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  <p>{description}</p>
                  <p>{legalDescription}</p>
                  <p>
                    Sus unidades a cargo son contabilidad, adquisiciones,
                    tesorería caja, rentas, personal, bodega y prevención de
                    riesgos.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Contactos por unidad
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Departamentos y encargados
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {unitContacts.map((unit) => (
                    <ContactCard key={unit.title} {...unit} />
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
