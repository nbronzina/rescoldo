# Rescoldo Web — Sistema visual y arquitectura

name: rescoldo-web
description: Sistema visual, arquitectura y decisiones editoriales específicas para la web de Rescoldo. Activar siempre que se construya, evalúe o itere cualquier componente de la web — un botón, un texto, una sección, una decisión de navegación, un color. Si hay duda entre este skill y diegetic-fiction-web, usar ambos juntos. Este skill es la traducción del libro a web; diegetic-fiction-web es la lógica que lo sostiene.

## Qué es la web de Rescoldo

Un artefacto diegético que existe en otoño de 2030. No es la web del restaurante — es el journal de la primera temporada en formato web. Existe en el mismo universo que el PDF y el Mercado San Telmo 2030 (futures-in-maps.com/san-telmo).

No tiene función transaccional. No tiene reservas. Tiene una lista de espera que puede no llevar a ningún lado.

Audiencia: gastronomía de autor + diseño de futuros + design fiction.

## El gap que ocupa

No existe ningún restaurante argentino con una web editorial de este nivel. Rescoldo puede ser el primero en Buenos Aires en construir una web que funcione como objeto editorial con narrativa territorial, fotografía documental y coherencia entre impreso y digital.

No necesita competir con Attica ni Hiša Franko. Necesita ser el primero en hacer esto en el sur de la ciudad.

## Sistema visual

### Tokens CSS base

```css
:root {
  /* Colores */
  --color-bg:        #FEFCF9;  /* crema cálido — fondo del libro */
  --color-text:      #2D2D2D;  /* charcoal — texto principal */
  --color-secondary: #666666;  /* gris medio — metadata, subtítulos */
  --color-muted:     #888888;  /* gris claro — folios, running headers */
  --color-accent:    #8B3A1A;  /* terracota/brasa — detalles puntuales */
  --color-surface:   #F0ECE6;  /* crema más oscuro — fondos de sección */

  /* Tipografía */
  --font-serif:      'Freight Text Pro', 'Cormorant Garamond', Georgia, serif;
  --font-sans:       'DM Sans', 'Neue Haas Grotesk', system-ui, sans-serif;
  --font-mono:       'DM Mono', monospace;  /* para datos técnicos, fechas */

  /* Escala tipográfica */
  --text-xs:    0.75rem;   /* 12px — metadata, legal */
  --text-sm:    0.875rem;  /* 14px — subtítulos, pies de foto */
  --text-base:  1rem;      /* 16px — cuerpo */
  --text-lg:    1.125rem;  /* 18px — cuerpo largo, entradas journal */
  --text-xl:    1.5rem;    /* 24px — títulos sección */
  --text-2xl:   2.5rem;    /* 40px — títulos grandes */
  --text-hero:  clamp(3rem, 8vw, 7rem);  /* título portada */

  /* Espaciado */
  --leading-tight:   1.2;
  --leading-body:    1.6;
  --leading-loose:   1.8;
  --measure:         65ch;   /* ancho máximo de línea para lectura */

  /* Layout */
  --max-width:       1200px;
  --column-text:     680px;   /* ancho columna texto corrido */
  --margin-page:     clamp(1.5rem, 5vw, 5rem);
}
```

### Tipografía

Serif editorial (Freight Text Pro o Cormorant Garamond) → cuerpos largos, entradas del journal, texto narrativo de territorios y platos.

Sans geométrica (DM Sans) → navigation, metadata, fechas, nombres de territorios, subtítulos, datos. Ya establecida en el libro.

Mono (DM Mono) → datos técnicos diegéticos: temperatura del horno, tiempo de fermentación, coordenadas, precios del menú.

**Regla:** la serif lleva el tiempo, la historia, la voz de Julián. La sans lleva la información. La mono lleva los datos que hacen que el mundo ficticio parezca real.

### Fotografía

Sistema de Brae/Studio Round adaptado: still life documental, never food styling. Las reglas del skill de fotoperiodismo aplican igual en web que en impreso.

En web se agrega: la foto mal encuadrada o levemente borrosa es un recurso diegético. Parece una foto que alguien tomó con el teléfono en el patio. Eso es correcto.

## Arquitectura de la web

### Estructura de navegación (3 secciones máximo)

```
RESCOLDO
├── La temporada      ← el journal
├── El territorio     ← los cinco territorios y productores
└── El equipo         ← Victoria, Nicolás, Inés, Tomás, Julián
```

Navigation: mínima fija. Logo izquierda + 3 links derecha. Desaparece al hacer scroll hacia abajo, reaparece al hacer scroll hacia arriba.

### Homepage — scroll narrativo largo

El modelo es Hiša Franko + Noma Weather Report: un único recorrido vertical sin interrupciones.

Secuencia:

1. **Hero** — imagen full-bleed del patio (p.39 del libro). Sin texto excepto:
```
RESCOLDO
Barracas, Buenos Aires
Otoño 2030
```
El lector scrollea o no.

2. **La declaración** — equivalente al texto intro de p.38 del libro. No el manifiesto del chef — la entrada del diario. Primera persona, frases cortas. 3-4 párrafos.

3. **El territorio** — los cinco territorios como módulos. Foto + nombre del lugar + nombre del proveedor + una línea. El lector puede expandir o seguir scrolleando.

