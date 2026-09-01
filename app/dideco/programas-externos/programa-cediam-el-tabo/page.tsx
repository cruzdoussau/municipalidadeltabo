import ProgramPage from "../../equidad-genero/ProgramPage";

export default function CediamPage() {
  return (
    <ProgramPage
      title="Programa CEDIAM El Tabo"
      area="Departamento de Programas Externos"
      heroImage="/images/dideco/programas-sociales/hero-adulto-mayor.jpg"
      summary="Centro Diurno para Personas Mayores orientado a promover bienestar integral, autonomía y calidad de vida mediante estimulación funcional, cognitiva y psicosocial."
      contact={[
        { label: "Coordinadora", value: "Viviana Jara Córdova" },
        {
          label: "Correo",
          value: "cediam@eltabo.cl",
          href: "mailto:cediam@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 7131 9169", href: "tel:+56971319169" },
        { label: "Teléfono alternativo", value: "+56 9 5539 6599", href: "tel:+56955396599" },
      ]}
      highlights={[
        {
          title: "Autonomía",
          text: "Fortalece capacidades para mantener independencia en actividades de la vida diaria.",
        },
        {
          title: "Estimulación",
          text: "Desarrolla intervenciones funcionales, cognitivas, emocionales y sociales.",
        },
        {
          title: "Red de apoyo",
          text: "Acompaña a familias y cuidadores, conectando con servicios comunitarios y de salud.",
        },
      ]}
      sections={[
        {
          title: "Propósito del CEDIAM",
          details: [
            "Promover el bienestar integral, la autonomía y la calidad de vida de las personas mayores.",
            "Prevenir el avance de la dependencia.",
            "Favorecer la permanencia activa de las personas mayores en su entorno comunitario.",
            "Entregar un espacio seguro y accesible para intervenciones grupales e individuales.",
          ],
        },
        {
          title: "Funciones principales",
          details: [
            "Fomentar la autonomía en actividades de la vida diaria.",
            "Desarrollar acciones preventivas y rehabilitadoras para mantener o mejorar la funcionalidad.",
            "Promover la participación social y el envejecimiento activo.",
            "Favorecer la integración comunitaria y fortalecer redes de apoyo.",
            "Acompañar y orientar a familias y cuidadores.",
          ],
        },
        {
          title: "Evaluación integral del usuario",
          details: [
            "Valoración funcional de actividades básicas e instrumentales de la vida diaria.",
            "Evaluación cognitiva y emocional.",
            "Detección de factores de riesgo y necesidades.",
            "Elaboración del Plan de Intervención Individual.",
          ],
        },
        {
          title: "Intervenciones grupales",
          details: [
            "Talleres de actividad física: movilidad, equilibrio, fuerza y prevención de caídas.",
            "Talleres cognitivos: memoria, atención y funciones ejecutivas.",
            "Talleres psicosociales: habilidades sociales, autoestima y manejo del estrés.",
            "Talleres recreativos y ocupacionales: manualidades, actividades artísticas y ocupaciones significativas.",
          ],
        },
        {
          title: "Intervenciones individuales",
          details: [
            "Kinesiología.",
            "Terapia ocupacional.",
            "Apoyo psicosocial o psicológico según necesidad.",
            "Entrenamiento en actividades de la vida diaria.",
          ],
        },
        {
          title: "Redes, familias y comunidad",
          details: [
            "Entrevistas con familias y cuidadores.",
            "Derivaciones pertinentes a redes comunitarias o servicios de salud.",
            "Información y orientación sobre cuidados de personas mayores.",
            "Promoción del envejecimiento activo.",
            "Coordinación con organizaciones territoriales.",
            "Eventos culturales, deportivos y educativos.",
          ],
        },
        {
          title: "Equipo multidisciplinario",
          details: [
            "Coordinadora: Viviana Jara Córdova.",
            "Terapia Ocupacional: María Josefina Furcher Rose.",
            "Kinesiólogo: Guillermo Vásquez Giglio.",
            "Psicólogo: Cristian Pérez Reyes.",
            "Trabajador Social: Juan Cueto Verdugo.",
            "Apoyo Administrativo: Carola Tobar Pérez.",
          ],
        },
      ]}
    />
  );
}
