# 🎓 Sintaxis Flow - Análisis Sintáctico Interactivo

Aplicación web interactiva para estudiantes de **10mo EGB de Ecuador** que practican análisis sintáctico mediante ejercicios de arrastrar y soltar, con integración automática a Google Sheets para calificaciones.

## 🌟 Características

- ✨ **Interfaz moderna y gamificada** con sistema de niveles progresivos
- 🎯 **24 ejercicios** organizados en 4 niveles de dificultad
- 🖱️ **Drag & Drop** intuitivo para identificar componentes sintácticos
- ✍️ **Ejercicios de transformación** con pronombres átonos
- 📊 **Integración con Google Sheets** para calificación automática
- 📱 **Responsive** - funciona en computadoras, tablets y móviles
- 🎨 **Retroalimentación inmediata** con código de colores

## 📚 Contenido Pedagógico

### Nivel 1: Fundamentos (Preguntas 1-5)
Identificación de **Sujeto** y **Predicado**

### Nivel 2: Núcleos (Preguntas 6-10)
Identificación de **Núcleo del Sujeto (NS)** y **Núcleo del Predicado (NP)**

### Nivel 3: Complementos (Preguntas 11-17)
Identificación de:
- **Complemento Directo (CD)** - ¿Qué?
- **Complemento Indirecto (CI)** - ¿A quién?

### Nivel 4: Pronombres Átonos (Preguntas 18-24)
Sustitución de CD y CI por pronombres:
- CD: lo, la, los, las
- CI: le, les
- Transformación: se + pronombre

## 🚀 Uso Rápido

### Para Estudiantes

1. **Abre la página:** [Sintaxis Flow](https://TU_USUARIO.github.io/TU_REPOSITORIO/Sintaxis%20Flow%20(1).html)
2. **Ingresa tus datos:** Nombre, apellido y curso
3. **Completa los 24 ejercicios** siguiendo las instrucciones
4. **Recibe tu calificación** al finalizar

📖 **Guía de estudio:** Lee [GUÍA_ESTUDIANTES.md](GUÍA_ESTUDIANTES.md) antes de comenzar

### Para Profesores

1. **Configura Google Sheets** siguiendo [INSTRUCCIONES_GOOGLE_SHEETS.md](INSTRUCCIONES_GOOGLE_SHEETS.md)
2. **Comparte el enlace** con tus estudiantes
3. **Monitorea resultados** en tiempo real desde Google Sheets
4. **Analiza datos** para identificar áreas de refuerzo

📋 **Documentación completa:** [ANÁLISIS_Y_MEJORAS.md](ANÁLISIS_Y_MEJORAS.md)

## 📦 Instalación y Configuración

### Opción 1: Usar GitHub Pages (Recomendado)

1. **Fork o clona este repositorio**
2. **Activa GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root)
   - Guarda
3. **Configura Google Sheets** (ver instrucciones abajo)
4. **Comparte el enlace** que GitHub genera

### Opción 2: Uso Local

1. **Descarga** todos los archivos
2. **Abre** `Sintaxis Flow (1).html` en cualquier navegador
3. **Configura Google Sheets** (opcional, para calificaciones automáticas)

## 🔧 Configuración de Google Sheets

Para habilitar la calificación automática:

1. **Sigue las instrucciones detalladas** en [INSTRUCCIONES_GOOGLE_SHEETS.md](INSTRUCCIONES_GOOGLE_SHEETS.md)
2. **Copia la URL del Web App** de Google Apps Script
3. **Pega la URL** en el archivo HTML (línea ~795):
   ```javascript
   const GOOGLE_SHEETS_URL = 'TU_URL_AQUI';
   ```
4. **Guarda y sube** los cambios a GitHub

⚠️ **Sin configurar Google Sheets:** La actividad funciona perfectamente, pero no guardará las calificaciones automáticamente.

## 📁 Estructura del Proyecto

