const PROJECTS = [
  {
    category: 'ML · AgriTech',
    icon: 'fa-seedling',
    title: 'CropWise',
    desc: 'Machine learning platform delivering practical crop insights and yield prediction workflows.',
    stack: ['JavaScript', 'ML', 'AgriTech'],
    url: 'https://github.com/arnold6278/CropWise1',
  },
  {
    category: 'Data Engineering · GCP',
    icon: 'fa-heart-pulse',
    title: 'Healthcare Realtime Pipeline',
    desc: 'Streaming data architecture for healthcare analytics with low-latency ingestion and transformation.',
    stack: ['Python', 'GCP', 'Apache Beam', 'BigQuery'],
    url: 'https://github.com/arnold6278/healthcare-realtime-pipeline',
  },
  {
    category: 'Frontend · Portfolio',
    icon: 'fa-code',
    title: 'Portfolio Site',
    desc: 'Developer portfolio focused on performance, clean UX, and clear storytelling for technical projects.',
    stack: ['TypeScript', 'React', 'Vite'],
    url: 'https://github.com/arnold6278/Portfolio',
  },
  {
    category: 'Python · SQL',
    icon: 'fa-magnifying-glass-chart',
    title: 'Query Works',
    desc: 'Python-based SQL toolkit designed for query analysis, optimisation, and operational reliability.',
    stack: ['Python', 'SQL', 'Optimisation'],
    url: 'https://github.com/arnold6278/Query-Works',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">
            Selected <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(({ category, icon, title, desc, stack, url }) => (
            <article className="project-card reveal" key={title}>
              <p className="project-category">
                <i className={`fa-solid ${icon}`} />
                {category}
              </p>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="stack">
                {stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
                Open on GitHub
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
