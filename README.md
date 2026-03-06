# Task Management API

API RESTful para la gestión de tareas construida con NestJS, Prisma y PostgreSQL. 
Todo el entorno está dockerizado para facilitar su ejecución.

## Requisitos Previos
- [Docker](https://www.docker.com/) y Docker Compose instalados.
- [Git](https://git-scm.com/)

## Instrucciones de Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Jabarona/Prueba-Tecnica-.git
   cd Prueba-Tecnica-
   ```

2. **Variables de entorno:**
   El proyecto incluye un archivo `.env.example`. Para ejecutarlo con Docker, las credenciales por defecto ya están configuradas en el `docker-compose.yml`, por lo que no es estrictamente necesario crear un `.env` local a menos que desees correrlo fuera de Docker.

3. **Levantar la aplicación:**
   Ejecuta el siguiente comando en la raíz del proyecto. Esto descargará las imágenes, construirá la API, levantará la base de datos y ejecutará las migraciones automáticamente:
   ```bash
   docker compose up --build
   ```

4. **Probar la API:**
   La aplicación estará disponible en `http://localhost:3000`.
   Puedes interactuar con los endpoints `/tasks` (POST, GET, PATCH, DELETE).

## Tests
Para ejecutar las pruebas unitarias localmente (requiere Node.js):
```bash
npm install
npm run test
```

---

## 👨‍💻 Autor

**Jarvi Barona**

* 🌐 **Portafolio:** Visitar mi sitio web : https://jarvibarona.cl/
* 💼 **LinkedIn:** Mi perfil profesional : https://www.linkedin.com/in/jarvi-barona-burbano-4a0998252/

