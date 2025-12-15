**Architecture Overview**

This app follows Next.js App Router conventions with React Server Components (RSC) by default. Most content is static or streamed from the server, yielding small client bundles and fast Time-to-Interactive.

Core Building Blocks
- Layout: [src/app/layout.tsx](../src/app/layout.tsx) sets fonts, base styles, and metadata.
- Page: [src/app/page.tsx](../src/app/page.tsx) composes sections into the homepage.
- Sections (server components): [src/components](../src/components) — `Navbar`, `Hero`, `About`, `Certificates`, `Projects`, `Contact`, `Footer`.
- Data modules: [src/data/skills.ts](../src/data/skills.ts) centralizes skills used by `About`.
- Static assets: [public](../public) (e.g., resume.pdf).

Rendering Model
- React Server Components (default): reduce client JavaScript and speed up rendering.
- Client Components (opt-in): used when local state or browser APIs are needed (currently minimal).
- Static vs Dynamic: current sections are static; future API routes can introduce dynamic serverless rendering.

Routing & Navigation
- App Router: file-based routes under `src/app`.
- Single page today (`/`), with in-page anchors in `Navbar`.
- Can grow into nested routes (e.g., `/projects/[slug]`, `/api/contact`).

Styling & Theming
- Tailwind CSS utilities applied at component level.
- Dark mode via class-based styles on `<body>` in `layout.tsx`.

Data Flow
- Skills sourced from `src/data/skills.ts` and rendered in `About`.
- Projects are currently defined inline in `Projects.tsx` with GitHub links.
- Optional script [scripts/extract-skills.mjs](../scripts/extract-skills.mjs) can parse `public/resume.pdf` and update `skills.ts`.

Extensibility
- Contact API: Add `src/app/api/contact/route.ts` for a serverless email endpoint (Resend/Nodemailer).
- Analytics/SEO: Add social metadata and analytics in `layout.tsx`.
- CMS: If content grows, migrate lists (projects, links) to a CMS or `contentlayer`.

Error Handling & Resilience
- Next.js supports `error.tsx` and `not-found.tsx` per route segment if needed.
- Define clear fallback UI for failed API calls (when APIs are added).

Performance Considerations
- RSC keeps client bundle small.
- Route-level code-splitting by default.
- Use `next/image` if adding images for automatic optimization.

Security Considerations (preview)
- No user data is processed yet.
- Future `/api/contact`: validate input server-side, apply rate limiting, and store secrets in environment variables.
