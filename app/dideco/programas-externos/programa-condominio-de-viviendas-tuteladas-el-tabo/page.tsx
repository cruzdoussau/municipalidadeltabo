import ProgramPage from "../../equidad-genero/ProgramPage";

export default function CondominioViviendasTuteladasPage() {
  return (
    <ProgramPage
      title="Programa Condominio de Viviendas Tuteladas El Tabo"
      area="Departamento de Programas Externos"
      heroImage="/images/dideco/programas-sociales/hero-adulto-mayor.jpg"
      summary="Iniciativa que entrega soluciones habitacionales adecuadas y apoyo integral a personas mayores autovalentes en situación de vulnerabilidad."
      contact={[
        { label: "Encargada", value: "Constanza García Leiva" },
        {
          label: "Correo",
          value: "cvt@eltabo.cl",
          href: "mailto:cvt@eltabo.cl",
        },
        {
          label: "Dirección municipal",
          value: "Av. Las Cruces Norte 401, El Tabo.",
        },
        {
          label: "Horario municipal",
          value: "Lunes a viernes de 08:30 a 14:00 horas.",
        },
      ]}
      highlights={[
        {
          title: "Vivienda digna",
          text: "Soluciones habitacionales individuales para personas mayores autovalentes.",
        },
        {
          title: "Apoyo integral",
          text: "Acompañamiento psicosocial para promover autonomía, pertenencia e identidad.",
        },
        {
          title: "Redes de apoyo",
          text: "Vinculación con servicios comunitarios, salud y actividades recreativas.",
        },
      ]}
      sections={[
        {
          title: "Objetivo del programa",
          details: [
            "Brindar soluciones habitacionales adecuadas para personas mayores autovalentes en situación de vulnerabilidad.",
            "Promover autonomía, pertenencia e identidad mediante un plan de intervención social.",
            "Entregar apoyo integral para fortalecer la calidad de vida de las personas residentes.",
          ],
        },
        {
          title: "Características del programa",
          details: [
            "Conjuntos habitacionales de viviendas individuales para personas mayores.",
            "Espacios propios y cómodos para vivir.",
            "Apoyo emocional y social entregado por un equipo profesional.",
            "Equipo compuesto por monitora y trabajadora social.",
            "Acceso a redes de apoyo, atención médica, actividades recreativas y servicios comunitarios.",
          ],
        },
        {
          title: "Modalidad de comodato",
          details: [
            "Las viviendas se asignan en calidad de comodato.",
            "Las personas beneficiarias no son propietarias de la vivienda.",
            "El comodato entrega derecho a residir en la vivienda asignada según las condiciones del programa.",
          ],
        },
        {
          title: "Quiénes pueden participar",
          details: [
            "Personas de 60 años o más.",
            "Personas mayores autovalentes.",
            "Personas en situación de vulnerabilidad según el Registro Social de Hogares.",
            "Se prioriza a quienes presentan menores ingresos o mayor vulnerabilidad.",
            "Se considera especialmente a quienes carecen de redes de apoyo sociofamiliares.",
          ],
        },
        {
          title: "Compromiso del programa",
          details: [
            "Proporcionar una solución habitacional adecuada.",
            "Promover la autonomía y la participación comunitaria.",
            "Brindar apoyo emocional y social.",
            "Facilitar el acceso a redes de apoyo y servicios.",
            "Fomentar la calidad de vida de las personas residentes.",
          ],
        },
      ]}
    />
  );
}
