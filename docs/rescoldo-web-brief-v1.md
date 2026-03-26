# RESCOLDO WEB — Brief de apertura de repositorio

Para Claude Code (Chief Developer Officer)
Versión 1.0 · Marzo 2026

## Roles del proyecto

| Rol | Responsable | Función |
|-----|-------------|---------|
| Chief Operator / Executive Officer | Claude (claude.ai) | Genera briefs, tareas, revisiones editoriales y de sistema |
| Chief Creative Officer | Nicolás Bronzina | Decisiones creativas finales, aprobación de outputs |
| Chief Developer Officer | Claude Code | Implementación, arquitectura técnica, build |

Flujo de trabajo: Claude genera brief o tarea → Nicolás lo pasa a Claude Code → Claude Code implementa → Nicolás y Claude revisan el output juntos → ciclo.

## Qué es Rescoldo

Rescoldo es un proyecto de design fiction: el journal de la primera temporada de una residencia gastronómica ficticia en Barracas, Buenos Aires, otoño 2030.

El proyecto existe en dos formatos paralelos:

- **PDF** — libro editorial de 220×290mm, montado en Adobe Illustrator (en producción activa)
- **Web** — artefacto diegético que existe dentro del mundo ficticio del año 2030

La web no es la web sobre el restaurante. La web es el journal de la temporada en formato digital. No tiene función transaccional. No tiene reservas. Tiene una lista de espera que puede no llevar a ningún lado.

**Audiencia:** gastronomía de autor + diseño de futuros + design fiction.

**Universo diegético compartido:** La web coexiste con el proyecto Mercado San Telmo 2030 (futures-in-maps.com/san-telmo, de Nicolás Bronzina + Near Future Laboratory). Ambos existen en el mismo año ficticio.

## Contexto narrativo

**El espacio:** Casa chorizo, Lanín 234, Barracas, Buenos Aires. 10 cubiertos. Patio con paraíso centenario. Horno de barro entre dos columnas bajo techo de galería. Mesa larga de madera de demolición del Delta.

**El chef:** Julián Arce, 34 años. Ex-equipo interno de fermentación de Noma Copenhagen. Volvió a Buenos Aires en 2029 después de 10 años afuera.

**El equipo:**
- Lara Espina — socia, gestiona el servicio
- Santiago Orbe — fermentación (ex-Noma)
- Victoria Nabel — cerámica y diseño de imagen
- Nicolás Sardi — construcción del espacio
- Mara Villanueva — diseño del servicio (ex-escenógrafa Teatro San Martín)
- Tomás Ferreyra — diseño de experiencia (arquitecto inconcluso)

**Los territorios:** El Monte (Santiago del Estero), El Bosque (Esquel), El Río (Delta Paraná), La Costa (Bahía Samborombón), La Reserva (Costanera Sur).

**Los 7 platos:**
1. Bocado — Cortadera frita, carqueja, aguaribay
2. Entrada fría — Corvina curada, sal de junco, limón de quinta, aceite de peperina
3. Entrada caliente — Morilla rellena de miso de poroto pallar, caldo de huesos
4. Principal — Zapallo plomo en rescoldo, arrope de chañar, manteca de hierbas
5. Acompañamiento — Entraña a la brasa, koji de maíz colorado, verdolaga
6. Quiebre dulce — Pan de algarroba con trigo, miel de isla, manteca
7. Postre — Llao llao en escabeche, helado de arrope de tuna, sal de río

**El vino:** Rubén Quiroga · Bodega Las Bardas, Alto Valle del Río Negro. Malbec y Cabernet Franc de secano. Sin sulfitos, levaduras espontáneas. Productor ficticio, región real.

## Sistema visual

### Tokens CSS — CANÓNICOS. No inventar valores alternativos.

```css
:root {
  /* Colores — idénticos al libro en Illustrator */
  --color-bg:        #FEFCF9;
  --color-text:      #2D2D2D;
  --color-secondary: #666666;
  --color-muted:     #888888;
  --color-accent:    #8B3A1A;
  --color-surface:   #F0ECE6;

  /* Tipografía */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;
  --font-mono:  'DM Mono', monospace;

  /* Escala */
  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.5rem;
  --text-2xl:   2.5rem;
  --text-hero:  clamp(3rem, 8vw, 7rem);

  /* Ritmo */
  --leading-body:  1.6;
  --measure:       65ch;
  --column-text:   680px;
  --max-width:     1200px;
  --margin-page:   clamp(1.5rem, 5vw, 5rem);
}
```

### Tipografía

- **Cormorant Garamond** (Google Fonts) → cuerpos largos, entradas journal, texto narrativo
- **DM Sans** (Google Fonts) → navigation, metadata, fechas, subtítulos
- **DM Mono** → datos técnicos diegéticos: temperatura, coordenadas, precios en pesos 2030
- `font-display: swap` en todos

### Fotografía

Sistema documental — nunca food styling. Las imágenes disponibles:
- Mesa del patio con vajilla (imagen canónica, full-bleed hero)
- Victoria Nabel en el taller
- Horno de barro de noche (full-bleed)
- Riachuelo al amanecer
- Barracas aérea
- Raúl moliendo algarroba
- Ramona pescando (full-bleed)
- La Reserva Ecológica con cortaderas

