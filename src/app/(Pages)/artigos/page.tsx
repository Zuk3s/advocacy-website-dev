import { Metadata } from "next";
import CardTest from "@/components/Content/Card";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Teste",
};

export default function Artigos() {
  return (
    <>
      <CardTest />
    </>
  );
}
