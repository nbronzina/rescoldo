import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FEFCF9",
        text: "#2D2D2D",
        secondary: "#666666",
        muted: "#888888",
        accent: "#8B3A1A",
        surface: "#F0ECE6",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.5rem",
        "2xl": "2.5rem",
        hero: "clamp(3rem, 8vw, 7rem)",
        "journal-date": "2.25rem",
      },
      lineHeight: {
        body: "1.6",
        loose: "1.8",
      },
      maxWidth: {
        measure: "65ch",
        column: "680px",
        page: "1200px",
      },
      spacing: {
        page: "clamp(1.5rem, 5vw, 5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
