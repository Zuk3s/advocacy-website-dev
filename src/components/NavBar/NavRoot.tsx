import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavRootProps {
  children: ReactNode;
  className?: string;
}

export function NavRoot({ children, ...rest }: NavRootProps) {
  return (
    <nav
      {...rest}
      className={twMerge(
        "bg-rosa-200 w-full py-4 sm:px-16 px-1 shadow-lg flex row-span-3 items-center",
        rest.className
      )}
    >
      {children}
    </nav>
  );
}
