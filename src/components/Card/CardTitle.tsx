import { ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
  as: keyof JSX.IntrinsicElements;
}

export function CardTitle({ children, as: Tag, ...rest }: CardTitleProps) {
  return (
    <Tag
      {...rest}
      className="mb-2 text-lg sm:text-base font-semibold line-clamp-1"
    >
      {children}
    </Tag>
  );
}
