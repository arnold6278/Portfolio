import type { NextRequest } from "next/server";

async function sendWithSendGrid(to: string, from: string, subject: string, text: string) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error("SENDGRID_API_KEY not configured");

  const payload = {
    personalizations: [
      {
        to: [{ email: to }],
        subject,
      },
    ],
    from: { email: from },
    content: [{ type: "text/plain", value: text }],
  };

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`SendGrid error: ${res.status} ${body}`);
  }
}

async function sendWithSMTP(to: string, from: string, subject: string, text: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass) throw new Error("SMTP configuration missing");

  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!message || !email) {
      return new Response(JSON.stringify({ error: "Missing email or message" }), { status: 400 });
    }

    const to = process.env.EMAIL_TO || "mukwevhoarnold627@gmail.com";
    const from = process.env.EMAIL_FROM || (process.env.SENDGRID_FROM || email);
    const subject = `Portfolio contact from ${name || email}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    if (process.env.SENDGRID_API_KEY) {
      await sendWithSendGrid(to, from, subject, text);
    } else if (process.env.SMTP_HOST) {
      await sendWithSMTP(to, from, subject, text);
    } else {
      return new Response(JSON.stringify({ error: "No mail provider configured" }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500 });
  }
}
