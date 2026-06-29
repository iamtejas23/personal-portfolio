---
name: project-portfolio
description: Personal portfolio — tech stack, architecture, UI design decisions made during the full audit and upgrade
metadata:
  type: project
---

React (CRA 5) SPA portfolio for Tejas Mane (DevOps Engineer / Frontend Developer).

**Key files:**
- `src/index.css` — CSS design-system variables (colors, shadows, radii, fonts, animations)
- `src/App.js` — Router wrapper; `<main class="page-content">` handles responsive sidebar offset; `<Footer>` appended here for all routes
- `src/App.css` — `.page-content` responsive `margin-left: 250px` only on ≥ 769px; mobile adds 56px top padding for hamburger

**Design tokens** (CSS vars on `:root`):
- Accent: `#6366f1` / light `#818cf8`; backgrounds `#14131a` / `#1c1b23`; text `#f0f0f5` / `#a0a0b8`
- Fonts: Inter (loaded in `index.html`) + Bungee Spice (name only)

**Layout pattern:** Fixed `aside.sidenav` (250px) + `main.page-content` with `margin-left` on desktop — sidebar does NOT affect page flow.

**Why:** Full audit fixed double `margin-left` bug (Home had 250px in `home.css` AND `App.css`), `position:absolute` Contact layout, invisible dark-on-dark BlogCard text, white Footer on dark theme, broken Hero Resume `<Link>`, unused FontAwesome CDN, and "About Me V2" title.
