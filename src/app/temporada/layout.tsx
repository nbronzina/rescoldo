import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La temporada — Rescoldo · Otoño 2030",
  description:
    "Journal de la primera temporada de Rescoldo. Marzo–mayo 2030, Lanín 234, Barracas.",
};

export default function TemporadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
