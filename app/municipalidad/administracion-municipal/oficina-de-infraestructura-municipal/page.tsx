import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    title: "Mantención de recintos",
    text: "Apoyo a la habilitación, conservación y mantención de recintos municipales destinados a funciones públicas e institucionales.",
  },
  {
    title: "Apoyo técnico",
    text: "Coordinación de requerimientos técnicos asociados al funcionamiento de la infraestructura municipal.",
  },
  {
    title: "Coordinación de proyectos",
    text: "Colaboración con SECPLA y otras unidades en la formulación y ejecución de iniciativas de infraestructura comunal.",
  },
];

export const metadata: Metadata = {
  title: "Oficina de Infraestructura Municipal | Municipalidad de El Tabo",
  description:
    "Información y contacto de la Oficina de Infraestructura Municipal de El Tabo.",
};

export default function OficinaInfraestructuraMunicipalPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/administracion-municipal/hero-administracion-municipal.png"
              alt="Infraestructura municipal de El Tabo"
              className="h-full w-full object-cover opacity-32"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#143c74]/70" />
          </div>
          <div className="relative mx-auto max-w-[1160px] px-6 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Administración Municipal
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Oficina de Infraestructura Municipal
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/92">
              Habilitación y mantención de recintos municipales para su uso
              público e institucional.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Datos de contacto
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Infraestructura Municipal
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-white/90">
                <div>
                  <p className="font-black text-white">Correo</p>
                  <a className="underline" href="mailto:miguel.herrera@eltabo.cl">
                    miguel.herrera@eltabo.cl
                  </a>
                </div>
                <div>
                  <p className="font-black text-white">Teléfono</p>
                  <a className="underline" href="tel:+56352203584">
                    +56 35 220 3584
                  </a>
                </div>
              </div>
            </aside>

            <div className="space-y-5">
              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Sobre la oficina
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Infraestructura al servicio del municipio
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Dependiente de la Administración Municipal, esta oficina se
                  preocupa de la habilitación y mantención de recintos
                  municipales para efectos públicos y municipales, coordinando
                  su trabajo con las unidades que requieren apoyo técnico.
                </p>
              </article>

              <div className="grid gap-5 md:grid-cols-3">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-xl border border-[#e7edf5] bg-white p-5 shadow-sm"
                  >
                    <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
                    <h2 className="mt-4 text-xl font-black text-[#0b274e]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.text}
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
