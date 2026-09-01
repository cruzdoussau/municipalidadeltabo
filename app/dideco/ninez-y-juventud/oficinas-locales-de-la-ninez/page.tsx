import ProgramPage from "../../equidad-genero/ProgramPage";

export default function OficinasLocalesNinezPage() {
  return (
    <ProgramPage
      title="Oficinas Locales de la Niñez"
      area="Departamento de Niñez y Juventud"
      heroImage="/images/dideco/hero-direccion-desarrollo-comunitario.jpg"
      summary="Instancia comunal que articula la protección integral de niños, niñas y adolescentes, promoviendo sus derechos, participación y protección."
      contact={[
        { label: "Encargada", value: "Romina Toro Cárcamo" },
        {
          label: "Correo",
          value: "oln@eltabo.cl",
          href: "mailto:oln@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 35 241 2574", href: "tel:+56352412574" },
        { label: "Dirección", value: "La Concepción #654, Las Cruces." },
        {
          label: "Lunes a jueves",
          value: "08:30 a 14:00 y 15:00 a 17:30 horas.",
        },
        {
          label: "Viernes",
          value: "08:30 a 14:00 y 15:00 a 16:30 horas.",
        },
      ]}
      highlights={[
        {
          title: "Protección integral",
          text: "Articula acciones comunales para prevenir vulneraciones y proteger derechos de NNA.",
        },
        {
          title: "Promoción de derechos",
          text: "Genera instancias territoriales para difundir y fortalecer derechos de la niñez.",
        },
        {
          title: "Participación",
          text: "Impulsa espacios donde niños, niñas y adolescentes puedan opinar e incidir.",
        },
      ]}
      sections={[
        {
          title: "Contexto institucional",
          details: [
            "Desde la creación del Consejo Nacional de la Infancia en 2014 nace la Política Nacional de Niñez y Adolescencia.",
            "A partir de esta política se crean la Defensoría de los Derechos de la Niñez y la Subsecretaría de la Niñez.",
            "Posteriormente se crea el Sistema de Garantías, orientado a respetar, promover y proteger el desarrollo de niños, niñas y adolescentes del país.",
          ],
        },
        {
          title: "Rol de la Oficina Local de la Niñez",
          details: [
            "Es una instancia comunal de protección integral de niños, niñas y adolescentes.",
            "Articula acciones de promoción, prevención y protección de derechos.",
            "Genera espacios para la participación de niños, niñas y adolescentes.",
            "Coordina el trabajo territorial con instituciones y redes locales.",
          ],
        },
        {
          title: "Gestión integrada de casos",
          details: [
            "Aborda situaciones que requieren coordinación y seguimiento desde la red comunal.",
            "Permite articular apoyos institucionales para niños, niñas, adolescentes y sus familias.",
            "Busca prevenir la vulneración de derechos y activar respuestas oportunas.",
          ],
        },
        {
          title: "Promoción territorial de derechos",
          details: [
            "Desarrolla acciones comunales para difundir los derechos de la niñez.",
            "Promueve entornos protectores y comunidades corresponsables.",
            "Fortalece la prevención mediante actividades e instancias informativas.",
          ],
        },
        {
          title: "Mesa de articulación interinstitucional",
          details: [
            "Coordina actores institucionales y comunitarios vinculados a la niñez.",
            "Favorece el trabajo colaborativo en promoción, prevención y protección.",
            "Permite ordenar respuestas frente a necesidades del territorio.",
          ],
        },
        {
          title: "Consejo consultivo de NNA",
          details: [
            "Espacio de participación para niños, niñas y adolescentes.",
            "Permite recoger opiniones, intereses y propuestas desde la propia niñez y adolescencia.",
            "Fortalece el ejercicio de ciudadanía y participación incidente.",
          ],
        },
      ]}
    />
  );
}
