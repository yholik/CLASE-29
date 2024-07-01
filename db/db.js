/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2
 */

// 1- Importamos el modulo mysql2
const mysql = require("mysql2");

// 2-Configuracion de la conexion
const connection = mysql.createConnection({
    host: "localhost", //Colocamos localhost ya que trabajamos localmente
    user: "root", //Por defecto es root
    password: "admin", //La clave que utilizamos en base de datos
    port: 3306,
   // database: "movies_db"
});


//.connect: Va a cargar con funcion flecha
connection.connect((err) => {
    //Que sucede si ocurre un error
    if (err) {
        console.log("Error de conexión con el servidor: " + err);
        return; //Nos expulsa fuera y no se ejecuta mas nada
    }
    //En caso de conexión exitosa
    console.log("Estado de conexión: CONECTADA");

    // Consulta sql
    const sql = 'CREATE DATABASE IF NOT EXISTS movies_db';

    //Verificamos existencia de base de datos y la creamos si no existe
    connection.query(sql, (err, results) => {
        //Error
        if (err) {
            console.error('Error al crear la base de datos:', err);
            return;
        }

        //Exito
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");

        //Nos ubicamos en la base de datos creada
        //.changeUser: Conservarnos o cambiarnos de una base de datos()
        connection.changeUser({ database: "movies_db" }, (err) => {
            //Error
            if (err) {
                console.log('Error al cambiar la base de datos movies_db', err);
                return;
            }

            //En caso de exito
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    director VARCHAR(255) NOT NULL,
                    year INT NOT NULL
                );
            `;

            //Pasamos la consulta
            connection.query(createTableQuery, (err, results) => {
                //Error
                if (err) {
                    console.error('Error al crear la tabla:', err);
                    return;
                }

                //Exito
                console.log("TABLA CREADA/EXISTENTE/GARANTIZADA");
            })
        })
    })
})

//Exportacion del modulo 
module.exports = connection;