import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardGroupProps {
  children: ReactNode;
  className?: string;
}

export function CardGroup({ children, className }: CardGroupProps) {
  return (
    <section
      className={twMerge(
        "flex flex-wrap flex-col md:flex-row gap-6",
        className
      )}
    >
      {children}
    </section>
  );
}
