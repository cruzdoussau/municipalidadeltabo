import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartelera de eventos | Municipalidad de El Tabo",
  description: "Actividades y eventos de la comuna de El Tabo.",
};

export default function EventosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
