"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const clasesLicencia = [
  { clase: "Clase B", tipo: "No profesional", descripcion: "Permite conducir vehículos motorizados particulares de tres o cuatro ruedas, como automóviles, camionetas y furgones de uso particular.", icon: "🚗" },
  { clase: "Clase C", tipo: "No profesional", descripcion: "Permite conducir vehículos motorizados de dos o tres ruedas, como motocicletas, motonetas y similares.", icon: "🏍️" },
  { clase: "Clase A1", tipo: "Profesional", descripcion: "Permite conducir taxis. Requiere cumplir condiciones especiales para licencias profesionales.", icon: "🚕" },
  { clase: "Clase A2", tipo: "Profesional", descripcion: "Permite conducir taxis, ambulancias o vehículos de transporte público y privado de personas con capacidad limitada de pasajeros.", icon: "🚐" },
  { clase: "Clase A3", tipo: "Profesional", descripcion: "Permite conducir vehículos destinados al transporte de personas, sin límite de capacidad de asientos.", icon: "🚌" },
  { clase: "Clase A4", tipo: "Profesional", descripcion: "Permite conducir vehículos simples destinados al transporte de carga cuyo peso bruto vehicular sea superior a 3.500 kg.", icon: "🚚" },
  { clase: "Clase A5", tipo: "Profesional", descripcion: "Permite conducir vehículos de carga, simples o articulados, cuyo peso bruto vehicular sea superior a 3.500 kg.", icon: "🚛" },
  { clase: "Clase D", tipo: "Especial", descripcion: "Permite conducir maquinaria automotriz, como tractores, palas mecánicas y otros equipos similares.", icon: "🚜" },
  { clase: "Clase E", tipo: "Especial", descripcion: "Permite conducir vehículos de tracción animal, según la normativa vigente.", icon: "🐴" },
  { clase: "Clase F", tipo: "Especial", descripcion: "Permite conducir vehículos motorizados de las Fuerzas Armadas, Carabineros, PDI, Gendarmería y Bomberos, según corresponda.", icon: "🚒" },
];

const pasos = [
  { title: "Revisa la clase que necesitas", text: "Identifica si necesitas una licencia no profesional, profesional o especial según el tipo de vehículo que conducirás.", icon: "🪪" },
  { title: "Solicita orientación o agenda", text: "Consulta con la Dirección de Tránsito de la municipalidad para conocer disponibilidad, valores, documentos y horarios.", icon: "📅" },
  { title: "Presenta tus documentos", text: "Normalmente se solicita cédula de identidad vigente, antecedentes educacionales y documentación adicional según la clase.", icon: "📄" },
  { title: "Rinde los exámenes", text: "El proceso considera evaluación médica, psicotécnica, examen teórico y examen práctico, según corresponda.", icon: "✅" },
  { title: "Obtén o renueva tu licencia", text: "Si cumples los requisitos y apruebas las evaluaciones, podrás obtener, renovar o ampliar tu licencia.", icon: "🚦" },
];

const requisitosBasicos = [
  "Cédula de identidad vigente.",
  "Acreditar educación básica para licencia clase B, cuando corresponda.",
  "Cumplir edad mínima según la clase de licencia.",
  "Rendir examen médico, psicotécnico, teórico y práctico.",
  "Para licencias profesionales, cumplir requisitos adicionales, como experiencia previa y curso en escuela de conductores profesionales.",
];

