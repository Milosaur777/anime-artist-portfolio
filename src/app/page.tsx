"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Calendar, Mail, Camera, Heart, Star, Wand2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const sparklePositions = [
  { top: "10%", left: "15%", size: 12, delay: "0s", color: "#ffd700" },
  { top: "20%", right: "10%", size: 8, delay: "1s", color: "#ff6b9d" },
  { top: "60%", left: "8%", size: 10, delay: "2s", color: "#4deeea" },
  { top: "80%", right: "20%", size: 14, delay: "0.5s", color: "#ffd700" },
  { top: "40%", left: "25%", size: 6, delay: "1.5s", color: "#c77dff" },
  { top: "75%", left: "70%", size: 9, delay: "2.5s", color: "#ff6b9d" },
  { top: "30%", right: "25%", size: 11, delay: "3s", color: "#4deeea" },
];

const galleryItems = [
  { title: "Magical Girl Series", category: "Digital Art", color: "from-[#ff6b9d]/30 to-[#c77dff]/30" },
  { title: "Chibi Stickers", category: "Stickers", color: "from-[#4deeea]/30 to-[#c77dff]/30" },
  { title: "Pride Collection", category: "Prints", color: "from-[#ff6b9d]/30 to-[#ffd700]/30" },
  { title: "Fantasy Landscapes", category: "Digital Art", color: "from-[#c77dff]/30 to-[#4deeea]/30" },
  { title: "Couple Portraits", category: "Commissions", color: "from-[#ffd700]/30 to-[#ff6b9d]/30" },
  { title: "Convention Sketches", category: "Originals", color: "from-[#4deeea]/30 to-[#ffd700]/30" },
];

const conventions = [
  { name: "Anime Expo", date: "July 4-7, 2026", location: "Los Angeles, CA", booth: "A-42" },
  { name: "Sakura-Con", date: "April 18-20, 2026", location: "Seattle, WA", booth: "B-15" },
  { name: "Otakon", date: "August 1-3, 2026", location: "Washington, DC", booth: "C-08" },
];

