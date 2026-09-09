# Plan de Implementación: El Arte de Narrar — Teoría Narratológica y Modelos Posclásicos

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar integralmente el recurso *El Arte de Narrar* en una plataforma de vanguardia didáctica con progresión por niveles (Fundamental y Avanzado), enriquecida con los modelos narratológicos clásicos y posclásicos, un glosario modal interactivo, nuevas infografías e ilustraciones de alta calidad, y sincronización con el sistema `course-shell`.

**Architecture:** Se desacopla el monolito `index.html` en tres capas limpias (`index.html`, `styles.css`, `app.js`), estructurado en 3 rutas conmutables por pestañas (`tab-content`): Nivel Fundamental (Módulos 01 a 05), Nivel Avanzado (Módulos 06 a 11) y Gran Reto Narratológico (Módulo 12). Se incorpora un glosario didáctico modal activable por micro-botones `ℹ` con cierre multicanal (botón, backdrop, Esc) y sincronización bidireccional con `course-shell`.

**Tech Stack:** HTML5 semántico, CSS3 moderno (Custom Properties, CSS Grid, Flexbox, backdrop-filter, animaciones cubic-bezier), JavaScript ES6+ modular, Google Apps Script Web App API para persistencia en Google Sheets, y herramientas de generación visual de alta definición.

