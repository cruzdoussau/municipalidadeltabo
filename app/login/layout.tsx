import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceso interno | Municipalidad de El Tabo",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
