import Image from "next/image";

const entradas: {
  dia: string;
  mes: string;
  titulo: string;
  texto: string;
  imagen?: { src: string; alt: string };
}[] = [
  {
    dia: "3",
    mes: "Agosto 2029",
    titulo: "Victoria",
    texto:
      "Santiago la trajo un domingo. Ceramista, de Villa del Parque. Llegó a la casa cuando Nicolás todavía estaba trabajando el piso del patio. Caminó el zaguán, el patio, el galponcito del fondo. No tocó nada. Dos horas mirando. Le pregunté qué pensaba. Dijo que volvía en quince días.\n\nVolvió con tres bocetos de plato y una propuesta completa del espacio. Nadie se lo había pedido.",
  },
  {
    dia: "14",
    mes: "Febrero",
    titulo: "Tomás",
    texto:
      "Lo encontré a las once de la noche parado en el zaguán. No hacía nada. Miraba el corredor hacia el patio, donde el horno estaba apagado todavía.\n\nLe pregunté qué hacía. Dijo que estaba midiendo cómo iba a entrar el olor cuando el horno estuviera encendido. Que el comensal tenía que olerlo antes de ver nada.\n\nNo le respondí. Tenía razón.",
  },
  {
    dia: "12",
    mes: "Marzo",
    titulo: "El primer fuego",
    texto:
      "Encendimos el horno a las seis de la mañana. Nicolás había terminado de construir el horno la noche anterior. El barro estaba fresco todavía. Le dimos fuego despacio, con leña de paraíso del mismo patio. A las diez de la mañana el horno ya respiraba solo. Lara trajo café y nos sentamos los siete en la galería a mirar cómo el humo subía entre las columnas. Nadie dijo nada. No hacía falta.",
  },
  {
    dia: "18",
    mes: "Marzo",
    titulo: "La mesa",
    texto:
      "La mesa llegó del Delta en una lancha de carga. Madera de demolición de un muelle viejo de Tigre. Nicolás la trabajó tres días hasta que la superficie quedó suave pero irregular, con las marcas del agua y los nudos a la vista. Tiene lugar para diez personas. Once si apretamos. No vamos a apretar.",
  },
  {
    dia: "20",
    mes: "Marzo",
    titulo: "Santiago",
    texto:
      "Abrió los primeros frascos del garum de achuras esa mañana. Lleva ocho semanas fermentando en el lavadero. El olor es brutal al principio. Después de un minuto el olfato se adapta y aparece algo debajo — caldo oscuro, profundo, casi dulce.\n\nSantiago lo anotó en su cuaderno sin decir nada. Yo lo probé con el dedo. Nos miramos. Está listo.",
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
    dia: "17",
    mes: "Abril",
    titulo: "Los cangrejos",
    texto:
      "Ramona mandó cangrejos. Nueve. Su sobrino llegó a las cinco de la tarde con una conservadora y una nota que decía que la corvina no había salido bien esa semana y que mandaba esto en cambio. Nueve cangrejos azules vivos, de tamaños distintos, ninguno igual al otro. El servicio empezaba a las ocho.\n\nLara los miró y dijo: bueno. Así, sin signo de pregunta.\n\nLos separé por tamaño. Los tres más grandes directamente sobre las brasas, enteros. Los medianos abiertos, con una cucharada del garum de Santiago. Los dos más pequeños crudos, en láminas finas, con limón del Delta y aceite de peperina.\n\nMara reorganizó el servicio en veinte minutos. Esa noche el cangrejo fue el único plato — tres momentos del mismo animal. La mesa no habló durante ese momento. No porque algo estuviera mal.\n\nDespués del servicio Tomás dijo que había sido la mejor noche hasta ese momento. Yo no estaba seguro. Pero entendí algo.",
  },
  {
    dia: "19",
    mes: "Abril",
    titulo: "Lluvia",
    texto:
      "Llovió tres días seguidos. El patio se inundó. Cocinamos igual. El horno de barro tiene techo de galería, así que el fuego siguió. Santiago aprovechó la humedad para revisar las fermentaciones. El koji de maíz colorado está perfecto. El miso de pallar necesita dos semanas más.",
  },
  {
    dia: "25",
    mes: "Abril",
    titulo: "Ramona",
    texto:
      "La primera vez que Ramona Calderón llegó a Lanín fue un jueves a las siete de la mañana. Venía de manejar tres horas desde la costa. Trajo dos cajones de corvina y uno de pescadilla, todos con hielo.\n\nLos dejó en la galería, tomó el café que le ofreció Lara, y se fue. No preguntó nada sobre el restaurante. No preguntó nada sobre los platos.\n\nLa semana siguiente mandó cangrejos.",
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
      "La última noche cocinamos para nosotros. Los siete, sentados a la mesa que Nicolás armó. Los mismos siete platos del menú. El mismo vino de Rubén. Victoria sacó las piezas que nunca usó en servicio: unos cuencos de porcelana con el interior esmaltado en rojo oscuro. Apagamos el horno a la medianoche. La casa quedó en silencio. La temporada terminó.",
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
        <p className="font-serif text-lg text-secondary leading-loose mb-24">
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
            <p className="font-mono text-journal-date text-muted mb-1">
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
            <div className="space-y-6">
              {entrada.texto.split("\n\n").map((parrafo, j) => (
                <p
                  key={j}
                  className="font-serif text-lg text-text leading-loose"
                >
                  {parrafo}
                </p>
              ))}
            </div>

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
