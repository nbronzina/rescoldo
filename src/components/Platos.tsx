import { ScrollFadeIn } from "./ScrollFadeIn";

const platos = [
  {
    numero: 1,
    tipo: "Bocado",
    nombre: "Cortadera frita, carqueja, aguaribay",
    descripcion:
      "Lo primero que llega a la mesa viene de la Reserva Ecológica. Cortadera frita hasta que cruje, polvo de carqueja, aceite de aguaribay. Un bocado que sabe a orilla.",
  },
  {
    numero: 2,
    tipo: "Entrada fría",
    nombre: "Corvina curada, sal de junco, limón de quinta, aceite de peperina",
    descripcion:
      "Corvina rubia de Samborombón curada cuarenta y ocho horas en sal de junco del Delta. Limón de una quinta de Barracas. Peperina seca de Traslasierra.",
  },
  {
    numero: 3,
    tipo: "Entrada caliente",
    nombre: "Morilla rellena de miso de poroto pallar, caldo de huesos",
    descripcion:
      "Morillas de Esquel rellenas con miso que fermentamos en casa con poroto pallar del noroeste. Caldo largo de huesos de vaca, reducido tres días.",
  },
  {
    numero: 4,
    tipo: "Principal",
    nombre: "Zapallo plomo en rescoldo, arrope de chañar, manteca de hierbas",
    descripcion:
      "El zapallo entra entero al rescoldo del horno de barro y sale cuatro horas después. Arrope de chañar de Santiago del Estero. Manteca batida con hierbas del patio.",
  },
  {
    numero: 5,
    tipo: "Acompañamiento",
    nombre: "Entraña a la brasa, koji de maíz colorado, verdolaga",
    descripcion:
      "Entraña sobre las brasas del horno, koji que cultivamos con maíz colorado del norte, verdolaga fresca del Delta. El plato más directo de la mesa.",
  },
  {
    numero: 6,
    tipo: "Quiebre dulce",
    nombre: "Pan de algarroba con trigo, miel de isla, manteca",
    descripcion:
      "Pan que hacemos cada mañana con harina de algarroba de Raúl y trigo orgánico. Miel silvestre de las islas del Delta. Manteca de campo.",
  },
  {
    numero: 7,
    tipo: "Postre",
    nombre: "Llao llao en escabeche, helado de arrope de tuna, sal de río",
    descripcion:
      "Llao llao del bosque de lenga en escabeche suave. Helado de arrope de tuna del monte. Escamas de sal del Paraná. El último plato cierra el mapa.",
  },
];

export function Platos() {
  return (
    <section className="px-page py-24">
      <div className="max-w-page mx-auto">
        <ScrollFadeIn>
          <p className="font-sans text-sm tracking-widest uppercase text-secondary mb-4">
            Los platos
          </p>
          <p className="font-mono text-sm text-muted mb-16">
            Menú de degustación — $185.000 por persona · vinos a elección
          </p>
        </ScrollFadeIn>

        <div className="space-y-24">
          {platos.map((plato, i) => (
            <ScrollFadeIn key={plato.numero}>
              <div
                className={`md:flex md:gap-16 md:items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div
                    className="aspect-[3/2] bg-surface"
                    role="img"
                    aria-label={`${plato.tipo}: ${plato.nombre}`}
                  />
                </div>

                <div className="md:w-1/2">
                  <p className="font-mono text-xs text-muted mb-2">
                    {plato.numero} · {plato.tipo}
                  </p>
                  <h3 className="font-sans text-base font-medium text-text mb-4">
                    {plato.nombre}
                  </h3>
                  <p className="font-serif text-base leading-body text-secondary max-w-measure">
                    {plato.descripcion}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
