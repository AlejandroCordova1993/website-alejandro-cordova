# MANUAL DE MARCA Y SISTEMA DE DISEÑO
## Alejandro Córdova — Consultoría e Innovación Educativa

**Versión:** 1.0  
**Fecha:** Agosto 2026  
**Propósito:** Guía de referencia de identidad visual, tipografía, paleta de color y principios de diseño para replicar en todos los proyectos, presentaciones, documentos y plataformas digitales de la marca.

---

# 1. CONCEPTO Y FILOSOFÍA VISUAL: *HUMAN / SYSTEM*

La identidad visual se fundamenta en la tensión equilibrada entre dos mundos:

- **HUMAN (Lo Humano y Pedagógico):** Sensibilidad didáctica, lectura, escritura, pensamiento crítico, calidez del papel y reflexión profunda.
- **SYSTEM (El Sistema y la Tecnología):** Rigor técnico, precisión reticular, metadatos estructurados, inteligencia artificial y arquitectura de la información.

### Principio Rector
> **“Experiencia educativa real + pedagogía + tecnología educativa + inteligencia artificial.”**  
> *Menos demostración publicitaria, más confianza y solidez profesional.*

---

# 2. PALETA DE COLOR OFICIAL

El color no se utiliza de forma decorativa, sino funcional y jerárquica, respetando la regla de proporciones **70 / 20 / 10**.

| Nombre | Hex | RGB | Uso Principal | Proporción |
| :--- | :--- | :--- | :--- | :--- |
| **Papel Cálido (Warm Paper)** | `#F3F1EA` | `243, 241, 234` | Fondo dominante, lienzos, superficies base | ~70% |
| **Grafito / Carbón (Charcoal)** | `#101820` | `16, 24, 32` | Texto principal, títulos primarios, alto contraste | — |
| **Azul Profundo (Deep Blue)** | `#071B33` | `7, 27, 51` | Bloques de impacto, botones principales, pie de página | ~20% |
| **Azul Institucional** | `#123C69` | `18, 60, 105` | Metadatos secundarios, títulos intermedios | — |
| **Azul Activo (Active Blue)** | `#2367D1` | `35, 103, 209` | Estados hover, enlaces activos, interacción | — |
| **Gris Mineral** | `#727983` | `114, 121, 131` | Textos de apoyo, descripciones, subtítulos | ~7% |
| **Gris de Línea (Line Grey)** | `#D7D9D6` | `215, 217, 214` | Divisores de 1px, bordes de retícula, marcos | — |
| **Rojo Señal (Signal Red)** | `#D83A32` | `216, 58, 50` | Micro-acentos, terminales de línea, números mono | ~3% |

### Reglas Críticas del Color:
1. **Fondo Papel Cálido (`#F3F1EA`):** Elimina el blanco puro estéril (`#FFFFFF`) para brindar una textura editorial semejante al papel de imprenta.
2. **Rojo Señal (`#D83A32`):** Es un acento puramente **técnico**. **NUNCA** se utiliza como fondo completo de botones o bloques grandes; solo en puntos (dots de 6px), números o extremos de líneas vectoriales.
3. **Azul Profundo (`#071B33`):** Se reserva para pausas visuales estratégicas (bloque de impacto *HUMAN / SYSTEM* y *Footer*).

---

# 3. SISTEMA TIPOGRÁFICO

El sistema utiliza tres familias tipográficas de Google Fonts, cada una con un rol semántico específico:

```html
<!-- Importación Web Oficial -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Public+Sans:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap">
```

