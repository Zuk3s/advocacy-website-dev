import { Card } from "@/components/Card/index";
import Title from "@/components/Content/Title";
import Cards from "@/components/Card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Teste",
};

export default function Artigos() {
  return (
    <>
      <Title>Artigos</Title>
      <Card.Group>
        <Cards />
      </Card.Group>
    </>
  );
}
