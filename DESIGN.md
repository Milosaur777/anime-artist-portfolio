# DESIGN.md - StarryArts Galaxy Mana Edition

## 1. Visual Theme

- **Mood:** Magisk, kraftfull, mystisk, energisk — som en anime ultimate attack
- **Inspiration:** Genshin Impact burst animations, Madoka Magica, League of Legends spells, mana crystals
- **Filosofi:** Din konst är magi. Sidan ska kännas som att kanalisera mana.

## 2. Color Palette — Galaxy Mana

| Token | Hex | Role |
|---|---|---|
| `background` | `#0D0612` | Djup galax-svart med lila underton |
| `surface` | `#1A0B2E` | Mörk kristall-lila |
| `surface-elevated` | `#2D1B4E` | Lysare lila för hover |
| `primary-text` | `#F0E6FF` | Varm vit med lila skimmer |
| `secondary-text` | `#B8A2D9` | Mjuk lila |
| `muted-text` | `#7A6B99` | Dämpad lila |

### Neon Accents (Mana Energy)
| Token | Hex | Role |
|---|---|---|
| `mana-magenta` | `#FF2D78` | Primär neon, het rosa |
| `mana-pink` | `#E91E8C` | Sekundär magenta |
| `mana-purple` | `#A855F7` | Elektrisk lila |
| `mana-blue` | `#6366F1` | Blå energi |
| `mana-cyan` | `#22D3EE` | Cyan gnistrar |
| `mana-gold` | `#FFD700` | Guldgnistrar, stjärnor |

### Glow System
Alla accentfärger har `glow` varianter:
- `box-shadow: 0 0 30px rgba(255, 45, 120, 0.4)` för magenta
- `text-shadow: 0 0 20px rgba(168, 85, 247, 0.6)` för lila text
- `filter: drop-shadow(0 0 10px #FF2D78)` för ikoner

## 3. Typography

- **Heading:** Orbitron eller Rajdhani — futuristisk, tech-magic
- **Body:** Inter eller Nunito — ren och läsbar
- **Accent:** Space Mono — för små etiketter, "mana cost" stil

## 4. Component Styles

### Cards (Mana Crystals)
- **Background:** `linear-gradient(135deg, #1A0B2E 0%, #2D1B4E 100%)` + `border: 1px solid rgba(168, 85, 247, 0.2)`
- **Border-radius:** `24px` (mjuka men inte för runda)
- **Shadow:** Färgad glow istället för grå skugga — `0 8px 32px rgba(255, 45, 120, 0.15)`
- **Hover:** Intensivare glow, `scale: 1.03`, energi-pulse

### Buttons
- **Primary:** Gradient magenta→lila med neon-glow, svart text
- **Hover:** Glowing intensifieras, scale 1.05
- **Secondary:** Transparent med neon border, glow på hover

### Navigation
- **Floating capsule** men mörk: `bg-[#0D0612]/80` + `backdrop-blur-xl` + neon border

## 5. Animations

### Energy Pulse
- Subtil pulserande glow på viktiga element (som mana som pulserar)
- `animation: pulse-glow 3s ease-in-out infinite`

### Floating Particles
- Små prickar som svävar uppåt som mana-partiklar
- Olika storlekar, opaciteter, hastigheter
- Färger: magenta, cyan, guld

### Bloom Orbs
- Stora blur-rade cirklar som rör sig långsamt
- Som Galaxy Mana-bilden — mjuka, glödande energi-klumpar

### Text Glow
- Viktiga rubriker har `text-shadow` med flera lager för bloom-effekt

### Hover Energy
- Element får en "surge" av ljus vid hover
- Snabb glow-intensifiering

## 6. Layout

- **Dark mode only** — aldrig ljust
- **Generösa sektioner** med mycket luft
- **Energilinjer:** Subtila gradient-linjer som delar sektioner (neon på mörk)
