# 🏛️ Landing Page - República de Chile

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

> Una landing page moderna, institucional e interactiva desarrollada con **Angular (Standalone Components)** y una arquitectura basada en **Features** para maximizar el rendimiento y la escalabilidad.

---

## 🚀 Características Principales

* **Componentes Standalone:** Implementación modular moderna sin depender de `NgModules`.
* **Carga Perezosa (Lazy Loading):** Optimización de rutas mediante `loadChildren` y `loadComponent`.
* **Diseño Responsivo:** Adaptabilidad total para dispositivos móviles, tablets y monitores desktop.
* **Navegación Fluida:** Desplazamiento suave (*smooth scroll*) para la exploración de secciones.
* **Control de Calidad:** Arquitectura modular limpia, sin errores en consola y lista para producción.

---

## 📐 Estructura del Proyecto

El código está estructurado mediante la arquitectura por **Features**, manteniendo una separación clara de responsabilidades:

```text
src/
 └── app/
      ├── features/
      │    └── landing/
      │         ├── components/        # Componentes UI reutilizables
      │         │    ├── beneficios/
      │         │    ├── caracteristicas/
      │         │    ├── contacto/
      │         │    ├── footer/
      │         │    ├── hero/
      │         │    ├── navbar/
      │         │    └── nosotros/
      │         ├── pages/             # Vistas principales / Contenedores
      │         │    └── inicio/
      │         └── landing.routes.ts  # Rutas del módulo landing
      ├── app.component.ts
      └── app.routes.ts
🛠️ Requisitos Previos
Asegúrate de contar con las siguientes herramientas instaladas:

Node.js: v18.x o superior

npm: v9.x o superior

Angular CLI: v17.x o superior

⚙️ Instalación y Configuración
Clonar el repositorio:
git clone [https://github.com/vallegrande/ASE252_06_fe.git](https://github.com/vallegrande/ASE252_06_fe.git)

Navegar a la carpeta del proyecto:

Bash
cd ASE252_06_fe/Loading_page_RepublicadeChile
Instalar las dependencias:

Bash
npm install
Iniciar el servidor de desarrollo:

Bash
ng serve
Ver el proyecto en el navegador:

Abre tu navegador y navega a http://localhost:4200/

🧪 Pruebas y Compilación
Ejecutar pruebas unitarias:

Bash
ng test
Compilar para producción:

Bash
ng build
Los archivos resultantes se generarán en la carpeta dist/.

📄 Licencia
Este proyecto fue desarrollado bajo el marco educativo para Valle Grande.
