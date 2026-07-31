import type { Metadata } from "next";
import ProgramPage from "../ProgramPage";

export const metadata: Metadata = {
  title: "Programa de la Mujer | DIDECO | Municipalidad de El Tabo",
  description:
    "Programa Municipal de la Mujer de El Tabo: acompañamiento psicosociojurídico, orientación, redes, talleres y contacto.",
};

export default function ProgramaDeLaMujerPage() {
  return (
    <ProgramPage
      title="Programa de la Mujer"
      heroImage="/images/dideco/equidad-genero/hero-programa-mujer.png"
      summary="Programa destinado a la intervención y orientación de mujeres residentes en El Tabo, con acompañamiento psicosociojurídico a sobrevivientes de violencia de género en contexto de pareja o expareja."
      contact={[
        { label: "Encargada", value: "Claudia Araya Carreño" },
        {
          label: "Correo electrónico",
          value: "programamujer@eltabo.cl",
          href: "mailto:programamujer@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 4038 5518" },
        { label: "Dirección", value: "Arturo Prat N°51, El Tabo." },
      ]}
      highlights={[
        {
          title: "Acompañamiento",
          text: "Orientación psicosocial y jurídica para mujeres de la comuna.",
        },
        {
          title: "Enfoque de género",
          text: "Promoción de derechos, participación y fortalecimiento personal.",
        },
        {
          title: "Redes locales",
          text: "Derivación y coordinación con redes comunales, provinciales y regionales.",
        },
      ]}
      sections={[
        {
          title: "Relación con la Municipalidad de El Tabo",
          details: [
            "El Programa Municipal de la Mujer depende del Departamento de Equidad de Género de DIDECO.",
            "Es una red presente en el territorio y financiada en un 100% por recursos municipales.",
          ],
        },
        {
          title: "Acciones del programa",
          details: [
            "Trabajo colaborativo con programas de DIDECO, unidades municipales y SERNAMEG.",
            "Elaboración de informes sociales, psicosociales y antecedentes para Tribunales de Familia o Fiscalía cuando corresponda.",
            "Denuncias y orientación ante situaciones de violencia de género o violencia intrafamiliar.",
            "Actividades recreativas y conmemoración de fechas internacionales vinculadas a género y derechos de las mujeres.",
          ],
        },
        {
          title: "Atención",
          details: [
            "Contacto vía telefónica o mensajería instantánea al +56 9 4038 5518.",
            "Correo electrónico: programamujer@eltabo.cl.",
            "Atención presencial en Arturo Prat N°51, El Tabo.",
            "Lunes a jueves de 08:30 a 14:00 y de 15:00 a 17:30 horas. Viernes de 08:30 a 14:00 y de 15:00 a 16:30 horas.",
          ],
        },
      ]}
    />
  );
}
