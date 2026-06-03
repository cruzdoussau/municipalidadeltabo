import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Authority = {
  name: string;
  role: string;
  image: string;
};

const mayor = {
  name: "ALFONSO MUÑOZ ARAVENA (PS)",
  role: "Alcalde",
  image:
    "https://res.cloudinary.com/dhjjynubb/image/upload/c_fill,g_auto,f_auto,q_auto,w_900,h_1100,dpr_auto/v1761585048/FOTO-ALCALDE_ALFONSO_MU%C3%91OZ_ARAVENA_PS_qrbbby.png",
  bio: `Alfonso Adrián Muñoz Aravena es la primera autoridad de la Ilustre Municipalidad de El Tabo. Le corresponde la dirección y administración superior, así como la supervigilancia del funcionamiento del municipio, en conformidad con los artículos 56 y siguientes de la Ley 18.695, Orgánica Constitucional de Municipalidades, y al Acta de Resolución del Tribunal Electoral Regional de Valparaíso. Además, es quien preside el honorable Concejo Municipal.

Antes de asumir el cargo, fue concejal de la comuna y destacado dirigente social del sector Las Cruces. Junto con lo anterior, a lo largo de su vida se desempeñó como obrero de la construcción y durante gran parte de esta ha vivido en la comuna en que hoy cumple funciones como alcalde.

Está casado y tiene cuatro hijos.`,
};

const council: Authority[] = [
  {
    name: "Regina Hito",
    role: "Concejala",
    image:
      "https://res.cloudinary.com/dhjjynubb/image/upload/ar_4:5,c_fill,g_auto:faces,f_auto,q_auto,w_700,h_875,dpr_auto/v1761585049/Foto_REGINA-HITO-1024x1024_fczqyh.jpg",
  },
  {
    name: "Francisco Lagos",
    role: "Concejal",
    image:
      "https://res.cloudinary.com/dhjjynubb/image/upload/ar_4:5,c_fill,g_auto:faces,f_auto,q_auto,w_700,h_875,dpr_auto/v1761585049/foto_FRANCISCO-LAGOS-1024x1024_ljikui.jpg",
  },
  {
    name: "Joe Aravena",
    role: "Concejal",
    image:
      "https://res.cloudinary.com/dhjjynubb/image/upload/ar_4:5,c_fill,g_auto:faces,f_auto,q_auto,w_700,h_875,dpr_auto/v1761585048/foto_JOEL-A.-ARAVENA-1024x1024_lhxzoz.jpg",
  },
  {
    name: "Karina Soto",
    role: "Concejala",
    image:
      "https://res.cloudinary.com/dhjjynubb/image/upload/ar_4:5,c_fill,g_auto:faces,f_auto,q_auto,w_700,h_875,dpr_auto/v1761585050/foto_KARINA-SOTO-1024x1024_ssn7v2.jpg",
  },
  {
    name: "José Urrea",
    role: "Concejal",
    image:
      "https://res.cloudinary.com/dhjjynubb/image/upload/ar_4:5,c_fill,g_auto:faces,f_auto,q_auto,w_700,h_875,dpr_auto/v1761585048/foto_JOSE-URREA-1024x1024_vvpvc3.jpg",
  },
  {
    name: "Claudia Aracena",
    role: "Concejala",
    image:
      "https://res.cloudinary.com/dhjjynubb/image/upload/ar_4:5,c_fill,g_auto:faces,f_auto,q_auto,w_700,h_875,dpr_auto/v1761585048/foto_CLAUDIA-ARACENA-1024x1024_rd3pvf.jpg",
  },
];

export const metadata: Metadata = {
  title: "Autoridades | Municipalidad de El Tabo",
  description:
    "Alcalde y Honorable Concejo Municipal de la Municipalidad de El Tabo.",
};

export default function AutoridadesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="bg-[#0b274e] text-white">
          <div className="mx-auto max-w-[1100px] px-6 py-12 md:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
              Municipalidad
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Autoridades
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Conoce al alcalde y a las y los integrantes del Honorable
              Concejo Municipal de El Tabo.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[1100px] px-6 py-10 md:py-12">
          <section>
            <h2 className="text-[22px] font-black text-[#0b274e]">Alcalde</h2>

            <article className="mt-4 grid overflow-hidden rounded-xl border border-[#e7edf5] bg-white p-5 shadow-[0_1px_6px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,39,78,0.08)] md:grid-cols-[minmax(320px,42%)_1fr] md:gap-5">
              <div className="overflow-hidden rounded-[14px] bg-gradient-to-br from-[#f5f8ff] to-[#eef2f7]">
                <img
                  src={mayor.image}
                  alt="Fotografía del Alcalde Alfonso Muñoz Aravena"
                  className="h-full min-h-[360px] w-full object-contain object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="px-1 py-5 md:px-7">
                <h3 className="text-2xl font-black leading-tight text-[#0b274e]">
                  {mayor.name}
                </h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[#2a5298]">
                  {mayor.role}
                </p>
                <p className="mt-5 whitespace-pre-line text-[15px] leading-7 text-[#2a3650]">
                  {mayor.bio}
                </p>
              </div>
            </article>
          </section>

          <section className="mt-10">
            <h2 className="text-[22px] font-black text-[#0b274e]">
              Honorable Concejo Municipal
            </h2>

            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {council.map((authority) => (
                <article
                  key={authority.name}
                  className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-[0_1px_6px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,39,78,0.08)]"
                >
                  <div className="overflow-hidden bg-gradient-to-br from-[#f5f8ff] to-[#eef2f7]">
                    <img
                      src={authority.image}
                      alt={`Fotografía de ${authority.name}`}
                      className="aspect-square w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-black text-[#0b274e]">
                      {authority.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[#2a5298]">
                      {authority.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
