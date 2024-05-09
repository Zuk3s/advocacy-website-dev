import Link from "next/link";

export default function Back({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute p-1 border border-rosa-700 rounded-md bg-creme opacity-75 hover:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 h-8 stroke-rosa-700"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </Link>
  );
}
