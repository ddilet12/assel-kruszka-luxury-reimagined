# ASSEL KRUSZKA Luxury Storefront

## Goal
Recreate the supplied ASSEL KRUSZKA reference as a responsive, bilingual luxury fashion storefront. The reference remains the visual source of truth: ivory editorial layout, burgundy accents, high-contrast serif headings, restrained motion, identical section order, and a dense multi-column dark footer.

## What will be built
- A sticky desktop header and full-screen mobile menu with working navigation, language switching, search, wishlist, and cart controls.
- The homepage in the reference order: editorial hero, circular category rail, five-product bestseller row, split brand story, four service benefits, and detailed footer.
- A coherent custom fashion campaign image set for the hero, seven categories, five products, hover alternates, and branded shopping-bag story image.
- A catalog page with category browsing, search, filters, and responsive product results.
- Individual product pages with image gallery, size and color selection, quantity controls, size guide, delivery/returns details, wishlist, and add-to-cart.
- Cart and wishlist drawers, plus a complete checkout interface using mock/local product data.
- English and Russian copy throughout, including navigation, storefront headings, product details, controls, and footer.

## Interaction and state
- Shared storefront state will manage language, search, wishlist, cart lines, selected variants, quantities, drawers, and mobile navigation.
- Product and category links will use real app routes; cart totals and quantity updates will work immediately.
- Checkout will validate customer and delivery fields and show an order confirmation state without processing a real payment.
- State will persist in the browser so cart, wishlist, and language survive refreshes.

## Responsive behavior
- Desktop matches the 1440px reference density and proportions, including the 50/50 hero, seven circular categories, five product columns, split brand section, and five-column footer.
- Tablet progressively reduces columns while preserving the editorial hierarchy.
- Mobile uses a stacked hero, swipeable categories, two-column product grids, full-screen menu, drawers sized for touch, stacked benefits, and accordion footer groups.

## Technical details
- Keep the existing TanStack Start routing and React/TypeScript/Tailwind v4 stack.
- Build focused reusable pieces for the header, hero, categories, products, brand story, benefits, footer, language switcher, search, cart, wishlist, filters, product detail, and checkout.
- Define all colors, typography, spacing, borders, shadows, and motion as semantic design tokens in the global stylesheet.
- Add route-specific metadata for home, catalog, product, wishlist, cart, and checkout pages.
- Use local typed mock data designed so a future database connection can replace the data source without restructuring the interface.

## Validation
- Verify the desktop and mobile layouts against the supplied reference with browser screenshots.
- Exercise search, filtering, language switching, wishlist, add-to-cart, quantity changes, variants, and checkout flow.
- Check current build diagnostics and resolve all errors before completion.

## Scope boundary
Real payment processing, accounts, inventory syncing, and a live product database are not included; the requested experience will use polished mock data and a non-transactional checkout UI.
