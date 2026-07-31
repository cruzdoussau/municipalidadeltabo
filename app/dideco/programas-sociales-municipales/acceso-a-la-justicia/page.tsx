import ProgramPage from "../../equidad-genero/ProgramPage";

export default function AccesoJusticiaPage() {
  return (
    <ProgramPage
      title="Acceso a la Justicia"
      area="Programas Sociales Municipales"
      heroImage="/images/dideco/programas-sociales/hero-acceso-justicia.jpg"
      summary="Orientación y asistencia jurídica para vecinas y vecinos que requieren apoyo en materias civiles y de familia."
      contact={[
        { label: "Encargado", value: "Christofer García Sánchez" },
        {
          label: "Correo municipal",
          value: "accesoalajusticia@eltabo.cl",
          href: "mailto:accesoalajusticia@eltabo.cl",
        },
        {
          label: "Correo alternativo",
          value: "accesoalajusticiaeltabo@gmail.com",
          href: "mailto:accesoalajusticiaeltabo@gmail.com",
        },
        { label: "Teléfono", value: "+56 9 7131 7493", href: "tel:+56971317493" },
        { label: "Horario", value: "Lunes a viernes, 09:00 a 13:00 horas." },
        {
          label: "Dirección",
          value: "Av. Las Cruces Norte 401, Municipalidad de El Tabo.",
        },
      ]}
      highlights={[
        {
          title: "Orientación",
          text: "Primera atención jurídica para aclarar alternativas, requisitos y pasos a seguir.",
        },
        {
          title: "Familia y civil",
          text: "Apoyo en materias de familia y orientación en situaciones civiles frecuentes.",
        },
        {
          title: "Derechos",
          text: "Promoción de derechos, resolución de conflictos y derivaciones pertinentes.",
        },
      ]}
      sections={[
        {
          title: "Objetivo del programa",
          details: [
            "Realizar atenciones jurídicas a vecinos y vecinas con necesidades de orientación.",
            "Entregar asistencia en materias de familia y civil.",
            "Patrocinar causas de familia cuando la persona ha sido excluida de la Corporación de Asistencia Judicial y no cuenta con recursos para contratar representación privada.",
          ],
        },
        {
          title: "Servicios disponibles",
          details: [
            "Orientación jurídica general.",
            "Asistencia letrada en materias de familia.",
            "Promoción de derechos y deberes ciudadanos.",
            "Apoyo para la resolución pacífica de conflictos.",
            "Derivación a redes públicas cuando el caso requiere una atención especializada.",
          ],
        },
        {
          title: "Materias de familia frecuentes",
          details: [
            "Pensiones de alimentos, aumento, rebaja o cese.",
            "Relación directa y regular.",
            "Cuidado personal.",
            "Divorcios.",
            "Reclamación o impugnación de paternidad.",
          ],
        },
      ]}
    />
  );
}
