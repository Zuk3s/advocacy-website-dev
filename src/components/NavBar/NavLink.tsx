import Link from "next/link";
import { ReactNode } from "react";

export function NavLink({children, href, size="small"}: {
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
