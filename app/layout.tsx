import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import AccessibilityToolbar from "@/components/accessibility/AccessibilityToolbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Municipalidad de El Tabo",
  description:
    "Sitio oficial de la Municipalidad de El Tabo: información municipal, direcciones, programas, trámites y servicios para la comunidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
