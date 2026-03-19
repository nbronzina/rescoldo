"use client";

import { useState } from "react";

export function ListaEspera() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="px-page py-32 border-t border-surface">
      <div className="max-w-measure mx-auto text-center">
        <p className="font-serif text-xl text-text leading-body mb-2">
          Rescoldo regresa.
        </p>
        <p className="font-serif text-xl text-text leading-body mb-12">
          Otoño 2031.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-secondary">
            Anotado. Te escribimos cuando abramos la próxima temporada.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              aria-label="Email para lista de espera"
              className="flex-1 px-4 py-3 bg-surface border border-surface text-text font-sans text-sm rounded-none focus:outline-none focus:border-accent placeholder:text-muted"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-text text-bg font-sans text-sm hover:bg-accent"
            >
              Anotarme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
