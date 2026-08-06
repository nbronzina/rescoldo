export function JournalCTA() {
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

        <p className="font-serif text-base text-text leading-body mb-1">
          Está en imprenta. Cien ejemplares.
        </p>
        <p className="font-serif text-base text-secondary leading-body">
          Si querés uno,{" "}
          <a
            href="mailto:rescoldo@lanin234.com.ar"
            className="text-accent hover:text-text"
          >
            escribinos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
