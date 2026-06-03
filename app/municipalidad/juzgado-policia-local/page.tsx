import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type FormItem = {
  title: string;
  description: string;
  href: string;
  type: "DOCX" | "PDF";
};

type ManualSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const forms: FormItem[] = [
  {
    title: "Notificación por correo electrónico - Persona natural",
    description:
      "Solicitud para autorizar notificaciones del tribunal mediante correo electrónico para persona natural.",
    href: "/documentos/juzgado-policia-local/notificacion-correo-electronico-persona-natural.docx",
    type: "DOCX",
  },
  {
    title: "Notificación por correo electrónico - Persona jurídica",
    description:
      "Solicitud para autorizar notificaciones del tribunal mediante correo electrónico para persona jurídica.",
    href: "/documentos/juzgado-policia-local/notificacion-correo-electronico-persona-juridica.docx",
    type: "DOCX",
  },
  {
    title: "Reposición",
    description:
      "Formulario para presentar una solicitud de reposición ante una resolución del Juzgado de Policía Local.",
    href: "/documentos/juzgado-policia-local/reposicion.docx",
    type: "DOCX",
  },
  {
    title: "Descargos",
    description:
      "Formulario para presentar descargos frente a una denuncia, infracción o citación.",
    href: "/documentos/juzgado-policia-local/descargos.docx",
    type: "DOCX",
  },
  {
    title: "Exhorto por prescripción de multas TAG",
    description:
      "Solicitud asociada a exhorto por prescripción de multas TAG.",
    href: "/documentos/juzgado-policia-local/exhorto-prescripcion-multas-tag.docx",
    type: "DOCX",
  },
  {
    title: "Cumple lo ordenado",
    description:
      "Escrito para informar al tribunal el cumplimiento de una resolución u orden emitida.",
    href: "/documentos/juzgado-policia-local/cumple-lo-ordenado.docx",
    type: "DOCX",
  },
  {
    title: "Se notifica expresamente",
    description:
      "Formulario para dejar constancia expresa de notificación en una causa.",
    href: "/documentos/juzgado-policia-local/se-notifica-expresamente.docx",
    type: "DOCX",
  },
  {
    title: "Solicita nuevo día y hora",
    description:
      "Solicitud para pedir una nueva fecha y hora de audiencia o comparecencia.",
    href: "/documentos/juzgado-policia-local/solicita-nuevo-dia-y-hora.docx",
    type: "DOCX",
  },
  {
    title: "Solicita certificación de ejecutoria",
    description:
      "Formulario para solicitar certificación de ejecutoria ante el tribunal.",
    href: "/documentos/juzgado-policia-local/solicita-certificacion-de-ejecutoria.docx",
    type: "DOCX",
  },
  {
    title: "Solicita que se dicte sentencia",
    description:
      "Solicitud para pedir que se dicte sentencia en la causa correspondiente.",
    href: "/documentos/juzgado-policia-local/solicita-que-se-dicte-sentencia.docx",
    type: "DOCX",
  },
  {
    title: "Suspensión de comparendo por falta de notificación",
    description:
      "Formulario para solicitar suspensión de comparendo cuando exista falta de notificación.",
    href: "/documentos/juzgado-policia-local/suspension-de-comparendo-por-falta-notificacion.docx",
    type: "DOCX",
  },
  {
    title: "Glosario de términos",
    description:
      "Documento de apoyo con conceptos relevantes del procedimiento ante el Juzgado de Policía Local.",
    href: "/documentos/juzgado-policia-local/glosario-terminos.pdf",
    type: "PDF",
  },
];