### A. Tipografía Estructural: **Public Sans**
- **Clasificación:** Sans-Serif geométrica / editorial contemporánea.
- **Pesos:** `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
- **Uso:** Títulos principales (H1, H2), interfaz de usuario (UI), navegación, botones, formularios y cuerpo de texto estándar.
- **Sensación:** Estructura, claridad, modernidad, neutralidad profesional.

### B. Tipografía Humanista / Reflexiva: **Source Serif 4**
- **Clasificación:** Serif transicional / académica.
- **Pesos:** `400` (Regular), `400 Italic`, `600` (SemiBold).
- **Uso:** Textos reflexivos de especialidad, citas destacadas, grandes declaraciones y preguntas de partida.
- **Sensación:** Humanismo, trayectoria docente, profundidad pedagógica y rigor editorial.

### C. Tipografía Técnica / Sistema: **DM Mono**
- **Clasificación:** Monoespaciada técnica.
- **Pesos:** `400` (Regular), `500` (Medium).
- **Uso:** Microetiquetas (`01 / SERVICIOS`), numeraciones técnicas, metadatos, ubicación, listas de capacidades en mayúsculas (`LINEAMIENTOS · FORMACIÓN`).
- **Sensación:** Precisión, arquitectura de datos, rigor metodológico.

---

# 4. ELEMENTOS GRÁFICOS Y COMPOSICIÓN

### 1. La Microetiqueta Técnica (Mono-Label)
Utilizada al inicio de cada sección para establecer el contexto de sistema:
- **Estilo:** `DM Mono`, `0.75rem` (12px), mayúsculas, tracking/espaciado `0.08em`, color Gris Mineral (`#727983`).
- **Acompañamiento:** Un punto rojo (`#D83A32`) circular de 6px a la izquierda.
- **Ejemplo:** `● 01 / SERVICIOS` | `● ALEJANDRO CÓRDOVA / CONSULTORÍA E INNOVACIÓN EDUCATIVA`

### 2. Línea Vectorial Técnica (Vector Line)
Elemento gráfico de transición:
- Línea horizontal sólida de `1px` en Gris de Línea (`#D7D9D6`).
- Extremo derecho rematado con un punto rojo (`#D83A32`) de 7px centrado verticalmente.

### 3. Composición Reticular (Grid System)
- **Desktop:** Retícula de 12 columnas con espaciado (*gap*) de 24px y ancho máximo de 1280px.
- **Estructura en Filas Editoriales:** La información se organiza en filas horizontales separadas por líneas de `1px`, evitando tarjetas flotantes o "bento boxes" saturados.

---

# 5. VARIABLES CSS LISTAS PARA COPIAR (`tokens.css`)

Para incluir este sistema en futuros proyectos web o aplicaciones, copia estas variables:

```css
:root {
  /* Paleta de Color */
  --paper-warm: #F3F1EA;
  --charcoal: #101820;
  --deep-blue: #071B33;
  --inst-blue: #123C69;
  --active-blue: #2367D1;
  --signal-red: #D83A32;
  --grey-mineral: #727983;
  --grey-line: #D7D9D6;
  
  /* Tipografía */
  --font-sans: 'Public Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Source Serif 4', Georgia, serif;
  --font-mono: 'DM Mono', monospace;

  /* Layout y Bordes */
  --max-width: 1280px;
  --radius-sm: 2px;
  --radius-md: 4px;
}
```

---

# 6. DIRECTRICES DE TONO Y VOZ

1. **Lenguaje:** Claro, reflexivo, sobrio y basado en problemas reales.
2. **Verbos preferidos:** *Comprender, diagnosticar, diseñar, acompañar, evaluar, fortalecer, integrar.*
3. **Términos a evitar:** *Revolucionar, potenciar al máximo, transformar sin límites, éxito garantizado, fórmulas mágicas.*
4. **Posicionamiento ético:** En tecnología, IA e investigación académica, enfatizar siempre el **acompañamiento y fortalecimiento de capacidades** sin sustituir la autoría ni el pensamiento humano.

---

# 7. PROHIBICIONES DE DISEÑO (ANTI-PATRONES)

Para mantener la elegancia de la marca, **NO USAR**:
- ❌ Fondos degradados multicolores o textos con gradientes.
- ❌ Tarjetas blancas con sombras difusas pesadas (*heavy drop-shadows*).
- ❌ Fondos oscuros con morados, violetas o luces neón.
- ❌ Iconos genéricos de stock en cada bloque.
- ❌ Bordes redondeados excesivos (mantener bordes limpios de 2px a 4px).
- ❌ El color rojo como fondo de botones o tarjetas completas.

---

*Alejandro Córdova — Pedagogía, tecnología e inteligencia artificial al servicio del aprendizaje.*
