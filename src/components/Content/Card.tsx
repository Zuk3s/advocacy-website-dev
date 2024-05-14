import ArtigoType from "@/types/ArtigoType";
import Image from "next/image";
import Img from "../../../public/Default-CardImg.png";
import Link from "next/link";

const getArtigos = async () => {
  const data = await fetch(`${process.env.URL_API}artigos/`);
  return await data.json();
};

export default async function CardTest() {
  const data: ArtigoType[] = await getArtigos();

  return (
    <section className="flex flex-wrap flex-col md:flex-row gap-y-14 gap-x-8 pt-10">
      {data.map((item, index) =>
        item ? (
          <div
            className="relative flex md:min-w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex-[1_1_30%]"
            key={item._id}
          >
            <Image
              className="mx-4 -mt-6 h-52 w-auto rounded-xl bg-gray-700 bg-clip-border text-white shadow-lg shadow-gray-900/40 bg-gradient-to-r from-gray-700 to-gray-900 object-cover"
              src={item.imagem || Img}
              alt="Imagem Artigo"
            />
            <main className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.titulo}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased line-clamp-3">
                {item.conteudo}
              </p>
            </main>
            <footer className="p-6 pt-0 mt-auto flex justify-between items-center">
              <Link
                href={`/artigos/${item._id}`}
                className="select-none rounded-lg bg-gray-700 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-700/20 transition-all hover:shadow-lg hover:shadow-gray-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Leia Mais
              </Link>
              <span className="text-sm font-sans">
                Postado: {new Date(item.data_atualizacao).toLocaleDateString()}
              </span>
            </footer>
          </div>
        ) : (
          <div
            key={index}
            className="bg-neutral-300 h-64 animate-pulse p-4 gap-4 relative flex md:min-w-96 flex-col rounded-xl bg-clip-border shadow-md flex-[1_1_30%]"
          >
            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        )
      )}
    </section>
  );
}
