import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentProps<"a"> {
  className?: string;
  href: string;
}

export default function LinkButton({
  className, href, ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "bg-slate-900 hover:bg-slate-800 text-zinc-50 rounded-lg px-8 py-4",
        className
      )}
      {...props}
    />
  );
}
