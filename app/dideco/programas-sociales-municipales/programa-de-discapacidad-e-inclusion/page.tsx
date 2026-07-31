import ProgramPage from "../../equidad-genero/ProgramPage";

export default function DiscapacidadInclusionPage() {
  return (
    <ProgramPage
      title="Programa de Discapacidad e Inclusión"
      area="Programas Sociales Municipales"
      heroImage="/images/dideco/programas-sociales/hero-discapacidad.png"
      summary="Programa que promueve la igualdad de oportunidades, la orientación familiar y la eliminación de barreras para personas en situación de discapacidad."
      contact={[
        { label: "Encargada", value: "Isabeu Ayala Vidal" },
        {
          label: "Correo",
          value: "discapacidad@eltabo.cl",
          href: "mailto:discapacidad@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 3785 4726", href: "tel:+56937854726" },
      ]}
      highlights={[
        {
          title: "Igualdad",
          text: "Promueve el derecho a la igualdad de oportunidades y participación plena en la comunidad.",
        },
        {
          title: "Orientación",
          text: "Entrega apoyo a personas, familias y cuidadores para acceder a redes y prestaciones.",
        },
        {
          title: "Inclusión",
          text: "Trabaja desde el modelo social de la discapacidad, reduciendo barreras del entorno.",
        },
      ]}
      sections={[
        {
          title: "Propósito central",
          details: [
            "Promover el derecho a la igualdad de oportunidades para personas en situación de discapacidad.",
            "Atender a personas, familias y cuidadores que requieren orientación y apoyo.",
            "Facilitar el acceso a redes de servicios y prestaciones disponibles.",
          ],
        },
        {
          title: "Objetivo general",
          details: [
            "Mejorar la calidad de vida de las personas en situación de discapacidad.",
            "Trabajar desde un enfoque basado en el modelo social de la discapacidad.",
            "Contribuir a eliminar barreras sociales y estructurales que limitan la participación plena.",
          ],
        },
        {
          title: "Rol del programa",
          details: [
            "Orientar sobre derechos, trámites y apoyos disponibles.",
            "Promover una sociedad más inclusiva, justa y accesible.",
            "Coordinar acciones con redes municipales y comunitarias para responder a necesidades específicas.",
          ],
        },
      ]}
    />
  );
}
