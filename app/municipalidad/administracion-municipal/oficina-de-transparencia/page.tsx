import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const channels = [
  {
    title: "Transparencia Activa",
    description:
      "Consulta la información que los organismos públicos deben mantener publicada y actualizada.",
    href: "https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=dd4a4856fe4376f915d1ab0c61131f7b",
    action: "Ingresar al portal",
  },
  {
    title: "Solicitud de información pública",
    description:
      "Realiza y consulta solicitudes de acceso a información de la Municipalidad de El Tabo.",
    href: "https://www.portaltransparencia.cl/PortalPdT/pdtta?codOrganismo=MU086",
    action: "Solicitar información",
  },
  {
    title: "Ley del Lobby",
    description:
      "Revisa audiencias, viajes y donativos registrados para la institución municipal.",
    href: "https://www.leylobby.gob.cl/instituciones/MU086",
    action: "Consultar registros",
  },
  {
    title: "OIRS",
    description:
      "Canal de informaciones, reclamos y sugerencias para la atención de la comunidad.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfVz2Xfrb7pVS0A0V6IZkqOi3WgBtE-JOzCsGas6QVQYPp56w/viewform?usp=pp_url",
    action: "Ir a OIRS",
  },
];

export const metadata: Metadata = {
  title: "Oficina de Transparencia | Municipalidad de El Tabo",
  description:
    "Canales de transparencia, acceso a información pública, Ley del Lobby y OIRS de la Municipalidad de El Tabo.",
};

export default function OficinaTransparenciaPage() {
  return (
    <>
      <Header />

      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(45,151,178,0.32),transparent_35%),linear-gradient(115deg,#061b3d,#0b376c)]" />
          <div className="relative mx-auto max-w-[1160px] px-6 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Administración Municipal
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Oficina de Transparencia
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/92">
              Acceso claro y directo a información pública, registros
              institucionales y canales de atención ciudadana.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2a5298]">
              Accesos oficiales
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
              Transparencia y participación al alcance de la comunidad
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Utiliza estos canales oficiales para consultar antecedentes,
              solicitar información pública o comunicarte con el municipio.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {channels.map((channel) => (
              <article
                key={channel.title}
                className="flex flex-col rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm"
              >
                <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
                <h2 className="mt-4 text-2xl font-black text-[#0b274e]">
                  {channel.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {channel.description}
                </p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${channel.action} (se abre en una nueva pestaña)`}
                  className="mt-6 inline-flex w-fit rounded-full bg-[#0b4ca8] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#083b82]"
                >
                  {channel.action} →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
