import ProgramPage from "../../equidad-genero/ProgramPage";

export default function AdultoMayorPage() {
  return (
    <ProgramPage
      title="Programa del Adulto Mayor"
      area="Programas Sociales Municipales"
      heroImage="/images/dideco/programas-sociales/hero-adulto-mayor.jpg"
      summary="Espacio municipal de apoyo, participación y acompañamiento para promover un envejecimiento activo, saludable y con redes comunitarias."
      contact={[
        { label: "Encargada", value: "Valentina Retamal Alarcón" },
        {
          label: "Correo",
          value: "adultomayor@eltabo.cl",
          href: "mailto:adultomayor@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 9320 8761", href: "tel:+56993208761" },
        {
          label: "Dirección",
          value: "San Nicolás S/N esquina Sara, El Tabo Centro.",
        },
        { label: "Horario", value: "Lunes a viernes, 08:30 a 17:30 horas." },
      ]}
      highlights={[
        {
          title: "Participación",
          text: "Actividades, talleres y encuentros para fortalecer la vida comunitaria de las personas mayores.",
        },
        {
          title: "Bienestar",
          text: "Promoción de salud funcional, estimulación cognitiva y envejecimiento positivo.",
        },
        {
          title: "Acompañamiento",
          text: "Atención presencial, telefónica, visitas domiciliarias y coordinación con redes municipales.",
        },
      ]}
      sections={[
        {
          title: "Objetivo del programa",
          details: [
            "Mejorar la calidad de vida de personas mayores de la comuna.",
            "Promover participación activa, redes sociales y apoyo comunitario.",
            "Impulsar un envejecimiento saludable mediante talleres, encuentros y actividades al aire libre.",
          ],
        },
        {
          title: "Servicios de atención",
          details: [
            "Atención presencial y telefónica.",
            "Visitas domiciliarias profesionales.",
            "Derivación interna a unidades y programas municipales.",
            "Coordinación con redes comunales y servicios relacionados.",
            "Atenciones espontáneas según disponibilidad del equipo.",
          ],
        },
        {
          title: "Talleres y actividades",
          details: [
            "Taller de envejecimiento positivo.",
            "Talleres estivales de actividad física.",
            "Estimulación cognitiva.",
            "Bienestar subjetivo.",
            "Talleres recreativos, manualidades y motrices.",
            "Actividades de salud funcional y vida activa.",
          ],
        },
        {
          title: "Trabajo con organizaciones",
          details: [
            "Mesa comunal de adulto mayor.",
            "Visitas a clubes para orientación en talleres, fondos y proyectos.",
            "Traslado para actividades de turismo y paseos de clubes.",
            "Charlas socio-jurídicas y espacios de información comunitaria.",
          ],
        },
      ]}
    />
  );
}
