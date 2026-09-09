# Especificación de Diseño: El Arte de Narrar — Teoría Narratológica y Modelos Posclásicos

**Fecha:** 2026-09-09  
**Proyecto:** El Arte de Narrar — Elementos del Relato & Narratología Superior  
**Ubicación:** `recursos/narracion/` y `public/recursos/narracion/`  
**Autor:** Msc. Alejandro Córdova  
**Estado:** Aprobado para Planificación  

---

## 1. Contexto y Objetivos del Rediseño

### 1.1 Diagnóstico del Recurso Previo
El recurso preexistente en `recursos/narracion/index.html` fue concebido con un alcance escolar básico (10.º EGB). Sus limitaciones principales eran:
- **Reduccionismo Teórico:** Enfoque escolar elemental en 4 narradores y roles de personajes ejemplificados con cuentos infantiles (*Caperucita, Blancanieves*), omitiendo conceptos estructurales e hitos narratológicos modernos.
- **Monolito de Código:** Todo el código (estilos CSS, estructura HTML y lógica JavaScript) acumulado en un único archivo de 1370 líneas.
- **Déficit Visual:** Solo 5 imágenes estáticas sin valor analítico ni infográfico.
- **Interactividad Plana:** Botones simples de revelación y un cuestionario final sin andamiaje formativo.

### 1.2 Metas Pedagógicas y Didácticas
1. **Universalidad y Progresión por Niveles:** Proporcionar dos rutas formativas diferenciadas:
   - *Ruta I (Nivel Fundamental):* Destinada a secundaria y 10.º EGB, centrada en los fundamentos de la narración, voz, arquetipos, orden cronológico y conflicto en el ciclo quinario de Todorov.
   - *Ruta II (Nivel Avanzado):* Destinada a Bachillerato (BGU), Bachillerato Internacional, preuniversitario y formación filológica, incorporando los modelos narratológicos clásicos (Gérard Genette, A. J. Greimas, Claude Bremond, Dorrit Cohn) y posclásicos (narratología cognitiva de Fludernik y Herman, retórica de James Phelan, inconfiabilidad de Greta Olson y narratología antinatural).
2. **Glosario Didáctico Modal (Micro-aprendizaje):** Integración de fichas emergentes (`ℹ`) con definiciones científicas, ejemplos analizados y claves de lectura crítica para más de 20 términos especializados.
3. **Potenciación Visual e Infográfica:** Creación de un banco de infografías conceptuales y escenas literarias ilustradas con estética editorial de alta calidad.
4. **Laboratorios Interactivos:** Simuladores de focalización, tableros actanciales de Greimas, líneas de tiempo analépticas/prolépticas y curvas de tensión dramática.
5. **Evaluación Formativa y Persistencia:** Cuestionario riguroso con retroalimentación inmediata y sincronización con Google Sheets.

---

## 2. Arquitectura del Sistema y Modularización

### 2.1 Estructura de Directorios
El recurso se desacoplará en archivos dedicados, manteniendo paridad espejo entre `recursos/narracion/` y `public/recursos/narracion/`:

```text
recursos/narracion/
├── index.html            # Estructura semántica por pestañas tab-content y modales accesibles
├── styles.css            # Sistema de diseño, variables tipográficas, layout responsive y animaciones
├── app.js               # Lógica interactiva, selector de rutas, simuladores, glosario y Sheets API
└── imagenes/             # Banco de infografías didácticas e ilustraciones editoriales
    ├── ciclo_quinario_todorov.png
    ├── focalizaciones_lente.png
    ├── modelo_actancial_greimas.png
    ├── velocidades_tiempo_genette.png
    ├── narrador_inconfiable_matriz.png
    ├── cronotopo_espacio_tiempo.png
    ├── escena_pedro_paramo.png
    ├── escena_cien_anos_soledad.png
    ├── escena_el_extranjero.png
    └── escena_jardin_bifurcan.png
```

### 2.2 Sistema de Navegación y Sincronización con `course-shell`
- **Selector de Rutas Superior (`.learning-route-switcher`):**
  - Botón 1: `Ruta I · Nivel Fundamental` (Módulos 01 a 05).
  - Botón 2: `Ruta II · Nivel Avanzado` (Módulos 06 a 11).
  - Botón 3: `Ruta III · Gran Reto & Análisis` (Módulo 12).
