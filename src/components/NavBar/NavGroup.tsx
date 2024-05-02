import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavGroupProps {
  children: ReactNode;
  className?: string;
}

export function NavGroup({ children, ...rest }: NavGroupProps) {
  return <div className={twMerge("flex", rest.className)}>{children}</div>;
}
