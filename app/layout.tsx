import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AccessibilityToolbar from "@/components/accessibility/AccessibilityToolbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
