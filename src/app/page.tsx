"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Heart, Star, Sparkles, Mail, Palette, Calendar, 
  MapPin, ShoppingBag, Camera, Wand2, Zap, Diamond,
  Flame, Circle
} from "lucide-react";

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
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      color: ["#FF2D78", "#A855F7", "#22D3EE", "#FFD700", "#E91E8C"][Math.floor(Math.random() * 5)],
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
            <span className="font-semibold text-sm text-[#F0E6FF]" style={{ fontFamily: 'var(--font-fredoka)' }}>StarryArts</span>
          </a>
          <div className="hidden sm:flex items-center gap-1">
            {[
              { label: "About", href: "#about" },
              { label: "Gallery", href: "#gallery" },
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

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <motion.div style={{ y: heroY }} className="relative z-10 text-center max-w-4xl mx-auto">
          
          {/* Central mana crystal glow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF2D78]/20 via-[#A855F7]/10 to-transparent blur-3xl" />
          </motion.div>

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
            className="inline-flex items-center gap-2 rounded-full bg-[#1A0B2E]/80 backdrop-blur-sm px-5 py-2.5 border border-[#A855F7]/40 glow-purple mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#22D3EE]" />
            <span className="text-sm font-medium text-[#B8A2D9]">Magical art for magical people</span>
            <Sparkles className="w-4 h-4 text-[#FF2D78]" />
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springBouncy, delay: 0.5 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            <span className="gradient-mana drop-shadow-[0_0_30px_rgba(255,45,120,0.5)]">Starry</span>
            <br />
            <span className="text-[#F0E6FF] drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">Arts</span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 15, -10, 0], filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springSoft, delay: 0.7 }}
            className="text-lg md:text-xl text-[#B8A2D9] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Queer anime artist channeling galaxy mana into sparkly stickers, prints, and commissions. 
            Catch me at conventions or order online!
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
              className="rounded-full px-8 py-4 font-semibold flex items-center gap-2 border border-[#A855F7]/40 bg-[#1A0B2E]/60 text-[#F0E6FF] backdrop-blur-sm hover:border-[#FF2D78]/60 hover:bg-[#2D1B4E]/60 transition-all"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Hi, I'm <span className="gradient-mana">Starry</span>! 
              <motion.span className="inline-block ml-2" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                🌸
              </motion.span>
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
                I'm a queer digital artist who channels galaxy mana into magical, sparkly art. 
                My work celebrates anime culture, LGBTQ+ pride, and the joy of being unapologetically yourself.
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
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Mana Crystals 
              <motion.span className="inline-block ml-2" animate={{ rotate: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                💎
              </motion.span>
            </h2>
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
                    <h3 className="text-lg font-bold text-[#F0E6FF]" style={{ fontFamily: 'var(--font-fredoka)' }}>
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
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Convention Schedule 
              <motion.span className="inline-block ml-2" animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                📅
              </motion.span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { name: "Anime Expo", date: "July 4-7, 2026", location: "Los Angeles, CA", booth: "A-42", color: "#FF2D78" },
              { name: "Sakura-Con", date: "April 18-20, 2026", location: "Seattle, WA", booth: "B-15", color: "#A855F7" },
              { name: "Otakon", date: "August 1-3, 2026", location: "Washington, DC", booth: "C-08", color: "#22D3EE" },
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
                        <h3 className="text-xl font-bold text-[#F0E6FF]" style={{ fontFamily: 'var(--font-fredoka)' }}>
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

              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
                Channel Your <span className="gradient-mana">Mana</span>!
              </h2>
              
              <p className="text-lg text-[#B8A2D9] mb-8 max-w-xl mx-auto leading-relaxed">
                Open for commissions, collaborations, and custom orders. 
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
              <h3 className="text-2xl font-bold gradient-mana" style={{ fontFamily: 'var(--font-fredoka)' }}>
                StarryArts
              </h3>
              <p className="text-sm text-[#7A6B99] mt-1 flex items-center gap-1 justify-center md:justify-start">
                Made with <Heart className="w-4 h-4 text-[#FF2D78] inline drop-shadow-[0_0_5px_rgba(255,45,120,0.6)]" /> and galaxy mana
              </p>
            </motion.div>

            <div className="flex items-center gap-4">
              {[
                { icon: Camera, color: "#A855F7", label: "Instagram" },
                { icon: Mail, color: "#FF2D78", label: "Email" },
                { icon: ShoppingBag, color: "#22D3EE", label: "Shop" },
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
              © 2026 StarryArts. All rights reserved. 🏳️‍🌈
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
