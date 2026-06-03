import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const heroImage = "/images/departamento-educacion/hero-departamento-educacion.jpg";

const description =
  "El Departamento de Educación Municipal de la comuna de El Tabo tiene diversas funciones y objetivos centrados en la administración, promoción y mejora de la educación en la comuna.";

const functions = [
  "Planificación educativa: se diseñan y ejecutan planes y programas educativos que respondan a las necesidades de la comunidad.",
  "Gestión: administrar, supervisar y gestionar los establecimientos educacionales municipales, asegurando estándares educativos y administrativos.",
  "Atención ante la diversidad educativa: implementar estrategias para estudiantes con necesidades especiales, orígenes culturales y realidades socioeconómicas diversas.",
  "Trabajo con padres, madres y apoderados: entregar apoyo y orientación sobre temas educativos y desarrollo integral de los estudiantes.",
  "Evaluación del trabajo: realizar evaluaciones de los procesos educativos para mejorar día a día.",
];

const objectives = [
  "Mejorar la calidad educativa.",
  "Promover la inclusión educativa.",
  "Fomentar la participación de la comunidad educativa.",
  "Estimular la innovación educativa.",
  "Promover la cultura y valores.",
  "Asegurar la equidad en el acceso a la educación.",
];

const services =
  "Ofrecemos una formación que garantice aprendizajes de calidad, potenciando las competencias y habilidades propias de la persona, fortaleciendo los valores del respeto, la responsabilidad y la solidaridad en estudiantes de educación parvularia, educación básica y educación media.";

const projects = [
  "Programa de Integración Escolar para todos los niveles educativos, abordando diversas necesidades mediante profesionales como fonoaudióloga, terapeuta ocupacional, psicóloga y educadoras diferenciales.",
  "Implementación de talleres de inglés, canto, teatro, ciencias y medioambiente, y deportes.",
  "Actividades coordinadas con instituciones y programas como JUNAEB, SENDA, Departamento de Salud, Oficina Local de la Niñez, Deportes, Cultura, Diversidad y Discapacidad.",
  "Fortalecimiento de actividades relacionadas con centros de estudiantes y centros de padres y apoderados.",
  "Proyecto Conservación Gimnasio Colegio El Tabo, orientado a conservar el recinto y mejorar sus condiciones de habitabilidad.",
  "Proyecto Habilitación de Solución Modular de Emergencia, Anexo Colegio El Tabo, para responder a la falta de matrícula en el sector.",
  "Subvención Escolar Preferencial y pro-retención para apoyar a estudiantes vulnerables.",
  "Proyecto de Mejoramiento Educativo en cada establecimiento educacional de la comuna.",
  "Vinculación con entidades de enseñanza superior para la continuidad de estudios superiores.",
];

const establishments = [
  {
    name: "Departamento de Educación",
    director: "María Eliana Sepúlveda Morales",
    email: "daem@eltabo.cl",
    phone: "228405691",
    address: "Av. Osvaldo Marín 911, Las Cruces",
  },
  {
    name: "Colegio El Tabo",
    director: "Pamela Madrid Santis",
    email: "colegioeltabo2075@gmail.com",
    phone: "+56 9 9165 7023",
    address: "Josefina 248, El Tabo",
  },
  {
    name: "Escuela Básica Las Cruces",
    director: "Sila Solar Alvarez",
    email: "cocruces901@hotmail.com",
    phone: "228405691 anexo 300",
    address: "Av. Osvaldo Marín 901, Las Cruces",
  },
  {
    name: "Escuela Básica Quillaycillo",
    director: "Barbara Mancilla Rojas",
    email: "directoraquillaycillo@gmail.com",
    phone: "+56 9 9033 3934",
    address: "Camino Público s/n, ruta 978 camino Casablanca",
  },
  {
    name: "Jardín Infantil Caritas de Angel",
    director: "Claudia Sepúlveda Sepúlveda",
    email: "j.infantilcaritasdeangel@gmail.com",
    phone: "+56 9 9033 932",
    address: "Avenida La Concepción 835, Las Cruces",
  },
];

const highlights = [
  {
    title: "Gestión educativa",
    text: "Administración y supervisión de los establecimientos educacionales municipales.",
  },
  {
    title: "Inclusión",
    text: "Estrategias para atender la diversidad educativa y apoyar trayectorias escolares.",
  },
  {
    title: "Comunidad",
    text: "Trabajo con familias, centros de estudiantes, apoderados e instituciones colaboradoras.",
  },
];

