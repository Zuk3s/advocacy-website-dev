import { ReactNode } from "react";

interface NavRootProps {
    children: ReactNode
}

export function NavRoot({children} : NavRootProps) {
    return (
        <nav>
            {children}
        </nav>
    )
}