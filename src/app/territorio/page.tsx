import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const territorios = [
  {
    nombre: "El Monte",
    ubicacion: "Santiago del Estero",
    coordenadas: "-27.7833, -64.2667",
    distancia: "1.080 km al noroeste",
    proveedor: "Raúl Heredia, recolector",
    ingredientes: "Algarroba, chañar, mistol",
    texto:
      "El monte seco santiagueño produce frutos que nadie más busca. Raúl Heredia recolecta algarroba y chañar desde hace cincuenta años en las afueras de Añatuya. Muele la algarroba en un mortero de quebracho que heredó de su madre. El arrope de chañar lo hace en una olla de hierro sobre fuego de leña. Nos manda dos envíos por temporada. Cada bolsa de arpillera llega con un papel donde anota el día de recolección y el estado del monte.",
  },
  {
    nombre: "El Bosque",
    ubicacion: "Esquel, Chubut",
    coordenadas: "-42.9167, -71.3167",
    distancia: "1.840 km al sudoeste",
    proveedor: "Comunidad Mapuche Pillán Mahuiza",
    ingredientes: "Morillas, llao llao, hongos de lenga",
    texto:
      "Entre los 800 y los 1.400 metros de altura, en los bosques de lenga y coihue de la cordillera chubutense, crecen las morillas y el llao llao. La comunidad Pillán Mahuiza recolecta en temporada y seca lo que no se consume fresco. Las morillas llegan deshidratadas en frascos de vidrio. El llao llao viaja fresco, envuelto en hojas de nalca, y hay que usarlo en los tres días siguientes.",
  },
  {
    nombre: "El Río",
    ubicacion: "Delta del Paraná",
    coordenadas: "-34.3500, -58.5833",
    distancia: "50 km al norte",
    proveedor: "Pilar Iraola, bióloga y especialista en humedales",
    ingredientes: "Juncos, verdolaga, miel de isla",
    texto:
      "Pilar trabaja en el delta bajo desde hace quince años, estudiando los ciclos de crecida y los humedales de la segunda sección de islas. Conoce cada arroyo y cada albardón. Los juncos maduros los corta en abril, cuando la sal del tallo está concentrada. La verdolaga crece silvestre entre los sauces. La miel viene de colmenas que mantiene un isleño vecino hace treinta años.",
  },
  {
    nombre: "La Costa",
    ubicacion: "Bahía Samborombón",
    coordenadas: "-35.7500, -57.4167",
    distancia: "280 km al sudeste",
    proveedor: "Ramona Calderón, pescadora artesanal",
    ingredientes: "Corvina rubia, pescadilla, cangrejo azul",
    texto:
      "La bahía de Samborombón es el estuario más grande del Río de la Plata. Agua salobre, fondo de barro, corrientes lentas. Ramona Calderón pesca con redes de enmalle y línea desde hace más de treinta años. La corvina rubia llega entera, en cajones con hielo, el mismo día que sale del agua. La pescadilla es más chica y más delicada. Los cangrejos azules son de estero: pequeños, dulces, difíciles.",
  },
  {
    nombre: "La Reserva",
    ubicacion: "Costanera Sur, Buenos Aires",
    coordenadas: "-34.6167, -58.3500",
    distancia: "6 km al noreste",
    proveedor: "Recolección propia",
    ingredientes: "Cortaderas, carqueja, aguaribay",
    texto:
      "La Reserva Ecológica de Costanera Sur está a veinte minutos de la casa. Trescientas cincuenta hectáreas de naturaleza recuperada en lo que fue un relleno costero. Vamos a pie. Cortamos cortaderas jóvenes para el bocado de apertura. Juntamos carqueja silvestre y semillas de aguaribay para aceites y condimentos. Todo lo que usamos de la reserva crece sin intervención, a la vista de los edificios de Puerto Madero.",
  },
];

export default function Territorio() {
  return (
    <div className="pt-32 pb-16 px-page">
      <div className="max-w-page mx-auto">
        <ScrollFadeIn>
          <div className="max-w-measure mb-20">
            <p className="font-sans text-sm tracking-widest uppercase text-secondary mb-4">
              El territorio
            </p>
            <h1 className="font-serif text-2xl text-text mb-6">
              Cinco territorios, una mesa
            </h1>
            <p className="font-serif text-lg leading-body text-secondary">
              Cada ingrediente de Rescoldo tiene un origen, un nombre y un
              camino hasta la mesa de Lanín 234. Estos son los cinco territorios
              que abastecen la primera temporada.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="space-y-24">
          {territorios.map((t, i) => (
            <ScrollFadeIn key={t.nombre}>
              <div
                className={`md:flex md:gap-16 md:items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div
                    className="aspect-[4/3] bg-surface"
                    role="img"
                    aria-label={`Fotografía de ${t.nombre}, ${t.ubicacion}`}
                  />
                </div>

                <div className="md:w-1/2">
                  <p className="font-sans text-sm tracking-widest uppercase text-text mb-1">
                    {t.nombre}
                  </p>
                  <p className="font-mono text-xs text-muted mb-1">
                    {t.ubicacion} · {t.coordenadas}
                  </p>
                  <p className="font-mono text-xs text-muted mb-1">
                    {t.distancia}
                  </p>
                  <p className="font-sans text-xs text-secondary mb-4">
                    {t.proveedor} · {t.ingredientes}
                  </p>
                  <p className="font-serif text-base leading-body text-text">
                    {t.texto}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
