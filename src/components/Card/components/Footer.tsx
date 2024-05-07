export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <footer className="flex mt-auto justify-end">
      <p className="text-xs opacity-80 ">Postado em: {children}</p>
    </footer>
  );
}