**Spec:** [`docs/superpowers/specs/2026-09-09-el-arte-de-narrar-design.md`](file:///e:/P%C3%A1gina%20Alejandro/docs/superpowers/specs/2026-09-09-el-arte-de-narrar-design.md)

## Global Constraints
- Mantener la autoría y créditos institucionales: **Msc. Alejandro Córdova**.
- Paridad espejo absoluta entre `recursos/narracion/` y `public/recursos/narracion/`.
- Soporte responsive fluido desde 360px (móviles) hasta 1440px+ (pantallas de escritorio).
- Integración estricta con `course-shell` mediante eventos `course-shell-switch-tab` y `tab-changed`.
- Cero dependencias externas pesadas en runtime: JavaScript vanilla nativo sin frameworks pesados.

---

### Task 1: Arquitectura de Estilos y Diseño Editorial (`styles.css`)

**Files:**
- Create: `recursos/narracion/styles.css`
- Modify: `recursos/narracion/index.html:1-50`

**Interfaces:**
- Produces: Clases CSS para el selector de rutas `.learning-route-switcher`, botones `.btn-route`, pestañas `.nav-tab`, secciones `.tab-content`, modales `.term-modal-overlay`, tarjetas `.type-card`, interactivos `.sim-stage`, `.actantial-board`, `.tension-curve` y lightbox `.lightbox`.

- [ ] **Step 1: Crear archivo `recursos/narracion/styles.css`**
Configurar las variables CSS (`:root`), fuentes tipográficas (`Public Sans`, `Source Serif 4`, `DM Mono`), reset universal, layout principal, selector de rutas, tabs y tarjetas de contenido.

- [ ] **Step 2: Agregar estilos para el modal del glosario interactivo y lightbox de imágenes**
Implementar animaciones de entrada `termModalIn`, estilo de tarjeta de dos columnas, badges de categoría en mayúsculas, y visor ampliado de imágenes.

- [ ] **Step 3: Vincular `styles.css` en `recursos/narracion/index.html` y remover el bloque `<style>` inline**
Sustituir el bloque de estilos incrustado por `<link rel="stylesheet" href="styles.css?v=1.0.0">`.

- [ ] **Step 4: Verificar carga de estilos y maquetación responsive**
Verificar en navegador que el layout responde adecuadamente en escritorio y móvil sin desbordamientos.

- [ ] **Step 5: Commit de Task 1**
```bash
git add recursos/narracion/styles.css recursos/narracion/index.html
git commit -m "style(narracion): desacoplar y crear hoja de estilos modular styles.css"
```

---

### Task 2: Banco de Datos y Lógica del Glosario Didáctico Modal (`app.js`)

**Files:**
- Create: `recursos/narracion/app.js`
- Modify: `recursos/narracion/index.html`

**Interfaces:**
- Produces: `const GLOSSARY_TERMS`, `function initTermGlossary()`, `function openTermModal(termKey)`, `function closeTermModal()`.

- [ ] **Step 1: Escribir el diccionario `GLOSSARY_TERMS` con los 22 términos narratológicos**
Incluir definiciones científicas, ejemplos analizados y claves de lectura crítica para: *diegesis, heterodiegetico, homodiegetico, autodiegetico, focalizacion-cero, focalizacion-interna, focalizacion-externa, narrador-falible, narrador-indigno, modelo-actancial, ciclo-quinario, fabula-sjuzet, anacronia, analepsis, prolepsis, acronia, anisocronia, relato-iterativo, cronotopo, estilo-indirecto-libre, narratologia-antinatural, metalepsis*.

- [ ] **Step 2: Implementar funciones de control del modal**
Delegación de eventos en `document` para `.term-lookup-btn[data-term]`, cierre con botón `✕`, botón `¡Entendido!`, clic en fondo desenfocado y tecla `Escape`.

- [ ] **Step 3: Insertar el marcado del modal `#termModalOverlay` en `index.html`**
Colocar la estructura accesible `role="dialog"` con encabezado azul marino, cuerpo con ejemplo y clave científica, y pie de confirmación.

- [ ] **Step 4: Verificar interactividad del glosario**
Comprobar que al pulsar cualquier botón de término se despliega el modal con los datos exactos y se cierra limpiamente.

- [ ] **Step 5: Commit de Task 2**
```bash
git add recursos/narracion/app.js recursos/narracion/index.html
git commit -m "feat(narracion): implementar diccionario narratologico y modal didactico interactivo"
```

---

### Task 3: Generación e Integración de Infografías e Ilustraciones Literarias

**Files:**
- Create: `recursos/narracion/imagenes/ciclo_quinario_todorov.png`
- Create: `recursos/narracion/imagenes/focalizaciones_lente.png`
- Create: `recursos/narracion/imagenes/modelo_actancial_greimas.png`
- Create: `recursos/narracion/imagenes/velocidades_tiempo_genette.png`
- Create: `recursos/narracion/imagenes/narrador_inconfiable_matriz.png`
- Create: `recursos/narracion/imagenes/cronotopo_espacio_tiempo.png`
- Create: `recursos/narracion/imagenes/escena_pedro_paramo.png`
- Create: `recursos/narracion/imagenes/escena_cien_anos_soledad.png`
- Create: `recursos/narracion/imagenes/escena_el_extranjero.png`
- Create: `recursos/narracion/imagenes/escena_jardin_bifurcan.png`

**Interfaces:**
- Produces: Banco de imágenes PNG de alta resolución en estética híbrida (infográfica editorial + ilustración literaria).

- [ ] **Step 1: Generar las 5 infografías analíticas principales**
  - `ciclo_quinario_todorov.png` (esquema quinario de equilibrio de Todorov).
  - `focalizaciones_lente.png` (las 3 lentes perceptuales de Genette).
  - `modelo_actancial_greimas.png` (los 6 actantes y los 3 ejes de Greimas).
  - `velocidades_tiempo_genette.png` (el velocímetro de anisocronías: pausa, escena, resumen, elipsis).
  - `narrador_inconfiable_matriz.png` (desambiguación de Greta Olson y Phelan).

- [ ] **Step 2: Generar las 4 ilustraciones de ambientación literaria canónica**
  - `cronotopo_espacio_tiempo.png` & `escena_pedro_paramo.png` (Comala y el tiempo espectral de Rulfo).
  - `escena_cien_anos_soledad.png` (Macondo y la tarde remota del hielo de García Márquez).
  - `escena_el_extranjero.png` (La luz cegadora de la playa de Meursault en Camus).
  - `escena_jardin_bifurcan.png` (El laberinto temporal infinito de Borges).

- [ ] **Step 3: Optimizar y verificar dimensiones y legibilidad de las imágenes en `imagenes/`**
Comprobar visualmente que los textos gráficos y elementos conceptuales son claros, elegantes y armónicos con la paleta de la web.

- [ ] **Step 4: Commit de Task 3**
```bash
git add recursos/narracion/imagenes/
git commit -m "assets(narracion): generar infografias analiticas e ilustraciones literarias"
```

---

### Task 4: Ruta I · Nivel Fundamental en `index.html` y `app.js` (Módulos 01 a 05)

**Files:**
- Modify: `recursos/narracion/index.html`
- Modify: `recursos/narracion/app.js`

**Interfaces:**
- Produces: Módulos 01 a 05 con `data-group="Nivel Fundamental (Elementos del Relato)"`:
  - Módulo 01: `#tab-voces` (Interruptor de voces).
  - Módulo 02: `#tab-personajes` (Clasificación de roles y arquetipos).
  - Módulo 03: `#tab-espacio` (Espacio físico vs. psicológico y atmósfera).
  - Módulo 04: `#tab-tiempo-lineal` (Línea cronológica, anacronías elementales).
  - Módulo 05: `#tab-trama-quinaria` (Ciclo quinario de Todorov y Curva de Tensión).

- [ ] **Step 1: Reestructurar el marcado de los Módulos 01 a 05 con botones de glosario y nuevas imágenes**
Incluir consignas rigurosas, botones `.term-lookup-btn` y la infografía del ciclo quinario de Todorov.

- [ ] **Step 2: Implementar la interactividad del Interruptor de Voces y la Curva de Tensión en `app.js`**
Funciones interactivas para alternar entre primera persona y tercera persona, y nodos interactivos en la curva dramática con explicación contextual.

- [ ] **Step 3: Probar la navegación y actividades de la Ruta I**
Verificar el flujo de avance paso a paso del Módulo 01 al 05.

- [ ] **Step 4: Commit de Task 4**
```bash
git add recursos/narracion/index.html recursos/narracion/app.js
git commit -m "feat(narracion): implementar modulos 01 a 05 de la Ruta Fundamental"
```

---

### Task 5: Ruta II · Nivel Avanzado — Parte A: Voz, Focalización e Inconfiabilidad (Módulos 06 a 08)

**Files:**
- Modify: `recursos/narracion/index.html`
- Modify: `recursos/narracion/app.js`

**Interfaces:**
- Produces: Módulos 06, 07 y 08 con `data-group="Nivel Avanzado (Teoría Narratológica & Modelos Posclásicos)"`:
  - Módulo 06: `#tab-diegesis` (Hetero, Homo y Autodiégesis; niveles y metalepsis).
  - Módulo 07: `#tab-focalizacion` (Simulador de Lentes de Genette: Cero, Interna y Externa).
  - Módulo 08: `#tab-inconfiable` (Matriz de Greta Olson y Phelan).

- [ ] **Step 1: Desarrollar el Módulo 06 con la teoría genettiana de la diégesis**
Explicación de la instancia enunciativa, tiempos (ulterior, simultánea, anterior, intercalada) y transgresión metaléptica.

- [ ] **Step 2: Desarrollar el Módulo 07 con el Simulador de Lentes de Focalización**
Herramienta interactiva para alternar la lente de observación sobre una escena modelo ($N > P$, $N = P$, $N < P$) con la infografía `focalizaciones_lente.png`.

- [ ] **Step 3: Desarrollar el Módulo 08 con el Laboratorio del Narrador Inconfiable**
Análisis interactivo de fragmentos (*Lolita*, *Huckleberry Finn*, *Pascual Duarte*, Agatha Christie) para clasificar falibilidad cognitiva vs. falsedad calculada.

- [ ] **Step 4: Commit de Task 5**
```bash
git add recursos/narracion/index.html recursos/narracion/app.js
git commit -m "feat(narracion): implementar modulos 06, 07 y 08 de diégesis, focalizacion e inconfiabilidad"
```

---

### Task 6: Ruta II · Nivel Avanzado — Parte B: Actantes, Tiempo y Modelos Posclásicos (Módulos 09 a 11)

**Files:**
- Modify: `recursos/narracion/index.html`
- Modify: `recursos/narracion/app.js`

**Interfaces:**
- Produces: Módulos 09, 10 y 11 con `data-group="Nivel Avanzado (Teoría Narratológica & Modelos Posclásicos)"`:
  - Módulo 09: `#tab-actantes` (Matriz de Greimas y encrucijadas de Bremond).
  - Módulo 10: `#tab-tiempo-relato` (Fábula vs. Sjuzet, anisocronías de Genette y frecuencia).
  - Módulo 11: `#tab-fronteras-posclasicas` (Cronotopo de Bajtín, conciencia de Dorrit Cohn y narratología antinatural).

- [ ] **Step 1: Desarrollar el Módulo 09 con el Tablero Actancial Interactivo**
Infografía de Greimas, explicación de los 3 ejes y actividad de asignación actancial de relatos seleccionados.

- [ ] **Step 2: Desarrollar el Módulo 10 con el Velocímetro de Anisocronías y la distinción Fábula/Sjuzet**
Estudio de caso de *Crónica de una muerte anunciada*, anacronías con alcance y amplitud, acronía borgiana y velocidades (pausa, escena, resumen, elipsis).

- [ ] **Step 3: Desarrollar el Módulo 11 con Cronotopos, Conciencia y Narratología Antinatural**
Las 3 vías de Dorrit Cohn (*psycho-narration*, monólogo citado, estilo indirecto libre), el cronotopo de Bajtín y la narratología antinatural de Jan Alber con las voces espectrales de *Pedro Páramo*.

- [ ] **Step 4: Commit de Task 6**
```bash
git add recursos/narracion/index.html recursos/narracion/app.js
git commit -m "feat(narracion): implementar modulos 09, 10 y 11 de actantes, tiempo discursivo y posclasicos"
```

---

### Task 7: Ruta III · Gran Reto Narratológico y Persistencia en Google Sheets (Módulo 12)

**Files:**
- Modify: `recursos/narracion/index.html`
- Modify: `recursos/narracion/app.js`

**Interfaces:**
- Produces: Módulo 12 `#tab-reto-final` con `data-group="Evaluación & Laboratorio Libre"`:
  - Motor de cuestionario con 10 preguntas avanzadas multirrespuesta sobre textos canónicos reales.
  - Justificación formativa instantánea tras cada respuesta.
  - Registro opcional mediante Google Apps Script Web App en Google Sheets.
  - Modal de estudiante con identificación editable y persistencia en `localStorage`.

- [ ] **Step 1: Configurar el banco de 10 preguntas analíticas avanzadas**
Preguntas basadas en fragmentos reales de García Márquez, Rulfo, Borges, Camus, Flaubert, Woolf, Cela y Poe.

- [ ] **Step 2: Implementar el flujo de evaluación con retroalimentación explicada**
Mostrar explicación conceptual tanto en aciertos como en fallos, cálculo de nota sobre 10 y botón de reinicio.

- [ ] **Step 3: Conectar el envío de notas al Google Apps Script preexistente**
Mantener la URL `SHEETS_URL` configurada con manejo de estados (`enviando`, `éxito`, `error`) y soporte de práctica libre sin registro obligatorio.

- [ ] **Step 4: Commit de Task 7**
```bash
git add recursos/narracion/index.html recursos/narracion/app.js
git commit -m "feat(narracion): implementar modulo 12 Gran Reto Narratologico con persistencia"
```

---

### Task 8: Sincronización Bidireccional con `course-shell`, Paridad en `public/` y Pruebas E2E

**Files:**
- Modify: `recursos/narracion/app.js`
- Copy: `recursos/narracion/*` ➔ `public/recursos/narracion/*`

**Interfaces:**
- Produces: Sincronización completa entre el selector superior `.btn-route` y el menú lateral `courseSidebar` a través de `course-shell-switch-tab` y `tab-changed`.

- [ ] **Step 1: Implementar `switchTab(tabId, syncRoute)` y listener `course-shell-switch-tab` en `app.js`**
Garantizar que al hacer clic en cualquier sección del menú lateral, el selector superior cambie automáticamente al nivel correspondiente y muestre sus pestañas.

- [ ] **Step 2: Sincronizar todos los archivos con `public/recursos/narracion/`**
Copiar `index.html`, `styles.css`, `app.js` y el directorio `imagenes/` a `public/recursos/narracion/`.

- [ ] **Step 3: Ejecutar pruebas automatizadas en Playwright**
  - Navegar a `http://localhost:8088/recursos/narracion/index.html`.
  - Probar clic en un término de glosario y verificar que abre y cierra el modal.
  - Probar cambio entre Nivel Fundamental y Nivel Avanzado.
  - Probar que al hacer clic en el menú lateral en un módulo avanzado se conmuta la ruta superior.
  - Probar la interacción de un simulador y la visualización de las imágenes.

- [ ] **Step 4: Ejecutar `npm run build`**
Verificar compilación limpia de Vite sin advertencias ni errores.

- [ ] **Step 5: Commit final y despliegue a `origin/main`**
```bash
git add .
git commit -m "feat(narracion): culminar transformacion de El Arte de Narrar con teorias posclasicas y diseno editorial"
git push origin main
```
