const STATS = [
  { value: '99.9%',   label: 'Data availability SLA' },
  { value: 'GCP Pro', label: 'Data Engineer certified' },
  { value: '5+',      label: 'Industry certifications' },
];

const STACK_PILLS = ['Python', 'SQL', 'GCP', 'BigQuery', 'Airflow', 'React', 'Terraform'];

const HC_METRICS = [
  { icon: 'fa-cloud',       label: 'Primary Cloud',    val: 'Google Cloud Platform' },
  { icon: 'fa-database',    label: 'Data Warehouse',   val: 'BigQuery · PostgreSQL' },
  { icon: 'fa-code-branch', label: 'Orchestration',    val: 'Apache Airflow · CI/CD' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">

        {/* ── Left column ── */}
        <div className="reveal">
          <div className="hero-kicker">
            <i className="fa-solid fa-circle-check" />
            Software · Data · Analytics
          </div>

          <h1>
            I turn raw data into<br />
            <em>decisions that matter.</em>
          </h1>

          <p className="hero-lead">
            Arnold Mukwevho — Software Engineer, Cloud Data Engineer &amp; Data Analyst.
            I build production-grade pipelines, AI-powered tools, and analytics systems that
            drive real business outcomes on Google Cloud.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <i className="fa-solid fa-diagram-project" />
              View My Work
            </a>
            <a className="btn btn-outline" href="#contact">
              <i className="fa-solid fa-paper-plane" />
              Get In Touch
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

        {/* ── Right column: Tech Profile Card ── */}
        <aside className="hero-card reveal" aria-label="Tech profile">
          <div className="hc-head">
            <div className="hc-avatar">AM</div>
            <div>
              <div className="hc-name">Arnold Mukwevho</div>
              <div className="hc-status">
                <span className="dot" />
                Available for hire
              </div>
            </div>
          </div>

          <div className="hc-stats">
            <div className="hc-stat"><strong>GCP</strong><span>Certified Pro</span></div>
            <div className="hc-stat"><strong>1yr+</strong><span>Production exp</span></div>
            <div className="hc-stat"><strong>5+</strong><span>Certifications</span></div>
          </div>

          <div className="hc-section-label">Core Stack</div>
          <div className="hc-stack">
            {STACK_PILLS.map((t) => <span key={t}>{t}</span>)}
          </div>

          <div className="hc-metrics">
            {HC_METRICS.map(({ icon, label, val }) => (
              <div className="hc-metric" key={label}>
                <div className="hc-metric-icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <div>
                  <div className="hc-metric-label">{label}</div>
                  <div className="hc-metric-val">{val}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
}
