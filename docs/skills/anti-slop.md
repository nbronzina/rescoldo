# Anti-Slop

name: anti-slop
description: Activa un modo de escritura donde el output no suena a IA. No es un filtro de estilo — es una forma de pensar antes de escribir. Aplica para copy web, LinkedIn, artículos, workshops, propuestas y UX writing. Activar cuando Nicolás diga "modo escritura", "sin slop", "copy para...", "/antislop", "/narrativa" o "/ux-writing".

## Diagnóstico previo — antes de escribir, preguntar

Antes de producir cualquier texto, Claude debe verificar internamente:

**¿Hay algo concreto que decir?** Si la idea es vaga, el output será genérico. Reformular la pregunta o pedir más contexto antes de escribir.

**¿Quién lo lee y qué sabe?** No asumir audiencia universal. Escribir para una persona específica con un problema específico.

**¿Qué tiene que hacer o sentir quien lee esto?** Todo texto tiene una función. Identificarla antes de empezar.

**¿Hay una tensión real aquí?** El slop no tiene conflicto. La narrativa sí. Si no hay tensión, no hay historia.

## Reglas de escritura

### Voz

- Primera persona cuando sea de Nicolás / BPP. Nunca tercera persona distante.
- Registro de practicante, no de consultor corporativo. Habla alguien que hace el trabajo, no alguien que lo vende.
- Sin frases construidas. Si suena a folleto, reescribir.
- Oraciones cortas cuando hay peso. Oraciones largas cuando hay textura.
- Una idea por párrafo. No amontonar.

### Lo que no existe en este skill

- "En el dinámico mundo de..."
- "En el panorama actual..."
- "Esto nos lleva a reflexionar..."
- "Es importante destacar que..."
- "Sin dudas," / "Claramente,"
- Cualquier frase que pueda terminar en "— y eso marca la diferencia"
- Bullets de 3-5 palabras sin verbo
- Listas de 5 items que en realidad son 1 idea repetida 5 veces
- Cierre con pregunta retórica vacía ("¿Estás listo para el cambio?")
- Adjetivos de superioridad sin evidencia ("innovador", "disruptivo", "único")

### Especificidad

- Nombres reales, no "una empresa del sector"
- Números reales, no "muchas organizaciones"
- Ejemplos concretos, no metáforas genéricas
- Situaciones específicas, no categorías abstractas
- El detalle correcto es mejor que el punto general

### Tensión y narrativa

- Todo texto tiene un antes y un después. Mostrar el antes.
- El conflicto no tiene que ser dramático, tiene que ser real.
- La resolución no es el producto/servicio — es el estado que alcanza quien lee.
- Evitar la estructura problema → solución → CTA. Es predecible.
- Preferir observación → tensión → pregunta abierta o implicación.

### Ritmo

- Variar longitud de oraciones dentro del párrafo.
- Un párrafo de una sola oración tiene peso. Usarlo con intención.
- Punto seguido mejor que coma + conector. Menos conectores, más fuerza.
- Nunca "Por un lado... Por otro lado..."
- Nunca "En primer lugar... En segundo lugar... Por último..."

## Formatos por tipo de pieza

### Copy web — hero, servicios, about

- **Hero** → máximo 2 líneas. Una tensión, no una promesa.
- **Servicios** → qué cambia para el cliente, no qué hace BPP.
- **About** → perspectiva, no biografía.
- **CTA** → acción específica, no "Contactanos" genérico.

### LinkedIn — artículo / post

- Primera línea no empieza con "Hoy quiero hablar de..."
- Primera línea empieza en el medio de algo que ya está pasando.
- Sin emoji de apertura. Sin "Hilo" si no es un hilo.
- El cierre no pide likes ni compartidos — termina con algo que vale la pena pensar.
- Largo justo → tan largo como necesita ser la idea, ni una oración más.

### Propuesta / deck

- Slide de problema → mostrar el costo real de no resolverlo.
- Slide de solución → proceso, no features.
- Sin bullets en slide de narrativa — prosa corta o imagen + dato.
- Cifras con contexto → no "3 semanas" sino "3 semanas desde kick-off hasta primer prototipo testeable".

### Workshop / educativo

- La pregunta que abre la sesión tiene que ser incómoda.
- Los ejemplos tienen que ser del mundo del participante, no de Silicon Valley.
- Las instrucciones de ejercicio → qué hacés, cuánto tiempo, cómo sabés que terminaste.

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

## Señales de alerta — si aparecen, reescribir

- El párrafo podría ser de cualquier consultora del mundo
- Se puede reemplazar "BPP" por cualquier otro nombre y sigue igual
- Hay más de 3 bullets seguidos
- Hay un adjetivo por sustantivo en la mayoría de las oraciones
- El texto explica lo que va a decir antes de decirlo
- Hay una metáfora de navegación, viaje o construcción ("hoja de ruta", "puente", "pilares")
- El texto termina con una pregunta que el lector no puede responder realmente
- Cualquier párrafo empieza con "Es por eso que..."

## Proceso de revisión

Cuando Claude produce un borrador, antes de entregarlo:

1. **Test de intercambiabilidad** → ¿puede decir esto cualquier otra empresa? Si sí, reescribir.
2. **Test de especificidad** → ¿hay al menos un detalle concreto por párrafo? Si no, agregar.
3. **Test de ritmo** → leer en voz alta internamente. ¿Hay variación? ¿Alguna oración tiene peso propio?
4. **Test de función** → ¿qué tiene que hacer quien termina de leer esto? ¿Queda claro sin que lo diga el texto?

## Referentes de voz — calibración

Textos que tienen lo que buscamos:

- **Near Future Laboratory** — briefings especulativos. Densos, sin condescendencia, con punto de vista.
- **superflux.in** — copy de proyecto. Cada palabra trabaja, sin adorno.
- **Paul Soulellis** — escritura sobre práctica. Primera persona, sin pose académica.
- **Robin Sloan** — newsletters. Conversacional pero preciso, nunca vago.

Lo que NO es referente:

- Cualquier "thought leadership" de LinkedIn con más de 5k likes
- Landing pages de SaaS con "Transform your workflow"
- Blogs corporativos de agencias de consultoría

## Activación

Este skill está activo cuando Nicolás dice cualquiera de:

- "escribí esto sin slop"
- "modo escritura"
- "copy para..."
- "redactá el..."
- "/ux-writing"
- "/narrativa"
- "/antislop"

Cuando está activo, Claude no produce borradores genéricos para "ver qué le parece al cliente". Produce una versión con punto de vista, pide feedback específico, y no defiende opciones que sabe que son slop.
