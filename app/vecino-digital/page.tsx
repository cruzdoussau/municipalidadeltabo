"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type ModalType =
  | "p-circulacion"
  | "p-municipal"
  | "d-aseo"
  | "infraccion"
  | "tag"
  | "multas-varios"
  | null;

type ModalProps = {
  onClose: () => void;
};

const tramites = [
  {
    title: "P.Circulación",
    text: "Pago y consulta de permiso de circulación municipal.",
    icon: "🚗",
    modal: "p-circulacion" as ModalType,
  },
  {
    title: "P.Municipal",
    text: "Consulta y pago de patentes comerciales municipales.",
    icon: "🏢",
    modal: "p-municipal" as ModalType,
  },
  {
    title: "D. de Aseo",
    text: "Pago y regularización de derechos de aseo municipal.",
    icon: "🗑️",
    modal: "d-aseo" as ModalType,
  },
  {
    title: "Infracción",
    text: "Consulta y pago de infracciones cursadas en la comuna.",
    icon: "⚖️",
    modal: "infraccion" as ModalType,
  },
  {
    title: "TAG",
    text: "Consulta de multas asociadas a TAG por placa patente.",
    icon: "🏷️",
    modal: "tag" as ModalType,
  },
  {
    title: "Multas P.Varios",
    text: "Consulta y pago de multas por permisos varios u otros conceptos.",
    icon: "🧩",
    modal: "multas-varios" as ModalType,
  },
];

