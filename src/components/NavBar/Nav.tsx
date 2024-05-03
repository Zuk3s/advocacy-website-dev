import { Nav } from "./index";
import Logo from "../../../public/images/logo-b.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <Nav.Root>
      <Image src={Logo} alt="Logo" className="sm:w-16 w-14 object-cover" />
      <Nav.Group className="justify-end w-full gap-x-3">
        <Nav.Link href="/">Início</Nav.Link>
        <Nav.Link href="/artigos">Artigos</Nav.Link>
        <Nav.Link href="/about">Sobre</Nav.Link>
        <Nav.Link href="/contact">Contato</Nav.Link>
      </Nav.Group>
    </Nav.Root>
  );
}
