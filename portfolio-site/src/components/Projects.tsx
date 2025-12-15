type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Query-Works",
    description: "Python project for efficient data querying workflows.",
    tags: ["Python"],
    link: "https://github.com/arnold6278/Query-Works",
  },
  {
    title: "Typing Speed Test",
    description: "JavaScript app to measure typing speed and accuracy.",
    tags: ["JavaScript"],
    link: "https://github.com/arnold6278/Typing-speed-test",
  },
  {
    title: "CropWise1",
    description: "JavaScript project (details in repository).",
    tags: ["JavaScript"],
    link: "https://github.com/arnold6278/CropWise1",
  },
  {
    title: "StockWise (fork)",
    description: "JavaScript project focusing on stock tracking (fork).",
    tags: ["JavaScript"],
    link: "https://github.com/arnold6278/StockWise",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl border bg-white dark:bg-zinc-900 p-4 shadow-sm">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-indigo-600 hover:underline">
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}