import { twMerge } from "tailwind-merge";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export default function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={twMerge(
        "block title capitalize text-center mb-8 text-4xl font-semibold",
        className
      )}
    >
      {children}
    </h1>
  );
}
