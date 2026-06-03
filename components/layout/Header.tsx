"use client";

import { useState } from "react";
import Link from "next/link";

const logo = "/images/header/logo-el-tabo.png";
const lobby = "/images/header/ley-lobby.png";
const transparencia = "/images/header/transparencia-activa.png";
const solicitar = "/images/header/solicitar-informacion.png";
const oirs = "/images/header/oirs.png";

const municipalidadLinks = [
  { label: "Autoridades", href: "/municipalidad/autoridades" },
  { label: "Misión y Visión", href: "/municipalidad/mision-vision" },
  { label: "COSOC", href: "/municipalidad/cosoc" },
  { label: "Consejo Comunal de Seguridad Pública", href: "/municipalidad/ccsp" },
  { label: "Juzgado de Policía Local", href: "/municipalidad/juzgado-policia-local" },
  { label: "Administración Municipal", href: "/municipalidad/administracion-municipal" },
  { label: "Cuentas Públicas", href: "/cuentas-publicas" },
];

const direccionesLinks = [
  {
    label: "Dirección de Finanzas",
    href: "/direcciones/direccion-de-finanzas",
  },
  {
    label: "Dirección de Tránsito y Transporte Público",
    href: "/direcciones/direccion-de-transito-y-transporte-publico",
  },
  {
    label: "Dirección de Salud",
    href: "/direcciones/direccion-de-salud",
  },
  {
    label: "Departamento de Educación",
    href: "/direcciones/departamento-de-educacion",
  },
  {
    label: "Dirección de Seguridad Pública",
    href: "/direcciones/direccion-de-seguridad-publica",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      <div className="border-b border-slate-300 bg-[#e9ecef]">
        <div className="mx-auto flex h-[42px] max-w-[1040px] items-center justify-center gap-4 overflow-hidden px-4">
          {[lobby, transparencia, solicitar, oirs].map((src, index) => (
            <a
              key={src}
              href="#"
              className="flex shrink-0 items-center justify-center"
            >
              <img
                src={src}
                alt={`Logo institucional ${index + 1}`}
                className="h-[30px] w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <nav className="bg-[#00174a] text-white">
        <div className="mx-auto flex h-[80px] max-w-[1040px] items-center justify-between px-4">
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Municipalidad de El Tabo"
              className="h-[68px] w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link
              className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]"
              href="/"
            >
              INICIO
            </Link>

            <div className="group relative">
              <Link
                className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]"
                href="/#municipalidad"
              >
                MUNICIPALIDAD
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full w-[310px] -translate-x-1/2 pt-7 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-lg bg-white text-[#00174a] shadow-2xl ring-1 ring-slate-200">
                  {municipalidadLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block border-b border-slate-100 px-5 py-3 text-sm font-black transition last:border-b-0 hover:bg-blue-50 hover:text-[#0b4ca8]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]"
                href="/#direcciones"
              >
                DIRECCIONES
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-7 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-lg bg-white text-[#00174a] shadow-2xl ring-1 ring-slate-200">
                  {direccionesLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block border-b border-slate-100 px-5 py-3 text-sm font-black transition last:border-b-0 hover:bg-blue-50 hover:text-[#0b4ca8]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]"
              href="/#dideco"
            >
              DIDECO
            </Link>
            <Link
              className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]"
              href="/#contacto"
            >
              CONTACTO
            </Link>
          </div>

          <button
            className="rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-white md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            type="button"
            aria-expanded={mobileOpen}
            aria-label="Abrir menú"
          >
            Menú
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#00174a] px-4 pb-5 md:hidden">
            <div className="mx-auto max-w-[1040px] space-y-1 pt-3">
              <Link
                className="block rounded-md px-3 py-3 text-sm font-black text-white hover:bg-white/10"
                href="/"
                onClick={() => setMobileOpen(false)}
              >
                INICIO
              </Link>

              <div className="rounded-md bg-white/5 p-2">
                <p className="px-2 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd44d]">
                  Municipalidad
                </p>
                {municipalidadLinks.map((item) => (
                  <Link
                    key={item.href}
                    className="block rounded-md px-3 py-3 text-sm font-bold text-white/95 hover:bg-white/10"
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="rounded-md bg-white/5 p-2">
                <p className="px-2 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd44d]">
                  Direcciones
                </p>
                {direccionesLinks.map((item) => (
                  <Link
                    key={item.href}
                    className="block rounded-md px-3 py-3 text-sm font-bold text-white/95 hover:bg-white/10"
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                className="block rounded-md px-3 py-3 text-sm font-black text-white hover:bg-white/10"
                href="/#dideco"
                onClick={() => setMobileOpen(false)}
              >
                DIDECO
              </Link>
              <Link
                className="block rounded-md px-3 py-3 text-sm font-black text-white hover:bg-white/10"
                href="/#contacto"
                onClick={() => setMobileOpen(false)}
              >
                CONTACTO
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
