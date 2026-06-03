import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage =
  "/images/direccion-seguridad-publica/hero-direccion-seguridad-publica.jpeg";

const description =
  "La Dirección de Seguridad Pública tiene como objetivo implementar medidas de seguridad en la comuna de El Tabo, para lograr bienestar y seguridad para sus habitantes, reduciendo factores de riesgo y generando instancias de prevención que permitan disminuir la comisión de delitos e incivilidades.";

const contact = [
  { label: "Director", value: "Pedro Pablo Rodriguez Santis" },
  {
    label: "Correo Seguridad",
    value: "seguridad@eltabo.cl",
    href: "mailto:seguridad@eltabo.cl",
  },
  {
    label: "Correo Inspección",
    value: "inspeccion@eltabo.cl",
    href: "mailto:inspeccion@eltabo.cl",
  },
  {
    label: "Correo Fiscalización",
    value: "fiscalizacion.seguridad@eltabo.cl",
    href: "mailto:fiscalizacion.seguridad@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3529" },
  { label: "Central de Emergencia y Seguridad Pública", value: "*4103" },
];

const units = [
  "Programa de Mediación Vecinal y Atención a Víctimas",
  "Unidad de Puntos de Seguridad",
  "Sección de Inspección Municipal",
  "Programa de Seguridad Comunitaria",
  "Oficina de Prevención Social y Comunitaria",
];

const highlights = [
  {
    title: "Prevención",
    text: "Reducción de factores de riesgo, educación comunitaria y detección temprana de delitos prioritarios.",
  },
  {
    title: "Respuesta",
    text: "Central de comunicaciones, móvil de emergencia, apoyo social y coordinación ante situaciones críticas.",
  },
  {
    title: "Fiscalización",
    text: "Cumplimiento de ordenanzas municipales, control territorial e inspecciones preventivas.",
  },
];

const mainPrograms = [
  {
    title: "Mediación Vecinal y Atención a Víctimas",
    details: [
      "Interviene y acompaña a víctimas de delitos contenidos en el Plan Comunal de Seguridad Pública, como violencia intrafamiliar, robo en lugar habitado y robo con violencia.",
      "Trabaja con organizaciones y programas para apoyar profesionalmente a las víctimas mediante una metodología de intervención en crisis.",
      "Su fin es la prevención, educación y detección temprana, actuando como primer eslabón entre víctimas e instituciones del Estado.",
    ],
  },
  {
    title: "Unidad de Puntos de Seguridad",
    details: [
      "Los 21 puntos de seguridad de la comuna apoyan a vecinos mediante rondas preventivas, gestiones con instituciones y trámites municipales.",
      "También realizan control de signos vitales a pacientes, servicio entregado por técnicos en enfermería de la Dirección de Seguridad Pública.",
    ],
  },
  {
    title: "Resguardo de recintos municipales",
    details: [
      "Ejecuta resguardo de recintos municipales mediante rondas y firmas de libros en aproximadamente 53 sectores clave.",
      "Trabaja en colaboración con Carabineros y entrega seguridad en ferias y otros eventos comunitarios.",
    ],
  },
  {
    title: "Inspección Municipal",
    details: [
      "La sección de Inspección Municipal está a cargo de fiscalizaciones según las atribuciones conferidas por la ley.",
      "Busca hacer cumplir ordenanzas municipales y todo aquello fiscalizable a través del ordenamiento legal.",
    ],
  },
];

const inspection = [
  {
    title: "Fiscalización y control",
    details: [
      "Supervisar el cumplimiento de leyes, reglamentos y ordenanzas municipales.",
      "Realizar rondas e inspecciones periódicas para detectar irregularidades.",
      "Controlar actividades comerciales, ferias libres y establecimientos dentro de sus marcos legales.",
    ],
  },
  {
    title: "Atención de denuncias y quejas",
    details: [
      "Recibir y gestionar denuncias comunitarias relacionadas con seguridad, ruidos molestos, ocupación indebida de espacios públicos u otras infracciones.",
      "Actuar como mediador en disputas vecinales o problemas menores.",
      "Derivar casos graves a Carabineros, fiscalías, tribunales u otras autoridades competentes.",
    ],
  },
  {
    title: "Vigilancia y prevención",
    details: [
      "Realizar patrullajes preventivos para prevenir delitos menores, vandalismo o conductas que alteren el orden público.",
      "Coordinar acciones conjuntas con Carabineros de Chile en puntos críticos.",
      "Supervisar cámaras de seguridad municipal para identificar incidentes y coordinar respuestas rápidas.",
    ],
  },
  {
    title: "Gestión de eventos y actividades públicas",
    details: [
      "Apoyar el orden y la prevención en actividades públicas, eventos comunitarios y espacios de alta concurrencia.",
      "Coordinar presencia preventiva y apoyo operativo según las necesidades del territorio.",
    ],
  },
  {
    title: "Gestión de multas e infracciones",
    details: [
      "Emitir multas o amonestaciones por incumplimientos de normativas municipales.",
      "Registrar infracciones y asegurar el seguimiento de pagos correspondientes.",
      "Gestionar recursos administrativos asociados a multas o sanciones.",
    ],
  },
];

