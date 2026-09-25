import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licencias de conducir | Municipalidad de El Tabo",
  description: "Requisitos y orientación para licencias de conducir en El Tabo.",
};

export default function LicenciasLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
