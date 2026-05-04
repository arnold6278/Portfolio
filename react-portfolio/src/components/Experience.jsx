const JOBS = [
  {
    role: 'Cloud Data Engineer',
    period: 'Mar 2025 – Mar 2026',
    company: 'JUTOMATE',
    bullets: [
      'Architected and maintained scalable data pipelines on GCP, ensuring 99.9% data availability for cross-functional teams.',
      'Automated end-to-end ELT processes using Apache Airflow, migrating data from PostgreSQL to BigQuery via batch and CDC methods.',
      'Transformed raw datasets into structured formats via Dataflow (Apache Beam) and Cloud Functions for real-time analytical reporting.',
      'Standardised infrastructure deployment using Terraform IaC and implemented CI/CD pipelines for data workflows.',
      'Engineered centralised dashboards in Looker Studio and LookML to visualise KPIs for stakeholder decision-making.',
      'Managed IAM policies across GCP services, enforcing least-privilege access controls for compliant pipeline operations.',
    ],
  },
  {
    role: 'Freelance AI Trainer / AI Training Engineer',
    period: 'Oct 2024 – Present',
    company: 'Scale AI (Outlier)',
    bullets: [
      'Refined LLM performance by evaluating and ranking AI-generated code across Python, Java, and C++.',
      'Developed complex technical prompts and edge-case scenarios to stress-test model reasoning and accuracy.',
      'Ensured 100% compliance with data privacy (POPIA/PII) and safety guidelines.',
    ],
  },
  {
    role: 'Student Mentor',
    period: 'Mar 2025',
    company: 'Geekulcha',
    bullets: [
      'Helped students refine ideas to meet Hackathon criteria and provided hands-on code debugging support.',
      'Collaborated with core mentors to manage multiple teams across the African continent.',
    ],
  },
  {
    role: 'Trainee',
    period: 'Mar 2024 – Mar 2025',
    company: 'Afrika Tikkun Services / Faith Mangope Technology Institute',
    bullets: [
      'Completed work-readiness and cloud technology programs covering Azure Cloud and AI fundamentals.',
      'Built data visualisation projects using Plotly, Seaborn, and Matplotlib; attained 4+ certifications within 12 months.',
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
