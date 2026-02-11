# Jack Winter — Personal Portfolio

Personal portfolio and profile site built with **Astro**, focused on performance, simplicity, and long-term maintainability.

Live at:  
https://jackwinter.vercel.app

---

## ✨ Overview

This site serves as my public professional profile:

- CV-style overview
- Selected work and systems
- Contact details
- Future home for writing and case studies

The goal is to keep the site:

- fast
- readable
- low-maintenance
- easy to extend over time

---

## 🧱 Tech Stack

- **Astro** — static-first framework
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling and design tokens
- **Biome** — formatting and linting
- **Vercel** — hosting and CI/CD

Astro’s islands architecture keeps JavaScript to a minimum while allowing interactivity where needed.

---

## 📁 Project structure & conventions

- **`src/layouts/`** — Base layout (meta, header, footer). Import with `@/layouts/...`.
- **`src/pages/`** — One file per route. Use `BaseLayout` and keep page content in the slot.
- **`src/features/`** — Feature modules: each feature (e.g. `profile/`) contains its components, data, and types. Import with `@/features/<feature>/...`.
- **`src/lib/`** — Shared data and config: `nav`, `site.constants` (site name, base URL). Import with `@/lib/...`.
- **`src/styles/`** — Global CSS and Tailwind theme (design tokens in `@theme`).

**Imports:** Use the `@/` alias for `src/` (e.g. `@/layouts/BaseLayout.astro`, `@/lib/nav`).

**Headings:** One `<h1>` per page (the page title). Use `<h2>` for sections (e.g. Core skills, Experience).

**Copy and tokens:** Site name and canonical base URL live in `src/lib/site.constants.ts` so the layout and meta stay in sync.

---

## 🌍 Deployment

The project is deployed on **Vercel**.

- Every push to `main` triggers a production deployment
- Preview deployments are created automatically for pull requests

---

## 🔮 Future Improvements

- Add writing / blog section (MDX)
- Expand case studies with deeper technical breakdowns
- Light interactive components using Astro islands
- Custom domain

---

## 📬 Contact

- Website: https://jackwinter.vercel.app
- GitHub: https://github.com/j4ckwinter
- LinkedIn: https://www.linkedin.com/in/jack-winter-409a09a4/
