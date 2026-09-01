import ProgramPage from "../../equidad-genero/ProgramPage";

export default function ProgramaVinculos17Page() {
  return (
    <ProgramPage
      title="Programa Vínculos 17°"
      area="Departamento de Programas Externos"
      heroImage="/images/dideco/programas-sociales/hero-adulto-mayor.jpg"
      summary="Acompañamiento continuo para personas mayores de 65 años que ingresan al Subsistema de Seguridades y Oportunidades."
      contact={[
        { label: "Encargada", value: "Liliana Leiva" },
        {
          label: "Correo",
          value: "liliana.leiva@eltabo.cl",
          href: "mailto:liliana.leiva@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 4111 9345", href: "tel:+56941119345" },
      ]}
      highlights={[
        {
          title: "Acompañamiento",
          text: "Atención directa y personalizada para personas mayores en su lugar de residencia.",
        },
        {
          title: "Autonomía",
          text: "Herramientas psicosociales para fortalecer identidad, autonomía y pertenencia.",
        },
        {
          title: "Inclusión",
          text: "Vinculación con la comunidad, redes de apoyo y prestaciones del sistema.",
        },
      ]}
      sections={[
        {
          title: "Objetivo del programa",
          details: [
            "Brindar acompañamiento continuo a personas mayores de 65 años.",
            "Apoyar a quienes ingresan al Subsistema de Seguridades y Oportunidades.",
            "Entregar herramientas psicosociales para fortalecer identidad, autonomía y sentido de pertenencia.",
            "Promover bienestar e inclusión de las personas mayores en la sociedad.",
          ],
        },
        {
          title: "Acompañamiento personalizado",
          details: [
            "Ofrece acompañamiento directo a las personas mayores.",
            "La atención se realiza en el lugar donde residen.",
            "Permite entregar una intervención cercana y adaptada a las necesidades individuales de cada persona.",
          ],
        },
        {
          title: "Herramientas psicosociales",
          details: [
            "Se entregan herramientas mediante sesiones individuales y grupales.",
            "Buscan fortalecer aspectos emocionales y sociales.",
            "Promueven el bienestar integral de las personas mayores.",
          ],
        },
        {
          title: "Vinculación con el entorno",
          details: [
            "Promueve la conexión activa de las personas mayores con su comunidad.",
            "Fomenta la participación en actividades sociales y culturales.",
            "Fortalece lazos con otras personas y redes comunitarias.",
          ],
        },
        {
          title: "Bonos de protección",
          details: [
            "El programa contempla bonos de protección y prestaciones monetarias.",
            "Estos apoyos pueden contribuir a mejorar la calidad de vida.",
            "Los recursos ayudan a cubrir necesidades básicas de las personas mayores participantes.",
          ],
        },
        {
          title: "Envejecimiento digno y activo",
          details: [
            "Reconoce el valor de las personas mayores en la comunidad.",
            "Promueve su participación activa y sentido de pertenencia.",
            "Busca que las personas mayores puedan envejecer de manera digna y satisfactoria.",
          ],
        },
      ]}
    />
  );
}
