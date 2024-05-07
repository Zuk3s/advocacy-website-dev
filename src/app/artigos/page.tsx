import { Card } from "@/components/Card/index";
import Title from "@/components/Content/Title";
import Cards from "@/components/Card/Card";
import { Metadata } from "next";
import { Section } from "@/components/Content/Section";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Teste",
};

export default function Artigos() {
  return (
    <Section>
      <Title>Artigos</Title>
      <Card.Group className="items-center">
        <Cards />
      </Card.Group>
    </Section>
  );
}
