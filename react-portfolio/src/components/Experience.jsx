const JOBS = [
  {
    role: 'Cloud Data Engineer',
    period: 'Mar 2025 – Mar 2026',
    company: 'Jutomate',
    bullets: [
      'Architected and maintained scalable ELT pipelines on GCP, ensuring 99.9% data availability across cross-functional teams.',
      'Automated data migration from PostgreSQL to BigQuery using Apache Airflow with batch and Change Data Capture (CDC) strategies.',
      'Built real-time analytics workflows using Dataflow (Apache Beam) and Cloud Functions for live reporting.',
      'Standardised infrastructure deployments with Terraform and implemented CI/CD pipelines for data workflows.',
      'Delivered centralised Looker Studio dashboards that gave stakeholders clear visibility into key business metrics.',
      'Implemented GCP Monitoring, Logging, and IAM least-privilege policies to keep systems reliable, observable, and secure.',
    ],
  },
  {
    role: 'Freelance AI Training Engineer',
    period: 'Oct 2024 – Present',
    company: 'Scale AI (Outlier)',
    bullets: [
      'Evaluated and ranked AI-generated code across Python, Java, and C++ to improve large language model performance.',
      'Developed complex prompts and edge-case scenarios to stress-test model reasoning and accuracy.',
      'Ensured 100% compliance with POPIA/PII data privacy guidelines and flagged hallucinations to maintain training data quality.',
    ],
  },
  {
    role: 'Student Mentor',
    period: 'Mar 2025',
    company: 'Geekulcha',
    bullets: [
      'Supported student teams at a Pan-African Hackathon — helping refine ideas, debug code, and provide online support for virtual participants.',
      'Collaborated with core mentors to manage multiple teams across the African continent.',
    ],
  },
  {
    role: 'Trainee — Cloud & Data',
    period: 'Mar 2024 – Mar 2025',
    company: 'Afrika Tikkun Services / Faith Mangope Technology Institute',
    bullets: [
      'Completed an intensive cloud technology and work-readiness programme covering Azure Cloud and AI fundamentals.',
      'Built data visualisation projects using Plotly, Seaborn, and Matplotlib.',
      'Managed relational databases with advanced SQL and earned four industry certifications — including AZ-900 and AI-900 — within 12 months.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">Career</p>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="timeline">
          {JOBS.map(({ role, period, company, bullets }) => (
            <article className="tl-item reveal" key={role}>
              <div className="tl-dot" />
              <div>
                <div className="tl-meta">
                  <span className="tl-role">{role}</span>
                  <span className="tl-period">{period}</span>
                </div>
                <div className="tl-company">{company}</div>
                <ul className="tl-list">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
