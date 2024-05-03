interface CardTextGroupProps {
  children: React.ReactNode;
}

export function CardTextGroup({ children }: CardTextGroupProps) {
  return <div className="p-6">{children}</div>;
}
