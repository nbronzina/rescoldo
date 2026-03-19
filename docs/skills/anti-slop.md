# Skill: anti-slop

Modo de escritura y diseño donde el output no suena ni parece IA. No es un filtro — es una forma de pensar antes de escribir o diseñar.

Aplica a: textos de la web, microcopy de UI, labels de botones, mensajes de confirmación, placeholders, errores, títulos de sección, decisiones de layout y componentes visuales.

## Escritura — reglas

### 1. Sin frases hechas
- No: "Descubrí una experiencia única"
- Sí: "El registro completo de la temporada"

### 2. Sin adjetivos vacíos
- No: "increíble", "especial", "único", "artesanal"
- Sí: sustantivos concretos, verbos precisos

### 3. Sin voz pasiva innecesaria
- No: "La temporada fue construida por..."
- Sí: "Siete personas armaron la temporada"

### 4. Sin grandilocuencia
- No: "Una propuesta gastronómica que redefine..."
- Sí: "Tres meses de cocina con lo que el territorio da"

### 5. Primera persona cuando es Julián quien habla
Nunca tercera persona promocional.

### 6. Frases cortas
Punto seguido antes que coma.

### 7. Test antes de entregar cualquier texto
¿Podría ser de cualquier restaurante del mundo? Si sí → reescribir.

## Microcopy UI — reglas específicas para Rescoldo

Los textos de interfaz deben sonar como Julián, no como un producto de software.

**Botones:**
- No: "Explorar", "Descubrir", "Conocer más"
- Sí: "Descargar journal", "Anotarme", "Ver platos"

**Placeholders:**
- No: "Ingresá tu email aquí"
- Sí: "tu@email.com"

**Mensajes de confirmación:**
- No: "¡Gracias! Te contactaremos pronto."
- Sí: "Anotado. Te escribimos en septiembre."

**Mensajes de estado (journal no disponible):**
- No: "Este contenido estará disponible próximamente."
- Sí: "El journal estará disponible próximamente."

**Errores:**
- No: "Ha ocurrido un error. Por favor intentá de nuevo."
- Sí: "Algo falló. Intentá de nuevo."

**Secciones sin contenido aún:**
- No: "Contenido en construcción"
- Sí: "Próximamente" o dejarlo vacío

## Diseño y UX — reglas antislop visual

Estas reglas complementan las guías de diseño web. Son específicas para Rescoldo y tienen precedencia sobre cualquier default genérico.

### 1. Sin componentes de UI genéricos
- No: cards con sombra, border-radius grande, iconos de heroicons, badges coloridos
- Sí: texto sobre fondo plano, líneas finas, espacio en blanco como elemento de diseño

### 2. Sin layouts predecibles
- No: hero → features → testimonials → CTA
- Sí: el scroll narrativo definido en rescoldo-web

### 3. Sin animaciones decorativas
- No: hover effects llamativos, loaders animados, transiciones de página elaboradas
- Sí: máximo dos animaciones, definidas en el brief

### 4. Sin tipografía genérica
- No: Inter, Roboto, system-ui como fuente principal
- Sí: Cormorant Garamond + DM Sans + DM Mono exactamente como está definido

### 5. Sin colores fuera del sistema
- No: cualquier color que no esté en los tokens
- Sí: #FEFCF9, #2D2D2D, #666666, #888888, #8B3A1A, #F0ECE6

### 6. Test antes de entregar cualquier componente
¿Podría ser de cualquier web de restaurante generada por IA? Si sí → rediseñar.
