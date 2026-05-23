# DESIGN.md - Anime Convention Artist Portfolio

## 1. Visual Theme & Atmosphere

- **Mood:** Sparkly, joyful, expressive, welcoming, unapologetically queer
- **Density:** Medium-high, playful and full of life
- **Philosophy:** Art is magic. Every pixel should feel like a celebration.
- **Inspiration:** Magical girl anime (Sailor Moon, Cardcaptor Sakura), convention artist alleys, sticker culture, holographic prints, pride aesthetics

## 2. Color Palette & Roles

### Primary Palette
| Token | Hex | Role |
|---|---|---|
| `background` | `#1a0b2e` | Deep magical purple canvas |
| `surface` | `#2d1b4e` | Elevated cards, sections |
| `surface-elevated` | `#4a2b7a` | Hover states, highlights |
| `primary-text` | `#fff0f5` | Warm white for primary text |
| `secondary-text` | `#d4a5d4` | Soft lavender for secondary text |
| `muted-text` | `#9d7bb0` | Muted purple for placeholders |

### Accent Rainbow (Queer Aesthetic)
| Token | Hex | Role |
|---|---|---|
| `accent-pink` | `#ff6b9d` | Primary accent, CTAs, sparkles |
| `accent-purple` | `#c77dff` | Secondary accent, gradients |
| `accent-cyan` | `#4deeea` | Tertiary accent, highlights |
| `accent-gold` | `#ffd700` | Sparkle, star elements |
| `accent-lavender` | `#e0aaff` | Soft highlights |

### Gradient Combinations
- **Hero gradient:** `linear-gradient(135deg, #ff6b9d 0%, #c77dff 50%, #4deeea 100%)`
- **Sparkle gradient:** `linear-gradient(45deg, #ffd700, #ff6b9d, #c77dff)`
- **Card hover:** `linear-gradient(135deg, #2d1b4e 0%, #4a2b7a 100%)`

### Usage Rules
- Backgrounds are deep purple, never pure black
- Text on colored backgrounds is always white/warm
- Use rainbow gradients sparingly for maximum impact (hero, CTAs, dividers)
- Gold/yellow is reserved for sparkle effects and stars only

## 3. Typography

- **Heading Font:** Outfit (Google Fonts) — rounded, friendly, modern
- **Body Font:** Quicksand (Google Fonts) — soft, readable, approachable
- **Accent Font:** Pacifico (Google Fonts) — for special headings, signatures

### Scale
| Token | Size | Weight | Letter-Spacing | Line-Height |
|---|---|---|---|---|
| `display` | `72px` | `800` | `-0.02em` | `1.0` |
| `h1` | `48px` | `700` | `-0.01em` | `1.1` |
| `h2` | `36px` | `600` | `0em` | `1.2` |
| `h3` | `24px` | `600` | `0.01em` | `1.3` |
| `h4` | `20px` | `500` | `0.02em` | `1.35` |
| `body` | `16px` | `400` | `0.01em` | `1.6` |
| `body-sm` | `14px` | `400` | `0.02em` | `1.5` |
| `caption` | `12px` | `500` | `0.05em` | `1.4` |

### Rules
- Headings can use gradient text fills (rainbow)
- Use Pacifico font for artist name/signature only
- All caps only for small labels, never for headings
- Body text should feel warm and inviting

## 4. Component Stylings

### Buttons
- **Default:** `bg-surface`, `text-primary`, `border-accent-pink/30`, `rounded-full`, `px-6 py-3`
- **Hover:** `bg-surface-elevated`, `border-accent-pink`, `shadow-lg shadow-accent-pink/20`, `scale-105`
- **Primary:** `bg-gradient-to-r from-accent-pink to-accent-purple`, `text-white`, `rounded-full`, `shadow-lg`
- **Primary Hover:** `brightness-110`, `scale-105`, `shadow-xl`
- **Ghost:** `bg-transparent`, `text-accent-pink`, hover `bg-accent-pink/10`
- **Disabled:** `opacity-50`, `cursor-not-allowed`

