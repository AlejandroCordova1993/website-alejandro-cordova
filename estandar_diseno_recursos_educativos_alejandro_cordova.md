# ESTÁNDAR DE DISEÑO Y ARQUITECTURA DE RECURSOS EDUCATIVOS INTERACTIVOS
## Modelo Metodológico y Tecnológico «Estándar Diglosia»
### Alejandro Córdova — Consultoría e Innovación Educativa

**Versión:** 1.0  
**Fecha:** Octubre 2026  
**Referencia de implementación canónica:** `recursos/diglosia/`  
**Propósito:** Establecer la guía obligatoria de diseño pedagógico, arquitectura de interacción, directrices visuales y sistema de evaluación para la creación o actualización de todos los entornos interactivos del catálogo de Alejandro Córdova.

---

# 1. FILOSOFÍA Y PRINCIPIOS RECTORES

Los recursos interactivos de Alejandro Córdova no son plataformas de entretenimiento gamificado superficial ni manuales PDF volcados a la web. Son **entornos de mediación pedagógica rigurosa** concebidos bajo la filosofía de marca ***HUMAN / SYSTEM***:

1. **El aprendizaje como centro, la tecnología como andamiaje:** La interactividad solo existe si ayuda a comprender un concepto abstracto, experimentar una tensión o fundamentar una postura crítica.
2. **Soberanía y accesibilidad total (Zero-Backend):** Los recursos deben operar de forma 100% autónoma en el navegador del estudiante. Funcionan sin conexión a internet en laboratorios escolares desconectados, sin requerir inicios de sesión, cuentas ni servidores externos que comprometan la privacidad del alumnado.
3. **Profundidad sin moralismo:** Se abordan temas complejos (lenguaje, poder, sesgos, literatura, argumentación) con rigor científico, fuentes primarias e históricas y preguntas abiertas, respetando la capacidad reflexiva del estudiante.
4. **Respeto a la carga cognitiva:** Menos botones, menos saturación visual, sin distracciones. Cada pantalla conduce a una acción mental clara.

---

# 2. MICROESTRUCTURA: EL ARCO DE APRENDIZAJE DE 5 PASOS

Todo capítulo o módulo didáctico de un recurso interactivo debe articularse obligatoriamente en una secuencia progresiva de **cinco pasos**:

```text
[01. Inicio / Activación] ➔ [02. Lee / Andamiaje] ➔ [03. Practica / Feedback] ➔ [04. Escribe / Metacognición] ➔ [05. Cierre / Síntesis]
```

### Paso 1: Inicio (Activación de ideas previas · Sin nota)
- **Función pedagógica:** Despertar los esquemas mentales previos del estudiante ante la pregunta central del capítulo mediante una hipótesis o predicción.
- **Regla crítica:** No califica ni juzga como «correcto» o «incorrecto». Ofrece opciones verosímiles y devuelve un comentario formativo que conecta la respuesta con lo que se explorará en el capítulo.
- **Persistencia:** La opción elegida se guarda en el estado para recuperarse más adelante.

### Paso 2: Lee (Lectura andamiada + Glosario contextual)
- **Función pedagógica:** Presentación conceptual sobria, dosificada en bloques breves y visualmente jerarquizados.
- **Glosario modal interactivo (`[[término]]`):** Los conceptos especializados se marcan como términos clicables que abren una ventana modal con:
  1. Definición clara y concisa.
  2. Ejemplo contextualizado en la realidad ecuatoriana o cotidiana.
  Evita que el estudiante se desvíe o recurra a pestañas externas.
- **Elementos visuales analíticos:** Esquemas interactivos, citas literarias destacadas en tipografía Serif y piezas infográficas o de arte documental (nunca ilustraciones genéricas de stock).

### Paso 3: Practica (Interacción formativa de baja fricción)
- **Función pedagógica:** Poner a prueba la comprensión inmediata antes de pasar a la producción.
- **Tipologías recomendadas:**
  - *Clasificación en categorías (Sort):* Distinguir conceptos en pugna (ej. bilingüismo vs. diglosia).
  - *Emparejamiento semántico (Match):* Conectar conceptos con su mecanismo operativo.
  - *Líneas temporales (Order):* Secuenciar causas y efectos o hitos históricos.
  - *Selección argumentada (Choice):* Preguntas de comprensión profunda con justificación explícita.
- **Regla de retroalimentación:** La respuesta errónea no solo marca un color rojo; despliega una **pista explicativa** que invita a reflexionar y corregir en un segundo intento.
- **Lúdica opcional:** Actividades como sopas de letras o retos complementarios deben marcarse explícitamente como *«Opcional / Repasa»* para no bloquear el avance del estudiante que prefiere un ritmo analítico directo.

