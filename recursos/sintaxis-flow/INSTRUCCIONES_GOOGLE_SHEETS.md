# 📊 Configuración de Google Sheets para Sintaxis Flow

## Paso 1: Crear la Hoja de Cálculo

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala: **"Sintaxis Flow - Calificaciones 10mo EGB"**

## Paso 2: Configurar los Encabezados

En la primera fila de tu hoja, crea los siguientes encabezados:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Nombre | Apellido | Curso | Puntuación (%) | Calificación /10 | Correctas | Total | Detalle por Pregunta |

## Paso 3: Crear el Script de Google Apps

### ⚠️ Si te aparece "Bad Request - Error 400":

**Soluciones rápidas:**

1. **Opción A - Cambiar de navegador:**
   - Cierra Google Sheets
   - Abre en modo incógnito (Ctrl + Shift + N)
   - O usa otro navegador (Chrome, Edge, Firefox)

2. **Opción B - Limpiar caché:**
   - Presiona Ctrl + Shift + Delete
   - Selecciona "Cookies" y "Caché"
   - Limpia y recarga la página

3. **Opción C - Verificar cuenta:**
   - Asegúrate de estar logueado con tu cuenta de Google
   - Si tienes varias cuentas, cierra sesión en todas y entra solo con una

4. **Opción D - Acceso directo:**
   - Ve directamente a: [https://script.google.com](https://script.google.com)
   - Haz clic en "Nuevo proyecto"
   - Salta al paso 2 a continuación

### Pasos para crear el script:

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Borra el código predeterminado
3. Copia y pega el siguiente código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Parsear los datos recibidos
    var data = JSON.parse(e.postData.contents);
    
    // Preparar la fila de datos
    var timestamp = new Date();
    var nombre = data.nombre || '';
    var apellido = data.apellido || '';
    var curso = data.curso || '';
    var puntuacion = data.puntuacion || 0;
    var calificacion = data.calificacion || 0;
    var correctas = data.correctas || 0;
    var total = data.total || 0;
    
    // Crear detalle de preguntas
    var detalle = '';
    if (data.detalles && Array.isArray(data.detalles)) {
      detalle = data.detalles.map(function(d) {
        return 'P' + d.pregunta + ':' + (d.correcta ? '✓' : '✗');
      }).join(' ');
    }
    
    // Agregar la fila
    sheet.appendRow([
      timestamp,
      nombre,
      apellido,
      curso,
      puntuacion,
      calificacion,
      correctas,
      total,
      detalle
    ]);
    
    // Aplicar formato a la última fila
    var lastRow = sheet.getLastRow();
    
    // Color de fondo según puntuación
    if (puntuacion >= 90) {
      sheet.getRange(lastRow, 1, 1, 9).setBackground('#d4edda'); // Verde claro
    } else if (puntuacion >= 70) {
      sheet.getRange(lastRow, 1, 1, 9).setBackground('#fff3cd'); // Amarillo claro
    } else {
      sheet.getRange(lastRow, 1, 1, 9).setBackground('#f8d7da'); // Rojo claro
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Datos guardados correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('El servicio está funcionando correctamente');
}
```

## Paso 4: Implementar el Web App

1. En el editor de Apps Script, haz clic en **Implementar** → **Nueva implementación**

2. **En "Seleccionar tipo"**, haz clic en el ícono de engranaje ⚙️ y selecciona: **"App web"** (o "Aplicación web")

3. **Configuración que aparecerá:**
   - **Descripción**: Escribe "API para Sintaxis Flow" o "CD-CI Master API"
   - **Ejecutar como**: Selecciona **"Yo (tu email)"**
   - **Quién tiene acceso**: Selecciona **"Cualquier persona"** o **"Todos"**

4. Haz clic en el botón **"Implementar"** (abajo a la derecha)

5. **Autorizaciones (importante):**
   - Te pedirá permisos
   - Haz clic en **"Revisar permisos"**
   - Selecciona tu cuenta de Google
   - Haz clic en **"Configuración avanzada"** → **"Ir a [nombre del proyecto] (no seguro)"**
   - Haz clic en **"Permitir"**

6. **IMPORTANTE**: Copia la **URL de implementación web** que aparece. Se verá así:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
   
   📋 **¡Guarda esta URL!** La necesitarás en el siguiente paso.

## Paso 5: Configurar el HTML

1. Abre el archivo `Sintaxis Flow (1).html`
2. Busca la línea que dice:
   ```javascript
   const GOOGLE_SHEETS_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
   ```
3. Reemplázala con tu URL:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/TU_ID_AQUI/exec';
   ```

## Paso 6: Probar la Integración

1. Abre el archivo `Sintaxis Flow (1).html` en un navegador
2. Completa una actividad de prueba
3. Al finalizar, verifica que los datos aparezcan en tu Google Sheet

---

## 📝 Formato de los Datos Guardados

Cada vez que un estudiante complete la actividad, se guardará una fila con:

- **Timestamp**: Fecha y hora de finalización
- **Nombre**: Nombre del estudiante
- **Apellido**: Apellido del estudiante
- **Curso**: 10mo G, H, I o J
- **Puntuación (%)**: Porcentaje de respuestas correctas
- **Calificación /10**: Nota sobre 10 puntos
- **Correctas**: Número de respuestas correctas
- **Total**: Total de preguntas (20)
- **Detalle**: P1:✓ P2:✗ P3:✓ ... (resumen de cada pregunta)

---

## 🎨 Código de Colores Automático

El script aplica colores automáticamente:
- 🟢 **Verde** (90-100%): Excelente
- 🟡 **Amarillo** (70-89%): Bueno
- 🔴 **Rojo** (0-69%): Necesita refuerzo

---

## 🔧 Solución de Problemas

### "No se pudieron enviar los resultados"
- Verifica que la URL del script esté correctamente copiada
- Asegúrate de que el script esté implementado como "Cualquier persona"
- Comprueba que no haya errores en la consola del navegador (F12)

### Los datos no aparecen en la hoja
- Verifica que el nombre de la hoja sea correcto
- Asegúrate de que la primera fila tenga los encabezados
- Revisa el historial de ejecuciones en Apps Script

---

## 📊 Análisis de Resultados

Una vez que tengas datos, puedes:

1. **Crear gráficos** para visualizar el desempeño por curso
2. **Filtrar** por nivel de dificultad o tema
3. **Calcular promedios** por curso
4. **Identificar** preguntas con más errores

### Fórmulas Útiles:

**Promedio por curso:**
```
=AVERAGEIF(D:D,"10mo G",E:E)
```

**Contar estudiantes que pasaron (>=70%):**
```
=COUNTIF(E:E,">=70")
```

**Pregunta con más errores:**
Analiza la columna "Detalle por Pregunta" para ver patrones.

---

## ⚠️ Importante

- **Privacidad**: Esta hoja contendrá datos de estudiantes. Asegúrate de compartirla solo con personas autorizadas.
- **Respaldo**: Google Sheets guarda automáticamente, pero considera hacer copias periódicas.
- **Límites**: Google Apps Script tiene límites de ejecución. Para grupos grandes (+100 estudiantes simultáneos), considera otras soluciones.

---

¡Listo! Ahora tu actividad guardará automáticamente las calificaciones en Google Sheets. 🎉
