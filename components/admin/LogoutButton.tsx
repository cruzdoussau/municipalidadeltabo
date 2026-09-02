"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="rounded-full bg-white px-5 py-2.5 text-sm font-black text-[#00174a] shadow-sm transition hover:bg-blue-50"
    >
      Cerrar sesión
    </button>
  );
}
