import Nav from "@/components/NavBar/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description: "Teste",
};

export default function About() {
  return (
    <main>
      <Nav />
      <h1>Sobre Mim</h1>
    </main>
  );
}
