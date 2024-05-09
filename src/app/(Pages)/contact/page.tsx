import { Section } from "@/components/Content/Section";
import Title from "@/components/Content/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos",
  description: "Teste",
};

export default function Contact() {
  return (
    <Section>
      <Title>Contatos</Title>
    </Section>
  );
}
