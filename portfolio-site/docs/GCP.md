**Google Cloud Platform Role**

- Hosting via Firebase: Firebase Hosting runs on Google Cloud’s global edge infrastructure and CDN.arnold-portfolio-site.web.app is served from geographically distributed points of presence backed by Google Cloud networking.
- Identity & IAM: Firebase project `arnold-portfolio-site` maps to a GCP project under the hood. Permissions (service accounts, secrets used in GitHub Actions) rely on GCP IAM.
- Build & Deploy (frameworks): The Firebase Web Frameworks integration can provision Cloud Functions or Cloud Run for SSR when needed; your current site is fully static, so no Functions/Run resources are created.

Optional GCP Services You Can Add
- Cloud Functions / Cloud Run: For `/api/contact` or dynamic SSR (send emails, call external APIs, secure backend logic).
- Firestore / Cloud SQL: Persist contact submissions, project data, or blog content.
- Cloud Storage: Host large static assets (images, videos, documents) and serve via Firebase/Cloud CDN.
- Secret Manager: Store API keys (email provider, analytics) and access them from Functions/Run.
- Cloud Logging & Monitoring: Observe deployments, latency, errors; set alerts on uptime/performance.
- Cloud Scheduler + Pub/Sub: Scheduled jobs (e.g., sync GitHub projects nightly).

Reference Architecture (evolving)
- Frontend (static): Next.js prerendered pages served by Firebase Hosting (Google Cloud CDN).
- Backend (optional): Cloud Functions/Run for APIs.
- Data (optional): Firestore/Storage for content & uploads.
- Observability: Cloud Logging, Error Reporting; optional analytics via Google Analytics.

Migration Paths
- From static → SSR: enable SSR in Next.js routes; deploy with frameworks integration to provision Functions/Run automatically.
- From SSR → container: build Docker images and run on Cloud Run for more control (regions, concurrency, VPC).

Costs
- Firebase Hosting free tier covers small static sites generously; Cloud Functions/Run/Firestore have always-free quotas. Monitor in GCP Billing if you add backend services.
