import Hero from "@/features/Hero";
import About from "@/features/About";
import Actings from "@/features/Actings";
import DropButton from "@/components/DropButton";
import Footer from "@/features/Footer";
import Contact from "@/features/Contat";

export default function Home() {
  return (
    <>
      <Hero />

      <DropButton />

      <Actings />

      <About />

      <Contact />

      <Footer />
    </>
  );
}
