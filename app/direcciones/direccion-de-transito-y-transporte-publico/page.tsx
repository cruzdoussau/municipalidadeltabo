import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/direccion-transito/hero-direccion-transito.jpg";

const mainContact = [
  { label: "Director", value: "Braulio Brevis Urrutia" },
  {
    label: "Correo",
    value: "transito@eltabo.cl",
    href: "mailto:transito@eltabo.cl",
  },
  { label: "Teléfono", value: "+56 35 220 3505" },
];

const description =
  "La Dirección de Tránsito y Transporte Público es esencial para garantizar una movilidad segura y eficiente en nuestra comunidad. Su misión es administrar diversos aspectos relacionados con el tránsito vehicular y el transporte público para asegurar la fluidez, la seguridad y el cumplimiento de las regulaciones viales.";

const primaryFunctions = [
  {
    title: "Regulación de sentido de circulación",
    text: "Coordinación con organismos estatales para determinar sentidos de circulación y promover una movilidad fluida y segura.",
  },
  {
    title: "Señalización vial",
    text: "Señalización de vías públicas para entregar orientación, seguridad y claridad a conductores y peatones.",
  },
  {
    title: "Evaluación de impacto vial",
    text: "Revisión de informes de mitigación de impacto vial en coordinación con la autoridad regional de Transportes.",
  },
  {
    title: "Aplicación de normas de tránsito",
    text: "Implementación y cumplimiento de normas generales de tránsito y transporte público dentro de la comuna.",
  },
];

const documentation = [
  {
    title: "Gestión de permisos y licencias",
    details: [
      "Licencias de conducir: puede estar involucrada en la emisión, renovación o actualización de licencias de conducir para conductores locales.",
      "Permisos de circulación: gestiona la emisión de permisos de circulación anuales para vehículos motorizados, asegurando que cumplan con los requisitos legales.",
      "Certificados de homologación: expedición de certificados para vehículos modificados o adaptados.",
    ],
  },
  {
    title: "Registro y control de vehículos",
    details: [
      "Mantener un registro actualizado de los vehículos matriculados en la comuna.",
      "Verificar la documentación de los vehículos, como revisiones técnicas y seguros obligatorios, para garantizar el cumplimiento de las normativas vigentes.",
      "Controlar el estado de los vehículos que circulan en la comuna.",
    ],
  },
  {
    title: "Atención al ciudadano",
    details: [
      "Brindar información sobre trámites relacionados con tránsito y transporte.",
      "Resolver consultas relacionadas con multas, infracciones o sanciones de tránsito.",
      "Recibir y gestionar reclamos o recursos administrativos relacionados con sanciones de tránsito.",
    ],
  },
  {
    title: "Gestión de infracciones y sanciones",
    details: [
      "Llevar un registro de las infracciones de tránsito cometidas en la comuna.",
      "Emitir notificaciones sobre multas o sanciones a los conductores infractores.",
      "Procesar pagos o acuerdos de pago para la regularización de deudas por infracciones.",
    ],
  },
  {
    title: "Coordinación con otras instituciones",
    details: [
      "Trabajar junto a la Subsecretaría de Transportes, Carabineros de Chile y otros organismos gubernamentales para asegurar el cumplimiento de las leyes de tránsito.",
      "Coordinar acciones relacionadas con campañas de educación vial y seguridad en el tránsito.",
    ],
  },
  {
    title: "Archivo y custodia de documentos",
    details: [
      "Mantener un archivo ordenado y seguro de documentos relacionados con tránsito y transporte, como licencias, permisos, actas de infracción y otros registros.",
      "Digitalizar la documentación para facilitar su acceso y consulta.",
    ],
  },
  {
    title: "Educación y prevención vial",
    details: [
      "Participar en programas de educación vial dirigidos a la comunidad, especialmente a escolares y conductores novatos.",
      "Promover campañas de concientización sobre la importancia del respeto a las normas de tránsito y la seguridad vial.",
    ],
  },
  {
    title: "Apoyo en la planificación del transporte público",
    details: [
      "Colaborar en la regulación y supervisión del transporte público local, como buses o taxis colectivos.",
      "Revisar y emitir permisos para operadores de transporte público.",
    ],
  },
  {
    title: "Informes y estadísticas",
    details: [
      "Generar informes sobre accidentes de tránsito, infracciones y otros indicadores relevantes para la toma de decisiones de la Dirección de Tránsito.",
      "Mantener estadísticas actualizadas sobre el parque vehicular y la movilidad en la comuna.",
    ],
  },
];

