import { ImageSection } from "@/components/Content/ImageSection";
import { Section } from "@/components/Content/Section";
import Title from "@/components/Content/Title";
import Image from "next/image";
import Icon from "@/components/Buttons/components/Icon";

export default function Home() {
  const CardsAtuação = [
    { title: "Divórcio" },
    { title: "Guarda e regulamentação de visitas" },
    { title: "Pensão alimentícia" },
    { title: "Reconhecimento e dissolução de união estável" },
    { title: "Contrato de namoro" },
    { title: "Contrato de união estável" },
    { title: "Alteração de regime de bens" },
    { title: "Autorização de viagem para o exterior" },
    { title: "Socioafetividade" },
    { title: "Inventário" },
    { title: "Testamento" },
  ];

  return (
    <>
      <ImageSection />
      <Section className="h-[20vh] flex justify-center items-center">
        <Icon href="#atuações" svg="stroke-white motion-safe:animate-bounce">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </Icon>
      </Section>
      <Section id="atuações" className="mt-[20vh] min-h-[80vh]" notMargin>
        <Title>Áreas de atuação</Title>
        <Section
          className="flex flex-row gap-6 p-0 overflow-x-scroll snap-x snap-mandatory py-8"
          notMargin
        >
          {CardsAtuação.map((item, index) => (
            <div
              className="flex flex-col gap-3 min-w-80 h-auto snap-center snap-always"
              key={index}
            >
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src={"/images/backgroundHome.jpg"}
                  alt="Imagem área"
                  width={500}
                  height={600}
                  className="h-96 w-full shadow-lg brightness-90 object-cover object-center transition-transform duration-300 md:hover:scale-110"
                />
              </div>
              <p className="text-center capitalize tracking-wide text-pretty mx-4">
                {item.title}
              </p>
            </div>
          ))}
        </Section>
      </Section>
    </>
  );
}
