# 📝 Task Manager - Angular App 🚀

¡Bienvenido a **Task Manager**! 🎯  
Esta aplicación permite **gestionar tareas**, **filtrarlas**, **editarlas** y **eliminarlas** de manera eficiente.  
Implementa **Angular Material** para una interfaz moderna y almacena los datos en **LocalStorage** para persistencia.  

🔗 **Aplicación en producción:**  
➡️ [Task Manager en GitHub Pages](https://DicorT98.github.io/task_manager/)  

🔗 **Repositorio en GitHub:**  
➡️ [Task Manager - Código Fuente](https://github.com/DicorT98/task_manager)  

---

## **⚙️ Características Principales**  
✅ **Agregar, editar y eliminar tareas**  
✅ **Marcar tareas como completadas o pendientes**  
✅ **Filtrado de tareas: Completadas, Pendientes o Todas**  
✅ **Persistencia en `localStorage` para no perder las tareas al recargar**  
✅ **Diseño responsivo y moderno con Angular Material**  

---

## **🛠 Tecnologías Utilizadas**  

🚀 **Frontend:**  
- **Angular 17+** (Standalone APIs)  
- **Angular Material** (Diseño de UI moderno y accesible)  
- **RxJS** (Gestión de estado con `BehaviorSubject`)  
- **SCSS** (Estilización avanzada)  
- **TypeScript** (Código tipado y mantenible)  

💾 **Persistencia de Datos:**  
- `localStorage` (Almacena las tareas en el navegador)  

📂 **Control de versiones:**  
- Git & GitHub  

---

## **📜 Justificación de Decisiones Técnicas**  
🔹 **Angular 17+ Standalone APIs**: Simplifica la estructura del proyecto eliminando la necesidad de módulos innecesarios.  
🔹 **Angular Material**: Facilita el diseño de una UI moderna, accesible y responsiva.  
🔹 **RxJS (`BehaviorSubject`)**: Permite un flujo de datos reactivo sin necesidad de gestionar un backend.  
🔹 **LocalStorage**: Ofrece persistencia de datos sin dependencias externas.  

---

# **📥 Instalación y Configuración (Guía Paso a Paso)**
## **1️⃣ Instalar las herramientas necesarias**
Antes de clonar el proyecto, asegúrate de tener las siguientes herramientas instaladas en tu computadora:  

### **🔹 1. Instalar Node.js y npm**
📌 **Node.js** es necesario para ejecutar Angular. Al instalarlo, también obtendrás `npm` (Node Package Manager).  
1. **Descarga e instala Node.js desde aquí:**  
   🔗 [https://nodejs.org/](https://nodejs.org/)  
2. **Verifica la instalación:**  
   - Abre una terminal (`CMD`, `PowerShell` o `Git Bash`).  
   - Escribe:  
     ```sh
     node -v
     ```
     Esto debe mostrar una versión como `v18.x.x` o `v20.x.x`.  
   - Luego, verifica `npm`:  
     ```sh
     npm -v
     ```
     Esto debe mostrar un número de versión (`9.x.x` o superior).  

---

### **🔹 2. Instalar Angular CLI**
📌 Angular CLI es la herramienta oficial para desarrollar y ejecutar proyectos Angular.  
Ejecuta en la terminal:  
```sh
npm install -g @angular/cli
```
Verifica que la instalación fue correcta con:
```sh
ng version
```
Debe mostrarte algo como o superior:
```sh
Angular CLI: 17.x.x
```

---

### **🔹 3. Instalar Git y Visual Studio Code**
📌 Git es necesario para clonar el repositorio, y Visual Studio Code es el editor recomendado.
1. Descargar Git:
🔗 https://git-scm.com/downloads
Después de instalar, verifica la versión con:
```sh
git --version
```
2. Descargar Visual Studio Code:
🔗 https://code.visualstudio.com/
Una vez instalado, ábrelo y sigue con el siguiente paso.

---

## **2️⃣  Clonar el proyecto**
1. Abre la terminal (CMD, PowerShell o Git Bash).
2. Ubícate en la carpeta donde quieres guardar el proyecto.
Por ejemplo, en Documentos:
```sh
cd Documents
```
3. Clona el repositorio con Git:
```sh
git clone https://github.com/DicorT98/task_manager.git
```
4. Entra en la carpeta del proyecto:
```sh
cd task_manager
```

---

### **3️⃣ Instalar Dependencias**  
```sh
npm install
```

---

### **4️⃣ Ejecutar Proyecto**  
```sh
ng serve
```

Para ingresar al proyecto una vez ejecutado, ingresamos al siguiente link: 
➡️ http://localhost:4200

👨‍💻 Autor
👤 Diego Corredor (DicorT98)
💼 Desarrollador Front-end
📧 diegocorredor98@hotmail.com
🔗 GitHub
