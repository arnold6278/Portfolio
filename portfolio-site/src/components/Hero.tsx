export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid items-center gap-8 sm:grid-cols-2">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Hi, I'm Mukwevho Nkhangweleni Arnold
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Data Engineer based in South Africa. Experienced with cloud platforms
            and modern data pipelines.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="rounded-full bg-zinc-900 text-white px-5 py-2 text-sm dark:bg-zinc-50 dark:text-black">View Projects</a>
            <a href="#contact" className="rounded-full border px-5 py-2 text-sm">Contact Me</a>
          </div>
        </div>
        <div className="h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
      </div>
    </section>
  );
}