**Firebase Hosting**

Best when you prefer Firebase tooling, analytics, or plan to add Functions/Firestore later. This repo is compatible with Firebase’s Web Frameworks integration (auto-detects Next.js), and the app currently builds as fully static content.

Setup
1. Install CLI and login
```bash
npm i -g firebase-tools
firebase login
```
2. Initialize Hosting (detect Next.js)
```bash
firebase init hosting
# Choose: "Use a web framework" → Next.js → select this folder
```
3. Deploy
```bash
firebase deploy
```

Notes
- Files used: `firebase.json`, `.firebaserc` (CLI will update the project id/site).
- SSR is supported by the frameworks integration (Cloud Functions/Run). This project currently prerenders to static, so it deploys as static assets.
- GitHub Actions are configured under `.github/workflows` to build from `portfolio-site` and deploy on PR and merges.
