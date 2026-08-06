# Auditoría design fiction — Rescoldo web

Agosto 2026 · Auditoría multiagente en 4 lentes: canon, estanqueidad diegética, plausibilidad del futuro, función crítica/experiencial. 27 hallazgos, deduplicados y priorizados. Ningún cambio aplicado — este documento es para decidir.

## Severidad ALTA — rompen la ficción para la audiencia objetivo

### 1. El horno tiene dos cronologías (canon + experiencial)
La entrada del 14 de febrero da por existente el horno ("donde el horno estaba apagado todavía"); la del 12 de marzo dice que Nicolás lo terminó la noche anterior. Además, encender a fuego pleno un horno con "el barro fresco todavía" es técnicamente inverosímil: el curado lleva días.
**Decisión:** ajustar la entrada de febrero ("donde iba a estar el horno") o adelantar la construcción; y suavizar el "terminado la noche anterior".

### 2. El llao llao fresco en otoño no existe (plausibilidad)
*Cyttaria hariotii* fructifica en primavera (sept–dic), con la brotación de la lenga. Una temporada marzo–mayo no recibe llao llao "fresco, envuelto en hojas de nalca, para usar en tres días".
**Decisión:** declararlo stock en escabeche de la primavera 2029 (el plato 7 ya lo insinúa — solo corregir El Bosque), o reemplazar el fresco por un hongo genuinamente otoñal (gargal, lengua de vaca).

### 3. "Malbec de secano" en el Alto Valle es un oxímoron (plausibilidad)
El Alto Valle de Río Negro es desierto (~200 mm/año); el 100% de su viticultura es de riego. "De secano" ahí es agronómicamente imposible.
**Decisión:** eliminar "de secano" (sin sulfitos + levaduras espontáneas ya es suficiente), justificarlo con viñas viejas que alcanzan la napa del río (merece una línea), o mudar la bodega a la Comarca Andina (~800 mm/año), donde el secano sí es extrapolable.

### 4. El argumento es ilegible sin leer los docs (crítica)
El contra-relato de la sostenibilidad institucionalizada — la razón de ser especulativa del proyecto — no tiene superficie visible. Un visitante lee un farm-to-table hermoso indistinguible de uno real de 2025: el artefacto seduce pero no argumenta.
**Decisión:** una entrada del diario donde Julián registre su posición (el San Telmo, o lo que Rescoldo decidió no tener: sellos, trazabilidad certificada), en registro mostrar-no-decir. Alternativa mínima: un párrafo de la Declaración que nombre lo que Rescoldo *no* es.

### 5. La imperfección controlada está ausente (crítica)
La skill la define como mecanismo diegético ("una foto burrosa dice 'alguien la subió'") y no está implementada: todo el material visual es golden-hour, cenital, impecable — food styling de facto. El pulido total dice "alguien la diseñó".
**Decisión:** 2–3 fotos deliberadamente imperfectas en entradas del diario (patio desenfocado, frasco de garum con flash), y 1–2 entradas antiépicas (la leña, la habilitación municipal, un proveedor que no contestó). La entrada que nadie escribiría para impresionar hace creíbles a las demás.

## Severidad MEDIA

### Canon
- **3 de agosto de 2029 fue viernes**, y el texto dice "un domingo" (canon: "domingo de agosto 2029"). Domingos reales: 5, 12, 19, 26. En un artefacto que usa clima real, los días verificables deben cuadrar.
- **Juncos:** territorio dice corte en abril; el journal va al Delta el 8 de mayo; la sal de junco se sirve desde el 27 de marzo. Unificar ventana o insinuar stock previo.
- **Raúl Cálderes no existe en el canon** — la web le inventó apellido, edad y logística (regla: "no inventar contenido fuera de las skills"). El código es fuente de verdad: consolidarlo en rescoldo-voice.md. Evaluar el casi-choque Cálderes/Calderón.
- **La Reserva, geografía confusa:** el Belgrano Sur no pasa por Costanera Sur; y "veinte minutos a pie" no cierra con 6 km (~75 min). Separar las dos zonas de recolección; "veinte minutos en bicicleta" o asumir la caminata larga (mejor material narrativo).
- **Pilar:** "guía" en home vs "bióloga" en territorio. Nota: la divergencia fue decisión de brief previo ("etiquetas distintas por superficie") — confirmar si se sostiene o se unifica.

### Estanqueidad
- **`rescoldo.vercel.app` en OG, sitemap y robots** — Vercel es infraestructura de 2026 visible al compartir el link. El mailto ya usa `lanin234.com.ar`: ese es el dominio diegético natural. Centralizar en una constante y migrar cuando haya dominio.
- **La description de OG está en tercera persona editorial** ("Una residencia gastronómica en...") — voz de catálogo, no de Julián. Es lo que se ve al compartir: es parte del artefacto.

### Plausibilidad
- **$420.000 implica estabilización total del peso** (inflación de un dígito 2026–2030). Si la tesis es estabilización parcial, el rango defendible es $700.000–1.200.000. Es el dato que todo lector argentino va a calcular. Decidir la tesis y documentarla como señal de futuro — o omitir el precio ("se comunica al confirmar la lista"), coherente con una web sin función transaccional.
- **Verdolaga fresca hasta el 28 de mayo:** es anual estival — plausible en marzo, inexistente en mayo. Acotarla ("mientras el Delta la dé — después, encurtida") refuerza la ética estacional.
- **Morillas:** son de primavera; "deshidratadas" está bien resuelto, pero "Santiago va dos veces por temporada" a recolectar contradice el ciclo. Una frase lo convierte en detalle de verosimilitud: recolectadas en primavera 2029, los viajes de otoño son por los hongos de lenga.

### Crítica / experiencial
- **La mesa del hero tiene ~14 cubiertos**; todo el texto insiste en diez. Incoherencia en el primer scroll, para una audiencia que cuenta sillas.
- **"El journal estará disponible próximamente"** es el único copy de la web que habla desde 2026 (coming-soon corporativo). Reescribir desde el mundo: fecha, tirada, voz de Julián.
- **La lista de espera confirma con certeza total** ("Te escribimos en septiembre") cuando el brief la define como algo "que puede no llevar a ningún lado". Trasladar la incertidumbre al copy ("La lista es más larga que la mesa. Si hay lugar, te escribe Lara.").
- **2030 no se filtra en los textos:** fuera del widget y las fechas, el contenido podría ser de 2024. Dos o tres goteos mundanos (la crecida del Delta, lo que ya no llega de Samborombón) harían legible el futuro sin explicarlo.

## Severidad BAJA
- Footer implementado ≠ footer canónico de CLAUDE.md (horario, email, créditos de Santiago y Lara no documentados) — actualizar docs.
- Cronología del vino: el acuerdo con Rubén se cierra el 25 de abril pero el vino se sirve desde el 27 de marzo — insinuar un primer envío tras la llamada de febrero.
- Garum "listo" en 8 semanas a temperatura ambiente es optimista; miso servido en marzo vs "necesita dos semanas más" en abril — establecer tandas escalonadas desde enero.
- "La sal del tallo" del junco: el Delta es agua dulce; la sal de junco real es sal de ceniza (quemar y lixiviar). El mecanismo real es más interesante que el error.

## Lo que está fuerte
Mundanidad burocrática (CUIT, horarios, dirección), primera persona sin asombro, 404 narrativo, weather widget como "presente extendido", disclaimer al final, tensión no-transaccional. La estructura diegética es sólida; los hallazgos son de consistencia y de coraje (argumento e imperfección), no de arquitectura.
