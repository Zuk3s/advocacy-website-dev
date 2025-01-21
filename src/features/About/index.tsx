import { Section } from "@/components/Content/Section";
import Title from "@/components/Content/Title";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-repeat bg-slate-900 bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.95)), url('Logo.png')`,
        backgroundSize: "8rem",
      }}
    >
      <Section className="py-16">
        <Title className="text-white">Sobre o escritório</Title>
        <div className="flex flex-col lg:flex-row gap-3 flex-1 w-full justify-center items-stretch mt-14">
          <div className="w-full lg:w-2/5 mx-auto">
            <Image
              src={"/images/IMG_6261.JPG"}
              alt="Imagem Advogada"
              className="object-cover w-full h-full max-h-[40vh] sm:max-h-[65vh] lg:max-h-full bg-center rounded-t-lg lg:rounded-none lg:rounded-l-lg"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full lg:w-2/3 text-lg md:text-xl text-justify space-y-4 mx-auto tracking-wide bg-slate-50 p-9 rounded-b-lg lg:rounded-none lg:rounded-r-lg">
            <p>
              O escritório Dálete Rocha Advocacia é especializado em Direito de
              Família e Sucessões, com atuação destacada na resolução de
              conflitos familiares de forma humanizada e estratégica. Com sólida
              base acadêmica e experiência prática, o escritório é referência no
              atendimento a demandas que exigem sensibilidade, profissionalismo
              e foco na proteção dos direitos e interesses de seus clientes.
            </p>
            <p>
              Nossa equipe é liderada pela Dra. Dálete Rocha, advogada
              pós-graduada em Direito Constitucional e em Direito de Família e
              Sucessões, e atualmente cursando pós-graduação em Processo Civil,
              com especialização em Divórcios.
            </p>
            <p>
              Cada caso é tratado de forma personalizada, garantindo soluções
              jurídicas eficazes e alinhadas às necessidades individuais de cada
              cliente.
            </p>
            <p>
              Com atendimento online em todo o Brasil, oferecemos suporte
              jurídico ágil e seguro, proporcionando tranquilidade em momentos
              delicados da vida familiar. Nosso compromisso é oferecer
              excelência, ética e empatia em cada etapa do processo.
            </p>
          </div>
        </div>
      </Section>
    </section>
  );
}
