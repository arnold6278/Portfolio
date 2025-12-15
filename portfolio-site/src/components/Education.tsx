type Edu = {
  qualification: string;
  institution: string;
};

const education: Edu[] = [
  {
    qualification: "Diploma in IT Intelligent Industrial Systems (NQF 6)",
    institution: "Tshwane University of Technology",
  },
  {
    qualification: "Matric in Maths and Science (NQF 4)",
    institution: "Tshivhidzo Masiagwala Secondary School",
  },
];

export function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-2xl font-semibold">Education</h2>
      <ul className="mt-6 space-y-4">
        {education.map((e) => (
          <li key={e.qualification} className="rounded-xl border bg-white dark:bg-zinc-900 p-4 shadow-sm">
            <div className="font-medium">{e.qualification}</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.institution}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
