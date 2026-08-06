import { ScrollFadeIn } from "./ScrollFadeIn";

export function Vino() {
  return (
    <section className="px-page py-16">
      <ScrollFadeIn>
        <div className="max-w-measure mx-auto">
          <h2 className="font-sans text-sm tracking-widest uppercase text-secondary mb-4">
            El vino
          </h2>
          <p className="font-serif text-base leading-body text-text mb-2">
            Rubén Quiroga · Bodega Las Bardas, Alto Valle del Río Negro. Malbec y Cabernet Franc de viñas viejas.
            Sin sulfitos agregados, levaduras espontáneas.
          </p>
          <p className="font-mono text-xs text-muted">
            Vinos a elección · servicio a cargo de Lara Espina
          </p>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
