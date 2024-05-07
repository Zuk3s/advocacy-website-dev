import Image from "next/image";

export function Carroussel() {
  const data = [
    { img: "/images/imagem1.jpg" },
    { img: "/images/imagem2.jpg" },
    { img: "/images/imagem3.jpg" },
  ];
  return (
    <section className="w-full snap-x snap-mandatory overflow-x-auto flex delay-1000">
      {data.map((item, index) => (
        <div className="snap-always snap-start shrink-0 w-full" key={index}>
          <Image src={item.img} alt="" className="w-full h-svh md:h-[40rem] object-cover" width={10000} height={10000}/>
        </div>
      ))}
    </section>
  );
}
