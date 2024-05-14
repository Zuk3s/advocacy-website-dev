import Title from "@/components/Content/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description: "Teste",
};

export default function About() {
  return (
    <>
      <Title>Sobre Mim</Title>
      <div className="flex flex-col md:flex-row gap-8 flex-1 w-full justify-center items-stretch mt-14">
        <div className="w-4/5 md:w-2/5 mx-auto">
          <Image
            src={"/images/ImagemAdvogada.jpg"}
            alt="Imagem Advogada"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-4/5 md:w-2/4 text-lg md:text-xl text-justify space-y-4 mx-auto tracking-wide">
          <p className="first-letter:text-5xl first-letter:font-light first-letter:float-start">
            A Dra. Dálete Rocha é Consultora Jurídica e Advogada atuante na área
            de Família e Sucessões. Pós-graduada em Direito de Família e
            Sucessões, e Direito Constitucional.
          </p>
          <p>
            Sua atuação se destaca pela especialização na seara familiarista e
            sucessória, priorizando a solução consensual dos conflitos, atuando
            de maneira mais rápida e branda.
          </p>
          <p>
            Além disso, sua atuação é nacional, com demandas em vários estados
            do Brasil.
          </p>
        </div>
      </div>
    </>
  );
}
