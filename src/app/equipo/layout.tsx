import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El equipo — Rescoldo · Otoño 2030",
  description:
    "Siete personas, una temporada. El equipo detrás de Rescoldo en Barracas, Buenos Aires.",
};

export default function EquipoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
