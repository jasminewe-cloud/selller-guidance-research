# Zillow Constellation Design System

A Claude-friendly distillation of **Constellation**, the official Zillow Group design system for web (v10). This folder contains the brand foundations, tokens, iconography, and UI-kit components you need to design Zillow-branded screens, prototypes, and marketing artifacts.

> "Constellation" is Zillow Group's component library and token suite. It powers Zillow.com, StreetEasy, Trulia, and internal Zillow Group tools. This skill focuses on the **Zillow** theme (the default brand skin).

---

## Source materials used to build this skill

| Source | What it gave us |
|---|---|
| **Figma — Web v10 Component Library — Constellation.fig** | Component anatomy, variants, states, sizing for every component (Buttons, Inputs, Cards, Banners, Tabs, Avatars, Chips, Modals, Toasts, etc.) |
| **Figma — Shared Foundations — Constellation.fig** | Color palettes, typography ramps, spacing, radius, elevation, iconography system, illustration guidelines, logo guidelines, accessibility annotations. |
| **Figma — VR Migration Android + Web.fig** | In-progress "Visual Refresh" migration context — Zillow's product-surface evolution. |
| **Codebase — `constellation-for-claude-design/`** | The production monorepo: `constellation-tokens` (design tokens JSON), `constellation-icons` (350+ SVG icons), React components (`ZButton`, `ZCard`, `ZTextInput`, etc.). Source of truth for exact token values. |
| **`Product-Brand Guidelines_September 2024.pdf`** | Consumer brand guidelines — Object Sans as brand headline font, Inter as UI/body, Zillow Blue + Zillow Orange, logo lockups, tone. |
| **`uploads/inter-variable.woff2`**, **`uploads/object-sans-heavy.woff2`** | The official webfont files. Copied into `fonts/`. |

These are not linked publicly; store these references for later if you regain access.

---

## Index — what's in this folder

```
README.md                 ← you are here
SKILL.md                  ← skill manifest (Claude Code compatible)
colors_and_type.css       ← all design tokens as CSS variables + semantic element styles
fonts/
  inter-variable.woff2    ← body/UI font (100–900 weights)
  object-sans-heavy.woff2 ← brand heading font (weight 900 only)
assets/
  logo/                   ← Zillow wordmark + mark SVGs
  icons/outline/          ← 1.5px-stroke outline icons (primary usage)
  icons/filled/           ← solid icons for selected/active states
  social/                 ← Facebook, Instagram, LinkedIn, Pinterest, TikTok, X, YouTube
preview/                  ← cards rendered in the Design System tab
ui_kits/
  zillow-web/             ← high-fidelity click-thru of Zillow.com core flows
```

---

## Brand context

**Zillow** is the largest U.S. real-estate marketplace. The product surface covers:

- **For Sale** — home search, HDP (home-details page), saved homes, pre-approval, agent contact
- **For Rent** — apartment search, application, lease
- **Showcase** — premium listings, richer media
- **Home Loans** — Zillow Home Loans mortgage + pre-approval
- **Premier Agent** — tools for real-estate professionals
- Companion mobile apps for iOS/Android

Constellation ships one **component** library with two **theme** skins — Zillow (blue) and StreetEasy. Everything in this skill targets the Zillow skin.

---

## Content fundamentals

**Voice.** Plainspoken, helpful, confident. Zillow writes the way a knowledgeable-but-laid-back agent would talk. Copy is short, sentence-case, active-voice, and almost always directly addresses *you*.

**Casing.** **Sentence case** everywhere. Page titles, buttons, menu items, even major calls-to-action. Never Title Case. Never ALL CAPS except the tiny "eyebrow" labels above a heading (rare).

**Pronouns.** Second person — "Save your search," "Find out what your home is worth," "See homes near you." First person ("I'm interested") appears inside user-authored UI (contact forms, agent messages).

**Button copy.** Verb-first and specific. Not "Submit" — "Save search", "Request a tour", "Get pre-approved", "Skip tour", "Start application". 1–3 words in most cases.

**Numbers + units.** Always formatted (`$650,000`, `3 bd`, `2 ba`, `1,850 sqft`, `0.24 acres`). Bedroom/bathroom abbreviations are **bd / ba** (not "beds/baths" on cards, but spelled out inline in body). Price is the most prominent number on any listing card.

