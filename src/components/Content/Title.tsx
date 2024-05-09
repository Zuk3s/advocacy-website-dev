interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="block title capitalize text-rosa-900 text-center mb-8 text-3xl font-semibold">
      {children}
    </h1>
  );
}
