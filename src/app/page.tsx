"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, Star, Sparkles, Mail, Palette, Calendar, 
  MapPin, ShoppingBag, Camera, Wand2, Cloud, Smile 
} from "lucide-react";

/* ─── Spring configs ─── */
const springBouncy = { type: "spring" as const, stiffness: 300, damping: 15 };
const springSoft = { type: "spring" as const, stiffness: 200, damping: 20 };

/* ─── Reusable components ─── */
function FloatingOrb({ color, className }: { color: string; className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
      style={{ background: color }}
      animate={{ 
        x: [0, 30, -20, 0], 
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FloatingIcon({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className: string; 
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function SquishyCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`rounded-[2rem] bg-white border-2 border-[#FFB5C5]/30 sticker-shadow sticker-shadow-hover ${className}`}
      whileHover={{ 
        scale: 1.04, 
        rotate: -1,
        transition: springBouncy
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

function PillButton({ 
  children, 
  variant = "primary", 
  className = "" 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary"; 
  className?: string;
}) {
  const base = "inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition-all cursor-pointer";
  const styles = variant === "primary"
    ? "bg-gradient-to-r from-[#FFB5C5] to-[#E0B0FF] text-white shadow-lg shadow-[#FFB5C5]/30 hover:shadow-xl hover:shadow-[#FFB5C5]/40 hover:brightness-105"
    : "bg-white/80 backdrop-blur-sm border-2 border-[#FFB5C5]/30 text-[#4A2B4D] hover:bg-[#FFF0F5] hover:border-[#FFB5C5]/60";
  
  return (
    <motion.button
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.08, transition: springBouncy }}
      whileTap={{ scale: 0.92 }}
    >
      {children}
    </motion.button>
  );
}

/* ─── Main page ─── */
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  return (
    <div ref={containerRef} className="relative min-h-full overflow-hidden">
      
      {/* ═══════ Background floating orbs ═══════ */}
      <FloatingOrb color="#FFB5C5" className="w-[500px] h-[500px] -top-40 -left-40 opacity-40" />
      <FloatingOrb color="#E0B0FF" className="w-[400px] h-[400px] top-[20%] -right-20 opacity-30" />
      <FloatingOrb color="#B5EAD7" className="w-[350px] h-[350px] top-[60%] left-[10%] opacity-25" />
      <FloatingOrb color="#FFDAC1" className="w-[300px] h-[300px] bottom-[10%] right-[20%] opacity-30" />

      {/* ═══════ Floating decorative icons ═══════ */}
      <FloatingIcon className="top-[15%] left-[8%] text-[#FFB5C5]/40" delay={0}>
        <Cloud className="w-12 h-12" />
      </FloatingIcon>
      <FloatingIcon className="top-[35%] right-[12%] text-[#E0B0FF]/40" delay={1}>
        <Star className="w-8 h-8" />
      </FloatingIcon>
      <FloatingIcon className="top-[65%] left-[5%] text-[#B5EAD7]/50" delay={2}>
        <Heart className="w-10 h-10" />
      </FloatingIcon>
      <FloatingIcon className="top-[80%] right-[8%] text-[#FFDAC1]/50" delay={1.5}>
        <Sparkles className="w-9 h-9" />
      </FloatingIcon>
      <FloatingIcon className="top-[45%] left-[15%] text-[#FFB5C5]/30" delay={0.5}>
        <Smile className="w-6 h-6" />
      </FloatingIcon>

      {/* ═══════ Navigation (floating capsule) ═══════ */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...springSoft, delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-xl px-3 py-2 shadow-lg shadow-[#FFB5C5]/20 border border-[#FFB5C5]/20">
          <a href="#hero" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#FFF0F5] transition-colors">
            <Sparkles className="w-4 h-4 text-[#FFB5C5]" />
            <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-fredoka)' }}>StarryArts</span>
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
                className="px-4 py-2 rounded-full text-sm font-medium text-[#8B6B8D] hover:bg-[#FFF0F5] hover:text-[#4A2B4D] transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="#shop" 
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB5C5] to-[#E0B0FF] text-white text-sm font-semibold shadow-md hover:brightness-105 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Shop</span>
          </a>
        </div>
      </motion.nav>

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <motion.div style={{ y: heroY }} className="relative z-10 text-center max-w-4xl mx-auto">
          
          {/* Cloud decoration behind title */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-[40%] bg-gradient-to-br from-white via-[#FFF0F5] to-[#FFE4ED] opacity-80 blur-sm" />
          </motion.div>

          {/* Tiny stars around title */}
          <motion.div className="absolute -top-8 left-[10%]" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Star className="w-6 h-6 text-[#FFD93D] fill-[#FFD93D]" />
          </motion.div>
          <motion.div className="absolute -top-4 right-[15%]" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
            <Heart className="w-5 h-5 text-[#FFB5C5] fill-[#FFB5C5]" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ ...springBouncy, delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-5 py-2.5 border border-[#FFB5C5]/30 shadow-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#E0B0FF]" />
            <span className="text-sm font-medium text-[#8B6B8D]">Magical art for magical people</span>
            <Sparkles className="w-4 h-4 text-[#FFB5C5]" />
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springBouncy, delay: 0.5 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            <span className="gradient-text-kawaii">Starry</span>
            <br />
            <span className="text-[#4A2B4D]">Arts</span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springSoft, delay: 0.7 }}
            className="text-lg md:text-xl text-[#8B6B8D] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Queer anime artist creating sparkly stickers, prints, and commissions. 
            Catch me at conventions or order online!
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springSoft, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <PillButton variant="primary">
              <Palette className="w-5 h-5" />
              Browse Art
            </PillButton>
            <PillButton variant="secondary">
              <ShoppingBag className="w-5 h-5 text-[#FFB5C5]" />
              Visit Shop
            </PillButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-[#FFB5C5]/40 flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 rounded-full bg-[#FFB5C5]"
              animate={{ y: [0, 12, 0] }}
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
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E0B0FF]/20 px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-[#E0B0FF]" />
              <span className="text-sm font-semibold text-[#8B6B8D]">About Me</span>
              <Heart className="w-4 h-4 text-[#E0B0FF]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Hi, I'm <span className="gradient-text-kawaii">Starry</span>! 
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌸
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...springSoft, delay: 0.2 }}
            >
              <SquishyCard className="p-2 relative">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#FFB5C5]/30 via-[#E0B0FF]/20 to-[#B5EAD7]/30 p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                  {/* Blush marks */}
                  <div className="absolute top-[30%] left-[20%] w-12 h-8 rounded-full bg-[#FFB5C5]/30 blur-md" />
                  <div className="absolute top-[30%] right-[20%] w-12 h-8 rounded-full bg-[#FFB5C5]/30 blur-md" />
                  
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Wand2 className="w-32 h-32 text-[#E0B0FF]/50" />
                  </motion.div>

                  {/* Floating sparkles */}
                  <motion.div className="absolute top-4 right-4" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                    <Sparkles className="w-8 h-8 text-[#FFD93D]" />
                  </motion.div>
                </div>
              </SquishyCard>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...springSoft, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-[#8B6B8D] leading-relaxed">
                I'm a queer digital artist who loves creating magical, sparkly art that makes people smile. 
                My work celebrates anime culture, LGBTQ+ pride, and the joy of being unapologetically yourself.
              </p>
              <p className="text-lg text-[#8B6B8D] leading-relaxed">
                You'll find me at anime conventions across the country, selling stickers, prints, and taking commissions. 
                Every piece is made with love, glitter, and a touch of magic!
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {["Digital Art", "Stickers", "Prints", "Commissions", "Pride Art"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springBouncy, delay: 0.6 + i * 0.1 }}
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border-2"
                    style={{ 
                      backgroundColor: ['#FFF0F5', '#F3E8FF', '#E0F7FA', '#FFF8E1', '#E8F5E9'][i],
                      borderColor: ['#FFB5C5', '#E0B0FF', '#B5EAD7', '#FFD93D', '#C8E6C9'][i] + '60',
                      color: '#4A2B4D'
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

      {/* ═══════ GALLERY (Sticker Style) ═══════ */}
      <section id="gallery" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFB5C5]/20 px-4 py-2 mb-6">
              <Palette className="w-4 h-4 text-[#FFB5C5]" />
              <span className="text-sm font-semibold text-[#8B6B8D]">My Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Sticker Collection 
              <motion.span 
                className="inline-block ml-2"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎨
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Magical Girl", category: "Digital Art", color: "#FFB5C5", icon: Star },
              { title: "Chibi Stickers", category: "Stickers", color: "#E0B0FF", icon: Heart },
              { title: "Pride Collection", category: "Prints", color: "#B5EAD7", icon: Sparkles },
              { title: "Fantasy Land", category: "Digital Art", color: "#FFDAC1", icon: Cloud },
              { title: "Couple Portraits", category: "Commissions", color: "#C7CEEA", icon: Smile },
              { title: "Convention Art", category: "Originals", color: "#FFD93D", icon: Wand2 },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springSoft, delay: i * 0.1 }}
              >
                <SquishyCard className="p-4 cursor-pointer group">
                  <div className="relative">
                    {/* Sticker image placeholder */}
                    <div 
                      className="rounded-[1.5rem] aspect-[4/5] flex items-center justify-center transition-all group-hover:brightness-105"
                      style={{ backgroundColor: item.color + '30' }}
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={springBouncy}
                      >
                        <item.icon className="w-16 h-16" style={{ color: item.color + '99' }} />
                      </motion.div>

                      {/* Sticker "peel" effect corner */}
                      <div 
                        className="absolute top-0 right-0 w-16 h-16 rounded-tr-[1.5rem] rounded-bl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: item.color + '20' }}
                      />
                    </div>

                    {/* Blush marks */}
                    <div className="absolute bottom-8 left-4 w-6 h-4 rounded-full bg-[#FFB5C5]/20 blur-sm" />
                    <div className="absolute bottom-8 right-4 w-6 h-4 rounded-full bg-[#FFB5C5]/20 blur-sm" />
                  </div>

                  <div className="pt-5 px-2">
                    <h3 className="text-lg font-bold text-[#4A2B4D]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8B6B8D] mt-1">{item.category}</p>
                  </div>
                </SquishyCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONVENTIONS (Ticket Cards) ═══════ */}
      <section id="events" className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springSoft}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#B5EAD7]/30 px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-[#4DB6AC]" />
              <span className="text-sm font-semibold text-[#4A2B4D]">Catch Me At</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-fredoka)' }}>
              Convention Schedule 
              <motion.span
                className="inline-block ml-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📅
              </motion.span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { name: "Anime Expo", date: "July 4-7, 2026", location: "Los Angeles, CA", booth: "A-42", color: "#FFB5C5" },
              { name: "Sakura-Con", date: "April 18-20, 2026", location: "Seattle, WA", booth: "B-15", color: "#E0B0FF" },
              { name: "Otakon", date: "August 1-3, 2026", location: "Washington, DC", booth: "C-08", color: "#B5EAD7" },
            ].map((con, i) => (
              <motion.div
                key={con.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...springSoft, delay: i * 0.15 }}
              >
                <motion.div
                  className="relative rounded-[2rem] bg-white border-2 p-6 md:p-8 sticker-shadow"
                  style={{ borderColor: con.color + '40' }}
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1, transition: springBouncy }}
                >
                  {/* Dashed line "ticket tear" effect */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FFF8FB] border-2 border-dashed" style={{ borderColor: con.color + '30' }} />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#FFF8FB] border-2 border-dashed" style={{ borderColor: con.color + '30' }} />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-6 md:pl-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: con.color + '20' }}
                        >
                          <MapPin className="w-5 h-5" style={{ color: con.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-[#4A2B4D]" style={{ fontFamily: 'var(--font-fredoka)' }}>
                          {con.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-[#8B6B8D]">
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
                      <span 
                        className="px-4 py-2 rounded-full text-sm font-bold"
                        style={{ backgroundColor: con.color + '20', color: con.color }}
                      >
                        Booth {con.booth}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#B5EAD7]/30 text-[#4A2B4D] text-xs font-semibold">
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
          {/* Big squishy CTA card */}
          <SquishyCard className="p-8 md:p-12 relative overflow-hidden">
            {/* Decorative blobs inside */}
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#FFB5C5]/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#E0B0FF]/20 blur-2xl" />

            <div className="relative z-10">
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-[#FFD93D]" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-fredoka)' }}>
                Let's Create Something 
                <span className="gradient-text-kawaii">Magical</span>!
              </h2>
              
              <p className="text-lg text-[#8B6B8D] mb-8 max-w-xl mx-auto leading-relaxed">
                Open for commissions, collaborations, and custom orders. 
                Whether it's a portrait of your OC or pride art for your wall, I'd love to work with you!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <PillButton variant="primary">
                  <Mail className="w-5 h-5" />
                  Email Me
                </PillButton>
                <PillButton variant="secondary">
                  <Camera className="w-5 h-5 text-[#E0B0FF]" />
                  Instagram
                </PillButton>
              </div>
            </div>
          </SquishyCard>
        </motion.div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="relative py-12 px-6 border-t-2 border-dashed border-[#FFB5C5]/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div 
              className="text-center md:text-left"
              whileHover={{ scale: 1.05 }}
              transition={springBouncy}
            >
              <h3 className="text-2xl font-bold gradient-text-kawaii" style={{ fontFamily: 'var(--font-fredoka)' }}>
                StarryArts
              </h3>
              <p className="text-sm text-[#8B6B8D] mt-1 flex items-center gap-1 justify-center md:justify-start">
                Made with <Heart className="w-4 h-4 text-[#FFB5C5] fill-[#FFB5C5] inline" /> and glitter
              </p>
            </motion.div>

            <div className="flex items-center gap-4">
              {[
                { icon: Camera, color: "#E0B0FF", label: "Instagram" },
                { icon: Mail, color: "#FFB5C5", label: "Email" },
                { icon: ShoppingBag, color: "#B5EAD7", label: "Shop" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center sticker-shadow"
                  style={{ borderColor: social.color + '30' }}
                  whileHover={{ scale: 1.2, rotate: 10, transition: springBouncy }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-dashed border-[#FFB5C5]/20 text-center">
            <p className="text-sm text-[#B8A2B9]">
              © 2026 StarryArts. All rights reserved. 🏳️‍🌈
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
