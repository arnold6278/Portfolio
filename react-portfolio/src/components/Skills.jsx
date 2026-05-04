const SKILL_GROUPS = [
  {
    icon: 'fa-terminal',
    title: 'Languages',
    skills: [
      { name: 'Python',     level: 95 },
      { name: 'SQL',        level: 92 },
      { name: 'Java',       level: 78 },
      { name: 'JavaScript', level: 76 },
    ],
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'Google Cloud Platform', level: 92 },
      { name: 'Terraform / IAM',        level: 82 },
      { name: 'Microsoft Azure',        level: 78 },
    ],
  },
  {
    icon: 'fa-database',
    title: 'Data Engineering',
    skills: [
      { name: 'Apache Airflow',        level: 88 },
      { name: 'Apache Beam / Dataflow', level: 85 },
      { name: 'BigQuery / PostgreSQL', level: 91 },
    ],
  },
  {
    icon: 'fa-chart-bar',
    title: 'Analysis & BI',
    skills: [
      { name: 'Pandas / NumPy',         level: 88 },
      { name: 'Looker Studio / LookML', level: 84 },
      { name: 'Power BI',               level: 80 },
    ],
  },
  {
    icon: 'fa-code',
    title: 'Software Development',
    skills: [
      { name: 'Node.js / Express', level: 78 },
      { name: 'Firebase',          level: 80 },
      { name: 'REST APIs',         level: 85 },
    ],
  },
  {
    icon: 'fa-wrench',
    title: 'DevOps & Tooling',
    skills: [
      { name: 'CI/CD & GitHub Actions',   level: 85 },
      { name: 'GCP Monitoring & Logging', level: 83 },
      { name: 'Linux',                    level: 80 },
    ],
  },
];

const ALSO = [
  'Seaborn', 'Plotly', 'Matplotlib', 'Tkinter', 'HTML/CSS', 'C++',
  'Machine Learning', 'LLM Evaluation', 'Data Labelling', 'Industrial Automation',
  'PLC', 'Mobile Robotics', 'Electronics',
];

function Meter({ name, level }) {
  return (
    <div className="meter" data-level={level}>
      <div className="meter-label">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="track">
        <div className="fill" />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">
            Skills &amp; <span>Technology Stack</span>
          </h2>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map(({ icon, title, skills }) => (
            <article className="skill-card reveal" key={title}>
              <h3>
                <i className={`fa-solid ${icon}`} />
                {title}
              </h3>
              {skills.map((s) => (
                <Meter key={s.name} {...s} />
              ))}
            </article>
          ))}
        </div>

        <div className="skills-also reveal">
          <div className="skills-also-label">Also experienced with</div>
          <div className="skills-tags">
            {ALSO.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
