const FEATURED = {
  category: 'AI · AgriTech · Full-Stack',
  icon: 'fa-seedling',
  title: 'CropWise',
  tags: [
    { label: 'Live in Production', style: 'pf-tag-green', icon: 'fa-circle-check' },
    { label: 'AI-Powered',         style: 'pf-tag-brand', icon: 'fa-robot' },
    { label: 'Gemini AI',          style: 'pf-tag-brand', icon: 'fa-bolt' },
  ],
  desc: 'An AI-powered crop analysis platform built for South African farmers. Users upload a crop photo and instantly receive species identification, disease detection, health assessment, and localised treatment recommendations — all powered by Google\'s Gemini AI.',
  problem: 'Farmers lack immediate access to agronomists for crop disease diagnosis, leading to delayed treatment and yield loss.',
  solution: 'Integrated Gemini AI for instant visual plant analysis with Firebase auth, downloadable PDF reports, and a mobile-friendly interface.',
  stack: ['JavaScript', 'Node.js', 'Gemini AI', 'Firebase', 'HTML/CSS'],
  url: 'https://github.com/arnold6278/CropWise1',
  demo: 'https://crop-wise1.vercel.app',
};

const PROJECTS = [
  {
    category: 'Data Engineering · GCP',
    icon: 'fa-heart-pulse',
    title: 'Healthcare Realtime Pipeline',
    desc: 'End-to-end real-time data pipeline for healthcare analytics. Ingests live data streams, transforms them via Cloud Functions and Apache Beam, and delivers analytics-ready datasets — with full CI/CD via GitHub Actions.',
    stack: ['Python', 'GCP', 'Apache Beam', 'Cloud Functions', 'BigQuery'],
    url: 'https://github.com/arnold6278/healthcare-realtime-pipeline',
  },
  {
    category: 'Python · SQL · Desktop',
    icon: 'fa-magnifying-glass-chart',
    title: 'QueryWorks',
    desc: 'Desktop SQL client with a built-in analysis layer. Connect to SQL Server, run queries, generate visualisations (scatter, histogram, pie), and export reports as PDFs or CSVs — all from one interface.',
    stack: ['Python', 'Tkinter', 'SQL', 'Pandas', 'Matplotlib'],
    url: 'https://github.com/arnold6278/Query-Works',
  },
  {
    category: 'Frontend · Security',
    icon: 'fa-lock',
    title: 'Secure-Auth',
    desc: 'Modular frontend authentication system implementing secure sign-up and sign-in flows. Clean, reusable, and designed for easy integration with any backend auth service.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://github.com/arnold6278/Secure-Auth',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">
            Work That <span>Ships &amp; Delivers</span>
          </h2>
        </div>

        {/* Featured Project */}
        <article className="project-featured reveal">
          <div className="pf-badge">
            <i className="fa-solid fa-star" />
            Featured Project
          </div>
          <div className="pf-content">
            <div>
              <div className="pf-title-row">
                <p className="project-category">
                  <i className={`fa-solid ${FEATURED.icon}`} />
                  {FEATURED.category}
                </p>
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.75rem', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
                {FEATURED.title}
              </h3>
              <div className="pf-impact-tags">
                {FEATURED.tags.map(({ label, style, icon }) => (
                  <span className={`pf-tag ${style}`} key={label}>
                    <i className={`fa-solid ${icon}`} />
                    {label}
                  </span>
                ))}
              </div>
              <p className="pf-desc">{FEATURED.desc}</p>
              <div className="pf-problem-solution">
                <div className="pf-box pf-box-problem">
                  <strong>Problem</strong>
                  {FEATURED.problem}
                </div>
                <div className="pf-box pf-box-solution">
                  <strong>Solution</strong>
                  {FEATURED.solution}
                </div>
              </div>
              <div className="stack">
                {FEATURED.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                <a className="project-link" href={FEATURED.demo} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                  Live Demo
                </a>
                <a className="project-link" href={FEATURED.url} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github" />
                  GitHub
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Other projects */}
        <div className="projects-grid">
          {PROJECTS.map(({ category, icon, title, desc, stack, url, demo }) => (
            <article className="project-card reveal" key={title}>
              <p className="project-category">
                <i className={`fa-solid ${icon}`} />
                {category}
              </p>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="stack">
                {stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <div className="project-links">
                {demo && (
                  <a className="project-link" href={demo} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    Live Demo
                  </a>
                )}
                <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github" />
                  GitHub
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.7rem' }} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
