import { redirect } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LogoutButton from "@/components/admin/LogoutButton";
import { canViewMarketing, getCurrentUser } from "@/lib/auth";
import { getAnalyticsSummary } from "@/lib/analytics-store";

function Bar({ value, color = "bg-blue-700" }: { value: number; color?: string }) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default async function MarketingPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (!canViewMarketing(user)) {
    redirect("/admin");
  }

  const analytics = await getAnalyticsSummary();
  const maxTraffic = Math.max(...analytics.traffic.map((item) => item.value));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f4f8fc] px-6 py-12 text-slate-800">
        <section className="mx-auto max-w-[1180px]">
          <div className="rounded-[30px] bg-[#001b4f] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Marketing municipal
            </p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h1 className="text-4xl font-black md:text-5xl">
                Dashboard de métricas
              </h1>
              <LogoutButton />
            </div>
            <p className="mt-3 max-w-3xl leading-relaxed text-white/80">
              Análisis de tráfico, comportamiento del usuario y métricas
              generales del sitio web.
            </p>
            <p className="mt-4 text-sm text-white/70">{analytics.range}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {analytics.totals.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-4xl font-black text-[#00174a]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-black text-emerald-600">
                  {item.change}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black text-[#00174a]">
                Páginas con mayor tráfico
              </h2>
              <div className="mt-6 space-y-5">
                {analytics.traffic.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
                      <span>{item.label}</span>
                      <span>{item.value.toLocaleString("es-CL")} visitas</span>
                    </div>
                    <Bar value={(item.value / maxTraffic) * 100} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black text-[#00174a]">
                Dispositivos
              </h2>
              <div className="mt-6 space-y-5">
                {analytics.devices.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <Bar value={item.value} color="bg-cyan-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black text-[#00174a]">
                Fuentes de tráfico
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {analytics.sources.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-3xl font-black text-blue-700">
                      {item.value}%
                    </p>
                    <p className="mt-2 text-sm font-black text-slate-700">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black text-[#00174a]">
                Comportamiento del usuario
              </h2>
              <div className="mt-6 space-y-5">
                {analytics.behavior.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <Bar value={item.value} color="bg-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
