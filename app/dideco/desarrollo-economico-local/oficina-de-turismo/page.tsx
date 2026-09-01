import ProgramPage from "../../equidad-genero/ProgramPage";

export default function OficinaTurismoPage() {
  return (
    <ProgramPage
      title="Oficina de Turismo"
      area="Departamento de Desarrollo Económico Local"
      heroImage="/images/dideco/hero-cultura.png"
      summary="Iniciativa municipal y comunitaria que promueve el turismo local, destacando los atractivos naturales, culturales y gastronómicos de El Tabo."
      contact={[
        { label: "Encargada", value: "María Jesús Gálvez" },
        {
          label: "Correo",
          value: "turismo@eltabo.cl",
          href: "mailto:turismo@eltabo.cl",
        },
        { label: "Teléfono", value: "+56 9 8388 8581", href: "tel:+56983888581" },
      ]}
      highlights={[
        {
          title: "Atractivos locales",
          text: "Promoción de playas, miradores, senderos y espacios naturales de la comuna.",
        },
        {
          title: "Identidad comunal",
          text: "Difusión de ferias, festivales y actividades culturales que reflejan el carácter de El Tabo.",
        },
        {
          title: "Economía local",
          text: "Apoyo a emprendimientos turísticos, gastronómicos, artesanales y servicios locales.",
        },
      ]}
      sections={[
        {
          title: "Objetivo de la oficina",
          details: [
            "Promover el turismo local en la comuna de El Tabo.",
            "Destacar atractivos naturales, culturales y gastronómicos del territorio.",
            "Fomentar actividades turísticas que permitan a visitantes disfrutar la belleza costera y la calidez de la comunidad.",
            "Contribuir al desarrollo económico local y al bienestar de la comunidad.",
          ],
        },
        {
          title: "Promoción de atractivos turísticos",
          details: [
            "Difusión de playas icónicas como Playa El Tabo, reconocida por su tranquilidad y vistas panorámicas.",
            "Información sobre acantilados, senderos y miradores.",
            "Orientación para explorar el entorno costero y sus espacios de interés natural.",
          ],
        },
        {
          title: "Eventos locales",
          details: [
            "Promoción de festivales, ferias artesanales y actividades culturales.",
            "Difusión de actividades vinculadas a celebraciones de verano y festividades locales.",
            "Visibilización de iniciativas que fortalecen la identidad comunal.",
          ],
        },
        {
          title: "Recomendaciones para visitantes",
          details: [
            "Información sobre restaurantes, cafés y opciones gastronómicas.",
            "Datos sobre alojamientos y servicios disponibles en la comuna.",
            "Sugerencias para disfrutar playas, senderos, miradores y panoramas locales.",
          ],
        },
        {
          title: "Turismo activo y aventura",
          details: [
            "Orientación sobre actividades al aire libre como caminatas, ciclismo y surf.",
            "Recomendaciones para disfrutar la naturaleza y el borde costero.",
            "Promoción de experiencias turísticas seguras y vinculadas al territorio.",
          ],
        },
        {
          title: "Apoyo a emprendedores locales",
          details: [
            "Promoción de productos y servicios locales.",
            "Difusión de artesanías, tours guiados y experiencias únicas.",
            "Apoyo a oportunidades productivas relacionadas con la actividad turística.",
          ],
        },
      ]}
    />
  );
}
