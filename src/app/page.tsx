export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero placeholder */}
      <section className="relative h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-serif text-hero font-light tracking-tight text-text">
            Rescoldo
          </h1>
          <p className="font-sans text-sm tracking-widest uppercase text-secondary mt-4">
            Barracas, Buenos Aires
          </p>
          <p className="font-sans text-sm tracking-widest uppercase text-secondary mt-1">
            Otoño 2030
          </p>
        </div>
      </section>

      {/* Declaración placeholder */}
      <section className="px-page py-32">
        <div className="max-w-measure mx-auto">
          <p className="font-serif text-lg leading-body text-text">
            Placeholder para la declaración de Julián Arce. Texto en primera
            persona, 3-4 párrafos sobre el proyecto, el fuego, el territorio.
          </p>
        </div>
      </section>
    </div>
  );
}
