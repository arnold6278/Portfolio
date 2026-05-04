const SERVICES = [
  {
    icon: 'fa-cloud',
    title: 'Cloud Architecture',
    desc: 'Secure, cost-aware, and scalable designs for data-centric products on modern cloud stacks.',
  },
  {
    icon: 'fa-database',
    title: 'Data Pipelines',
    desc: 'Batch and streaming pipelines for analytics, BI, and ML workloads with robust monitoring.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Delivery Outcomes',
    desc: 'From architecture to implementation, I focus on measurable business results and platform reliability.',
  },
];

const STATS = [
  { value: '99.9%',    label: 'Data availability target' },
  { value: '5+',       label: 'Professional certifications' },
  { value: 'GCP Pro',  label: 'Data Engineer certified' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">

        {/* ── Left column ── */}
        <div className="reveal">
          <div className="hero-kicker">
            <i className="fa-solid fa-circle-check" />
            Cloud and Data Engineering
          </div>

          <h1>
            Building resilient data systems that{' '}
            <em>scale&nbsp;with&nbsp;confidence.</em>
          </h1>

          <p className="hero-lead">
            I&rsquo;m Arnold Mukwevho — a Cloud and Data Engineer focused on production-grade
            pipelines, analytics platforms, and high-availability cloud architecture on Google
            Cloud.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <i className="fa-solid fa-diagram-project" />
              View Projects
            </a>
            <a className="btn btn-outline" href="#contact">
              <i className="fa-solid fa-paper-plane" />
              Start a Conversation
            </a>
            <a
              className="btn btn-outline"
              href="assets/docs/Arnold_Mukwevho_CV.pdf"
              download
            >
              <i className="fa-solid fa-file-arrow-down" />
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map(({ value, label }) => (
              <article className="stat-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>

        {/* ── Right column (services card) ── */}
        <aside className="banner-card reveal" aria-label="Professional services">
          <div className="banner-head">
            <span>Professional Services</span>
            <span className="status-pill">Accepting new work</span>
          </div>
          <div className="banner-body">
            {SERVICES.map(({ icon, title, desc }) => (
              <article className="service-tile" key={title}>
                <h3>
                  <i className={`fa-solid ${icon}`} />
                  {title}
                </h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
}
