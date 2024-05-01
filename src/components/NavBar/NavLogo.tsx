import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface NavLogoProps {
  src: string | StaticImport;
  alt: string;
}

export function NavLogo({ src, alt }: NavLogoProps) {
  return <Image src={src} alt={alt} objectFit="cover"></Image>;
}
