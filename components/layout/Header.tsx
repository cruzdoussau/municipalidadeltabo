"use client";

import { useState } from "react";
import Link from "next/link";

const logo = "/images/header/logo-el-tabo.png";
const lobby = "/images/header/ley-lobby.png";
const transparencia = "/images/header/transparencia-activa.png";
const solicitar = "/images/header/solicitar-informacion.png";
const oirs = "/images/header/oirs.png";

type MenuLink = {
  label: string;
  href: string;
};

type MenuSection = {
  title: string;
  links: MenuLink[];
};

const municipalidadLinks = [
  { label: "Autoridades", href: "/municipalidad/autoridades" },
  { label: "Misión y Visión", href: "/municipalidad/mision-vision" },
  { label: "COSOC", href: "/municipalidad/cosoc" },
  { label: "Consejo Comunal de Seguridad Pública", href: "/municipalidad/ccsp" },
  { label: "Juzgado de Policía Local", href: "/municipalidad/juzgado-policia-local" },
  { label: "Administración Municipal", href: "/municipalidad/administracion-municipal" },
  { label: "Cuentas Públicas", href: "/cuentas-publicas" },
];

const direccionesSections: MenuSection[] = [
  {
    title: "Direcciones Municipales",
    links: [
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
      {
        label: "Dirección de Obras Municipales",
        href: "/direcciones/direccion-de-obras-municipales",
      },
    ],
  },
  {
    title: "Gestión y Servicios",
    links: [
      {
        label: "Dirección Jurídica",
        href: "/direcciones/direccion-juridica",
      },
      {
        label: "Secretaría Municipal",
        href: "/direcciones/secretaria-municipal",
      },
      {
        label: "Dirección de Operaciones y Servicios",
        href: "/direcciones/direccion-operaciones-y-servicios",
      },
      {
        label: "Dirección de Medio Ambiente",
        href: "/direcciones/direccion-de-medio-ambiente",
      },
      {
        label: "SECPLA - Programa de Loteos Irregulares",
        href: "/direcciones/secpla/programa-de-loteos-irregulares",
      },
    ],
  },
];

const didecoSections: MenuSection[] = [
  {
    title: "DIDECO",
    links: [
      {
        label: "Sobre la Dirección",
        href: "/dideco/sobre-la-direccion",
      },
      {
        label: "Departamento Social",
        href: "/dideco/departamento-social",
      },
    ],
  },
  {
    title: "Cultura",
    links: [
      {
        label: "Cultura",
        href: "/dideco/cultura",
      },
      {
        label: "Programa de Asuntos Indígenas P.A.I",
        href: "/dideco/cultura/programa-de-asuntos-indigenas-p-a-i",
      },
    ],
  },
  {
    title: "Equidad de Género",
    links: [
      {
        label: "Programa de la Mujer",
        href: "/dideco/equidad-genero/programa-de-la-mujer",
      },
      {
        label: "Mujeres Jefas de Hogar",
        href: "/dideco/equidad-genero/programa-mujeres-jefas-de-hogar",
      },
      {
        label: "Diversidad y No Discriminación",
        href: "/dideco/equidad-genero/programa-de-diversidad-y-no-discriminacion",
      },
    ],
  },
  {
    title: "Programas Sociales Municipales",
    links: [
      {
        label: "Vivienda y Habitabilidad",
        href: "/dideco/programas-sociales-municipales/programa-de-vivienda-y-habitabilidad",
      },
      {
        label: "Acceso a la Justicia",
        href: "/dideco/programas-sociales-municipales/acceso-a-la-justicia",
      },
      {
        label: "Programa de Deportes",
        href: "/dideco/programas-sociales-municipales/programa-de-deportes",
      },
      {
        label: "Adulto Mayor",
        href: "/dideco/programas-sociales-municipales/programa-del-adulto-mayor",
      },
      {
        label: "Discapacidad e Inclusión",
        href: "/dideco/programas-sociales-municipales/programa-de-discapacidad-e-inclusion",
      },
    ],
  },
  {
    title: "Desarrollo Económico Local",
    links: [
      {
        label: "Fomento Productivo",
        href: "/dideco/desarrollo-economico-local/oficina-de-fomento-productivo",
      },
      {
        label: "Oficina de Información Laboral (OMIL)",
        href: "/dideco/desarrollo-economico-local/omil",
      },
      {
        label: "Oficina de Turismo",
        href: "/dideco/desarrollo-economico-local/oficina-de-turismo",
      },
    ],
  },
  {
    title: "Participación Ciudadana",
    links: [
      {
        label: "Presupuestos Participativos",
        href: "/dideco/participacion-ciudadana/presupuestos-participativos",
      },
      {
        label: "Oficina de Subvenciones",
        href: "/dideco/participacion-ciudadana/oficina-de-subvenciones",
      },
    ],
  },
  {
    title: "Programas Externos",
    links: [
      {
        label: "Condominio de Viviendas Tuteladas",
        href: "/dideco/programas-externos/programa-condominio-de-viviendas-tuteladas-el-tabo",
      },
      {
        label: "Programa CEDIAM El Tabo",
        href: "/dideco/programas-externos/programa-cediam-el-tabo",
      },
      {
        label: "Programa Familias",
        href: "/dideco/programas-externos/programa-familias",
      },
      {
        label: "Programa Vínculos 17°",
        href: "/dideco/programas-externos/programa-vinculos-17",
      },
    ],
  },
  {
    title: "Niñez y Juventud",
    links: [
      {
        label: "Oficinas Locales de la Niñez",
        href: "/dideco/ninez-y-juventud/oficinas-locales-de-la-ninez",
      },
      {
        label: "Programa de Juventud",
        href: "/dideco/ninez-y-juventud/programa-de-juventud",
      },
    ],
  },
];

