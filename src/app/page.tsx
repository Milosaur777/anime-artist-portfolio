"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Heart, Star, Sparkles, Mail, Palette, Calendar, 
  MapPin, ShoppingBag, Camera, Wand2, Zap, Diamond,
  Flame, Circle
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RotatingPrompt } from "@/components/ui/rotating-prompt";

/* ─── Spring configs ─── */
const springBouncy = { type: "spring" as const, stiffness: 300, damping: 15 };
const springSoft = { type: "spring" as const, stiffness: 200, damping: 20 };

/* ─── Floating mana particle ─── */
function ManaParticle({ delay, color, size, left }: { delay: number; color: string; size: number; left: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ 
        left, 
        width: size, 
        height: size, 
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        filter: `blur(${size / 3}px)`
      }}
      initial={{ bottom: "-5%", opacity: 0, scale: 0 }}
      animate={{ 
        bottom: "105%", 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 0.5, 0],
        x: [0, 20, -20, 0]
      }}
      transition={{ 
        duration: 8 + Math.random() * 4, 
        repeat: Infinity, 
        delay, 
        ease: "easeOut" 
      }}
    />
  );
}

/* ─── Energy orb background ─── */
function EnergyOrb({ color, className }: { color: string; className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ background: color, filter: "blur(100px)" }}
      animate={{ 
        x: [0, 50, -30, 0], 
        y: [0, -60, 40, 0],
        scale: [1, 1.2, 0.9, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Main page ─── */
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);
  const [particles] = useState(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      color: ["#FF2D78", "#A855F7", "#E91E8C", "#E91E8C", "#E91E8C", "#E91E8C"][Math.floor(Math.random() * 6)],
      size: 2 + Math.random() * 6,
      left: `${Math.random() * 100}%`
    }))
  );

  return (
    <div ref={containerRef} className="relative min-h-full overflow-hidden bg-[#0D0612]">
      
      {/* ═══════ Mana Particles Layer ═══════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p) => (
          <ManaParticle key={p.id} {...p} />
        ))}
      </div>

      {/* ═══════ Energy Orbs ═══════ */}
      <EnergyOrb color="rgba(255, 45, 120, 0.25)" className="w-[600px] h-[600px] -top-40 -left-40" />
      <EnergyOrb color="rgba(168, 85, 247, 0.2)" className="w-[500px] h-[500px] top-[20%] -right-40" />
      <EnergyOrb color="rgba(34, 211, 238, 0.15)" className="w-[400px] h-[400px] top-[60%] left-[20%]" />
      <EnergyOrb color="rgba(233, 30, 140, 0.2)" className="w-[350px] h-[350px] bottom-[10%] right-[30%]" />

      {/* ═══════ Navigation ═══════ */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...springSoft, delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#0D0612]/80 backdrop-blur-xl px-3 py-2 border border-[#A855F7]/30 glow-purple">
          <a href="#hero" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#1A0B2E] transition-colors">
            <Flame className="w-4 h-4 text-[#FF2D78]" />
            <span className="font-semibold text-sm text-[#F0E6FF]" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>Top</span>
          </a>
          <div className="hidden sm:flex items-center gap-1">
            {[
              { label: "About", href: "#about" },
              { label: "Gallery", href: "#gallery" },
              { label: "Shop", href: "#shop" },
              { label: "Events", href: "#events" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#B8A2D9] hover:bg-[#1A0B2E] hover:text-[#F0E6FF] transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="#shop" 
            className="flex items-center gap-1.5 px-4 py-2 rounded-full mana-button text-white text-sm font-semibold"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Shop</span>
          </a>
        </div>
      </motion.nav>

      {/* ═══════ HERO with Aurora Rainbow Overlay ═══════ */}
      <section id="hero" className="relative min-h-screen">
        <AuroraBackground className="min-h-screen bg-[#0D0612]">
          <motion.div style={{ y: heroY }} className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32 pb-20">
            
            {/* Floating icons */}
            <motion.div className="absolute -top-8 left-[5%]" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <Diamond className="w-8 h-8 text-[#FF2D78] drop-shadow-[0_0_10px_rgba(255,45,120,0.8)]" />
            </motion.div>
            <motion.div className="absolute top-[10%] right-[8%]" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
              <Zap className="w-6 h-6 text-[#22D3EE] drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </motion.div>
            <motion.div className="absolute bottom-[20%] left-[10%]" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Star className="w-5 h-5 text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
            </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ ...springBouncy, delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0D0612]/60 backdrop-blur-sm px-4 sm:px-5 py-2.5 border border-[#A855F7]/40 glow-purple mb-8 max-w-[90vw]"
          >
            <Sparkles className="w-4 h-4 text-[#FF2D78] shrink-0" />
            <RotatingPrompt />
            <Sparkles className="w-4 h-4 text-[#A855F7] shrink-0" />
          </motion.div>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...springBouncy, delay: 0.5 }}
              className="mb-6"
            >
              <SparklesText 
                text="Neo's Art Corner" 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight gradient-mana drop-shadow-[0_0_40px_rgba(255,45,120,0.3)]"
                colors={{ first: "#FF2D78", second: "#A855F7" }}
                sparklesCount={15}
              />
            </motion.div>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...springSoft, delay: 0.7 }}
              className="text-lg md:text-xl text-[#F0E6FF]/90 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Channeling love into sparkly stickers, prints, and commissions. 
              Catch us at conventions or order online!
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...springSoft, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button 
                className="mana-button rounded-full px-8 py-4 text-white font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.08, transition: springBouncy }}
                whileTap={{ scale: 0.92 }}
              >
                <Palette className="w-5 h-5" />
                Browse Art
              </motion.button>
              <motion.button 
                className="rounded-full px-8 py-4 font-semibold flex items-center gap-2 border border-[#A855F7]/40 bg-[#0D0612]/40 text-[#F0E6FF] backdrop-blur-sm hover:border-[#FF2D78]/60 hover:bg-[#1A0B2E]/60 transition-all"
                whileHover={{ scale: 1.05, transition: springBouncy }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-[#FF2D78]" />
                Commission Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-[#A855F7]/40 flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-3 rounded-full bg-[#FF2D78]"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" className="relative py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A0B2E] px-4 py-2 border border-[#A855F7]/30 mb-6">
              <Heart className="w-4 h-4 text-[#FF2D78]" />
              <span className="text-sm font-semibold text-[#B8A2D9]">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
              Hi, I'm <span className="gradient-mana">Neo</span>!
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile crystal */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...springSoft, delay: 0.2 }}
            >
              <motion.div 
                className="energy-card rounded-3xl p-2 relative animate-pulse-glow"
                whileHover={{ scale: 1.03, transition: springBouncy }}
              >
                <div className="rounded-[2rem] bg-gradient-to-br from-[#FF2D78]/20 via-[#A855F7]/20 to-[#22D3EE]/20 p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                  {/* Glowing center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FF2D78]/20 blur-3xl" />
                  
                  <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <Wand2 className="w-32 h-32 text-[#A855F7]/60 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                  </motion.div>

                  <motion.div className="absolute top-4 right-4" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity }}>
                    <Sparkles className="w-8 h-8 text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...springSoft, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-[#B8A2D9] leading-relaxed">
              I'm an artist who channels love into magical, sparkly art. 
              My work celebrates LGBTQ+ pride, anime culture, and the joy of being unapologetically yourself.
              </p>
              <p className="text-lg text-[#B8A2D9] leading-relaxed">
              You'll find me at anime conventions across the country, selling stickers, prints, and taking commissions. 
              Every piece is infused with arcane energy and a touch of stardust!
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["Digital Art", "Stickers", "Prints", "Commissions", "Pride Art"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springBouncy, delay: 0.6 + i * 0.1 }}
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border"
                    style={{ 
                      backgroundColor: ['#FF2D78', '#A855F7', '#22D3EE', '#E91E8C', '#FFD700'][i] + '15',
                      borderColor: ['#FF2D78', '#A855F7', '#22D3EE', '#E91E8C', '#FFD700'][i] + '40',
                      color: '#F0E6FF'
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY (Mana Crystals) ═══════ */}
      <section id="gallery" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A0B2E] px-4 py-2 border border-[#FF2D78]/30 glow-magenta mb-6">
              <Diamond className="w-4 h-4 text-[#FF2D78]" />
              <span className="text-sm font-semibold text-[#B8A2D9]">My Gallery</span>
            </div>
            <SparklesText 
              text="Fandoms" 
              className="text-4xl md:text-5xl font-bold gradient-mana"
              colors={{ first: "#FF2D78", second: "#A855F7" }}
              sparklesCount={12}
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Galaxy Burst", category: "Digital Art", color: "#FF2D78", icon: Star },
              { title: "Chibi Sparks", category: "Stickers", color: "#A855F7", icon: Heart },
              { title: "Pride Nova", category: "Prints", color: "#22D3EE", icon: Sparkles },
              { title: "Arcane Lands", category: "Digital Art", color: "#E91E8C", icon: Diamond },
              { title: "Soul Links", category: "Commissions", color: "#6366F1", icon: Zap },
              { title: "Star Forge", category: "Originals", color: "#FFD700", icon: Flame },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springSoft, delay: i * 0.1 }}
              >
                <motion.div 
                  className="energy-card rounded-3xl p-4 cursor-pointer group"
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1, transition: springBouncy }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative">
                    <div 
                      className="rounded-[2rem] aspect-[4/5] flex items-center justify-center transition-all group-hover:brightness-125 relative overflow-hidden"
                      style={{ backgroundColor: item.color + '15' }}
                    >
                      {/* Inner glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-3xl opacity-50" style={{ backgroundColor: item.color }} />
                      
                      <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={springBouncy}>
                        <item.icon className="w-16 h-16 relative z-10" style={{ color: item.color, filter: `drop-shadow(0 0 10px ${item.color})` }} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="pt-5 px-2">
                    <h3 className="text-lg font-bold text-[#F0E6FF]" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#B8A2D9] mt-1">{item.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ORIGINALS ═══════ */}
      <section id="originals" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A0B2E] px-4 py-2 border border-[#FFD700]/30 glow-gold mb-6">
              <Star className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-semibold text-[#B8A2D9]">Original Works</span>
            </div>
            <SparklesText 
              text="Originals" 
              className="text-4xl md:text-5xl font-bold gradient-mana"
              colors={{ first: "#FFD700", second: "#A855F7" }}
              sparklesCount={12}
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ethereal Bloom", category: "Original Character", color: "#FF2D78", icon: Heart },
              { title: "Midnight Garden", category: "Concept Art", color: "#A855F7", icon: Sparkles },
              { title: "Star Weaver", category: "Original Character", color: "#22D3EE", icon: Star },
              { title: "Neon Dreams", category: "Illustration", color: "#E91E8C", icon: Diamond },
              { title: "Crystal Heart", category: "Original Character", color: "#6366F1", icon: Flame },
              { title: "Aurora Soul", category: "Concept Art", color: "#FFD700", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springSoft, delay: i * 0.1 }}
              >
                <motion.div 
                  className="energy-card rounded-3xl p-4 cursor-pointer group"
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1, transition: springBouncy }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative">
                    <div 
                      className="rounded-[2rem] aspect-[4/5] flex items-center justify-center transition-all group-hover:brightness-125 relative overflow-hidden"
                      style={{ backgroundColor: item.color + '15' }}
                    >
                      {/* Inner glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-3xl opacity-50" style={{ backgroundColor: item.color }} />
                      
                      <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={springBouncy}>
                        <item.icon className="w-16 h-16 relative z-10" style={{ color: item.color, filter: `drop-shadow(0 0 10px ${item.color})` }} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="pt-5 px-2">
                    <h3 className="text-lg font-bold text-[#F0E6FF]" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#B8A2D9] mt-1">{item.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SHOP (My Wares) ═══════ */}
      <section id="shop" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A0B2E] px-4 py-2 border border-[#FFD700]/30 glow-gold mb-6">
              <ShoppingBag className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-semibold text-[#B8A2D9]">Shop</span>
            </div>
            <SparklesText 
              text="My Wares" 
              className="text-4xl md:text-5xl font-bold gradient-mana"
              colors={{ first: "#FFD700", second: "#FF2D78" }}
              sparklesCount={12}
            />
            <p className="text-lg text-[#B8A2D9] mt-4 max-w-xl mx-auto">
              Stickers and prints. Order online or catch me at conventions for better deals!
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Sticker Pack: Galaxy Set", 
                price: "$15", 
                desc: "6 holographic stickers. Chibi characters, pride flags, and sparkle motifs.",
                color: "#FF2D78",
                icon: Star,
                badge: "Bestseller"
              },
              { 
                title: "Art Print: Pride Nova", 
                price: "$25", 
                desc: "A3 matte print on 300gsm archival paper. Signed by Neo.",
                color: "#A855F7",
                icon: Sparkles,
                badge: "New"
              },
              { 
                title: "Sticker Pack: Chibi Friends", 
                price: "$12", 
                desc: "5 cute chibi stickers. Perfect for laptops, water bottles, and sketchbooks.",
                color: "#E91E8C",
                icon: Heart,
                badge: null
              },
              { 
                title: "Art Print: Arcane Lands", 
                price: "$30", 
                desc: "A2 poster print. Fantasy landscape with magical creatures and glowing flora.",
                color: "#6366F1",
                icon: Diamond,
                badge: "Limited"
              },
              { 
                title: "Sticker Pack: Magical Girls", 
                price: "$14", 
                desc: "6 sparkly stickers featuring magical girl designs and transformation scenes.",
                color: "#22D3EE",
                icon: Wand2,
                badge: "New"
              },
              { 
                title: "Art Print: Starlight Dance", 
                price: "$28", 
                desc: "A3 print on metallic paper. Dancing figures under a galaxy sky with holographic details.",
                color: "#FFD700",
                icon: Flame,
                badge: "Popular"
              },
            ].map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springSoft, delay: i * 0.1 }}
              >
                <motion.div 
                  className="energy-card rounded-3xl p-5 cursor-pointer group h-full flex flex-col"
                  whileHover={{ scale: 1.03, y: -5, transition: springBouncy }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Product image placeholder */}
                  <div className="relative mb-4">
                    <div 
                      className="rounded-[2rem] aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: product.color + '15' }}
                    >
                      {/* Inner glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-40" style={{ backgroundColor: product.color }} />
                      
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }} 
                        transition={springBouncy}
                      >
                        <product.icon className="w-20 h-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" style={{ color: product.color }} />
                      </motion.div>

                      {/* Badge */}
                      {product.badge && (
                        <div 
                          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                          style={{ 
                            backgroundColor: product.color + '30', 
                            color: product.color,
                            border: `1px solid ${product.color}60`,
                            textShadow: `0 0 10px ${product.color}60`
                          }}
                        >
                          {product.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product info */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#F0E6FF]" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
                        {product.title}
                      </h3>
                      <span className="text-lg font-bold shrink-0" style={{ color: product.color, textShadow: `0 0 10px ${product.color}40` }}>
                        {product.price}
                      </span>
                    </div>
                    <p className="text-sm text-[#B8A2D9] leading-relaxed flex-1">
                      {product.desc}
                    </p>
                    
                    {/* Order button */}
                    <motion.a
                      href="#contact"
                      className="mt-4 w-full py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 transition-all"
                      style={{ 
                        backgroundColor: product.color + '20',
                        border: `1px solid ${product.color}40`,
                        color: product.color
                      }}
                      whileHover={{ 
                        backgroundColor: product.color + '35',
                        scale: 1.02,
                        transition: springBouncy
                      }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Order Now
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONVENTIONS (Energy Tickets) ═══════ */}
      <section id="events" className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A0B2E] px-4 py-2 border border-[#22D3EE]/30 glow-cyan mb-6">
              <Calendar className="w-4 h-4 text-[#22D3EE]" />
              <span className="text-sm font-semibold text-[#B8A2D9]">Catch Me At</span>
            </div>
            <SparklesText 
              text="Con Schedule" 
              className="text-4xl md:text-5xl font-bold gradient-mana"
              colors={{ first: "#22D3EE", second: "#A855F7" }}
              sparklesCount={10}
            />
          </motion.div>

          <div className="space-y-6">
            {[
              { name: "Anime Expo", date: "July 4-7, 2026", location: "Los Angeles, CA", booth: "A-42", color: "#FF2D78" },
              { name: "Sakura-Con", date: "April 18-20, 2026", location: "Seattle, WA", booth: "B-15", color: "#A855F7" },
              { name: "Otakon", date: "August 1-3, 2026", location: "Washington, DC", booth: "C-08", color: "#FF2D78" },
            ].map((con, i) => (
              <motion.div
                key={con.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...springSoft, delay: i * 0.15 }}
              >
                <motion.div
                  className="energy-card rounded-3xl p-6 md:p-8 relative overflow-hidden"
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -0.5 : 0.5, transition: springBouncy }}
                >
                  {/* Energy line accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: con.color, boxShadow: `0 0 20px ${con.color}` }} />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: con.color + '20' }}>
                          <MapPin className="w-5 h-5" style={{ color: con.color, filter: `drop-shadow(0 0 5px ${con.color})` }} />
                        </div>
                        <h3 className="text-xl font-bold text-[#F0E6FF]" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
                          {con.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-[#B8A2D9]">
                        <span className="flex items-center gap-1.5 text-sm">
                          <Calendar className="w-4 h-4" style={{ color: con.color }} />
                          {con.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm">
                          <MapPin className="w-4 h-4" style={{ color: con.color }} />
                          {con.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: con.color + '20', color: con.color, textShadow: `0 0 10px ${con.color}40` }}>
                        Booth {con.booth}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold border" style={{ borderColor: '#22D3EE40', color: '#22D3EE' }}>
                        Upcoming
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA / CONTACT ═══════ */}
      <section id="contact" className="relative py-24 md:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springSoft}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div 
            className="energy-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02, transition: springBouncy }}
          >
            {/* Energy burst decorations */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#FF2D78]/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-[#A855F7]/10 blur-3xl" />

            <div className="relative z-10">
              <motion.div className="inline-block mb-6" animate={{ rotate: [0, 10, -10, 0], filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"] }} transition={{ duration: 4, repeat: Infinity }}>
                <Sparkles className="w-12 h-12 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
                Reach Out To <span className="gradient-mana">Me</span>!
              </h2>
              
              <p className="text-lg text-[#B8A2D9] mb-8 max-w-xl mx-auto leading-relaxed">
                Open for collaborations. 
                Let's create something that glows!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button className="mana-button rounded-full px-8 py-4 text-white font-semibold flex items-center gap-2" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                  <Mail className="w-5 h-5" />
                  Email Me
                </motion.button>
                <motion.button 
                  className="rounded-full px-8 py-4 font-semibold flex items-center gap-2 border border-[#A855F7]/40 bg-[#1A0B2E]/60 text-[#F0E6FF] hover:border-[#FF2D78]/60 transition-all"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  <Camera className="w-5 h-5 text-[#A855F7]" />
                  Instagram
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative py-12 px-6 border-t border-[#A855F7]/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div className="text-center md:text-left" whileHover={{ scale: 1.05 }} transition={springBouncy}>
              <h3 className="text-2xl font-bold gradient-mana" style={{ fontFamily: `var(--font-fredoka), 'Fredoka', system-ui, sans-serif` }}>
                Neos Art Corner
              </h3>
              <p className="text-sm text-[#7A6B99] mt-1 flex items-center gap-1 justify-center md:justify-start">
                Made with <Heart className="w-4 h-4 text-[#FF2D78] inline drop-shadow-[0_0_5px_rgba(255,45,120,0.6)]" />
              </p>
            </motion.div>

            <div className="flex items-center gap-4">
              {[
                { icon: Camera, color: "#A855F7", label: "Instagram" },
                { icon: Mail, color: "#FF2D78", label: "Email" },
                { icon: ShoppingBag, color: "#A855F7", label: "Shop" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-[#1A0B2E] border border-[#A855F7]/30 flex items-center justify-center"
                  style={{ boxShadow: `0 0 15px ${social.color}20` }}
                  whileHover={{ scale: 1.2, rotate: 10, transition: springBouncy }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color, filter: `drop-shadow(0 0 5px ${social.color})` }} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-dashed border-[#A855F7]/20 text-center">
            <p className="text-sm text-[#7A6B99]">
              © 2026 Neos Art Corner. All rights reserved. 🏳️‍🌈
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
