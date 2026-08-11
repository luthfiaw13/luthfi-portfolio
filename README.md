# Luthfi Awaludin — Personal Portfolio

A responsive single-page portfolio built with React, Vite, and Tailwind CSS. The design is intentionally restrained, professional, data-oriented, and optimized for recruiter scanning.

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local address such as `http://localhost:5173/`. Open that address in your browser.

## Production build

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

## Where to update content

Most portfolio content is centralized in:

```text
src/data/portfolio.js
```

This file contains project descriptions, technologies, screenshot metadata, live project links, experience, skills, and certifications.

## Project screenshots

Actual project screenshots are stored in:

```text
public/projects/
```

Current assets:

- `kimia-farma-dashboard-1.webp`
- `kimia-farma-dashboard-2.webp`
- `kitchen-equipment-dashboard.webp`
- `excel-dashboard.webp`
- `bakul-home.webp`
- `bakul-chatbot.webp`

The source screenshots were optimized to WebP for faster loading while keeping enough resolution for project-detail previews.

## Project links currently configured

- Kimia Farma Performance Analytics — Live Google Looker Studio dashboard
- Kitchen Equipment Sales Analysis — Live Google Looker Studio dashboard
- BAKUL Kahuripan Rule-Based Chatbot — Live BAKUL Kahuripan website
- Microsoft Excel Business Analysis Dashboard — screenshot only; no public live URL because the project is an Excel workbook

## Main components

- `Navbar.jsx` — sticky desktop/mobile navigation
- `DashboardPreview.jsx` — lightweight analytics visual used in the hero section
- `ProjectMedia.jsx` — reusable real-project screenshot renderer
- `ProjectCard.jsx` — recruiter-focused project summary card
- `ProjectModal.jsx` — project detail modal with workflow, real screenshots, insights, recommendations, and project links
- `SectionHeading.jsx` — reusable section title pattern
- `Footer.jsx` — simple footer

## Accessibility and responsiveness

- Semantic sectioning and headings
- Keyboard-closeable project modal (`Escape`)
- Visible focus states
- Reduced-motion support
- Mobile navigation menu
- Responsive project grid and stacked project details
- Descriptive alt text for project screenshots
