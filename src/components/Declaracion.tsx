import { ScrollFadeIn } from "./ScrollFadeIn";

export function Declaracion() {
  return (
    <section className="px-page py-32">
      <ScrollFadeIn>
        <div className="max-w-measure mx-auto space-y-6">
          <p className="font-serif text-lg leading-body text-text">
            Volví a Buenos Aires después de diez años afuera con la certeza de
            que no quería abrir un restaurante. Quería cocinar en un lugar que
            ya existiera. Que tuviera su propia historia antes de que yo llegara.
          </p>
          <p className="font-serif text-lg leading-body text-text">
            La casa de Lanín tenía un paraíso centenario en el patio y una
            galería que miraba al sur. Nicolás construyó el horno de barro
            entre las columnas. No necesitaba nada más. Diez cubiertos. Una
            mesa larga. El fuego siempre encendido.
          </p>
          <p className="font-serif text-lg leading-body text-text">
            Rescoldo no es un restaurante. Es una temporada. Tres meses de
            cocina con lo que el territorio da entre marzo y mayo: el monte
            santiagueño, el bosque patagónico, el delta, la costa, la reserva
            que tenemos a veinte minutos. Cada plato es un lugar. Cada
            ingrediente tiene nombre y apellido.
          </p>
          <p className="font-serif text-lg leading-body text-text">
            Rescoldo no tiene certificaciones. Ni sello, ni auditoría, ni
            código que escanear. Tiene nombres: Raúl, Pilar, Ramona, Rubén.
            Cuando algo llega mal, no se reclama a un sistema. Se llama a una
            persona.
          </p>
          <p className="font-serif text-lg leading-body text-text">
            Cuando termine mayo, el fuego se apaga. La casa vuelve a ser casa.
            Y nosotros volvemos al territorio a buscar lo que viene.
          </p>
          <p className="font-sans text-sm text-secondary mt-8">
            — Julián Arce, marzo 2030
          </p>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
