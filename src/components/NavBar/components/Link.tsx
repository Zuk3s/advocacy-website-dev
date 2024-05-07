"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function NavLink({
  children,
  href,
  size = "small",
}: {
  children: ReactNode;
  href: string;
  size?: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={twMerge(
        "text-base text-white font-medium px-5 py-2 decoration-2 decoration-dashed antialiased",
        `${
          pathname === href
            ? "underline underline-offset-4"
            : "hover:underline hover:underline-offset-4"
        }`
      )}
    >
      {children}
    </Link>
  );
}
