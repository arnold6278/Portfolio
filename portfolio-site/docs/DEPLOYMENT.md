**Recommended Hosting: Vercel (Free Tier)**

Benefits
- Zero-config for Next.js, fast global CDN, preview deployments per PR.
- Serverless functions for future `/api/contact`.

GitHub Flow
1. Push the project to a GitHub repo (ensure the repo root is the `portfolio-site` folder or configure root in Vercel).
2. On vercel.com → New Project → Import GitHub repo.
3. Framework is auto-detected. If your repo has a parent folder, set “Root Directory” to `portfolio-site`.
4. Deploy. You’ll get `https://<project>.vercel.app`.
5. Optional: add a custom domain and connect DNS.

Vercel CLI (alternative)
```bash
npm i -g vercel
vercel
vercel --prod
```

Environment Variables (future)
- Add secrets for email provider (Resend/Nodemailer) in Vercel Project Settings → Environment Variables.
- Use `process.env.SECRET_NAME` in server code only.

Alternatives
- Netlify: Good for static-first sites and small serverless needs.
- Cloudflare Pages: Great performance at the edge; Next.js support via Functions.
- GitHub Pages: Static-only; not ideal for SSR or API routes.
