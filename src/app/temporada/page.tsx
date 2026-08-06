import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "La temporada",
  description:
    "Diario de la primera temporada. Marzo–mayo 2030, Lanín 234, Barracas.",
  alternates: { canonical: "/temporada" },
};

const entradas: {
  dia: string;
  mes: string;
  titulo: string;
  texto: string;
  imagen?: { src: string; alt: string };
  prologo?: boolean;
}[] = [
  {
    dia: "5",
    mes: "Agosto 2029",
    titulo: "Victoria",
    prologo: true,
    texto:
      "Santiago la trajo un domingo. Ceramista, de Villa del Parque. Llegó a la casa cuando Nicolás todavía estaba trabajando el piso del patio. Caminó el zaguán, el patio, el galponcito del fondo. No tocó nada. Dos horas mirando. Le pregunté qué pensaba. Dijo que volvía en quince días.\n\nVolvió con tres bocetos de plato y una propuesta completa del espacio. Nadie se lo había pedido.",
  },
  {
    dia: "14",
    mes: "Febrero",
    titulo: "Tomás",
    texto:
      "Lo encontré a las once de la noche parado en el zaguán. No hacía nada. Miraba el corredor hacia el patio, donde Nicolás recién había marcado la base del horno entre las columnas.\n\nLe pregunté qué hacía. Dijo que estaba midiendo cómo iba a entrar el olor cuando el horno estuviera encendido. Que el comensal tenía que olerlo antes de ver nada.\n\nNo le respondí. Tenía razón.",
  },
  {
    dia: "12",
    mes: "Marzo",
    titulo: "El primer fuego",
    texto:
      "Encendimos el horno a las seis de la mañana. Nicolás lo había terminado la semana anterior y lo veníamos curando de a poco, con fuegos chicos, para que el barro no se rajara. Hoy le dimos fuego de verdad, despacio, con leña de paraíso del mismo patio. A las diez de la mañana el horno ya respiraba solo. Lara trajo café y nos sentamos los siete en la galería a mirar cómo el humo subía entre las columnas. Nadie dijo nada. No hacía falta.",
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
      "Abrió los primeros frascos del garum de achuras esa mañana. La primera tanda arrancó en enero: ocho semanas fermentando en el lavadero, con el calor del verano haciendo la mitad del trabajo. El olor es brutal al principio. Después de un minuto el olfato se adapta y aparece algo debajo: caldo oscuro, profundo, casi dulce.\n\nSantiago lo anotó en su cuaderno sin decir nada. Yo lo probé con el dedo. Nos miramos. Está listo.",
  },
  {
    dia: "27",
    mes: "Marzo",
    titulo: "Primera noche de servicio",
    texto:
      "Diez personas. Ninguna sabía a qué venía exactamente. Lara les había dicho solamente la dirección y la hora. Servimos siete platos en tres horas. El zapallo en rescoldo se pasó cinco minutos. La corvina estaba perfecta. Victoria puso las piezas nuevas por primera vez: platos hondos de gres con un esmalte que parece tierra mojada. Al final alguien preguntó si podía volver. Le dijimos que sí, pero que no sabíamos cuándo.",
  },
  {
    dia: "2",
    mes: "Abril",
    titulo: "La leña",
    texto:
      "El quebracho subió otra vez: ochenta mil el metro, puesto en Barracas. Compramos tres. Vino el inspector de la comuna por la habilitación del horno: midió la distancia a la medianera, sacó dos fotos, firmó. El proveedor de hielo no contestó en toda la semana. Lara consiguió otro. Llovizna desde el jueves. El zaguán necesita otra mano de cal.",
    imagen: {
      src: "/images/atmosfericas/lena-zaguan.jpeg",
      alt: "Pila de leña de quebracho contra la pared del zaguán, de noche, con flash",
    },
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
      "Ramona mandó cangrejos. Nueve. Su sobrino llegó a las cinco de la tarde con una conservadora y una nota que decía que la corvina no había salido bien esa semana y que mandaba esto en cambio. Nueve cangrejos azules vivos, de tamaños distintos, ninguno igual al otro. El servicio empezaba a las ocho.\n\nLara los miró y dijo: bueno. Así, sin signo de pregunta.\n\nLos separé por tamaño. Los tres más grandes directamente sobre las brasas, enteros. Los medianos abiertos, con una cucharada del garum de Santiago. Los dos más pequeños crudos, en láminas finas, con limón del Delta y aceite de peperina.\n\nInés reorganizó el servicio en veinte minutos. Esa noche el cangrejo fue el único plato: tres momentos del mismo animal. La mesa no habló durante ese momento. No porque algo estuviera mal.\n\nDespués del servicio Tomás dijo que había sido la mejor noche hasta ese momento. Yo no estaba seguro. Pero entendí algo.",
  },
  {
    dia: "19",
    mes: "Abril",
    titulo: "Lluvia",
    texto:
      "Llovió tres días seguidos. El patio se inundó. Cocinamos igual. El horno de barro tiene techo de galería, así que el fuego siguió. Santiago aprovechó la humedad para revisar las fermentaciones. El koji de maíz colorado está perfecto. La tanda nueva del miso de pallar necesita dos semanas más.",
  },
  {
    dia: "25",
    mes: "Abril",
    titulo: "Rubén",
    texto:
      "Rubén Quiroga llegó desde General Fernández Oro con dos cajas de vino y sin avisar. Había hablado con Lara por teléfono en febrero y mandado las primeras cajas por transporte antes de la apertura. Nunca había venido. Dejó las cajas en el zaguán, abrió una botella sin preguntar y sirvió dos vasos. El Malbec tenía algo que no esperaba. No fruta, no roble. Algo más parecido a tierra después de la lluvia. Le pregunté cómo lo hacía. Dijo: sin apurarlo.\n\nQuedamos en que traía doce cajas por temporada. Que si se terminaban, se terminaban.",
    imagen: {
      src: "/images/atmosfericas/cajas-vino-zaguan.jpeg",
      alt: "Dos cajas de cartón y una botella de vino en el piso del zaguán",
    },
  },
  {
    dia: "8",
    mes: "Mayo",
    titulo: "Pilar",
    texto:
      "Fuimos al Delta con Santiago a buscar juncos y miel. Pilar Iraola nos llevó en su lancha por los arroyos del bajo. Conoce los humedales como nadie. Nos enseñó a elegir el junco maduro para la sal. Volvimos con tres cajas y las manos cortadas.",
  },
  {
    dia: "11",
    mes: "Mayo",
    titulo: "El mercado",
    texto:
      "Fui al Mercado San Telmo a buscar un repuesto para la cámara de fermentación. Está impecable: paneles en el techo, agua recuperada, una pantalla por puesto que muestra el origen de cada cosa. Un grupo de turistas le sacaba fotos al certificado enmarcado de la entrada.\n\nCompré el repuesto y volví. En el camino pensé en Ramona, que cuando algo no sale manda una nota escrita a mano con lo que manda en cambio. Las pantallas no hacen eso. No digo que sea mejor. Digo que elegimos esto.",
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

        {entradas.map((entrada, i) => {
          const isPrologo = entrada.prologo;
          const nextIsNotPrologo =
            i < entradas.length - 1 && !entradas[i + 1].prologo;

          const entradaId = `entrada-${entrada.dia}-${entrada.mes}`
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <article
              key={entrada.dia + entrada.titulo}
              aria-labelledby={entradaId}
            >
              {/* Etiqueta de prólogo */}
              {isPrologo && i === 0 && (
                <div className="mb-12">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted mb-4">
                    Antes de la temporada
                  </p>
                  <div
                    className="h-px bg-muted"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Separador normal (no en prólogos, ni justo después del prólogo) */}
              {!isPrologo && i > 0 && !entradas[i - 1].prologo && (
                <div
                  className="h-px bg-surface mb-20"
                  aria-hidden="true"
                />
              )}

              {/* Fecha como elemento tipográfico */}
              <p className={`font-mono text-journal-date mb-1 ${isPrologo ? "text-secondary" : "text-muted"}`}>
                {entrada.dia}
              </p>
              <p className={`font-mono text-xs mb-8 tracking-wider uppercase ${isPrologo ? "text-secondary" : "text-muted"}`}>
                {entrada.mes}
              </p>

              {/* Título */}
              <h2
                id={entradaId}
                className={`font-serif text-xl mb-6 ${isPrologo ? "text-secondary" : "text-text"}`}
              >
                {entrada.titulo}
              </h2>

              {/* Cuerpo */}
              <div className="space-y-6">
                {entrada.texto.split("\n\n").map((parrafo, j) => (
                  <p
                    key={j}
                    className={`font-serif text-lg leading-loose ${isPrologo ? "text-secondary" : "text-text"}`}
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
                      height={533}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 50vw, 260px"
                    />
                  </div>
                </div>
              )}

              {/* Línea divisoria después del prólogo */}
              {isPrologo && nextIsNotPrologo && (
                <div className="mt-20 mb-20">
                  <div
                    className="h-px bg-muted"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Espacio generoso entre entradas */}
              {i < entradas.length - 1 && !isPrologo && (
                <div className="h-20" aria-hidden="true" />
              )}
            </article>
          );
        })}

        {/* Separador final */}
        <div className="h-px bg-surface mt-20" aria-hidden="true" />
      </div>
    </div>
  );
}
