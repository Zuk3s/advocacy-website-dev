import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({children, href, size}: {
    children: ReactNode,
    href: string,
    size: string
}) {
    return (
        <Link href={href} className="font-bold text-lg p-2 hover:text-gray-900">
            {children}
        </Link>
    );
}
