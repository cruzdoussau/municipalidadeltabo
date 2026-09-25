import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias | Municipalidad de El Tabo",
  description: "Noticias, actividades y anuncios de la Municipalidad de El Tabo.",
};

export default function NoticiasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
