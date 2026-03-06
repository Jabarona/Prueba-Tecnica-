# Respuestas Teóricas


1. **Explique la diferencia entre Middleware, Guard, Interceptor y Pipe en NestJS.**
   - Son etapas diferentes del ciclo de vida en NestJS.

El Middleware es el primero que se ejecuta a un nivel más general (por ejemplo, registrar datos de la petición).

El Guard es diferente porque controla quién tiene permiso para continuar; se encarga de gestionar las validaciones de acceso de los usuarios.

El Interceptor actúa antes y después del controlador. Intercepta el flujo para modificar la respuesta (por ejemplo, dándole un formato estándar a los datos) o para implementar sistemas de caché, logrando que el controlador trabaje más tranquilo sin procesar tareas repetitivas.

Finalmente, el Pipe se encarga de la validación y la transformación justo antes de que los datos lleguen al controlador. Por ejemplo, valida que una entrada no venga vacía, o si un ID viene en texto desde la URL, lo transforma a un número entero para que el controlador pueda usarlo directamente.

2. **¿Cómo implementaría autorización basada en roles?**
   - Bueno para implementar esta autorizacion basa en roles usaria un decorador con algun nombre ejemplo @roles('admin') y usando la herramienta SetMetadata que esto le pega una etiqueta a la ruta para darle paso a los roles permitidos , despues usamos la clase Reflector que nos ayuda a leer las rutas que creamos anteriormente , y con esto podemos crear ahora asi un Guard o bueno RolesGuard para que use el reflector para leer la ruta y tome los datos de la petecion y mira si el rol de usuario coincide con los roles que exige la ruta y si si es asi lo deja pasar y si no saltea un erro 403 .

3. **Qué problemas aparecen cuando un backend crece mucho y cómo NestJS ayuda a resolverlos?**
   - Cuando un backend tradicional crece demasiado, el principal problema es que el código tiende a ponerse muy largo. La lógica de negocio se mezcla con las peticiones HTTP, el sistema se vuelve altamente acoplado si se modifica algo se tiende a dañar otra parte y la creación de pruebas unitarias se vuelve casi imposible.
   NestJS resuelve muy bien esto al tener la arquitectura modular se vuelve independiente cada modulo ejemplo Taskmodule , LoginModule y eso mantiene
   el codigo aislado y escalable tambien en lugar de que las clases creen sus propias dependencias, el framework se las inyecta. Esto es clave para poder aislar el código y crear mocks fácilmente durante los tests unitarios esto con la inyeccion de dependencias. tambien NestJS tiene reglas mas claras y mas duras tenemos la parte del controllers para las rutas y el services que sirve para la logica gracias a esto cualquiera que sepa de NestJS puede entrar a trabajr en proyectos grandes y saber donde esta cada cosa es facil de encontrar .

4. **Cómo manejaría configuración por ambiente (development, staging, production)?**
   - Para manejar la configuración a través de diferentes ambientes, utilizaría el paquete oficial @nestjs/config
   Crearía archivos específicos como .env.development, .env.staging y .env.production despues configuraría el ConfigModule de forma global para que evalúe la variable de entorno del sistema operativo NODE_ENV. Dependiendo de si su valor es 'development' o 'production', NestJS cargará automáticamente el archivo .env correcto. se crearia un sistema de validacion usando class-validator la momento de cargar el modulo , esto en caso de levantar en produccion y le falta una variable vital como puede ser la URL de api o de base de datos te arroje un error y no prenda aborte el arranque , asi evitamos fallos y eliminamos tiempos .
5.  **¿Cómo evitaría que dos usuarios compren el último producto disponible al mismo tiempo?**
   - Lo podría evitar de una manera que cuando los 2 usuarios traten de comprar el último producto se le pone un tiempo al producto osea como un bloqueo ya que el primer usuario lo eligio primero entonces tendra un tiempo donde el producto estara bloqeuado y no le sale a los demas usuarios pasado el tiempo y si no se concreto la venta , volveria el articulo a estar disponible y asi evitamos que se compre al mismo tiempo por 2 usuarios al estar bloqueado el prodcuto solo por 1