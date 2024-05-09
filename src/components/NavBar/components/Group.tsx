import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavGroupProps {
  children: ReactNode;
  className?: string;
  notBackground?: boolean;
  Collapse?: boolean;
}

export function NavGroup({
  children,
  className,
  Collapse,
  notBackground,
}: NavGroupProps) {
  return (
    <nav
      className={twMerge(
        "flex flex-col md:flex-row items-center md:justify-end w-full space-y-3 md:space-y-0 md:space-x-3 md:z-auto absolute md:static py-5 md:py-0 left-0 top-12 md:opacity-100 transition-all",
        notBackground ? "bg-black/70 md:bg-transparent" : "bg-gray-900",
        Collapse ? "z-10 top-24 opacity-100" : "opacity-0",
        Collapse && notBackground ? "pt-24 top-0" : "",
        className
      )}
    >
      {children}
    </nav>
  );
}
