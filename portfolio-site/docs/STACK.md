**Overview**

This portfolio uses a modern, SA-friendly web stack optimized for fast iteration, low maintenance, and easy hosting.

- Framework: Next.js 16 (App Router, React Server Components)
- Language: TypeScript
- Styling: Tailwind CSS
- Tooling: ESLint, PostCSS, `next/font` (Geist)
- Package manager: npm
- Hosting (recommended): Vercel (serverless, edge-ready)

Why this stack (South Africa context)
- Next.js + TypeScript + Tailwind is widely adopted in SA companies and job posts.
- Vercel’s free tier is generous, simple to set up, and works seamlessly with Next.js.
- Utility-first CSS enables rapid design iteration without heavy CSS files.

Key Dependencies
- `next`: 16.x
- `react` / `react-dom`: 18.x
- `eslint` + Next.js config
- `tailwindcss`, `postcss`, `autoprefixer`

Folder Highlights
- App Router: [src/app](../src/app)
- Components: [src/components](../src/components)
- Data modules: [src/data](../src/data)
- Static assets: [public](../public)
- Local scripts: [scripts](../scripts)

Conventions
- TypeScript-first with strict, explicit types where helpful.
- Tailwind utility classes for layout/spacing/typography; prefer composition over global CSS.
- React Server Components by default; only opt into client components when needed.
- Keep data in `src/data/*` to separate content from layout/logic.