**Data density.** Cards and lists are information-dense. A property card must show price, beds, baths, sqft, address, and status. Don't add filler decoration — let the data speak.

**No emoji, ever.** Constellation uses icons from its own system. Emoji look off-brand.

**Tone by context:**
- Search / browse: neutral, utilitarian
- Empty states: warm, encouraging — "No saved homes yet. Tap the heart to save any listing for later."
- Errors: concrete + actionable — "We couldn't save this home. Check your connection and try again." Never blame the user.
- Success/confirm: specific — "Tour requested for Fri, May 3 at 2:30 PM" (not "Success!").
- Upsell: factual, never pushy — "Homes like yours sell for $15k more with Showcase."

**Vibe.** Trustworthy, transactional, not chatty. You are helping someone make the largest purchase of their life — the tone reflects that.

---

## Visual foundations

### Color
Zillow's palette is primitive-scaled (50→950 per hue) and accessed through semantic tokens. See `colors_and_type.css`.

- **Brand primary:** `--blue-600` `#1c50ce` ("Zillow Blue"). Used for all interactive actions: primary buttons, links, selected chips, focused inputs.
- **Brand accent:** `--orange-500` `#ff4d29` ("Zillow Orange"). Reserved — used for the Zillow wordmark, Showcase/premium upsells, and occasional highlight moments. Never for generic CTAs.
- **Neutrals:** a cool gray scale from `--gray-50` to `--gray-950`. `--gray-900` is body text, `--gray-600` is secondary text.
- **Semantics:** red (destructive), green (success), yellow (warning), teal (info/secondary).
- **Surfaces:** white is the canonical background. `--gray-50` is used for grouped-content backgrounds and empty states.

### Typography
Two families, crisp hierarchy.

- **Object Sans (Heavy, 900)** — brand headline face. Tight, geometric, slightly condensed, very heavy stroke. Used for **all** headings (h1–h5), hero numbers, marketing eyebrows. Never used below 20px. Never used for body copy. We only ship the Heavy weight.
- **Inter (variable, 100–900)** — everything else. UI labels, body, captions, data. Almost always regular (400) or bold (700). Tabular numerals ON for prices.
- **Scale:** 10 / 12 / 14 / 16 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 / 60 px. See `--font-size-*` tokens.
- **Line height:** tight on Object Sans headings (1:1 on display, 1.25 below), comfortable on Inter body (1.5 for 16/14, 1.33 for 18).
- **Letter-spacing:** `-0.01em` on the two largest heading tiers; default elsewhere.

### Spacing
4-pixel grid. Tokens: `--space-100` (4) through `--space-2400` (96). Most layouts live on 8 / 16 / 24. Card inner padding is typically 16 or 20. Section vertical rhythm is 48–64.

### Radius
Rounded but restrained. Buttons: **capsule** (pill, 999px) for primary/secondary. Inputs & cards: `--radius-200` (8px). Hero cards: `--radius-400` (16px). No zero-radius surfaces. The pill is reserved for interactive controls — cards never go pill.

### Elevation (shadows)
Subtle, black-on-alpha, always `y`-offset. Four tiers:
- `--shadow-sm`: `0 1px 4px rgba(17,17,22,0.15)` — hover lift for cards
- `--shadow-sm-heavy`: `0 6px 16px rgba(17,17,22,0.30)` — hovering/dragging
- `--shadow-md`: `0 8px 20px rgba(17,17,22,0.15)` — popovers, menus
- `--shadow-lg`: `0 16px 30px rgba(17,17,22,0.15)` — modals

Focus ring is a distinctive **3-stop blue halo**: `0 0 0 2px #fff, 0 0 0 4px var(--blue-400), 0 0 0 6px var(--blue-600)`. This is the signature focus treatment — never replace with a single solid ring.

### Borders
- Default: `1px solid var(--gray-300)` (`#cdcdd3`)
- Subtle: `1px solid var(--gray-200)` (dividers inside cards)
- Strong: `1px solid var(--gray-600)` (selected chip outline)
- Focus: handled via the blue halo focus shadow (not a border change).

