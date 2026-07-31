import type { Metadata } from "next";
import ProgramPage from "../ProgramPage";

export const metadata: Metadata = {
  title:
    "Programa de Diversidad y No Discriminación | DIDECO | Municipalidad de El Tabo",
  description:
    "Programa de Diversidad y No Discriminación de El Tabo: inclusión, derechos humanos, orientación migratoria, diversidad sexo-genérica y acompañamiento.",
};

export default function ProgramaDiversidadPage() {
  return (
    <ProgramPage
      title="Programa de Diversidad y No Discriminación"
      heroImage="/images/dideco/equidad-genero/hero-diversidad.jpg"
      summary="Espacio dedicado a promover los derechos humanos, la igualdad y la no discriminación, trabajando con poblaciones diversas, personas de la diversidad sexo-genérica y personas migrantes."
      contact={[
        { label: "Encargada", value: "Aline Fuentes Obando" },
        {
          label: "Correo electrónico",
          value: "diversidad@eltabo.cl",
          href: "mailto:diversidad@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 35 220 3536" },
      ]}
      highlights={[
        {
          title: "Inclusión",
          text: "Promoción de igualdad de oportunidades y acceso a derechos.",
        },
        {
          title: "Orientación",
          text: "Acompañamiento ante discriminación, vulneración de derechos y procesos migratorios.",
        },
        {
          title: "Comunidad",
          text: "Capacitaciones, jornadas educativas y actividades culturales.",
        },
      ]}
      sections={[
        {
          title: "Objetivos",
          details: [
            "Promover la inclusión social y la igualdad de oportunidades sin importar orientación sexual, identidad de género o condición migratoria.",
            "Sensibilizar a la comunidad sobre respeto, no discriminación y convivencia intercultural.",
            "Brindar herramientas, orientación y acompañamiento integral en casos de discriminación, vulneración de derechos y procesos migratorios.",
            "Apoyar políticas públicas y marcos normativos que garanticen equidad, justicia social y acceso efectivo a derechos.",
          ],
        },
        {
          title: "Servicios y actividades",
          details: [
            "Capacitaciones y charlas de sensibilización.",
            "Talleres sobre diversidad sexo-genérica, derechos humanos, migración y no discriminación.",
            "Asesoría en casos de discriminación o vulneración de derechos.",
            "Orientación migratoria personalizada y acompañamiento en regularización, cambio de estatus migratorio y acceso a servicios públicos.",
            "Acompañamiento psicosocial, derivación a redes de apoyo y facilitación intercultural y lingüística.",
            "Conmemoraciones, actividades culturales y apoyo a proyectos comunitarios.",
          ],
        },
        {
          title: "¿Cómo podemos ayudarte?",
          details: [
            "Escucha, acompañamiento y apoyo si has vivido discriminación o vulneración de derechos.",
            "Orientación migratoria y apoyo en procesos de regularización o acceso a salud, educación y trabajo.",
            "Facilitación lingüística y apoyo intercultural ante barreras idiomáticas.",
            "Participación en capacitaciones, actividades culturales y jornadas de sensibilización.",
            "Asesoría para proyectos comunitarios enfocados en diversidad, integración o interculturalidad.",
          ],
        },
      ]}
    />
  );
}
