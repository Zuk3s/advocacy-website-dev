import Image, { StaticImageData } from "next/image";
import Img from "../../../../public/Default-CardImg.png";

interface CardImgProps {
  src: string | StaticImageData;
}

export function CardImg({ src }: CardImgProps) {
  return (
    <div className="shrink-0">
      <Image
        src={src || Img}
        alt=""
        className="object-cover object-center md:h-40 md:w-full h-full w-40"
        width={800}
        height={600}
        priority
      />
    </div>
  );
}
