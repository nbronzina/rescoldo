# Editorial Layout — Especificaciones del libro Rescoldo

name: editorial-layout
description: Especificaciones editoriales y de layout para el libro Rescoldo (220×290mm, PDF-only, Adobe Illustrator). Activar cuando Nicolás pregunte sobre paginado, márgenes, tipografía, distribución de imágenes, instrucciones para Illustrator, ritmo editorial, o cuando necesite saber dónde va cada imagen (full bleed, con margen, spread). También activar para generar indicaciones de imagen por sección. Usar junto con nano-banana-brief cuando se preparen briefs visuales completos.

## Formato físico

| Spec | Valor |
|------|-------|
| Formato | 220 × 290 mm (vertical) |
| Soporte | PDF-only (artefacto digital diegético) |
| Artboards en producción | 36 (al 19/03/2026) — en curso |
| Encuadernación ficticia | Cosido al lomo, tapa blanda con solapas |
| Papel interior ficticio | Munken Pure Rough 150g |
| Tapa ficticia | Cartulina 300g, textura ceniza, 1-2 tintas |
| Tirada ficticia | 1.500 ejemplares |
| ISBN ficticio | 978-987-8432-01-7 |

## Adobe Illustrator — Configuración

### Documento

- Tamaño artboard: 220 × 290 mm
- Sangrado (bleed): 3mm por lado → total 226 × 296 mm
- Márgenes: Interior 20mm, Exterior 15mm, Superior 18mm, Inferior 20mm
- Área de texto segura: ~185 × 252 mm
- Fondo páginas interiores: #FEFCF9 (crema cálido)
- Color mode: CMYK

No es InDesign. No es Canva. Es Illustrator.

### Tipografía

| Uso | Fuente | Peso | Tamaño aprox. | Color |
|-----|--------|------|---------------|-------|
| Título tapa | DM Sans | Bold | ~80–100pt | #2D2D2D |
| Título sección (portadilla) | DM Sans | Bold | 28–36pt | #2D2D2D |
| Running header | DM Sans | Regular, caps | 8–9pt, tracking +200 | #888888 |
| Folio (nº página) | Lora | Regular | 8pt | #888888 |
| Cuerpo | Lora | Regular | 10–11pt | #2D2D2D |
| Cuerpo itálica | Lora | Italic | 10–11pt | #2D2D2D |
| Interlineado cuerpo | — | — | 14–15pt | — |
| Subtítulo de lugar | Lora | Italic | 11pt, tracking +50 | #666666 |
| Epígrafe | Lora | Italic | 11–12pt | #444444 |
| Pie de foto | Lora | Italic | 7–8pt | #888888 |

### Reglas tipográficas

- Párrafos sin sangría, separados por línea en blanco
- Rayas (—) sin espacio antes ni después
- Sin viudas ni huérfanas
- Tracking del título tapa: +100 a +200

### Colores del sistema

```
Fondo páginas:    #FEFCF9
Texto principal:  #2D2D2D
Texto secundario: #666666
Folios/headers:   #888888
Acento:           #8B3A1A (terracota — solo detalles puntuales)
Tapa:             Textura rescoldada (gris cálido, motas de carbón, marcas ámbar)
```

## Tipos de página y ritmo

### Tipos definidos

| Tipo | Descripción | Ejemplos en el libro |
|------|-------------|---------------------|
| Portadilla | Número romano centrado + título de capítulo | p.09, p.19 |
| Texto corrido | 1 columna con running header + folio | p.10–11, 13, 15–16, 20–21, 23, 26, 29, 32, 35 |
| Imagen media página | Foto ocupando mitad superior o inferior + texto | p.16, 18, 24–25, 28, 30–31 |
| Imagen cuarto de página | Foto pequeña flotante en columna | p.31, 34 |
| Full-bleed | Imagen sangrada a los 4 bordes, sin márgenes | p.12, 14, 17, 27, 33 |
| Folio en blanco | Verso de imagen full-bleed, sin texto | después de cada full-bleed |
| Mapa / ilustración | Imagen de página entera con margen | p.22 (mapa dibujado) |
| Epígrafe | Cita centrada con atribución, mucho aire | p.06 |
| Blanco | Página vacía, solo respira | p.07 |
| Interludio | Foto atmosférica de página entera | p.08, p.17 |

### Ritmo editorial establecido

El patrón que está funcionando en el libro:

- Portadilla → texto → imagen media → texto → full-bleed → folio blanco
- Subsecciones de territorio: título + subtítulo de lugar → texto → imagen(es)
- Nunca dos páginas de texto seguidas sin algún tipo de descanso visual

## Estado artboards al 19/03/2026

| # | Nombre | Estado |
|---|--------|--------|
| 01 | Tapa | ✓ |
| 02 | Guarda Delantera | ✓ |
| 03 | Portada Interior | ✓ |
| 04 | Colofón | ✓ |
| 05 | Índice | ✓ |
| 06 | Epígrafe | ✓ |
| 07 | Blanco | ✓ |
| 08 | Interludio Apertura | ✓ |
| 09 | Portadilla I (VOLVER) | ✓ |
| 10–11 | Volver (texto) | ✓ |
| 12 | Zaguán (full-bleed) | ✓ |
| 13 | Volver (texto) | ✓ |
| 14 | Patio Interno (full-bleed) | ✓ |
| 15 | Volver (texto) | ✓ |
| 16 | Volver (texto + plato) | ✓ |
| 17 | Horno de Noche (full-bleed) | ✓ |
| 18 | Riachuelo Al Amanecer | ✓ |
| 19 | Portadilla II (EL TERRITORIO) | ✓ |
| 20–21 | El Territorio (intro) | ✓ |
| 22 | Mapa Territorio (dibujado a mano) | ✓ |
| 23 | El Monte (texto) | ✓ |
| 24–25 | El Monte (imágenes) | ✓ |
| 26 | El Bosque (texto) | ✓ |
| 27 | El Bosque (imagen) | ✓ |
| 28 | El Río (imagen) | ✓ |
| 29 | El Río (texto) | ✓ |
| 30 | El Río (imagen) | ✓ |
| 31 | El Río (imagen) | ✓ |
| 32 | La Costa (texto) | ✓ |
| 33 | La Costa (Ramona, full-bleed) | ✓ |
| 34 | La Costa (producto) | ✓ |
| 35 | La Reserva (texto) | ✓ |
| 36 | El Territorio — en progreso | ⏳ |

## Activación

- /layout
- /editorial
- "¿cómo va la imagen en esta página?"
- "specs del libro"
- "dónde va la foto de X"
- "instrucciones Illustrator para..."
