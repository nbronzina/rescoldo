"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const reducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-surface"
        style={reducedMotion ? {} : { y }}
      >
        <Image
          src="/images/hero/mesa-patio.jpeg"
          alt="Mesa larga en el patio de Rescoldo, vajilla de cerámica bajo el árbol"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAmEAACAQMDAgcBAAAAAAAAAAABAgMEESEABTESEwYiM0FRYYGx/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgMhIv/aAAwDAQACEQMRAD8Aity3XbKdZKecy1NaWHclCYYHAbnBtfHAP1pCHc5UWSKvWKNx1LGqGyA8AZ4Goyqr4IZZ4pKVpW6ulnaTJsce2Lf3Rl8SVEahB3LL5fU+PzRSozBF2Ri+j//Z"
        />
      </motion.div>

      {/* Overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="font-serif text-hero font-light tracking-tight text-bg">
          Rescoldo
        </h1>
        <p className="font-sans text-sm tracking-[0.25em] uppercase text-bg/80 mt-6">
          Barracas, Buenos Aires
        </p>
        <p className="font-sans text-sm tracking-[0.25em] uppercase text-bg/80 mt-1">
          Otoño 2030
        </p>
      </div>
    </section>
  );
}