function Sparkle({ size, color, delay }: { size: number; color: string; delay: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className="absolute animate-twinkle"
      style={{ animationDelay: delay }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: parseFloat(delay) }}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </motion.svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 relative overflow-hidden">
      {/* Background Sparkles */}
      {sparklePositions.map((sparkle, i) => (
        <Sparkle
          key={i}
          size={sparkle.size}
          color={sparkle.color}
          delay={sparkle.delay}
        />
      ))}

      {/* Navigation */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 w-full backdrop-blur-lg bg-[#1a0b2e]/80 border-b border-[#c77dff]/20"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
            <span className="text-[#ff6b9d]">Starry</span><span className="text-[#c77dff]">Arts</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="text-[#d4a5d4] transition-colors hover:text-[#ff6b9d]">About</a>
            <a href="#gallery" className="text-[#d4a5d4] transition-colors hover:text-[#ff6b9d]">Gallery</a>
            <a href="#conventions" className="text-[#d4a5d4] transition-colors hover:text-[#ff6b9d]">Conventions</a>
            <a href="#contact" className="text-[#d4a5d4] transition-colors hover:text-[#ff6b9d]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2d1b4e] text-[#d4a5d4] transition-all hover:bg-[#ff6b9d]/20 hover:text-[#ff6b9d] hover:scale-110"
              aria-label="Instagram"
            >
              <Camera className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col">
        <section className="relative flex flex-col items-center justify-center px-6 py-28 md:py-36">
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-[#ff6b9d]/20 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-1/4 bottom-1/4 h-[250px] w-[250px] rounded-full bg-[#c77dff]/20 blur-[100px]"
          />

          <div className="mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c77dff]/30 bg-[#2d1b4e]/80 px-4 py-2 text-sm text-[#d4a5d4] backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-[#ffd700]" />
              Magical art for magical people
              <Sparkles className="h-4 w-4 text-[#ffd700]" />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              <span className="gradient-text">StarryArts</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#d4a5d4] md:text-xl"
            >
              Queer anime artist creating sparkly stickers, prints, and commissions. 
              Catch me at conventions or order online! 
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="#gallery"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#c77dff] px-8 text-sm font-semibold text-white shadow-lg shadow-[#ff6b9d]/25 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-[#ff6b9d]/30 hover:scale-105"
              >
                <Palette className="h-4 w-4" />
                View My Art
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#c77dff]/40 bg-[#2d1b4e]/60 px-8 text-sm font-semibold text-[#fff0f5] backdrop-blur-sm transition-all hover:bg-[#4a2b7a]/60 hover:border-[#ff6b9d]/60 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Commission Me
              </a>
            </motion.div>
          </div>
        </section>

        {/* Rainbow Divider */}
        <div className="mx-auto h-1 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#ff6b9d] via-[#c77dff] to-[#4deeea] animate-rainbow" />

        {/* About Section */}
        <section id="about" className="px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl"
          >
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#ff6b9d]/20 to-[#c77dff]/20 p-1">
                  <div className="h-full w-full rounded-[22px] bg-[#2d1b4e] flex items-center justify-center">
                    <Wand2 className="h-24 w-24 text-[#c77dff]/40" />
                  </div>
                </div>
                {/* Decorative sparkles around image */}
                <Star className="absolute -top-4 -right-4 h-8 w-8 text-[#ffd700] animate-twinkle" />
                <Heart className="absolute -bottom-4 -left-4 h-6 w-6 text-[#ff6b9d] animate-twinkle" style={{ animationDelay: '1s' }} />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#fff0f5] md:text-4xl" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                  Hi, I'm <span className="gradient-text">Starry</span>! ✨
                </h2>
                <p className="mt-4 text-[#d4a5d4] leading-relaxed">
                  I'm a queer digital artist who loves creating magical, sparkly art that makes people smile. 
                  My work celebrates anime culture, LGBTQ+ pride, and the joy of being unapologetically yourself.
                </p>
                <p className="mt-4 text-[#d4a5d4] leading-relaxed">
                  You'll find me at anime conventions across the country, selling stickers, prints, and taking 
                  commissions. Every piece I create is made with love, glitter, and a touch of magic!
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Digital Art", "Stickers", "Prints", "Commissions", "Pride Art"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[#c77dff]/30 bg-[#2d1b4e]/60 px-4 py-1.5 text-sm text-[#d4a5d4] backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Rainbow Divider */}
        <div className="mx-auto h-1 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#4deeea] via-[#c77dff] to-[#ff6b9d] animate-rainbow" />

        {/* Gallery Section */}
        <section id="gallery" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#fff0f5] md:text-5xl" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                My <span className="gradient-text">Gallery</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#d4a5d4]">
                A collection of my favorite works — from magical girls to pride art!
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {galleryItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#c77dff]/20 bg-[#2d1b4e] p-4 shadow-lg shadow-[#c77dff]/10 transition-all hover:shadow-xl hover:shadow-[#ff6b9d]/20 hover:border-[#ff6b9d]/40"
                >
                  <div className={`aspect-[4/5] w-full rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transition-all group-hover:brightness-110`}>
                    <Palette className="h-16 w-16 text-[#fff0f5]/30" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-[#fff0f5]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#d4a5d4]">{item.category}</p>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <Sparkles className="h-5 w-5 text-[#ffd700]" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Rainbow Divider */}
        <div className="mx-auto h-1 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#ffd700] via-[#ff6b9d] to-[#c77dff] animate-rainbow" />

        {/* Convention Schedule */}
        <section id="conventions" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#fff0f5] md:text-5xl" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                Catch Me At <span className="gradient-text">Conventions</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#d4a5d4]">
                Come say hi, browse my art, and maybe commission something special!
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {conventions.map((con) => (
                <motion.div
                  key={con.name}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#c77dff]/20 bg-[#2d1b4e]/80 p-6 backdrop-blur-sm transition-all hover:border-[#ff6b9d]/40 hover:shadow-lg hover:shadow-[#ff6b9d]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6b9d]/20 to-[#c77dff]/20">
                      <Calendar className="h-6 w-6 text-[#ff6b9d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#fff0f5]">{con.name}</h3>
                      <p className="text-sm text-[#d4a5d4]">{con.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 sm:text-right">
                    <div>
                      <p className="text-sm font-medium text-[#fff0f5]">{con.date}</p>
                      <p className="text-xs text-[#d4a5d4]">Booth {con.booth}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[#ff6b9d]/10 px-3 py-1 text-xs font-medium text-[#ff6b9d]">
                      Upcoming
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Rainbow Divider */}
        <div className="mx-auto h-1 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#c77dff] via-[#4deeea] to-[#ffd700] animate-rainbow" />

        {/* Contact / CTA Section */}
        <section id="contact" className="px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center relative"
          >
            {/* Decorative elements */}
            <Star className="absolute -top-8 left-0 h-10 w-10 text-[#ffd700] animate-twinkle" />
            <Heart className="absolute -top-4 right-0 h-8 w-8 text-[#ff6b9d] animate-twinkle" style={{ animationDelay: '1.5s' }} />
            
            <h2 className="text-3xl font-bold tracking-tight text-[#fff0f5] md:text-5xl" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Let's Create Something <span className="gradient-text">Magical</span>! ✨
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[#d4a5d4] leading-relaxed">
              Open for commissions, collaborations, and custom sticker/print orders. 
              Whether it's a portrait of your OC or pride art for your wall, I'd love to work with you!
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@starryarts.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#c77dff] px-8 text-sm font-semibold text-white shadow-lg shadow-[#ff6b9d]/25 transition-all hover:brightness-110 hover:shadow-xl hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#c77dff]/40 bg-[#2d1b4e]/60 px-8 text-sm font-semibold text-[#fff0f5] backdrop-blur-sm transition-all hover:bg-[#4a2b7a]/60 hover:border-[#ff6b9d]/60 hover:scale-105"
              >
                <Camera className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c77dff]/20 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
                <span className="text-[#ff6b9d]">Starry</span><span className="text-[#c77dff]">Arts</span>
              </span>
              <p className="mt-2 text-sm text-[#9d7bb0]">
                Made with ✨, 💖, and a lot of glitter
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2d1b4e] text-[#d4a5d4] transition-all hover:bg-[#ff6b9d]/20 hover:text-[#ff6b9d] hover:scale-110"
                aria-label="Instagram"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@starryarts.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2d1b4e] text-[#d4a5d4] transition-all hover:bg-[#ff6b9d]/20 hover:text-[#ff6b9d] hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-6xl text-center">
            <p className="text-xs text-[#9d7bb0]">
              © 2026 StarryArts. All rights reserved. 🏳️‍🌈
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