- **Integración con `course-shell`:**
  - El menú lateral desplegable izquierdo agrupa los módulos bajo encabezados tipográficos en mayúsculas (`NIVEL FUNDAMENTAL (ELEMENTOS DEL RELATO)`, `NIVEL AVANZADO (TEORÍA NARRATOLÓGICA & MODELOS POSCLÁSICOS)`, `EVALUACIÓN & LABORATORIO`).
  - Sincronización bidireccional mediante los eventos `course-shell-switch-tab` y `tab-changed`: al seleccionar cualquier módulo en el menú lateral, la cabecera conmuta automáticamente a la ruta correspondiente y activa sus pestañas visibles.

---

## 3. Especificación Detallada de Módulos Didácticos

### 3.1 Ruta I · Nivel Fundamental (10.º EGB / Secundaria)

#### Módulo 01 · La Voz del Narrador y la Enunciación
- **Contenido Teórico:**
  - ¿Quién cuenta la historia? Distinción entre autor de carne y hueso y voz narrativa ficcional.
  - Narrador en 1.ª persona (Protagonista y Testigo).
  - Narrador en 3.ª persona (Omnisciente y Observador / Cámara).
- **Dinámica Interactiva:**
  - *El Interruptor de Voces:* Presentación de un mismo suceso cotidiano relatado desde 3 perspectivas distintas. El estudiante activa la voz y comprueba los límites de lo que cada narrador puede y no puede saber.
- **Activos Visuales:**
  - Ilustración de apertura y diagrama de personas gramaticales.

#### Módulo 02 · Anatomía de los Personajes
- **Contenido Teórico:**
  - Protagonista: motor del deseo y centro gravitacional.
  - Antagonista: fuerza de choque, encarnación del obstáculo.
  - Aliados, mentores y personajes secundarios: aportes de verosimilitud y dinamismo.
  - Arquetipos literarios universales.
- **Dinámica Interactiva:**
  - Clasificación de roles con retroalimentación pedagógica inmediata.

#### Módulo 03 · El Espacio y la Atmósfera Narrativa
- **Contenido Teórico:**
  - Espacio físico y geográfico (topografía tangible).
  - Espacio psicológico y emocional (la atmósfera, el tono, la opresión o libertad).
  - Espacio sociocultural (costumbres, jerarquías y lenguaje).
- **Dinámica Interactiva:**
  - Análisis de extractos descriptivos para discriminar atmósfera y contexto social.

#### Módulo 04 · El Tiempo y la Cronología
- **Contenido Teórico:**
  - Línea temporal recta (orden cronológico continuo).
  - Salto al pasado: *Flashback* (analepsis elemental).
  - Salto al futuro: *Flashforward* (prolepsis elemental).
  - Elipsis temporal: la omisión deliberada de periodos vacíos de acción.
- **Dinámica Interactiva:**
  - Línea de tiempo interactiva donde se ordenan acontecimientos cronológicos vs. momentos de relato.

#### Módulo 05 · El Conflicto y el Ciclo Quinario de Todorov
- **Contenido Teórico:**
  - El conflicto como motor del relato (personaje vs. sí mismo, vs. otro, vs. naturaleza/sociedad).
  - Superación de los 3 actos mediante las 5 fases de Tzvetan Todorov:
    1. *Equilibrio Inicial*
    2. *Fuerza Perturbadora (Incidente Incitador)*
    3. *Desequilibrio Dinámico (Escalada de Obstáculos)*
    4. *Acción Transformadora (Clímax)*
    5. *Nuevo Equilibrio (Desenlace cualitativamente transformado)*
- **Dinámica Interactiva:**
  - **Curva de Tensión Interactiva:** Gráfico interactivo con nodos clicables que despliegan la justificación estructural de cada etapa.
- **Activo Visual:**
  - Infografía dedicada: `ciclo_quinario_todorov.png`.

---

### 3.2 Ruta II · Nivel Avanzado (BGU / Bachillerato / Teoría Narratológica)

#### Módulo 06 · Voz, Diégesis y Niveles Narrativos (Gérard Genette)
- **Contenido Teórico:**
  - Superación de la dicotomía de personas gramaticales: toda narración presupone una voz enunciativa.
  - Relación con el universo diegético:
    - *Narrador Heterodiégético:* Ausente de la diégesis (*Cien años de soledad*).
    - *Narrador Homodiégético:* Presente en la diégesis como testigo o secundario (Nick Carraway en *El gran Gatsby*).
    - *Narrador Autodiégético:* Protagonista que enuncia su propia vida (*Lazarillo de Tormes*).
  - Tiempo de la enunciación: ulterior (pasado), simultánea (presente continuo), anterior (profética) e intercalada (epistolar / diario).
  - Niveles narrativos: extradiegético, intradiegético y metadiegético (cajas chinas / relatos enmarcados). La transgresión de niveles: **metalepsis**.
