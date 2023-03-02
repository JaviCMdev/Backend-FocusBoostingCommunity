# Backend-FocusBoostingCommunity
**Proyecto**
- Este proyecto es la creacion del Backend de una web de venta de diversos servicios para el videojuego "World of Warcraft", usando como moneda de cambio el propio oro dentro del juego, el fin de este proyecto es meramente educativo pero no se descarta en un futuro que salga a la luz, dado que no hay ningun tipo de beneficio lucrativo.

**Tecnologias Usadas**
- JavaScript
- MongoDB
- Mongoose

**Categorias**
- Usuarios: Creacion y logging de usuarios.
- Servicios: CRUD de servicios y endpoints.
- Compras: CRUD de compras y endpoints. (Se generan con el ID del Usuario y el ID del Servicio).

**Esquemas añadidos**
- Usuario: Nombre, email, contraseña, battletag, discord, server, rol.
- Servicio: Nombre, precio, imagen(En caso de las monturas).
- Compras: ID Usuario, ID Servicio, fecha, estado.

**Endpoints Usuario**
- router.post("/login", UsersController.loginUser);
- router.post("/newUser", UsersController.newUser);
- router.get("/getAll", UsersController.getAllUsers);
- router.put("/updateUser", UsersController.updateUser);
- router.delete("/deleteUser", UsersController.deleteUser);

**Endpoints Servicios**
- router.get("/getAll", ServicesController.getAllServices);
- router.post("/newService", ServicesController.newService);
- router.put("/updateService", ServicesController.updateService);
- router.delete("/deleteService", ServicesController.deleteService);

**Endpoints Compras**
- TBA

**Breve explicacion endpoints**
- TBA

**Añadido archivo Postman**
- TBA

**Agradecimientos**
- Dar las gracias al equipo de <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> por los conocimientos adquiridos.

**Code by Javier Capilla Martin**