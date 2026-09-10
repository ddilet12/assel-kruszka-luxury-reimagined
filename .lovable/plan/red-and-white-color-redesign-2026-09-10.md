# Red and White Color Redesign

## Goal
Preserve the storefront exactly as it is while replacing the current ivory, beige, burgundy, and near-black palette with a crisp luxury red-and-white system.

## Changes
- Update only the shared semantic color tokens in the global stylesheet.
- Set all main, section, card, popover, and secondary surfaces to white or the specified very light red where a soft interaction state is needed.
- Use `#111111` for primary text and icons, `#A50000` for the brand accent, and `#C00000` for brighter accent states.
- Change the footer surface to `#A50000` with white text, white branding, and subtle lighter-red borders.
- Keep muted text legible with a neutral dark tone while removing beige, cream, brown, and gray-tinted backgrounds.
- Add color-only hover behavior for category arrows, editorial links, benefit icons, search controls, and other existing interactive elements.

## Preservation Rules
- No changes to layout, dimensions, spacing, typography, content, imagery, route structure, behavior, animation timing, or responsive rules.
- No component restructuring or new sections.
- Existing payment method labels and shopping functionality remain untouched.

## Validation
- Confirm the project compiles without errors.
- Visually verify desktop and mobile views retain their existing geometry and use the new white/red identity throughout.