const manualSections: ManualSection[] = [
  {
    title: "Inicio del procedimiento",
    paragraphs: [
      "Carabineros, Inspectores Fiscales o Municipales que sorprendan infracciones contravencionales o faltas que sean de competencia de los Juzgados de Policía Local deberán denunciarlas al juzgado competente del lugar donde se verifica el hecho y citar al infractor para que comparezca a la audiencia más próxima, indicando día y hora, bajo apercibimiento de proceder en rebeldía de la persona citada.",
    ],
  },
  {
    title: "Competencia del Juzgado de Policía Local",
    paragraphs: [
      "El Juzgado de Policía Local conoce, entre otras materias, infracciones vinculadas a tránsito, urbanismo, ordenanzas municipales, rentas municipales, copropiedad inmobiliaria, derechos de los consumidores, votaciones populares, vigilantes privados y expendio o consumo de bebidas alcohólicas.",
    ],
    bullets: [
      "Infracciones a la Ley de Tránsito y afines.",
      "Infracciones a la Ley General de Urbanismo y Construcciones y su Ordenanza.",
      "Infracciones a ordenanzas municipales.",
      "Infracciones a la Ley de Rentas Municipales.",
      "Infracciones a la Ley sobre Copropiedad Inmobiliaria.",
      "Infracciones a la Ley sobre Protección de los Derechos de los Consumidores.",
      "Infracciones a la Ley sobre Votaciones Populares y Escrutinios.",
      "Infracciones a la Ley sobre Funcionamiento de Vigilantes Privados.",
      "Infracciones a la Ley sobre Expendio y Consumo de Bebidas Alcohólicas.",
    ],
  },
  {
    title: "Notificaciones",
    paragraphs: [
      "Las resoluciones que se dicten en los procesos tramitados ante los Juzgados de Policía Local habitualmente se notifican por carta certificada remitida al domicilio de la persona. Este puede corresponder al domicilio otorgado por las partes, al que registre su licencia de conducir o, en partes empadronados, al domicilio del propietario inscrito del vehículo en el Registro de Vehículos Motorizados.",
      "Las resoluciones también pueden ser notificadas mediante correo electrónico siempre que el interviniente así lo solicite y se considere un mecanismo eficaz que no genere indefensión.",
      "Se excluyen de esta forma de notificación las siguientes hipótesis:",
    ],
    bullets: [
      "Notificaciones de querella, denuncias y demandas, que deberán notificarse personalmente.",
      "Sentencias que impongan multas superiores a 5 UTM, cancelen o suspendan licencias para conducir, o establezcan daños y perjuicios superiores a 10 UTM; deberán notificarse personalmente o por cédula.",
      "Sentencias que impongan pena de prisión, que deberán ser notificadas personalmente al condenado.",
    ],
  },
  {
    title: "Plazo para el pago de una multa",
    paragraphs: [
      "Las multas deben ser pagadas dentro del quinto día hábil desde la notificación de la sentencia. Se consideran inhábiles los días domingos y festivos.",
      "Cualquier persona puede proceder al pago de una multa a nombre del infractor; sin embargo, solo el infractor o su representante puede comparecer o requerir la intervención del Juez.",
    ],
  },
  {
    title: "Multas con pago anticipado",
    paragraphs: [
      "Las multas de tránsito calificadas como leves, menos graves y graves reducen su valor a un 25% del rango máximo si son pagadas dentro de los 5 días siguientes a la fecha de emisión de la boleta de citación. Quedan excluidas las infracciones calificadas como gravísimas.",
      "Las multas por infracción a la Ley sobre Expendio y Consumo de Bebidas Alcohólicas, relativas al consumo o a ser sorprendido en manifiesto estado de ebriedad, reducen su valor a un 50% si son pagadas dentro de los 5 días siguientes a la fecha de emisión de la boleta de citación.",
    ],
  },
  {
    title: "Incumplimiento del pago de una multa",
    paragraphs: [
      "El incumplimiento del pago de la multa se hará efectivo en forma sustitutiva, emitiendo una orden de reclusión nocturna, diurna o diaria hasta por 15 días.",
      "En denuncias de vehículos en movimiento o cuyo conductor no se encuentre identificado, se informa al Registro de Multas de Tránsito No Pagadas la placa patente del vehículo usado al cometer la infracción, lo que impedirá obtener el permiso de circulación sin previo pago de la multa.",
    ],
  },
  {
    title: "Licencias para conducir",
    paragraphs: [
      "Para recuperar una licencia retirada o retenida, el infractor debe cumplir con los requisitos indicados por el tribunal.",
      "La suspensión de licencia para conducir se cuenta desde el día siguiente al de la notificación de la sentencia que impone la suspensión y rige hasta la medianoche del día fijado para su cumplimiento.",
    ],
    bullets: [
      "Pagar la multa correspondiente.",
      "Comparecer personalmente al Juzgado de Policía Local, salvo que se presente un tercero con poder notarial suficiente.",
      "Presentar la boleta de citación original. En caso de extravío, se debe extender una declaración jurada indicando que la boleta no se encuentra retenida por Carabineros, Inspectores Municipales ni otro tribunal.",
    ],
  },
  {
    title: "Vehículos retirados de circulación",
    paragraphs: [
      "Para obtener la devolución de un vehículo retirado de circulación y puesto a disposición del Juzgado de Policía Local, se deben cumplir los requisitos establecidos para el retiro.",
    ],
    bullets: [
      "Pagar la multa correspondiente.",
      "Comparecer personalmente o mediante un tercero con poder notarial suficiente para actuar ante el Juzgado de Policía Local y ante el Aparcadero Municipal.",
      "Acompañar Certificado de Inscripción y Anotaciones Vigentes del vehículo emitido por el Servicio de Registro Civil e Identificación el mismo día en que se efectuará el retiro.",
    ],
  },
  {
    title: "Exhortos",
    paragraphs: [
      "El exhorto puede solicitarlo el conductor a quien Carabineros de Chile curse una infracción por incumplimiento a la Ley de Tránsito con retención de licencia para conducir. Por ejemplo, si una infracción se cursa en otra comuna, el Juzgado de Policía Local de El Tabo puede pedir vía exhorto al tribunal correspondiente que remita la licencia, previo pago de multa.",
      "No procede exhorto en infracciones asociadas a accidentes de tránsito de los que resulten lesiones o daños materiales a terceros. El exhorto puede ser requerido hasta la fecha de citación al Juzgado de Policía Local exhortado.",
      "El pago de la multa impuesta por sentencia dictada por otro Juzgado de Policía Local se realiza por medio de vale a la vista bancario, normalmente emitido a nombre de la municipalidad del juzgado que impuso la multa, el cual debe ser entregado al Juzgado de Policía Local de El Tabo para su remisión.",
      "En caso de existir suspensión de licencia para conducir, se hará efectiva desde que se notifica al interesado y se le exige devolver el permiso provisorio si fue otorgado.",
    ],
    bullets: [
      "Cédula de identidad vigente y fotocopia por ambos lados.",
      "Boleta de citación entregada por Carabineros de Chile y su fotocopia.",
      "Acreditar residencia permanente en la comuna de El Tabo.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Juzgado de Policía Local | Municipalidad de El Tabo",
  description:
    "Información, contacto y formularios descargables del Juzgado de Policía Local de El Tabo.",
};

export default function JuzgadoPoliciaLocalPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/juzgado-policia-local/hero-jpl.png"
              alt="Juzgado de Policía Local de El Tabo"
              className="h-full w-full object-cover opacity-28"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/92 to-[#143c74]/72" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Municipalidad
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Juzgado de Policía Local
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Bienvenido al portal del Juzgado de Policía Local de El Tabo.
                En él encontrarás todo lo necesario para actuar ante nuestro
                magistrado.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto
              </p>
              <dl className="mt-5 space-y-4 text-sm leading-6 text-white/92">
                <div>
                  <dt className="font-black text-white">Juez de Policía Local</dt>
                  <dd>Luís Díaz Aracena</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Secretaria Abogada</dt>
                  <dd>Karla Rivillo Machuca</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Correo de contacto</dt>
                  <dd>
                    <a className="underline" href="mailto:juzgado@eltabo.cl">
                      juzgado@eltabo.cl
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-black text-white">Notificaciones</dt>
                  <dd>notificaciones@eltabo.cl</dd>
                </div>
                <div>
                  <dt className="font-black text-white">Teléfonos</dt>
                  <dd>352203561 - 352203510</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Importante
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Presentación de escritos y notificaciones
              </h2>
              <p className="mt-5 text-base leading-7 text-white/88">
                La notificación por correo electrónico de las resoluciones que
                practique este tribunal se efectuará desde la casilla
                notificaciones@eltabo.cl. Este correo es solo de envío de
                notificaciones, no recibe consultas ni tramita escritos o
                peticiones.
              </p>
              <p className="mt-4 text-base leading-7 text-white/88">
                Para consultas, utiliza la casilla juzgado@eltabo.cl o los
                teléfonos oficiales del tribunal.
              </p>
            </aside>

            <div>
              <figure className="mb-6 overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <img
                  src="/images/juzgado-policia-local/foto-atencion-jpl.jpg"
                  alt="Atención de público en el Juzgado de Policía Local de El Tabo"
                  className="h-[320px] w-full object-cover object-center md:h-[420px]"
                />
                <figcaption className="border-t border-slate-100 px-5 py-3 text-sm font-semibold text-slate-600">
                  Atención de público en el Juzgado de Policía Local de El Tabo.
                </figcaption>
              </figure>

              <div className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Formularios
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Descargas disponibles
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Selecciona el formulario que corresponda, descárgalo y
                  complétalo para su presentación ante el Juzgado de Policía
                  Local.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {forms.map((form) => (
                  <article
                    key={form.href}
                    className="flex h-full flex-col rounded-xl border border-[#e7edf5] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-black leading-tight text-[#0b274e]">
                        {form.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-[#e9f6f8] px-3 py-1 text-xs font-black text-[#0b4ca8]">
                        {form.type}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      {form.description}
                    </p>
                    <a
                      href={form.href}
                      download
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0b274e] px-5 py-3 text-sm font-black text-white transition hover:bg-[#143c74]"
                    >
                      Descargar formulario
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1d4f8f]">
                  Orientación
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#0b274e] md:text-4xl">
                  Manual de procedimiento ante el Juzgado de Policía Local
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Estos son los principales temas informativos disponibles para
                  orientar a las personas que deben realizar trámites ante el
                  tribunal.
                </p>
              </div>

              <div className="space-y-3">
                {manualSections.map((section, index) => (
                  <details
                    key={section.title}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
                  >
                    <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr_24px] gap-4 p-4 marker:content-none">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <span className="pt-1 text-sm font-black leading-6 text-[#0b274e]">
                        {section.title}
                      </span>
                      <span className="pt-1 text-xl font-black text-[#0b274e] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets && (
                        <ul className="mt-4 list-disc space-y-2 pl-5">
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
