import Image from "next/image";
import { ScrollFadeIn } from "./ScrollFadeIn";

const equipo = [
  {
    nombre: "Victoria Nabel",
    rol: "Cerámica y diseño de imagen",
    imagen: "/images/equipo/victoria-nabel1.webp",
  },
  {
    nombre: "Nicolás Sardi",
    rol: "Construcción del espacio",
    imagen: "/images/equipo/nicolas-sardi.webp",
  },
  {
    nombre: "Mara Villanueva",
    rol: "Diseño del servicio",
    imagen: "/images/equipo/mara-villanueva.webp",
  },
  {
    nombre: "Tomás Ferreyra",
    rol: "Diseño de experiencia",
    imagen: "/images/equipo/tomas-ferreyra.webp",
  },
];

export function Equipo() {
  return (
    <section className="px-page py-24">
      <div className="max-w-page mx-auto">
        <ScrollFadeIn>
          <p className="font-sans text-sm tracking-widest uppercase text-secondary mb-16">
            El equipo
          </p>

          <div className="max-w-measure mb-20">
            <p className="font-serif text-lg leading-body text-text">
              La cocina es de Julián. Pero Rescoldo no es solo cocina. Es un
              espacio construido por siete personas que dejaron lo que estaban
              haciendo para armar una temporada en una casa de Barracas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {equipo.map((persona) => (
              <div key={persona.nombre}>
                <div className="aspect-[3/4] relative overflow-hidden bg-surface mb-4">
                  <Image
                    src={persona.imagen}
                    alt={`Retrato de ${persona.nombre}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-sans text-sm font-medium text-text">
                  {persona.nombre}
                </p>
                <p className="font-sans text-xs text-muted mt-1">
                  {persona.rol}
                </p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