const licenses = [
  {
    title: "Emisión de licencias de conducir",
    details: [
      "Primera licencia: gestiona el proceso para otorgar la primera licencia de conducir a personas que han cumplido con los requisitos legales, como la aprobación del examen teórico y práctico.",
      "Renovaciones: procesa la renovación de licencias vencidas, asegurando que los conductores cumplan con los requisitos médicos y legales.",
      "Duplicados: emite duplicados de licencias en caso de pérdida, robo o deterioro.",
    ],
  },
  {
    title: "Clasificación de licencias",
    details: [
      "Administra las diferentes categorías de licencias de conducir según el tipo de vehículo.",
      "Clase A: para vehículos motorizados de dos ruedas.",
      "Clase B: para vehículos livianos.",
      "Clase C, D, E y F: para vehículos comerciales, buses, camiones y otros tipos específicos.",
      "Verifica que los conductores cumplan con los requisitos necesarios para cada categoría.",
    ],
  },
  {
    title: "Revisión médica obligatoria",
    details: [
      "Coordina con centros médicos autorizados para que los conductores realicen los exámenes médicos obligatorios antes de emitir o renovar una licencia.",
      "Valida los certificados médicos presentados por los solicitantes.",
    ],
  },
  {
    title: "Gestión de antecedentes",
    details: [
      "Revisa el historial de infracciones y sanciones de tránsito de los solicitantes para determinar su idoneidad.",
      "Verifica que no existan impedimentos legales, como suspensiones o inhabilitaciones, para emitir una licencia.",
    ],
  },
  {
    title: "Educación y capacitación",
    details: [
      "Promueve programas de educación vial dirigidos a conductores novatos o personas que tramitan su primera licencia.",
      "Facilita información sobre normas de tránsito y la importancia de conducir responsablemente.",
    ],
  },
  {
    title: "Atención al ciudadano",
    details: [
      "Brinda asistencia sobre trámites relacionados con licencias de conducir, incluyendo requisitos, plazos y costos.",
      "Resuelve consultas sobre el estado de los trámites o problemas relacionados con licencias.",
    ],
  },
  {
    title: "Digitalización y modernización",
    details: [
      "Implementa sistemas digitales para agilizar trámites, como reserva de citas en línea, pago electrónico y entrega de licencias físicas.",
      "Mantiene actualizada la base de datos de licencias emitidas en la comuna.",
    ],
  },
  {
    title: "Control y fiscalización",
    details: [
      "Supervisa que las licencias emitidas cumplan con las normativas nacionales y locales.",
      "Colabora con Carabineros de Chile y otros organismos en la fiscalización del uso correcto de las licencias de conducir.",
    ],
  },
  {
    title: "Campañas de concientización",
    details: [
      "Participa en campañas para promover la conducción segura y responsable, especialmente enfocadas en prevenir accidentes de tránsito.",
      "Sensibiliza a la comunidad sobre la importancia de mantener una licencia de conducir válida y al día.",
    ],
  },
];

