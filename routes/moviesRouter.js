/**
 * Enrutador 
 * Endpoints
 */

// 1-Importamos el modulo express(para traer el router y nos ayude a gestionar las acciones)
const express = require("express");

// 2-Instanciamos router de express
const router = express.Router();

// 3-Importamos el controlador de funcioner (movieController controlador de todas las cosas q puedan pasar)
const movieController = require("../controllers/movieController");

// 4-Planteamos ls solicitudes GET, POST, PUT, DELETE 
//Ruta del listado general
router.get("/list", movieController.getAllMovies);
//Ruta para consultas parametricas
router.get("/:id", movieController.getMovieById);
//Ruta para crear peliculas
router.post("/create", movieController.createMovie);
//Ruta para actualizar 
router.put("/:id", movieController.updateMovie);
//Ruta para borrar pelicula
router.delete("/:id", movieController.deleteMovie);

// 5-Exportamos el modulo
module.exports = router;

// 6- Codificamos modulo movieController