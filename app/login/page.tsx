"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { InternalUser } from "@/lib/auth";

function homeByRole(role: InternalUser["role"]) {
  if (role === "marketing") {
    return "/admin/marketing";
  }

  if (role === "prensa") {
    return "/admin/noticias";
  }

  return "/admin";
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = (await response.json()) as {
      user?: InternalUser;
      message?: string;
    };

    setLoading(false);

    if (!response.ok || !data.user) {
      setError(data.message ?? "No pudimos iniciar sesión.");
      return;
    }

    router.push(homeByRole(data.user.role));
    router.refresh();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#eef5fb] px-6 py-16 text-slate-800">
        <section className="mx-auto grid max-w-[1040px] overflow-hidden rounded-[30px] bg-white shadow-xl ring-1 ring-slate-200 md:grid-cols-[1fr_430px]">
          <div className="bg-[#001b4f] p-8 text-white md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Panel interno
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Municipalidad de El Tabo
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Acceso para administración, prensa y marketing. Cada cuenta ve
              solo las herramientas autorizadas para su rol.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/85">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                Admin: gestión general del panel.
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                Prensa: carga y publicación de noticias.
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                Marketing: análisis de tráfico y comportamiento.
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <h2 className="text-3xl font-black text-[#00174a]">
              Iniciar sesión
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Ingresa con tu correo institucional para continuar.
            </p>

            <label className="mt-8 block text-sm font-black text-[#00174a]">
              Correo
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none ring-blue-200 transition focus:ring-4"
                placeholder="usuario@eltabo.cl"
              />
            </label>

            <label className="mt-5 block text-sm font-black text-[#00174a]">
              Contraseña
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 font-normal outline-none ring-blue-200 transition focus:ring-4"
                placeholder="••••••••"
              />
            </label>

            {error && (
              <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-7 h-12 w-full rounded-2xl bg-blue-700 px-6 font-black text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? "Ingresando..." : "Entrar al panel"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
