# Rishi Aryan Modi - Personal Editorial Portfolio

A responsive, single-page resume website for Rishi Aryan Modi, a BBA student at IIM Bangalore and aspiring entrepreneur. Built for a university Web Development assignment using semantic HTML5, CSS3, and minimal vanilla JavaScript.

The current design uses monochrome light and dark themes, oversized typography, asymmetric layouts, and restrained olive accents. The header and footer no longer display the earlier RM monogram.

## Run locally

Open [index.html](index.html) directly in a modern browser. No installation, package manager, build command, or server is required.

On the original development computer, paste this into the browser address bar:

```text
file:///C:/Users/LENOVO/Desktop/Personal_Website_Rishi/index.html
```

Keep `index.html`, `style.css`, and `script.js` in the same folder. Refresh the browser after editing; use a hard refresh if older styles remain cached.

Inter is requested from Google Fonts at weights 400, 500, and 600. The site uses Arial and the browser's sans-serif fallback when the font cannot load. Open Sauce font files are not included. Layout, content, and local interactions work without an internet connection; external profile links require one.

## Project files

| File | Responsibility |
| --- | --- |
| [index.html](index.html) | Semantic page content, navigation, contact links, metadata, and the small saved-theme initialization script. |
| [style.css](style.css) | Design tokens, both themes, typography, responsive layouts, timeline, hover/focus styles, and reduced-motion support. |
| [script.js](script.js) | Mobile navigation, active-section tracking, theme controls and persistence, and the copyright year. |
| [README.md](README.md) | Project overview, local usage, implementation notes, and verification guidance. |

There are no framework dependencies, bundled images, backend services, or generated build artifacts.

## Page content

| Section | Anchor | Presentation |
| --- | --- | --- |
| Home | `#home` | Staggered name heading, student identity, introduction, and journey/contact links. |
| About | `#about` | Two-column biography and three areas of personal focus. |
| Personal philosophy | `#philosophy` | "Failure Feels Better Than Regret." with a short personal explanation. |
| Education | `#education` | Editorial timeline with institution names, courses, and dates. |
| Professional interests | `#expertise` | Asymmetric cards for marketing, HR management, business strategy, and entrepreneurship. |
| Entrepreneurial exploration | `#entrepreneurship` | Ongoing business model conceptualization and a four-step numbered process. |
| Intellectual interests | `#interests` | Numbered rows covering geopolitics, stock markets, and current affairs. |
| Hobbies | `#hobbies` | Cooking, fitness, reading, writing, and sketching in text rows. |
| Contact | `#contact` | "Let's Connect." with email, telephone, LinkedIn, and GitHub links. |

The sticky navigation links to Home, About, Education, Expertise, Entrepreneurship, Interests, and Contact. The philosophy section uses About's active navigation state; hobbies use Interests. The footer includes the full name, student/entrepreneur identity, copyright notice, and Back to Top link.

Education details are IIM Bangalore, BBA in Digital Business and Entrepreneurship (2026-2029); Delhi Public School, Noida (2024-2026); and The Khaitan School (2018-2024). Business concepts are described as ongoing exploration rather than launched companies or completed commercial work.

## Theme and navigation behavior

- The initial theme follows `prefers-color-scheme` unless the visitor has saved a light or dark preference.
- The toggle applies `data-theme="light"` or `data-theme="dark"` to the root HTML element and saves the choice under the `ram-theme` local-storage key.
- The script in the document head reads the saved theme before the stylesheet paints. Storage errors are caught, so switching still works for the current page when persistence is unavailable.
- The toggle updates its accessible label, pressed state, visible target-theme label, and browser theme-color metadata. Its text label is hidden at tablet widths; its accessible label remains available.
- The mobile menu is enabled at widths of 850px and below. It closes after selecting a navigation link, clicking outside the navbar, pressing Escape, or crossing that breakpoint. Escape returns focus to the menu button.
- Active-section tracking uses a passive scroll listener and `requestAnimationFrame`, updating `aria-current="location"` on the matching navigation link.
- Without JavaScript, section links remain visible and wrap on small screens; the theme/menu buttons remain hidden. CSS still follows the system color preference.
- JavaScript updates the copyright year from the visitor's device date; the HTML fallback is 2026.

## Design system and responsive layout