export default function LicenciasConducirPage() {
  return (
    <>
    <Header />
    <main className="bg-[#f4f8fc] text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#f2b705] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00174a]/95 via-[#0b4ca8]/85 to-[#00174a]/60" />
        <div className="relative mx-auto max-w-[1040px] px-4 py-16 md:py-20">
          <Link href="/" className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white ring-1 ring-white/30">← Volver al inicio</Link>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">Dirección de Tránsito</span>
              <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">Licencias de Conducir</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">Conoce cómo obtener tu licencia de conducir, qué pasos debes seguir y cuáles son las distintas clases de licencias existentes en Chile.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row"><button className="rounded-full bg-white px-8 py-4 font-black text-[#00174a] shadow-lg" type="button">Solicitar orientación</button><a href="#clases-licencia" className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-[#00174a] shadow-lg">Ver clases de licencia</a></div>
            </div>
            <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 backdrop-blur-md"><div className="rounded-3xl bg-white/95 p-6 text-[#17356f] shadow-2xl"><div className="flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-yellow-100 text-4xl">🪪</div><div><p className="text-sm font-black uppercase tracking-wide text-blue-600">Objetivo</p><h2 className="text-2xl font-black text-[#00174a]">Obtener licencia</h2></div></div><p className="mt-5 text-sm leading-relaxed text-slate-700">La licencia acredita que una persona cumple los requisitos legales, médicos y técnicos para conducir un determinado tipo de vehículo.</p><div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-semibold leading-relaxed text-[#17356f]">En esta sección se explica el proceso de forma simple antes de que el vecino o vecina realice el trámite municipal.</div></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1040px] px-4 py-14"><div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><div className="grid gap-10 lg:grid-cols-2"><div><span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">Información general</span><h2 className="mt-4 text-3xl font-black text-[#00174a]">¿Cómo obtener la licencia de conducir?</h2><div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-700"><p>Para obtener una licencia de conducir, la persona debe acudir a la Dirección de Tránsito Municipal, presentar los antecedentes solicitados y rendir las evaluaciones correspondientes.</p><p>El proceso puede variar según la clase de licencia: no profesional, profesional o especial.</p><p>En términos generales, considera revisión de documentos, examen médico, examen psicotécnico, prueba teórica y prueba práctica, según corresponda.</p></div></div><div className="rounded-[28px] bg-[#f6f9fe] p-6 ring-1 ring-slate-200"><h3 className="text-2xl font-black text-[#00174a]">Requisitos básicos</h3><ul className="mt-5 space-y-3">{requisitosBasicos.map((item) => (<li key={item} className="flex gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200"><span>✔️</span><span>{item}</span></li>))}</ul></div></div></div></section>

      <section className="mx-auto max-w-[1040px] px-4 py-6"><span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-emerald-700">Paso a paso</span><h2 className="mt-4 text-4xl font-black text-[#00174a]">Proceso general para obtenerla</h2><p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">Esta guía orienta el recorrido que debe seguir una persona antes de obtener, renovar o ampliar su licencia.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{pasos.map((paso) => (<article key={paso.title} className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200"><div className="text-3xl">{paso.icon}</div><h3 className="mt-5 text-lg font-black text-[#00174a]">{paso.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{paso.text}</p></article>))}</div></section>

      <section id="clases-licencia" className="mx-auto max-w-[1040px] scroll-mt-32 px-4 py-14"><span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-yellow-700">Chile</span><h2 className="mt-4 text-4xl font-black text-[#00174a]">Clases de licencias de conducir</h2><p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-600">Las licencias se clasifican según el tipo de vehículo y uso. Esta tabla resume las principales clases existentes en Chile.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{clasesLicencia.map((item) => (<article key={item.clase} className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-center justify-between gap-4"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-3xl">{item.icon}</div><span className="rounded-full bg-[#00174a] px-4 py-2 text-sm font-black text-white">{item.clase}</span></div><p className="mt-5 text-xs font-black uppercase tracking-wide text-blue-600">{item.tipo}</p><p className="mt-2 text-sm leading-relaxed text-slate-700">{item.descripcion}</p></article>))}</div></section>

      <section className="mx-auto max-w-[1040px] px-4 pb-16"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"><span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">Importante</span><h2 className="mt-4 text-3xl font-black text-[#00174a]">Antes de ir a la municipalidad</h2><p className="mt-4 text-base leading-relaxed text-slate-700">Confirma horarios, disponibilidad de atención, valores y documentos específicos directamente con la Dirección de Tránsito Municipal. Los requisitos pueden variar según si es primera licencia, renovación, duplicado o ampliación de clase.</p></div><div className="rounded-[32px] bg-gradient-to-br from-[#00174a] to-[#1649b8] p-8 text-white shadow-sm"><span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">Dirección de Tránsito</span><h2 className="mt-4 text-3xl font-black">¿Necesitas orientación?</h2><p className="mt-4 text-sm leading-relaxed text-white/90">Puedes usar esta sección como página previa informativa antes de derivar al vecino al sistema de agenda, contacto o atención de licencias.</p><div className="mt-8 space-y-4"><button className="flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-center font-black text-[#00174a] shadow-lg" type="button">Agendar o consultar atención</button><Link href="/" className="flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-center font-black text-white">Volver al inicio</Link></div></div></div></section>
    </main>
    <Footer />
    </>
  );
}
