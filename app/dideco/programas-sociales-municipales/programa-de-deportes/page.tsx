import ProgramPage from "../../equidad-genero/ProgramPage";

export default function DeportesPage() {
  return (
    <ProgramPage
      title="Programa de Deportes"
      area="Programas Sociales Municipales"
      heroImage="/images/dideco/programas-sociales/hero-deportes.png"
      summary="Programa orientado a fomentar la práctica deportiva y la actividad física en la comuna durante todo el ciclo de vida."
      contact={[
        { label: "Encargado", value: "Claudio Orellana Villarroel" },
        { label: "Correo", value: "deportes@eltabo.cl", href: "mailto:deportes@eltabo.cl" },
        { label: "Teléfono", value: "+56 9 6588 3907", href: "tel:+56965883907" },
        {
          label: "Horario",
          value:
            "Lunes a jueves de 08:30 a 13:00 y 15:00 a 17:30. Viernes de 08:30 a 13:00 y 15:00 a 16:30.",
        },
      ]}
      highlights={[
        {
          title: "Formación",
          text: "Instancias para aprender habilidades deportivas, hábitos saludables y valores asociados al deporte.",
        },
        {
          title: "Recreación",
          text: "Actividades comunitarias que promueven encuentro, bienestar y uso activo de espacios públicos.",
        },
        {
          title: "Competencia",
          text: "Apoyo a la participación en competencias comunales, provinciales, regionales y nacionales.",
        },
      ]}
      sections={[
        {
          title: "Enfoque formativo",
          details: [
            "Promueve el aprendizaje de técnicas, habilidades y conocimientos deportivos.",
            "Fomenta valores como disciplina, trabajo en equipo, respeto y vida saludable.",
            "Busca acercar el deporte a niñas, niños, jóvenes, adultos y personas mayores.",
          ],
        },
        {
          title: "Enfoque socio-recreativo",
          details: [
            "Organiza eventos y actividades abiertas a la comunidad.",
            "Impulsa espacios de esparcimiento, participación e integración barrial.",
            "Favorece la actividad física como herramienta de bienestar cotidiano.",
          ],
        },
        {
          title: "Enfoque competitivo",
          details: [
            "Gestiona participación en instancias deportivas de distintos niveles.",
            "Apoya el desarrollo de talentos locales.",
            "Promueve representación comunal en competencias provinciales, regionales y nacionales.",
          ],
        },
        {
          title: "Servicios e inscripción",
          details: [
            "Inscripción para sala de musculación según cupos disponibles.",
            "Requisitos asociados a residencia comunal y antecedentes solicitados por el programa.",
            "Orientación sobre talleres, actividades y convocatorias deportivas vigentes.",
          ],
        },
      ]}
    />
  );
}