### Paso 4: Escribe (Producción auténtica + Metacognición)
- **Función pedagógica:** La prueba definitiva de aprendizaje es la capacidad de expresar una postura propia con argumentos.
- **El puente metacognitivo (*Recall*):** La tarea recuerda explícitamente lo que el estudiante contestó en el Paso 1 (*«Al inicio respondiste: "[...]", ¿sigues pensando lo mismo?»*), propiciando la toma de conciencia del propio cambio de perspectiva.
- **Andamiaje de redacción:**
  - *Líneas de inicio (Starters):* Frases guía para desbloquear la hoja en blanco.
  - *Criterios de auto-revisión (Checklist):* Casillas obligatorias de verificación antes de registrar.
  - *Rango de palabras:* Contador en tiempo real con meta mínima y máxima.
  - *Bloqueo de pegado selectivo:* El campo de redacción bloquea la acción de pegar desde el portapapeles o inserciones masivas, exigiendo redacción original y genuina del alumno.

### Paso 5: Cierre (Síntesis y comprobación de avance)
- **Función pedagógica:** Consolidar la idea nuclear y visualizar el estado del trabajo.
- **Estructura obligatoria:**
  1. *La idea que te llevas:* Síntesis en una sola frase potente y memorable.
  2. *Repaso en cuatro líneas:* Cuatro viñetas que resumen los aprendizajes clave.
  3. *Lista de verificación del capítulo:* Muestra qué actividades y textos están completos y cuáles quedan pendientes con enlace directo para resolverlos.
  4. *Puente hacia el siguiente capítulo o nivel.*

---

# 3. MACROESTRUCTURA: LA ESPIRAL MULTINIVEL

Cuando un recurso aborda un objeto de estudio amplio o un bloque curricular complejo, la arquitectura debe organizarse en **tres niveles de profundidad progresiva**:

```text
Nivel 1 (Fundacional) ➔ Nivel 2 (Consecuencias e Instituciones) ➔ Nivel 3 (Discurso y Resignificación)
```

| Nivel | Enfoque Cognitivo | Pregunta Guía Típica | Tratamiento Didáctico |
| :--- | :--- | :--- | :--- |
| **Nivel 1** | **Causas y Hechos** | *¿Por qué ocurre este fenómeno?* | Origen histórico, conceptos elementales, contrastes evidentes. |
| **Nivel 2** | **Impacto y Derechos** | *¿Qué dejó en la sociedad?* | Afectación a la vida real, educación, leyes, memoria colectiva y resistencia. |
| **Nivel 3** | **Lenguaje y Poder** | *¿Cómo vive en nuestras palabras?* | Análisis discursivo, connotaciones invisibles, prejuicios, desnaturalización y resignificación. |

### Reglas de la Progresión en Espiral:
1. **La definición central madura:** El concepto rector (ej. *diglosia*) se define de forma simple en el Nivel 1 (*imposición de la lengua de los vencedores*) y se profundiza técnicamente en los siguientes niveles (*reparto desigual de privilegios sociopolíticos* y *jerarquización del vocabulario cotidiano*).
2. **Puentes de nivel (*Bridges*):** El inicio de los niveles 2 y 3 incluye siempre un resumen gráfico de lo aprendido en el nivel previo.
3. **Entregas independientes:** Cada nivel genera su propia constancia de aprendizaje, permitiendo al docente dosificar el trabajo por semanas o parciales.

---

# 4. SISTEMA VISUAL Y PAUTAS UI/UX

