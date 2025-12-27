# Chandrabhan — Portfolio

Live: https://chandrabhan.me

A modern, responsive personal portfolio built with **Vite + React + TypeScript + Tailwind CSS (shadcn/ui)**. It showcases my projects, skills, certifications, and contact details.

## Highlights

- Clean, mobile-first UI with smooth section reveals and animated hero background
- Fast Vite build, TypeScript safety, and component-driven structure
- SEO-friendly basics (robots/sitemap, OpenGraph assets)
- Resume download available at `public/Chandrabhan_Resume.pdf`

## Sections in the Website

- Home
- About
- Skills
- Projects
- Certifications
- Contact

## Featured Projects (as shown on the site)

| Project | Live | Code |
| --- | --- | --- |
| Personal Portfolio Website | — | https://github.com/dudhwal1802/My-Portfolio |
| Satguru Packers & Movers — Business Website | https://dudhwal1802.github.io/satguru-packers-movers/ | https://github.com/dudhwal1802/satguru-packers-movers |
| Fake News Detection Web App (ML + NLP) | https://fake-news-detect-by-cb.streamlit.app/ | https://github.com/dudhwal1802/fake-news |

> Note (Fake News project): Educational project only — predictions should not be used for real-world decision making.

## Tech Stack

**Frontend**

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui (Radix UI primitives)
- lucide-react icons

**Quality / Tooling**

- ESLint

## Getting Started (Local Setup)

### Prerequisites

- Node.js (LTS recommended)

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

#### Windows PowerShell note

If PowerShell blocks `npm.ps1` due to execution policy, run from CMD/Terminal, or use:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run build
```

## Project Structure (Quick Guide)

- `src/pages/Index.tsx` — page composition (sections order)
- `src/components/*` — major sections (Hero/About/Skills/Projects/Certifications/Contact)
- `src/components/ui/*` — shadcn/ui components
- `public/` — static assets (resume PDF, robots.txt, sitemap.xml, icons)

## Deployment

- The repository includes a `CNAME` for the custom domain: `chandrabhan.me`.
- Build output is generated in `dist/`.

## Contact

- Email: contact.chandrabhan@gmail.com
- GitHub: https://github.com/dudhwal1802
- LinkedIn: https://www.linkedin.com/in/chandrabhan1802/

