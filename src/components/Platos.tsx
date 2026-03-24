import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

const platos = [
  {
    numero: 1,
    tipo: "Bocado",
    nombre: "Cortadera frita, carqueja, aguaribay",
    imagen: "/images/platos/1.jpeg",
    descripcion:
      "Cortadera frita en sartén de hierro sobre las brasas del horno. Polvo de carqueja seca, aceite de aguaribay en maceración. Un bocado que sabe a orilla.",
  },
  {
    numero: 2,
    tipo: "Entrada fría",
    nombre: "Corvina curada, sal de junco, limón de quinta, aceite de peperina",
    imagen: "/images/platos/2.jpeg",
    descripcion:
      "Corvina rubia de Samborombón curada veinte minutos en sal de junco del Delta. Limón de una quinta abandonada del Delta. Aceite de peperina de Traslasierra. Sin fuego. Sin cocción.",
  },
  {
    numero: 3,
    tipo: "Entrada caliente",
    nombre: "Morilla rellena de miso de poroto pallar, caldo de huesos",
    imagen: "/images/platos/03-entrada-caliente.jpg",
    descripcion:
      "Morillas de Esquel rellenas con miso que fermentamos en casa con poroto pallar del noroeste. Caldo de huesos de vaca reducido seis horas en el horno de barro.",
  },
  {
    numero: 4,
    tipo: "Principal",
    nombre: "Zapallo plomo en rescoldo, arrope de chañar, manteca de hierbas",
    imagen: "/images/platos/04-principal.jpg",
    descripcion:
      "El zapallo entra entero a las cuatro de la tarde, enterrado en las cenizas calientes del horno. Sale cuatro horas después. Arrope de chañar de Raúl. Manteca batida con hierbas del patio.",
  },
  {
    numero: 5,
    tipo: "Acompañamiento",
    nombre: "Entraña a la brasa, koji de maíz colorado, verdolaga",
    imagen: "/images/platos/05-acompanamiento.jpg",
    descripcion:
      "Entraña sobre brasas corridas afuera del horno. Koji que cultivamos con maíz colorado del norte. Verdolaga fresca del Delta. El plato más directo de la mesa.",
  },
  {
    numero: 6,
    tipo: "Quiebre dulce",
    nombre: "Pan de algarroba con trigo, miel de isla, manteca",
    imagen: "/images/platos/06-quiebre-dulce.jpg",
    objectPosition: "center 40%",
    descripcion:
      "Pan que entra al horno a las seis de la mañana, cuando la temperatura está en su punto más alto. Harina de algarroba de Raúl Cálderes, trigo orgánico. Miel silvestre de las islas del Delta. Manteca de campo.",
  },
  {
    numero: 7,
    tipo: "Postre",
    nombre: "Llao llao en escabeche, helado de arrope de tuna, sal de río",
    imagen: "/images/platos/07-postre.jpg",
    descripcion:
      "Llao llao del bosque de lenga en escabeche suave — fermentado en el lavadero. Helado de arrope de tuna del monte. Escamas de sal del Paraná. El último plato cierra el mapa.",
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

        <ScrollFadeIn>
          <div className="space-y-24">
            {platos.map((plato, i) => (
              <div
                key={plato.numero}
                className={`md:flex md:gap-16 md:items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="aspect-[3/2] relative overflow-hidden bg-surface">
                    <Image
                      src={plato.imagen}
                      alt={`${plato.tipo}: ${plato.nombre}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      style={plato.objectPosition ? { objectPosition: plato.objectPosition } : undefined}
                    />
                  </div>
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
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
