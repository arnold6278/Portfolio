const certificationsUrl = "https://www.linkedin.com/in/arnold-mukwevho/details/certifications/";

export function Certificates() {
	return (
		<section id="certificates" className="py-12">
			<h2 className="text-2xl font-semibold">Certificates</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				View the full list of certificates and badges on LinkedIn:
				<a className="ml-1 text-indigo-600 hover:underline" href={certificationsUrl} target="_blank" rel="noreferrer">LinkedIn Certifications</a>
			</p>
		</section>
	);
}
