const pool = require('../config/databaseController');

module.exports = {
    obtenerTodosLosEstudiantes: async () => {
        try {
            const result = await pool.query('SELECT * FROM estudiantes'); // Cambia a 'estudiante'
            return result;
        } catch (error) {
            console.error('Error un problema al consultar la lista de los estudiantes', error);
            return error;
        }
    },

    // Eliminar un estudiante
    eliminarEstudiante: async (idestudiante) => {
        try {
            const result = await pool.query('DELETE FROM estudiantes WHERE idestudiante = ?', [idestudiante]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Erro al eliminar el registro', error);
        }
    },

    // Insertar un estudiante
    insertarEstudiante: async (estudiante) => {
        try {
            const result = await pool.query('INSERT INTO estudiantes SET ?', [estudiante]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al insertar el registro', error);
        }
    },

    // Actualizar un estudiante
    actualizarEstudiante: async (estudiante, idestudiante) => {
        try {
            const result = await pool.query('UPDATE estudiantes SET ? WHERE idestudiante = ?', [estudiante, idestudiante]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al actualizar el registro', error);
        }
    }
}


