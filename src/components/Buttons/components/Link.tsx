import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function link({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={twMerge(
        "bg-slate-900 hover:bg-slate-800 text-zinc-50 rounded-lg px-8 py-4",
        className
      )}
    >
      {children}
    </Link>
  );
}
