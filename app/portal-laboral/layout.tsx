import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal laboral | Municipalidad de El Tabo",
  description: "Ofertas laborales y postulaciones municipales de El Tabo.",
};

export default function PortalLaboralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
