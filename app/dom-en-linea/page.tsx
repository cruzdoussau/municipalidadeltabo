"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const tramitesDom = [
  { categoria: "Certificados", icon: "📄", items: ["Certificado de Número", "Certificado de Afectación a Utilidad Pública", "Certificado de Informaciones Previas", "Certificado de Vivienda Social", "Certificado de Urbanización"] },
  { categoria: "Permisos y expedientes", icon: "🏗️", items: ["Recepción parcial o definitiva", "Obra Nueva", "Obra Nueva con revisor independiente", "Obra Menor", "Subdivisión y/o Fusión", "Copropiedad Inmobiliaria", "Ley 20.898", "Anteproyecto"] },
  { categoria: "Otros trámites DOM", icon: "🗂️", items: ["Solicitud de rompimiento en BNUP", "Desarchivo de expediente", "Certificación de documentación", "Revisión y retimbrado de planos"] },
];

const pasosDom = [
  { numero: "01", titulo: "Ingresa con ClaveÚnica", texto: "Accede a la plataforma oficial DOM en Línea con tu ClaveÚnica para iniciar una solicitud de forma segura.", icono: "🔐" },
  { numero: "02", titulo: "Selecciona El Tabo", texto: "Verifica que el municipio esté disponible y selecciona la comuna de El Tabo dentro del sistema.", icono: "📍" },
  { numero: "03", titulo: "Elige el trámite", texto: "Escoge el tipo y subtipo de trámite según lo que necesites solicitar: certificado, permiso, recepción u otro.", icono: "🧾" },
  { numero: "04", titulo: "Adjunta antecedentes", texto: "Carga los documentos solicitados. Algunos trámites requieren patrocinio de un profesional competente.", icono: "📎" },
  { numero: "05", titulo: "Envía y haz seguimiento", texto: "Envía la solicitud y revisa su avance, observaciones o respuestas directamente en línea.", icono: "✅" },
];

const requisitosDom = [
  "Contar con ClaveÚnica activa.",
  "Tener definido el trámite que necesitas realizar.",
  "Contar con antecedentes del predio o inmueble, como rol de avalúo, dirección o dominio, según corresponda.",
  "Digitalizar los documentos requeridos antes de iniciar la solicitud.",
  "En permisos o expedientes técnicos, considerar apoyo de un profesional competente cuando aplique.",
];

