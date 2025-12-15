export function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form className="mt-6 grid gap-4 sm:max-w-md">
        <input className="rounded-md border px-3 py-2" placeholder="Your name" />
        <input className="rounded-md border px-3 py-2" placeholder="Email" type="email" />
        <textarea className="rounded-md border px-3 py-2" placeholder="Message" rows={4} />
        <button className="rounded-md bg-zinc-900 text-white px-4 py-2 dark:bg-zinc-50 dark:text-black" type="button">
          Send
        </button>
      </form>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Or email me at: arnold@example.com</p>
    </section>
  );
}