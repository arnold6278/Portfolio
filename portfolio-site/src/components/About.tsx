import skills from "@/data/skills";
export function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold">About Me: Mukwevho Nkhangweleni Arnold</h2>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
        I am a highly motivated and versatile technologist bridging the domains of
        Data Engineering and Software Engineering. My work centers on creating
        robust, scalable solutions that transform complex data into actionable
        business intelligence.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-lg font-medium">Data Engineering Focus (Google Cloud Platform)</h3>
          <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
            As a Data Engineer, I specialize in designing and implementing end-to-end
            data pipelines within the Google Cloud Platform (GCP) ecosystem. I leverage
            services like BigQuery, Dataflow, and Cloud Storage to ensure data reliability,
            accessibility, and performance—driving insights that inform strategic decisions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Software Engineering Expertise</h3>
          <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
            My foundation as a Software Engineer ensures I build solutions with technical
            excellence and efficiency. I am proficient in resilient Microservices
            architectures, designing clean and functional APIs, and contributing across
            backend and frontend development.
          </p>
        </div>
        <div>
          <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
            I thrive in collaborative environments, adhering to Agile methodology to
            deliver rapid, incremental value. My communication skills help translate
            complex technical challenges and solutions to both technical and
            non-technical stakeholders.
          </p>
          <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
            In essence, I am dedicated to architecting the systems that power modern
            enterprises—from the flow of data to the final user experience.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Skills</h3>
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {skills.map((s) => (
            <span key={s} className="rounded-full border px-2 py-0.5">{s}</span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Soft Skills</h3>
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {[
            "Problem Solving & Critical Thinking",
            "Communication & Interpersonal",
            "Teamwork & Independence",
            "Detail-Oriented",
            "Multitasking",
          ].map((s) => (
            <span key={s} className="rounded-full border px-2 py-0.5">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}