export default function DomEnLineaPage() {
  const tramitesRef = React.useRef<HTMLElement | null>(null);
  const scrollToTramites = () => tramitesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
     <>
    <Header />
    <main className="bg-[#f4f8fc] text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#2b6fd6] text-white">
        <div className="absolute inset-0 opacity-15"><div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%),radial-gradient(circle_at_bottom_right,_white,_transparent_25%)]" /></div>
        <div className="relative mx-auto max-w-[1040px] px-4 py-16 md:py-20">
          <Link href="/" className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white ring-1 ring-white/30">← Volver al inicio</Link>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">Municipalidad de El Tabo</span>
              <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">DOM en Línea</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">Conoce qué es DOM en Línea, qué trámites puedes realizar en la Municipalidad de El Tabo y cómo iniciar tu solicitud antes de ingresar a la plataforma oficial.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://domenlinea.minvu.cl/" target="_blank" rel="noreferrer" className="rounded-full bg-white px-8 py-4 text-center font-black text-[#00174a] shadow-lg">Ir al portal DOM en Línea</a>
                <button onClick={scrollToTramites} className="rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg ring-1 ring-white/20" type="button">Ver trámites disponibles</button>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 backdrop-blur-md"><div className="rounded-3xl bg-white/95 p-6 text-[#17356f] shadow-2xl"><div className="flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-100 text-4xl">🏗️</div><div><p className="text-sm font-black uppercase tracking-wide text-blue-600">¿Qué es?</p><h2 className="text-2xl font-black text-[#00174a]">DOM en Línea</h2></div></div><p className="mt-5 text-sm leading-relaxed text-slate-700">Es una plataforma digital del Minvu para realizar trámites remotos en las Direcciones de Obras Municipales, como certificados, permisos, regularizaciones, subdivisiones y seguimiento de solicitudes.</p><div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-semibold leading-relaxed text-[#17356f]">Antes de ingresar, revisa los trámites disponibles en El Tabo, los requisitos básicos y el paso a paso para usar la plataforma.</div></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1040px] px-4 py-14"><div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="grid gap-10 lg:grid-cols-2"><div><span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">Bienvenidos a DOM en Línea</span><h2 className="mt-4 text-3xl font-black text-[#00174a]">¿Qué es DOM en Línea?</h2><div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700"><p>DOM en Línea permite realizar de forma remota múltiples trámites vinculados a las Direcciones de Obras Municipales.</p><p>Entre estos trámites se encuentran certificados, permisos de edificación, subdivisiones, urbanización, regularizaciones y otros procedimientos relacionados con obras y edificación.</p><p>Las DOM velan por el cumplimiento de las normas de planificación urbana y edificación. Por eso, si deseas desarrollar un proyecto de construcción, modificación, subdivisión o urbanización, normalmente deberás gestionarlo con la Dirección de Obras correspondiente.</p></div></div><div className="rounded-[28px] bg-[#f6f9fe] p-6 ring-1 ring-slate-200"><h3 className="text-2xl font-black text-[#00174a]">¿Qué necesitas antes de comenzar?</h3><ul className="mt-5 space-y-3">{requisitosDom.map((item) => (<li key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200"><span>✔️</span><span>{item}</span></li>))}</ul></div></div></div></section>

      <section ref={tramitesRef} className="mx-auto max-w-[1040px] scroll-mt-32 px-4 py-6"><span className="inline-flex rounded-full bg-[#dbeafe] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#1d4ed8]">El Tabo</span><h2 className="mt-4 text-4xl font-black text-[#00174a]">Trámites disponibles en la DOM de El Tabo</h2><p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-600">Estos son algunos trámites publicados por la Dirección de Obras Municipales de El Tabo que permiten orientar a vecinos, propietarios y profesionales antes de ingresar a DOM en Línea.</p><div className="mt-8 grid gap-6 lg:grid-cols-3">{tramitesDom.map((bloque) => (<article key={bloque.categoria} className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-slate-200"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 text-2xl">{bloque.icon}</div><h3 className="text-xl font-black text-[#00174a]">{bloque.categoria}</h3></div><ul className="mt-5 space-y-3">{bloque.items.map((item) => (<li key={item} className="rounded-2xl bg-[#f8fbff] px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-100">{item}</li>))}</ul></article>))}</div></section>

      <section className="mx-auto max-w-[1040px] px-4 py-14"><span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">Paso a paso</span><h2 className="mt-4 text-4xl font-black text-[#00174a]">¿Cómo puedo hacerlo?</h2><p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">Antes de entrar a la plataforma oficial, revisa este proceso simple para entender cómo iniciar correctamente tu solicitud.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{pasosDom.map((paso) => (<article key={paso.numero} className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200"><div className="flex items-center justify-between"><span className="text-3xl">{paso.icono}</span><span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-black text-white">{paso.numero}</span></div><h3 className="mt-5 text-lg font-black text-[#00174a]">{paso.titulo}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{paso.texto}</p></article>))}</div></section>

      <section className="mx-auto max-w-[1040px] px-4 pb-16"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-amber-700">Apoyo y orientación</span><h2 className="mt-4 text-3xl font-black text-[#00174a]">Contacto DOM Municipalidad de El Tabo</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-[#f8fbff] p-5 ring-1 ring-slate-200"><p className="text-sm font-black uppercase text-slate-500">Correo</p><p className="mt-2 text-lg font-bold text-[#17356f]">obras@eltabo.cl</p></div><div className="rounded-2xl bg-[#f8fbff] p-5 ring-1 ring-slate-200"><p className="text-sm font-black uppercase text-slate-500">Teléfono</p><p className="mt-2 text-lg font-bold text-[#17356f]">+56 35 220 3508</p></div><div className="rounded-2xl bg-[#f8fbff] p-5 ring-1 ring-slate-200"><p className="text-sm font-black uppercase text-slate-500">Atención ventanilla DOM</p><p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">Lunes a viernes de 08:30 a 14:00 hrs.<br />Sábados de 09:00 a 13:00 hrs.</p></div><div className="rounded-2xl bg-[#f8fbff] p-5 ring-1 ring-slate-200"><p className="text-sm font-black uppercase text-slate-500">Consejo práctico</p><p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">Consulta primero con la DOM si tienes dudas sobre requisitos técnicos o documentación.</p></div></div></div><div className="rounded-[32px] bg-gradient-to-br from-[#00174a] to-[#1649b8] p-8 text-white shadow-sm"><span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">Acceso oficial</span><h2 className="mt-4 text-3xl font-black">¿Listo para comenzar tu trámite?</h2><p className="mt-4 text-sm leading-relaxed text-white/90">Cuando tengas clara la información, tus antecedentes y el tipo de trámite, puedes ingresar al portal oficial de DOM en Línea.</p><div className="mt-8 space-y-4"><a href="https://domenlinea.minvu.cl/" target="_blank" rel="noreferrer" className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-center font-black text-[#00174a] shadow-lg">Ir al portal DOM en Línea</a><Link href="/" className="flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-center font-black text-white">Volver al inicio</Link></div></div></div></section>
    </main>
    <Footer />
    </>
  );
}
