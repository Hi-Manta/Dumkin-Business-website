# DUMKIN — Brand & Website Design System

*"Reviving Your Palate"*

A design reference for the Dumkin website build (and future social media assets), derived from the existing cart signage, menu boards, and seating area photography.

---

## 1. Brand Personality

Dumkin is a **street-food-to-sit-down** brand — it started as a food cart and is growing into a proper seating spot, but keeps its street-food energy: bright signage, grilled shawarma, warm string lights, concrete-and-steel textures. The website should feel:

- **Bold & appetite-driving** — big orange type, big food photography, no timidity.
- **Unpretentious** — this isn't fine dining. Friendly, fast, a little playful.
- **Urban / industrial-casual** — grey brick, black steel, exposed lighting rails, turf-green flooring accents.
- **Trustworthy & current** — clear menu, clear pricing, delivery number front and center (customers are used to seeing this on the cart itself).

Reference points from current restaurant web design (2026): full-bleed appetite photography, mobile-first ordering front and center, dark/moody sections for atmosphere paired with bright hero imagery, minimal chrome, big legible menu typography, and a strong single accent color carrying the whole identity.

---

## 2. Logo & Wordmark

- Wordmark **"DUMKIN"** is set in a **heavy, rounded slab/sans display face** — thick uniform stroke, tightly kerned, all caps. Treat the logo as fixed — don't redraw it, but the site's display headline font should *rhyme* with it (heavy weight, rounded terminals).
- Tagline **"Reviving Your Palate"** is used as a light-weight sans caption under the lockup — always sentence case, never competing with the wordmark in size. Note: the printed menu card uses a second, italic tagline **"Taste The Best"** — treat this as an equally valid alternate for print/menu contexts specifically; use "Reviving Your Palate" as the default for the website unless you'd rather standardize on one across everything (worth a quick decision before launch).
- Clear space: keep at least the height of the "D" free on all sides of the logo.
- On dark backgrounds the wordmark is orange-red (`--dumkin-orange`). Avoid placing it on busy photography without a scrim.

---

## 3. Color Palette

Two brand assets are now in play: the **cart/signage** (bright orange on charcoal + grey brick) and the **printed menu card** (a softer tan cream paired with a deeper maroon-red for headers, plus a saturated orange used for the graphic side-panel and pattern). The system below reconciles them — use the cart's bright orange for digital CTAs and energy, and the menu card's tan/maroon pairing for print-style, editorial moments like the on-site menu.

| Token | Hex | Use |
|---|---|---|
| `--dumkin-orange` | `#F04B1E` | Primary brand color. Logo, CTAs, price tags, active states, panel fills. |
| `--dumkin-orange-dark` | `#C93712` | Hover/pressed states, gradients, shadows under orange. |
| `--dumkin-maroon` | `#A8321C` | Menu category headers, editorial/print-style headings — the deeper red seen on the printed menu card. Use where text sits *on* cream/tan rather than as a filled panel. |
| `--dumkin-charcoal` | `#1B1B1B` | Primary dark background (menu boards, footer, nav). |
| `--dumkin-charcoal-soft` | `#2A2A2A` | Card surfaces on dark sections, stripe panels. |
| `--dumkin-cream` | `#FFF6EC` | Primary light background — warm off-white, digital sections. |
| `--dumkin-tan` | `#F1E4C8` | Softer, more saturated cream from the printed menu card — use for menu/print-style panels to distinguish them from general page background. |
| `--dumkin-paper` | `#FFFFFF` | Cards / menu tickets on light sections. |
| `--dumkin-gold` | `#FFB627` | String-light warmth accent, small highlights, ratings/badges. |
| `--dumkin-grey-brick` | `#8C8880` | Muted structural/neutral text, dividers, secondary icons. |
| `--dumkin-green-turf` | `#3B7A3E` | Small "fresh/organic" accents only — used sparingly (matches astro-turf flooring in cart photos). Optional, don't overuse. |
| `--dumkin-ink` | `#141414` | Body text on light backgrounds. |
| `--dumkin-ink-soft` | `#5C5854` | Secondary/muted body text. |

**Usage rule:** Orange is the *only* saturated hero color, used as a filled panel or CTA. Maroon is orange's quieter sibling — it's for text sitting directly on cream/tan (menu category labels, print-style eyebrows) where a full orange fill would be too loud. Gold and green stay minor accents — cap their combined use at ~10% of any given screen. Charcoal + cream/tan carry the majority of every layout.

---

## 4. Typography

| Role | Style | Notes |
|---|---|---|
| **Display / H1** | Heavy, rounded-terminal sans (e.g. **Poppins ExtraBold**, **Baloo 2**, or **Fredoka SemiBold** as close open-source matches to the logo) | ALL CAPS for hero headlines only. Tight letter-spacing (-1 to -2%). |
| **H2 / H3** | Same family, Bold/SemiBold | Title case, not all-caps, to keep hierarchy readable. |
| **Body** | Clean grotesk (e.g. **Inter**, **Work Sans**) | Regular/Medium, 16–18px base, generous line-height (1.5–1.6). |
| **Price / Menu numbers** | Tabular-figure sans, Bold | Always paired with a ৳/currency symbol; right-aligned in menu lists like the physical boards. |
| **Tagline / Caption** | Body font, Regular, letter-spaced uppercase, small size | Used the way "Reviving Your Palate" sits under the logo. |

Google Fonts pairing to ship with: **Fredoka** (display) + **Inter** (body/UI).

