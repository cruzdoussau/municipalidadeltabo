import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios sociales | Municipalidad de El Tabo",
  description: "Programas y beneficios sociales disponibles en la comuna de El Tabo.",
};

export default function BeneficiosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
