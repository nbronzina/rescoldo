"use client";

import { useState, FormEvent } from "react";

export function ListaEspera() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <p
            role="status"
            aria-live="polite"
            className="font-serif text-base text-secondary leading-body"
          >
            Anotado. Te escribimos en septiembre.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <label htmlFor="email" className="sr-only">
              Tu email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full sm:w-64 px-4 py-3 bg-transparent border border-secondary text-text font-sans text-sm placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 border border-accent text-accent font-sans text-sm hover:bg-accent hover:text-bg transition-colors"
            >
              Anotarme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
