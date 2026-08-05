"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function Nav() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const currentScrollY = window.scrollY;
      let nextVisible = visibleRef.current;
      if (currentScrollY < 10) {
        nextVisible = true;
      } else if (currentScrollY > lastScrollY.current) {
        nextVisible = false;
      } else {
        nextVisible = true;
      }
      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
        if (!nextVisible) setMenuOpen(false);
      }
      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/temporada", label: "La temporada" },
    { href: "/territorio", label: "El territorio" },
    { href: "/equipo", label: "El equipo" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-bg/95 transition-transform duration-300 ease-in-out ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="max-w-page mx-auto px-page flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-sans text-sm font-medium tracking-widest uppercase text-text"
        >
          Rescoldo
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-secondary hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-3 text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            className="text-text"
          >
            {menuOpen ? (
              <>
                <line x1="2" y1="2" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="12" x2="18" y2="2" stroke="currentColor" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="menu-movil" className="md:hidden border-t border-surface px-page pb-6 pt-4 bg-bg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 font-sans text-sm text-secondary hover:text-text"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
