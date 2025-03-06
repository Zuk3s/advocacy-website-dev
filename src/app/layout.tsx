import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://advocacy-website-dev.vercel.app/"),
  title: "Dálete Rocha - Advocacia",
  description: `Bem-vindo(a)! Somos um escritório de advocacia comprometido em oferecer soluções jurídicas personalizadas e eficazes para atender às suas necessidades. 
  Nosso objetivo é não apenas conquistar sua confiança, mas construir uma parceria sólida e duradoura, baseada em respeito e comprometimento.`,
  keywords: ["advogada", "melhores advogados", "advogado", "advocacia"],
  openGraph: {
    title: "Dálete Rocha - Advocacia",
    description: `Somos um escritório de advocacia comprometido em oferecer soluções jurídicas personalizadas e eficazes para atender às suas necessidades. 
    Nosso objetivo é não apenas conquistar sua confiança, mas construir uma parceria sólida e duradoura, baseada em respeito e comprometimento.`,
    url: "https://advocacy-website-dev.vercel.app/",
    siteName: "Escritório de Advocacia - Dálete Rocha",
    images: [
      {
        url: "/public/self.jpg",
        height: 1200,
        width: 630,
        alt: "Advogados especialistas",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: "https://advocacy-website-dev.vercel.app/",
  },
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
