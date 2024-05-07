import { Section } from "@/components/Content/Section";
import Title from "@/components/Content/Title";
import ArtigosType from "@/types/ArtigoType";

const generateStaticParams = async () => {
  const res = await fetch(`${process.env.URL_API}artigos/`);
  const data: ArtigosType[] = await res.json();
  const params = data.map((artigo) => {
    return {
      id: `${artigo._id}`,
    };
  });
  return { params, fallback: false };
};

const getArtigo = async (id: string) => {
  const data = await fetch(`${process.env.URL_API}artigos/${id}`);
  return await data.json();
};

export default async function Artigo({ params }: { params: { id: string } }) {
  const artigo: ArtigosType = await getArtigo(params.id);
  return (
    <Section>
      {artigo ? (
        <>
          <Title>{artigo.titulo}</Title>
          <p>{artigo.conteudo}</p>
          <p>
            Data de criação:{" "}
            {new Date(artigo.data_criacao).toLocaleDateString()}
          </p>
        </>
      ) : (
        <h1>Carregando</h1>
      )}
    </Section>
  );
}
