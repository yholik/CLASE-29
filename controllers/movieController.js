/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

// 1- Importamos el modulo db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require("../db/db");

// 2- getAllMovies
const getAllMovies = (req, res)=>{
    //Creamos una consulta sql, queremos traer todas las peliculas
    const sql = "SELECT * FROM movies";

    //Enviamos la consulta a la base de bbdd
    db.query(sql, (error, results)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json(results);
    });
};

// 3- getMovieById
const getMovieById = (req, res)=>{
    // Obtenemos el ID solicitado
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    const {id} = req.params; // const id = req.params.id;

    //consulta a la bbdd
    const sql = 'SELECT * FROM movies WHERE id = ?';

    // Enviamos la consulta
    db.query(sql,[id], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json(result);
    });
};

// 4- createMovie
const createMovie = (req, res)=>{
    // Desectructuramos la request
    const {title, director, year} = req.body;

    // Creamos la consulta
    const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?)';

    // Pasamos la consulta
    db.query(sql [title, director, year], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Película creada"});
    });
};

// updateMovie

const updateMovie = (req, res)=>{
    //Desestructuramos la peticion
    const {id} = req.params; //params: barra de navegacion
    const {title, director, year} = req.body; //body: por el cuerpo

    // Consulta con marcadores
    const sql = 'UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?';

    // Pasamos la consulta: consulta, array por orden(titulo,director,año,id),funcion flecha(2 parametros: si falla / si sale bien)
    db.query(sql, [title, director, year, id],(error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Película actualizada"});
    })
};

// deleteMovie

const deleteMovie = (req, res)=>{
    //Desestructuramos la peticion
    const {id} = req.params;
    //consulta sql
    const sql = 'DELETE FROM movies WHERE id = ?';
    //pasamos la consulta a base de datos. Parametros: consulta sql,array: n° de ID,funcion flecha
    db.query(sql, [id], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Película borrada"});
    })
};

//Exportamos el modulo. Escribimos todos los metodos creados en este archivo.
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};

// Pasamos a configurar db.js