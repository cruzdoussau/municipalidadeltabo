import ProgramPage from "../../equidad-genero/ProgramPage";

export default function PresupuestosParticipativosPage() {
  return (
    <ProgramPage
      title="Presupuestos Participativos"
      area="Departamento de Participación Ciudadana"
      heroImage="/images/dideco/hero-departamento-social.jpg"
      summary="Mecanismo democrático y vinculante que permite a las organizaciones comunitarias proponer, deliberar y priorizar proyectos sociales financiados con recursos municipales."
      contact={[
        { label: "Encargado", value: "Esteban Gómez Espinoza" },
        {
          label: "Correo encargado",
          value: "esteban.gomez@eltabo.cl",
          href: "mailto:esteban.gomez@eltabo.cl",
        },
        {
          label: "Correo programa",
          value: "presupuestoparticipativo@eltabo.cl",
          href: "mailto:presupuestoparticipativo@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 35 220 3553", href: "tel:+56352203553" },
        {
          label: "Dirección y horario",
          value:
            "Av. Las Cruces Norte 401, El Tabo. Edificio Consistorial. Atención de 08:30 a 14:00 horas.",
        },
      ]}
      highlights={[
        {
          title: "Participación",
          text: "Las organizaciones comunitarias proponen y priorizan iniciativas de impacto local.",
        },
        {
          title: "Transparencia",
          text: "Promueve acceso a información pública, rendición de cuentas y control ciudadano.",
        },
        {
          title: "Desarrollo comunitario",
          text: "Fortalece capacidades organizativas, cohesión social y corresponsabilidad territorial.",
        },
      ]}
      sections={[
        {
          title: "Propósito del programa",
          details: [
            "Fortalecer la participación ciudadana en la gestión pública local.",
            "Permitir que organizaciones comunitarias propongan, deliberen y prioricen proyectos sociales.",
            "Financiar iniciativas comunitarias con recursos municipales.",
            "Fomentar empoderamiento ciudadano, corresponsabilidad social y comunidades más cohesionadas, transparentes y activas.",
          ],
        },
        {
          title: "Objetivo general",
          details: [
            "Fortalecer la participación ciudadana y el desarrollo comunitario.",
            "Impulsar un proceso deliberativo y vinculante.",
            "Permitir que la sociedad civil organizada priorice y decida la asignación de recursos municipales para proyectos sociales de impacto local.",
          ],
        },
        {
          title: "Objetivos específicos",
          details: [
            "Impulsar procesos participativos e inclusivos que fortalezcan la cohesión social y territorial.",
            "Fomentar la confianza y el vínculo entre ciudadanía e institucionalidad local mediante diálogo y corresponsabilidad.",
            "Promover transparencia y control ciudadano en la asignación y ejecución de recursos públicos municipales.",
            "Fortalecer capacidades organizativas de la sociedad civil mediante diseño, debate, priorización y ejecución de iniciativas sociales.",
            "Consolidar una cultura democrática basada en participación informada, respeto y bien común.",
          ],
        },
        {
          title: "Trámites y servicios",
          details: [
            "Postulación de proyectos sociales para financiamiento del programa.",
            "Asistencia técnica y capacitaciones para formular proyectos, presupuestos y mecanismos de participación.",
            "Acompañamiento técnico y administrativo durante la ejecución de proyectos adjudicados.",
            "Participación en votaciones populares para priorizar democráticamente los proyectos presentados.",
            "Acceso a información pública y rendición de cuentas sobre bases, cronogramas, resultados y uso de fondos.",
          ],
        },
        {
          title: "Democracia participativa",
          details: [
            "Promueve equidad territorial en la toma de decisiones locales.",
            "Fortalece la transparencia en el uso de recursos públicos.",
            "Contribuye a una ciudadanía más informada y comprometida con su entorno.",
          ],
        },
      ]}
    />
  );
}
