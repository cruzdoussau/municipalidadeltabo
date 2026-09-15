import type { Metadata } from "next";
import ProgramPage from "../../equidad-genero/ProgramPage";

export const metadata: Metadata = {
  title:
    "Oficina de Registro de Organizaciones Comunitarias | Municipalidad de El Tabo",
  description:
    "Información, contacto, trámites y servicios para organizaciones comunitarias de El Tabo.",
};

export default function OrganizacionesComunitariasPage() {
  return (
    <ProgramPage
      title="Oficina de Registro de Organizaciones Comunitarias"
      area="Participación Ciudadana"
      heroImage="/images/accesos-rapidos/organizaciones-comunitarias.png"
      summary="Oficina encargada de promover la participación de la comunidad organizada, orientar a sus dirigentes y apoyar el funcionamiento de las organizaciones sociales de El Tabo."
      contact={[
        { label: "Encargada", value: "Soraya Olivo Pinto" },
        {
          label: "Correo",
          value: "organizacionescomunitarias@eltabo.cl",
          href: "mailto:organizacionescomunitarias@eltabo.cl",
        },
        {
          label: "Teléfono",
          value: "+56 35 220 3538",
          href: "tel:+56352203538",
        },
        {
          label: "Dirección",
          value:
            "Av. Las Cruces Norte 401, Edificio Consistorial, El Tabo, Región de Valparaíso.",
        },
        {
          label: "Instructivo",
          value: "Actualización del Libro de Socios",
          href: "https://eltabo.cl/wp-content/uploads/2025/04/INSTRUCTIVO-PARA-LA-ACTUALIZACION-DEL-LIBRO-DE-SOCIOS.docx",
        },
      ]}
      highlights={[
        {
          title: "Registro y constitución",
          text: "Orientación para crear, registrar y mantener vigentes organizaciones comunitarias.",
        },
        {
          title: "Asesoría a dirigentes",
          text: "Apoyo legal y administrativo para elecciones, estatutos, certificados y libros de socios.",
        },
        {
          title: "Participación ciudadana",
          text: "Canalización de inquietudes y fortalecimiento del vínculo entre organizaciones y municipio.",
        },
      ]}
      sections={[
        {
          title: "Trámites y servicios",
          details: [
            "Registro y constitución de organizaciones comunitarias.",
            "Modificación de estatutos.",
            "Capacitación y asesoramiento legal.",
            "Información y orientación sobre participación ciudadana.",
            "Orientación en elección o renovación de directorio.",
            "Solicitud de certificado de vigencia.",
            "Solicitud de certificado de actualización del Libro de Registro de Socios y Socias.",
            "Orientación en procesos de mediación vecinal comunitaria.",
          ],
        },
        {
          title: "Objetivos generales",
          details: [
            "Legalizar y asesorar a organizaciones comunitarias territoriales y funcionales.",
            "Promover su buen funcionamiento y desarrollo mediante capacitación y recursos.",
            "Facilitar la constitución y renovación de organizaciones con procesos transparentes.",
            "Formar a dirigentes y vecinos en la Ley 19.418, la Ley 20.500 y su aplicación en la comunidad.",
            "Asesorar postulaciones a programas gubernamentales y subvenciones.",
          ],
        },
        {
          title: "Participación y fortalecimiento comunitario",
          details: [
            "Promover la participación ciudadana en la toma de decisiones de la comuna.",
            "Diagnosticar y evaluar los intereses y niveles de participación de la comunidad.",
            "Capacitar a dirigentes en aspectos legales y normativos.",
            "Reconocer la labor de dirigentes sociales y comunitarios.",
            "Evaluar las actividades realizadas para impulsar la mejora continua.",
          ],
        },
        {
          title: "Metas de la oficina",
          details: [
            "Fortalecer la capacidad de liderazgo de dirigentes sociales y comunitarios.",
            "Fomentar la participación ciudadana en las decisiones locales.",
            "Aumentar el número de organizaciones comunitarias vigentes en la comuna.",
            "Potenciar la colaboración entre dirigentes, organizaciones y municipalidad.",
          ],
        },
      ]}
    />
  );
}
