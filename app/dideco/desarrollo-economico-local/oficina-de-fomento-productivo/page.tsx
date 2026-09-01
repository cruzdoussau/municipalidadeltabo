import ProgramPage from "../../equidad-genero/ProgramPage";

export default function FomentoProductivoPage() {
  return (
    <ProgramPage
      title="Oficina de Fomento Productivo"
      area="Departamento de Desarrollo Económico Local"
      heroImage="/images/dideco/hero-direccion-desarrollo-comunitario.jpg"
      summary="Apoyo municipal para emprendedores, artesanos, organizaciones y agrupaciones productivas de El Tabo, fortaleciendo sus capacidades, formalización e innovación."
      contact={[
        { label: "Encargada", value: "Karla Muñoz Ormeño" },
        {
          label: "Correo",
          value: "fomentoproductivo@eltabo.cl",
          href: "mailto:fomentoproductivo@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 35 220 3556", href: "tel:+56352203556" },
        { label: "Dirección", value: "Av. Las Cruces Norte 401, El Tabo." },
      ]}
      highlights={[
        {
          title: "Emprendimiento",
          text: "Acompañamiento a emprendedores y artesanos para fortalecer sus proyectos productivos.",
        },
        {
          title: "Financiamiento",
          text: "Orientación para postular a fondos internos y externos que impulsen innovación y crecimiento.",
        },
        {
          title: "Capacitación",
          text: "Difusión e inscripción a cursos, talleres, seminarios y espacios formativos.",
        },
      ]}
      sections={[
        {
          title: "Objetivo general del programa",
          details: [
            "Potenciar y generar capacidades en emprendedores, artesanos y organizaciones productivas.",
            "Contribuir a mejorar la productividad y fortalecer los emprendimientos activos de la comuna.",
            "Asesorar y apoyar la postulación a fondos de financiamiento internos y externos.",
            "Favorecer procesos de innovación, formalización y crecimiento sostenible de los negocios locales.",
          ],
        },
        {
          title: "Funciones principales",
          details: [
            "Entregar asesorías y orientaciones para postulaciones a fondos de financiamiento externos.",
            "Apoyar procesos vinculados a FOSIS, Capital Abeja y Capital Semilla.",
            "Orientar en trámites tributarios y obligaciones fiscales asociadas al emprendimiento.",
            "Difundir cursos, talleres, seminarios y capacitaciones para fortalecer habilidades técnicas y empresariales.",
          ],
        },
        {
          title: "Acompañamiento a emprendedores",
          details: [
            "Vinculación con recursos y herramientas para mejorar productividad.",
            "Apoyo en formalización e innovación de emprendimientos activos.",
            "Conexión con oportunidades de financiamiento y capacitación.",
            "Orientación para desarrollar negocios locales de manera sostenible.",
          ],
        },
        {
          title: "Actividades destacadas",
          details: [
            "Expo Emprendedores.",
            "Feria de las Pulgas.",
            "Día Nacional del Emprendimiento.",
            "Fiesta de la Chilenidad.",
            "Expo Vacaciones de Invierno.",
            "Fiesta Costumbrista de los Pescadores.",
            "Expo Vegana.",
            "Expo Navidad.",
            "Expo Verano.",
          ],
        },
      ]}
    />
  );
}
