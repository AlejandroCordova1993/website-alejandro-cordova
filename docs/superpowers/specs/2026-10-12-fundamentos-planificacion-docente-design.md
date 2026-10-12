# Especificación de Diseño: Fundamentos para la Planificación Docente
## Laboratorio de Arquitectura Curricular y Diseño Didáctico (Nivel Universitario)

**Fecha:** 2026-10-12  
**Proyecto:** Presentación Didáctica Interactiva «Fundamentos para la Planificación Docente: Análisis Estructural del Currículo Nacional de Lengua y Literatura»  
**Ubicación Principal:** `C:\Users\User\Desktop\Proyectos\Presentación didáctica`  
**Ubicación Portafolio:** `E:\Página Alejandro\recursos\planificacion-docente`  
**Autor / Catedrático:** Msc. Alejandro Córdova  
**Destinatarios:** Estudiantes de Pedagogía y Educación (Formación Docente Universitaria)  
**Estado:** Especificación de Diseño Aprobada por el Usuario  

---

## 1. Contexto, Diagnóstico y Esencia Pedagógica

### 1.1 Diagnóstico del Recurso Previo
El recurso interactivo preexistente en `Presentación didáctica` presentaba inconsistencias técnicas y estéticas frente al *Manual de Marca 2.0 (Human / System)* y al perfil de un curso universitario:
1. **Deuda Técnica Crítica en CSS:** Un archivo `style.css` de 4.645 líneas repleto de reglas duplicadas, clases huérfanas, sobreescrituras en cascada y colores fuera de norma (ocres `#945B0E`, verdes `#1E6B38`, naranjas `#FEF7EC`, corales `#F4C9B1`).
2. **Violación de Principios de Marca:** Uso de esquinas redondeadas (`border-radius: 4px` y `8px`) cuando la norma estricta del sistema es radio cero (`--radius: 0`), sombras difusas flotantes y colores de texto que no alcanzaban el contraste WCAG AA.
3. **Inconsistencia Iconográfica:** Uso disperso de `Material Icons` sin encuadre técnico ni doble codificación semántica.
4. **Desconexión con el Nivel Universitario:** El tono visual vacilaba entre una presentación escolarizada y un borrador con estilos `inline` desordenados.

### 1.2 La Esencia del Curso: *Arquitectura e Ingeniería Curricular*
A diferencia de recursos para educación media (como `diglosia`), este material está destinado a **futuros docentes universitarios**. La planificación no se aborda aquí como un trámite administrativo o un juego de opciones simples, sino como **el plano del arquitecto educativo**:
* **HUMAN (La vocación pedagógica):** El arte y la técnica de mediar el aprendizaje; la reflexión crítica sobre el sentido de planificar; el respeto a la autoría del docente y la interacción viva en el aula.
* **SYSTEM (El rigor técnico):** La articulación entre los 3 niveles de concreción (Macro, Meso, Micro); la anatomía de una Destreza con Criterio de Desempeño (DCD); el sistema formal de codificación ministerial (`LL.4.1.3`, `OG.LL.1`, `I.LL.4.1.1`); la **alineación constructiva** de John Biggs (Objetivo ➔ Destreza ➔ Indicador de Evaluación); y la ingeniería de secuencias didácticas (Ciclo ERCA de Kolb y Modelo ACC).

---

## 2. Los 7 Ejes Visuales del Rediseño

### 2.1 Paleta de Colores (Regla 70 / 20 / 10 de Marca)
* **Fondo Dominante (~70%):** Papel Cálido (`#F3F1EA`). Otorga la textura visual de papel editorial de imprenta y elimina la fatiga de pantallas blancas de proyector.
* **Superficies de Trabajo:** Papel Puro (`#FFFFFF`) y Papel Tarjeta (`#FAF9F5`) para delimitar las áreas de lectura y las fichas de destrezas.
* **Estructura y Autoridad (~20%):** Azul Profundo (`#071B33`) para la cabecera superior (*topbar*), los controles de navegación fija, los bloques de pausa reflexiva y las tarjetas destacadas `.card-deep`.
* **Acentos Secundarios e Institucionales:** Azul Institucional (`#123C69`) para subtítulos técnicos, bordes de acento superior (`border-top: 2px solid #123C69`) y estados de coherencia didáctica.
* **Texto y Contraste (WCAG 2.1 AA Verificado):** 
  - Texto principal: Grafito / Carbón (`#101820`), contraste 15.83:1 sobre Papel Cálido.
  - Texto secundario / apoyo: Gris Mineral (`#5C636C`), contraste 5.38:1 sobre Papel Cálido.
  - Texto secundario sobre Azul Profundo: Gris Atenuado (`#A3ABB6`), contraste 6.87:1.
