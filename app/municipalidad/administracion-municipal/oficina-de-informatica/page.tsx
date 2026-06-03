import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const description =
  "La Oficina de Informática del municipio de El Tabo es responsable de la gestión y mantenimiento de la infraestructura tecnológica municipal. Esto incluye servidores, redes, software y soporte técnico. Su objetivo es garantizar el correcto funcionamiento de los sistemas informáticos para la administración y los ciudadanos. Además, puede participar en proyectos de modernización tecnológica y en la implementación de soluciones de gobierno electrónico, junto con entregar soporte y capacitación a funcionarios municipales.";

const services = [
  "Acceso a trámites en línea: facilitar la realización de permisos, licencias y otros trámites municipales a través de plataformas digitales.",
  "Soporte técnico: asistencia a ciudadanos y funcionarios en el uso de servicios digitales y plataformas del municipio.",
  "Información y servicios digitales: proveer información actualizada sobre servicios municipales, eventos y noticias a través del sitio web y otras plataformas.",
  "Capacitación y talleres: ofrecer cursos o talleres sobre el uso de tecnologías y herramientas digitales para empoderar a la comunidad.",
  "Transparencia y acceso a datos: publicar información relevante sobre la administración municipal y fomentar la transparencia de datos.",
];

export const metadata: Metadata = {
  title: "Oficina de Informática | Municipalidad de El Tabo",
  description:
    "Oficina de Informática de la Municipalidad de El Tabo.",
};

export default function OficinaInformaticaPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/administracion-municipal/hero-informatica.jpg"
              alt="Oficina de Informática"
              className="h-full w-full object-cover opacity-34"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#143c74]/70" />
          </div>

          <div className="relative mx-auto max-w-[1160px] px-6 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Administración Municipal
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Oficina de Informática
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/92">
              Infraestructura tecnológica, soporte técnico y modernización
              digital para el municipio y la comunidad.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Datos de contacto
              </p>
              <div className="mt-6 space-y-4 text-sm leading-6 text-white/90">
                <div>
                  <p className="font-black text-white">Unidad</p>
                  <p>Oficina de Informática</p>
                </div>
                <div>
                  <p className="font-black text-white">Correo</p>
                  <a className="underline" href="mailto:jorge.ramirez@eltabo.cl">
                    soporte@eltabo.cl
                  </a>
                </div>
                <div>
                  <p className="font-black text-white">Teléfono</p>
                  <p>+56 352 203522</p>
                </div>
                <div>
                  <p className="font-black text-white">Dirección</p>
                  <p>
                    Av. Las Cruces Norte 401, El Tabo, Región de Valparaíso.
                    Edificio Consistorial Municipalidad El Tabo.
                  </p>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Sobre la oficina
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Gestión tecnológica municipal
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {description}
                </p>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Servicios digitales
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Trámites y servicios
                  </h2>
                </div>
                <ol className="grid gap-3 p-6">
                  {services.map((service, index) => (
                    <li
                      key={service}
                      className="grid grid-cols-[42px_1fr] gap-4 rounded-lg bg-[#f8fbff] p-4"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-7 text-[#2a3650]">
                        {service}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
