import Nav from "@/features/NavBar/Nav";
import { Section } from "../../components/Content/Section";
import { Button } from "../../components/Buttons";

export default function Hero() {
  const text = [
    { title: "Demandas Familiaristas" },
    { title: "Divórcio" },
    { title: "Alimentos" },
  ];

  return (
    <header
      id="hero"
      className="w-full h-[80vh] bg-cover shadow-2xl bg-fixed"
      style={{
        backgroundImage: "url('/images/backgroundHome.jpg')",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <Section className="h-3/4 flex flex-col">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mt-14 text-white">
          Excelência em
          <div className="overflow-hidden h-10 sm:h-12 md:h-16 lg:h-20">
            {text.map((item, index) => (
              <span
                key={index}
                className="block h-full animate-[spinwords_10s_infinite] text-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {item.title}
              </span>
            ))}
          </div>
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center place-items-stretch flex-wrap w-full mt-auto md:mt-14 gap-6">
          <Button.Link
            href=""
            className="h-16 items-center justify-center flex w-full md:w-fit"
          >
            Entre em contato
          </Button.Link>
          <Button.Icon
            href="https://www.instagram.com/daleterocha.adv/"
            className="w-full h-16 rounded-lg md:rounded-full md:w-fit flex justify-center items-center"
            svg="w-8 h-8 fill-white stroke-0"
            text="Instagram"
            isBlank
          >
            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
          </Button.Icon>
          <Button.Icon
            href="https://wa.me/5561999361491?text=Olá%20gostaria%20de%20mais%20informações!"
            className="w-full h-16 rounded-lg md:rounded-full md:w-fit flex justify-center items-center"
            svg="w-8 h-8 fill-white stroke-0"
            text="Whatszapp"
            isBlank
          >
            <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
          </Button.Icon>
        </div>
      </Section>
    </header>
  );
}
