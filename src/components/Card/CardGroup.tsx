import { ReactNode } from "react";

interface CardGroupProps {
  children: ReactNode;
}

export function CardGroup({ children }: CardGroupProps) {
  return (
    <section className="flex flex-wrap flex-col md:flex-row gap-6">
      {children}
    </section>
  );
}
