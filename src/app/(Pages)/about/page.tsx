import Title from "@/components/Content/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description: "Teste",
};

export default function About() {
  return <Title>Sobre Mim</Title>;
}
