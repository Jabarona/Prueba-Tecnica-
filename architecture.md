# Análisis de Arquitectura y Decisiones Técnicas

## 1. Patrón Arquitectónico
Se utilizó la arquitectura modular y de inyección de dependencias provista por **NestJS**. Esto permite separar claramente las responsabilidades:
- **Controllers:** Capa de transporte. Solo se encargan de recibir peticiones HTTP, parsear parámetros y devolver respuestas.
- **Services:** Capa de negocio. Contienen la lógica de la aplicación y coordinan las llamadas a la base de datos.
- **Modules:** Encapsulan dominios específicos (ej. `TasksModule`, `PrismaModule`), facilitando la escalabilidad del código.

## 2. Acceso a Datos (ORM)
Se eligió **Prisma** (v5) sobre TypeORM por su seguridad de tipos estricta (Type-safety), autocompletado y su enfoque declarativo en el archivo `schema.prisma`. Esto reduce errores en tiempo de ejecución y agiliza el desarrollo.

## 3. Validación y Seguridad
Se implementó el patrón **DTO (Data Transfer Object)** junto con `class-validator` a nivel global mediante `ValidationPipe`. Esto garantiza que los datos corruptos o no deseados sean rechazados en la entrada de la API antes de tocar la lógica de negocio (retornando automáticamente errores HTTP 400).

## 4. Infraestructura y Despliegue
Se optó por una estrategia de contenedores usando **Docker y Docker Compose**. 
- Permite aislar el motor de base de datos (**PostgreSQL**) y la aplicación Node.js.
- Garantiza que el entorno de desarrollo sea idéntico al de producción, evitando el problema de "funciona en mi máquina".
- El contenedor de la API se encarga de ejecutar `prisma db push` en el arranque, automatizando la sincronización del esquema para el evaluador.
