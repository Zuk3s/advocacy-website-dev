import Hero from "@/features/Hero";
import About from "@/features/About";
import Actings from "@/features/Actings";
import Footer from "@/features/Footer";
import Contact from "@/features/Contat";
import { Section } from "@/components/Content/Section";
import { IconButton } from "@/components/IconButton/IconButton";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="h-[20vh] flex justify-center items-center">
        <IconButton href="#actings" className="motion-reduce:animate-bounce">
          <ArrowDown color="white" />
        </IconButton>
      </Section>

      <Actings />

      <About />

      <Contact />

      <Footer />
    </>
  );
}
