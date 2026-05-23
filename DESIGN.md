# DESIGN.md - StarryArts Kawaii Portfolio

## 1. Visual Theme & Atmosphere

- **Mood:** Bubblig, mjuk, söt, lekfull, inbjudande
- **Density:** Luftig men personlig — generöst med whitespace men lekfulla detaljer överallt
- **Philosophy:** Som att kliva in i en konstnärs sketchbook. Alla element ska kännas handrörbara — squishy, runda, mjuka.
- **Inspiration:** Sanrio aesthetics, LINE stickers, Ghibli-moln, bento-box layouts, kawaii Japanese packaging

## 2. Color Palette

### Primary
| Token | Hex | Role |
|---|---|---|
| `background` | `#FFF8FB` | Warm white, marshmallow canvas |
| `surface` | `#FFFFFF` | Cards, sections |
| `surface-warm` | `#FFF0F5` | Subtle warm sections |
| `primary-text` | `#4A2B4D` | Deep warm purple for headings |
| `secondary-text` | `#8B6B8D` | Soft mauve for body |
| `muted-text` | `#B8A2B9` | Lavender gray |

### Kawaii Pastels
| Token | Hex | Role |
|---|---|---|
| `pink` | `#FFB5C5` | Primary accent, blush |
| `pink-light` | `#FFD1DC` | Hover states, highlights |
| `lavender` | `#E0B0FF` | Secondary accent |
| `mint` | `#B5EAD7` | Tertiary, success states |
| `lemon` | `#FFF5B7` | Yellow accent, stars |
| `baby-blue` | `#C7CEEA` | Blue accent |
| `peach` | `#FFDAC1` | Warmth, gradients |

### Usage Rules
- Gradienter är mjuka — aldrig hårda övergångar
- Alla element har generösa rundade hörn (minst 20px, ofta 32px+)
- Skuggor är mjuka, färgade, och diffusa (aldrig svarta skuggor!)

## 3. Typography

- **Heading Font:** Fredoka One — rund, vänlig, expressiv
- **Body Font:** Nunito — mjuk, rund, mycket läsbar
- **Accent:** Quicksand — för små etiketter

### Scale
| Token | Size | Weight | Role |
|---|---|---|---|
| `display` | `64px` | `700` | Hero title, bouncy |
| `h1` | `42px` | `600` | Page titles |
| `h2` | `28px` | `600` | Section titles |
| `h3` | `20px` | `600` | Card titles |
| `body` | `16px` | `400` | Nunito, line-height 1.7 |
| `caption` | `14px` | `500` | Labels, tags |

## 4. Component Stylings

### Cards (Kawaii Cards)
- **Border Radius:** `rounded-[32px]` — mycket runda!
- **Shadow:** `0 8px 32px rgba(255, 181, 197, 0.15)` — rosa skugga
- **Border:** `2px solid` + pastellfärg, ser ut som en "klistermärkes-kant"
- **Hover:** Squishy bounce (`scale: 1.05`, `rotate: -1deg`), skuggan växer, färgen intensifieras
- **Padding:** Generöst, `p-8`

### Buttons
- **Shape:** `rounded-full` eller `rounded-[24px]` — pillerformade!
- **Primary:** Gradient rosa→lavender, vit text, skugga
- **Hover:** "Squish" — trycks ihop lite (`scaleY: 0.95`, `scaleX: 1.05`), bounce tillbaka
- **Secondary:** Pastell outline med färgad fill på hover

### Navigation
- **Shape:** Flytande kapsel (`rounded-full`), inte full-width bar!
- **Shadow:** Mjuk floatande skugga
- **Links:** Små ikoner + text, rosa hover

### Tags / Badges
- **Shape:** `rounded-full`, som små godisbitar
- **Style:** Ljus pastell bakgrund, mörkare text, tunn border

## 5. Animations & Interactions

### Squishy Hover
Alla kort och knappar ska kännas "squishy":
```
hover: { scaleY: 0.92, scaleX: 1.04, transition: { type: "spring", stiffness: 400, damping: 15 } }
```

### Floating Elements
- Moln, stjärnor, hjärtan som sakta flyter uppåt i bakgrunden
- Varierande hastigheter och storlekar
- Mycket låg opacitet så de inte distraherar

### Bouncy Entrance
- Element "ploppar" in med en liten överskjutning (overshoot)
- `type: "spring", stiffness: 200, damping: 12`

### Gradient Orbs
- Stora, mjuka, blur-rade gradient-bollar som rör sig långsamt i bakgrunden
- `filter: blur(80px)`, opacitet ~0.3

### Sticker Peel (Gallery)
- Bilder ser ut som klistermärken med en liten vikning i hörnet
- Hover: klistermärket lossnar lite (rotate + shadow)

## 6. Special Elements

### Floating Nav Capsule
```
Position: fixed, top-4, centered
Background: rgba(255, 255, 255, 0.8) + backdrop-blur-xl
Border-radius: 9999px (full)
Shadow: 0 4px 24px rgba(255, 181, 197, 0.2)
```

### Moln Hero
```
Stora vita "bubblor" bakom hero-texten
Gradient: white → transparent
Blur: soft
Animation: very slow float
```

### Blush Marks
```
Små rosa cirklar på element (som anime-kinden)
Opacity: 0.4
Blur: soft
Position: absolute, near corners
```

### Sparkle Trail
```
Små stjärnor/symboler (★, ♥, ✦) som dyker upp på hover
Fades in + out snabbt
```

## 7. Layout Principles

- **Max Width:** `1200px`
- **Section Padding:** `py-24 md:py-32` — generöst!
- **Grid Gap:** `gap-8` — luftigt
- **Border Radius:** Minimum `24px` på allt
- **Shadows:** Rosa/lavender-tonade, aldrig gråa

## 8. Responsive

- **Mobile:** Alla element staplas, nav blir hamburgare i en bubbla
- **Tablet:** 2-kolumns grid
- **Desktop:** 3-4 kolumner, full floating effects
