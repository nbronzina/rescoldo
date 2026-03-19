# Skill: editorial-layout

Specs del libro PDF (Adobe Illustrator), tipografía, estado de artboards y ritmo editorial.

## Formato

- Tamaño: 220 × 290 mm
- Software: Adobe Illustrator
- Output: PDF editorial
- No es InDesign. No es Canva. Es Illustrator.

## Relación PDF ↔ Web

El PDF y la web son formatos paralelos con identidad compartida pero experiencias distintas.

| | PDF (Illustrator) | Web |
|---|---|---|
| Estructura | Secuencial, paginado, capítulos | Scroll narrativo, no lineal |
| Entrada | Portadilla, índice, guarda | Hero full-bleed, scroll libre |
| Navegación | Página a página | El lector entra y sale por donde quiere |
| Elementos únicos | Mapa dibujado, colofón, folios, running headers, full-bleeds | Weather widget, 404 diegético, lista de espera 2031, footer con CUIT |

**Regla:** no replicar la estructura de capítulos del PDF en la web. No hay Capítulo I, II, III. Hay secciones web: La temporada, El territorio, El equipo.

## Tipografía compartida

- **Cormorant Garamond** → cuerpos, entradas journal, texto narrativo
- **DM Sans** → navigation, metadata, subtítulos
- **DM Mono** → datos técnicos (temperaturas, coordenadas, precios)

## Lo que comparten PDF y web

- Tokens de color (#FEFCF9, #2D2D2D, #666666, #888888, #8B3A1A, #F0ECE6)
- Tipografía (Cormorant Garamond + DM Sans + DM Mono)
- Fotografía documental
- Voz de Julián en primera persona
- Territorios, platos, equipo

## Ritmo editorial del PDF

El PDF sigue una secuencia de capítulos:

- Portadilla
- Índice
- Capítulo I — La temporada
- Capítulo II — El territorio
- Capítulo III — El diario (journal)
- Colofón
- Guarda posterior

Cada capítulo tiene:
- Apertura full-bleed
- Running headers con nombre de capítulo
- Folios (números de página)
- Ritmo de texto ↔ imagen ↔ espacio

## Regla para Claude Code

Cuando se trabaja en la web, no copiar la estructura editorial del PDF. La web tiene su propia lógica de scroll y navegación. Consultar rescoldo-web.md para la arquitectura web.