4. **Los platos** — los siete platos. Foto + nombre + tres líneas de Julián. Sin receta, sin fecha.

5. **El equipo** — Victoria, Nicolás, Inés, Tomás. Retrato + rol mínimo + una línea.

6. **La lista de espera** — "Rescoldo regresa. Otoño 2031." + campo de email. Puede no enviar a ningún lado o enviar un acuse de recibo diegético.

7. **Footer diegético** — ver sección específica.

## Mecanismos diegéticos específicos

### Weather widget (modelo Brae)

Mostrar el clima real de Barracas en tiempo real. API gratuita de weather. Una línea:

```
Barracas, Buenos Aires — 17°C · Despejado · 14 de marzo de 2030
```

Crea inmediatez temporal sin complejidad técnica. La fecha 2030 convive con el clima real de hoy — esa tensión es correcta y no necesita resolverse.

### Footer diegético

```
Rescoldo — Lanín 234, Barracas, Buenos Aires
Primera temporada: marzo–mayo 2030

Texto: Julián Arce
Cerámica y diseño: Victoria Nabel
Espacio: Nicolás Sardi, Inés Villanueva, Tomás Ferreyra
Fotografía: [nombre ficticio]

CUIT: 20-XXXXXXXX-X
© 2030 Julián Arce. Todos los derechos reservados.

─────────────────────────────────────────────
Este es un proyecto de ficción que explora el futuro posible
de la gastronomía de Buenos Aires.
Un proyecto de Nicolás Bronzina — https://www.nicolasbronzina.com/.
```

El disclaimer al final, tipografía pequeña, igual que futures-in-maps.com/san-telmo.

### Citas de prensa diegéticas

En la sección del equipo o como elemento flotante:

```
"Una de las aperturas más silenciosas y más necesarias del año."
— revista Lento, mayo 2030
```

Medios ficticios con nombres plausibles. No links porque no llevan a ningún lado.

### La página 404

```
Esta sección de la temporada está cerrada.
Rescoldo opera entre marzo y mayo.
Próxima apertura: otoño 2031.
```

## Decisiones técnicas

### Stack recomendado

- Next.js (App Router) → para SSG + ISR si hay contenido dinámico
- Tailwind CSS con los tokens del sistema de diseño
- Framer Motion para las únicas dos animaciones: scroll fade-in de textos largos + parallax muy sutil en hero
- Vercel para deploy

### Imágenes

- WebP para todas las imágenes de contenido
- AVIF para hero y full-bleeds
- Lazy loading con blur-up placeholder
- Art direction en mobile: crops distintos para vertical (priorizan el centro del sujeto, no la composición horizontal)
- Las imágenes documentales van sin caption en homepage. Caption solo en secciones de territorio y platos.

### Tipografía web

- Freight Text Pro vía Adobe Fonts o sustituir con Cormorant Garamond (Google Fonts, gratuita)
- DM Sans vía Google Fonts (ya en el libro)
- Font loading: font-display: swap para evitar FOUT en serif

### Mobile

La experiencia primaria es desktop — la audiencia de diseño y gastronomía de autor usa desktop. Mobile debe ser legible sin degradarse:

- El scroll narrativo funciona igual en vertical
- Las imágenes se recortan con art direction
- La navigation colapsa a un hamburger mínimo

## Lo que Brae hace que Rescoldo debe hacer

El sistema de Brae (Studio Round, Melbourne) es el referente técnico más cercano:

1. **El sistema tipográfico es estacional** — en Rescoldo, el otoño tiene sus propias decisiones. Paleta de otoño austral: los amarillos del paraíso, los grises del Riachuelo, el ámbar del horno encendido.

2. **La fotografía es de territorio, no de plato** — la foto del suelo del patio, la foto de las manos de Victoria con arcilla, la foto del río marrón del Delta. El plato es secundario.

3. **La web y el objeto impreso son el mismo sistema** — los tokens CSS son los mismos valores que los del libro de Illustrator. #FEFCF9, #2D2D2D, DM Sans, Lora. No son "inspirados en" — son los mismos.

## Conexión con el universo diegético compartido

La web de Rescoldo existe en el mismo año que el Mercado San Telmo 2030 (futures-in-maps.com/san-telmo). Son dos artefactos del mismo universo. Pueden coexistir sin contradicción:

- San Telmo 2030: sostenibilidad institucionalizada, visible, certificada, turística
- Rescoldo 2030: sin certificaciones, sin visibilidad, 10 cubiertos, abastecido por personas con nombre propio

Si en algún momento hay una referencia cruzada entre ambos proyectos — una cita del San Telmo en el insert de La Ciudad, un link entre webs — eso refuerza la credibilidad diegética de ambos universos.

## Referentes aplicados por decisión

| Decisión | Referente |
|----------|-----------|
| Scroll narrativo largo | Hiša Franko |
| Weather widget | Brae |
| Sistema tipográfico | Brae / Ark Journal |
| Voz primera persona | Noma Weather Report / Superflux |
| Mundanidad diegética | Near Future Laboratory |
| Archivo de temporadas | Fulgurances / Central/Mater |
| Editorial activa | Attica Digest |
| Footer disclaimer | futures-in-maps.com/san-telmo |
| Fotografía | Brae (Scottie Cameron) |
| Video fijo + texto móvil | Septime |