function PCirculacionModal({ onClose }: ModalProps) {
  const [tab, setTab] = React.useState("pagar");

  const tabs = [
    { id: "pagar", label: "Pagar permiso", icon: "💳" },
    { id: "traslado", label: "Traslado", icon: "🔁" },
    { id: "verificar", label: "Verificar placa", icon: "🔎" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-blue-700">
              Vecino Digital
            </p>
            <h2 className="text-2xl font-black text-[#061f5c]">
              Permiso de Circulación
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-100"
            type="button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(92vh-88px)] overflow-y-auto p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-3xl bg-[#00174a] p-6 text-white">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/20">
                🚗
              </div>

              <h3 className="mt-5 text-3xl font-black">P.Circulación</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Servicio de pago de patente vehicular. Incluye revisión de
                multas, permiso de circulación y SOAP cuando corresponda.
              </p>

              <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-4 text-sm ring-1 ring-white/15">
                <p>
                  <strong>Para pagar:</strong> ingresa RUT/RUN y patente sin
                  guion.
                </p>
                <p>
                  <strong>Si no aparece:</strong> puedes verificar placa o
                  solicitar traslado.
                </p>
                <p>
                  <strong>Objetivo:</strong> orientar al vecino antes de ingresar
                  al sistema.
                </p>
              </div>
            </aside>

            <section>
              <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-100 p-2">
                {tabs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTab(item.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition ${
                      tab === item.id
                        ? "bg-blue-700 text-white shadow"
                        : "text-[#17356f] hover:bg-white"
                    }`}
                    type="button"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>

              {tab === "pagar" && (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-2xl font-black text-[#061f5c]">
                      ¿Qué debe ingresar para pagar?
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-[#17356f]">
                      Para buscar el permiso de circulación, el vecino debe
                      ingresar su <strong>RUT/RUN</strong> y la{" "}
                      <strong>patente asociada al vehículo sin guion</strong>.
                      Luego debe presionar <strong>Buscar Placa</strong> para
                      validar los datos y continuar con el proceso de pago.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-lg">
                    <div className="rounded-t-xl bg-blue-700 px-4 py-3 font-black text-white">
                      BIENVENIDO VISITA, TE INFORMAMOS QUE:
                    </div>

                    <div className="grid gap-6 p-4 md:grid-cols-[1fr_220px]">
                      <div>
                        <span className="inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm font-bold text-white">
                          PERMISO DE CIRCULACIÓN 🚗
                        </span>

                        <h5 className="mt-6 text-xl font-black text-blue-600 underline">
                          Detalle:
                        </h5>

                        <p className="mt-3 text-xl font-bold leading-relaxed text-blue-500/80">
                          Servicio de pago Patente Vehicular, incluye Multas,
                          Permiso de Circulación y SOAP.
                        </p>

                        <p className="mt-8 font-semibold text-blue-500/80">
                          En caso de algún problema con su vehículo puede
                          validar presionando el botón VERIFICAR PLACA.
                        </p>

                        <p className="mt-8 text-xl uppercase text-blue-500/80">
                          Ingrese RUT/RUN y patente asociada vehículo sin guión:
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
                          <input
                            className="rounded border border-slate-300 px-4 py-3 text-slate-500"
                            value="EJEMPLO RUT/RUN: 12345678"
                            readOnly
                          />
                          <input
                            className="rounded border border-slate-300 px-4 py-3 text-slate-500"
                            value="EJEMPLO PLACA: AAAA12"
                            readOnly
                          />
                          <button
                            className="rounded-xl bg-green-500 px-4 py-3 font-black text-white"
                            type="button"
                          >
                            Buscar Placa
                          </button>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <button
                          className="w-full rounded-xl border-2 border-slate-300 bg-white p-5 text-center font-bold text-slate-600 shadow-sm"
                          type="button"
                        >
                          🔁
                          <br />
                          Solicitud de traslado
                        </button>

                        <button
                          className="w-full rounded-xl border-2 border-slate-300 bg-white p-5 text-center font-bold text-slate-600 shadow-sm"
                          type="button"
                        >
                          🚗
                          <br />
                          Verificar Placa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tab === "traslado" && (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-2xl font-black text-[#061f5c]">
                      ¿Cómo hacer un traslado de vehículo?
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-[#17356f]">
                      Si el vehículo no está inscrito en la municipalidad, el
                      usuario debe completar una solicitud de traslado. El
                      formulario se organiza en tres pasos: datos personales,
                      datos del vehículo y antecedentes del permiso de
                      circulación anterior.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      [
                        "Paso 1",
                        "Datos personales",
                        "RUT, nombre o razón social, dirección, comuna, teléfono, email y observación de la petición.",
                      ],
                      [
                        "Paso 2",
                        "Datos del vehículo",
                        "Placa, DV, tipo de vehículo, marca, modelo, año, combustible, transmisión, motor y chasis.",
                      ],
                      [
                        "Paso 3",
                        "Permiso anterior",
                        "Municipalidad de origen, número de serie o folio y año del último permiso emitido.",
                      ],
                    ].map(([step, title, text]) => (
                      <article
                        key={step}
                        className="rounded-2xl bg-blue-50 p-5 ring-1 ring-blue-100"
                      >
                        <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-black text-white">
                          {step}
                        </span>
                        <h5 className="mt-4 text-xl font-black text-[#061f5c]">
                          {title}
                        </h5>
                        <p className="mt-3 text-sm leading-relaxed text-[#17356f]">
                          {text}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {tab === "verificar" && (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-2xl font-black text-[#061f5c]">
                      ¿Cómo consultar una patente inscrita?
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-[#17356f]">
                      La opción <strong>Verificar placa</strong> permite validar
                      el estado del vehículo en la municipalidad. Esta consulta
                      no valida SOAP ni revisión técnica; solo informa si el
                      vehículo existe o no en el municipio.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                    <div className="rounded-xl bg-slate-100 p-4 text-center text-2xl font-black text-slate-700">
                      ☑ Validación Estado Vehículo en Municipio
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-[110px_1fr]">
                      <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-5xl shadow">
                        🚗
                      </div>

                      <div>
                        <p className="font-black text-slate-700 underline">
                          Detalle:
                        </p>

                        <p className="mt-2 font-bold text-slate-700">
                          Con esta opción se puede validar el estado en que se
                          encuentra su vehículo en la municipalidad,{" "}
                          <span className="text-orange-500">
                            no se valida SOAP y revisión técnica.
                          </span>
                        </p>

                        <p className="mt-6 font-black uppercase text-slate-700">
                          Ingrese RUT/RUN y patente asociada vehículo sin guión:
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_150px]">
                          <input
                            className="rounded border border-slate-300 px-4 py-3 text-slate-600"
                            value="19757100-4"
                            readOnly
                          />
                          <input
                            className="rounded border border-slate-300 px-4 py-3 text-slate-600"
                            value="UW1742"
                            readOnly
                          />
                          <button
                            className="rounded-xl bg-green-600 px-4 py-3 font-black text-white"
                            type="button"
                          >
                            Buscar Placa
                          </button>
                        </div>

                        <div className="mt-8 text-xl font-black text-slate-900">
                          <p>ESTADO VEHÍCULO EN MUNICIPIO:</p>
                          <p className="mt-6">
                            1- El vehículo no existe en la municipalidad
                          </p>
                          <p>
                            2- PARA PAGAR EN ESTA MUNICIPALIDAD, DEBE REALIZAR
                            EL TRASLADO DEL VEHÍCULO.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function PatenteMunicipalModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-blue-700">
              Vecino Digital
            </p>
            <h2 className="text-2xl font-black text-[#061f5c]">
              Patente Municipal / Comercial
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-100"
            type="button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(92vh-88px)] overflow-y-auto p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-3xl bg-[#00174a] p-6 text-white">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/20">
                🏢
              </div>

              <h3 className="mt-5 text-3xl font-black">P.Municipal</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Servicio orientado al pago en línea de patentes comerciales
                asociadas a negocios registrados en la comuna.
              </p>

              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed ring-1 ring-white/15">
                <p>
                  <strong>Para pagar:</strong> necesitas el RUT del negocio y el
                  rol comercial o rol municipal.
                </p>
                <p className="mt-3">
                  <strong>Ante dudas:</strong> puedes contactar a OIRS para
                  recibir orientación.
                </p>
              </div>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800">
                  Información importante
                </span>

                <h4 className="mt-4 text-2xl font-black text-[#061f5c]">
                  ℹ️ Pago en línea de Patentes Comerciales
                </h4>

                <p className="mt-4 text-base leading-relaxed text-[#17356f]">
                  Para realizar el pago en línea de{" "}
                  <strong>Patentes Comerciales</strong>, es necesario contar con
                  el <strong>rol comercial</strong> y el{" "}
                  <strong>RUT de su negocio</strong>.
                </p>

                <div className="mt-6 rounded-2xl bg-yellow-50 p-5 text-[#674d00] ring-1 ring-yellow-100">
                  <p className="font-bold">
                    📌 Si tiene dudas, puede contactarse con OIRS para obtener
                    más información.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                <div className="rounded-t-xl bg-blue-700 px-4 py-3 font-black text-white">
                  BIENVENIDO VISITA, TE INFORMAMOS QUE:
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-full bg-slate-800 px-5 py-2 text-sm font-bold uppercase text-white shadow">
                    BUSCAR PATENTE MUNICIPAL
                  </span>

                  <p className="mt-8 text-center text-xl font-medium uppercase text-blue-500/80">
                    Ingrese RUT/RUN y N° de rol municipal:
                  </p>

                  <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-[1fr_1fr_140px]">
                    <input
                      className="rounded border border-slate-300 px-4 py-3 text-slate-500"
                      value="Ejemplo RUT/RUN: 12345678"
                      readOnly
                    />
                    <input
                      className="rounded border border-slate-300 px-4 py-3 text-slate-500"
                      value="Ejemplo ROL: 123456"
                      readOnly
                    />
                    <button
                      className="rounded-xl bg-green-500 px-4 py-3 font-black text-white shadow"
                      type="button"
                    >
                      Buscar ROL
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function DerechosAseoModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-blue-700">
              Vecino Digital
            </p>
            <h2 className="text-2xl font-black text-[#061f5c]">
              Derechos de Aseo
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-100"
            type="button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(92vh-88px)] overflow-y-auto p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-3xl bg-[#00174a] p-6 text-white">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/20">
                🗑️
              </div>

              <h3 className="mt-5 text-3xl font-black">D. de Aseo</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Servicio de recolección y disposición de residuos domiciliarios
                que presta el municipio a la comunidad.
              </p>

              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed ring-1 ring-white/15">
                <p>
                  <strong>Para pagar:</strong> necesitas el rol predial de tu
                  domicilio.
                </p>
                <p className="mt-3">
                  <strong>Importante:</strong> el rol debe ingresarse con ceros
                  adicionales según el formato de búsqueda del sistema.
                </p>
              </div>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800">
                  Información importante
                </span>

                <h4 className="mt-4 text-2xl font-black text-[#061f5c]">
                  ℹ️ Pago en línea de Derechos de Aseo
                </h4>

                <p className="mt-4 text-base leading-relaxed text-[#17356f]">
                  Para realizar el pago en línea de los{" "}
                  <strong>Derechos de Aseo</strong>, es necesario contar con el{" "}
                  <strong>rol predial de su domicilio</strong>.
                </p>

                <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-[#17356f] ring-1 ring-blue-100">
                  <h5 className="font-black text-[#061f5c]">
                    🔎 ¿Dónde encontrarlo?
                  </h5>
                  <p className="mt-2 leading-relaxed">
                    Debe ingresar al sitio web del Servicio de Impuestos
                    Internos, buscar su dirección y obtener el número de rol
                    predial.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6 text-[#674d00] shadow-sm">
                <h4 className="text-xl font-black">
                  🧾 ¿Cómo ingresar el rol en Vecino Digital?
                </h4>

                <p className="mt-3 leading-relaxed">
                  Para que el sistema reconozca correctamente el rol predial,
                  este debe ser ingresado con ceros adicionales.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl bg-white p-5 ring-1 ring-yellow-100">
                    <p className="font-bold text-slate-700">
                      Rol predial ejemplo:{" "}
                      <span className="text-[#061f5c]">123–4</span>
                    </p>
                    <p className="mt-2 text-slate-700">
                      Ingresar en Vecino Digital como:
                    </p>
                    <p className="mt-2 rounded-xl bg-slate-100 px-4 py-3 font-black text-[#061f5c]">
                      00001–23004
                    </p>
                  </article>

                  <article className="rounded-2xl bg-white p-5 ring-1 ring-yellow-100">
                    <p className="font-bold text-slate-700">
                      Rol predial ejemplo:{" "}
                      <span className="text-[#061f5c]">1–234</span>
                    </p>
                    <p className="mt-2 text-slate-700">
                      Ingresar en Vecino Digital como:
                    </p>
                    <p className="mt-2 rounded-xl bg-slate-100 px-4 py-3 font-black text-[#061f5c]">
                      00001-00234
                    </p>
                  </article>
                </div>

                <p className="mt-5 leading-relaxed">
                  Esto permite cumplir con el criterio de búsqueda del sistema y
                  acceder sin inconvenientes a la información de su propiedad.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfraccionModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-blue-700">
              Vecino Digital
            </p>
            <h2 className="text-2xl font-black text-[#061f5c]">
              Infracción / Multas de Tránsito
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-100"
            type="button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(92vh-88px)] overflow-y-auto p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-3xl bg-[#00174a] p-6 text-white">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/20">
                🚗
              </div>

              <h3 className="mt-5 text-3xl font-black">Infracción</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Servicio orientado a la consulta y pago de multas de tránsito
                asociadas a un vehículo.
              </p>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800">
                  Información importante
                </span>

                <h4 className="mt-4 text-2xl font-black text-[#061f5c]">
                  ℹ️ Pago en línea de Multas de Tránsito
                </h4>

                <p className="mt-4 text-base leading-relaxed text-[#17356f]">
                  Para consultar o pagar <strong>multas de tránsito</strong>, es
                  necesario ingresar el <strong>RUT/RUN</strong> y la{" "}
                  <strong>patente asociada al vehículo sin guion</strong>.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                <div className="rounded-t-xl bg-blue-700 px-4 py-3 font-black text-white">
                  BIENVENIDO VISITA, TE INFORMAMOS QUE:
                </div>

                <div className="grid gap-6 p-5 md:grid-cols-[110px_1fr]">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-5xl shadow">
                    🚗
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-slate-800 px-5 py-2 text-sm font-bold uppercase text-white shadow">
                      MULTAS DE TRÁNSITO
                    </span>

                    <p className="mt-6 text-lg leading-relaxed text-blue-500/80">
                      <strong className="underline">Detalle:</strong>
                      <br />
                      Servicio de pago de multas de tránsito.
                    </p>

                    <p className="mt-8 text-xl uppercase text-blue-500/80">
                      Ingrese RUT/RUN y patente asociada vehículo sin guión:
                    </p>

                    <div className="mt-6 flex max-w-md flex-col gap-0">
                      <input
                        className="rounded-t border border-slate-300 px-4 py-4 text-slate-500"
                        value="EJEMPLO RUT/RUN: 12345"
                        readOnly
                      />
                      <input
                        className="rounded-b border border-slate-300 px-4 py-4 text-slate-500"
                        value="EJEMPLO PLACA: AAAA12"
                        readOnly
                      />
                    </div>

                    <button
                      className="mt-4 rounded-xl bg-green-500 px-6 py-3 font-black text-white shadow"
                      type="button"
                    >
                      Buscar Placa
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function TagModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-blue-700">
              Vecino Digital
            </p>
            <h2 className="text-2xl font-black text-[#061f5c]">
              TAG / Multas asociadas
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-100"
            type="button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(92vh-88px)] overflow-y-auto p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-3xl bg-[#00174a] p-6 text-white">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/20">
                🏷️
              </div>

              <h3 className="mt-5 text-3xl font-black">TAG</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Servicio de consulta de multas asociadas a TAG o cobros
                vinculados a la placa patente del vehículo.
              </p>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800">
                  Información importante
                </span>

                <h4 className="mt-4 text-2xl font-black text-[#061f5c]">
                  ℹ️ Consulta de multas TAG
                </h4>

                <p className="mt-4 text-base leading-relaxed text-[#17356f]">
                  Para consultar multas asociadas a <strong>TAG</strong>, el
                  vecino solo debe ingresar el{" "}
                  <strong>número de placa patente</strong>. El sistema buscará
                  automáticamente las multas asociadas al vehículo.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                <div className="rounded-t-xl bg-blue-700 px-4 py-3 font-black text-white">
                  BIENVENIDO VISITA, TE INFORMAMOS QUE:
                </div>

                <div className="grid gap-6 p-5 md:grid-cols-[110px_1fr]">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-5xl shadow">
                    🏷️
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-slate-800 px-5 py-2 text-sm font-bold uppercase text-white shadow">
                      CONSULTA MULTAS TAG
                    </span>

                    <p className="mt-6 text-lg leading-relaxed text-blue-500/80">
                      <strong className="underline">Detalle:</strong>
                      <br />
                      Servicio de consulta automática de multas TAG asociadas a
                      la placa patente.
                    </p>

                    <p className="mt-8 text-xl uppercase text-blue-500/80">
                      Ingrese número de placa patente:
                    </p>

                    <div className="mt-6 grid max-w-xl gap-4 md:grid-cols-[1fr_160px]">
                      <input
                        className="rounded border border-slate-300 px-4 py-4 text-slate-500"
                        value="EJEMPLO PLACA: AAAA12"
                        readOnly
                      />
                      <button
                        className="rounded-xl bg-green-500 px-6 py-3 font-black text-white shadow"
                        type="button"
                      >
                        Buscar Multas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultasVariosModal({ onClose }: ModalProps) {
  const metodos = [
    "R.U.N / R.U.T.",
    "ROL DE ASEO",
    "ROL PATENTE",
    "PATENTE VEHÍCULO",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-white/20">
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#f8fbff] px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-blue-700">
              Vecino Digital
            </p>
            <h2 className="text-2xl font-black text-[#061f5c]">
              Multas P.Varios / Pagos Varios
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-slate-600 shadow ring-1 ring-slate-200 transition hover:bg-slate-100"
            type="button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(92vh-88px)] overflow-y-auto p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-3xl bg-[#00174a] p-6 text-white">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 text-5xl ring-1 ring-white/20">
                🧩
              </div>

              <h3 className="mt-5 text-3xl font-black">Multas P.Varios</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Servicio para consultar deudas, multas o pagos asociados a
                distintos criterios de búsqueda disponibles en Vecino Digital.
              </p>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800">
                  Información importante
                </span>

                <h4 className="mt-4 text-2xl font-black text-[#061f5c]">
                  ℹ️ Consulta de Pagos Varios
                </h4>

                <p className="mt-4 text-base leading-relaxed text-[#17356f]">
                  En esta sección el vecino puede consultar si existen deudas
                  pendientes asociadas a su RUT/RUN, rol de aseo, rol patente o
                  patente de vehículo.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                <div className="rounded-t-xl bg-blue-700 px-4 py-3 font-black text-white">
                  BIENVENIDO VISITA, TE INFORMAMOS QUE:
                </div>

                <div className="bg-green-500 px-5 py-8 text-center text-2xl font-medium text-white">
                  No se encontraron deudas pendientes asociadas al RUT/RUN
                  019757100-4
                </div>

                <div className="p-5 text-center">
                  <span className="inline-flex rounded-full bg-slate-800 px-5 py-2 text-sm font-bold uppercase text-white shadow">
                    PAGOS VARIOS
                  </span>

                  <h5 className="mt-8 text-3xl font-light text-blue-500/80">
                    Seleccione un método de búsqueda:
                  </h5>

                  <div className="mt-8 grid gap-4 md:grid-cols-4">
                    {metodos.map((metodo, index) => (
                      <label
                        key={metodo}
                        className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-blue-50 p-4 text-center text-xl font-medium text-blue-500/90 ring-1 ring-blue-100"
                      >
                        <input
                          type="radio"
                          name="metodo-pagos-varios"
                          defaultChecked={index === 0}
                          className="h-5 w-5"
                        />
                        <span>{metodo}</span>
                      </label>
                    ))}
                  </div>

                  <p className="mt-8 text-base font-black uppercase text-blue-500/80">
                    El formato del RUT debe ser sin puntos ni guion
                  </p>

                  <p className="mt-2 text-xl font-black text-blue-500/80">
                    Ej: 123456781
                  </p>

                  <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-[1fr_180px]">
                    <input
                      className="rounded border border-slate-300 px-4 py-4 text-slate-500"
                      placeholder="Ingrese dato de búsqueda"
                    />
                    <button
                      className="rounded-xl bg-blue-600 px-6 py-3 font-black text-white shadow"
                      type="button"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VecinoDigitalPage() {
  const [activeModal, setActiveModal] = React.useState<ModalType>(null);
  const serviciosRef = React.useRef<HTMLElement | null>(null);

  const scrollToServicios = () => {
    serviciosRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-[#002d7a] py-16 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174a] via-[#002d7a]/90 to-[#0055c7]/40" />

          <div className="relative mx-auto max-w-[1040px] px-4">
            <span className="rounded-md bg-blue-700 px-4 py-2 text-xs font-black uppercase shadow-lg">
              Portal municipal
            </span>

            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              Vecino Digital
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium text-white/95">
              Un espacio pensado para acercar los servicios municipales a la
              comunidad, permitiendo consultar, solicitar y pagar trámites de
              forma simple, segura y sin filas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="rounded-full bg-white px-8 py-4 font-black text-[#00174a] shadow-lg"
                type="button"
              >
                Ir a Vecino Digital
              </button>

              <button
                onClick={scrollToServicios}
                className="rounded-full bg-blue-600 px-8 py-4 font-black text-white shadow-lg"
                type="button"
              >
                Ver trámites disponibles
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1040px] gap-6 px-4 py-14 md:grid-cols-3">
          <article className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
            <h2 className="text-2xl font-black text-[#061f5c]">
              Atención más rápida
            </h2>
            <p className="mt-3 leading-relaxed text-[#17356f]">
              Evita traslados innecesarios y accede a información municipal
              desde cualquier lugar.
            </p>
          </article>

          <article className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
            <h2 className="text-2xl font-black text-[#061f5c]">
              Trámites seguros
            </h2>
            <p className="mt-3 leading-relaxed text-[#17356f]">
              Acceso protegido para cuidar tus datos personales y el seguimiento
              de tus solicitudes.
            </p>
          </article>

          <article className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
            <h2 className="text-2xl font-black text-[#061f5c]">
              Municipio cercano
            </h2>
            <p className="mt-3 leading-relaxed text-[#17356f]">
              La información municipal organizada para que vecinas y vecinos
              puedan orientarse mejor.
            </p>
          </article>
        </section>

        <section
          ref={serviciosRef}
          className="mx-auto max-w-[1040px] scroll-mt-32 px-4 pb-16"
        >
          <div className="mb-8">
            <h2 className="text-4xl font-black tracking-tight text-[#061f5c]">
              Servicios disponibles
            </h2>
            <p className="mt-2 text-lg text-[#17356f]">
              Selecciona el servicio que necesitas realizar o consultar.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-blue-100">
            <div className="grid grid-cols-2 divide-x divide-y divide-blue-100 sm:grid-cols-3 lg:grid-cols-6">
              {tramites.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveModal(item.modal)}
                  className="group flex min-h-[150px] flex-col items-center justify-center p-5 text-center transition hover:bg-blue-50"
                  type="button"
                >
                  <div className="text-5xl text-blue-700 transition group-hover:-translate-y-1">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-lg font-black leading-tight text-slate-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#17356f]">
                    {item.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeModal === "p-circulacion" && (
          <PCirculacionModal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "p-municipal" && (
          <PatenteMunicipalModal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "d-aseo" && (
          <DerechosAseoModal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "infraccion" && (
          <InfraccionModal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "tag" && (
          <TagModal onClose={() => setActiveModal(null)} />
        )}

        {activeModal === "multas-varios" && (
          <MultasVariosModal onClose={() => setActiveModal(null)} />
        )}

        <section className="bg-slate-50 py-14">
          <div className="mx-auto grid max-w-[1040px] gap-8 px-4 md:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black text-[#061f5c]">
                ¿Necesitas ayuda?
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-[#17356f]">
                Nuestro equipo municipal puede orientarte para usar el portal,
                encontrar un trámite o resolver dudas sobre tus solicitudes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-blue-100">
              <p className="font-black text-[#061f5c]">
                Mesa de ayuda municipal
              </p>
              <p className="mt-2 text-[#17356f]">☎ +56 35 246 1000</p>
              <p className="text-[#17356f]">
                ✉ contacto@municipaleldetabo.cl
              </p>
              <button
                className="mt-5 rounded-full bg-[#00174a] px-6 py-3 font-black text-white"
                type="button"
              >
                Contactar soporte
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}