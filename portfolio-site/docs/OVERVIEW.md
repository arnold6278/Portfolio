**Project Overview**

- Purpose: Personal portfolio for Mukwevho Nkhangweleni Arnold.
- Live: arnold-portfolio-site.web.app (Firebase Hosting).
- Source: `portfolio-site` subfolder in the GitHub repo.

**Tech Stack**
- Next.js 16 (App Router, React Server Components)
- TypeScript 5, ESLint 9
- Tailwind CSS 4
- Tooling: Turbopack dev server, `next build` for production
- Hosting: Firebase Hosting (Web Frameworks integration)

**Structure**
- `src/app`: App router entry (`layout.tsx`, `page.tsx`)
- `src/components`: UI sections (`Navbar`, `Hero`, `About`, `Projects`, `Certificates`, `Contact`, `Footer`)
- `src/data`: Skills and soft skills (`skills.ts`)
- `public`: Static assets (includes `resume.pdf`)
- `docs`: Documentation (`STACK.md`, `ARCHITECTURE.md`, `DEPLOYMENT.md`, `OPERATIONS.md`, and this `OVERVIEW.md`)
- `scripts`: Optional PDF skills extractor (`extract-skills.mjs`)

**Architecture**
- Rendering: Server Components by default; home page composed in `src/app/page.tsx`.
- Styling: Tailwind utility classes; dark-ready base in `src/app/layout.tsx`.
- Data: Static skills list from `src/data/skills.ts`; certificates simplified to a LinkedIn page link.
- Assets: `public/resume.pdf` linked from the footer; no dynamic APIs.

**Local Development**
```bash
npm ci
npm run dev
# open http://localhost:3000
```

**Build & Preview**
```bash
npm run build
npm run start
```

**Deployment (Firebase Hosting)**
```bash
npm i -g firebase-tools
firebase login
firebase experiments:enable webframeworks

# from portfolio-site
firebase deploy
```

CI/CD (GitHub Actions)
- Workflows in `.github/workflows` build from `portfolio-site` and deploy previews on PR and the live site on merges to `main`.

**Operations & Troubleshooting**
- Port/lock issues: remove `.next/dev/lock` if dev server fails to start.
- Frameworks deploy requires enabling experiments: `firebase experiments:enable webframeworks`.
- See `docs/OPERATIONS.md` for more.
