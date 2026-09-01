import ProgramPage from "../../equidad-genero/ProgramPage";

export default function ProgramaFamiliasPage() {
  return (
    <ProgramPage
      title="Programa Familias"
      area="Departamento de Programas Externos"
      heroImage="/images/dideco/hero-departamento-social.jpg"
      summary="Programa del Subsistema de Seguridades y Oportunidades que acompaña a familias en situación de pobreza extrema y vulnerabilidad social."
      contact={[
        { label: "Encargada", value: "Patricia Alquinta Ortiz" },
        {
          label: "Correo",
          value: "Alquinta.patricia@eltabo.cl",
          href: "mailto:Alquinta.patricia@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 3785 4726", href: "tel:+56937854726" },
      ]}
      highlights={[
        {
          title: "Acompañamiento",
          text: "Apoyo profesional para fortalecer habilidades personales, familiares y sociales.",
        },
        {
          title: "Redes",
          text: "Conexión con redes institucionales y prestaciones del Sistema de Protección Social.",
        },
        {
          title: "Autonomía",
          text: "Impulsa mejores condiciones de vida y ejercicio pleno de derechos.",
        },
      ]}
      sections={[
        {
          title: "Propósito del programa",
          details: [
            "Mejorar las condiciones de vida de familias y personas que enfrentan pobreza extrema y vulnerabilidad social.",
            "Garantizar que las familias puedan superar esas circunstancias y ejercer plenamente sus derechos.",
            "Acompañar a las familias durante distintas etapas de la vida.",
            "Reforzar que el compromiso de las familias es fundamental para el éxito de la intervención.",
          ],
        },
        {
          title: "Dependencia institucional",
          details: [
            "El Programa Familias depende del Subsistema de Seguridades y Oportunidades.",
            "Forma parte de una política pública del Sistema de Protección Social.",
            "Está vinculado al Ministerio de Desarrollo Social y Familia.",
          ],
        },
        {
          title: "Objetivo general",
          details: [
            "Impulsar una mejor calidad de vida para las familias participantes.",
            "Potenciar habilidades y capacidades individuales y familiares.",
            "Facilitar el desarrollo de herramientas personales.",
            "Fomentar la conexión con redes institucionales.",
            "Otorgar transferencias monetarias temporales que contribuyen al logro de los objetivos de intervención.",
          ],
        },
        {
          title: "Selección de familias",
          details: [
            "El Programa Familias no es de postulación abierta.",
            "Las familias son seleccionadas directamente por el Ministerio de Desarrollo Social y Familia.",
            "Los Apoyos Familiares Integrales contactan a las familias seleccionadas mediante invitación presencial.",
            "Si una familia rechaza participar, se invita a la siguiente familia del listado.",
          ],
        },
        {
          title: "Requisitos de participación",
          details: [
            "Estar dentro del 40% más vulnerable del Registro Social de Hogares.",
            "Desear acompañamiento profesional para mejorar condiciones de vida.",
            "Haber sido derivada por el Ministerio de Desarrollo Social y Familia.",
            "Aceptar la invitación a participar del programa.",
          ],
        },
      ]}
    />
  );
}
