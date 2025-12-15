**Local Development**

Basic commands
```bash
npm run dev   # start dev server (Turbopack)
npm run build # create production build
npm run start # run production build locally
```

Common Windows fixes
- Port in use (3000): either let Next.js pick 3001 or stop listeners.
- Stale lock: delete `.next/dev/lock` and restart dev server.

Project Structure
- App router and layout: [src/app](../src/app)
- Components: [src/components](../src/components)
- Data modules: [src/data](../src/data)
- Static assets: [public](../public)
- Scripts: [scripts](../scripts)

PDF Skills Extractor (optional)
- The script [scripts/extract-skills.mjs](../scripts/extract-skills.mjs) can parse `public/resume.pdf` and update `src/data/skills.ts`.
- Install: `npm i -D pdf-parse`
- Run: `node scripts/extract-skills.mjs`

Troubleshooting
- ReferenceError from missing imports: ensure components are imported in `app/page.tsx` before use.
- Source map warnings in dev: benign for local; disappear on production builds.
