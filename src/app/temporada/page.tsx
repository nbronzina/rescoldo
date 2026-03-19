import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const entradas = [
  {
    fecha: "12 de marzo de 2030",
    titulo: "El primer fuego",
    texto:
      "Encendimos el horno a las seis de la mañana. Nicolás había terminado de levantar la última columna la noche anterior. El barro estaba fresco todavía. Le dimos fuego despacio, con leña de paraíso del mismo patio. A las diez de la mañana el horno ya respiraba solo. Lara trajo café y nos sentamos los seis en la galería a mirar cómo el humo subía entre las columnas. Nadie dijo nada. No hacía falta.",
  },
  {
    fecha: "18 de marzo de 2030",
    titulo: "La mesa",
    texto:
      "La mesa llegó del Delta en una lancha de carga. Madera de demolición de un muelle viejo de Tigre. Tomás la lijó tres días hasta que la superficie quedó suave pero irregular, con las marcas del agua y los nudos a la vista. Tiene lugar para diez personas. Once si apretamos. No vamos a apretar.",
  },
  {
    fecha: "27 de marzo de 2030",
    titulo: "Primera noche de servicio",
    texto:
      "Diez personas. Ninguna sabía a qué venía exactamente. Lara les había dicho solamente la dirección y la hora. Sirvimos siete platos en tres horas. El zapallo en rescoldo se pasó cinco minutos. La corvina estaba perfecta. Victoria puso las piezas nuevas por primera vez: platos hondos de gres con un esmalte que parece tierra mojada. Al final alguien preguntó si podía volver. Le dijimos que sí, pero que no sabíamos cuándo.",
  },
  {
    fecha: "4 de abril de 2030",
    titulo: "Raúl",
    texto:
      "Raúl Heredia vino desde Añatuya con dos bolsas de algarroba y una de chañar. Tiene setenta y dos años. Recolecta en el monte desde que tiene memoria. Le mostré el horno y se quedó mirándolo un rato largo. Después dijo que estaba bien hecho. De Raúl, eso es mucho.",
  },
  {
    fecha: "19 de abril de 2030",
    titulo: "Lluvia",
    texto:
      "Llovió tres días seguidos. El patio se inundó. Cocinamos igual. El horno de barro tiene techo de galería, así que el fuego siguió. Santiago aprovechó la humedad para revisar las fermentaciones. El koji de maíz colorado está perfecto. El miso de pallar necesita dos semanas más.",
  },
  {
    fecha: "8 de mayo de 2030",
    titulo: "Pilar",
    texto:
      "Fuimos al Delta con Santiago a buscar juncos y miel. Pilar Iraola nos llevó en su lancha por los arroyos del bajo. Conoce los humedales como nadie. Nos enseñó a distinguir la sal del junco maduro. Volvimos con tres cajas y las manos cortadas.",
  },
  {
    fecha: "28 de mayo de 2030",
    titulo: "Último servicio",
    texto:
      "La última noche cocinamos para nosotros. Los seis, sentados a la mesa que Tomás armó. Los mismos siete platos del menú. El mismo vino de Rubén. Victoria sacó las piezas que nunca usó en servicio: unos cuencos de porcelana con el interior esmaltado en rojo oscuro. Apagamos el horno a la medianoche. La casa quedó en silencio. La temporada terminó.",
  },
];

export default function Temporada() {
  return (
    <div className="pt-32 pb-16 px-page">
      <div className="max-w-measure mx-auto">
        <ScrollFadeIn>
          <p className="font-sans text-sm tracking-widest uppercase text-secondary mb-4">
            La temporada
          </p>
          <h1 className="font-serif text-2xl text-text mb-4">
            Primera temporada
          </h1>
          <p className="font-sans text-xs text-muted mb-20">
            Marzo–mayo 2030 · Lanín 234, Barracas
          </p>
        </ScrollFadeIn>

        <div className="space-y-20">
          {entradas.map((entrada) => (
            <ScrollFadeIn key={entrada.fecha}>
              <article>
                <p className="font-mono text-xs text-muted mb-3">
                  {entrada.fecha}
                </p>
                <h2 className="font-sans text-base font-medium text-text mb-4">
                  {entrada.titulo}
                </h2>
                <p className="font-serif text-lg leading-body text-text">
                  {entrada.texto}
                </p>
              </article>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