### Backgrounds & imagery
- **No gradient backgrounds** on UI surfaces. Flat white. Marketing moments may use a subtle `var(--gray-50)` section band — never purple/blue gradients.
- **Imagery is realistic photography** — homes, neighborhoods, interiors. Natural light, warm-to-neutral color grading. Never desaturated. Never grainy. No stock-business clichés.
- **Illustrations** (Constellation "spot" + "scene" set) are **line-based, editorial, 2-color max** — a heavy stroke in gray-900 with one accent fill, usually a blue or an orange. Used in empty states, onboarding, promotional banners. See `/Illustrations/ILLUSTRATION-GUIDELINES` in the Shared Foundations Figma.
- **No full-bleed photographic hero on forms or data pages** — photos live inside property cards and marketing modules.

### Animation & interaction
Restrained, functional, fast. Nothing bouncy.
- **Durations:** 120ms (hover/color fade), 200ms (default), 320ms (modal/drawer enter).
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` for out-transitions (most things), `cubic-bezier(0.4, 0, 0.2, 1)` for in-out (modals).
- **Hover:** primary buttons darken one step (blue-600 → blue-700). Cards lift with `--shadow-sm`. Links grow underline thickness from 1px to 2px.
- **Press/active:** primary buttons darken another step (blue-700 → blue-800). No scale shrink on buttons. Cards have no press state.
- **Focus:** the 3-stop halo (see above). Always visible — never `outline: none` without a replacement.
- **No page transitions, no parallax, no easter eggs.**

### Layout rules
- **Max content width:** 1280px for marketing/search; 1440px for dashboards; edge-to-edge for maps.
- **Gutters:** 24–32px on desktop; 16px on mobile.
- **Sticky elements:** global header (64–72px tall), filter bar on search, mobile bottom nav.
- **Card grid:** on search, desktop shows 3 columns with ~16px gap; tablet 2; mobile 1.
- **Transparency & blur** are used sparingly: map overlays use a `rgba(255,255,255,0.95)` backdrop with `backdrop-filter: blur(8px)`; photo carousel controls use a black 40% fill with white icon.
- **Corner radii are consistent within a surface** — a card's image, the card body, and the card's inner chips should all feel like the same radius family.

---

## Iconography

**Primary system:** Constellation's own icon library (`@zillow/constellation-icons`), ~350 SVGs, shipped as `/outline/Icon*Outline.svg` and `/filled/Icon*Filled.svg`. We copied a representative subset into `assets/icons/`.

- **Style:** 24×24 grid, `currentColor` stroke, **1.5px stroke weight**, rounded caps and joins. Outline is the default. Filled is reserved for selected/active toggle states (a saved heart, a filled home marker).
- **Sizing:** 16, 20, 24, 32, 40px. Default inline with text is 20px; standalone buttons use 24px.
- **Color:** inherits `currentColor`. Never multi-color by default (there is a `multi-color-icons` subset for data-viz/illustrative use only).
- **Naming convention:** `Icon{Name}Outline` / `Icon{Name}Filled` — preserve this naming.
- **No emoji. No unicode icons.** Both are explicitly off-brand.
- **Social icons** (`assets/social/`) are full-color and brand-locked — use as-is.

If you need an icon that isn't in `assets/icons/`, look in the `constellation-for-claude-design/packages/constellation-icons/src/{outline,filled}/` folder for the full set and copy it in. If the set somehow doesn't have what you need, Lucide (1.5px stroke, rounded caps) is the nearest match — flag the substitution.

---

## Usage quickstart

```html
<link rel="stylesheet" href="colors_and_type.css">
<div class="c11n">
  <h2>Find your way home</h2>
  <p>Search 2.5 million listings across the U.S.</p>
  <button class="btn btn-primary">Start searching</button>
</div>
```

Wrap your markup in a `.c11n` container so the CSS reset, font stack, and semantic element styles apply. See `ui_kits/zillow-web/` for a complete component kit.

---

## Substitutions & caveats

- **Object Sans** is proprietary (Pangram Pangram). We ship the Heavy (900) woff2 only, because that is the only weight Zillow ships. If you need a lighter weight of the brand face, use Inter in its place — do not fake a light Object Sans.
- **Inter** is from Google Fonts (OFL license).
- Some icon IDs in the Figma (`IconHomeOutline`, `IconShareOutline`, `IconSaveOutline`, `IconHomeFilled`) were not present as individual SVGs in the package snapshot; we drew spec-faithful replacements from the pseudocode and kept the naming convention.
- The Constellation Android and StreetEasy theme skins are out of scope for this skill — ask before using this for non-Zillow Group surfaces.