- **Dinámica Interactiva:**
  - Selector interactivo de planos y niveles diégéticos.
- **Activo Visual:**
  - Diagrama de niveles concéntricos y metalepsis.

#### Módulo 07 · La Lente Perceptual: Voz frente a Focalización (Genette vs. Bal)
- **Contenido Teórico:**
  - Deslinde epistemológico: **¿Quién habla?** (Voz) frente a **¿Quién percibe / siente?** (Focalización).
  - **Focalización Cero (Omnisciente):** El narrador sabe más que el personaje ($N > P$). Ejemplo: *La Regenta* de Clarín.
  - **Focalización Interna:** El narrador sabe y percibe estrictamente lo mismo que el personaje ($N = P$):
    - *Fija:* Una sola conciencia (Meursault en *El extranjero* de Camus).
    - *Variable:* Desplazamiento alternado de perspectivas (*Madame Bovary* de Flaubert).
    - *Múltiple:* Un mismo acontecimiento tamizado por diversas conciencias (*El sonido y la furia* de Faulkner / *Rashomon*).
  - **Focalización Externa:** El narrador sabe menos que los personajes ($N < P$), actuando como cámara ocular neutral sin acceso a la mente (*La celosía* de Robbe-Grillet).
- **Dinámica Interactiva:**
  - **Simulador de Lentes de Focalización:** Inspección de una misma escena a través de óptica cero, interna y externa.
- **Activo Visual:**
  - Infografía dedicada: `focalizaciones_lente.png`.

#### Módulo 08 · La Teoría del Narrador Inconfiable (*Unreliable Narrator*)
- **Contenido Teórico:**
  - La desambiguación de Greta Olson (2003):
    - *Narrador Falible:* Error involuntario producto de ingenuidad infantil, inmadurez o trauma cognitivo (*Huckleberry Finn* de Mark Twain).
    - *Narrador Indigno de Confianza (*Untrustworthy*):* Falsedad, manipulación premeditada, autoexculpación o dolo contra la audiencia (*La familia de Pascual Duarte* de Camilo José Cela; *Lolita* de Nabokov).
  - Los 3 ejes de James Phelan:
    1. *Eje de los hechos:* Mentira (*misreporting*) vs. Ocultamiento (*underreporting*, Agatha Christie en *El asesinato de Roger Ackroyd*).
    2. *Eje del conocimiento:* Error de lectura (*misreading*) vs. Limitación ingenua (*underreading*).
    3. *Eje de los valores:* Perversión ética (*misregarding*) vs. Superficialidad axiológica (*underregarding*).
  - Inconfiabilidad distanciadora vs. inconfiabilidad de apego (*bonding unreliability*).
- **Dinámica Interactiva:**
  - Matriz de diagnóstico de inconfiabilidad: determinar en qué eje desvía la verdad el narrador.
- **Activo Visual:**
  - Infografía dedicada: `narrador_inconfiable_matriz.png`.

#### Módulo 09 · Construcción del Personaje & Matriz Actancial de Greimas
- **Contenido Teórico:**
  - Tipología de E. M. Forster: Personajes planos (*flat*) vs. Redondos (*round*); Estáticos vs. Dinámicos.
  - El **Modelo Actancial de Algirdas Julien Greimas (1966)**:
    - Eje del Deseo: **Sujeto $\leftrightarrow$ Objeto**.
    - Eje de la Comunicación: **Destinador $\rightarrow$ Destinatario**.
    - Eje del Conflicto / Poder: **Ayudante $\leftrightarrow$ Oponente**.
  - Las encrucijadas de Claude Bremond (*Logique du récit*, 1973): Virtualidad $\rightarrow$ Actualización (o no) $\rightarrow$ Éxito o Fracaso.
- **Dinámica Interactiva:**
  - **Tablero Actancial Interactivo:** Arrastrar y colocar los 6 actantes en un esquema vectorial sobre relatos clásicos y contemporáneos.
