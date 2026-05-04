const SKILL_GROUPS = [
  {
    icon: 'fa-terminal',
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL',    level: 90 },
      { name: 'Java',   level: 80 },
    ],
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud and Data',
    skills: [
      { name: 'Google Cloud Platform', level: 92 },
      { name: 'BigQuery and Dataflow',  level: 90 },
      { name: 'Apache Airflow',         level: 88 },
    ],
  },
  {
    icon: 'fa-wrench',
    title: 'Tooling',
    skills: [
      { name: 'Docker and CI/CD',          level: 85 },
      { name: 'Power BI and Looker',        level: 84 },
      { name: 'Machine Learning Workflows', level: 82 },
    ],
  },
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
            Skills and <span>Technology Stack</span>
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
      </div>
    </section>
  );
}
