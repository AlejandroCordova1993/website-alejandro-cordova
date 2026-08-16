# 🚀 Guía para Subir Sintaxis Flow a GitHub

## Paso 1: Preparar Git en tu Computadora

### Si no tienes Git instalado:

1. **Descarga Git:** [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. **Instala** con las opciones predeterminadas
3. **Verifica la instalación** abriendo PowerShell y ejecutando:
   ```powershell
   git --version
   ```

### Si no tienes cuenta de GitHub:

1. **Crea una cuenta gratuita:** [https://github.com/signup](https://github.com/signup)
2. **Verifica tu email**

---

## Paso 2: Crear el Repositorio en GitHub

1. **Inicia sesión** en GitHub
2. **Haz clic** en el botón **"New"** (o el ícono +) → **"New repository"**
3. **Configura el repositorio:**
   - **Repository name:** `sintaxis-flow` (o el nombre que prefieras)
   - **Description:** "Aplicación interactiva para análisis sintáctico - 10mo EGB Ecuador"
   - **Visibilidad:** 
     - ✅ **Public** (si quieres que sea accesible para todos)
     - ⚠️ **Private** (si solo quieres tú y personas autorizadas tengan acceso)
   - ❌ **NO marques** "Add a README file" (ya lo tienes)
   - ❌ **NO agregues** .gitignore ni license (ya están creados)
4. **Haz clic** en **"Create repository"**

---

## Paso 3: Subir los Archivos desde PowerShell

### Opción A: Desde PowerShell (Recomendado)

1. **Abre PowerShell**
2. **Navega a tu carpeta:**
   ```powershell
   cd "C:\Users\User\Desktop\Actividad Complementos directo e indirecto"
   ```

3. **Inicializa Git:**
   ```powershell
   git init
   ```

4. **Agrega todos los archivos:**
   ```powershell
   git add .
   ```

5. **Crea el primer commit:**
   ```powershell
   git commit -m "Versión inicial de Sintaxis Flow v2.0"
   ```

6. **Renombra la rama a main:**
   ```powershell
   git branch -M main
   ```

7. **Conecta con tu repositorio de GitHub:**
   ```powershell
   git remote add origin https://github.com/TU_USUARIO/sintaxis-flow.git
   ```
   ⚠️ **Reemplaza** `TU_USUARIO` con tu nombre de usuario de GitHub

8. **Sube los archivos:**
   ```powershell
   git push -u origin main
   ```

9. **Ingresa tus credenciales** cuando te las pida

---

## Paso 4: Activar GitHub Pages

1. **Ve a tu repositorio** en GitHub
2. **Haz clic** en **Settings** (Configuración)
3. **En el menú lateral**, busca **"Pages"**
4. **Configura:**
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
5. **Haz clic** en **Save**
6. **Espera 1-2 minutos** para que se active

### Tu página estará disponible en:
```
https://TU_USUARIO.github.io/sintaxis-flow/Sintaxis%20Flow%20(1).html
```

---

## Paso 5: Configurar Google Sheets (IMPORTANTE)

Ahora que está en línea, necesitas configurar Google Sheets:

1. **Sigue las instrucciones** en [INSTRUCCIONES_GOOGLE_SHEETS.md](INSTRUCCIONES_GOOGLE_SHEETS.md)
2. **Obtén la URL** del Google Apps Script Web App
3. **Edita el archivo HTML** en GitHub:
   - Ve a tu repositorio
   - Haz clic en `Sintaxis Flow (1).html`
   - Haz clic en el ícono del lápiz (Edit)
   - Busca la línea (aproximadamente línea 795):
     ```javascript
     const GOOGLE_SHEETS_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
     ```
   - Reemplázala con tu URL real:
     ```javascript
     const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/TU_ID/exec';
     ```
   - Haz clic en **"Commit changes"**

---

## Paso 6: Compartir con Estudiantes

### Opción 1: Enlace Directo
Comparte este enlace:
```
https://TU_USUARIO.github.io/sintaxis-flow/Sintaxis%20Flow%20(1).html
```

### Opción 2: Crear un Enlace Corto (Opcional)
1. **Usa un acortador** como [bit.ly](https://bit.ly) o [tinyurl.com](https://tinyurl.com)
2. **Crea un enlace fácil** como: `bit.ly/sintaxis-flow-10mo`
3. **Comparte** el enlace corto

### Opción 3: QR Code (Para clases presenciales)
1. **Genera un QR** en [qr-code-generator.com](https://www.qr-code-generator.com/)
2. **Pega tu URL** de GitHub Pages
3. **Descarga** el QR
4. **Proyecta o imprime** para que escaneen con sus móviles

---

## 🔄 Actualizar la Aplicación en el Futuro

Si haces cambios al archivo HTML:

```powershell
# Navega a la carpeta
cd "C:\Users\User\Desktop\Actividad Complementos directo e indirecto"

# Agrega los cambios
git add .

# Crea un commit con descripción
git commit -m "Descripción de los cambios realizados"

# Sube a GitHub
git push
```

Los cambios se reflejarán en GitHub Pages en 1-2 minutos.

---

## 📱 Compartir en Google Classroom

1. **Crea una tarea** en Google Classroom
2. **Agrega el enlace** de GitHub Pages
3. **Adjunta** la [GUÍA_ESTUDIANTES.md](GUÍA_ESTUDIANTES.md) como material de lectura
4. **Establece fecha límite**
5. **Publica**

Texto sugerido para la tarea:
```
📚 ACTIVIDAD: Sintaxis Flow - Análisis Sintáctico

Completa los 24 ejercicios interactivos sobre análisis sintáctico.

🔗 Enlace: [TU_ENLACE_DE_GITHUB_PAGES]

📖 Antes de comenzar, lee la Guía de Estudiantes adjunta.

⏰ Tiempo estimado: 30-45 minutos
✅ Calificación automática

Instrucciones:
1. Ingresa tu nombre, apellido y curso correctamente
2. Completa los 4 niveles progresivamente
3. Lee bien cada instrucción
4. Tus resultados se guardarán automáticamente

¡Buena suerte! 🚀
```

---

## 🔧 Solución de Problemas

### "Git no es reconocido como comando"
- Reinicia PowerShell después de instalar Git
- O agrega Git al PATH manualmente

### "Permission denied (publickey)"
- Usa HTTPS en lugar de SSH: `https://github.com/TU_USUARIO/sintaxis-flow.git`
- O configura una clave SSH siguiendo [esta guía](https://docs.github.com/es/authentication/connecting-to-github-with-ssh)

### "GitHub Pages no funciona"
- Espera 2-3 minutos después de activarlo
- Verifica que la rama sea "main" y la carpeta "/ (root)"
- Limpia la caché del navegador (Ctrl + Shift + R)

### "Los espacios en el nombre del archivo causan problemas"
Si quieres renombrar el archivo HTML para evitar espacios:

```powershell
# Renombrar el archivo
Rename-Item "Sintaxis Flow (1).html" -NewName "index.html"

# Actualizar en GitHub
git add .
git commit -m "Renombrar archivo principal a index.html"
git push
```

Entonces tu URL será más simple:
```
https://TU_USUARIO.github.io/sintaxis-flow/
```

---

## ✅ Checklist Final

Antes de compartir con estudiantes:

- [ ] Repositorio creado en GitHub
- [ ] Archivos subidos correctamente
- [ ] GitHub Pages activado y funcionando
- [ ] Google Sheets configurado
- [ ] URL del Web App pegada en el HTML
- [ ] Probado con un usuario de prueba
- [ ] Datos aparecen en Google Sheets
- [ ] Enlace compartido con estudiantes
- [ ] Guía de estudiantes enviada

---

## 🎉 ¡Listo!

Tu actividad ahora está:
- ✅ **En línea** y accesible desde cualquier dispositivo
- ✅ **Con calificación automática** vía Google Sheets
- ✅ **Versionada** con Git para control de cambios
- ✅ **Lista para compartir** con tus estudiantes

**URL de ejemplo final:**
```
https://tu-usuario.github.io/sintaxis-flow/Sintaxis%20Flow%20(1).html
```

¡Que tus estudiantes disfruten aprendiendo sintaxis! 📚🚀