```
📂 Actividad Complementos directo e indirecto/
├── 📄 Sintaxis Flow (1).html          # Aplicación principal
├── 📄 README.md                       # Este archivo
├── 📄 GUÍA_ESTUDIANTES.md            # Guía para estudiantes
├── 📄 INSTRUCCIONES_GOOGLE_SHEETS.md # Configuración de Google Sheets
└── 📄 ANÁLISIS_Y_MEJORAS.md          # Documentación técnica
```

## 🎯 Criterios de Evaluación

| Puntuación | Calificación | Descripción |
|------------|--------------|-------------|
| 90-100% | Sobresaliente | Dominio completo |
| 80-89% | Muy Bueno | Buen manejo |
| 70-79% | Bueno | Comprende conceptos |
| 60-69% | Aceptable | Necesita refuerzo |
| 0-59% | Insuficiente | Requiere recuperación |

## 💻 Tecnologías

- **HTML5** - Estructura
- **CSS3** - Diseño responsive con gradientes y animaciones
- **JavaScript (Vanilla)** - Lógica interactiva
- **Google Apps Script** - Integración con Google Sheets
- **LocalStorage** - Guardado temporal de progreso

## 🌐 Compatibilidad

✅ Chrome, Firefox, Edge, Safari  
✅ Windows, macOS, Linux  
✅ Android, iOS (tablets y móviles)

## 📊 Datos Guardados

Cuando se configura Google Sheets, se guarda:

- Nombre y apellido del estudiante
- Curso (10mo G, H, I, J)
- Puntuación total (%)
- Respuestas correctas e incorrectas
- Detalle pregunta por pregunta
- Fecha y hora de completación

## 🔐 Privacidad

- ✅ Los datos se guardan en TU Google Sheet
- ✅ Control total sobre la información
- ✅ Cumple con LOPDP Ecuador
- ✅ Sin terceros involucrados

## 🎓 Alineación Curricular

Desarrolla destrezas del **Currículo Nacional de Ecuador** para Lengua y Literatura - 10mo EGB:

- **LL.4.4.6** - Cohesión y conectores lógicos
- **LL.4.4.7** - Uso de TIC en producción escrita
- **LL.5.4.3** - Uso pertinente de tipos de palabras

## 🤝 Contribuciones

Esta es una herramienta educativa abierta. Sugerencias de mejora:

- Más ejercicios y niveles
- Temas adicionales (oraciones subordinadas, etc.)
- Mejoras en la interfaz
- Traducciones a otros idiomas

## 📝 Licencia

MIT License - Libre uso educativo

## 👨‍🏫 Créditos

- **Diseño original:** Sintaxis Flow v1.0
- **Mejoras y correcciones:** Versión 2.0 (Diciembre 2025)
- **Destinado a:** Estudiantes de 10mo EGB - Ecuador
- **Áreas:** Lengua y Literatura, Análisis Sintáctico

## 📞 Soporte

Para dudas sobre:
- **Uso de la aplicación:** Consulta [GUÍA_ESTUDIANTES.md](GUÍA_ESTUDIANTES.md)
- **Configuración:** Lee [INSTRUCCIONES_GOOGLE_SHEETS.md](INSTRUCCIONES_GOOGLE_SHEETS.md)
- **Documentación completa:** [ANÁLISIS_Y_MEJORAS.md](ANÁLISIS_Y_MEJORAS.md)

---

## 🚀 Inicio Rápido para Profesores

1. **Clona el repositorio** o descarga los archivos
2. **Activa GitHub Pages** en Settings → Pages
3. **Configura Google Sheets** (15 minutos - ver instrucciones)
4. **Prueba** con un usuario de prueba
5. **Comparte** el enlace con tus estudiantes

**¡Tu actividad estará lista en menos de 30 minutos!** ⏱️

---

## 📈 Versiones

### v2.0 (Diciembre 2025)
- ✅ Ejercicios de pronombres completamente rediseñados
- ✅ Integración con Google Sheets
- ✅ Retroalimentación mejorada
- ✅ Documentación completa

### v1.0 (Original)
- Versión inicial con ejercicios de drag & drop

---

**¿Listo para usar Sintaxis Flow?** ¡Abre la aplicación y comienza! 🎉
