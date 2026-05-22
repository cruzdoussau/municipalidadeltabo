"use client";

import Link from "next/link";

const logo = "/images/header/logo-el-tabo.png";
const lobby = "/images/header/ley-lobby.png";
const transparencia = "/images/header/transparencia-activa.png";
const solicitar = "/images/header/solicitar-informacion.png";
const oirs = "/images/header/oirs.png";

export default function Header() {
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
            <Link className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]" href="/">
              INICIO
            </Link>
            <Link className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]" href="/#municipalidad">
              MUNICIPALIDAD
            </Link>
            <Link className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]" href="/#direcciones">
              DIRECCIONES
            </Link>
            <Link className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]" href="/#dideco">
              DIDECO
            </Link>
            <Link className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]" href="/#contacto">
              CONTACTO
            </Link>
          </div>

          <button className="rounded-md border border-white/20 px-3 py-2 text-sm font-semibold text-white md:hidden">
            Menú
          </button>
        </div>
      </nav>
    </header>
  );
}