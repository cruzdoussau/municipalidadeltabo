import ProgramPage from "../../equidad-genero/ProgramPage";

export default function ProgramaJuventudPage() {
  return (
    <ProgramPage
      title="Programa de Juventud"
      area="Departamento de Niñez y Juventud"
      heroImage="/images/dideco/hero-cultura.png"
      summary="Iniciativa municipal orientada a fortalecer la participación, inserción social y desarrollo integral de las juventudes de El Tabo."
      contact={[
        { label: "Encargada", value: "Daniela Armijo" },
        {
          label: "Correo",
          value: "juventud@eltabo.cl",
          href: "mailto:juventud@eltabo.cl",
        },
        {
          label: "Teléfono",
          value: "+56 9 8740 3011",
          href: "tel:+56987403011",
        },
        { label: "Dirección", value: "Arturo Prat #51, El Tabo." },
      ]}
      highlights={[
        {
          title: "Participación juvenil",
          text: "Promueve la participación activa de jóvenes en iniciativas comunitarias y espacios de encuentro local.",
        },
        {
          title: "Desarrollo integral",
          text: "Impulsa habilidades personales, ocupacionales, artísticas, culturales, académicas y recreativas.",
        },
        {
          title: "Acompañamiento",
          text: "Entrega orientación profesional, apoyo psicológico y vinculación con redes de apoyo para jóvenes de la comuna.",
        },
      ]}
      sections={[
        {
          title: "Propósito del programa",
          details: [
            "El Programa de Juventud es una iniciativa municipal perteneciente al Departamento de Niñez y Juventud, dependiente de DIDECO.",
            "Su labor se enfoca en fortalecer la inserción social de las juventudes de El Tabo mediante actividades, talleres, oficios y proyectos formativos.",
            "Busca entregar herramientas que favorezcan el crecimiento personal, recreativo, académico, laboral y cívico de las y los jóvenes.",
          ],
        },
        {
          title: "Objetivo general",
          details: [
            "Fomentar la participación de jóvenes entre 15 y 29 años que residan en la comuna de El Tabo.",
            "Potenciar su desarrollo social y fortalecer habilidades personales, ocupacionales, artísticas y culturales.",
            "Contribuir al bienestar colectivo mediante espacios de aprendizaje, organización y participación comunitaria.",
          ],
        },
        {
          title: "Servicios que ofrece",
          details: [
            "Atención profesional individual.",
            "Orientación psicológica.",
            "Talleres, oficios y actividades formativas.",
            "Articulación con redes de apoyo.",
            "Colaboración con establecimientos educacionales.",
            "Sensibilización sobre salud mental.",
            "Apoyo a artistas locales.",
            "Expo Jóvenes Emprendedores.",
            "Grupos de estudio.",
          ],
        },
        {
          title: "Cómo participar",
          details: [
            "Tener entre 15 y 29 años.",
            "Contar con residencia en la comuna de El Tabo o Registro Social de Hogares en la comuna.",
            "En el caso de estudiantes, estar matriculado o matriculada en un establecimiento educacional de la comuna, como el Colegio El Tabo.",
          ],
        },
        {
          title: "Apoyo psicológico y orientación",
          details: [
            "El programa cuenta con apoyo profesional para entregar orientación, asesoría e intervención a jóvenes que se acerquen espontáneamente.",
            "También recibe derivaciones desde establecimientos educacionales, programas municipales u otras redes comunales.",
            "Este acompañamiento busca fortalecer el bienestar emocional, la salud mental y la toma de decisiones informadas.",
          ],
        },
        {
          title: "Talleres y oficios",
          details: [
            "Se desarrollan talleres y oficios como manicure, barbería, acrobacias aéreas y fotografía.",
            "También se promueven espacios creativos vinculados a encuadernación, danza, collage, bordado, ilustración textil y arte.",
            "Estas actividades permiten descubrir intereses, fortalecer talentos y abrir nuevas oportunidades de aprendizaje.",
          ],
        },
      ]}
    />
  );
}