- **Activo Visual:**
  - Infografía dedicada: `modelo_actancial_greimas.png`.

#### Módulo 10 · El Tiempo del Relato: Fábula vs. Sjuzet, Anisocronías y Frecuencia
- **Contenido Teórico:**
  - Distinción formalista rusa: **Fábula** (cronología causal objetiva) vs. **Sjuzet** (artificio discursivo y disposición textual). Estudio de caso: *Crónica de una muerte anunciada* de Gabriel García Márquez.
  - Parámetros de las anacronías:
    - *Alcance:* Distancia temporal entre presente del relato y suceso evocado.
    - *Amplitud:* Duración temporal del salto.
    - *Analepsis externa vs. interna (completiva y repetitiva).*
    - *Acronía:* Disolución temporal laberíntica (*El jardín de senderos que se bifurcan* de Jorge Luis Borges).
  - Modulación de velocidades (Anisocronías de Genette):
    - *Pausa:* Relato > 0, Historia = 0 (descripción estática balzaciana).
    - *Escena:* Relato = Historia (diálogo dramatizado).
    - *Resumen / Sumario:* Relato < Historia (años condensados en líneas, *Orlando* de Virginia Woolf).
    - *Elipsis:* Relato = 0, Historia > 0 (silenciamiento deliberado, *Pedro Páramo* de Juan Rulfo).
  - Frecuencia narrativa: Relato singulativo, singulativo múltiple, **iterativo** (contar 1 vez lo que pasaba muchas) y **repetitivo** (contar muchas veces lo que pasó 1 sola vez).
- **Dinámica Interactiva:**
  - El Velocímetro Narrativo: inspección gráfica de la aceleración y frenado del tiempo discursivo.
- **Activo Visual:**
  - Infografía dedicada: `velocidades_tiempo_genette.png`.

#### Módulo 11 · Cronotopo, Representación de la Conciencia y Narratología Antinatural
- **Contenido Teórico:**
  - El **Cronotopo de Mijaíl Bajtín**: La imbricación indisoluble de espacio y tiempo que funda géneros literarios (cronotopo del camino, del castillo, del umbral).
  - Los 3 modos de representación de la conciencia según **Dorrit Cohn** (*Transparent Minds*, 1978):
    1. *Psycho-narration:* El narrador explica en 3.ª persona la psique del personaje con su propio léxico.
    2. *Quoted monologue:* Monólogo interior directo entrecomillado.
    3. *Narrated monologue (Estilo indirecto libre):* Fusión de la voz del narrador y los pensamientos del personaje en pretérito y 3.ª persona sin marcas de subordinación verbal.
  - **Narratología Antinatural (Jan Alber, Brian Richardson):**
    - Desafío a la física y la cognición mimética del mundo real:
      - Temporalidades paradójicas y bucles imposibles.
      - Espacios no euclidianos y mutaciones topográficas.
      - Mentes imposibles y narradores posmórtem (las voces de ultratumba en *Pedro Páramo*).
      - Voces desestabilizadoras (segunda persona "tú" como en *Aura* de Carlos Fuentes).
  - **Experiencialidad (*Experientiality*) de Monika Fludernik:** La narratividad como proyección cognitiva encarnada y *Storyworlds* de David Herman.
- **Dinámica Interactiva:**
  - Detector de técnicas de conciencia y análisis de la voz espectral de *Pedro Páramo*.
- **Activo Visual:**
  - Infografía dedicada: `cronotopo_espacio_tiempo.png`.
  - Ilustración de Comala: `escena_pedro_paramo.png`.

---

### 3.3 Ruta III · Gran Reto Narratológico & Calificación

#### Módulo 12 · Laboratorio de Análisis Textual & Gran Reto
- **Contenido:**
  - Selección de extractos canónicos reales (García Márquez, Rulfo, Borges, Camus, Clarín, Poe, Woolf).
  - 10 preguntas avanzadas multirrespuesta con justificación filológica y narratológica en cada opción.
  - Puntuación automática sobre 10 puntos.
  - Registro opcional mediante Google Apps Script Web App en Google Sheets.
  - Modo práctica libre (sin requerir registro de datos).

---

## 4. Glosario Didáctico Interactivo (Modal Micro-aprendizaje)

Se integrará un diccionario estructurado `GLOSSARY_TERMS` con más de 20 conceptos analizados:

