import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavRootProps {
  children: ReactNode;
}

export function NavRoot({ children, ...rest }: NavRootProps) {
  return (
    <nav
      {...rest}
      className={twMerge(
        "bg-rosa-400 w-full p-5"
      )}
    >
      {children}
    </nav>
  );
}
