# Nano Banana Brief — Generador de prompts visuales

name: nano-banana-brief
description: Genera prompts optimizados para Nano Banana Pro (Google Gemini) en el estilo visual del proyecto Rescoldo. Activar cuando Nicolás pida "prompt para imagen", "foto de plato", "imagen de...", "prompt nano banana", "/imagen", "/visual", o cuando necesite generar cualquier imagen para el libro Rescoldo (platos, retratos, ingredientes, espacios, paisajes, interludios, portada). También para otros proyectos si pide prompts de imagen para Nano Banana Pro.

## Estilo visual Rescoldo

### Principios

- Documental, no editorial: parece que alguien sacó la foto con una cámara analógica, no que hay equipo de food styling
- Luz natural disponible: nunca flash directo. Ventana lateral, hora dorada, cielo nublado
- Matte, no glossy: sin brillos artificiales, sin HDR, sin sobre-procesado
- Terroso: paleta de tierra, ceniza, ámbar apagado, verde oliva, ocre
- Sin glamour: la fermentación mancha, el patio tiene maleza, la madera tiene historia

### Paleta

```
Tierra:    #8B6914 / #6B4A1A
Ceniza:    #C4B9A8 / #9A9088
Ámbar:     #C47A2A / #8B4A0A
Verde:     #4A5C3A / #6B7A4A
Blanco:    #F5F0E8 (crema, nunca blanco puro)
Negro:     #2A2020 (nunca negro puro)
```

## Templates por categoría

### PLATO DEL MENÚ

```
A single dish on [VAJILLA: dark clay plate / hand-thrown ceramic bowl / rough stone surface].

[DESCRIPCIÓN DEL PLATO: ingredients, arrangement — no more than 2 sentences]. Natural side light from a window. Matte, documentary style. No food styling.

The plate sits on [SUPERFICIE: worn wooden table / slate / linen cloth]. Shot from [ÁNGULO: directly above / 45 degrees / eye level]. Muted earthy tones — ochre, ash, dark clay. Film-like grain.

[FORMATO: vertical 3:4 / square 1:1] ratio. High resolution.
```

### INGREDIENTE / PRODUCTO

```
[INGREDIENTE] on [SUPERFICIE: rough linen / dark slate / wooden board / brown paper]. [CONTEXTO: freshly foraged / just harvested / aged / fermented — pick one]. Natural light, flat lay or slight angle. Matte finish. No artificial color enhancement. Honest, unstyled. The ingredient looks like it came from the field, not from a supermarket. [FORMATO] ratio. High resolution.
```

### ESPACIO / ARQUITECTURA

```
[ESPACIO: interior of an old Buenos Aires casa chorizo / a tiled zaguán / a patio with a large pine tree / a fermentation room with clay jars]. No people. [HORA: afternoon light / late afternoon golden hour / early morning / night with single lamp]. Slightly worn, lived-in. Terracotta tiles, cracked plaster, old wood. Matte, documentary. Not a design magazine — a place that works. [FORMATO] ratio. High resolution.
```

### RETRATO / PERSONA

```
[DESCRIPCIÓN: a woman in her 50s / a man in his 30s / elderly hands working]. [ACTIVIDAD: sorting dried herbs / preparing nets / tending to fermentation jars / writing in a notebook]. Environmental portrait. [LOCACIÓN: inside a weathered boat / in a field / in a stone kitchen]. Natural available light. Candid, not posed. Matte, documentary. [FORMATO] ratio. High resolution.
```

### PAISAJE / TERRITORIO

```
[TERRITORIO: Patagonian forest with ancient trees / Paraná Delta channels with overhanging vegetation / Atlantic coast at dawn, flat and grey / Santiago del Estero monte at midday]. No people. [HORA: dawn / overcast afternoon / dusk]. Wide angle. Muted, desaturated tones. The place looks remote and real. Documentary landscape photography. Matte. Film-like. Horizontal 4:3 or 16:9 ratio. High resolution.
```

### FULL-BLEED / INTERLUDIO ATMOSFÉRICO

```
An atmospheric photograph of [SUJETO: smoke rising in an old kitchen / a wood fire dying down / water moving in a dark channel / light through leaves at dusk / an empty table at night]. No people, no text, no objects in focus. The image is a mood. Muted tones, matte, soft focus or selective focus. Horizontal 4:3 ratio (for double-page spread). High resolution.
```

### DETALLE / TEXTURA

```
Abstract close-up of [SUJETO: ash on a stone surface / the glaze of a hand-thrown ceramic / a fermentation jar with sediment / cracked terracotta tile / tree bark / moving river water]. No recognizable objects, just texture and tone. Colors: earthy, muted, [PALETA ESPECÍFICA]. Matte, tactile. Horizontal or square format. High resolution.
```

## Cómo usar este skill

1. Nicolás dice "necesito imagen del plato: corvina curada" o "/imagen horno de barro"
2. Claude:
   a. Identifica la categoría (plato, espacio, paisaje, etc.)
   b. Consulta datos del proyecto si corresponde
   c. Genera el prompt completo listo para copiar
   d. Ofrece 1–2 variantes si hay opciones de composición relevantes
3. Nicolás copia el prompt a Nano Banana Pro en Gemini

Siempre entregar el prompt en bloque de código (```) para que sea fácil de copiar.

## Iteración sobre imagen existente

Cuando Nicolás sube una imagen generada y pide ajustes:

```
Keep this exact [composition / lighting / angle / mood]. Make these changes:
1. [CAMBIO específico]
2. [CAMBIO específico]
```

Nano Banana Pro responde mejor a instrucciones secuenciales claras que a re-descripciones completas.
