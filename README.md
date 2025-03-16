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

## **📥 Instalación y Configuración**  
### **1️⃣ Clonar el Repositorio**  
Abre la terminal y ejecuta:  
```sh
git clone https://github.com/DicorT98/task_manager.git
cd task_manager
npm install
ng serve

Con npm install descargas las dependencias necesarias para poder usar el proyecto angular correctamente.
Con ng serve corres el proyecto para que lo puedas usar en el navegador.
Para ingresar al proyecto desde tu proyecto, pones la siguiente url:
http://localhost:4200


