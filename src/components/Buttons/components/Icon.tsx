import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Icon({
  children,
  className,
  href,
  text,
  isBlank = false,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  text?: string;
  isBlank?: boolean;
}) {
  return (
    <Link
      href={href}
      target={isBlank ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={twMerge(
        "p-4 bg-slate-900 hover:bg-slate-800 rounded-full space-x-2",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={"w-8 h-8 fill-white stroke-0"}
      >
        {children}
      </svg>
      {text && <p className="md:sr-only text-white">{text}</p>}
    </Link>
  );
}
