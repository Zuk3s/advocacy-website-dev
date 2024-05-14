import Back from "@/components/Buttons/components/Back";
import ArtigosType from "@/types/ArtigoType";
import Image from "next/image";

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
    <>
      <Back href="/artigos" />
      {artigo ? (
        <main>
          <Image
            src={artigo?.imagem || "/image/backgroundHome.jpg"}
            alt="Artigo Imagem"
            width={1000}
            height={1000}
            className="h-[35vh] w-screen -z-10 top-[5.9rem] md:top-[6.4rem] left-0 text-white bg-gray-700 bg-gradient-to-b from-gray-600 to-slate-700 absolute object-cover object-center text-center brightness-75"
          />
          <h1 className="mt-[20vh] mb-28 text-zinc-50 text-center text-3xl md:text-5xl font-medium">
            {artigo.titulo}
          </h1>
          <div>
            <p className="text-base text-end mb-20">
              {artigo.data_atualizacao === artigo.data_criacao
                ? `Postado em: ${new Date(
                    artigo.data_criacao
                  ).toLocaleDateString()}`
                : `Post atualizado em: ${new Date(
                    artigo.data_atualizacao
                  ).toLocaleDateString()}`}
            </p>
          </div>
          <p className="first-letter:text-5xl first-letter:float-start text-xl">
            {artigo.conteudo}
          </p>
        </main>
      ) : (
        <h1>Carregando</h1>
      )}
    </>
  );
}
