# Skill: rescoldo-web

Tokens CSS, arquitectura web, mecanismos diegéticos y referentes de diseño.

## Tokens CSS — canónicos, no modificar

```css
:root {
  --color-bg:        #FEFCF9;
  --color-text:      #2D2D2D;
  --color-secondary: #666666;
  --color-muted:     #888888;
  --color-accent:    #8B3A1A;
  --color-surface:   #F0ECE6;

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'DM Sans', system-ui, sans-serif;
  --font-mono:  'DM Mono', monospace;

  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.5rem;
  --text-2xl:   2.5rem;
  --text-hero:  clamp(3rem, 8vw, 7rem);

  --leading-body:  1.6;
  --measure:       65ch;
  --column-text:   680px;
  --max-width:     1200px;
  --margin-page:   clamp(1.5rem, 5vw, 5rem);
}
```

## Stack

```
Next.js 14+ (App Router)
Tailwind CSS
Framer Motion (máximo DOS animaciones: scroll fade-in + parallax hero)
Vercel
Google Fonts: Cormorant Garamond + DM Sans + DM Mono
```

## Tipografía

- **Cormorant Garamond** → cuerpos largos, entradas journal, texto narrativo
- **DM Sans** → navigation, metadata, fechas, subtítulos
- **DM Mono** → datos técnicos diegéticos: temperatura, coordenadas, precios en pesos 2030
- `font-display: swap` en todos

## Arquitectura de la web

### Navegación

```
RESCOLDO                    La temporada · El territorio · El equipo
[logo/wordmark izquierda]   [3 links derecha]
```

Nav fija, mínima. Desaparece al scroll hacia abajo, reaparece al scroll hacia arriba. Mobile: hamburger mínimo. Máximo 3 links.

### Rutas

```
/               → Homepage (scroll narrativo largo)
/temporada      → El journal completo
/territorio     → Los cinco territorios
/equipo         → El equipo
404             → Página de temporada cerrada
```

### Homepage — secuencia de scroll

1. Hero full-bleed (mesa del patio)
2. Weather widget (una línea, top-right)
3. La declaración (texto Julián, serif, 65ch)
4. El territorio (5 módulos, grid 2col/1col)
5. Los platos (7 módulos, alternado izq/der)
6. El equipo (4 retratos + Julián como voz)
7. Lista de espera ("Rescoldo regresa. Otoño 2031.")
8. Footer diegético

## Mecanismos diegéticos

### Weather widget
```js
// Open-Meteo API — sin key requerida
// Coordenadas Barracas: -34.6677, -58.3716
// La fecha muestra 2030, el clima es real de hoy
```

### Footer diegético
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

### Página 404
```
Esta sección de la temporada está cerrada.
Rescoldo opera entre marzo y mayo.
Próxima apertura: otoño 2031.
← Volver al journal
```

### Cita de prensa diegética
```
"Una de las aperturas más silenciosas y más necesarias del año."
— Lento, revista de gastronomía · mayo 2030
```

### Menú con precios
```
Menú de degustación — $185.000 por persona · vinos a elección
```

## Reglas — no negociables

1. Fondo siempre `#FEFCF9` — nunca blanco puro
2. Máximo dos animaciones en toda la web
3. Ancho de columna de texto: `65ch` máximo
4. Sin food styling — fotos documentales únicamente
5. Sin emojis, sin iconos decorativos, sin ilustraciones
6. `--color-accent` solo en detalles puntuales, nunca en bloques
7. Navegación máximo 3 links
8. El disclaimer de ficción va en el footer, nunca al principio
9. No agregar sección de reservas
10. No usar imágenes de stock — solo imágenes del proyecto

## Referentes

| Decisión | Referente |
|----------|-----------|
| Scroll narrativo largo | Hiša Franko |
| Weather widget + sistema estacional | Brae |
| Tipografía editorial web | Brae / Ark Journal |
| Voz primera persona diegética | Noma Weather Report |
| Mundanidad burocrática | Near Future Laboratory (TBD Catalog) |
| Video fijo + texto móvil | Septime |
| Footer disclaimer | futures-in-maps.com/san-telmo |
| Layout journal /temporada | René Redzepi, A Work in Progress (Phaidon/Pentagram) |
