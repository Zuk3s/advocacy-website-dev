import Link from "next/link";
import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
  href: string;
}

export function CardRoot({ children, href }: CardRootProps) {
  return (
    <Link
      href={href}
      className="bg-white bg-opacity-45 border border-rosa-200 shadow-md rounded-md flex md:flex-col flex-[1_1_40%] min-w-80 md:hover:scale-105 transition-transform ease-in-out"
    >
      {children}
    </Link>
  );
}
