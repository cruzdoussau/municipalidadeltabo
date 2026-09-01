import ProgramPage from "../../equidad-genero/ProgramPage";

export default function OficinaSubvencionesPage() {
  return (
    <ProgramPage
      title="Oficina de Subvenciones"
      area="Departamento de Participación Ciudadana"
      heroImage="/images/dideco/hero-departamento-social.jpg"
      summary="Oficina municipal orientada a fortalecer y asesorar a organizaciones comunitarias vigentes en la elaboración, ejecución y rendición de proyectos con impacto social."
      contact={[
        { label: "Encargada", value: "Marisol Millán Jerez" },
        {
          label: "Correo",
          value: "subvenciones@eltabo.cl",
          href: "mailto:subvenciones@eltabo.cl",
        },
        {
          label: "Reglamento",
          value: "Reglamento Subvenciones 2026",
          href: "https://eltabo.cl/reglamento-subvenciones-2026/",
        },
      ]}
      highlights={[
        {
          title: "Asesoría",
          text: "Orientación a organizaciones comunitarias para formular proyectos y cumplir requisitos.",
        },
        {
          title: "Financiamiento",
          text: "Apoyo a proyectos de alto impacto social financiados con recursos municipales.",
        },
        {
          title: "Rendición",
          text: "Acompañamiento en ejecución, rendición de cuentas y revisión administrativa.",
        },
      ]}
      sections={[
        {
          title: "Objetivo de la oficina",
          details: [
            "Fortalecer a las organizaciones comunitarias vigentes de la comuna.",
            "Asesorar en la elaboración de proyectos que mejoren la calidad de vida de los habitantes de El Tabo.",
            "Beneficiar con financiamiento municipal proyectos de alto impacto social.",
            "Velar por el cumplimiento de requisitos legales y del Reglamento Municipal.",
          ],
        },
        {
          title: "Atención y orientación",
          details: [
            "Atención a organizaciones de la comuna de El Tabo.",
            "Orientación general sobre procesos de subvención municipal.",
            "Apoyo para comprender requisitos, etapas y documentación necesaria.",
          ],
        },
        {
          title: "Formulación de proyectos",
          details: [
            "Asesoría para la formulación de iniciativas comunitarias.",
            "Charlas informativas sobre formulación de proyectos para dirigentes de organizaciones.",
            "Acompañamiento para estructurar presupuestos, objetivos y antecedentes requeridos.",
          ],
        },
        {
          title: "Ejecución y rendición",
          details: [
            "Asesoría en ejecución de proyectos adjudicados.",
            "Orientación sobre rendición de cuentas.",
            "Charlas informativas para dirigentes sobre ejecución y rendición de proyectos.",
            "Entrega de rendiciones a la Dirección de Control para recepción y revisión.",
          ],
        },
        {
          title: "Revisión y presentación municipal",
          details: [
            "Revisión de proyectos ingresados por Oficina de Partes.",
            "Preparación de antecedentes para presentar a comisión en Concejo Municipal.",
            "Revisión con comisión encargada para dar visto bueno a proyectos que cumplan requisitos del Reglamento.",
            "Presentación en comisión con el Concejo Municipal.",
          ],
        },
        {
          title: "Otorgamiento de recursos",
          details: [
            "Otorgamiento de recursos de subvención municipal a organizaciones adjudicatarias.",
            "Coordinación para que la Dirección de Finanzas realice la contabilización en el sistema financiero municipal.",
            "Seguimiento administrativo del proceso conforme a normativa vigente.",
          ],
        },
      ]}
    />
  );
}
