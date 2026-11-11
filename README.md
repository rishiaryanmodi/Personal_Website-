# Rishi Aryan Modi — Editorial Portfolio

A personal resume website built with semantic HTML5, CSS3, and minimal vanilla JavaScript. The redesign preserves the original biography, education, professional interests, conceptual business exploration, hobbies, and contact links.

## Viewing

Open `index.html` directly in a modern browser. No installation, framework, server, or build step is required. Keep `style.css` and `script.js` beside it. Inter is loaded from Google Fonts when online, with Arial/system fallbacks. Open Sauce fonts were not present locally; no unverified font URLs are used.

## Design

Monochrome light and dark themes, oversized staggered name typography, a dedicated “Failure Feels Better Than Regret.” statement, editorial education timeline, asymmetric expertise bento, numbered business process, and text rows for intellectual interests and hobbies. Flat surfaces and restrained olive accents replace gradients, geometric artwork, repeated card grids, and decorative icons.

Semantic color variables drive both themes. The initial theme follows the operating system unless a saved preference exists. The toggle saves explicit choices when local storage is available; it still works in memory if storage is blocked. A small script in the head applies saved preferences before the stylesheet paints.

## Files

- `index.html`: page content, semantic landmarks, navigation, theme control, and personal motto.
- `style.css`: commented design tokens, editorial layouts, light/dark palettes, and responsive rules.
- `script.js`: mobile navigation, Escape/outside-click dismissal, section tracking, theme persistence, and dynamic copyright year.

## CSS assignment concepts

- Element selectors (`body`, `h1`, `p`, `section`), class selectors (`.hero`, `.navbar`, `.card`), and ID selectors (`#home`, `#about`, `#education`).
- Custom properties for colors, font families, spacing, radii, and transitions.
- Flexbox for navigation, buttons, section headers, and footer; Grid with unequal spans for the hero and expertise bento.
- Display properties, relative/absolute timeline positioning, sticky navigation, and a fixed keyboard skip link.
- Box sizing, margins, padding, borders, and a consistent radius scale.
- `:hover`, `:focus-visible`, `:active`, `::before`, and `::after`.
- Responsive media queries, gentle keyframe entrance animation, transforms, and theme transitions.
- Reduced-motion support and consistent typography, alignment, and hierarchy.

## Accessibility

One main heading, ordered section headings, semantic navigation and landmarks, visible keyboard focus, accessible toggle labels and states, 44px minimum navigation/control targets, and a skip link. The menu remains visible without JavaScript. External social links announce new-tab behavior and use `noopener noreferrer`. Email and phone links use `mailto:` and `tel:`.

## Scope

The business concepts remain explicitly described as ongoing exploration. No achievements, companies, testimonials, or professional experience have been invented. Deployment and the assignment PDF remain outside this change.

## Verification

Passed local checks for JavaScript syntax, HTML nesting, unique IDs, anchor destinations, asset existence, and CSS brace balance. Headless Chrome checks at exact viewport widths of 1440, 1025, 810, 390, and 320px found no horizontal overflow. Theme switching produced the specified light and dark backgrounds; the saved preference survived reload. Mobile-menu opening, Escape dismissal with focus return, and link dismissal passed. Navigation remained visible with JavaScript disabled. Desktop/tablet/phone screenshots were visually reviewed, including the motto, expertise, hobbies, and narrow contact layout.
