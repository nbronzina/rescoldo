import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const viewport: Viewport = {
  themeColor: "#FEFCF9",
};

const DESCRIPTION =
  "Cocinamos entre marzo y mayo en una casa de Barracas. Este es el registro de la primera temporada.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rescoldo — Barracas, Buenos Aires · Otoño 2030",
    template: "%s — Rescoldo",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Rescoldo — Barracas, Buenos Aires · Otoño 2030",
    description: DESCRIPTION,
    siteName: "Rescoldo",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rescoldo — Barracas, Buenos Aires · Otoño 2030",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-text font-serif">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-bg focus:px-4 focus:py-2 focus:border focus:border-accent font-sans text-sm text-text"
        >
          Ir al contenido
        </a>
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
