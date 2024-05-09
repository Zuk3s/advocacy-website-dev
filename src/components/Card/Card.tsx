import { Card } from "@/components/Card/index";
import ArtigosType from "@/types/ArtigoType";

const getArtigos = async () => {
  const data = await fetch(`${process.env.URL_API}artigos/`);
  return await data.json();
};
export default async function Cards() {
  const data: ArtigosType[] = await getArtigos();

  return (
    <Card.Group>
      {data.map((item) => (
        <Card.Root key={item._id} href={`/artigos/${item._id}`}>
          <Card.Img src={item.imagem} />
          <Card.GroupText>
            <Card.Title as="h1">{item.titulo}</Card.Title>
            <Card.Content>{item.conteudo}</Card.Content>
            <Card.Footer>
              {new Date(item.data_criacao).toLocaleDateString()}
            </Card.Footer>
          </Card.GroupText>
        </Card.Root>
      ))}
    </Card.Group>
  );
}