const emergency = [
  "Central de comunicaciones 24/7 disponible para emergencias ocurridas en la comuna.",
  "Móvil de emergencia disponible 24/7 con técnico en enfermería para prestar primera asistencia.",
  "Poda y tala de árboles en bienes nacionales de uso público.",
  "Asistencia social en casos de emergencia.",
];

const teams = [
  "Un móvil que cubre 24/7 toda la comuna en casos de emergencia.",
  "Grupo de poda y tala con móvil de traslado, camión alza hombre y retroexcavadora.",
  "Equipo de cuatro maestros que apoyan el montaje de viviendas de emergencia según el siniestro ocurrido.",
];

const prevention = [
  {
    title: "Funciones de la Oficina de Prevención Social y Comunitaria",
    details: [
      "Diseñar e implementar estrategias preventivas para reducir factores de riesgo y promover seguridad en la comuna.",
      "Participar en el Programa de Mediación Vecinal y Atención a Víctimas, enfocado en intervención temprana de violencia intrafamiliar, robos y otros delitos prioritarios.",
    ],
  },
  {
    title: "Educación y sensibilización comunitaria",
    details: [
      "Desarrollar campañas educativas sobre seguridad pública, prevención del delito y uso de herramientas como SOSAFE.",
      "Organizar talleres, charlas y actividades que fomenten participación ciudadana en seguridad.",
    ],
  },
  {
    title: "Mediación vecinal",
    details: [
      "Facilitar procesos de mediación entre vecinos para resolver conflictos pacíficamente.",
      "Brindar atención profesional a víctimas de delitos mediante intervención en crisis.",
    ],
  },
  {
    title: "Coordinación con organizaciones y programas estatales",
    details: [
      "Articular acciones con instituciones estatales, programas y organismos especializados.",
      "Servir como nexo entre comunidad y entidades gubernamentales para acceso a recursos.",
    ],
  },
  {
    title: "Elaboración de proyectos de seguridad",
    details: [
      "Diseñar y ejecutar proyectos anuales de prevención social y comunitaria alineados con el Plan Comunal de Seguridad Pública 2022-2025.",
      "Evaluar y actualizar estrategias según las necesidades de la comunidad.",
    ],
  },
  {
    title: "Atención a víctimas y apoyo psicosocial",
    details: [
      "Proporcionar acompañamiento integral a víctimas, incluyendo asesoría legal, psicológica y social.",
      "Detectar tempranamente violencia intrafamiliar, robo con violencia u otros delitos prioritarios.",
    ],
  },
];

const communitySecurity = [
  {
    title: "Promoción de la participación ciudadana",
    details: [
      "Fomentar participación activa de vecinos en prevención del delito y resolución de problemas de seguridad.",
      "Crear instancias de diálogo como reuniones comunitarias, mesas de trabajo o consejos de seguridad ciudadana.",
      "Capacitar a la ciudadanía en seguridad, autogestión y prevención de riesgos.",
    ],
  },
  {
    title: "Prevención del delito",
    details: [
      "Implementar estrategias preventivas para reducir índices de delincuencia.",
      "Coordinar campañas educativas sobre autoprotección y comportamientos seguros.",
      "Identificar puntos críticos de inseguridad y abordarlos junto a autoridades competentes.",
    ],
  },
  {
    title: "Coordinación con instituciones públicas y privadas",
    details: [
      "Articular esfuerzos con Carabineros de Chile, PDI, Ministerio Público y otras instituciones.",
      "Gestionar recursos y proyectos para mejorar infraestructura de seguridad, como cámaras, iluminación y señalización.",
      "Establecer alianzas con organizaciones privadas o comunitarias.",
    ],
  },
];

