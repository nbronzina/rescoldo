# RESCOLDO WEB — CLAUDE.md

Leé este archivo completo antes de hacer cualquier cosa.

## Skills activas

Las siguientes guías están en docs/skills/ y deben consultarse antes de ejecutar cualquier tarea relacionada:

- **rescoldo-voice.md** → voz de Julián Arce, personajes, proveedores, platos del menú, universo diegético
- **rescoldo-web.md** → tokens CSS, arquitectura web, mecanismos diegéticos, referentes de diseño
- **diegetic-fiction-web.md** → principios diegéticos, tabla de decisiones, qué no hacer en una web de ficción
- **editorial-layout.md** → specs del libro PDF (220×290mm), tipografía, estado de artboards, ritmo editorial
- **nano-banana-brief.md** → templates de prompts visuales por categoría (plato, espacio, retrato, paisaje, textura)
- **fotoperiodismo.md** → criterios documentales, checklist de evaluación de imagen, decisión editorial de página
- **anti-slop.md** → escritura sin slop + microcopy UI específico de Rescoldo + reglas de diseño antislop
- **redzepi-journal.md** → modelo editorial Phaidon/Pentagram para /temporada en la web y Cap. III del PDF

### Reglas de aplicación

- No inventar contenido que no esté en las skills
- Si hay contradicción entre una skill y el brief del momento, el brief del momento tiene precedencia
- rescoldo-voice + rescoldo-web se leen juntas para cualquier tarea que involucre texto en la web
- anti-slop aplica a TODO texto visible: botones, placeholders, mensajes de error, textos de sección, footers

## Roles

| Rol | Quién |
|-----|-------|
| Chief Operator / Executive Officer | Claude (claude.ai) — genera briefs y tareas |
| Chief Creative Officer | Nicolás Bronzina — aprobación final |
| Chief Developer Officer | Claude Code — implementación |

Flujo: Claude genera tarea → Nicolás la pasa acá → Claude Code implementa → Claude y Nicolás revisan juntos → ciclo.

## Qué es este proyecto

La web de Rescoldo — artefacto diegético de design fiction que existe en otoño de 2030. No es la web sobre el restaurante. Es el journal de la primera temporada en formato web.

No tiene función transaccional. No tiene reservas. Tiene una lista de espera que puede no llevar a ningún lado.

## La web NO es una copia del PDF

El proyecto existe en dos formatos paralelos con identidad compartida pero experiencias completamente distintas:

| | PDF (Adobe Illustrator) | Web |
|---|---|---|
| Estructura | Secuencial, paginado, capítulos | Scroll narrativo, no lineal |
| Entrada | Portadilla, índice, guarda | Hero full-bleed, scroll libre |
| Navegación | Página a página | El lector entra y sale por donde quiere |
| Elementos únicos | Mapa dibujado, colofón, folios, running headers, full-bleeds de capítulo | Weather widget, 404 diegético, lista de espera 2031, footer con CUIT |
| Lectura | De principio a fin | No hay orden obligatorio |

Lo que comparten: tokens de color, tipografía (DM Sans + serif), fotografía documental, voz de Julián en primera persona, territorios, platos, equipo.

**Regla:** no replicar la estructura de capítulos del PDF en la web. No hay Capítulo I, Capítulo II, Capítulo III. Hay secciones web: La temporada, El territorio, El equipo.

El brief completo está en `docs/rescoldo-web-brief-v1.md`. Leerlo antes de empezar cualquier sprint.

## Skills — referencia

Las skills están en `docs/skills/` y se cargan automáticamente a través de la sección "Skills activas" al inicio de este archivo. No requieren instalación manual.

```
docs/skills/rescoldo-voice.md
docs/skills/rescoldo-web.md
docs/skills/diegetic-fiction-web.md
docs/skills/editorial-layout.md
docs/skills/nano-banana-brief.md
docs/skills/fotoperiodismo.md
docs/skills/anti-slop.md
docs/skills/redzepi-journal.md
```

## Stack

```
Next.js 14+ (App Router)
Tailwind CSS
Framer Motion (máximo DOS animaciones en toda la web)
Vercel
Google Fonts: Cormorant Garamond + DM Sans + DM Mono
```

## Tokens CSS — canónicos, no modificar

```css
--color-bg:        #FEFCF9;
--color-text:      #2D2D2D;
--color-secondary: #666666;
--color-muted:     #888888;
--color-accent:    #8B3A1A;
--color-surface:   #F0ECE6;

--font-serif:      'Cormorant Garamond', Georgia, serif;
--font-sans:       'DM Sans', system-ui, sans-serif;
--font-mono:       'DM Mono', monospace;

--measure:         65ch;
--column-text:     680px;
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

## Mecanismos diegéticos obligatorios

### Weather widget

```js
// Open-Meteo — sin API key
// Coordenadas Barracas: -34.6677, -58.3716
// La fecha muestra 2030, el clima es real de hoy
```

### Footer

```
Rescoldo — Lanín 234, Barracas, Buenos Aires
Servicio: jueves a lunes · 20h — cerrado martes y miércoles
Primera temporada: marzo–mayo 2030
rescoldo@lanin234.com.ar

Texto: Julián Arce
Fermentación: Santiago Orbe
Cerámica y diseño: Victoria Nabel
Servicio: Lara Espina
Espacio: Nicolás Sardi, Inés Villanueva, Tomás Ferreyra
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
```

## Sprints

### Sprint 1 — Estructura
- [x] Repo inicializado
- [x] Tokens CSS
- [x] Fuentes cargadas
- [x] Layout base: nav + main + footer
- [x] Footer diegético
- [x] Página 404

### Sprint 2 — Homepage
- [x] Hero full-bleed
- [x] Weather widget
- [x] Declaración (texto Julián)
- [x] Territorios (5 módulos)
- [x] Platos (7 módulos)
- [x] Equipo (4 retratos)
- [x] Lista de espera

### Sprint 3 — Contenido y polish
- [x] Textos finales
- [x] Imágenes optimizadas (WebP/AVIF)
- [x] Art direction mobile
- [x] Animaciones (solo las dos aprobadas)
- [x] Cita de prensa diegética
- [ ] Auditoría /web-design-guidelines
- [ ] QA /gstack

## Referentes rápidos

| Decisión | Referente |
|----------|-----------|
| Scroll narrativo | Hiša Franko |
| Weather widget | Brae |
| Tipografía | Brae / Ark Journal |
| Diegesis | Near Future Laboratory |
| Video fijo | Septime |
| Footer | futures-in-maps.com/san-telmo |

---

CEO: Claude (claude.ai) · CCO: Nicolás Bronzina · CDO: Claude Code
Rescoldo web v1.0 · Marzo 2026
