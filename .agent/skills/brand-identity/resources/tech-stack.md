# Preferred Tech Stack & Implementation Rules - Black n Blue Events Logistics

## Core Stack

* **Framework:** React (Vite-powered)
* **Language:** JavaScript
* **Styling Engine:** Vanilla CSS (Modern Flexbox/Grid) with CSS variables derived from `design-tokens.json`.
* **Component Library:** "None - custom premium components"
* **Icons:** Lucide React
* **State Management:** React Context (for simple UI states)
* **Routing:** React Router DOM
* **Animation:** GSAP (ScrollTrigger) & Framer Motion

---

## Implementation Guidelines

### 1. Styling Rules

**Vanilla CSS Usage:**
* Use CSS Modules (`.module.css`) for component-specific styles.
* Global styles in `index.css` should define CSS variables from `design-tokens.json`.
* **Dark Mode:** The site is dark-themed by default. No toggle needed unless requested.
* **Reflexive Design:** Use `clamp()` for fluid typography and spacing.
* **Glassmorphism:** Use `backdrop-filter: blur()` for overlays and sticky headers.

### 2. Component Patterns

**Custom Premium Patterns:**
* **Buttons:** Use CSS transitions for subtle scale and glow effects. Primary CTAs use Electric Blue glow on hover.
* **Forms:** Floating labels or clean, minimal bordered inputs. Focus states use the Electric Blue ring.
* **Cards:** Use `overflow: hidden` with hover-scale effects on images. Subtle inner shadows for depth.
* **Headers:** Sticky navigation with a scroll-triggered class to reduce height and increase blur.

### 3. File Structure
```
src/
├── assets/           # Images, Videos, Fonts
├── components/
│   ├── ui/           # Buttons, Inputs, Cards
│   ├── layout/       # Navbar, Footer, Section containers
│   └── shared/       # Reusable business components
├── pages/            # Home, About, Services, Portfolio, Contact
├── styles/           # Global CSS and token definitions
├── hooks/            # useGsap, useScroll hooks
└── utils/            # Helper functions
```

### 4. Accessibility Requirements
* High contrast (White/Electric Blue on Black).
* Semantic HTML5 (main, section, header, footer).
* Descriptive `aria-label` for icon-only buttons.
* Keyboard-navigable portfolio filters.

### 5. Performance Rules
* **Images:** Use WebP where possible. Implement lazy loading for the Portfolio.
* **Animations:** Keep GSAP animations lightweight. Use `will-change` where necessary for performance.
* **Bundle:** Code-split routes using `React.lazy`.

---

## Forbidden Patterns
* ❌ Do NOT use Tailwind CSS (Vanilla CSS preferred for this aesthetic).
* ❌ Do NOT hardcode hex values outside of `index.css` variables.
* ❌ Do NOT use heavy component libraries like Material UI (keep it custom/premium).
* ❌ Do NOT use generic placeholder images (use brand-appropriate visuals).

---

## Approved Libraries

| Category | Approved Library | Purpose |
|----------|-----------------|---------|
| Animation | GSAP | High-end scroll and timeline animations |
| Animation | Framer Motion | Layout transitions and simple micro-interactions |
| Icons | Lucide React | Modern, clean vector icons |
| Scrolling | Lenis | Smooth scrolling experience |
| Routing | React Router | Multi-page navigation |
