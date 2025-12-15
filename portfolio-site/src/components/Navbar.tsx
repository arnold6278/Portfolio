export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex h-14 items-center justify-between">
          <a href="#" className="font-semibold">Mukwevho Nkhangweleni Arnold • Portfolio</a>
          <div className="flex gap-6 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}