* **Acento Técnico (~3%):** Rojo Señal (`#D83A32`) exclusivo para micro-puntos técnicos de 6px en etiquetas (`.mono-label`), remates de líneas vectoriales y llamadas de atención analítica en errores de alineación curricular. **Prohibido como fondo de tarjetas o botones**.
* **Superficie de Revisión Didáctica:** Papel Profundo (`#E8E5DC`) con borde `#C3C0B5` para el análisis de casos de error en la planificación (ej. slide de error didáctico), evitando alarmismos cromáticos.

### 2.2 Sistema Tipográfico Semántico
1. **Public Sans (Tipografía Estructural y Funcional):**
   - Pesos: `400` (cuerpo), `500` (interfaz/botones), `600` / `700` (títulos y encabezados).
   - Uso: Títulos de diapositivas (H1, H2), botones de interacción, navegación, diagramas y tablas curriculares. Aporta el rigor neutro y limpio de un plano técnico.
2. **Source Serif 4 (La Voz Pedagógica Humanista):**
   - Pesos: `400`, `400 Italic`, `600`.
   - Uso: Preguntas iniciales de reflexión docente (Fase 1), citas pedagógicas (López Gómez, Kolb, Guía de Implementación), casos de aula y dilemas éticos de la enseñanza.
3. **DM Mono (Precisión y Arquitectura de Datos Curriculares):**
   - Pesos: `400`, `500`.
   - Uso: Códigos oficiales del Ministerio (`LL.4.1.3`, `OG.LL.1`, `CE.LL.4.1`, `I.LL.4.1.1`), microetiquetas técnicas (`● 01 / NIVEL MACRO`), contadores de diapositivas tabulares (`tabular-nums`: `1 / 14`), tiempos estimados de módulos pedagógicos.
   - Piso tipográfico: Ningún texto por debajo de 12px / 0.75rem.

### 2.3 Espacio en Blanco y Ritmo Modular
* Ritmo vertical modular basado en múltiplos de 8px (16px, 24px, 32px, 48px).
* Medida de lectura controlada (`max-width: 68ch` o `70ch`) en todos los bloques explicativos para garantizar legibilidad en auditorios universitarios.
* Separación clara entre el marco conceptual (teoría) y el documento oficial analizado (evidencia empírica curricular).

### 2.4 Imágenes y Recursos Visuales (Preservación Absoluta de las 22 Imágenes)
**Requisito No Negociable:** Se preservan íntegramente las 22 imágenes oficiales en `Imágenes para integrar/` y su funcionamiento interactivo:
1. `1. Nuevo Currículo priorizado.png`
2. `2. Curriculo priorizado pandemia.png`
3. `3. Currículo 2016.png`
4. `4. Guía implementación curricular.png`
5. `4. Niveles de concreción curricular.png`
6. `4. Objetivos Generales LL 1.png`
7. `5. Objetivos Generales LL 2.png`
8. `7. Objetivos subnivel.png`
9. `8. Destreza con criterio de desempeño.png`
10. `9. Bloques curriculares.png`
11. `10. Desagregación de una destreza.png`
12. `11. Destrezas con competencias incluidas.png`
13. `Captura de pantalla 2025-10-19 201857.png`
14. `Captura de pantalla 2025-10-19 201921.png`
15. `Competencias.png`
16. `Criterios de evaluacion con DCD.png`
17. `Criterios de evaluación e indicadores de evaluación.png`
18. `Ejemplo de error.png`
19. `Elementos PUD.png`
20. `Imagen presentación.png`
21. `Inserciones curriculares.png`
22. `Técnicas e instrumentos de evaluación.png`