export const metadata: Metadata = {
  title: "Departamento de Educación | Municipalidad de El Tabo",
  description:
    "Departamento de Educación Municipal de El Tabo: funciones, objetivos, establecimientos, contactos y proyectos educativos.",
};

function NumberedList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[42px_1fr] gap-4 rounded-lg bg-[#f8fbff] p-4"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b274e] text-sm font-black text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-sm leading-7 text-[#2a3650]">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function EstablishmentCard({
  name,
  director,
  email,
  phone,
  address,
}: {
  name: string;
  director: string;
  email: string;
  phone: string;
  address: string;
}) {
  return (
    <article className="rounded-xl border border-[#e4ebf4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1.5 w-12 rounded-full bg-[#ffd44d]" />
      <h3 className="mt-4 text-xl font-black leading-tight text-[#0b274e]">
        {name}
      </h3>
      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        <p>
          <span className="font-black text-slate-800">Responsable: </span>
          {director}
        </p>
        <p>
          <span className="font-black text-slate-800">Teléfono: </span>
          {phone}
        </p>
        <p>
          <span className="font-black text-slate-800">Dirección: </span>
          {address}
        </p>
        <a className="block font-semibold text-[#1453a4] underline" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </article>
  );
}

export default function DepartamentoEducacionPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f5f8fc] text-slate-800">
        <section className="relative overflow-hidden bg-[#08214a] text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Departamento de Educación de El Tabo"
              className="h-full w-full object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b3d] via-[#08214a]/90 to-[#6d5a18]/62" />
          </div>

          <div className="relative mx-auto grid max-w-[1160px] gap-10 px-6 py-14 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Direcciones municipales
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Departamento de Educación
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/92">
                Administración, promoción y mejora de la educación municipal en
                El Tabo, con foco en calidad, inclusión y comunidad educativa.
              </p>
            </div>

            <aside className="rounded-xl border border-white/20 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffd44d]">
                Contacto DAEM
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm font-black text-white">Responsable</p>
                  <p className="text-base font-semibold text-white/90">
                    María Eliana Sepúlveda Morales
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black text-white">Correo</p>
                  <a
                    href="mailto:daem@eltabo.cl"
                    className="text-base font-semibold text-white/90 underline"
                  >
                    daem@eltabo.cl
                  </a>
                </div>
                <div>
                  <p className="text-sm font-black text-white">Teléfono</p>
                  <p className="text-base font-semibold text-white/90">
                    228405691
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1160px] gap-5 px-6 py-8 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#e7edf5] bg-[#f8fbff] p-5 shadow-sm"
              >
                <h2 className="text-xl font-black text-[#0b274e]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <aside className="rounded-xl bg-[#0b274e] p-7 text-white shadow-xl lg:sticky lg:top-32">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffd44d]">
                Sobre el departamento
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Gestión educativa municipal para estudiantes, familias y
                establecimientos.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/90">
                {description}
              </p>
            </aside>

            <div className="space-y-8">
              <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                    Datos de contacto
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                    Establecimientos municipales
                  </h2>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  {establishments.map((establishment) => (
                    <EstablishmentCard
                      key={establishment.name}
                      {...establishment}
                    />
                  ))}
                </div>
              </article>

              <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                  Servicios y trámites
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                  Formación integral y aprendizajes de calidad
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {services}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#e9f6f8]">
          <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-12 md:py-16 lg:grid-cols-2">
            <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Objetivos
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Lineamientos del departamento
              </h2>
              <div className="mt-5">
                <NumberedList items={objectives} />
              </div>
            </article>

            <article className="rounded-xl border border-[#e7edf5] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Funciones
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Gestión educativa diaria
              </h2>
              <div className="mt-5">
                <NumberedList items={functions} />
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1160px] px-6 py-12 md:py-16">
          <article className="overflow-hidden rounded-xl border border-[#e7edf5] bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-[#f8fbff] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2a5298]">
                Proyectos y actividades
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#0b274e]">
                Acciones relevantes
              </h2>
            </div>
            <div className="p-6">
              <NumberedList items={projects} />
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
