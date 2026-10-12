# Plan de Implementación: Renovación Visual de «Fundamentos para la Planificación Docente»
## Laboratorio de Arquitectura Curricular y Diseño Didáctico (Nivel Universitario)

> **Criterios de Aceptación y Diseño:** [2026-10-12-fundamentos-planificacion-docente-design.md](file:///E:/P%C3%A1gina%20Alejandro/docs/superpowers/specs/2026-10-12-fundamentos-planificacion-docente-design.md)  
> **Sistema de Referencia:** [Manual de Marca v2.0 (Human / System)](file:///C:/Users/User/Desktop/Proyectos/manual_marca_sistema_diseno_alejandro_cordova.md) y [sistema_diseno_cordova.css](file:///C:/Users/User/Desktop/Proyectos/sistema_diseno_cordova.css)  
> **Ubicaciones:**  
> - Primaria: `C:\Users\User\Desktop\Proyectos\Presentación didáctica`  
> - Espejo Portafolio: `E:\Página Alejandro\recursos\planificacion-docente`  

---

## Resumen del Proyecto y Estrategia

Transformar la presentación web interactiva de **«Fundamentos para la Planificación Docente»** (14 diapositivas) para alinearla al nivel de formación pedagógica universitaria y a la identidad *Human / System*. 
El plan elimina un monolito de 4.645 líneas de CSS heredado, sustituyéndolo por una hoja de estilos estructurada de ~600-700 líneas fundamentada en los tokens oficiales de Alejandro Córdova. Se preservan estrictamente **las 22 imágenes curriculares originales**, optimizando su presentación como documentos técnicos de análisis con modal de inspección a pantalla completa.

---

## Estructura de Tareas de Implementación

### Tarea 1: Respaldo y Verificación de Integridad de Activos
- **Objetivo:** Asegurar una copia de seguridad exacta del estado actual y verificar la integridad de las 22 imágenes oficiales.
- **Archivos involucrados:**
  - `C:\Users\User\Desktop\Proyectos\Presentación didáctica\Imágenes para integrar\*`
  - `E:\Página Alejandro\recursos\planificacion-docente\Imágenes para integrar\*`
- **Pasos:**
  1. Comprobar la existencia y hash de las 22 imágenes curriculares en ambas carpetas.
  2. Generar un commit de punto de restauración en Git antes de cualquier modificación.
- **Verificación:** Script en PowerShell confirmando 22 archivos `.png` idénticos.

---

### Tarea 2: Reconstrucción de la Arquitectura de Estilos (`style.css`)
- **Objetivo:** Reemplazar el archivo monolítico de 4.645 líneas por un sistema CSS modular, limpio y estrictamente apegado a la identidad de marca universitaria.
- **Archivos involucrados:**
  - `C:\Users\User\Desktop\Proyectos\Presentación didáctica\style.css`
- **Componentes y Bloques a Desarrollar:**
  1. **Tokens y Variables de Marca (`:root`):**
     - `--paper-warm: #F3F1EA` (fondo principal ~70%).
     - `--paper-surface: #FAF9F5` y `--paper-pure: #FFFFFF` (superficies de lectura y tarjetas).
     - `--paper-deep: #E8E5DC` (zona de revisión de errores didácticos).
     - `--charcoal: #101820` (texto de alto contraste, WCAG 15.83:1).
     - `--deep-blue: #071B33` (estructura, topbar, footer, tarjetas clave ~20%).
     - `--inst-blue: #123C69` (azul institucional y estados semánticos de alineación).
     - `--active-blue: #2367D1` (interacción, enlaces, foco visible).
     - `--grey-mineral: #5C636C` (texto secundario y metadatos accesibles 5.38:1).
     - `--grey-dim: #A3ABB6` (texto secundario sobre azul profundo 6.87:1).
     - `--grey-line: #D7D9D6` (bordes técnicos de 1px).
     - `--signal-red: #D83A32` (micro-acentos de 6px en etiquetas y remates técnicos ~3%).
     - `--radius: 0` (cero bordes redondeados en todo el sistema).
     - Tipografías: Public Sans (estructural), Source Serif 4 (reflexiva/humanista), DM Mono (técnica/curricular).
  2. **Framework de Diapositivas:**
     - Contenedor de presentación responsivo centrado con padding modular.
     - Transición suave de diapositiva activa (`.slide` / `.slide.active`).
  3. **Componentes Universales de Interfaz:**
     - `.mono-label`: Microetiqueta técnica con dot rojo de 6px en `DM Mono`, tracking 0.08em, mayúsculas.
     - `.vector-line`: Línea divisoria de 1px con remate circular rojo de 7px.
     - `.card`, `.card-quiet`, `.card-deep`: Tarjetas sin sombra difusa, delimitadas por líneas de 1px y borde superior de acento de 2px.
     - `.icon-chip`: Contenedor técnico de icono de 40×40px sin radio.
     - `.document-frame`: Marco técnico de documento oficial con etiqueta superior y pie interactivo de zoom.
  4. **Estilos Específicos de Diapositivas 1 a 14:**
     - *Slide 1 (Portada):* Composición 60/40 sobria con tipografía H1 potente, subtítulo en Serif y fotografía de portada técnica.
     - *Slide 2 (Agenda):* Retícula 4 columnas con numeración `01` a `04` en `DM Mono` y verbos pedagógicos en mayúscula.
     - *Slide 3 (Reflexión Inicial):* Bloque humanista destacado con pregunta en `Source Serif 4`, cita y dilema de aula.
     - *Slide 4 (Niveles de Concreción):* Diagrama piramidal técnico invertido (Macro ➔ Meso ➔ Micro) con contraste de papel y documento analizado al lado.
     - *Slide 5-Activity (Análisis del Instrumento):* Mesa de trabajo para despiece del PUD con imagen oficial y cronómetro.
     - *Slide 5 (Objetivos Educativos):* Selector de pestañas para la jerarquía de objetivos (Generales, Subnivel, Unidad) con visor de documento ministerial.
     - *Slide 6 (Destreza con Criterio de Desempeño - DCD):* Anatomía tripartita de la destreza (Verbo + Contenido + Contexto) con pestañas para Bloques curriculares y Desagregación.
     - *Slide 7 (Currículo en el Tiempo y Enfoques):* Comparativa histórica (2016 ➔ Pandemia ➔ Priorizado) y matriz de Competencias e Inserciones.
     - *Slide 8 (Orientaciones Metodológicas):* Flujo del Ciclo ERCA (Kolb) y Modelo ACC con tarjetas conectadas por líneas técnicas.
     - *Slide 9 (Evaluación - Parte 1):* Articulación entre Criterios de Evaluación e Indicadores observables con documentos de evidencia.
     - *Slide 10 (Evaluación - Parte 2):* Matriz de Técnicas vs. Instrumentos de evaluación.
     - *Slide 11 (Síntesis y Detección de Error):* Flujo de alineación total y tarjeta de contraste didáctico sobre `#E8E5DC` con la imagen de *Ejemplo de error*.
     - *Slide 12 (Taller Práctico):* Guía de diseño de secuencias didácticas y tarjeta con código QR descargable/enlazable a Google Drive.
     - *Slide 13 (Conclusión):* Síntesis en 4 principios docentes clave.
     - *Slide 14 (Agradecimientos y Cierre):* Pantalla de despedida académica formal.
  5. **Modal de Inspección Técnica (`#imageModal`):**
     - Fondo `rgba(7, 27, 51, 0.90)`, marco de 1px blanco/gris, botón de cierre nítido y atajo `Escape`.
  6. **Barra de Navegación Fija:**
     - Barra flotante inferior sobria con contador tabular (`1 / 14`), barra de progreso lineal de 4px y botones con foco visible.
- **Verificación:** Validación del archivo CSS sin errores de sintaxis, tamaño reducido de 4.645 a <750 líneas.

---

### Tarea 3: Refactorización Semántica y Limpieza de `index.html`
- **Objetivo:** Limpiar todos los estilos `inline` desordenados, garantizar la correcta carga de tipografías Google Fonts, estructurar las 22 imágenes dentro de `.document-frame` y aplicar la jerarquía semántica.
- **Archivos involucrados:**
  - `C:\Users\User\Desktop\Proyectos\Presentación didáctica\index.html`
- **Pasos:**
  1. Actualizar el `<head>`: Cargar `Public Sans`, `Source Serif 4`, `DM Mono` con `preconnect`.
  2. Revisar cada una de las 14 diapositivas:
     - Reemplazar estilos `style="..."` por clases modulares de diseño (`.card`, `.mono-label`, `.grid-2col`, etc.).
     - Incorporar la clase `.clickable-img` y el contenedor `.document-frame` en cada una de las imágenes curriculares para preservar su interacción de zoom.
     - Normalizar los textos reflexivos con clase `.reading-serif` o elementos semánticos correspondientes.
  3. Asegurar que las llamadas de modales y pestañas correspondan a los IDs en JavaScript.
- **Verificación:** Comprobar en navegador que cada slide renderiza con los textos y las 22 imágenes correctamente visibles.

---

### Tarea 4: Consolidación y Robustecimiento de `script.js`
- **Objetivo:** Asegurar que toda la interactividad (cambio de slides, teclado, modal de imágenes, pestañas de objetivos y DCD, barra de progreso y fallback de QR) funcione de manera fluida y sin errores de consola.
- **Archivos involucrados:**
  - `C:\Users\User\Desktop\Proyectos\Presentación didáctica\script.js`
- **Pasos:**
  1. Revisar la lógica de navegación por diapositivas (teclas Flecha Izquierda/Derecha, Espacio, botones táctiles).
  2. Verificar el controlador del modal de imagen: abrir al hacer clic en `.clickable-img`, cerrar con botón `&times;`, clic exterior o tecla `Escape`.
  3. Verificar los selectores de pestañas en Slide 5 (Objetivos) y Slide 6 (DCD).
  4. Mantener la lógica resiliente del código QR para el taller en Google Drive con fallback textual si no hay conexión externa.
- **Verificación:** Ejecución y pruebas de eventos en navegador.

---

### Tarea 5: Auditoría y Verificación Visual de los 7 Ejes
- **Objetivo:** Validar que la presentación cumple rigurosamente con los 7 aspectos visuales acordados:
  1. *Paleta:* Cero colores ocre/verde/naranja no canónicos; fondo `#F3F1EA` consistente.
  2. *Tipografía:* Public Sans en títulos/estructura, Source Serif 4 en reflexión, DM Mono en códigos `LL.X.X.X`.
  3. *Espacio en blanco:* Margen modular de 24-48px, texto de lectura limitado a 68ch.
  4. *Imágenes:* Las 22 imágenes se abren con nitidez en el visor a pantalla completa con borde 1px y radio 0.
  5. *Composición:* Retícula equilibrada y tarjetas delimitadas por líneas.
  6. *Estilo general:* Aspecto de plano de ingeniería curricular para pedagogía universitaria.
  7. *Consistencia:* Cero `!important` y cero estilos inline en conflicto.
- **Verificación:** Revisión exhaustiva diapositiva por diapositiva.

---

### Tarea 6: Sincronización con el Portafolio y Cierre en Git
- **Objetivo:** Desplegar la versión idéntica en el catálogo del portafolio en `E:\Página Alejandro\recursos\planificacion-docente` y registrar los cambios en los repositorios Git.
- **Archivos involucrados:**
  - `C:\Users\User\Desktop\Proyectos\Presentación didáctica\*`
  - `E:\Página Alejandro\recursos\planificacion-docente\*`
- **Pasos:**
  1. Copiar `index.html`, `style.css` y `script.js` a `E:\Página Alejandro\recursos\planificacion-docente`.
  2. Verificar que los hashes de los archivos coinciden al 100%.
  3. Confirmar que no faltan imágenes en ninguna de las rutas.
  4. Realizar commits documentados en ambos repositorios Git.
- **Verificación:** `git status` y diff limpio en ambos directorios.