**Tratamiento Visual Universitario:**
* Cada imagen se enmarca con un borde técnico de 1px en Gris de Línea (`#D7D9D6`), con `border-radius: 0` (eliminando esquinas redondeadas y sombras difusas pesadas).
* Cabecera técnica con microetiqueta en `DM Mono` (ej. `● FIG. 03 · CURRÍCULO NACIONAL OBLIGATORIO`).
* Pie de imagen sobrio con indicación interactiva: `[ Clic para inspeccionar en pantalla completa ]`.
* Modal de inspección (`#imageModal`) con fondo Azul Profundo translúcido (`rgba(7, 27, 51, 0.88)`), marco técnico blanco de 1px y atajo de teclado accesible (`Escape`).

### 2.5 Composición y Retícula
* Retícula desktop de 12 columnas (o división 60/40 y 50/50 simétrica) con gap de 24px y ancho máximo de 1280px.
* Sustitución de cajas multicolores por **filas editoriales y tarjetas técnicas**:
  - `.card`: Fondo Papel Puro, borde 1px en `#D7D9D6`, radio 0.
  - `.card-quiet`: Fondo Papel Tarjeta, borde 1px, para bloques de contexto.
  - `.card-deep`: Fondo Azul Profundo, borde translúcido, para ideas nucleares.
  - Borde superior de acento de 2px para clasificar niveles y estados pedagógicos.
* Representación analítica de la **Pirámide de Concreción** (Macro ➔ Meso ➔ Micro) y del **Ciclo ERCA**: diagramas limpios, geométricos y vectoriales, construidos con la paleta oficial y sin colores estridentes no canónicos.

### 2.6 Estilo Visual General (*Human / System*)
* Estética de **Mesa de Trabajo Pedagógica**: rigor documental suizo, elegancia tipográfica, precisión milimétrica y ausencia de adornos vacíos.
* Elimina completamente gradientes, sombras pesadas y animaciones hiperactivas. Las transiciones son instantáneas o sutiles (`0.15s ease` / `0.25s ease`).

### 2.7 Consistencia Visual y Arquitectura de Código
* **Refactorización Completa de `style.css`:** Reducción del archivo monolítico de 4.645 líneas a un CSS limpio, modular y documentado (~550-750 líneas), que importa los tokens y componentes de `sistema_diseno_cordova.css` y define los estilos específicos de las diapositivas.
* **Limpieza Semántica de `index.html`:** Eliminación de estilos `inline` desordenados (`style="..."`), sustitución de `Material Icons` sueltos por iconos SVG/vectoriales estructurados en `.icon-chip` técnicos, y normalización de etiquetas de accesibilidad (`aria-current`, `aria-label`, `aria-hidden`).
* **Sincronización Total:** Paridad idéntica y automatizada entre `C:\Users\User\Desktop\Proyectos\Presentación didáctica` y `E:\Página Alejandro\recursos\planificacion-docente`.

---

## 3. Plan de Verificación y Criterios de Aceptación

1. **Integridad de Contenido e Imágenes:**
   - [ ] Las 14 diapositivas completas mantienen su contenido didáctico, jerarquía y textos originales.
   - [ ] Las 22 imágenes del currículo se visualizan nítidamente y abren el modal de zoom interactivo al hacer clic.
   - [ ] Los enlaces a Google Drive y códigos QR funcionan correctamente.
2. **Validación Estética del Sistema de Diseño:**
   - [ ] Fondo `#F3F1EA` aplicado en toda la presentación.
   - [ ] Tipografías Google Fonts (Public Sans, Source Serif 4, DM Mono) cargadas e implementadas según su función semántica.
   - [ ] Cero bordes redondeados (`border-radius: 0` universal).
   - [ ] Cero sombras pesadas difusas; profundidad lograda mediante líneas de 1px (`#D7D9D6`) y capas de papel.
   - [ ] Paleta 70/20/10 respetada estrictamente, sin ocres, verdes o naranjas no normalizados.
3. **Navegación e Interacción:**
   - [ ] Navegación por teclado (Flechas ← →, Espacio) y botones de pantalla plenamente operativos.
   - [ ] Barra de progreso en vivo sincronizada con la diapositiva activa.
   - [ ] Cierre del modal de imagen con tecla `Escape` y clic fuera de la imagen.
4. **Sincronización de Entornos:**
   - [ ] Código verificado y probado localmente.
   - [ ] Réplica exacta desplegada en `E:\Página Alejandro\recursos\planificacion-docente`.
