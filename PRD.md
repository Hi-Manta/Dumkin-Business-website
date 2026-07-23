# Product Requirements Document (PRD): Dumkin Website

## 1. Project Overview
**Product Name:** Dumkin Website
**Brand Tagline:** "Reviving Your Palate"
**Objective:** To build a modern, responsive, and appetite-driving web presence for DUMKIN, a popular fast-food destination in Bhatiari. The website will transition the brand from a local food cart to an established sit-down location while retaining its vibrant street-food energy.

## 2. Target Audience
- Local Bhatiari residents, as well as anyone from across Chittagong visiting or passing near Bhatiari, looking for high-quality fast food.
- Students and youth looking for an affordable, cozy place to hang out.
- People wanting quick takeaway or delivery for items like Shawarma, Meat Box, Burgers, and Momos.

## 3. Design System & Branding
The design should reflect an urban, industrial-casual, and bold personality, heavily inspired by the existing physical cart signage and printed menu.

### 3.1. Colors
- **Primary:** Dumkin Orange (`#F04B1E`) - Used for CTAs, logos, active states.
- **Secondary (Dark):** Charcoal (`#1B1B1B`) & Charcoal Soft (`#2A2A2A`) - Backgrounds and panels.
- **Secondary (Light):** Cream (`#FFF6EC`) & Tan (`#F1E4C8`) - Base backgrounds and print-style panels.
- **Accents:** Gold (`#FFB627`), Maroon (`#A8321C`), Grey Brick (`#8C8880`), Green Turf (`#3B7A3E`).

### 3.2. Typography
- **Display/Headings (H1/H2):** `Fredoka` (or Poppins/Baloo 2). Bold, rounded terminals, tightly kerned. All caps for hero headlines.
- **Body/UI:** `Inter`. Clean grotesk, generous line-height (`1.5-1.6`) for readability.
- **Price/Numbers:** Tabular-figure sans, bold, paired with a currency symbol.

### 3.3. Key UI Components
- **Buttons:** Pill-shaped (`999px` radius). Primary uses solid orange (`#F04B1E`) with cream text. Secondary is transparent with a border. Scale slightly/darken on hover.
- **Cards:** Cream/white background, 14px radius, soft shadow, with a distinct orange "price bubble" badge in the upper right.
- **Texture Dividers:** Black-and-white awning striping or string-light bulb patterns for section breaks.

## 4. Sitemap & Page Structure
The site will follow a streamlined, scrolling one-page or simple multi-page structure based on the provided sitemap.

### 4.1. Navigation
- Sticky top bar (Dark charcoal background).
- Orange logo on the left, cream navigation links.
- "Order Now" (or other CTA) pill button always visible on the right.

### 4.2. Hero Section
- Full-bleed, warm-lit photograph of the cart/counter at dusk.
- Dark gradient overlay (scrim) at the bottom.
- **Wordmark Style H1:** "DUMKIN"
- **Subheadline:** "Fresh Shawarma, Burgers & Fast Food in Bhatiari."
- **Primary CTA:** "View Menu"
- **Secondary CTA:** "Call to Order" (Prominent `tel:` link).

### 4.3. Featured Menu
- Display top items only: Chicken Shawarma, Naga Burger, Meat Box, Chicken Steamed Momo, and Mint Lemon.
- Card format: Image, Item Name, Price Bubble, Short Description, Order Button.
- **Global CTA:** "View Full Menu".

### 4.4. About & Signature Dishes
- **About:** One concise paragraph (e.g., "DUMKIN has become a popular fast-food destination in Bhatiari..."). No long fake history.
- **Signature Dishes:** Large horizontal cards focusing on high-contrast food photography (Chicken Shawarma, Naga Burger, Special White Sauce, Meat Box). 

### 4.5. Customer Reviews
- Feature 4-6 curated positive reviews (from Google Reviews: e.g., Hasan Murad, Md. Nazimus Sakib).
- Simple text-based layout: Name, Google Rating (⭐⭐⭐⭐⭐), and Quote. 
- Avoid carousel interactions for simplicity.

### 4.6. Gallery
- 6-8 authentic, well-lit photos (crew, seating, food prep). Grid layout with subtle hover-zoom interaction.

### 4.7. Visit Us
- Address and Opening Hours.
- Delivery Phone Number (Prominent tappable `tel:` link).
- Embedded Google Map.
- External action buttons: "Call" and "Directions".

### 4.8. Footer
- Charcoal background.
- Orange wordmark and social links.
- Delivery number repeated.
- Thin black-and-white stripe accent strip at the very bottom.

## 5. Functional & Technical Requirements
- **Responsive Design:** Must be heavily mobile-first given local internet browsing habits. Mobile jump-nav for the menu section.
- **Performance:** Optimized assets to maintain fast load times despite heavy, high-contrast photography. 
- **Interactions:** Subtle slide/fade-up animations on scroll (150ms ease). No heavy parallax.
- **SEO & Contact:** Title and Meta descriptions targeted at local terms (e.g., "Best Fast Food in Bhatiari"). Usage of Semantic HTML and appropriate Heading structure.

## 6. Next Steps & Asset Requirements
- Use `design.html` as a CSS/HTML structural reference for colors and components.
- Integrate the high-resolution vector and icon files (`location-round-orange*.svg`, `orange-phone*.svg`).
- Source or capture the high-quality dusk/counter images and specific high-contrast food photos required by the brand standards.
