"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function NavLink() {
  const pathname = usePathname();
  return (
    <>
      {[
        ["Início", "/"],
        ["Artigos", "/artigos/"],
        ["Sobre", "/about/"],
        ["Contato", "/contact/"],
      ].map(([title, url], index) => (
        <Link
          key={index}
          href={url}
          className={twMerge(
            "text-xl md:text-base text-white font-medium px-5 py-2 decoration-2 decoration-dashed antialiased",
            `${
              pathname === url
                ? "underline underline-offset-4"
                : "hover:underline hover:underline-offset-4"
            }`
          )}
        >
          {title}
        </Link>
      ))}
    </>
  );
}
