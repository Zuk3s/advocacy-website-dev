import Nav from "@/components/NavBar/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos",
  description: "Teste",
};

export default function Contact() {
  return (
    <main>
      <Nav />
      <div className="container">
        <h1>Contatos</h1>
      </div>
    </main>
  );
}
