import Link from "next/link";
import { ReactNode } from "react";

export function NavLink({
  children,
  href,
  size = "small",
}: {
  children: ReactNode;
  href: string;
  size?: string;
}) {
  return (
    <Link
      href={href}
      className="text-base text-white font-medium px-5 py-2 hover:underline hover:underline-offset-4 decoration-2 decoration-dashed antialiased"
    >
      {children}
    </Link>
  );
}
