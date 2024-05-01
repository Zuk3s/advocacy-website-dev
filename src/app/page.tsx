import { NavBar } from "../components/NavBar/index";

export default function Home() {
  return (
    <main>
      <NavBar.Root>
        <NavBar.Link href="/teste" size="lg">
          Link teste
        </NavBar.Link>
      </NavBar.Root>
    </main>
  );
}
