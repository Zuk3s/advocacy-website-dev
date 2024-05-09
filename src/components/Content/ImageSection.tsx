import Nav from "@/components/NavBar/Nav";
import { Section } from "./Section";

export function ImageSection() {
  const text = [
    { title: "" },
    { title: "Divórcio" },
    { title: "Pensão alimentícia" },
    { title: "Contrato de namoro" },
    { title: "Contrato de união estável" },
    { title: "Alteração de regime de bens" },
    { title: "Socioafetividade" },
    { title: "Inventário" },
    { title: "Testamento" },
  ];
  return (
    <header
      className="w-full h-[80vh] bg-cover shadow-2xl bg-fixed"
      style={{
        backgroundImage: "url('/images/backgroundHome.jpg')",
        backgroundPosition: "center",
      }}
    >
      <Nav notBackground />
      <Section>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mt-14 text-white">
          Excelência em
          <div className="overflow-hidden h-10 sm:h-12 md:h-16 lg:h-20">
            {text.map((item, index) => (
              <span
                key={index}
                className="block h-full animate-[spinwords_20s_infinite] text-nowrap text-2xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {item.title}
              </span>
            ))}
          </div>
        </h1>
      </Section>
    </header>
  );
}
