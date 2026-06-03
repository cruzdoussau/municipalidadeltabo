import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const missionText =
  "Nuestra misión es la promoción y el mejoramiento de la calidad de vida de la comunidad tabina y de quienes nos visitan, potenciando el desarrollo local a través de una gestión moderna y eficiente, enfocada en el buen trato y la transparencia en los servicios prestados. Las acciones emanadas desde este municipio se basan en la participación ciudadana, la promoción de las organizaciones funcionales y territoriales, la protección de nuestro medio ambiente, la valoración del patrimonio, nuestras tradiciones, el fomento de la cultura, el deporte y la vida sana.";

const visionText =
  "El Tabo es una comuna joven, con hermosos parajes turísticos, con un borde costero envidiable, eminentemente cultural, reconocida por su belleza natural y patrimonial. El potencial de nuestra zona urbana y rural proyecta a nuestra comuna como un importante polo de desarrollo en el ámbito de los servicios y el comercio, generando oportunidades tanto a sus vecinos como a residentes temporales, sumándonos de esta manera al proyecto y objetivo común que compartimos con comunas vecinas como Cartagena y El Quisco. Su desarrollo se sustenta en el aporte y calidad de los servicios públicos que poco a poco hemos incorporado y que atienden los diferentes requerimientos de nuestros ciudadanos. A ello sumamos una educación de calidad desde la primera infancia y con ofertas formativas que llegan al técnico profesional de nivel medio, un servicio de salud primaria renovado y de calidad, además de un equilibrio entre la identidad local, la innovación, el cuidado del medio ambiente, el emprendimiento, la gestión local y los recursos propios que nos ofrece el balneario que denominamos como el “Corazón del Litoral de los Poetas”.";

const pillars = [
  {
    title: "Buen trato",
    text: "Atención cercana, respetuosa y oportuna para vecinas, vecinos y visitantes.",
  },
  {
    title: "Transparencia",
    text: "Gestión pública clara, trazable y abierta a la participación ciudadana.",
  },
  {
    title: "Identidad local",
    text: "Cuidado del patrimonio, las tradiciones y la vida cultural de El Tabo.",
  },
  {
    title: "Medio ambiente",
    text: "Protección activa del borde costero, los paisajes y los ecosistemas comunales.",
  },
];

const places = [
  {
    image: "/images/mision-vision/postal-1.jpg",
    label: "Patrimonio",
  },
  {
    image: "/images/mision-vision/postal-2.jpg",
    label: "Comunidad",
  },
  {
    image: "/images/mision-vision/postal-3.jpg",
    label: "Territorio",
  },
];

export const metadata: Metadata = {
  title: "Misión y Visión | Municipalidad de El Tabo",
  description:
    "Misión y visión institucional de la Municipalidad de El Tabo.",
};

export default function MisionVisionPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/mision-vision/hero-mision-vision.png"
              alt="Paisaje de El Tabo"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#0f6b87]/70" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Municipalidad
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Misión y Visión
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/92">
                Una mirada institucional para cuidar lo que somos y proyectar
                el desarrollo de El Tabo con identidad, transparencia y
                participación.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {places.map((place, index) => (
                <div
                  key={place.label}
                  className={`overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur ${
                    index === 1 ? "mt-8" : ""
                  }`}
                >
                  <img
                    src={place.image}
                    alt={place.label}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="bg-[#00174a]/85 px-3 py-2 text-center text-xs font-black uppercase tracking-wide text-white">
                    {place.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
                <h2 className="mt-4 text-xl font-black text-[#0b274e]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <aside className="sticky top-32 hidden rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Enfoque institucional
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                El Tabo como comunidad, territorio y destino.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/85">
                La misión orienta el trabajo diario del municipio. La visión
                proyecta una comuna integrada, con servicios públicos de
                calidad y una identidad local reconocible.
              </p>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="grid md:grid-cols-[180px_1fr]">
                  <div className="bg-[#0f6b87] p-6 text-white">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                      Nuestra
                    </p>
                    <h2 className="mt-3 text-4xl font-black">Misión</h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-[16px] leading-8 text-[#2a3650]">
                      {missionText}
                    </p>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="grid md:grid-cols-[180px_1fr]">
                  <div className="bg-[#1d4f8f] p-6 text-white">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                      Nuestra
                    </p>
                    <h2 className="mt-3 text-4xl font-black">Visión</h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-[16px] leading-8 text-[#2a3650]">
                      {visionText}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto max-w-[1160px] px-6 py-12">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                  Corazón del Litoral de los Poetas
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                  Una comuna que avanza cuidando su identidad.
                </h2>
              </div>
              <p className="text-base leading-8 text-slate-700">
                El desarrollo de El Tabo se entiende desde el equilibrio entre
                innovación, cuidado ambiental, emprendimiento, gestión local y
                valoración del patrimonio natural y cultural de la comuna.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
