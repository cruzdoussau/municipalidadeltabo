import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trámites y servicios | Municipalidad de El Tabo",
  description: "Información y acceso a trámites y servicios municipales de El Tabo.",
};

export default function TramitesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