const permits = [
  {
    title: "Emisión de permisos de circulación",
    details: [
      "Gestión del trámite: procesa la solicitud de permisos de circulación para vehículos motorizados, asegurando que cumplan con los requisitos legales.",
      "Renovaciones anuales: emite permisos de circulación cada año, generalmente entre diciembre y marzo.",
      "Permisos especiales: gestiona permisos para vehículos específicos, como máquinas agrícolas, vehículos antiguos o adaptados.",
    ],
  },
  {
    title: "Revisión de documentación obligatoria",
    details: [
      "Revisión técnica vigente: certifica que el vehículo está en condiciones técnicas adecuadas para circular.",
      "Seguro obligatorio SOAP: verifica que el vehículo cuente con el Seguro Obligatorio de Accidentes Personales.",
      "Multas e infracciones pagadas: confirma que no existan multas pendientes asociadas al vehículo o al conductor.",
      "Cédula de identidad del propietario: asegura que el solicitante sea el dueño legal del vehículo o tenga autorización para realizar el trámite.",
    ],
  },
  {
    title: "Cobro de patentes municipales",
    details: [
      "Tasas y contribuciones: calcula y cobra las patentes municipales correspondientes a cada vehículo, según tipo, antigüedad y características.",
      "Bonificaciones: aplica descuentos o beneficios, como los destinados a vehículos eléctricos, híbridos o pertenecientes a adultos mayores.",
    ],
  },
  {
    title: "Registro y control de vehículos",
    details: [
      "Mantiene un registro actualizado de todos los vehículos que han obtenido permisos de circulación en la comuna.",
      "Monitorea el cumplimiento de las normativas relacionadas con la circulación de vehículos.",
    ],
  },
  {
    title: "Atención al ciudadano",
    details: [
      "Brinda información clara sobre requisitos, costos y plazos para obtener o renovar un permiso de circulación.",
      "Resuelve consultas sobre el estado de los trámites o problemas relacionados con los permisos.",
    ],
  },
  {
    title: "Digitalización y modernización",
    details: [
      "Implementa sistemas digitales para agilizar trámites, como reserva de citas en línea, pago electrónico y emisión de permisos digitales.",
      "Mantiene una base de datos actualizada de los vehículos registrados en la comuna.",
    ],
  },
  {
    title: "Coordinación con otras instituciones",
    details: [
      "Trabaja junto al Ministerio de Transportes, Carabineros de Chile y otros organismos gubernamentales para asegurar el cumplimiento de las normativas de tránsito.",
      "Comparte información sobre vehículos con permisos vencidos o que presenten irregularidades.",
    ],
  },
];

const engineering = [
  "Análisis y diagnóstico del tránsito.",
  "Planificación y diseño de infraestructura vial.",
  "Implementación de medidas de seguridad vial.",
  "Gestión de proyectos de movilidad sostenible.",
  "Coordinación con otras instituciones.",
];

const metrics = [
  { value: "4", label: "Funciones principales" },
  { value: "6", label: "Áreas de documentación" },
  { value: "5", label: "Líneas de ingeniería vial" },
];

export const metadata: Metadata = {
  title: "Dirección de Tránsito y Transporte Público | Municipalidad de El Tabo",
  description:
    "Dirección de Tránsito y Transporte Público de la Municipalidad de El Tabo: contacto, funciones, documentación, licencias y permisos.",
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

function ListBlock({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow: string;
  items: string[];
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

      <ul className="grid gap-3 p-6">
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
    </article>
  );
}

export default function DireccionTransitoPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Tránsito y Transporte Público de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#146074]/68" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Tránsito y Transporte Público
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Movilidad segura, documentación vehicular, licencias, permisos y
                planificación vial para la comuna de El Tabo.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                {mainContact.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-black text-white">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-semibold text-white/90 underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-white/90">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <span className="text-5xl font-black leading-none text-[#0b274e]">
                  {metric.value}
                </span>
                <h2 className="mt-3 text-lg font-black leading-tight text-[#0b274e]">
                  {metric.label}
                </h2>
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
                Orden, seguridad y continuidad para la movilidad comunal.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/90">
                {description}
              </p>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Gestión vial
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Funciones principales
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {primaryFunctions.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-xl border border-[#e4ebf4] bg-[#f8fbff] p-5"
                    >
                      <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
                      <h3 className="mt-4 text-xl font-black leading-tight text-[#0b274e]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </article>

              <div className="grid gap-8 xl:grid-cols-2">
                <AccordionBlock
                  eyebrow="Trámites y archivos"
                  title="Oficina de Documentación"
                  items={documentation}
                />
                <AccordionBlock
                  eyebrow="Conductores"
                  title="Licencias de conducir"
                  items={licenses}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:py-16 lg:grid-cols-2">
            <AccordionBlock
              eyebrow="Vehículos"
              title="Permisos de circulación"
              items={permits}
            />
            <ListBlock
              eyebrow="Planificación"
              title="Estudios e Ingeniería en Tránsito"
              items={engineering}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
