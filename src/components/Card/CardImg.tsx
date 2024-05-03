import Image, { StaticImageData } from "next/image";

interface CardImgProps {
  src: string | StaticImageData;
}

export function CardImg({ src, ...rest }: CardImgProps) {
  return (
    <div className="shrink-0">
      <Image
        src={src}
        alt="Imagem Artigo"
        className="object-cover object-center md:h-40 md:w-full h-full w-40"
      />
    </div>
  );
}
