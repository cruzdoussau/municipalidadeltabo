import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LogoutButton from "@/components/admin/LogoutButton";
import { canManageNews, canViewMarketing, getCurrentUser } from "@/lib/auth";

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const cards = [
    {
      title: "Noticias",
      text: "Crear publicaciones con imagen, fecha, bajada, etiquetas y cuerpo editorial.",
      href: "/admin/noticias",
      enabled: canManageNews(user),
    },
    {
      title: "Marketing",
      text: "Analizar tráfico, comportamiento de usuarios, fuentes, dispositivos y páginas de mayor interés.",
      href: "/admin/marketing",
      enabled: canViewMarketing(user),
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f4f8fc] px-6 py-14 text-slate-800">
        <section className="mx-auto max-w-[1120px]">
          <div className="rounded-[30px] bg-[#001b4f] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Panel interno
            </p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h1 className="text-4xl font-black md:text-5xl">
                Hola, {user.name}
              </h1>
              <LogoutButton />
            </div>
            <p className="mt-3 text-white/75">Rol activo: {user.role}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cards
              .filter((card) => card.enabled)
              .map((card) => (
                <Link
                  href={card.href}
                  key={card.title}
                  className="rounded-[26px] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h2 className="text-3xl font-black text-[#00174a]">
                    {card.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {card.text}
                  </p>
                  <span className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white">
                    Abrir módulo
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
