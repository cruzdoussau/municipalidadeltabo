import type { Metadata } from "next";
import ProgramPage from "../ProgramPage";

export const metadata: Metadata = {
  title: "Programa Mujeres Jefas de Hogar | DIDECO | Municipalidad de El Tabo",
  description:
    "Programa Mujeres Jefas de Hogar de El Tabo: autonomía económica, talleres, proyecto laboral, capacitaciones y acompañamiento.",
};

export default function ProgramaMujeresJefasDeHogarPage() {
  return (
    <ProgramPage
      title="Programa Mujeres Jefas de Hogar"
      heroImage="/images/dideco/equidad-genero/hero-mujeres-jefas-hogar.jpeg"
      summary="Iniciativa integral diseñada para fortalecer la autonomía económica y el bienestar de mujeres jefas de hogar de la comuna, mediante capacitación, acompañamiento personalizado y servicios complementarios."
      contact={[
        { label: "Responsable", value: "Gestora" },
        {
          label: "Correo electrónico",
          value: "programajefasdehogareltabo@gmail.com",
          href: "mailto:programajefasdehogareltabo@gmail.com",
        },
        { label: "Teléfono", value: "+56 9 6439 7277" },
        { label: "Teléfono alternativo", value: "+56 9 9541 6770" },
      ]}
      highlights={[
        {
          title: "Autonomía económica",
          text: "Herramientas para fortalecer independencia y desarrollo laboral.",
        },
        {
          title: "Formación",
          text: "Talleres prácticos para empleabilidad y emprendimiento.",
        },
        {
          title: "Acompañamiento",
          text: "Apoyo personalizado para elaborar y ejecutar un proyecto laboral.",
        },
      ]}
      sections={[
        {
          title: "¿Qué ofrece el programa?",
          details: [
            "Talleres de formación para el trabajo en áreas como peluquería, carpintería y otros oficios demandados.",
            "Apoyo para elaborar un proyecto laboral personalizado.",
            "Acompañamiento para ejecutar el proyecto laboral definido por cada participante.",
            "Servicios complementarios como alfabetización digital, nivelación de estudios, cuidado infantil, atención en salud, orientación jurídica y apoyo psicosocial.",
          ],
        },
        {
          title: "Beneficios",
          details: [
            "Desarrollo de habilidades laborales y técnicas.",
            "Acceso a capacitaciones para el mundo laboral o el emprendimiento.",
            "Acompañamiento personalizado para ejecutar el proyecto laboral.",
            "Mejora de calidad de vida mediante apoyo en salud, orientación jurídica y atención psicosocial.",
            "Conexión con una red de mujeres que buscan crecer y superarse juntas.",
          ],
        },
      ]}
    />
  );
}
