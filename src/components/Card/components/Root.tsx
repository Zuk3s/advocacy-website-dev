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
      className="bg-creme rounded-md flex md:flex-col grow flex-1 min-w-80 md:max-w-sm md:hover:scale-105 transition-transform ease-in-out"
    >
      {children}
    </Link>
  );
}
