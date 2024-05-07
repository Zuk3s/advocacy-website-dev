interface CardTextGroupProps {
  children: React.ReactNode;
}

export function CardTextGroup({ children }: CardTextGroupProps) {
  return (
    <div className="p-5 md:pt-4 w-full flex flex-col gap-4 md:h-full">{children}</div>
  );
}
