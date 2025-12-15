export function Footer() {
  return (
    <footer className="py-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Mukwevho Nkhangweleni Arnold. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="https://github.com/arnold6278" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/arnold-mukwevho" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" download className="hover:underline">Resume</a>
        </div>
      </div>
    </footer>
  );
}