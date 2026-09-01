import ProgramPage from "../../equidad-genero/ProgramPage";

export default function OmilPage() {
  return (
    <ProgramPage
      title="Oficina de Información Laboral (OMIL)"
      area="Departamento de Desarrollo Económico Local"
      heroImage="/images/dideco/hero-direccion-desarrollo-comunitario.jpg"
      summary="La Oficina de Intermediación Laboral promueve el acceso al empleo de calidad, conectando a trabajadores y empleadores de la comuna."
      contact={[
        { label: "Encargada", value: "María José Poblete Botto" },
        { label: "Correo", value: "omil@eltabo.cl", href: "mailto:omil@eltabo.cl" },
        { label: "Teléfono", value: "+56 35 220 3540", href: "tel:+56352203540" },
        {
          label: "Horario de atención",
          value: "Lunes a viernes de 08:30 a 14:00 horas.",
        },
      ]}
      highlights={[
        {
          title: "Intermediación",
          text: "Conecta a personas que buscan empleo con empresas que requieren personal.",
        },
        {
          title: "Orientación",
          text: "Apoyo para definir objetivos laborales y mejorar estrategias de búsqueda de empleo.",
        },
        {
          title: "Capacitación",
          text: "Información sobre cursos SENCE, oportunidades programáticas y derivaciones disponibles.",
        },
      ]}
      sections={[
        {
          title: "Misión de la oficina",
          details: [
            "Promover el acceso al empleo de calidad en la comuna.",
            "Facilitar la conexión entre trabajadores y empleadores.",
            "Actuar como puente efectivo para fomentar el empleo y el desarrollo profesional.",
            "Apoyar tanto a quienes buscan trabajo como a las organizaciones que requieren personal.",
          ],
        },
        {
          title: "Trámites y servicios",
          details: [
            "Orientación laboral.",
            "Información laboral.",
            "Apresto laboral y talleres.",
            "Consejería a empresas.",
            "Difusión de ofertas de empleo.",
            "Derivación o postulación a vacantes.",
            "Información sobre capacitación y cursos de SENCE.",
            "Derivación a otros servicios cuando corresponde.",
          ],
        },
        {
          title: "Facilitar la intermediación laboral",
          details: [
            "Unir a empresas con talentos que buscan empleo.",
            "Facilitar procesos de selección y contacto laboral.",
            "Optimizar la coincidencia entre perfiles disponibles y oportunidades laborales.",
            "Contribuir al crecimiento de empresas y personas trabajadoras.",
          ],
        },
        {
          title: "Vinculación con demandas empresariales",
          details: [
            "Conectar empresas con candidatos adecuados.",
            "Comprender las necesidades y expectativas de las organizaciones empleadoras.",
            "Orientar a personas buscadoras de empleo hacia oportunidades alineadas con sus capacidades y metas.",
          ],
        },
        {
          title: "Bolsa Nacional de Empleo y SENCE",
          details: [
            "Facilitar la inscripción en la Bolsa Nacional de Empleo.",
            "Ampliar las posibilidades de encontrar empleo acorde a habilidades y experiencia.",
            "Mantener información actualizada sobre ofertas laborales.",
            "Orientar sobre oportunidades programáticas de SENCE, capacitaciones y bonos disponibles.",
          ],
        },
        {
          title: "Asesoría en orientación laboral",
          details: [
            "Brindar apoyo profesional para definir objetivos laborales.",
            "Mejorar habilidades de búsqueda de empleo.",
            "Desarrollar estrategias efectivas para avanzar en el ámbito laboral.",
          ],
        },
      ]}
    />
  );
}
