# Carrito de compras Zapatos en Angular
## Requerimientos

* Yo pueda entrar y ver una lista de productos que puedo comprar.
* Quiero poder ver ✅
  - Precio de un producto ✅
  - Nombre ✅
  - Categoria ✅
  - Tags ✅
  - Imagen ✅
  - Descuento con restriccion de tiempo *(quiero poder ver este descuento cuando acaba), 🔨
  - Calificación 🔨
  - Comentarios. 🔨

* Deseo poder ordenar los productos que estoy viendo por precio (menor a mayor, o viceversa) o por calificacion (menor a mayor, o viceversa) ✅

* Quiero poder añadir a mi carrito de compras un producto que me haya interesado. ✅

* Quiero poder añadir tantos productos me interesen ✅

* Quiero poder modificar la cantidad de productos en mi carrito (añadir o disminuir unidades, eliminar un producto carrito) ✅

* En mi carrito quiero poder ver el precio total de los productos que llevo hasta el momento ✅

* Deseo también poder concretar la compra de los productos que tengo en mi carrito. 🔨



## Detalles del proyecto

### Estilos
- Los estilos están estructurados en la carpeta `src/styles/` en diferentes carpetas y se consolidadn con `@imports` en el archivo `main.scss`

### Estructura

El proyecto tiene los siguientes directorios
- Components - Componentes pequeños de la app ** no se manejan estilos en los componentes **
- Pages - Componentes de pantalla completa y que se usan en el routing
- Data - Data inicial del proyecto para hacer mock de la información
- Models - Interfaces de los datos usados

### Correr el proyecto

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

