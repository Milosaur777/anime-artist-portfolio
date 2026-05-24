"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cutePrompts = [
  "Magical art for magical people ✨",
  "Made with stardust and love 💖",
  "Stickers, prints, and sparkles! 🎨",
  "Queer joy in every brushstroke 🏳️‍🌈",
  "Your OC deserves to shine ✨",
  "Con-ready since 2020 🎪",
  "One artist, infinite galaxies 💫",
  "Glitter is a lifestyle ✨",
  "Pride art with sparkle power 🌈",
];

export function RotatingPrompt() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cutePrompts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-6 flex items-center justify-center overflow-hidden w-[180px] sm:w-[220px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xs sm:text-sm font-medium text-[#B8A2D9] whitespace-nowrap absolute"
        >
          {cutePrompts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
