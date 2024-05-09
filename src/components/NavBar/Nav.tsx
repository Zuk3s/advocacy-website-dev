import { Nav } from "./index";
import Logo from "../../../public/logo-b.png";
import Image from "next/image";
import { Section } from "../Content/Section";

export default function NavBar({ notBackground }: { notBackground?: boolean }) {
  return (
    <Nav.Root
      className={!notBackground ? "bg-gray-900 shadow-lg" : "bg-transparent"}
    >
      <Section className="sm:flex sm:items-center overflow-hidden">
        <Image src={Logo} alt="Logo" className="sm:w-16 w-14 object-cover" />
        <Nav.CollapseButton notBackground={notBackground}>
          <Nav.Link />
        </Nav.CollapseButton>
      </Section>
    </Nav.Root>
  );
}
