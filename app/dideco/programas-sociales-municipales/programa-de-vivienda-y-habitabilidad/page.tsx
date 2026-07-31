import ProgramPage from "../../equidad-genero/ProgramPage";

export default function ViviendaHabitabilidadPage() {
  return (
    <ProgramPage
      title="Programa de Vivienda y Habitabilidad"
      area="Programas Sociales Municipales"
      heroImage="/images/dideco/programas-sociales/hero-vivienda-habitabilidad.jpg"
      summary="Acompañamiento municipal para mejorar las condiciones habitacionales de familias de la comuna en situación de vulnerabilidad social y habitacional."
      contact={[
        { label: "Encargado", value: "Cristian Álvarez Vera" },
        {
          label: "Correo",
          value: "viviendayhabitabilidad@eltabo.cl",
          href: "mailto:viviendayhabitabilidad@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 8197 3886", href: "tel:+56981973886" },
      ]}
      highlights={[
        {
          title: "Vivienda municipal",
          text: "Entrega de soluciones habitacionales municipales según evaluación social, técnica y disponibilidad.",
        },
        {
          title: "Mejoramiento",
          text: "Apoyo con materiales, mano de obra y soluciones sanitarias para viviendas con necesidades urgentes.",
        },
        {
          title: "Subsidios",
          text: "Orientación y acompañamiento para beneficios SERVIU y otras ofertas estatales de vivienda.",
        },
      ]}
      sections={[
        {
          title: "Requisitos de postulación",
          details: [
            "Ingresar solicitud formal por Oficina de Partes.",
            "Acreditar residencia mínima de 5 años en la comuna.",
            "No contar con vivienda propia o presentar condiciones habitacionales precarias.",
            "No tener capacidad económica suficiente para resolver la necesidad habitacional.",
            "Contar con Registro Social de Hogares hasta el 40%, con evaluación excepcional hasta el 50% según el caso.",
            "Aceptar evaluación técnica y social del equipo municipal.",
          ],
        },
        {
          title: "Trámites y servicios",
          details: [
            "Postulación a vivienda municipal.",
            "Solicitud de materiales de construcción para reparación de vivienda.",
            "Apoyo para instalación de fosa séptica y mano de obra cuando corresponda.",
            "Orientación para subsidios habitacionales SERVIU como DS27, DS49, DS1 y DS52.",
            "Acompañamiento social durante el proceso de postulación y revisión de antecedentes.",
          ],
        },
        {
          title: "Calendario referencial",
          details: [
            "Recepción de solicitudes entre enero y marzo.",
            "Revisión documental durante abril.",
            "Inspección técnica y social entre mayo y junio.",
            "Publicación de resultados durante agosto.",
            "Procesos administrativos y licitación entre septiembre y octubre.",
            "Ejecución de trabajos entre noviembre y diciembre, según disponibilidad municipal.",
          ],
        },
      ]}
    />
  );
}
