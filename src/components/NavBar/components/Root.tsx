import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavRootProps {
  children: ReactNode;
  className?: string;
}

export function NavRoot({ children, ...rest }: NavRootProps) {
  return (
    <header
      {...rest}
      className={twMerge(
        "bg-rosa-400 w-full py-4 sm:px-16 px-4 shadow-lg flex row-span-3 items-center content-stretch",
        rest.className
      )}
    >
      {children}
    </header>
  );
}
