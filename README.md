# 🌐 NodeTalk — Client (Frontend)

**NodeTalk Client** is the frontend of a modern and scalable forum platform. Built with **React 19**, **TailwindCSS**, and **Material UI**, this single-page application delivers a fast, responsive, and engaging user experience.

🔗 Live Demo: https://nodetalk-12.netlify.app/

🔧 Backend Repo: https://github.com/mahatab6/Node-Talk-Server-Side


* Admin email: admin@gmail.com
* Admin password: admin@
---

## Project overview

NodeTalk Client is the frontend of a forum platform built with modern React and Tailwind. It provides authentication (Firebase), post creation and moderation tools, tag-based filtering, analytics views, and a Stripe-powered premium membership flow. The UI focuses on speed, accessibility, and mobile responsiveness.

## Tech stack

**Core:**

* React 19
* Tailwind CSS 4
* Material UI (MUI)
* React Router v7
* Firebase (Authentication)
* Stripe (Payments)

**State & data:**

* Axios
* React Query v5
* React Hook Form

**UX / Helpers:**

* React Hot Toast
* React Icons
* SweetAlert2
* React Helmet
* React Select
* date-fns
* Minimal Pie Chart

---

## Core features

**For users**

* Register / Login (Firebase)
* Create, edit, and delete posts
* Commenting, upvote/downvote
* Filter posts by tags
* Search and autocomplete
* Premium membership (Stripe)

**For admins**

* Announcement management
* Reported content review
* Tag moderation
* Admin action logs (coming soon)

---

## Dependencies (high level)

To keep the README concise, show main libs — the full list is in `package.json`.

* `react` / `react-dom`
* `tailwindcss`
* `@mui/material` and `@mui/icons-material`
* `react-router-dom`
* `firebase`
* `axios`
* `@tanstack/react-query`
* `react-hook-form`
* `react-hot-toast`
* `sweetalert2`
* `react-select`
* `date-fns`

---

## Prerequisites

Make sure you have Node.js (LTS) and a package manager installed (npm / yarn / pnpm). Optionally install [`git`](https://git-scm.com/) if you will clone the repo.

---

## Environment variables

Place environment variables in a `.env` file at the project root. Depending on your toolchain you may need `VITE_` or `REACT_APP_` prefixes — use whatever your build system expects. Example `.env.example`:

```env
# API & backend
VITE_API_BASE_URL=https://api.yourdomain.com
# or REACT_APP_API_BASE_URL=

# Firebase
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=project_id
VITE_FIREBASE_STORAGE_BUCKET=storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=messaging_sender_id
VITE_FIREBASE_APP_ID=app_id

# Stripe (frontend)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Optional
VITE_SENTRY_DSN=
```

---

## Run locally (step-by-step)

1. **Clone the repo**

```bash
git clone <FRONTEND_REPO_URL>
cd <repo-folder>
```

2. **Install dependencies**

```bash
# npm
npm install
# or yarn
# yarn
# or pnpm
# pnpm install
```

3. **Copy env example and fill values**

```bash
cp .env.example .env
# edit .env and add your values (Firebase, API url, Stripe publishable key)
```

4. **Start the dev server**

```bash
# npm (common scripts)
npm run dev
# or
npm start
```

5. **Open in browser**

```
http://localhost:5173   # or 3000 depending on setup
```

> If the frontend expects a running backend, follow the backend README (link at top) and start it before testing protected flows (like Stripe webhooks or authenticated routes).

---

## Run with the backend

1. Clone and start the backend:

```bash
git clone https://github.com/mahatab6/Node-Talk-Server-Side
cd Node-Talk-Server-Side
# follow the server README to run it (install envs, start)
```

2. Point `VITE_API_BASE_URL` (or `REACT_APP_API_BASE_URL`) to your backend host (e.g. `http://localhost:3000`).

3. Start both services and test full flows (auth, posting, Stripe membership). If you use Stripe webhooks, consider `ngrok` to expose the backend for webhook testing.

---

## Build & deploy

**Build**

```bash
npm run build
# or
# yarn build
```

**Deploy**

* Netlify or Vercel work well for SPA frontends. Connect your Git repository and set environment variables in the hosting dashboard.
* For Netlify, ensure the build command matches your `package.json` and the publish directory is `dist` (vite) or `build` (CRA).

**Tip:** Use branch previews for PRs and enable automatic redeploys for the `main` branch.

---

## Project roadmap

* Real-time notifications (mentions, replies)
* Post analytics dashboard (views, growth charts)
* Tag-based topic pages
* Admin activity logs & audit trail
* Improved moderation tools & reporting UI

---

## Contributing

1. Create an issue describing the feature or bug.
2. Fork the repo, create a branch: `feature/your-feature-name`.
3. Make changes, write tests where appropriate.
4. Open a PR and reference the issue.

Add a short `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for clarity.

---

## Helpful tips to make the README stand out

* Add 1–2 GIFs showing the most important flows (post creation + payment flow).
* Use a short demo video or Loom link.
* Add badges (build, netlify, license, issues) at the top.
* Show `npm` install & run command examples with copy-to-clipboard buttons (if you host README on a static site).
* Add a short "How to test" section for QA steps (create user, create post, upgrade to premium, check admin panel).

---

## contact

Questions or help? Open an issue on this repo or contact the maintainer.

---
