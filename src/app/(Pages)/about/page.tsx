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
      <Title>Sobre o escritório</Title>
      <div className="flex flex-col md:flex-row gap-8 flex-1 w-full justify-center items-stretch mt-14">
        <div className="w-4/5 md:w-2/5 mx-auto">
          <Image
            src={"/images/IMG_6261.JPG"}
            alt="Imagem Advogada"
            className="object-cover w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-4/5 md:w-2/4 text-lg md:text-xl text-justify space-y-4 mx-auto tracking-wide ">
          <p>
          O escritório Dálete Rocha Advocacia é especializado em Direito de Família e Sucessões, com atuação destacada na resolução de conflitos familiares de forma humanizada e estratégica. Com sólida base acadêmica e experiência prática, o escritório é referência no atendimento a demandas que exigem sensibilidade, profissionalismo e foco na proteção dos direitos e interesses de seus clientes.
          </p>
          <p>
          Nossa equipe é liderada pela Dra. Dálete Rocha, advogada pós-graduada em Direito Constitucional e em Direito de Família e Sucessões, e atualmente cursando pós-graduação em Processo Civil, com especialização em Divórcios.</p>
          <p>
          Cada caso é tratado de forma personalizada, garantindo soluções jurídicas eficazes e alinhadas às necessidades individuais de cada cliente.
          </p>
          <p>
            Com atendimento online em todo o Brasil, oferecemos suporte jurídico ágil e seguro, proporcionando tranquilidade em momentos delicados da vida familiar. Nosso compromisso é oferecer excelência, ética e empatia em cada etapa do processo.
          </p>
        </div>
      </div>
    </>
  );
}
