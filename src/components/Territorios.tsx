import { ScrollFadeIn } from "./ScrollFadeIn";

const territorios = [
  {
    nombre: "El Monte",
    ubicacion: "Santiago del Estero",
    proveedor: "Raúl Heredia",
    descripcion:
      "Algarroba, chañar, mistol. Los frutos del bosque seco que llegan en bolsas de arpillera desde Añatuya.",
  },
  {
    nombre: "El Bosque",
    ubicacion: "Esquel, Chubut",
    proveedor: "Comunidad Mapuche Pillán Mahuiza",
    descripcion:
      "Morillas silvestres, llao llao, hongos de lenga. Recolección de altura entre los 800 y los 1400 metros.",
  },
  {
    nombre: "El Río",
    ubicacion: "Delta del Paraná",
    proveedor: "Pilar Iraola",
    descripcion:
      "Juncos, verdolaga, miel de isla. Lo que crece entre los arroyos del delta bajo, a dos horas de lancha desde Tigre.",
  },
  {
    nombre: "La Costa",
    ubicacion: "Bahía Samborombón",
    proveedor: "Ramona Calderón",
    descripcion:
      "Corvina rubia, pescadilla, cangrejo azul. Pesca artesanal a 170 km al sureste de Buenos Aires.",
  },
  {
    nombre: "La Reserva",
    ubicacion: "Costanera Sur, Buenos Aires",
    proveedor: "Recolección propia",
    descripcion:
      "Cortaderas, carqueja, aguaribay. Lo silvestre que crece a veinte minutos de la casa, dentro de la ciudad.",
  },
];

export function Territorios() {
  return (
    <section className="px-page py-24">
      <div className="max-w-page mx-auto">
        <ScrollFadeIn>
          <p className="font-sans text-sm tracking-widest uppercase text-secondary mb-16">
            El territorio
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {territorios.map((t) => (
            <ScrollFadeIn key={t.nombre}>
              <div>
                <div
                  className="aspect-[4/3] bg-surface mb-6"
                  role="img"
                  aria-label={`Fotografía de ${t.nombre}, ${t.ubicacion}`}
                />
                <p className="font-sans text-sm tracking-widest uppercase text-text mb-1">
                  {t.nombre}
                </p>
                <p className="font-sans text-xs text-muted mb-1">
                  {t.ubicacion} · {t.proveedor}
                </p>
                <p className="font-serif text-base leading-body text-secondary mt-3">
                  {t.descripcion}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
