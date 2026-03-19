# Diegetic Fiction Web

name: diegetic-fiction-web
description: Principios y decisiones para construir webs que son artefactos diegéticos — existen dentro de la ficción, no hablan sobre ella. Activar cuando se diseñe o evalúe cualquier componente web de Rescoldo, cuando se discuta la arquitectura o voz de la web, o cuando se tome cualquier decisión sobre qué incluir o excluir del sitio. También activar para cualquier otro proyecto de design fiction con presencia web. Si hay duda entre este skill y rescoldo-web, usar ambos juntos.

## La distinción fundamental

Una web editorial habla sobre un proyecto. Una web diegética *es* el proyecto.

No es filosófica — es técnica. Cada decisión de diseño tiene consecuencias distintas según cuál de las dos se esté construyendo.

## La regla core: Near Future Laboratory

"The extraordinary must feel ordinary."

Lo que hace funcionar el TBD Catalog de NFL (2012/2023) no es el diseño espectacular. Es la mundanidad de los detalles:

- Precio con centavos
- SKU alfanumérico
- Warnings de seguridad en tipografía diminuta
- Nota al pie con restricciones legales
- Número de serie en el producto
- Garantía limitada de 90 días

El catálogo recibió pedidos reales y cartas de cease & desist de empresas que reclamaban patentes sobre productos ficticios. Eso es la prueba de éxito: el error de lectura (creer que es real) no es el fracaso del artefacto — es su validación.

Para Rescoldo: los detalles que hacen que la web sea real no son las fotos del patio. Son:

- Menú con precios en pesos argentinos de 2030
- Aviso de cierre de temporada con fecha exacta: "Cerramos el 30 de mayo"
- Dirección con número de puerta: Lanín 234, Barracas
- Formulario de lista de espera que puede no llevar a ningún lado
- Footer con datos fiscales ficticios pero plausibles
- Una foto burrosa y mal encuadrada del patio

## Tabla de decisiones diegéticas

| Elemento | Web editorial | Web diegética |
|----------|---------------|---------------|
| Fecha | Actualización real | Fecha del mundo ficticio (otoño 2030) |
| Voz | Tercera persona o segunda | Primera persona desde adentro |
| Reservas | Enlace funcional | Formulario que puede no llevar a ningún lado |
| Errores 404 | Bug | Recurso narrativo ("temporada cerrada") |
| Metadata | Invisible | Puede ser parte del artefacto |
| Footer | Legal/contacto | Cronología de la temporada |
| Idioma | Consistente | Puede mezclar registros |
| Precios | Moneda actual | Moneda y precios del año diegético |
| Horarios | Funcionales | Horarios del universo ficticio |
| Prensa | Links reales | Citas diegéticas (NYT enero 2031, etc.) |

## Mecanismos diegéticos verificados en casos reales

### 1. La mundanidad burocrática (NFL)

Los detalles que no se "diseñan" — precio, regulación, advertencias — son los que crean la verosimilitud. El diseño bonito puede ser ficción. El número de CUIT no.

### 2. El diario desde adentro (Superflux — Mitigation of Shock)

Un texto en primera persona que describe el presente ficticio como cotidiano. Sin asombro. Sin exposición. La persona que escribe en 2030 no explica qué es el otoño de 2030 — lo vive.

Modelo: "La semana cuatro Ramona mandó cangrejos" no es una explicación. Es una entrada de diario. El lector entra al mundo, no el mundo se le explica al lector.

### 3. El nosotros inclusivo (Hiša Franko)

"Nuestro menú", "nuestra cocina", "nuestros productores" — la web habla desde un nosotros que incluye al lector antes de que llegue. Mecanismo de inclusión anticipada.

### 4. El documento vivo (Noma — The Weather Report)

Un blog que documenta la temporada en tiempo real desde adentro de la cocina. El lector sabe qué pasa hoy como si tuviera acceso al mundo interno del restaurante. Para Rescoldo: las entradas del journal no son "noticias del restaurante" — son el pensamiento de Julián en tiempo real de la ficción.

### 5. El artefacto dentro del artefacto (futures-in-maps.com/san-telmo)

La web del Mercado San Telmo 2030 (proyecto de Nicolás Bronzina + Near Future Laboratory) existe en el mismo año diegético que Rescoldo. Tiene mapa, puestos, horarios, servicios, una cita del NYT de enero 2031, y un "Chief Heat and Drought Officer" de barrio. El disclaimer de ficción está al final, no al principio. El lector entra como visitante, no como observador.

## Qué NO hacer en una web diegética

**No poner el disclaimer al principio.** El disclaimer de ficción va al final, en el footer, en tipografía pequeña. Si el primer elemento que ve el lector es "esto es ficción", la ficción no funciona.

**No over-design.** Una web con animaciones espectaculares dice "alguien la hizo". Una web con una foto levemente sobreexpuesta del patio dice "alguien la subió". La imperfección controlada es un mecanismo diegético.

**No ser completamente funcional.** El formulario de lista de espera puede existir pero no necesita responder. La sección de "prensa" puede tener citas de medios que no llevan a URLs reales. La tensión entre funcional y no-funcional es parte del objeto.

**No salir del tiempo diegético.** Si la web existe en otoño 2030, no hay nada que la conecte con 2025 o 2026. Ni el copyright del footer. Ni la fecha de last update. Todo vive en 2030.

## La tensión "parece real" vs "es ficción declarada"

NFL no la resuelve. La mantiene deliberadamente ambigua.

El modelo para Rescoldo:

1. La web existe en 2030 sin disclaimers visibles
2. El disclaimer de ficción está en el footer, en tipografía pequeña, igual que en futures-in-maps.com/san-telmo
3. Si alguien toma la web por real, el artefacto funcionó

La audiencia de Rescoldo (gastrónomos de autor + diseñadores de futuros) entiende la convención. No necesita protección. Necesita que el artefacto sea lo suficientemente bueno para querer creerlo.

## Referentes por orden de relevancia para Rescoldo

1. **Near Future Laboratory** — metodología diegética, regla de la mundanidad
2. **futures-in-maps.com/san-telmo** — mismo universo diegético, mismo año
3. **Superflux (Mitigation of Shock)** — diario desde adentro del mundo futuro
4. **Hiša Franko** — nosotros inclusivo, territorio como personaje
5. **Noma (The Weather Report)** — documento vivo de la temporada
6. **Brae** — coherencia total sistema/web/espacio
