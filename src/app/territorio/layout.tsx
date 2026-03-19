import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El territorio — Rescoldo · Otoño 2030",
  description:
    "Cinco territorios abastecen la mesa de Rescoldo: El Monte, El Bosque, El Río, La Costa, La Reserva.",
};

export default function TerritorioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
