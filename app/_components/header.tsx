export const Header = ({ headline, title }: { headline: string; title: string }) => {
  return (
    <header className="w-full flex flex-col mb-4 gap-1 justify-start items-start">
      <h2 className="text-muted-foreground text-xs md:text-sm font-bold">{title}</h2>
      <h1 className="font-extrabold text-xl md:text-2xl">{headline}</h1>
    </header>
  );
};
