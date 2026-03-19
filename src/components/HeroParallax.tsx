"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-surface"
        style={{ y }}
      >
        {/* Placeholder — replace with mesa del patio image */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-bg/60" />
      </motion.div>

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="font-serif text-hero font-light tracking-tight text-text">
          Rescoldo
        </h1>
        <p className="font-sans text-sm tracking-[0.25em] uppercase text-secondary mt-6">
          Barracas, Buenos Aires
        </p>
        <p className="font-sans text-sm tracking-[0.25em] uppercase text-secondary mt-1">
          Otoño 2030
        </p>
      </div>
    </section>
  );
}