El diseño de la interfaz debe ejecutar con precisión el [Manual de Marca](file:///e:/P%C3%A1gina%20Alejandro/manual_marca_sistema_diseno_alejandro_cordova.md):

### A. Paleta Proporcional (70 / 20 / 10)
- **`#F3F1EA` (Papel Cálido) [~70%]:** Fondo de todo el lienzo y las tarjetas de lectura. Elimina la fatiga visual de pantallas blancas y aporta sensación editorial.
- **`#071B33` (Azul Profundo) [~20%]:** Cabecera principal (*topbar*), bloques de cierre, pie de página y botones primarios.
- **`#D83A32` (Rojo Señal) [~3%]:** Acento exclusivo para detalles técnicos: puntos de navegación (*dots*), fulcro de balanzas, insignias de nivel. **Nunca se usa como fondo de bloques o botones enteros**.
- **`#101820` (Grafito/Carbón):** Texto de lectura de alto contraste.
- **`#123C69` (Azul Institucional) y `#D7D9D6` (Gris de Línea):** Bordes sutiles de 1px y metadatos.

### B. Jerarquía Tipográfica Semántica
- **Public Sans:** Interfaz, botones, títulos estructurales (H1, H2), enunciados y textos de actividades.
- **Source Serif 4:** Preguntas reflexivas iniciales, citas literarias o históricas destacadas y fragmentos de análisis.
- **DM Mono:** Números de paso, contadores de avance, metadatos temporales, chips técnicos y códigos de verificación.
- *Independencia técnica:* Las fuentes se autoalojan en formato WOFF2 local dentro de `fonts/`. No se cargan desde Google Fonts en tiempo de ejecución.

### C. Navegación e Interfaz
- **Barra superior (*Topbar*):** Muestra el nivel actual, barra de progreso global en vivo, controles de accesibilidad tipográfica (A- / A+) y selector de modo «Presentar» para proyección en aula.
- **Barra lateral (*Sidebar*):** Índice completo de capítulos con indicador de estado (Sin empezar / En curso / Hecho), acceso directo al portafolio, glosario y enlace de retorno al catálogo general (`../../recursos.html`).
- **Navegación horizontal (*Stepper*):** Cinta de pasos numerados en la cabecera del capítulo con estados claros (actual, resuelto con tick, opcional).

---

# 5. EVALUACIÓN Y VALIDACIÓN «ZERO-BACKEND»

El docente en el aula necesita verificar el trabajo del estudiante de forma rápida, fiable y sin tener que gestionar usuarios ni contraseñas.

### A. Almacenamiento Local Seguro
- El avance se guarda automáticamente en `localStorage` bajo una clave única con control de versión.
- Al importar o reiniciar, se aplica un saneamiento estricto de tipos (*sanitizer*) para evitar inyecciones o estados corruptos.

### B. El Código de Verificación Algorítmico
Al completar las tareas del nivel y registrar su nombre, el recurso genera un código alfanumérico compacto de **15 caracteres** agrupado en tres bloques (ej. `04S7J-QD6AR-3KANV`):
- **Estructura binaria (Base32 sin letras ambiguas I, L, O, U):**
  - Identificador de nivel cursado (2 bits).
  - Fecha de emisión en días transcurridos (13 bits).
  - Máscara de bits de actividades obligatorias resueltas (12 bits).
  - Máscara de textos registrados (2 bits).
  - Conteo exacto de palabras de cada redacción (8 + 8 bits).
  - Huella hash determinista del nombre normalizado del estudiante (10 bits).
  - Suma de comprobación criptográfica ligera (16 bits) con clave de sal.
- **Propiedad antifraude:** Si el estudiante altera una letra del código o edita el texto del PDF impreso, la suma de comprobación falla y el código se invalida.

### C. El Panel de Verificación Docente (`verificar.html`)
Cada recurso interactivo debe incluir en su raíz un archivo `verificar.html` dedicado al profesor:
1. Permite pegar el código de 15 caracteres y el nombre del estudiante.
2. Comprueba la integridad matemática del código.
3. Coteja la huella digital del nombre del alumno.
4. Desglosa en una tabla clara qué actividades fueron superadas y el conteo de palabras de cada texto frente a la meta solicitada.
5. Funciona de manera 100% estática y sin necesidad de internet.

---

# 6. LA REGLA DE SALIDA SIMPLIFICADA (EL BOTÓN ÚNICO)

La experiencia de entrega de la constancia de aprendizaje debe ser de **fricción cognitiva cero** para el estudiante:

### Anti-patrón a evitar:
❌ Mostrar múltiples botones de exportación (*Guardar HTML, Descargar JSON, Descargar Respaldo, Restaurar, Borrar trabajo*). Esto genera parálisis, dudas y errores en alumnos de secundaria y bachillerato.

### Patrón obligatorio del Estándar Diglosia:
✔ **Un solo botón de acción principal:**
- **`[ Descargar constancia (PDF) ]`**: Al pulsarlo, activa la ventana nativa de impresión con estilos dedicados de `@media print` que formatean la constancia en una página limpia tamaño A4/Carta con el código de verificación visible.
- **`[ Cerrar ]`**: Enlace secundario discreto para regresar al material didáctico.
- **Instrucciones en 3 líneas simples:**
  1. Escribe tu nombre y curso.
  2. Pulsa **Descargar constancia (PDF)**.
  3. Sube el documento a la plataforma escolar o envíalo a tu docente.

---

# 7. LISTA DE CHEQUEO (CHECKLIST DE HOMOLOGACIÓN)

Antes de publicar o actualizar un recurso en el catálogo oficial (`recursos.html`), debe verificarse el cumplimiento de esta lista:

- [ ] **Pedagogía:** ¿Cada capítulo cumple con el ciclo Inicio ➔ Lee ➔ Practica ➔ Escribe ➔ Cierre?
- [ ] **Metacognición:** ¿La tarea de escritura recupera la predicción inicial del alumno?
- [ ] **Glosario:** ¿Todos los términos marcados con `[[...]]` existen en el diccionario de datos y abren una ventana modal con definición y ejemplo?
- [ ] **Imágenes:** ¿Todas las ilustraciones son representaciones conceptuales en formato `.webp` optimizado (ancho máximo 1200 px, peso < 250 KB)?
- [ ] **Anti-copia:** ¿El campo de redacción bloquea pegados masivos sin interferir con el campo del nombre del alumno?
- [ ] **Tipografía:** ¿Las fuentes están autoalojadas en `.woff2` local sin peticiones externas?
- [ ] **Accesibilidad:** ¿Se puede navegar por teclado (flechas, Enter, Tab) y tiene alto contraste en texto y botones?
- [ ] **Verificación docente:** ¿Existe `verificar.html` y decodifica correctamente el avance y la huella del nombre?
- [ ] **Salida:** ¿La ficha de entrega tiene únicamente el botón de descarga en PDF y el botón de cerrar?
- [ ] **Navegación general:** ¿El recurso tiene enlaces claros en la barra lateral y en el pie para regresar a `../../recursos.html`?
- [ ] **Catálogo:** ¿La tarjeta del recurso está agregada en `recursos.html` y `proyectos.html` con número correlativo y filtros de área?
