import { ScrollFadeIn } from "./ScrollFadeIn";

export function CitaPrensa() {
  return (
    <section className="px-page py-20">
      <ScrollFadeIn>
        <div className="max-w-measure mx-auto text-center">
          <blockquote className="font-serif text-xl italic text-text leading-body mb-4">
            &ldquo;Una de las aperturas más silenciosas y más necesarias del
            año.&rdquo;
          </blockquote>
          <p className="font-sans text-xs text-muted">
            — Lento, revista de gastronomía · mayo 2030
          </p>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
