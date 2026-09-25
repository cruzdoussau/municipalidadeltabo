import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vecino Digital | Municipalidad de El Tabo",
  description: "Consulta y acceso a servicios municipales digitales de El Tabo.",
};

export default function VecinoDigitalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
