# Skill: redzepi-journal

Modelo editorial Phaidon/Pentagram para /temporada en la web y Capítulo III del PDF.

## Referente

René Redzepi, *A Work in Progress: A Journal*
Diseño: Pentagram (Astrid Stavro)
Editorial: Phaidon, 2013/2019

## Principios

### 1. Estructura cronológica visible

Cada entrada del diario tiene:
- Fecha como elemento tipográfico grande (DM Mono, --text-xl, --color-muted)
- Título de la entrada (Cormorant Garamond, serif, --text-xl)
- Texto del cuerpo (Cormorant Garamond, --text-lg, leading 1.8)
- Separador: línea fina (1px, --color-surface) entre entradas

### 2. Márgenes generosos

Las entradas no ocupan el ancho completo.
Columna de texto: 65ch máximo, centrada.
Espacio vertical entre entradas: mínimo 80px.
El espacio vacío es parte del diseño.

### 3. Imágenes como "flores prensadas"

Las imágenes de ingredientes entre entradas van en flat lay, centradas, sin caption, sin border, sin sombra.
Tamaño: 40–50% del ancho de la columna.
Como si alguien las hubiera dejado caer sobre la página del diario.

### 4. Números de fecha como estructura

El día del mes va en grande, solo, antes del título de la entrada.

```
12          ← DM Mono, grande, muted
El primer fuego   ← Cormorant Garamond, serif
```

No como título h1 sino como elemento tipográfico estructural.

### 5. Voz

El texto ya sigue el modelo de Redzepi: candid, primera persona, cotidianidad mezclada con reflexión. No tocar.

## Layout de una entrada (web)

```
[línea separadora 1px]

12                          ← DM Mono, text-xl, muted
Marzo                       ← DM Mono, text-xs, muted, uppercase

El primer fuego             ← Cormorant Garamond, text-xl

[texto de la entrada]       ← Cormorant Garamond, text-lg, leading 1.8, 65ch max

[imagen flat lay opcional]  ← ingrediente, centrado, 40% del ancho

[espacio: 80px]

[línea separadora 1px]

18
Marzo

La mesa ...
```

## Lo que NO hacer

- Sin cards, sin bordes, sin sombras en las entradas
- Sin iconos de calendario ni decoración
- Sin números de entrada (1/6, 2/6...)
- Las imágenes no tienen caption en esta sección
- Sin scroll animations en las entradas individuales

## Aplicación en el PDF (Capítulo III)

El mismo modelo aplica al Capítulo III del libro en Illustrator:
- Fechas como elementos tipográficos grandes
- Márgenes generosos
- Imágenes de ingredientes intercaladas como flores prensadas
- El ritmo de la página replica el ritmo del diario
