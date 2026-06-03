import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/direccion-salud/hero-direccion-salud.jpg";

const description =
  "La Dirección de Salud tiene la responsabilidad de asesorar al Alcalde y al H. Concejo en la formación de políticas relativas a salud, proponiendo y ejecutando medidas tendientes a materializar acciones y programas relacionados con salud pública, además de administrar los recursos humanos, materiales y financieros.";

const contacts = [
  { label: "Directora", value: "Beatriz Piña" },
  { label: "CESFAM", value: "+56 44 235 1300" },
  { label: "SOME", value: "+56 44 235 1344" },
  { label: "Urgencias", value: "+56 44 235 1330" },
  { label: "CECOSF", value: "+56 44 235 1350" },
  { label: "Óptica Municipal", value: "+56 44 235 1372" },
  { label: "Farmacia Municipal El Tabo", value: "+56 44 235 1340" },
  { label: "Farmacia Municipal Las Cruces", value: "+56 44 235 1370" },
  { label: "DISAM", value: "+56 44 235 1380" },
];

const schedules = [
  { label: "CESFAM", value: "8:15 a 20:00 hrs." },
  { label: "SOME", value: "8:15 a 20:00 hrs." },
  { label: "Urgencias", value: "24 hrs, horario continuo." },
  {
    label: "CECOSF",
    value:
      "Lunes a jueves de 8:00 a 17:00 hrs. Viernes de 8:00 a 16:00 hrs. Extensión horaria martes, miércoles y jueves de 17:00 a 20:00 hrs.",
  },
  {
    label: "Óptica Municipal",
    value: "8:30 a 13:00 hrs. y 14:00 a 16:00 hrs.",
  },
  {
    label: "Farmacia Municipal El Tabo",
    value:
      "Lunes a jueves de 9:30 a 13:30 hrs. y 14:30 a 16:00 hrs. Viernes de 9:00 a 14:30 hrs., horario continuo. farmaciamunicipal@saludeltabo.cl",
  },
  {
    label: "Farmacia Municipal Las Cruces",
    value:
      "Lunes a jueves de 9:30 a 13:30 hrs. y 14:30 a 16:00 hrs. Viernes de 9:00 a 14:30 hrs., horario continuo. farmaciamunicipal@saludeltabo.cl",
  },
  { label: "DISAM", value: "8:00 a 17:00 hrs." },
];

const healthAreas = [
  {
    title: "Salud pública",
    text: "Diseño y ejecución de acciones y programas relacionados con la salud de la comunidad.",
  },
  {
    title: "Administración sanitaria",
    text: "Gestión de recursos humanos, materiales y financieros del área de salud municipal.",
  },
  {
    title: "Red comunal",
    text: "Coordinación de dispositivos como CESFAM, CECOSF, farmacias municipales, urgencias y óptica.",
  },
];

const opticaInfo = [
  "Proporciona atención oftalmológica de calidad a residentes de la comuna.",
  "Facilita el acceso a lentes ópticos a precios accesibles y con tiempos de espera razonables.",
  "Entrega detección y corrección de vicios de refracción mediante evaluaciones de tecnólogos médicos especializados en oftalmología.",
  "Desde su inauguración en 2020, el servicio ha sido altamente valorado y demandado por la comunidad.",
];

const opticaDetails = [
  { label: "Ubicación", value: "Av. Miraflores #1102, El Tabo." },
  {
    label: "Inscripción",
    value:
      "Carnet de identidad y certificado de inscripción de atención CECOSF o CESFAM El Tabo. El carnet de control sirve como respaldo.",
  },
  {
    label: "Solicitud de horas",
    value:
      "Requiere inscripción previa. La hora puede solicitarse llamando o acercándose a las dependencias.",
  },
  {
    label: "Horario",
    value:
      "Lunes a jueves de 8:30 a 13:00 hrs. y 14:00 a 16:00 hrs. Viernes de 8:30 a 13:00 hrs. y 14:00 a 15:00 hrs.",
  },
  { label: "Teléfono", value: "+56 44 235 1372" },
  {
    label: "Correo",
    value: "opticamunicipal@saludeltabo.cl",
    href: "mailto:opticamunicipal@saludeltabo.cl",
  },
];

const opticaObjectives = [
  "Permitir el acceso a la compra de lentes ópticos a un valor accesible para vecinos, trabajadores y estudiantes.",
  "Brindar un servicio óptico de calidad y a un valor accesible para las personas inscritas.",
  "Aumentar la capacidad resolutiva en corrección de vicios de refracción mediante lentes ópticos, disminuyendo listas de espera.",
];

export const metadata: Metadata = {
  title: "Dirección de Salud | Municipalidad de El Tabo",
  description:
    "Dirección de Salud de la Municipalidad de El Tabo: contacto, horarios de atención, red comunal y Óptica Municipal.",
};

function InfoCard({
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

export default function DireccionSaludPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Dirección de Salud de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#0a6f74]/68" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Dirección de Salud
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Gestión sanitaria municipal, programas de salud pública y red de
                atención comunal al servicio de las vecinas y vecinos de El Tabo.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto principal
              </p>
              <div className="mt-5 space-y-4">
                {contacts.slice(0, 4).map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-black text-white">{item.label}</p>
                    <p className="text-base font-semibold text-white/90">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {healthAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#0b274e]">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Sobre la dirección
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Coordinación de políticas, programas y recursos de salud.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/90">
                {description}
              </p>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Red comunal
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Datos de contacto
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {contacts.map((contact) => (
                    <InfoCard key={contact.label} {...contact} />
                  ))}
                </div>
              </article>

              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Atención
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Horarios
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {schedules.map((schedule) => (
                    <InfoCard key={schedule.label} {...schedule} />
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:py-16 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                Servicio municipal
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                Óptica Municipal
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                La Óptica Municipal, dependiente de la Dirección de Salud, busca
                entregar atención oftalmológica y acceso a lentes ópticos para la
                comunidad.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {opticaDetails.map((item) => (
                  <InfoCard key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-[#0b274e]">
                  Información del servicio
                </h3>
                <div className="mt-5">
                  <NumberedList items={opticaInfo} />
                </div>
              </article>

              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-[#0b274e]">
                  Objetivos
                </h3>
                <div className="mt-5">
                  <NumberedList items={opticaObjectives} />
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