| Identificador | Término | Categoría | Clave Científica / Didáctica |
|---|---|---|---|
| `diegesis` | Diégesis | Ontología Narrativa | El universo espaciotemporal ficcional donde ocurren los hechos. |
| `heterodiegetico` | Narrador Heterodiégético | Voz & Persona | Enunciación externa; la voz no existe materialmente en la historia. |
| `homodiegetico` | Narrador Homodiégético | Voz & Persona | La voz participa en la diégesis como testigo o actor secundario. |
| `autodiegetico` | Narrador Autodiégético | Voz & Persona | Modalidad intensificada donde el narrador relata su propio protagonismo. |
| `focalizacion-cero` | Focalización Cero | Regulación Perceptual | Saber del narrador mayor al del personaje ($N > P$); régimen omnisciente. |
| `focalizacion-interna` | Focalización Interna | Regulación Perceptual | Saber del narrador igual al del personaje ($N = P$); fija, variable o múltiple. |
| `focalizacion-externa` | Focalización Externa | Regulación Perceptual | Saber del narrador menor al del personaje ($N < P$); cámara objetiva neutral. |
| `narrador-falible` | Narrador Falible | Teoría de la Inconfiabilidad | Desvío involuntario por inocencia infantil, inmadurez o trauma. |
| `narrador-indigno` | Narrador Indigno de Confianza | Teoría de la Inconfiabilidad | Falsedad deliberada, manipulación premeditada o cálculo autoexculpatorio. |
| `modelo-actancial` | Modelo Actancial | Semiótica de la Acción | Sistema de 6 actantes en ejes de Deseo, Comunicación y Combate. |
| `ciclo-quinario` | Ciclo Quinario de Todorov | Estructura de la Trama | Progresión en 5 estados: equilibrio, fuerza perturbadora, desequilibrio, acción, nuevo equilibrio. |
| `fabula-sjuzet` | Fábula vs. Sjuzet | Formalismo Ruso | Cronología causal de los hechos vs. disposición estética en el texto. |
| `anacronia` | Anacronía | Temporalidad del Relato | Discordancia entre el orden de la historia y el orden discursivo. |
| `analepsis` | Analepsis (Flashback) | Temporalidad del Relato | Salto retrospectivo caracterizado por su alcance y amplitud. |
| `prolepsis` | Prolepsis (Flashforward) | Temporalidad del Relato | Anticipación discursiva de acontecimientos futuros. |
| `acronia` | Acronía | Temporalidad del Relato | Ruptura absoluta de la concordancia temporal objetiva. |
| `anisocronia` | Anisocronía / Ritmo | Temporalidad del Relato | Variación entre tiempo de la historia y extensión del texto (pausa, escena, resumen, elipsis). |
| `relato-iterativo` | Relato Iterativo | Frecuencia Narrativa | Enunciar una sola vez lo que aconteció reiteradamente en la historia. |
| `cronotopo` | Cronotopo | Poética Histórica | Indisolubilidad de las coordenadas espaciales y temporales en la novela. |
| `estilo-indirecto-libre` | Estilo Indirecto Libre | Representación de la Conciencia | Fusión de voz narrativa y pensamiento del personaje en pretérito y 3.ª persona. |
| `narratologia-antinatural` | Narratología Antinatural | Modelos Posclásicos | Desafío a la física y a la cognición mimética (voces posmórtem, bucles). |
| `metalepsis` | Metalepsis | Retórica de la Ficción | Transgresión paradójica de la frontera entre distintos niveles diegéticos. |

---

## 5. Plan de Verificación y Criterios de Aceptación

1. **Pruebas de Navegación y Sincronización:**
   - Verificación de la conmutación de rutas (Fundamental, Avanzada, Reto).
   - Verificación de sincronización bidireccional con el menú lateral de `course-shell`.
2. **Pruebas de Componentes Interactivos:**
   - Apertura y cierre del modal de glosario por clic en botones `ℹ`, botón de cierre `✕`, fondo y tecla `Escape`.
   - Funcionamiento de los simuladores (focalizaciones, tablero actancial, curva de tensión, cronología).
   - Evaluación final: cálculo de calificación y envío asíncrono a Google Sheets.
3. **Pruebas de Rendimiento y Accesibilidad:**
   - Atributos ARIA en modales, botones de pestañas y regiones interactivas.
   - Rendimiento responsive en resoluciones de 360px a 1440px.
   - Compilación exitosa con `npm run build`.
