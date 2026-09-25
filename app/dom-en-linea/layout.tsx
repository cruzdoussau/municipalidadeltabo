import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOM en Línea | Municipalidad de El Tabo",
  description: "Orientación y acceso a trámites de la Dirección de Obras Municipales.",
};

export default function DomLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
