import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const information = [
  {
    title: "Acompañamiento integral",
    text: "Entrega acciones y servicios universales, junto con apoyos especiales para niños, niñas y familias que enfrentan mayor vulnerabilidad.",
  },
  {
    title: "Seguimiento del desarrollo",
    text: "Acompaña la trayectoria de niños y niñas atendidos en el sistema público de salud desde el primer control de gestación y durante su primera infancia.",
  },
  {
    title: "Ingreso al sistema",
    text: "La incorporación de las familias se realiza a través del primer control de embarazo en un establecimiento público de salud.",
  },
];

export const metadata: Metadata = {
  title: "Programa Chile Crece Contigo | Municipalidad de El Tabo",
  description:
    "Información y contacto del Programa Chile Crece Contigo de la Municipalidad de El Tabo.",
};

export default function ProgramaChileCreceContigoPage() {
  return (
    <>
      <Header />

      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/direccion-salud/hero-direccion-salud.jpg"
              alt="Programa Chile Crece Contigo"
              className="h-full w-full object-cover opacity-38"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#0a6f74]/68" />
          </div>
          <div className="relative mx-auto max-w-[1160px] px-6 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Dirección de Salud
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Programa Chile Crece Contigo
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/92">
              Protección y acompañamiento integral para niños, niñas y sus
              familias desde las primeras etapas de la vida.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {information.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#0b274e]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Datos de contacto
              </p>
              <div className="mt-6 space-y-4 text-sm leading-6 text-white/90">
                <div>
                  <p className="font-black text-white">Encargada</p>
                  <p>Fernanda Berrios Farias</p>
                </div>
                <div>
                  <p className="font-black text-white">Correo</p>
                  <a className="underline" href="mailto:chcc@eltabo.cl">
                    chcc@eltabo.cl
                  </a>
                </div>
              </div>
            </aside>

            <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Sobre el programa
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Sistema de Protección Integral a la Infancia
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  Chile Crece Contigo acompaña, protege y apoya integralmente a
                  niños, niñas y sus familias. Su enfoque combina acciones y
                  servicios universales con apoyos especiales para quienes
                  enfrentan una mayor vulnerabilidad, siguiendo el principio de
                  responder a cada familia según sus necesidades.
                </p>
                <p>
                  El programa realiza un seguimiento personalizado de la
                  trayectoria de desarrollo de niños y niñas atendidos en el
                  sistema público de salud, desde el primer control de gestación
                  hasta su ingreso al sistema escolar. Su cobertura se ha
                  ampliado gradualmente hasta el final del primer ciclo básico.
                </p>
                <p>
                  Las familias se incorporan a través del primer control de
                  embarazo en un centro de salud público. Desde allí se activan
                  la orientación, la atención municipal y el seguimiento
                  correspondiente.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
