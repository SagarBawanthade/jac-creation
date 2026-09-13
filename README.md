# Jac Creation — Architecture Studio
> **Round 2 Assignment: Home Page Design & Development**  
> Prepared for: **A.N.C (Alrize Nex Cell)** | Full Stack Developer Candidate  
> Classification: **CONFIDENTIAL | Evaluation Purpose Only**

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 🏛️ Project Overview

**Jac Creation** is an architecture studio working across residential, hospitality, and public-space design. Their portfolio spans everything from private cliffside homes to city-shaping master plans and cultural pavilions — always with an emphasis on how a place *feels to live in*, not just how it looks.

* **Hero Statement / Tagline**: *"Welcome Home. To The Extraordinary."*
* **Core Philosophy Statement**: *"We Design Experiences, Not Just Structures."*
* **Brand Voice Statement**: *"Architecture as a quiet act."*
* **Tone**: Quiet luxury, confident, understated, and editorial.

---

## 🔗 Live Deployment & Source Code

* **Live Deployment**: [Jac Creation on Vercel](https://jac-creation.vercel.app) *(or your Vercel deployment link)*
* **Source Code**: [GitHub Repository — SagarBawanthade/jac-creation](https://github.com/SagarBawanthade/jac-creation)

---

## 📑 Brief Section Compliance

The home page implements all 8 mandatory sections specified in Section 4 of the project brief, maintaining verbatim copy and editorial fidelity:

| # | Section | Brief Requirement | Implementation Details |
|---|---|---|---|
| **1** | **Navigation Bar** | Logo (left) + `Home / Projects / Gallery / About Us / Contact Us` (right) | Minimalist fixed navbar with dark/light background adaptation, exact 5 requested links, smooth scroll anchors, full-screen mobile menu drawer, and direct consultation trigger. |
| **2** | **Hero Section** | Full-bleed architectural photo, hero headline (*"Welcome Home. To The Extraordinary."*), *"Scroll for more"* cue | Luminous 201 KB WebP parallax hero image, exact headline with gold italic emphasis, pulsing scroll cue linked to `#about-us`, and geographic coordinate stamp (`38°42'50"N · 9°08'22"W`). |
| **3** | **Philosophy Section** | Eyebrow (*"Philosophy"*), headline (*"We Design Experiences, Not Just Structures."*), paired with lifestyle/interior image | Warm travertine cream panel (`#FAF7F2`), exact eyebrow and headline, local high-res WebP interior image (`philosophy.webp`), founding badge (`Est. 2006 · Lisbon`). |
| **4** | **The Framework** | Approach copy on warm accent background + `Neighbourhood → City → Region` scale indicator | Minimalist warm graphite backdrop (`#12100E`), all 4 approach paragraphs verbatim from Section 2, elegant scale continuum with proportional nodes (10px, 18px, 28px: $1:500$, $1:2,500$, $1:10,000$). |
| **5** | **Selected Work** | Eyebrow (*"Selected Work"*), headline (*"A portfolio shaped by material, climate, and craft."*), category grid | Exact eyebrow and headline, 3 category cards: *Modern residential project*, *Interior space*, and *Commercial building*, with interactive monograph inspection modal. |
| **6** | **Featured Projects** | Horizontal scrolling/panel gallery (*"Projects in motion."*), 2–3 sample projects | Horizontal panel carousel featuring: <br>1. **Casa Atlântica** (verbatim description)<br>2. **Pavilhão do Silêncio** (cultural pavilion)<br>3. **Maison Lumière** (hospitality retreat)<br>With arrow navigation, progress bar, and monograph modal. |
| **7** | **Brand Statement** | Centered full-width statement: *"Architecture as a quiet act."* | Monumental, centered full-width display with golden glow and atmospheric architectural backdrop. |
| **8** | **CTA / Footer** | *"Let's Work Together"* heading, *"Book an Appointment"* button, footer nav (`Work / About / Contact`, `LinkedIn / Instagram`), copyright line | Warm stone CTA (`#FAF6F0`), interactive Appointment Modal trigger, atelier address block (Lisbon & Porto), exact footer nav, LinkedIn & Instagram links, copyright line. |

---

## ✨ Architectural & UX Innovations

1. **Interactive Project Monograph Modal (`ProjectModal.tsx`)**:
   Clicking on any project in *Selected Work* or *Featured Projects* opens an editorial monograph detailing the architectural concept, material specifications (*honed limestone, charred cedar, brushed bronze*), location, and completion year.

2. **Interactive Consultation Booking Modal (`AppointmentModal.tsx`)**:
   Clicking *"Book an Appointment"* opens a tailored architectural inquiry flow allowing prospective clients to select project typologies (*Residential, Hospitality, Civic*) and budget tiers with immediate confirmation feedback.

3. **Adaptive Logo Rendering (`JacLogo.tsx`)**:
   Automatically adapts to its background using `mix-blend-mode: screen` on dark sections and `mix-blend-mode: multiply` on the light cream footer, ensuring the gold mark renders cleanly without white bounding boxes.

4. **Visual Rhythm & Breathability**:
   The page avoids monotonous dark walls by alternating deep obsidian charcoal sections with warm limestone and travertine panels (`#FAF7F2` in Philosophy and `#FAF6F0` in CTA Footer).

---

## 🎨 Visual & Brand Guidelines

* **Color Palette**:
  * **Accent Gold**: `#C5A059` / `#A68037` / `#E6C687` (warm champagne / brushed gold)
  * **Dark Sections**: `#070706` / `#0C0B0A` / `#12100E` (charcoal & warm graphite)
  * **Warm Neutral Grey**: `#B3ABA0` / `#8E8578` (architectural annotations)
  * **Textured Cream / Stone Beige**: `#FAF6F0` / `#FAF7F2` (limestone CTA & Philosophy)
* **Typography**:
  * **Display Headlines**: **Cormorant Garamond** (Google Fonts editorial luxury serif)
  * **Navigation, Labels & Body**: **Inter** (clean, readable modern sans-serif)
* **Photography**: Minimalist modern structures, natural materials (stone, timber, glass), and indoor-outdoor living.

---

## ⚡ Technical Quality & Performance

* **Next-Gen WebP Compression**:
  * Hero background: **2.3 MB PNG → 201 KB WebP** (**91% reduction**).
  * Philosophy image: **1.9 MB PNG → 155 KB WebP**.
* **Core Web Vitals Optimization**:
  * `fetchpriority="high"` and `loading="eager"` on the hero image for instant Largest Contentful Paint (LCP).
  * Below-the-fold assets use `loading="lazy"`.
  * Production JS bundle: **127 KB gzipped** | Production CSS: **8.9 KB gzipped**.
* **Strict Code Quality**:
  * Strict TypeScript compilation (`tsc -b`, `noUnusedLocals`, `noUnusedParameters`).
  * Passes `eslint .` with **0 errors and 0 warnings**.
* **Fluid Responsiveness**:
  * Fluid CSS typography (`clamp(...)`) ensures headlines scale seamlessly from 320px mobile screens to 4K desktop displays.
  * Mobile drawer menu locks body scroll (`overflow: hidden`) to prevent background scroll-bleed.

---

## 🚀 Local Development & Build

### Prerequisites
* Node.js 18+ or 20+
* npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/SagarBawanthade/jac-creation.git

# Navigate into project directory
cd jac-creation

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Linting
```bash
# Run strict TypeScript verification & Vite build
npm run build

# Run ESLint check
npm run lint
```

---

## 📂 Project Structure

```
jac-creation/
├── public/
│   ├── favicon_io/         # Favicon assets
│   └── logo/
│       └── Jac_Logo.png    # Official studio logo mark
├── src/
│   ├── assets/
│   │   ├── homebg.webp     # High-res optimized hero render (201 KB)
│   │   └── philosophy.webp # High-res optimized interior render (155 KB)
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive header with mobile drawer
│   │   ├── Hero.tsx             # Full-bleed parallax hero section
│   │   ├── Marquee.tsx          # Editorial discipline ticker ribbon
│   │   ├── Philosophy.tsx       # Warm travertine philosophy panel
│   │   ├── Stats.tsx            # Studio distinctions & credentials
│   │   ├── Framework.tsx        # Minimalist methodology & scale continuum
│   │   ├── SelectedWork.tsx     # 3-category portfolio grid
│   │   ├── FeaturedProjects.tsx # Horizontal carousel gallery
│   │   ├── BrandStatement.tsx   # Centered closing brand statement
│   │   ├── ContactFooter.tsx    # Cream CTA block & studio footer
│   │   └── ui/
│   │       ├── AppointmentModal.tsx # Interactive consultation booking modal
│   │       ├── ProjectModal.tsx     # Interactive monograph case study modal
│   │       ├── JacLogo.tsx          # Dual-blend-mode logo component
│   │       ├── Eyebrow.tsx          # Standardized section eyebrow label
│   │       ├── Reveal.tsx           # Framer motion viewport reveal wrapper
│   │       └── icons.tsx            # SVG social icons (LinkedIn & Instagram)
│   ├── App.tsx             # Root page composition
│   ├── index.css           # Global Tailwind v4 directives & typography
│   └── main.tsx            # React application entry point
├── index.html              # HTML shell with Google Fonts & SEO metadata
├── tsconfig.app.json       # Strict TypeScript configuration
└── package.json            # Project dependencies & scripts
```

---

## ⚖️ Evaluation Criteria Mapping

1. **Fidelity to Brand Tone, Content & Section Structure**:
   All 8 required sections are present in sequence with verbatim copy from Sections 1, 2, and 4 of the brief.
2. **Visual / UX Quality & Attention to Detail**:
   Editorial typography, quiet luxury pacing, custom project monograph modal, and interactive consultation appointment flow.
3. **Front-End Code Quality & Responsiveness**:
   Strict TypeScript build (0 errors), ESLint compliance (0 warnings), 91% asset size optimization, and responsive across all breakpoints.

---
*Developed with architectural precision for Alrize Nex Cell (A.N.C).*
