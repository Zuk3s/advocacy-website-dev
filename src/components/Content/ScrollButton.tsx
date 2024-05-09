import Link from "next/link";

export default function ScrollButton({ href }: { href: string }) {
  return (
    <Link href={href} className="p-4 bg-gray-900 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-white motion-safe:animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </Link>
  );
}
