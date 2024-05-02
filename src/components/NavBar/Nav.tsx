import { NavBar } from "./index";
import Logo from "../../../public/images/Logo.png";

export default function Nav() {
  return (
    <NavBar.Root>
      <NavBar.Logo src={Logo} alt="Logo" />
      <NavBar.Group className="justify-end w-full gap-x-3">
        <NavBar.Link href="/">Início</NavBar.Link>
        <NavBar.Link href="/about">Sobre</NavBar.Link>
        <NavBar.Link href="/contact">Contato</NavBar.Link>
        <NavBar.Link href="/">Artigos</NavBar.Link>
      </NavBar.Group>
    </NavBar.Root>
  );
}
