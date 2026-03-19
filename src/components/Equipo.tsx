import { ScrollFadeIn } from "./ScrollFadeIn";

const equipo = [
  {
    nombre: "Victoria Nabel",
    rol: "Cerámica y diseño de imagen",
  },
  {
    nombre: "Nicolás Sardi",
    rol: "Construcción del espacio",
  },
  {
    nombre: "Mara Villanueva",
    rol: "Diseño del servicio",
  },
  {
    nombre: "Tomás Ferreyra",
    rol: "Diseño de experiencia",
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
        </ScrollFadeIn>

        {/* Julián as voice, not portrait */}
        <ScrollFadeIn>
          <div className="max-w-measure mb-20">
            <p className="font-serif text-lg leading-body text-text">
              La cocina es de Julián Arce. Pero Rescoldo no es solo cocina. Es
              un espacio construido por seis personas que dejaron lo que estaban
              haciendo para armar una temporada en una casa de Barracas.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {equipo.map((persona) => (
            <ScrollFadeIn key={persona.nombre}>
              <div>
                {/* Placeholder for portrait photo */}
                <div className="aspect-[3/4] bg-surface mb-4" />
                <p className="font-sans text-sm font-medium text-text">
                  {persona.nombre}
                </p>
                <p className="font-sans text-xs text-muted mt-1">
                  {persona.rol}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
