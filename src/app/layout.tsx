import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const titleFont = Montserrat({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const bodyFont = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SemeiaCOde | Semeando talentos pela programacao",
  description:
    "Plataforma institucional com nova identidade visual SemeiaCOde em tons de azul, verde e amarelo.",
  icons: {
    icon: "/LogoSemeiaCode.png",
    shortcut: "/LogoSemeiaCode.png",
    apple: "/LogoSemeiaCode.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
