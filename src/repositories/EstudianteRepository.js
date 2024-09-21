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
    }
};
