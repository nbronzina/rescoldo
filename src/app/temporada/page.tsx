import Image from "next/image";

const entradas: {
  dia: string;
  mes: string;
  titulo: string;
  texto: string;
  imagen?: { src: string; alt: string };
}[] = [
  {
    dia: "12",
    mes: "Marzo",
    titulo: "El primer fuego",
    texto:
      "Encendimos el horno a las seis de la mañana. Nicolás había terminado de construir el horno la noche anterior. El barro estaba fresco todavía. Le dimos fuego despacio, con leña de paraíso del mismo patio. A las diez de la mañana el horno ya respiraba solo. Lara trajo café y nos sentamos los seis en la galería a mirar cómo el humo subía entre las columnas. Nadie dijo nada. No hacía falta.",
  },
  {
    dia: "18",
    mes: "Marzo",
    titulo: "La mesa",
    texto:
      "La mesa llegó del Delta en una lancha de carga. Madera de demolición de un muelle viejo de Tigre. Nicolás la trabajó tres días hasta que la superficie quedó suave pero irregular, con las marcas del agua y los nudos a la vista. Tiene lugar para diez personas. Once si apretamos. No vamos a apretar.",
  },
  {
    dia: "27",
    mes: "Marzo",
    titulo: "Primera noche de servicio",
    texto:
      "Diez personas. Ninguna sabía a qué venía exactamente. Lara les había dicho solamente la dirección y la hora. Sirvimos siete platos en tres horas. El zapallo en rescoldo se pasó cinco minutos. La corvina estaba perfecta. Victoria puso las piezas nuevas por primera vez: platos hondos de gres con un esmalte que parece tierra mojada. Al final alguien preguntó si podía volver. Le dijimos que sí, pero que no sabíamos cuándo.",
  },
  {
    dia: "4",
    mes: "Abril",
    titulo: "Raúl",
    texto:
      "Raúl Cálderes vino desde Fernández con dos bolsas de algarroba y una de chañar. Tiene setenta y dos años. Recolecta en el monte desde que tiene memoria. Le mostré el horno y se quedó mirándolo un rato largo. Después dijo que estaba bien hecho. De Raúl, eso es mucho.",
  },
  {
    dia: "19",
    mes: "Abril",
    titulo: "Lluvia",
    texto:
      "Llovió tres días seguidos. El patio se inundó. Cocinamos igual. El horno de barro tiene techo de galería, así que el fuego siguió. Santiago aprovechó la humedad para revisar las fermentaciones. El koji de maíz colorado está perfecto. El miso de pallar necesita dos semanas más.",
  },
  {
    dia: "8",
    mes: "Mayo",
    titulo: "Pilar",
    texto:
      "Fuimos al Delta con Santiago a buscar juncos y miel. Pilar Iraola nos llevó en su lancha por los arroyos del bajo. Conoce los humedales como nadie. Nos enseñó a distinguir la sal del junco maduro. Volvimos con tres cajas y las manos cortadas.",
  },
  {
    dia: "28",
    mes: "Mayo",
    titulo: "Último servicio",
    texto:
      "La última noche cocinamos para nosotros. Los seis, sentados a la mesa que Nicolás armó. Los mismos siete platos del menú. El mismo vino de Rubén. Victoria sacó las piezas que nunca usó en servicio: unos cuencos de porcelana con el interior esmaltado en rojo oscuro. Apagamos el horno a la medianoche. La casa quedó en silencio. La temporada terminó.",
  },
];

export default function Temporada() {
  return (
    <div className="pt-32 pb-24 px-page">
      <div className="max-w-measure mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-muted mb-6">
          Marzo–Mayo 2030
        </p>
        <h1 className="font-serif text-2xl text-text mb-2">
          Diario de la temporada
        </h1>
        <p className="font-serif text-lg text-secondary mb-24" style={{ lineHeight: 1.8 }}>
          Lanín 234, Barracas
        </p>

        {entradas.map((entrada, i) => (
          <article key={entrada.dia + entrada.titulo}>
            {/* Separador */}
            <div
              className="h-px bg-surface mb-20"
              aria-hidden="true"
            />

            {/* Fecha como elemento tipográfico */}
            <p className="font-mono text-xl text-muted mb-1">
              {entrada.dia}
            </p>
            <p className="font-mono text-xs text-muted mb-8 tracking-wider uppercase">
              {entrada.mes}
            </p>

            {/* Título */}
            <h2 className="font-serif text-xl text-text mb-6">
              {entrada.titulo}
            </h2>

            {/* Cuerpo */}
            <p
              className="font-serif text-lg text-text"
              style={{ lineHeight: 1.8 }}
            >
              {entrada.texto}
            </p>

            {/* Imagen flat lay opcional */}
            {entrada.imagen && (
              <div className="flex justify-center my-16">
                <div className="w-2/5">
                  <Image
                    src={entrada.imagen.src}
                    alt={entrada.imagen.alt}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 50vw, 260px"
                  />
                </div>
              </div>
            )}

            {/* Espacio generoso entre entradas */}
            {i < entradas.length - 1 && (
              <div className="h-20" aria-hidden="true" />
            )}
          </article>
        ))}

        {/* Separador final */}
        <div className="h-px bg-surface mt-20" aria-hidden="true" />
      </div>
    </div>
  );
}
