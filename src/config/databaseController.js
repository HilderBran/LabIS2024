const mysql = require('mysql2');
const { database } = require('./keys');
const { CONSTANTS } = require('../utils/utils');

// Crear pool de conexiones
const pool = mysql.createPool(database);

// Manejar la conexión y errores
pool.getConnection((error, connection) => {
    if (error) {
        switch (error.code) {
            case CONSTANTS.PROTOCOL_CONNECTION_LOST:
                console.error('La conexión a la base de datos fue cerrada.');
                break;

            case CONSTANTS.ER_CON_COUNT_ERROR:
                console.error('La base de datos tiene demasiadas conexiones.');
                break;

            case CONSTANTS.ECONNREFUSED:
                console.error('La conexión a la base de datos fue rechazada.');
                break;

            case CONSTANTS.ER_ACCESS_DENIED_ERROR:
                console.error('Acceso denegado para el usuario.');
                break;

            default:
                console.error('Error no identificado en la base de datos:', error.message);
                break;
        }
    }

    if (connection) {
        console.log('Conexión a la base de datos exitosa.');
        connection.release(); // Liberar la conexión después de usarla
    }

    return;
});

// Para usar promesas en lugar de callbacks
const poolPromise = pool.promise();

module.exports = poolPromise;
