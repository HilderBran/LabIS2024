const { pool } = require("../config/databaseController");

module.exports = {
    obtenerTodasLasCarreras: async () => {
        try {
            const [rows] = await pool.query('SELECT * FROM carreras');
            return rows;
        } catch (error) {
            console.error('Error al consultar la lista de carreras:', error.message);
            throw new Error('Error al consultar la lista de carreras');
        }
    },

    eliminarCarrera: async (idcarrera) => {
        try {
            const [result] = await pool.query('DELETE FROM carreras WHERE idcarrera = ?', [idcarrera]);
            if (result.affectedRows === 0) {
                throw new Error(`No se encontró la carrera con ID: ${idcarrera}`);
            }
            return true;
        } catch (error) {
            console.error(`Error al eliminar la carrera con ID ${idcarrera}:`, error.message);
            throw error;
        }
    },

    insertarCarrera: async (carrera) => {
        try {
            const [result] = await pool.query('INSERT INTO carreras SET ?', [carrera]);
            if (result.affectedRows === 0) {
                throw new Error('No se pudo insertar la carrera');
            }
            return true;
        } catch (error) {
            console.error('Error al insertar la carrera:', error.message);
            throw error;
        }
    },

    actualizarCarrera: async (carrera, idcarrera) => {
        try {
            const [result] = await pool.query('UPDATE carreras SET ? WHERE idcarrera = ?', [carrera, idcarrera]);
            if (result.affectedRows === 0) {
                throw new Error(`No se encontró la carrera con ID: ${idcarrera} para actualizar`);
            }
            return true;
        } catch (error) {
            console.error(`Error al actualizar la carrera con ID ${idcarrera}:`, error.message);
            throw error;
        }
    }
};
