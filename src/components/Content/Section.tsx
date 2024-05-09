import { twMerge } from "tailwind-merge";

export function Section({
  children,
  className,
  notMargin,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  notMargin?: boolean;
  id?: string;
}) {
  return (
    <section
      className={twMerge("mx-auto px-5", className, !notMargin && "max-w-7xl")}
      id={id}
    >
      {children}
    </section>
  );
}
