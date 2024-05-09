import { Section } from "@/components/Content/Section";
import Nav from "@/components/NavBar/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Principal",
  description: "Teste",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <Section className="py-8">{children}</Section>
    </>
  );
}
