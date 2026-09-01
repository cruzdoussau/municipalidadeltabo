import ProgramPage from "../../equidad-genero/ProgramPage";

export default function ProgramaAsuntosIndigenasPage() {
  return (
    <ProgramPage
      title="Programa de Asuntos Indígenas P.A.I"
      area="Departamento de Cultura"
      heroImage="/images/dideco/hero-cultura.png"
      summary="Programa municipal que atiende y acompaña a personas pertenecientes o vinculadas a pueblos originarios, promoviendo derechos, identidad, participación e interculturalidad."
      contact={[
        { label: "Encargado", value: "Enrique Quidenao Illanes" },
        {
          label: "Correo",
          value: "asuntosindigenas@eltabo.cl",
          href: "mailto:asuntosindigenas@eltabo.cl",
        },
        {
          label: "Lugar de atención",
          value: "Casa de la Cultura de El Tabo, Poeta Jonás N° 85.",
        },
        {
          label: "Horario",
          value:
            "Lunes a jueves de 08:30 a 17:30 horas. Viernes de 08:30 a 16:30 horas. Colación de 14:00 a 15:00 horas.",
        },
      ]}
      highlights={[
        {
          title: "Identidad indígena",
          text: "Promueve el rescate de culturas, idiomas, espiritualidad e identidad de los pueblos originarios.",
        },
        {
          title: "Orientación",
          text: "Entrega apoyo sobre derechos, deberes, acreditación indígena y beneficios disponibles.",
        },
        {
          title: "Participación",
          text: "Articula redes y espacios comunitarios para fortalecer la participación local e intercultural.",
        },
      ]}
      sections={[
        {
          title: "Sobre el programa",
          details: [
            "El Programa de Asuntos Indígenas de la Municipalidad de El Tabo fundamenta su labor en la Ley Indígena N° 19.253 y en el Convenio 169 de la OIT.",
            "Está enfocado en atender a la población perteneciente a pueblos originarios que reside en la comuna.",
            "También acompaña a personas, grupos, organizaciones y comunidad interesada en temáticas indígenas e interculturalidad.",
          ],
        },
        {
          title: "Población objetivo",
          details: [
            "Habitantes de El Tabo que pertenecen o se auto reconocen como parte de pueblos originarios reconocidos por el Estado de Chile.",
            "Considera pueblos como Mapuche, Aymara, Rapa Nui, Atacameños, Quechua, Diaguita, Colla, Chango, Kawésqar, Yagán y Selk'nam.",
            "El programa fomenta espacios para el rescate y promoción de sus culturas, idiomas y espiritualidad.",
          ],
        },
        {
          title: "Líneas de acción",
          details: [
            "Desarrollo de la identidad indígena local y promoción organizacional.",
            "Atención social y comunitaria a la población objetivo.",
            "Promoción educativa en temáticas de pueblos originarios e interculturalidad.",
            "Articulación de redes que fortalezcan la participación de la población objetivo.",
          ],
        },
        {
          title: "Apoyos y orientación",
          details: [
            "Orientación sobre derechos y deberes.",
            "Apoyo en postulaciones y renovaciones de beneficios dirigidos a habitantes pertenecientes a pueblos indígenas.",
            "Acompañamiento para fortalecer espacios de participación comunitaria e intercultural.",
          ],
        },
        {
          title: "Trámites disponibles",
          details: [
            "Certificación de acreditación de calidad indígena.",
            "Apoyo y asesoría en fondos concursables y derechos indígenas.",
            "Apoyo en postulación y renovación de becas de estudio para enseñanza básica, media y superior.",
          ],
        },
        {
          title: "Requisitos generales",
          details: [
            "Contar con cédula de identidad vigente.",
            "Tener ClaveÚnica cuando el trámite lo requiera.",
            "Si el trámite es para menores de edad, deben contar con cédula de identidad.",
          ],
        },
        {
          title: "Atención a público",
          details: [
            "La oficina se encuentra en la Casa de la Cultura de El Tabo, ubicada en calle Poeta Jonás N° 85.",
            "Para solicitar atención se recomienda escribir al correo asuntosindigenas@eltabo.cl.",
            "La atención funciona en horario de oficina, con cierre por colación de 14:00 a 15:00 horas.",
          ],
        },
      ]}
    />
  );
}
