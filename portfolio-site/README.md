**Portfolio Site — Next.js + Tailwind, deployed on Firebase Hosting**

Overview
- Tech stack: Next.js 16 (App Router, RSC), TypeScript, Tailwind CSS 4, ESLint.
- Hosting: Firebase Hosting (Web Frameworks integration). Live at arnold-portfolio-site.web.app.
- Structure: `src/app` (routes/layout), `src/components` (UI), `src/data` (skills), `public` (assets), `docs` (architecture & operations).

Getting Started
```bash
npm ci
npm run dev
# open http://localhost:3000
```

Build & Run
```bash
npm run build
npm run start
```

Deployment (Firebase Hosting)
```bash
# one-time
npm i -g firebase-tools
firebase login
firebase experiments:enable webframeworks

# from portfolio-site
firebase deploy
```

Architecture
- App Router: server components by default; page composition in `src/app/page.tsx`.
- Styling: Tailwind CSS 4 with utility classes; dark-ready base in `src/app/layout.tsx`.
- Data: Skills and soft skills in `src/data/skills.ts`; certificates link via LinkedIn in `src/components/Certificates.tsx`.
- Assets: Resume available at `public/resume.pdf`; referenced in footer.

Key Components
- `Navbar`, `Hero`, `About`, `Projects`, `Certificates`, `Contact`, `Footer` under `src/components`.
- Home route composes sections in `src/app/page.tsx`.

Docs
- Stack: `docs/STACK.md`
- Architecture: `docs/ARCHITECTURE.md`
- Deployment: `docs/DEPLOYMENT.md`
- Operations: `docs/OPERATIONS.md`

Maintenance
- Lint: `npm run lint`
- Update skills: optional `scripts/extract-skills.mjs` to parse `public/resume.pdf` into `src/data/skills.ts`.

Notes
- This project currently prerenders to static HTML; no `/api` routes.
- Environment files: `.env.local` supported and ignored by Git.
