"use client";

import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to send message");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || String(err));
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:max-w-md">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border px-3 py-2"
          placeholder="Your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border px-3 py-2"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-md border px-3 py-2"
          placeholder="Message"
          rows={4}
          required
        />
        <button
          className="rounded-md bg-zinc-900 text-white px-4 py-2 dark:bg-zinc-50 dark:text-black"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </form>

      {status === "sent" && <p className="mt-4 text-sm text-green-600">Message sent — thank you!</p>}
      {status === "error" && <p className="mt-4 text-sm text-red-600">Error sending message: {error}</p>}

      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        Or email me at: <a href="mailto:mukwevhoarnold627@gmail.com" className="text-indigo-600 hover:underline">mukwevhoarnold627@gmail.com</a>
      </p>
    </section>
  );
}