import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talleres comunales | Municipalidad de El Tabo",
  description: "Talleres y actividades disponibles para la comunidad de El Tabo.",
};

export default function TalleresLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
