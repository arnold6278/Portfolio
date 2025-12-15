**Tech Stack Overview**
- **Framework:** Next.js 16 (App Router, Server Components, Turbopack in dev)
- **Language:** TypeScript (strict, DX, safer refactors)
- **Styling:** Tailwind CSS (utility-first, responsive, dark-mode classes)
- **Linting/Formatting:** ESLint (from `create-next-app` template)
- **Fonts:** `next/font` (Geist + Geist Mono) with automatic optimization
- **Package Manager:** npm
- **Hosting (recommended):** Vercel (serverless/edge functions, zero-config builds)

**Repository Layout**
- [src/app](src/app): App Router entry points and layout
  - [app/layout.tsx](src/app/layout.tsx): Global providers, fonts, base <body> styles, and site metadata
  - [app/page.tsx](src/app/page.tsx): Homepage composition using section components
- [src/components](src/components): UI sections and shared components
  - [Navbar](src/components/Navbar.tsx), [Hero](src/components/Hero.tsx), [About](src/components/About.tsx), [Certificates](src/components/Certificates.tsx), [Projects](src/components/Projects.tsx), [Contact](src/components/Contact.tsx), [Footer](src/components/Footer.tsx)
- [src/data](src/data): Lightweight content modules
  - [skills.ts](src/data/skills.ts): Centralized skills list rendered in `About`
- [public](public): Static assets served at the root (e.g., [public/resume.pdf](public/resume.pdf))
- [scripts](scripts): Local utilities
  - [extract-skills.mjs](scripts/extract-skills.mjs): Optional PDF parser for updating `skills.ts` from `public/resume.pdf`
- Root configs: [next.config.ts](next.config.ts), [tsconfig.json](tsconfig.json), [eslint.config.mjs](eslint.config.mjs), [postcss.config.mjs](postcss.config.mjs)

**Rendering Model**
- Uses Next.js App Router with React Server Components by default.
- Current pages are primarily static and stream quickly via RSC.
- No server-side APIs are enabled yet; future additions (e.g., `/api/contact`) can run as serverless functions on Vercel.

**Styling & Theming**
- Tailwind CSS utilities for layout and typography.
- Dark mode supported by class-based styles on the `<body>` in [layout.tsx](src/app/layout.tsx).

**Data & State**
- Content is component-driven with minimal local state.
- Skills are read from [src/data/skills.ts](src/data/skills.ts). An optional extractor script can update this from the resume PDF.

**Build & Dev Flow**
- Development: `npm run dev` (Turbopack) → http://localhost:3000
- Production: `next build` and `next start` or deploy to Vercel
- Hot reload actively updates on file changes; if you see a lock/port issue, remove `.next/dev/lock` and restart.

**Deployment**
- Vercel (recommended):
  - Import repo → framework auto-detected → set root to `portfolio-site` if repo has a parent folder
  - Push to `main` triggers a new deployment; preview URLs for PRs
- Alternatives: Netlify (Next.js adapter), Cloudflare Pages (Functions for dynamic parts)

**Performance Notes**
- RSC reduces client bundle size by rendering primarily on the server.
- Image optimization is available via `next/image` (not heavily used yet).
- Route-level code splitting out of the box with the App Router.

**Security & Privacy**
- No user data is processed currently.
- If adding a contact form:
  - Validate input server-side, apply a basic rate limit
  - Use environment variables for secrets (e.g., email provider keys)
  - Avoid logging PII

**SEO & Analytics (optional, currently minimal)**
- Metadata set in [app/layout.tsx](src/app/layout.tsx) for title/description.
- Future: Open Graph/Twitter cards, favicon set, and optional analytics (Vercel Analytics, GA4).

**Planned/Optional Extensions**
- Contact form API (Nodemailer or Resend) with validation and rate limiting
- Social preview images (OG) generated at build or on-demand
- CMS for content (e.g., Contentlayer, Sanity) if content grows
- Move repeated lists (projects, links) into `/src/data` for simpler updates

**Local Commands**
- Dev:
  - `npm run dev`
  - If locked: delete `.next/dev/lock` then rerun.
- Build/Start:
  - `npm run build`
  - `npm run start`

**Why This Stack (SA context)**
- Next.js + TypeScript + Tailwind is widely used in South African teams, with strong hiring signal.
- Vercel offers reliable free-tier hosting, fast global delivery, and frictionless CI/CD.
- Utility-first CSS and RSC accelerate iteration, ideal for a portfolio that evolves over time.
