"use client";

import { useState } from "react";
import { useRef } from "react";

type PublicAccount = {
  year: string;
  title: string;
  image: string;
  pdf: string;
};

const accounts: PublicAccount[] = [
  {
    year: "2026",
    title: "Cuenta Pública 2026",
    image: "/images/cuentas-publicas/cuenta-publica-2026.png",
    pdf: "/pdfs/cuentas-publicas/cuenta-publica-2026.pdf",
  },
  {
    year: "2025",
    title: "Cuenta Pública 2025",
    image: "/images/cuentas-publicas/cuenta-publica-2025.png",
    pdf: "/pdfs/cuentas-publicas/cuenta-publica-2025.pdf",
  },
  {
    year: "2024",
    title: "Cuenta Pública 2024",
    image: "/images/cuentas-publicas/cuenta-publica-2024.png",
    pdf: "/pdfs/cuentas-publicas/cuenta-publica-2024.pdf",
  },
  {
    year: "2023",
    title: "Cuenta Pública 2023",
    image: "/images/cuentas-publicas/cuenta-publica-2023.png",
    pdf: "/pdfs/cuentas-publicas/cuenta-publica-2023.pdf",
  },
];

export default function CuentasPublicasClient() {
  const [activeAccount, setActiveAccount] = useState<PublicAccount>(accounts[0]);
  const documentRef = useRef<HTMLElement>(null);

  const selectAccount = (account: PublicAccount) => {
    setActiveAccount(account);
    window.setTimeout(() => {
      documentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
      <section className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2a5298]">
            Repositorio municipal
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#0b274e] md:text-4xl">
            Cuentas Públicas disponibles
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Selecciona una cuenta pública para desplegar el documento
            correspondiente. Los PDF se publican desde la carpeta local
            <span className="font-bold text-[#0b274e]">
              {" "}
              public/pdfs/cuentas-publicas/
            </span>
            .
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {accounts.map((account) => {
            const active = account.year === activeAccount.year;

            return (
              <button
                key={account.year}
                type="button"
                onClick={() => selectAccount(account)}
                className={`group overflow-hidden rounded-xl border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  active
                    ? "border-[#0b4ca8] ring-4 ring-blue-100"
                    : "border-[#e7edf5]"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={account.image}
                    alt={`Portada ${account.title}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-[#0b274e] px-3 py-1 text-xs font-black text-white shadow">
                    {account.year}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-black text-[#0b274e]">
                    {account.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#2a5298]">
                    {active ? "Documento desplegado" : "Ver documento"}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section
        ref={documentRef}
        className="mt-10 scroll-mt-28 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
      >
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-[#f8fbff] p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
              Documento seleccionado
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#0b274e]">
              {activeAccount.title}
            </h2>
          </div>

          <a
            href={activeAccount.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#0b274e] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#143c74]"
          >
            Abrir PDF
          </a>
        </div>

        <div className="bg-slate-100 p-3 md:p-5">
          <iframe
            key={activeAccount.pdf}
            src={activeAccount.pdf}
            title={activeAccount.title}
            className="h-[70vh] min-h-[520px] w-full rounded-lg border border-slate-200 bg-white"
          />
        </div>
      </section>
    </div>
  );
}
