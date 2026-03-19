import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const equipo = [
  {
    nombre: "Julián Arce",
    rol: "Cocina",
    bio: "Treinta y cuatro años. Diez en el equipo interno de fermentación de Noma Copenhagen. Volvió a Buenos Aires en 2029 con la idea de cocinar en un lugar que ya existiera. Encontró la casa de Lanín un jueves de diciembre.",
  },
  {
    nombre: "Lara Espina",
    rol: "Servicio y gestión",
    bio: "Socia de Julián. Gestiona el servicio, los proveedores, la logística. Todo lo que pasa entre que un ingrediente sale del territorio y llega a la mesa pasa por Lara.",
  },
  {
    nombre: "Santiago Orbe",
    rol: "Fermentación",
    bio: "Ex-Noma, igual que Julián. Se especializa en fermentaciones: koji, miso, garum. En Rescoldo maneja la cámara de fermentación que armaron en lo que era el lavadero de la casa.",
  },
  {
    nombre: "Victoria Nabel",
    rol: "Cerámica y diseño de imagen",
    bio: "Hace toda la vajilla de Rescoldo a mano en su taller de San Telmo. Gres, porcelana, esmaltes propios. También diseña la identidad visual del proyecto: la tipografía, los menús impresos, este sitio.",
  },
  {
    nombre: "Nicolás Sardi",
    rol: "Construcción del espacio",
    bio: "Construyó el horno de barro, levantó las columnas de la galería, restauró el piso de la casa. Trabaja con materiales de demolición y técnicas de construcción tradicional.",
  },
  {
    nombre: "Mara Villanueva",
    rol: "Diseño del servicio",
    bio: "Ex-escenógrafa del Teatro San Martín. Diseñó la secuencia del servicio como si fuera una obra: la entrada por el zaguán, el recorrido al patio, el ritmo de los platos, la iluminación con velas.",
  },
  {
    nombre: "Tomás Ferreyra",
    rol: "Diseño de experiencia",
    bio: "Arquitecto inconcluso. Diseñó la mesa, las sillas, la disposición del espacio. Todo lo que el cuerpo toca durante las tres horas del servicio pasó por las manos de Tomás.",
  },
];

export default function EquipoPage() {
  return (
    <div className="pt-32 pb-16 px-page">
      <div className="max-w-page mx-auto">
        <ScrollFadeIn>
          <div className="max-w-measure mb-20">
            <p className="font-sans text-sm tracking-widest uppercase text-secondary mb-4">
              El equipo
            </p>
            <h1 className="font-serif text-2xl text-text mb-6">
              Siete personas, una temporada
            </h1>
            <p className="font-serif text-lg leading-body text-secondary">
              Rescoldo no es un restaurante con personal. Es un proyecto de siete
              personas que dejaron lo que estaban haciendo para cocinar, construir
              y servir durante tres meses en una casa de Barracas.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="space-y-20">
          {equipo.map((persona, i) => (
            <ScrollFadeIn key={persona.nombre}>
              <div
                className={`md:flex md:gap-16 md:items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Placeholder for portrait */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="aspect-[3/4] bg-surface" />
                </div>

                <div className="md:w-2/3">
                  <p className="font-sans text-base font-medium text-text mb-1">
                    {persona.nombre}
                  </p>
                  <p className="font-sans text-xs text-muted mb-4">
                    {persona.rol}
                  </p>
                  <p className="font-serif text-base leading-body text-text max-w-measure">
                    {persona.bio}
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
