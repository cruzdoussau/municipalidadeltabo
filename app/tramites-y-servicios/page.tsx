"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Categoria =
  | "Todos"
  | "Juzgado Policía Local"
  | "SECPLA"
  | "Salud"
  | "Tránsito"
  | "Dirección de Obras"
  | "Medio Ambiente"
  | "Programas Sociales"
  | "Oficina Local de la Niñez";

type Tramite = {
  title: string;
  category: Categoria;
  unit: string;
  description: string;
  requirements?: string[];
  responseTime?: string;
  type?: string;
  icon: string;
  action?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

const categorias: { label: Categoria; icon: string }[] = [
  { label: "Todos", icon: "✨" },
  { label: "Juzgado Policía Local", icon: "⚖️" },
  { label: "SECPLA", icon: "🗺️" },
  { label: "Salud", icon: "🏥" },
  { label: "Tránsito", icon: "🚗" },
  { label: "Dirección de Obras", icon: "🏗️" },
  { label: "Medio Ambiente", icon: "🌿" },
  { label: "Programas Sociales", icon: "🤝" },
  { label: "Oficina Local de la Niñez", icon: "🧒" },
];

const tramites: Tramite[] = [
  // JPL
  {
    title: "Solicita forma de notificación",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Formulario para solicitar forma de notificación por email para persona natural.",
    requirements: [
      "Completar formulario correspondiente.",
      "Indicar correo electrónico válido.",
    ],
    icon: "📝",
  },
  {
    title: "Solicita forma de notificación",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Formulario para solicitar forma de notificación por email para persona jurídica.",
    requirements: [
      "Completar formulario correspondiente.",
      "Indicar datos de la persona jurídica.",
    ],
    icon: "📝",
  },
  {
    title: "Reposición",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Solicitud dirigida al Juzgado de Policía Local para presentar una reposición ante una resolución.",
    requirements: [
      "Completar formulario.",
      "Presentar antecedentes que respalden la solicitud.",
    ],
    icon: "⚖️",
  },
  {
    title: "Exhorto por prescripción",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Formulario de exhorto por prescripción asociado a multas del TAG.",
    requirements: [
      "Completar formulario.",
      "Indicar antecedentes de la causa o multa.",
    ],
    icon: "🚗",
  },
  {
    title: "Solicitud de exhorto",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Solicitud para tramitar exhorto ante el Juzgado de Policía Local.",
    requirements: [
      "Completar formulario.",
      "Adjuntar antecedentes si corresponde.",
    ],
    icon: "📨",
  },
  {
    title: "Descargos",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Formulario para presentar descargos ante una infracción o citación.",
    requirements: [
      "Completar formulario.",
      "Adjuntar pruebas o antecedentes si corresponde.",
    ],
    icon: "📄",
  },
  {
    title: "Cumple lo ordenado",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Presentación para informar cumplimiento de lo ordenado por el tribunal.",
    requirements: [
      "Completar formulario.",
      "Acompañar documento que acredite cumplimiento si corresponde.",
    ],
    icon: "✅",
  },
  {
    title: "Solicitud de nuevo día y hora",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Solicitud para pedir nueva fecha u horario de comparecencia o audiencia.",
    requirements: ["Completar formulario.", "Indicar motivo de la solicitud."],
    icon: "📅",
  },
  {
    title: "Solicita que se dicte sentencia",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Solicitud dirigida al tribunal para pedir que se dicte sentencia en la causa.",
    requirements: [
      "Completar formulario.",
      "Indicar causa o antecedentes respectivos.",
    ],
    icon: "⚖️",
  },
  {
    title: "Se notifica expresamente",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Formulario para dejar constancia de notificación expresa ante el Juzgado.",
    requirements: [
      "Completar formulario.",
      "Identificar causa o resolución asociada.",
    ],
    icon: "📌",
  },
  {
    title: "Solicita certificación de ejecutoria",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Solicitud de certificación de ejecutoria de una resolución o sentencia.",
    requirements: ["Completar formulario.", "Identificar resolución o causa."],
    icon: "📑",
  },
  {
    title: "Suspensión de comparendo por falta de notificación",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "Formulario Word",
    description:
      "Solicitud de suspensión de comparendo cuando existe falta de notificación.",
    requirements: [
      "Completar formulario.",
      "Exponer antecedentes de la falta de notificación.",
    ],
    icon: "⏸️",
  },
  {
    title: "Glosario Juzgado de Policía Local",
    category: "Juzgado Policía Local",
    unit: "Juzgado de Policía Local",
    type: "PDF",
    description:
      "Documento de apoyo con términos frecuentes usados en el Juzgado de Policía Local.",
    requirements: ["Descargar o revisar documento informativo."],
    icon: "📘",
  },

  // SECPLA
  {
    title: "Sistema de Información Territorial de El Tabo",
    category: "SECPLA",
    unit: "Secretaría Comunal de Planificación",
    type: "Plataforma territorial",
    description:
      "Herramienta que reúne información territorial de la comuna en un solo espacio, de manera clara, cercana, interactiva y de acceso abierto para el municipio y la comunidad.",
    requirements: [
      "Acceso a internet.",
      "Buscar información territorial según el tema de interés.",
    ],
    icon: "🗺️",
    action: {
      label: "Ir a SITET",
      href: "#",
    },
  },
  {
    title: "Plan Regulador Comunal",
    category: "SECPLA",
    unit: "Secretaría Comunal de Planificación",
    type: "Instrumento de planificación",
    description:
      "Instrumento legal de planificación que determina el crecimiento y desarrollo urbano del territorio, regulando áreas residenciales, productivas y de cuidado ambiental.",
    requirements: [
      "Revisar documentos del PRC.",
      "Consultar etapas, antecedentes y procesos de participación ciudadana.",
    ],
    icon: "🏙️",
    action: {
      label: "Ver PRC",
      href: "#",
    },
  },

  // SALUD
  {
    title: "Óptica Municipal",
    category: "Salud",
    unit: "Salud Municipal",
    type: "Servicio de salud comunitaria",
    description:
      "Orientación y acceso a prestaciones asociadas a salud visual para vecinos y vecinas, según disponibilidad municipal.",
    requirements: [
      "Consultar requisitos vigentes.",
      "Presentar antecedentes solicitados por el programa.",
    ],
    icon: "👓",
  },
  {
    title: "Chile Crece Contigo",
    category: "Salud",
    unit: "Salud Municipal",
    type: "Programa de apoyo familiar",
    description:
      "Programa de acompañamiento a niños, niñas y sus familias durante la primera infancia, articulado con la red de salud y apoyo social.",
    requirements: [
      "Consultar en red de salud municipal.",
      "Presentar antecedentes del niño, niña o familia según corresponda.",
    ],
    icon: "👶",
  },
  {
    title: "Farmacia Municipal",
    category: "Salud",
    unit: "Salud Municipal",
    type: "Servicio comunitario",
    description:
      "Servicio orientado a facilitar el acceso a medicamentos para vecinos y vecinas de la comuna, de acuerdo con requisitos y disponibilidad.",
    requirements: [
      "Consultar inscripción.",
      "Presentar receta médica vigente si corresponde.",
    ],
    icon: "💊",
  },

  // TRANSITO
  {
    title: "Permiso de Circulación",
    category: "Tránsito",
    unit: "Dirección de Tránsito",
    type: "Pago en línea",
    description:
      "Servicio para consultar y pagar el permiso de circulación asociado a un vehículo.",
    requirements: ["RUT/RUN.", "Patente del vehículo sin guion."],
    icon: "🚘",
    action: {
      label: "Ir a Vecino Digital",
      href: "/vecino-digital",
    },
  },
  {
    title: "Licencias de Conducir",
    category: "Tránsito",
    unit: "Dirección de Tránsito",
    type: "Información y orientación",
    description:
      "Información sobre cómo obtener, renovar o ampliar una licencia de conducir y conocer las clases de licencia existentes en Chile.",
    requirements: [
      "Cédula de identidad vigente.",
      "Cumplir requisitos según clase de licencia.",
      "Rendir exámenes correspondientes.",
    ],
    icon: "🪪",
    action: {
      label: "Ver licencias",
      href: "/licencias-conducir",
    },
  },

  // DOM
  {
    title: "Certificado de Número",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Certificado",
    description:
      "Documento oficial emitido por la DOM que certifica el número de una propiedad o edificación bajo un rol de avalúo.",
    responseTime: "4 días hábiles / 15 días corridos por DOM en Línea",
    requirements: ["Rol de Avalúo.", "Formulario MINVU o ingreso por DOM en Línea."],
    icon: "📄",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Certificado de Afectación",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Certificado",
    description:
      "Acredita si una propiedad tiene parte de su superficie afecta a utilidad pública o expropiación por el Plan Regulador Comunal.",
    responseTime: "4 días hábiles / 15 días corridos por DOM en Línea",
    requirements: [
      "Rol de Avalúo.",
      "Formulario MINVU.",
      "Dominio vigente o declaración de medidas de deslindes.",
    ],
    icon: "📄",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Certificado de Informaciones Previas",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Certificado",
    description:
      "Informa las normas urbanísticas determinadas por el PRC vigente, incluyendo perfiles viales, utilidad pública, normas de edificación, usos de suelo y exigencias de urbanización.",
    responseTime: "4 días hábiles / 15 días por DOM en Línea",
    requirements: [
      "Rol de Avalúo.",
      "Formulario MINVU.",
      "Dominio vigente o declaración de medidas de deslindes.",
    ],
    icon: "📄",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Certificado de Vivienda Social",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Certificado",
    description:
      "Documento oficial que acredita que una vivienda cumple con los requisitos para ser considerada vivienda social.",
    responseTime: "5 días hábiles / 15 días corridos por DOM en Línea",
    requirements: [
      "Certificado de Avalúo Fiscal Detallado.",
      "Formulario en ventanilla DOM o DOM en Línea.",
    ],
    icon: "🏠",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Certificado de Urbanización",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Certificado",
    description:
      "Acredita que un área o terreno ha sido urbanizado conforme a normativas y requisitos establecidos.",
    responseTime: "4 días hábiles / 15 días corridos por DOM en Línea",
    requirements: [
      "Certificados del Art. 134 LGUC.",
      "Formulario en ventanilla DOM.",
    ],
    icon: "🏙️",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Obra Nueva",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Permiso de edificación",
    description: "Trámite para nueva edificación realizada en un predio.",
    responseTime: "30 días",
    requirements: [
      "Expediente patrocinado por profesional competente.",
      "Ingreso por ventanilla DOM o DOM en Línea.",
    ],
    icon: "🏗️",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Obra Menor",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Permiso de edificación",
    description:
      "Modificación de edificaciones existentes que no alteran su estructura, o ampliaciones hasta un máximo de 100 m².",
    responseTime: "15 días",
    requirements: [
      "Expediente patrocinado por profesional competente.",
      "Ingreso por ventanilla DOM o DOM en Línea.",
    ],
    icon: "🧱",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Subdivisión y/o Fusión",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Expediente DOM",
    description:
      "División del suelo o unión de dos o más lotes colindantes para generar un predio de mayor tamaño.",
    responseTime: "30 días",
    requirements: [
      "Expediente patrocinado por profesional competente.",
      "Ingreso por ventanilla DOM o DOM en Línea.",
    ],
    icon: "📐",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Ley 20.898",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Regularización",
    description:
      "Procedimiento simplificado para permisos de edificación y recepción definitiva de viviendas o edificaciones sin recepción definitiva.",
    responseTime: "90 días hábiles",
    requirements: [
      "Expediente patrocinado por profesional competente.",
      "Ingreso por ventanilla DOM o DOM en Línea.",
    ],
    icon: "🏘️",
    action: {
      label: "Ir a DOM en Línea",
      href: "/dom-en-linea",
    },
  },
  {
    title: "Desarchivo de expediente",
    category: "Dirección de Obras",
    unit: "Dirección de Obras Municipales",
    type: "Consulta expediente",
    description:
      "Permite solicitar el desarchivo de un expediente para revisión y consulta, indicando dirección y rol de la propiedad.",
    responseTime: "3 días hábiles",
    requirements: [
      "Rol de Avalúo.",
      "Dirección de la propiedad.",
      "Formulario de desarchivo en ventanilla DOM.",
    ],
    icon: "🗂️",
  },

  // MEDIO AMBIENTE
  {
    title: "Control de natalidad de caninos y felinos",
    category: "Medio Ambiente",
    unit: "Programa Control de Zoonosis",
    type: "Servicio veterinario",
    description:
      "Servicio de esterilización y castración para caninos y felinos con y sin dueño.",
    requirements: [
      "Consultar disponibilidad de operativos.",
      "Cumplir requisitos del programa.",
    ],
    icon: "🐶",
  },
  {
    title: "Operativos de atención veterinaria básica",
    category: "Medio Ambiente",
    unit: "Programa Control de Zoonosis",
    type: "Atención veterinaria",
    description:
      "Acceso a servicios preventivos como vacunación, desparasitación, implantación de microchip y registro en la plataforma nacional.",
    requirements: [
      "Consultar fechas de operativos.",
      "Presentar antecedentes de la mascota si corresponde.",
    ],
    icon: "🐾",
  },
  {
    title: "Educación y concientización en tenencia responsable",
    category: "Medio Ambiente",
    unit: "Programa Control de Zoonosis",
    type: "Educación comunitaria",
    description:
      "Estrategias educativas para promover la tenencia responsable de mascotas en distintos puntos de la comuna.",
    requirements: [
      "Participación comunitaria.",
      "Consultar actividades disponibles.",
    ],
    icon: "📚",
  },
  {
    title: "Fiscalización en tenencia responsable",
    category: "Medio Ambiente",
    unit: "Programa Control de Zoonosis",
    type: "Fiscalización",
    description:
      "Fiscalización orientada al cumplimiento de la Ley 21.020, ordenanza municipal y bienestar animal.",
    requirements: ["Ingresar denuncia o solicitud según canal municipal."],
    icon: "🔎",
  },
  {
    title: "Educación y concientización ambiental",
    category: "Medio Ambiente",
    unit: "Gestión Ambiental",
    type: "Educación comunitaria",
    description:
      "Actividades educativas para promover el cuidado medioambiental, la protección de recursos naturales y biodiversidad local.",
    requirements: [
      "Participación comunitaria.",
      "Consultar calendario de actividades.",
    ],
    icon: "🌱",
  },
  {
    title: "Limpiezas de playas y quebradas",
    category: "Medio Ambiente",
    unit: "Gestión Ambiental",
    type: "Actividad comunitaria",
    description:
      "Acciones orientadas a mantener playas y quebradas limpias, promoviendo conciencia ambiental y disminución de contaminación.",
    requirements: [
      "Participar en convocatorias comunitarias.",
      "Consultar fechas disponibles.",
    ],
    icon: "🏖️",
  },
  {
    title: "Fiscalización ambiental",
    category: "Medio Ambiente",
    unit: "Gestión Ambiental",
    type: "Fiscalización",
    description:
      "Fiscalización de denuncias según competencias municipales, normativas ambientales y ordenanza ambiental local.",
    requirements: [
      "Presentar denuncia o antecedente a través del canal municipal correspondiente.",
    ],
    icon: "🌿",
  },

  // PROGRAMAS SOCIALES
  {
    title: "Viviendas Municipales",
    category: "Programas Sociales",
    unit: "Vivienda y Habitabilidad",
    type: "Apoyo habitacional",
    description:
      "Programa destinado a otorgar viviendas a personas o grupos familiares en situación de vulnerabilidad habitacional que acrediten residencia igual o mayor a 8 años en la comuna.",
    requirements: [
      "No disponer de vivienda o que esta se encuentre inhabitable.",
      "Acreditar residencia de al menos 8 años en la comuna.",
      "Estar en el tramo del 40% de calificación socioeconómica.",
      "Contar con factibilidad de agua potable, alcantarillado y electricidad.",
    ],
    icon: "🏠",
  },
  {
    title: "Materiales de construcción",
    category: "Programas Sociales",
    unit: "Vivienda y Habitabilidad",
    type: "Apoyo habitacional",
    description:
      "Entrega de materiales para reparación de viviendas con deterioro visible, inhabitables o en situación de hacinamiento.",
    requirements: [
      "Residencia de al menos 5 años en la comuna.",
      "Tramo RSH 40%, o hasta 60% con respaldo social.",
      "Contar con problema habitacional.",
      "Autorización notarial del dueño cuando corresponda.",
    ],
    icon: "🧱",
  },
  {
    title: "Fosas sépticas",
    category: "Programas Sociales",
    unit: "Vivienda y Habitabilidad",
    type: "Apoyo habitacional",
    description:
      "Entrega de fosa séptica a familias que no cuenten con una, que la actual esté mal ejecutada o que presenten problemas sanitarios.",
    requirements: [
      "Evaluación social.",
      "Problema sanitario acreditable.",
      "Cumplir criterios de residencia y vulnerabilidad.",
    ],
    icon: "🚰",
  },
  {
    title: "Mano de obra",
    category: "Programas Sociales",
    unit: "Vivienda y Habitabilidad",
    type: "Apoyo habitacional",
    description:
      "Apoyo para familias que no cuentan con medios económicos para pagar mano de obra, sujeto a evaluación y disponibilidad municipal.",
    requirements: [
      "Evaluación del equipo de vivienda.",
      "Disponibilidad de recursos humanos y materiales.",
      "Cumplir criterios sociales.",
    ],
    icon: "🛠️",
  },
  {
    title: "Subsidios SERVIU",
    category: "Programas Sociales",
    unit: "Vivienda y Habitabilidad",
    type: "Orientación habitacional",
    description:
      "Orientación para postulación a subsidios del Estado como DS27, DS49, DS11, DS52 y otros de la oferta vigente.",
    requirements: [
      "Ser mayor de 18 años.",
      "Contar con ClaveÚnica.",
      "Cumplir requisitos específicos de cada subsidio.",
      "Contar con libreta de ahorro para la vivienda cuando corresponda.",
    ],
    icon: "🏡",
  },
  {
    title: "Programa Acceso a la Justicia",
    category: "Programas Sociales",
    unit: "Acceso a la Justicia",
    type: "Orientación legal",
    description:
      "Asesoría u orientación legal en materias de derecho de familia y derecho civil.",
    requirements: [
      "Presentar Registro Social de Hogares en la comuna.",
      "Exponer antecedentes del caso.",
      "Consultar disponibilidad de atención.",
    ],
    icon: "⚖️",
  },

  // OLN
  {
    title: "Gestión Integrada de Casos",
    category: "Oficina Local de la Niñez",
    unit: "Oficina Local de la Niñez",
    type: "Gestión de casos",
    description:
      "Gestión integrada de casos de niños, niñas y adolescentes en coordinación con la red local.",
    requirements: [
      "Consulta o derivación según situación.",
      "Evaluación de antecedentes.",
    ],
    icon: "🧒",
  },
  {
    title: "Promoción territorial de derechos de la niñez",
    category: "Oficina Local de la Niñez",
    unit: "Oficina Local de la Niñez",
    type: "Promoción de derechos",
    description:
      "Acciones territoriales para promover y proteger los derechos de niños, niñas y adolescentes.",
    requirements: [
      "Participación comunitaria.",
      "Coordinación con redes territoriales.",
    ],
    icon: "📣",
  },
  {
    title: "Mesa de Articulación Interinstitucional",
    category: "Oficina Local de la Niñez",
    unit: "Oficina Local de la Niñez",
    type: "Coordinación intersectorial",
    description:
      "Espacio de coordinación entre instituciones para abordar situaciones y acciones vinculadas a niñez y adolescencia.",
    requirements: [
      "Coordinación institucional.",
      "Participación de actores de la red local.",
    ],
    icon: "🤝",
  },
  {
    title: "Consejo Consultivo de Niños, Niñas y Adolescentes",
    category: "Oficina Local de la Niñez",
    unit: "Oficina Local de la Niñez",
    type: "Participación",
    description:
      "Instancia de participación de niños, niñas y adolescentes para expresar opiniones y propuestas sobre temas que les afectan.",
    requirements: [
      "Participación de NNA.",
      "Convocatoria según calendario municipal.",
    ],
    icon: "🗣️",
  },
];

export default function TramitesServiciosPage() {
  const [categoriaActiva, setCategoriaActiva] =
    React.useState<Categoria>("Todos");
  const [query, setQuery] = React.useState("");

  const filtrados = tramites.filter((item) => {
    const coincideCategoria =
      categoriaActiva === "Todos" || item.category === categoriaActiva;

    const texto =
      `${item.title} ${item.category} ${item.unit} ${item.description} ${
        item.type ?? ""
      }`.toLowerCase();

    const coincideBusqueda = texto.includes(query.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00174a] via-[#0b4ca8] to-[#00a6d6] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00174a]/95 via-[#0b4ca8]/85 to-[#00174a]/55" />

          <div className="relative mx-auto max-w-[1120px] px-4 py-16 md:py-20">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              Portal municipal
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Trámites y Servicios
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
              Encuentra en un solo lugar los principales trámites, formularios,
              programas, servicios y plataformas disponibles para la comunidad
              de El Tabo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  document
                    .getElementById("listado-tramites")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-white px-8 py-4 font-black text-[#00174a] shadow-lg"
                type="button"
              >
                Ver trámites disponibles
              </button>

              <Link
                href="/vecino-digital"
                className="rounded-full bg-blue-600 px-8 py-4 text-center font-black text-white shadow-lg ring-1 ring-white/20"
              >
                Ir a Vecino Digital
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-14">
          <div className="grid gap-6 md:grid-cols-4">
            {categorias
              .filter((item) => item.label !== "Todos")
              .map((item) => {
                const total = tramites.filter(
                  (tramite) => tramite.category === item.label
                ).length;

                return (
                  <button
                    key={item.label}
                    onClick={() => setCategoriaActiva(item.label)}
                    className="rounded-[24px] bg-white p-6 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                    type="button"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-3xl">
                        {item.icon}
                      </div>

                      <span className="rounded-full bg-[#00174a] px-3 py-1 text-xs font-black text-white">
                        {total}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-[#00174a]">
                      {item.label}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Ver trámites y servicios asociados.
                    </p>
                  </button>
                );
              })}
          </div>
        </section>

        <section
          id="listado-tramites"
          className="mx-auto max-w-[1120px] scroll-mt-32 px-4 pb-16"
        >
          <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-4 md:grid-cols-[1fr_320px]">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700">
                  Buscador
                </span>

                <h2 className="mt-4 text-4xl font-black text-[#00174a]">
                  Explora trámites por categoría
                </h2>
              </div>

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar trámite, unidad o palabra clave..."
                className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm outline-none ring-blue-200 transition focus:ring-4"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {categorias.map((item) => {
                const active = categoriaActiva === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() => setCategoriaActiva(item.label)}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition ${
                      active
                        ? "bg-blue-700 text-white shadow"
                        : "bg-slate-50 text-[#17356f] hover:bg-blue-50"
                    }`}
                    type="button"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((item, index) => (
              <article
                key={`${item.category}-${item.unit}-${item.title}-${
                  item.type ?? "sin-tipo"
                }-${index}`}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-3xl">
                    {item.icon}
                  </div>

                  <span className="rounded-full bg-[#00174a] px-3 py-1 text-right text-xs font-black text-white">
                    {item.category}
                  </span>
                </div>

                <p className="mt-5 text-xs font-black uppercase tracking-wide text-blue-600">
                  {item.unit}
                </p>

                <h3 className="mt-2 text-xl font-black text-[#00174a]">
                  {item.title}
                </h3>

                {item.type && (
                  <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {item.type}
                  </p>
                )}

                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>

                {item.responseTime && (
                  <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm text-[#17356f]">
                    <strong>Plazo:</strong> {item.responseTime}
                  </div>
                )}

                {item.requirements && item.requirements.length > 0 && (
                  <div className="mt-5">
                    <p className="text-sm font-black text-[#00174a]">
                      Requisitos / antecedentes:
                    </p>

                    <ul className="mt-3 space-y-2">
                      {item.requirements.map((requirement, reqIndex) => (
                        <li
                          key={`${item.title}-${index}-requirement-${reqIndex}`}
                          className="flex gap-2 text-sm leading-relaxed text-slate-700"
                        >
                          <span className="text-blue-700">✔</span>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.action ? (
                  item.action.external ? (
                    <a
                      href={item.action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 block rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-black text-white"
                    >
                      {item.action.label} →
                    </a>
                  ) : (
                    <Link
                      href={item.action.href}
                      className="mt-6 block rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-black text-white"
                    >
                      {item.action.label} →
                    </Link>
                  )
                ) : (
                  <button
                    className="mt-6 block w-full rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-black text-white"
                    type="button"
                  >
                    Ver información →
                  </button>
                )}
              </article>
            ))}
          </div>

          {filtrados.length === 0 && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-8 text-center text-[#061f5c]">
              No encontramos trámites asociados a tu búsqueda.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}