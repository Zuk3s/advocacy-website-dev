import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advogada Dálete",
  description: `Bem-vindo(a)! Somos um escritório de advocacia comprometido em oferecer soluções jurídicas personalizadas e eficazes para atender às suas necessidades. 
  Nosso objetivo é não apenas conquistar sua confiança, mas construir uma parceria sólida e duradoura, baseada em respeito e comprometimento.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={twMerge(inter.className, "bg-zinc-200 min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