const projects = [
  "Brigada escolar de emergencia, orientada a formar estudiantes con habilidades para actuar y apoyar ante emergencias en establecimientos educacionales.",
  "Durante 2024 participaron Escuela Básica Las Cruces y Anexo Quillaycillo Escuela Básica Las Cruces.",
  "Durante 2025 se incorporarán Colegio El Tabo y Anexo El Tabo.",
];

export const metadata: Metadata = {
  title: "Dirección de Seguridad Pública | Municipalidad de El Tabo",
  description:
    "Dirección de Seguridad Pública de El Tabo: contacto, prevención, inspección municipal, emergencias, mediación vecinal y seguridad comunitaria.",
};

function AccordionBlock({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: { title: string; details: string[] }[];
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-[#0b274e]">
          {title}
        </h2>
      </div>

      <div className="grid gap-3 p-6">
        {items.map((item, index) => (
          <details
            key={item.title}
            className="group rounded-lg bg-[#f8fbff] p-4 open:bg-white open:ring-1 open:ring-[#d9e6f5]"
          >
            <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_28px] gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                {index + 1}
              </span>
              <span className="pt-1 text-sm font-black leading-7 text-[#0b274e]">
                {item.title}
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e8f0fa] text-lg font-black text-[#0b274e] transition group-open:rotate-45">
                +
              </span>
            </summary>

            <ul className="ml-[58px] mt-4 grid gap-2 border-l-2 border-[#dbe8f5] pl-4">
              {item.details.map((detail) => (
                <li key={detail} className="text-sm leading-7 text-slate-600">
                  {detail}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </article>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[42px_1fr] gap-4 rounded-lg bg-[#f8fbff] p-4"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-sm leading-7 text-[#2a3650]">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <article className="rounded-xl border border-[#e4ebf4] bg-white p-5 shadow-sm">
      <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
      <h3 className="mt-4 text-lg font-black leading-tight text-[#0b274e]">
        {label}
      </h3>
      {href ? (
        <a
          href={href}
          className="mt-3 block text-sm font-semibold leading-6 text-[#1453a4] underline"
        >
          {value}
        </a>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-600">{value}</p>
      )}
    </article>
  );
}

export default function DireccionSeguridadPublicaPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Seguridad Pública de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#5d2e1d]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Seguridad Pública
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Prevención, fiscalización, mediación vecinal y respuesta ante
                emergencias para fortalecer la seguridad en El Tabo.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm font-black text-white">Director</p>
                  <p className="text-base font-semibold text-white/90">
                    Pedro Pablo Rodriguez Santis
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black text-white">Correo</p>
                  <a
                    href="mailto:seguridad@eltabo.cl"
                    className="text-base font-semibold text-white/90 underline"
                  >
                    seguridad@eltabo.cl
                  </a>
                </div>
                <div>
                  <p className="text-sm font-black text-white">Emergencias</p>
                  <p className="text-base font-semibold text-white/90">*4103</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#0b274e]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Sobre la dirección
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Bienestar, prevención y coordinación comunitaria.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/90">
                {description}
              </p>
              <div className="mt-6 grid gap-3">
                {units.map((unit) => (
                  <div
                    key={unit}
                    className="rounded-lg border border-white/12 bg-white/10 px-4 py-3 text-sm font-black text-white/92"
                  >
                    {unit}
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Datos de contacto
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Canales de atención
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <AccordionBlock
                eyebrow="Programas"
                title="Sobre la dirección"
                items={mainPrograms}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:py-16 lg:grid-cols-2">
            <AccordionBlock
              eyebrow="Inspección"
              title="Inspección Municipal"
              items={inspection}
            />
            <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Emergencias
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Servicios y equipos
              </h2>
              <div className="mt-5 space-y-6">
                <NumberedList items={emergency} />
                <NumberedList items={teams} />
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <AccordionBlock
              eyebrow="Prevención social"
              title="Oficina de Prevención Social y Comunitaria"
              items={prevention}
            />
            <AccordionBlock
              eyebrow="Comunidad"
              title="Programa de Seguridad Comunitaria"
              items={communitySecurity}
            />
          </div>
        </section>

        <section className="bg-[#0b274e] text-white">
          <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                  Actividades relevantes
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                  Brigada escolar de emergencia
                </h2>
              </div>
              <NumberedList items={projects} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