### Cards
- **Background:** `bg-surface`
- **Border:** `1px solid accent-purple/20`
- **Border Radius:** `rounded-2xl` (16px) — very round and soft
- **Shadow:** `shadow-lg shadow-accent-purple/10`
- **Hover:** `shadow-xl shadow-accent-pink/20`, `scale-[1.02]`, `border-accent-pink/40`
- **Padding:** `p-6`

### Inputs
- **Background:** `bg-surface`
- **Border:** `1px solid accent-purple/30`, `rounded-full`
- **Focus:** `ring-2 ring-accent-pink ring-offset-2 ring-offset-background`
- **Placeholder:** `text-muted-text`
- **Disabled:** `opacity-50`

### Navigation
- **Background:** `bg-background/80 backdrop-blur-lg`
- **Height:** `72px`
- **Links:** `text-secondary-text`, hover `text-accent-pink`, `transition-colors duration-300`
- **Mobile:** Rounded full-screen menu with gradient background

## 5. Layout Principles

- **Max Width:** `1280px` centered (`mx-auto`)
- **Section Padding:** `py-20 md:py-28` (generous, airy)
- **Grid:** 12-column, `gap-6`
- **Whitespace:** Generous, but with playful elements floating in the space

## 6. Depth & Elevation

- **Shadows are colored:** Use purple/pink tinted shadows
- **Elevation via:**
  - Background color shifts
  - Colored shadows (`shadow-accent-pink/20`)
  - Subtle borders with color
  - Floating sparkle/star decorations
- **Z-Index Scale:**
  - Base: `0`
  - Sparkles/stars: `10`
  - Sticky nav: `40`
  - Modals: `50`

## 7. Animations & Effects

### Sparkles
- Small star/sparkle SVGs scattered throughout
- Twinkle animation: opacity pulse + slight scale
- Colors: gold, pink, cyan
- Position: absolute, random placement

### Hover Effects
- Cards: `scale-[1.02]`, colored shadow appears
- Buttons: `scale-105`, brightness increase
- Images: subtle glow border appears

### Entrance Animations
- Fade-up with slight bounce (not too much)
- Stagger children with 0.1s delay
- Sparkles fade in with random delays

### Background Effects
- Subtle animated gradient mesh in hero
- Floating particles (small circles, stars)
- Holographic shimmer effect on cards

## 8. Do's and Don'ts

### Do
- Use rounded corners generously (`rounded-2xl`, `rounded-full`)
- Include sparkle/star decorative elements
- Use gradient text for important headings
- Make everything feel alive with subtle animations
- Use expressive, friendly language
- Include pride colors subtly in design
- Make hover states feel magical

### Don't
- Use sharp corners or harsh edges
- Use pure black backgrounds
- Make it feel corporate or sterile
- Overload with too many animations at once
- Use aggressive or serious language
- Forget accessibility (contrast, focus states)

## 9. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 640px) | Single column, stacked sections, reduced sparkle count |
| Tablet (>= 768px) | 2-column grids, full sparkle effects |
| Desktop (>= 1024px) | Full layout, max sparkle, all animations |
| Wide (>= 1280px) | Extra padding, larger hero text |

### Touch Targets
- Minimum `48x48px` for all interactive elements on mobile

## 10. Sections (Planned)

### v1.0 Portfolio
1. **Hero** — Artist name, tagline, animated sparkles, CTA
2. **About** — Artist bio, photo, social links
3. **Gallery** — Art showcase grid with hover effects
4. **Convention Schedule** — Upcoming events table/cards
5. **Contact** — Commission info, contact form
6. **Footer** — Social links, copyright

### v2.0 Shop (Future)
7. **Shop Section** — Product grid, categories
8. **Cart** — Mini cart, checkout flow
9. **Product Detail** — Individual art prints, stickers

## 11. Special Elements

### Sparkle Component
```
Small SVG star, 8-16px
Colors: gold, pink, cyan
Animation: twinkle (opacity 0.3 → 1 → 0.3, scale 0.8 → 1 → 0.8)
Duration: 2-4s, random
Position: absolute, scattered
```

### Holographic Effect
```
CSS gradient shimmer on cards
background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
background-size: 200% 200%
Animation: shimmer 3s infinite
```

### Rainbow Divider
```
Horizontal line with rainbow gradient
Height: 2-4px
Gradient: pink → purple → cyan → pink
Animation: gradient shift
```
