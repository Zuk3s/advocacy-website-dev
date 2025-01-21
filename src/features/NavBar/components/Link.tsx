import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function NavLink({
  isFullWidth,
  onClick,
}: {
  isFullWidth?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      {[
        ["Início", "#"],
        ["Atuações", "#actings"],
        ["Sobre", "#about"],
        ["Contato", "#contat"],
      ].map(([title, url], index) => (
        <Link
          key={index}
          href={url}
          onClick={onClick}
          className={twMerge(
            "text-xl md:text-base text-white font-medium px-5 py-3 decoration-2 decoration-dashed antialiased rounded-md hover:bg-gray-300/25",
            isFullWidth && "w-full"
          )}
        >
          {title}
        </Link>
      ))}
    </>
  );
}
