# XINITY Design System Specification

## 🎨 Color Tokens

| Name                   | Hex                                         | Usage                           |
| :--------------------- | :------------------------------------------ | :------------------------------ |
| **Primary Background** | `#0A0A0F`                                   | Main app background             |
| **Surface/Card**       | `#111118`                                   | Base for cards/elements         |
| **Elevated Surface**   | `#1A1A24`                                   | Hover states, modals            |
| **Border**             | `#2A2A38`                                   | Lines, separators               |
| **Primary Accent**     | `#6C63FF`                                   | Primary button, violet branding |
| **Secondary Accent**   | `#00F0FF`                                   | Accents, gradients, status      |
| **CTA Gradient**       | `linear-gradient(135deg, #6C63FF, #00F0FF)` | CTAs, headlines                 |

## 📐 Typography

- **Display**: "Space Grotesk" (Bold 700 / Semi-bold 600)
- **Body**: "Inter" (Regular 400 / Medium 500)
- **System/Data**: "JetBrains Mono" (Monospace)

## 🔘 Component Variants

### Buttons

- **Primary**: `bg-gradient-to-br from-primary to-secondary text-white h-12 px-8 rounded-md`.
- **Secondary**: `bg-transparent border border-primary text-primary hover:bg-primary/5 h-12 px-8 rounded-md`.
- **Ghost**: `text-text-muted hover:border-borderSubtle hover:text-textPrimary bg-transparent h-12 px-8 rounded-md transition-all`.
- **Danger**: `bg-error/10 border border-error/20 text-error hover:bg-error text-white transition-all h-12 px-8 rounded-md`.
- **Icon**: `h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/5 border border-white/5`.

### Cards

- **Base Card**: `bg-surface border border-borderSubtle rounded-lg p-6 shadow-card-glow hover:border-primary/20 transition-all`.
- **Interactive Card**: `bg-surface border border-borderSubtle hover:bg-elevated hover:border-primary/50 cursor-pointer shadow-card-glow`.

### Status Badges

- **Success**: `bg-success/10 text-success border border-success/20 px-3 py-1 rounded-full text-xs font-bold`.
- **Warning**: `bg-warning/10 text-warning border border-warning/20 px-3 py-1 rounded-full text-xs font-bold`.
- **Error**: `bg-error/10 text-error border border-error/20 px-3 py-1 rounded-full text-xs font-bold`.

## 🎞️ Motion

- **Entrance**: Fade-up + 40px offset.
- **Micro**: 150ms transform for hovers.
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Out-Expo).
- **Stagger**: 80ms delay for lists.

---

## 🛠️ Usage (Tailwind v4 / CSS)

The design system is implemented in `app/globals.css` using `@theme` and `:root` variables in `app/tokens.css`. Use atomic classes like `bg-surface`, `text-text-secondary`, `font-display`, etc.
