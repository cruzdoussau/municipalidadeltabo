import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const intro = [
  "La Oficina de Gabinete de la Municipalidad de El Tabo tiene por objeto programar, coordinar y supervisar las actividades del Alcalde, en materias vinculadas a su agenda y actividades asociadas a las funciones de la Alcaldía.",
  "También apoya el desarrollo de actividades administrativas, institucionales y protocolares del Alcalde y procura que se entregue respuesta oportuna a las presentaciones, requerimientos o reclamos de la comunidad.",
  "Además, coordina la sección de Comunicaciones, encargada de difundir actividades, acciones, programas e iniciativas municipales, y la sección de Relaciones Públicas, responsable de planificar y coordinar actividades que relacionan al Municipio con los habitantes de la comuna.",
];

const contacts = [
  {
    area: "Oficina de Gabinete",
    name: "Gabriela Santa María",
    role: "Profesional Oficina de Gabinete",
    email: "gabriela.santamaria@eltabo.cl",
    phone: "+56 352 203568",
  },
  {
    area: "Comunicaciones",
    name: "Álvaro Espinoza Martínez",
    role: "Comunicaciones",
    email: "comunicaciones@eltabo.cl",
  },
  {
    area: "Relaciones Públicas",
    name: "Pedro Núñez Pérez",
    role: "Encargado Relaciones Públicas",
    email: "relacionespublicas@eltabo.cl",
    phone: "+56 352 203543",
  },
];

const sections = [
  {
    title: "Comunicaciones",
    text: "La Unidad de Comunicaciones tiene como principal enfoque la difusión de información relevante en los ámbitos social, cultural, artístico y turístico, así como también de las actividades destacadas llevadas a cabo por la Municipalidad en todas sus áreas de atención.",
    detail:
      "Sus responsabilidades abarcan la creación de productos audiovisuales y gráficos, así como la generación de instancias informativas oficiales destinadas a los medios de comunicación. Estas informaciones se replican de acuerdo a la estrategia definida, a través de redes sociales oficiales y la página web municipal.",
  },
  {
    title: "Relaciones Públicas",
    text: "Planifica y coordina actividades realizadas por el Municipio para la comunidad, fortaleciendo el vínculo institucional con los habitantes de El Tabo.",
    detail:
      "Esta sección apoya el desarrollo de actividades protocolares, comunitarias e institucionales que requieren coordinación municipal.",
  },
];

export const metadata: Metadata = {
  title: "Oficina de Gabinete | Municipalidad de El Tabo",
  description:
    "Oficina de Gabinete, Comunicaciones y Relaciones Públicas de la Municipalidad de El Tabo.",
};

export default function OficinaGabinetePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/administracion-municipal/hero-gabinete.jpg"
              alt="Oficina de Gabinete"
              className="h-full w-full object-cover opacity-34"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#143c74]/70" />
          </div>

          <div className="relative mx-auto max-w-[1160px] px-6 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Administración Municipal
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Oficina de Gabinete
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/92">
              Coordinación de agenda, actividades institucionales,
              comunicaciones y relaciones públicas de Alcaldía.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Datos de contacto
              </p>
              <div className="mt-6 space-y-5">
                {contacts.map((contact) => (
                  <div key={contact.area}>
                    <p className="font-black text-white">{contact.area}</p>
                    <p className="mt-1 text-sm text-white/90">
                      {contact.name} - {contact.role}
                    </p>
                    <a
                      className="mt-1 block text-sm text-white/90 underline"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                    {contact.phone && (
                      <p className="mt-1 text-sm text-white/90">
                        {contact.phone}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Sobre la oficina
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Apoyo institucional a Alcaldía
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  {intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <div className="grid gap-5 md:grid-cols-2">
                {sections.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm"
                  >
                    <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
                    <h2 className="mt-4 text-2xl font-black text-[#0b274e]">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {section.text}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {section.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
