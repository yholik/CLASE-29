/**
 * Punto principal de acceso al servidor
 */
// 1- Importamos express
const express = require("express");

// 2- Instanciamos express
const app = express();

// 3- Importamos el modulo de las rutas
const moviesRouter = require("../routes/moviesRouter");

// 4- Declaramos el puerto
const PORT = 3000;

// 5- Transformacion del body a formato legible
app.use(express.json());

// 6- Prefijo principal de las rutas
app.use("/movies", moviesRouter);

// 7- Inicializamos el servidor
app.listen(PORT, ()=>{console.log("Servidor escuchando en puerto 3000");});

// 8- Codificamos moviesRoutes