import type { Metadata } from "next";
import Image from "next/image";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "El territorio",
  description:
    "Cinco territorios abastecen la mesa: el monte, el bosque, el río, la costa y la reserva.",
  alternates: { canonical: "/territorio" },
};

const territorios = [
  {
    nombre: "El Monte",
    ubicacion: "Santiago del Estero",
    coordenadas: "-27.7833, -64.2667",
    distancia: "1.080 km al noroeste",
    proveedor: "Raúl Cálderes, recolector",
    ingredientes: "Algarroba, chañar, mistol",
    imagen: "/images/territorios/el-monte.webp",
    alt: "Raúl Cálderes moliendo algarroba",
    texto:
      "El monte seco santiagueño produce frutos que nadie más busca. Raúl Cálderes recolecta algarroba y chañar desde hace cincuenta años en las afueras de Fernández. Muele la algarroba en un mortero de quebracho que heredó de su madre. El arrope de chañar lo hace en una olla de hierro sobre fuego de leña. Nos manda dos envíos por temporada. Cada bolsa de arpillera llega con un papel donde anota el día de recolección y el estado del monte.",
  },
  {
    nombre: "El Bosque",
    ubicacion: "Esquel, Chubut",
    coordenadas: "-42.9167, -71.3167",
    distancia: "1.840 km al suroeste",
    proveedor: "Santiago Orbe, Rescoldo",
    ingredientes: "Morillas, llao llao, hongos de lenga",
    imagen: "/images/territorios/el-bosque.webp",
    alt: "Santiago Orbe buscando hongos en el bosque de lenga",
    texto:
      "Entre los 800 y los 1.400 metros de altura, en los bosques de lenga y coihue de la cordillera chubutense, crecen las morillas y el llao llao. Santiago va dos veces por temporada. Trabaja con el CIEFAP, que conoce los rodales y los ciclos de cada especie. Las morillas llegan deshidratadas en frascos de vidrio. El llao llao viaja fresco, envuelto en hojas de nalca, y hay que usarlo en los tres días siguientes.",
  },
  {
    nombre: "El Río",
    ubicacion: "Delta del Paraná",
    coordenadas: "-34.3500, -58.5833",
    distancia: "35 km al norte",
    proveedor: "Pilar Iraola, bióloga",
    ingredientes: "Juncos, verdolaga, miel de isla",
    imagen: "/images/territorios/el-rio.webp",
    alt: "Pilar Iraola en la lancha por los arroyos del Delta",
    texto:
      "Pilar lleva al equipo en lancha por los arroyos del bajo. Conoce cada albardón y cada ciclo de crecida. Los juncos maduros los cortamos en abril, cuando la sal del tallo está concentrada. La verdolaga crece silvestre entre los sauces. La miel viene de Oriente, un isleño que tiene cuarenta colmenas hace treinta años.",
  },
  {
    nombre: "La Costa",
    ubicacion: "Bahía Samborombón",
    coordenadas: "-35.7500, -57.4167",
    distancia: "170 km al sureste",
    proveedor: "Ramona Calderón, pescadora artesanal",
    ingredientes: "Corvina rubia, pescadilla, cangrejo azul",
    imagen: "/images/territorios/la-costa.webp",
    alt: "Ramona Calderón pescando de noche en Bahía Samborombón",
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
    imagen: "/images/territorios/la-reserva.webp",
    alt: "La Reserva Ecológica con cortaderas",
    texto:
      "La Reserva Ecológica de Costanera Sur está a veinte minutos de la casa. Trescientas cincuenta hectáreas de naturaleza recuperada en lo que fue un relleno costero. Vamos a pie. En los bordes del camino de acceso y los terraplenes del Belgrano Sur juntamos cortaderas, carqueja y aguaribay. Todo crece sin intervención, a la vista de los edificios de Puerto Madero.",
  },
];

export default function Territorio() {
  return (
    <div className="pt-32 pb-16 px-page">
      <div className="max-w-page mx-auto">
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

        <ScrollFadeIn>
          <div className="space-y-24">
            {territorios.map((t, i) => (
              <div
                key={t.nombre}
                className={`md:flex md:gap-16 md:items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="aspect-[4/3] relative overflow-hidden bg-surface">
                    <Image
                      src={t.imagen}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h2 className="font-sans text-sm tracking-widest uppercase text-text mb-1">
                    {t.nombre}
                  </h2>
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
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
