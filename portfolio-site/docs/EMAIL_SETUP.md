Email setup

This project supports two ways to send contact emails from the web app. Set one of the following in `.env.local` at the project root.

1) SendGrid (recommended)

SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_TO=your@personal.email
EMAIL_FROM=optional_from_address

2) SMTP (nodemailer)

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_SECURE=false # true for port 465
EMAIL_TO=your@personal.email
EMAIL_FROM=optional_from_address

Notes
- If both SendGrid and SMTP are configured, SendGrid takes precedence.
- After setting env vars, restart the Next.js server (`npm run dev` or rebuild for production).