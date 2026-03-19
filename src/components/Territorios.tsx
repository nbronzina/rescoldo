import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

const territorios = [
  {
    nombre: "El Monte",
    ubicacion: "Santiago del Estero",
    proveedor: "Raúl Cálderes",
    imagen: "/images/territorios/el-monte.webp",
    alt: "Raúl Cálderes moliendo algarroba",
    descripcion:
      "Algarroba, chañar, mistol. Los frutos del bosque seco que llegan en bolsas de arpillera desde Fernández.",
  },
  {
    nombre: "El Bosque",
    ubicacion: "Esquel, Chubut",
    proveedor: "Santiago Orbe, biólogo — CIEFAP",
    imagen: "/images/territorios/el-bosque.webp",
    alt: "Santiago Orbe buscando hongos en el bosque de lenga",
    descripcion:
      "Morillas silvestres, llao llao, hongos de lenga. Recolección de altura entre los 800 y los 1400 metros.",
  },
  {
    nombre: "El Río",
    ubicacion: "Delta del Paraná",
    proveedor: "Pilar Iraola",
    imagen: "/images/territorios/el-rio.webp",
    alt: "Pilar Iraola en la lancha por los arroyos del Delta",
    descripcion:
      "Juncos, verdolaga, miel de isla. Lo que crece entre los arroyos del delta bajo, a dos horas de lancha desde Tigre.",
  },
  {
    nombre: "La Costa",
    ubicacion: "Bahía Samborombón",
    proveedor: "Ramona Calderón",
    imagen: "/images/territorios/la-costa.webp",
    alt: "Ramona Calderón pescando de noche en Bahía Samborombón",
    descripcion:
      "Corvina rubia, pescadilla, cangrejo azul. Pesca artesanal a 170 km al sureste de Buenos Aires.",
  },
  {
    nombre: "La Reserva",
    ubicacion: "Costanera Sur, Buenos Aires",
    proveedor: "Recolección propia",
    imagen: "/images/territorios/la-reserva.webp",
    alt: "La Reserva Ecológica con cortaderas",
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

        <ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {territorios.map((t, i) => (
              <div
                key={t.nombre}
                className={
                  i === territorios.length - 1 && territorios.length % 2 === 1
                    ? "md:col-span-2 md:max-w-[50%] md:mx-auto"
                    : undefined
                }
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-surface mb-6">
                  <Image
                    src={t.imagen}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
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
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
