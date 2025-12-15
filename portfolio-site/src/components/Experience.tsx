type Role = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Data Engineering Intern",
    company: "JUTOMATE",
    start: "Mar 2025",
    end: "Present",
    bullets: [
      "Develop and maintain scalable data pipelines on GCP",
      "Use BigQuery, Cloud Storage, and Cloud Composer for integration and orchestration",
      "Transform raw data using Dataflow (Apache Beam) and Cloud Functions",
      "Create and manage workflows with Airflow",
      "Ensure data quality, governance, and security across cloud systems",
      "Collaborate with data scientists and engineers on real-time and batch solutions",
      "Perform ETL, data cleansing, and analytics integration",
      "Data Visualization using Looker",
      "Terraform for infrastructure management",
    ],
  },
  {
    title: "Student Mentor",
    company: "Geekulcha",
    start: "Mar 2025",
    end: "Mar 2025",
    bullets: [
      "Guided students to refine ideas for hackathon criteria",
      "Provided support in code debugging",
      "Worked alongside industry experts as co-mentors",
    ],
  },
  {
    title: "AI Training Engineer (Freelance)",
    company: "OUTLIER",
    start: "Nov 2024",
    end: "Present",
    bullets: [
      "Helped train AI models to improve coding skills",
      "Reviewed, ranked, and provided feedback on AI-generated code (Python, Java, C++)",
      "Created and answered coding questions to improve AI performance",
      "Worked remotely with flexible hours",
    ],
  },
  {
    title: "Software Development and Data Analysis Trainee",
    company: "The Faith Mangope Technology Institute (Graduate)",
    start: "Mar 2023",
    end: "Mar 2024",
    bullets: [
      "Machine Learning and AI: models and algorithms for predictive analysis",
      "Programming: Python and Java",
      "Database Management: SQL for querying and optimization",
      "Data Analysis & Visualization: Python, Power BI, Jupyter Lab",
      "Libraries: Plotly Express, Seaborn, Matplotlib, Pandas",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {roles.map((r) => (
          <article key={`${r.title}-${r.company}`} className="rounded-xl border bg-white dark:bg-zinc-900 p-4 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">{r.title} — {r.company}</h3>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{r.start} — {r.end}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
