const { pool } = require("../config/databaseController")

module.exports = {
    obtenerTodasLasCarreras: async () => {
        try {
            const result = await pool.query('SELECT * FROM carreras');
            return result;
        } catch (error) {
            console.error('Error un problema al consultar la lista de las carreras', error);
            return error;
        }
    },

    // Eliminar una carrera
    eliminarCarrera: async (idcarrera) => {
        try {
            const result = await pool.query('DELETE FROM carreras WHERE idcarrera = ?', [idcarrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Erro al eliminar el registro', error);
        }
    },

    // Insertar una carrera
    insertarCarrera: async (carrera) => {
        try {
            const result = await pool.query('INSERT INTO carreras SET ?', [carrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al insertar el registro', error);
        }
    },

    // Actualizar una carrera
    actualizarCarrera: async (carrera, idcarrera) => {
        try {
            const result = await pool.query('UPDATE carreras SET ? WHERE idcarrera = ?', [carrera, idcarrera]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error al actualizar el registro', error);
        }
    }
}