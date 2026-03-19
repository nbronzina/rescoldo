# Redzepi Journal — Modelo editorial para La Temporada

## Referente

René Redzepi, *A Work in Progress: A Journal*
Diseño: Pentagram (Astrid Stavro, Jake Gilbert, Susanna Foppoli)
Editorial: Phaidon, 2013/2019

## Qué es este libro

Parte libro de cocina pero principalmente un diario que documenta un año en la vida de Redzepi y su equipo en Noma. La escritura es cándida e ingeniosa, sigue el proceso de descubrimiento, creación y refinamiento, y perfila la lucha, determinación y trabajo en equipo que requiere cada temporada.

La clave no es el resultado — son los detalles cotidianos: qué llegó ese día, qué falló, qué dijo alguien, cuánto faltó de algo, el clima, el proveedor que no apareció. El diario no explica la cocina — la muestra desde adentro.

## Principios de diseño (Pentagram)

- Lenguaje visual sobrio y subestimado de espacio, imagen y texto
- Márgenes generosos, abundancia de espacio en blanco
- Estructura visible: líneas finas, números grandes, columnas
- Imágenes como flores prensadas: ingredientes fotografiados en flat lay entre las páginas del diario, como si alguien los hubiera dejado caer ahí
- Tipografía cálida con personalidad fuerte: Arnhem (Fred Smeijers) — en Rescoldo se reemplaza con Cormorant Garamond + DM Mono
- Páginas interiores crema — en Rescoldo: #FEFCF9
- Cronología visible: el año avanza, la estación avanza, el lector sabe dónde está en el tiempo

## Aplicación a la web — /temporada

### Layout de cada entrada

```
[línea separadora — 1px, #F0ECE6]

[espacio: 40px]

12                          ← DM Mono, 36px, #888888
El primer fuego             ← Cormorant Garamond, 24px, #2D2D2D

[espacio: 24px]

[texto de la entrada]       ← Cormorant Garamond, 18px,
                              leading 1.8, max-width 65ch

[imagen flat lay opcional]  ← ingrediente sobre superficie,
                              centrada, 40% del ancho,
                              sin caption, sin border

[espacio: 80px]
[línea separadora]
```

### Reglas de diseño web

1. **Fechas como elemento estructural** — el número del día solo, grande, en DM Mono, antes del título. No como header decorativo: como ancla cronológica.

2. **Columna de texto estrecha** — 65ch máximo, centrada. El espacio lateral es parte del diseño, no desperdicio.

3. **Imágenes entre entradas, no dentro** — las fotos de ingredientes flotan entre entradas, no anclan a texto específico. Como flores prensadas entre páginas.

4. **Sin cards, sin bordes, sin sombras** — el texto sobre #FEFCF9 puro. Sin contenedores que lo encapsulen.

5. **Separador minimalista** — línea fina de 1px en #F0ECE6 entre entradas. Suficiente para marcar el corte, invisible si no la buscás.

### No hacer

- Sin iconos de calendario
- Sin numeración de entradas (1/6, 2/6...)
- Sin tags o categorías
- Sin barra lateral
- Sin "leer más" — cada entrada se lee completa o no se lee

## Aplicación al PDF — Cap. III La Temporada

### Escritura — qué mezcla cada entrada

Redzepi mezcla en cada entrada del diario:

1. Lo mundano del día (qué llegó, qué falló, qué dijo alguien en la cocina)
2. Una reflexión más grande (qué significa ese ingrediente, qué aprendió)
3. La estación como personaje (el otoño avanza, el frío llega, la luz cambia)

Para Julián, la misma estructura:

- "Llovió tres días. El patio se inundó." → suficiente como apertura
- No cada entrada necesita conclusión
- Algunas pueden terminar en medio de un pensamiento, como un diario real
- El fracaso es legible: "el zapallo se pasó cinco minutos" es más honesto que omitirlo

### Layout en Illustrator

**Fecha:** DM Mono, 9pt, tracking +200, #888888
Solo el número del día. El mes se lee en contexto.

**Título:** DM Sans Bold, 14pt, #2D2D2D

**Texto cuerpo:** Lora Regular, 10.5pt, leading 15pt, caja de 65ch

**Entre entradas:**
- Línea de 0.25pt, #F0ECE6
- 24pt antes y después de la línea

**Imágenes de ingredientes:**
- Flat lay sobre superficie real (no fondo neutro de estudio)
- Centradas en la columna de texto
- 50–60% del ancho de la caja de texto
- Sin pie de foto en esta sección
- Flotan entre entradas — no anclan a ningún texto específico

**Números grandes:**
- El día del mes solo, antes del título
- DM Mono, 36pt, #888888
- Crean estructura visual sin necesitar headers jerárquicos

## Fotografía en La Temporada

Modelo directo de Redzepi: "la ausencia de decoración superflua, el plato capturado en el momento de su creación."

Para Rescoldo:

- Ingredientes en crudo sobre la mesa de madera del patio — no sobre superficie neutra
- Proceso: la mano de Santiago trabajando el koji, el zapallo antes de entrar al horno
- Si hay foto de plato: como si alguien lo fotografió con el teléfono antes de que llegue al comensal
- Sin food styling. Sin superficie limpiada. Las marcas de uso son parte de la imagen.

## Activación

Activar este skill cuando:

- Se escriba cualquier texto de Cap. III (La Temporada) en el PDF
- Se diseñe o itere /temporada en la web
- Se generen prompts de imagen para las páginas del diario
- Se evalúe si un texto "suena a journal" o no
