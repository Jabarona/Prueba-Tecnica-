# Respuestas Teóricas


1. **Explique la diferencia entre Middleware, Guard, Interceptor y Pipe en NestJS.**
   - Son etapas diferentes del ciclo de vida en NestJS.

El Middleware es el primero que se ejecuta a un nivel más general (por ejemplo, registrar datos de la petición).

El Guard es diferente porque controla quién tiene permiso para continuar; se encarga de gestionar las validaciones de acceso de los usuarios.

El Interceptor actúa antes y después del controlador. Intercepta el flujo para modificar la respuesta (por ejemplo, dándole un formato estándar a los datos) o para implementar sistemas de caché, logrando que el controlador trabaje más tranquilo sin procesar tareas repetitivas.

Finalmente, el Pipe se encarga de la validación y la transformación justo antes de que los datos lleguen al controlador. Por ejemplo, valida que una entrada no venga vacía, o si un ID viene en texto desde la URL, lo transforma a un número entero para que el controlador pueda usarlo directamente.

2. **¿Cómo implementaría autorización basada en roles?**
   - Bueno para implementar esta autorizacion basa en roles usaria un decorador con algun nombre ejemplo @roles('admin') y usando la herramienta SetMetadata que esto le pega una etiqueta a la ruta para darle paso a los roles permitidos , despues usamos la clase Reflector que nos ayuda a leer las rutas que creamos anteriormente , y con esto podemos crear ahora asi un Guard o bueno RolesGuard para que use el reflector para leer la ruta y tome los datos de la petecion y mira si el rol de usuario coincide con los roles que exige la ruta y si si es asi lo deja pasar y si no saltea un erro 403 .

3. **¿Cómo implementaría autorización basada en roles?**
   - Respuesta...
