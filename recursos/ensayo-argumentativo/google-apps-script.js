/*
============================================================
  INSTRUCCIONES PARA CONFIGURAR GOOGLE SHEETS
============================================================

PASO 1: Crear la hoja de cálculo
--------------------------------
1. Ve a https://sheets.google.com
2. Crea una nueva hoja llamada "Resultados Ensayo"
3. En la primera fila, escribe estos encabezados:
   A1: Fecha/Hora
   B1: Nombre
   C1: Apellido
   D1: Curso
   E1: Sopa de Letras
   F1: Emparejar
   G1: Quiz
   H1: Ordenar
   I1: Tesis vs Hecho
   J1: Completar
   K1: Promedio Final

PASO 2: Crear el Apps Script
----------------------------
1. En tu hoja de cálculo, ve a: Extensiones > Apps Script
2. Borra todo el código que aparece
3. Copia y pega el código de abajo (desde "function doPost...")
4. Guarda el proyecto (Ctrl + S)
5. Dale un nombre como "Receptor de Resultados"

PASO 3: Desplegar como Web App
------------------------------
1. Haz clic en "Implementar" > "Nueva implementación"
2. En "Tipo", selecciona "Aplicación web"
3. En "Ejecutar como", selecciona "Yo"
4. En "Quién tiene acceso", selecciona "Cualquier persona"
5. Haz clic en "Implementar"
6. IMPORTANTE: Copia la URL que te da (empieza con https://script.google.com/...)

PASO 4: Configurar la aplicación
--------------------------------
1. Abre el archivo: src/components/ResultsSummary.jsx
2. Busca la línea: const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
3. Reemplaza 'YOUR_GOOGLE_SCRIPT_URL_HERE' con la URL que copiaste
4. Guarda el archivo

¡Listo! Los resultados de los estudiantes llegarán a tu hoja de cálculo.

============================================================
  CÓDIGO PARA APPS SCRIPT (copiar desde aquí)
============================================================
*/

function doPost(e) {
    try {
        // Obtener la hoja activa
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parsear los datos recibidos
        var data = JSON.parse(e.postData.contents);

        // Formatear la fecha
        var fecha = new Date(data.timestamp);
        var fechaFormateada = Utilities.formatDate(fecha, "America/Guayaquil", "dd/MM/yyyy HH:mm:ss");

        // Agregar una nueva fila con los datos
        sheet.appendRow([
            fechaFormateada,
            data.name,
            data.lastName,
            data.course,
            data.wordSearch,
            data.matching,
            data.quiz,
            data.ordering,
            data.thesisGame,
            data.fillBlanks,
            data.finalGrade
        ]);

        // Responder con éxito
        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Responder con error
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Función para probar que todo funciona
function doGet(e) {
    return ContentService
        .createTextOutput("El script está funcionando correctamente!")
        .setMimeType(ContentService.MimeType.TEXT);
}
