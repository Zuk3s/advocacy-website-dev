import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavRootProps {
  children: ReactNode;
  className?: string;
}

export function NavRoot({ children, ...rest }: NavRootProps) {
  return (
    <section
      {...rest}
      className={twMerge(
        "w-full py-6 px-4",
        rest.className
      )}
    >
      {children}
    </section>
  );
}