---

## 5. Imagery Style

- **Hero shots:** low-angle, warm-lit photos of the cart/counter at dusk — string lights on, steam/smoke visible, staff mid-prep. This is the brand's strongest existing asset — lead with it.
- **Food photography:** tight, high-contrast, slightly glossy (shawarma shaving, momos steaming, fuchka splash). Always shot against dark or grey-brick backgrounds so the food color pops.
- **Texture backgrounds:** grey brick, brushed steel, black corrugated roofing, black-and-white striped panels, astro-turf green strip — use these as section dividers/backgrounds instead of flat color to keep the "cart" feeling.
- **People:** candid customer/staff moments (ordering at the window) over posed stock photography.
- Avoid: bright white studio food photography, overly "fine dining" plating shots — off-brand for a street cart growing up.

---

## 6. Iconography & Graphic Elements

- Simple, filled (not outline) icons for menu categories — matches the bold chunky style of the wordmark.
- Circular "price bubble" badge (orange or white circle with bold price) — lift this directly from the existing menu board design; it's a strong recognizable motif.
- Divider elements: thin dashed rules or a repeated string-light-bulb pattern for section breaks.
- Corner/edge motif: black-and-white awning stripe, used thinly as a footer or section-break accent — not as a dominant pattern.

---

## 7. Layout & Components

### Navigation
Dark charcoal sticky nav, orange logo mark, cream text links, orange "Order Now" pill button always visible top-right.

### Hero Section
Full-bleed dusk photo of the cart (or a new hero shoot matching that lighting) with a dark gradient scrim at the bottom, wordmark-style H1 over it, one primary CTA ("Order Now") + one secondary ("View Menu").

### Menu Section
Two menu treatments to choose from (or combine — dark board for the homepage teaser, print-style for the full menu page):

**A — Cart menu-board style (dark):**
- Category header bar (orange background, cream bold text) — Shawarma / Momos / Burger / Sandwich / Pasta / Fried Rice / Fuchka / Dessert / Drinks / Tea.
- Each item row: thumbnail (optional) — item name — muted description line — bold price on the right in the circular price-bubble style.
- Sticky category jump-nav on scroll for mobile.

**B — Printed-menu-card style (light, editorial):**
- Tan/cream background, maroon category headers with a thin underline rule (not a filled bar) — matches the printed card exactly.
- Item name in dark ink, price right-aligned in bold, plain "TK"/currency suffix rather than a bubble — closer to a real menu than a UI list.
- Reserve the geometric-pattern side panel + vertical "MENU" label for the top of this page as a header treatment.
- Best for a dedicated `/menu` page or a downloadable/printable menu PDF generated from the same page.

### "Visit Us" / Location Section
Embed map (matches the small map thumbnail in the cart signage), address, hours, and the **delivery phone number** treated as a prominent tappable element (`tel:` link) — this is clearly core to how customers already contact them.

### Atmosphere / Gallery Section
Dark background, grid of seating-area and cart photography, subtle hover-zoom.

### Footer
Charcoal background, orange wordmark, social icons, delivery number repeated, black-and-white stripe accent strip at the very bottom.

### Buttons
- **Primary:** solid `--dumkin-orange`, cream text, fully rounded (pill), bold uppercase small label, subtle darken on hover.
- **Secondary:** transparent with cream 1.5px border, cream text, fills orange on hover.

### Cards
Cream/white background, 12–16px radius, soft shadow, orange price bubble in the top-right corner.

---

## 8. Motion & Interaction

- Keep it light: fade/slide-up on scroll for menu rows and gallery items, no heavy parallax.
- Buttons: 150ms ease scale/darken on hover-press.
- Menu category bar can pulse the active state in orange when selected via jump-nav.

---

## 9. Voice & Microcopy

- Short, punchy, a little playful — mirrors "Reviving Your Palate."
- CTAs: "Order Now," "See the Menu," "Find Us," "Call & Order."
- Avoid overly formal restaurant-speak ("exquisite," "culinary journey") — Dumkin's voice is closer to a friendly cart vendor than a maître d'.

---

## 10. Applying This to Social Media (future use)

- Reuse the exact palette and Fredoka/Inter pairing for post templates so feed and site feel like one brand.
- Square (1:1) post template: charcoal background, one hero food photo, orange price bubble corner sticker, wordmark-style caption bar at the bottom.
- Story template (9:16): vertical crop of the dusk cart photography with orange gradient scrim at the bottom third for text/CTA, matching the site hero treatment.
- Always keep the delivery number and a CTA sticker on promotional posts, exactly as it's already always shown on the physical signage.

---

## 11. Quick Reference — CSS Variables

```css
:root {
  --dumkin-orange: #F04B1E;
  --dumkin-orange-dark: #C93712;
  --dumkin-maroon: #A8321C;
  --dumkin-charcoal: #1B1B1B;
  --dumkin-charcoal-soft: #2A2A2A;
  --dumkin-cream: #FFF6EC;
  --dumkin-tan: #F1E4C8;
  --dumkin-paper: #FFFFFF;
  --dumkin-gold: #FFB627;
  --dumkin-grey-brick: #8C8880;
  --dumkin-green-turf: #3B7A3E;
  --dumkin-ink: #141414;
  --dumkin-ink-soft: #5C5854;

  --font-display: 'Fredoka', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius-pill: 999px;
  --radius-card: 14px;
  --shadow-card: 0 8px 24px rgba(0,0,0,0.12);
}