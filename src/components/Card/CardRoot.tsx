import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
  href: string;
}

export function CardRoot({ children, href }: CardRootProps) {
  return (
    <a
      href={href}
      className="flex md:flex-col bg-creme rounded-md grow min-w-72 md:max-w-sm md:hover:scale-105 transition-transform ease-in-out"
    >
      {children}
    </a>
  );
}