function MegaMenuSection({ section }: { section: MenuSection }) {
  return (
    <section>
      <h3 className="border-b border-[#dbe8f5] pb-2 text-xs font-black uppercase tracking-[0.14em] text-[#2a5298]">
        {section.title}
      </h3>
      <div className="mt-3 grid gap-1.5">
        {section.links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-bold leading-5 text-[#12315e] transition hover:bg-blue-50 hover:text-[#0b4ca8]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

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

          <div className="hidden items-center gap-6 lg:gap-10 md:flex">
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
                <div className="max-h-[calc(100vh-150px)] overflow-y-auto rounded-lg bg-white text-[#00174a] shadow-2xl ring-1 ring-slate-200">
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

              <div className="pointer-events-none absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-7 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="max-h-[calc(100vh-150px)] overflow-y-auto rounded-lg bg-white p-6 text-[#00174a] shadow-2xl ring-1 ring-slate-200">
                  <div className="grid gap-7 md:grid-cols-2">
                    {direccionesSections.map((section) => (
                      <MegaMenuSection key={section.title} section={section} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link
                className="text-[17px] font-semibold tracking-[0.02em] text-white transition hover:text-[#8fc5ff]"
                href="/#dideco"
              >
                DIDECO
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full w-[min(920px,calc(100vw-32px))] -translate-x-1/2 pt-7 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="max-h-[calc(100vh-150px)] overflow-y-auto rounded-lg bg-white p-6 text-[#00174a] shadow-2xl ring-1 ring-slate-200">
                  <div className="grid gap-x-7 gap-y-8 md:grid-cols-3">
                    {didecoSections.map((section) => (
                      <MegaMenuSection key={section.title} section={section} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
          <div className="max-h-[calc(100vh-122px)] overflow-y-auto border-t border-white/10 bg-[#00174a] px-4 pb-5 md:hidden">
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
                {direccionesSections.map((section) => (
                  <div key={section.title}>
                    <p className="px-3 pb-1 pt-4 text-[11px] font-black uppercase tracking-[0.14em] text-[#ffd44d]">
                      {section.title}
                    </p>
                    {section.links.map((item) => (
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
                ))}
              </div>
              <div className="rounded-md bg-white/5 p-2">
                <p className="px-2 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd44d]">
                  DIDECO
                </p>
                {didecoSections.map((section) => (
                  <div key={section.title}>
                    <p
                      className="px-3 pb-1 pt-4 text-[11px] font-black uppercase tracking-[0.14em] text-[#ffd44d]"
                    >
                      {section.title}
                    </p>
                    {section.links.map((item) => (
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
                ))}
              </div>
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
