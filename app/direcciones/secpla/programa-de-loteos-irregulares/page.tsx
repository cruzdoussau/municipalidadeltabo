import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage =
  "/images/direccion-obras-municipales/hero-direccion-obras-municipales.jpg";

const intro =
  "El Programa de Loteos Irregulares, establecido bajo la Ley 20.234 y vigente hasta el 31 de enero de 2030, permite sanear y regularizar loteos urbanos o rurales que no cuentan con permiso o recepción municipal, siempre que cumplan los requisitos establecidos.";

const contact = [
  { label: "Encargado", value: "Cristian Mella Berrios" },
  { label: "Teléfono", value: "+56 9 7131 8802", href: "tel:+56971318802" },
  {
    label: "Correo electrónico",
    value: "obras@eltabo.cl",
    href: "mailto:obras@eltabo.cl",
  },
];

const highlights = [
  {
    title: "Ley 20.234",
    text: "Procedimiento simplificado para sanear loteos existentes urbanos o rurales.",
  },
  {
    title: "Vigencia",
    text: "La ley se encuentra vigente hasta el 31 de enero de 2030.",
  },
  {
    title: "Mejoramiento urbano",
    text: "Permite acceder a financiamiento estatal y programas MINVU para urbanización.",
  },
];

const procedures = [
  {
    title:
      "Procedimiento para sanear y regularizar las condiciones de urbanización en loteos existentes",
    details: [
      "Los loteos urbanos o rurales que no cuenten con permiso de loteo o recepción de loteo de la Dirección de Obras Municipales de El Tabo, y que cumplan los requisitos de la ley, podrán acogerse por una sola vez al procedimiento simplificado de regularización.",
      "La Ley 20.234 permite sanear las condiciones de urbanización de loteos que no han sido recepcionados por no cumplir exigencias como agua potable, pavimentación, áreas verdes, ancho de calles o tamaños prediales.",
      "La recepción provisoria habilita a postular a programas de financiamiento urbano y mejoramiento del Ministerio de Vivienda y Urbanismo.",
      "Una vez ejecutadas las obras de urbanización necesarias, podrá obtenerse el certificado de recepción definitiva.",
    ],
  },
  {
    title:
      "Requisitos para la regularización de loteos por la Ley 20.234 y sus modificaciones",
    details: [
      "Si el loteo se encuentra fuera del área de concesión de ESVAL, deberá realizar saneamiento sanitario por Seremi de Salud.",
      "El loteo debe encontrarse materializado de hecho con anterioridad al 31 de diciembre de 2018 o formar parte del catastro de campamentos del año 2019 del Ministerio de Vivienda y Urbanismo.",
      "No debe contar con permiso de loteo o recepción de loteo.",
      "En radio urbano, más del 70% de los lotes deben contar con residentes. En área rural, la cifra exigida es de 30%.",
      "Las viviendas ubicadas en el loteo deben tener una tasación máxima de 2.000 UF, según el procedimiento de tasación realizado por la Dirección de Obras.",
      "El plano del loteo debe indicar los lotes edificados, metros construidos aproximados, destino de las edificaciones, clasificación y categoría conforme a la tabla de costos unitarios por metro cuadrado.",
      "No debe localizarse en áreas de riesgo, protección de recursos naturales, protección de patrimonio cultural o áreas declaradas de utilidad pública, salvo que corresponda acompañar estudios y obras de mitigación conforme a normativa.",
      "No deben existir reclamaciones pendientes ante la Dirección de Obras Municipales al 31 de diciembre de 2018 por incumplimiento de normas urbanísticas.",
    ],
  },
  {
    title:
      "Procedimiento para sanear y regularizar loteos por la Ley 20.234 y sus modificaciones",
    details: [
      "Solicitar una cita al departamento de regularizaciones de SECPLA para confirmar que el predio cumple con los requisitos de materialización al 31 de diciembre de 2018 y que no se encuentra en áreas restringidas.",
      "Ingresar una solicitud suscrita por interesados que representen al menos el 30% de los derechos del loteo, explicando el origen del loteo irregular, razones por las que no cuenta con permiso o recepción municipal, número de sitios, individualización y título de ocupación.",
      "Presentar una declaración jurada simple manifestando la voluntad de ceder al dominio público las superficies destinadas a vialidades, áreas verdes y equipamiento.",
      "Permitir la visita de un profesional competente al loteo para realizar levantamiento topográfico y constructivo.",
      "Ingresar fotocopias de documentos que avalen los requisitos: escritura madre, inscripción en el conservador de la cesión de derecho y/o título de dominio, certificado de residencia, cédula de identidad y comprobante de pago de servicios básicos.",
      "Informar el número de sitios que conforman el loteo, cuáles se encuentran edificados y con título de dominio, dimensiones, metros construidos aproximados, destino de edificaciones y clasificación correspondiente.",
      "Ingresar un plano del loteo suscrito por profesional competente, a escala adecuada y elaborado sobre levantamiento topográfico, que grafique accesos, viviendas existentes, lotes de uso común y áreas destinadas a bienes nacionales de uso público.",
      "Presentar autorización de excepción en vialidades emitida por la Secretaría Regional Ministerial de Vivienda y Urbanismo de Valparaíso, cuando sea requerida.",
      "En un plazo de 60 días desde la entrega de la totalidad de antecedentes, la Dirección de Obras Municipales responderá con observaciones a subsanar o con la entrega del certificado de recepción provisoria.",
      "Con el certificado de recepción provisoria se indicarán las condiciones de urbanización que el loteo debe cumplir en un plazo de cinco años, renovable por una sola vez, para obtener la recepción definitiva.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Programa de Loteos Irregulares | SECPLA | Municipalidad de El Tabo",
  description:
    "Programa de Loteos Irregulares de El Tabo: Ley 20.234, requisitos, procedimiento de regularización, contacto y antecedentes necesarios.",
};

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

function ProcedureAccordion() {
  return (
    <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
          Procedimientos del programa
        </p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-[#0b274e]">
          Regularización de loteos
        </h2>
      </div>

      <div className="grid gap-3 p-6">
        {procedures.map((procedure, index) => (
          <details
            key={procedure.title}
            className="group rounded-lg bg-[#f8fbff] p-4 open:bg-white open:ring-1 open:ring-[#d9e6f5]"
          >
            <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_28px] gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                {index + 1}
              </span>
              <span className="pt-1 text-sm font-black leading-7 text-[#0b274e]">
                {procedure.title}
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e8f0fa] text-lg font-black text-[#0b274e] transition group-open:rotate-45">
                +
              </span>
            </summary>

            <ul className="ml-[58px] mt-4 grid gap-2 border-l-2 border-[#dbe8f5] pl-4">
              {procedure.details.map((detail) => (
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

export default function ProgramaLoteosIrregularesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Programa de Loteos Irregulares en El Tabo"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#596447]/66" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                SECPLA
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Programa de Loteos Irregulares
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Orientación para sanear y regularizar loteos urbanos o rurales
                conforme a la Ley 20.234.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto del programa
              </p>
              <div className="mt-5 space-y-4">
                {contact.map((item) => (
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
                Sobre el programa
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Una vía para ordenar y mejorar las condiciones de urbanización.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-white/90">
                <p>{intro}</p>
                <p>
                  Este procedimiento busca mejorar condiciones como acceso a
                  agua potable, pavimentación y áreas verdes, facilitando que
                  los propietarios accedan a financiamiento estatal y programas
                  de mejoramiento urbano del MINVU.
                </p>
              </div>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Datos de contacto
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Atención del programa
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-3">
                  {contact.map((item) => (
                    <ContactCard key={item.label} {...item} />
                  ))}
                </div>
              </article>

              <ProcedureAccordion />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