Semantic custom properties in `:root` control colors, fonts, spacing, corner radii, and transition timing. Theme selectors override colors throughout the page.

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#FFFFFF` | `#101010` |
| Primary text | `#111111` | `#FFFFFF` |
| Secondary surface | `#F4F4F2` | `#1B1B1B` |
| Muted text | `#666666` | `#A5A5A5` |
| Accent | `#403C2C` | `#C4BEA7` |

The spacing scale is 8, 16, 24, 32, 48, and 64px, with section-specific spacing. Content is limited to 1376px with 32px desktop side gutters and 20px phone gutters. Radius tokens are 10px for buttons, 16px for small surfaces, 24px for cards, and 32px for the prominent feature card.

Responsive rules cover laptop widths of 1025-1439px and maximum widths of 1024, 850, 699, and 360px. The hero heading scales to 160px on a large desktop, about 128-130px on laptops, about 100px on tablets, and roughly 48px on a 390px phone (44px minimum). The expertise grid becomes a single column below 700px; the business process changes from four columns to two, then one on narrow phones.

## CSS assignment concepts

| Concept | Examples in the stylesheet |
| --- | --- |
| Element, class, and ID selectors | `body`, `h1`, `p`, `section`; `.hero`, `.navbar`, `.card`; `#home`, `#about`, `#education`. |
| Variables and text formatting | Semantic colors, font families, spacing/radius scales, line height, font weight, letter spacing, and `clamp()` typography. |
| Flexbox | Navbar, buttons, feature summaries, section headers, and footer alignment. |
| CSS Grid | Twelve-column hero and expertise layouts, asymmetric spans, biography columns, and responsive numbered rows. |
| Display and positioning | Hidden controls, block/inline-flex layouts, relative sections, absolute timeline markers, sticky header, and fixed skip link. |
| Box model | `border-box`, margins, padding, borders, gaps, and rounded surfaces. |
| Pseudo-classes/elements | `:hover`, `:focus-visible`, `:active`, `::before`, and `::after`; CSS counters number interest/hobby rows. |
| Motion | Underline transforms, color/opacity transitions, and a gentle hero entrance keyframe. |
| Responsive design | Media queries, flexible columns, wrapping controls, and reduced-motion overrides. |

Comments in `style.css` identify the techniques for assignment discussion.

## Accessibility and contact links

The page includes semantic landmarks, one main heading, labeled sections, a keyboard skip link, visible focus indicators, and accessible menu/theme button states. Menu and theme controls have minimum 44px heights; primary CTA buttons have minimum 48px heights. Reduced-motion preferences disable smooth scrolling, animations, and transitions.

Email and phone links use `mailto:` and `tel:`; completing those actions depends on applications configured on the visitor's device. LinkedIn and GitHub open in new tabs, announce that behavior in the link text, and use `rel="noopener noreferrer"`. The site has no contact form or backend submission endpoint.

## Maintenance

- Edit biography, education, interests, and contact destinations in `index.html`.
- Change colors, typography, spacing, and layout rules in `style.css`; use semantic variables so both themes stay consistent.
- Keep section IDs and navigation hashes synchronized. If adding a navigation item, review `updateActiveLink()` in `script.js` and the mobile layout.
- Keep the early theme initialization in `index.html` and the toggle logic in `script.js` on the same storage key (`ram-theme`). Remove that key in browser developer tools to restore automatic system-theme selection.
- Preserve UTF-8 encoding when saving files so arrows, punctuation, and the theme symbol display correctly.

## Verification

During the editorial redesign, headless Chrome checks at exact widths of 1440, 1025, 810, 390, and 320px found no horizontal overflow. Theme switching, saved-theme persistence after reload, menu opening, Escape dismissal with focus return, link dismissal, and navigation without JavaScript passed. Representative desktop/tablet/phone screenshots were reviewed. The subsequent monogram removal was checked for remaining logo markup and balanced CSS braces; the full browser suite was not repeated for that small edit.

For future changes, check the five viewport widths above in both themes, then verify keyboard focus, section links, mobile menu dismissal, reduced-motion behavior, and JavaScript-disabled navigation. A JavaScript syntax check is available if Node.js is installed:

```sh
node --check script.js
```

There is no committed automated test suite, package configuration, or build pipeline.

## Repository and delivery scope

Source repository: [rishiaryanmodi/Personal_Website-](https://github.com/rishiaryanmodi/Personal_Website-), with `main` as the working branch. The initial website source was committed and pushed there. Repository publication is separate from website hosting: GitHub Pages deployment and the assignment PDF have not been configured or generated in this work.
