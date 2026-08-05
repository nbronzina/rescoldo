"use client";

import { useState } from "react";

export function JournalCTA() {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="px-page py-32 border-t border-surface">
      <div className="max-w-measure mx-auto text-center">
        <h2 className="font-sans text-sm tracking-widest uppercase text-secondary mb-4">
          El journal
        </h2>
        <p className="font-serif text-xl text-text leading-body mb-2">
          Rescoldo — Primera temporada, otoño 2030
        </p>
        <p className="font-serif text-base text-secondary leading-body mb-10">
          El registro completo de la temporada.
        </p>

        <button
          onClick={() => setClicked(true)}
          className="px-6 py-3 border border-accent text-accent font-sans text-sm hover:bg-accent hover:text-bg transition-colors"
        >
          Descargar journal
        </button>

        {clicked && (
          <p
            role="status"
            aria-live="polite"
            className="font-serif text-sm text-secondary mt-6"
          >
            El journal estará disponible próximamente.
          </p>
        )}
      </div>
    </section>
  );
}