## Stack técnico

```
Next.js 14+ (App Router)
Tailwind CSS (con los tokens del sistema de diseño)
Framer Motion (SOLO para: scroll fade-in de textos + parallax muy sutil en hero)
Vercel (deploy)
Google Fonts (Cormorant Garamond + DM Sans + DM Mono)
```

**Regla de animaciones:** máximo dos. Scroll fade-in en textos largos y parallax en hero. Nada más. Si se propone una tercera animación, rechazarla.

## Arquitectura de la web

### Navegación

```
RESCOLDO                    La temporada · El territorio · El equipo
[logo/wordmark izquierda]   [3 links derecha]
```

- Nav fija, mínima
- Desaparece al scroll hacia abajo, reaparece al scroll hacia arriba
- En mobile: colapsa a hamburger mínimo

### Estructura de páginas

```
/               → Homepage (scroll narrativo largo)
/temporada      → El journal completo
/territorio     → Los cinco territorios
/equipo         → El equipo
404             → Página de temporada cerrada
```

### Homepage — secuencia de scroll

1. **Hero** — imagen full-bleed mesa del patio. Texto superpuesto: RESCOLDO / Barracas, Buenos Aires / Otoño 2030
2. **Weather widget** — una línea, top-right: `Barracas, Buenos Aires — [temp]°C · [condición] · [día] de [mes] de 2030`
3. **La declaración** — texto de Julián, primera persona. 3-4 párrafos. Serif, columna de 65ch, centrada.
4. **El territorio** — 5 módulos. Grid 2 columnas en desktop, 1 en mobile.
5. **Los platos** — 7 módulos. Layout alternado izquierda/derecha en desktop.
6. **El equipo** — 4 retratos + Julián como voz.
7. **Lista de espera** — "Rescoldo regresa. Otoño 2031." + campo email + botón.
8. **Footer diegético**

## Mecanismos diegéticos — CRÍTICOS

### 1. Weather widget

```js
// Open-Meteo API — sin key requerida
const url = `https://api.open-meteo.com/v1/forecast?latitude=-34.6677&longitude=-58.3716&current=temperature_2m,weathercode`

// La fecha en el widget siempre muestra 2030
// El clima es el real de hoy
```

### 2. Footer diegético

```
Rescoldo — Lanín 234, Barracas, Buenos Aires
Primera temporada: marzo–mayo 2030

Texto: Julián Arce
Cerámica y diseño: Victoria Nabel
Espacio: Nicolás Sardi, Mara Villanueva, Tomás Ferreyra
Fotografía: Sebastián Ríos

CUIT: 20-42187634-9
© 2030 Julián Arce. Todos los derechos reservados.

─────────────────────────────────────────
Este es un proyecto de ficción que explora el futuro posible
de la gastronomía de Buenos Aires.
Un proyecto de Nicolás Bronzina — https://www.nicolasbronzina.com/
```

### 3. Página 404

```
Esta sección de la temporada está cerrada.
Rescoldo opera entre marzo y mayo.
Próxima apertura: otoño 2031.

← Volver al journal
```

### 4. Cita de prensa diegética

```
"Una de las aperturas más silenciosas y más necesarias del año."
— Lento, revista de gastronomía · mayo 2030
```

### 5. El menú con precios

```
Menú de degustación — $420.000 por persona · vinos a elección
```

Precio en pesos argentinos, plausible para 2030. Tipografía mono.

## Reglas de diseño — NO negociables

1. Fondo siempre `#FEFCF9` — nunca blanco puro, nunca gris.
2. Máximo dos animaciones en toda la web.
3. Ancho de columna de texto: `65ch` máximo — jamás texto full-width.
4. Sin food styling — las fotos son documentales.
5. Sin emojis, sin iconos decorativos, sin ilustraciones.
6. El accent color `#8B3A1A` solo en detalles puntuales — nunca como color de fondo.
7. Navegación máximo 3 links.
8. El disclaimer de ficción va en el footer, tipografía pequeña — nunca al principio.

## Referentes — en orden de relevancia técnica

| Decisión | Referente |
|----------|-----------|
| Scroll narrativo largo | Hiša Franko (hisafranko.com) |
| Weather widget + sistema estacional | Brae (braerestaurant.com) |
| Tipografía editorial web | Brae / Ark Journal |
| Voz primera persona diegética | Noma Weather Report |
| Mundanidad burocrática | Near Future Laboratory (TBD Catalog) |
| Video fijo + texto móvil | Septime (septime-paris.fr) |
| Footer disclaimer | futures-in-maps.com/san-telmo |

## Lo que Claude Code NO debe hacer

- Agregar páginas o secciones no especificadas sin consultar primero
- Usar colores fuera del sistema definido
- Agregar animaciones más allá de las dos aprobadas
- Usar tipografías distintas a las tres del sistema
- Crear diseño que parezca "restaurante genérico"
- Agregar sección de reservas funcional
- Usar imágenes de stock

---

Brief generado por Claude (CEO) · Marzo 2026
Rescoldo web · v1.0
