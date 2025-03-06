import Nav from "@/features/NavBar/Nav";
import { Section } from "../../components/Content/Section";
import { IconButton } from "@/components/IconButton/IconButton";
import { InstagramIcon } from "lucide-react";
import LinkButton from "@/components/Link/Link";

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
        backgroundPosition: "end",
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
          <LinkButton
            href="#contat"
            className="h-16 items-center justify-center flex w-full md:w-fit"
          >
            Entre em contato
          </LinkButton>
          <IconButton
            href="https://www.instagram.com/daleterocha.adv/"
            className="w-full h-16 rounded-lg md:rounded-full md:w-16 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="size-8" color="white" />
            <p className="md:sr-only text-white">Instagram</p>
          </IconButton>
          <IconButton
            href="https://www.instagram.com/daleterocha.adv/"
            className="w-full h-16 rounded-lg md:rounded-full md:w-16 flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className={"w-8 h-8 fill-white stroke-0"}
            >
              <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
            </svg>
            <p className="md:sr-only text-white">Whatsapp</p>
          </IconButton>
        </div>
      </Section>
    </header>
  );
}
