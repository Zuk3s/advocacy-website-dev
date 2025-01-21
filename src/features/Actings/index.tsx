import { Section } from "@/components/Content/Section";
import Image from "next/image";
import Title from "@/components/Content/Title";

export default function () {
  const CardsAtuação = [
    {
      title: "Divórcio",
      image: "/images/divórcio.png",
    },
    {
      title: "Guarda e regulamentação de visitas",
      image: "/images/guarda.jpeg",
    },
    {
      title: "Pensão alimentícia",
      image: "/images/pensão.jpg",
    },
    {
      title: "Reconhecimento e dissolução de união estável",
      image: "/images/reconhecimentoEdissolução.jpeg",
    },
    {
      title: "Contrato de namoro e união estável",
      image: "/images/namoro.jpeg",
    },
    {
      title: "Alteração de regime de bens",
      image: "/images/regime.png",
    },
    {
      title: "Autorização de viagem para o exterior",
      image: "/images/AutorizaçãoViagem.jpeg",
    },
    { title: "Socioafetividade", image: "/images/Socioafetividade.jpg" },
    { title: "Testamento e Inventário", image: "/images/testamento.jpeg" },
  ];

  return (
    <Section id="actings" className="py-16" notMargin>
      <Title>Áreas de atuação</Title>

      <Section className="flex flex-row gap-6 p-0 overflow-x-scroll snap-x snap-mandatory py-8">
        {CardsAtuação.map((item, index) => (
          <div
            className="flex flex-col gap-3 min-w-80 h-auto snap-center snap-always"
            key={index}
          >
            <div className="relative overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt="Área de atuação"
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
  );
}
