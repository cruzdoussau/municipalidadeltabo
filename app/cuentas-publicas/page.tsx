import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CuentasPublicasClient from "./CuentasPublicasClient";

export const metadata: Metadata = {
  title: "Cuentas Públicas | Municipalidad de El Tabo",
  description:
    "Repositorio de cuentas públicas de la Municipalidad de El Tabo.",
};

export default function CuentasPublicasPage() {
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
              Cuentas Públicas
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Bienvenidos al repositorio de Cuentas Públicas. En este apartado
              podrás acceder a las cuentas públicas disponibles de la
              Municipalidad de El Tabo.
            </p>
          </div>
        </section>

        <CuentasPublicasClient />
      </main>

      <Footer />
    </>
  );
}
