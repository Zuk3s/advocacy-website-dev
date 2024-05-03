import { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
}

export function CardContent({ children, ...rest }: CardContentProps) {
  return (
    <p
      className="text-ellipsis hyphens-auto text-sm line-clamp-3 leading-5 indent-5"
      lang="pt-br"
      {...rest}
    >
      {children}
    </p>
  );
}
