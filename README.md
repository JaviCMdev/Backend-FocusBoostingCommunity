# Backend-FocusBoostingCommunity
**Proyecto**
- Este proyecto es la creacion del Backend de una web de venta de diversos servicios para el videojuego "World of Warcraft", usando como moneda de cambio el propio oro dentro del juego, el fin de este proyecto es meramente educativo pero no se descarta en un futuro que salga a la luz, dado que no hay ningun tipo de beneficio lucrativo.

**Tecnologias Usadas**

![js2](https://user-images.githubusercontent.com/114490860/222938291-1e87d5ea-71aa-4545-9ad6-496f25ecae48.png)![mongodb](https://user-images.githubusercontent.com/114490860/222938180-670123f9-e7b5-444d-a768-3b99d10df020.png)![mongoose](https://user-images.githubusercontent.com/114490860/222938190-5aa3f244-5fd4-4dbb-b0fd-9ba1d1ee7e64.png)

**Colecciones**
- Usuarios: Creacion y logging de usuarios. (Apartado Server ref Servers coleccion).
- Servers: CRUD y endpoints.
- Mythic+: CRUD y endpoints.
- Mounts: CRUD y endpoints.
- Raids: CRUD y endpoints.
- Compras de Mythic+: CRUD y endpoints. (Se generan con el ID del Usuario y el ID del Servicio).
- Compras de Mounts: CRUD y endpoints. (Se generan con el ID del Usuario y el ID del Servicio).
- Compras de Raids: CRUD y endpoints. (Se generan con el ID del Usuario y el ID del Servicio).

**Middlewares añadidos**
- auth: Comprueba que los datos del usuario logueado coinciden los con los datos del token adquirido al loggear.
- isAdmin: Comprueba que el rol del usuario logueado sea "Admin".
- isBooster: Comprueba que el rol del usuario logueado sea "Booster".

**Esquemas añadidos**
- Usuarios: Nombre, email, contraseña, battletag, discord, server, rol, fecha creacion.
- Servers: Nombre, localizacion.
- Mythic+: Nombre, precio.
- Mounts : Nombre, precio, img.
- Raids: Nombre, precio.
- Compras de Mythic+: IDUsuario, IDMythic+, precio, pendiente, reclamado, realizado, reclamado por, fecha creacion
- Compras de Mounts: IDUsuario, IDMounts, precio, pendiente, reclamado, realizado, reclamado por, fecha creacion
- Compras de Raids: IDUsuario, IDRaid, precio, pendiente, reclamado, realizado, reclamado por, fecha creacion

**Endpoints Usuario**
- router.post("/newUser", UsersController.newUser);
- router.post("/getAll", isAdmin, UsersController.getAllUsers);
- router.put("/updateUser", isAdmin, UsersController.updateUser);
- router.delete("/deleteUser", isAdmin, UsersController.deleteUser);
- router.post("/login", UsersController.loginUser);

**Endpoints Servers**
- router.get('/getAll', serverController.getAllservers);
- router.post("/newServer", isAdmin, serverController.newServer);
- router.put("/updateServer", isAdmin, serverController.updateServer);
- router.delete("/deleteServer", isAdmin, serverController.deleteServer);

**Endpoints Mythic+**
- router.get('/getAll', MythicplusController.getAllMythicplus)
- router.post('/newmythicplus', isAdmin, MythicplusController.newMythicplus)
- router.put('/updatemythicplus', isAdmin, MythicplusController.updateMythicplus)
- router.delete('/deletemythicplus', isAdmin, MythicplusController.deleteMythicplus)

**Endpoints Mounts**
- router.get('/getAll', MountController.getAllMount)
- router.post('/newmount', isAdmin, MountController.newMount)
- router.put('/updatemount', isAdmin, MountController.updateMount)
- router.delete('/deletemount', isAdmin, MountController.deleteMount)

**Endpoints Raids**
- router.get('/getAll', RaidController.getAllRaid)
- router.post('/newraid', isAdmin, RaidController.newRaid)
- router.put('/updateraid', isAdmin, RaidController.updateRaid)
- router.delete('/deleteraid', isAdmin, RaidController.deleteRaid)

**Endpoints Compras Mythic+**
- router.get('/getAll', buymythicplusController.getAllBuymythicplus)
- router.post('/newbuymythicplus', auth, buymythicplusController.newBuymythicplus)
- router.put('/updatebuymythicplus', isBooster, buymythicplusController.updateBuymythicplus)
- router.delete('/deletebuymythicplus', isAdmin, buymythicplusController.deleteBuymythicplus)

**Endpoints Compras Mounts**
- router.get('/getAll', BuymountController.getAllBuymount)
- router.post('/newbuymount', auth, BuymountController.newBuymount)
- router.put('/updatebuymount', isBooster, BuymountController.updateBuymount)
- router.delete('/deletebuymount', isAdmin, BuymountController.deleteBuymount)

**Endpoints Compras Raids**
- router.get('/getAll', BuyraidController.getAllBuyraid)
- router.post('/newbuyraid', auth, BuyraidController.newBuyraid)
- router.put('/updatebuyraid', isBooster, BuyraidController.updateBuyraid)
- router.delete('/deletebuyraid', isAdmin, BuyraidController.deleteBuyraid)

**Añadido archivo Postman**
- En la carpeta raiz del proyecto se encuentra el archivo "Focus Boosting Community.postman_collection" que es un .json con todos los endpoints añadidos.

**Agradecimientos**
- Dar las gracias al equipo de <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> por los conocimientos adquiridos.

**Code by Javier Capilla Martin**
