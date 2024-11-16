const express = require('express');
const router = express.Router();
const queries = require('../repositories/CarreraRepository');
// Endpoint para mostrar todos las carreras
router.get('/', async (request, response) => {
    const carreras = await queries.obtenerTodasLasCarreras();
    response.render('carreras/listado', { carreras }); // Mostramos el listado de carreras
});
// Endpoint que permite mostrar el formulario para agregar una nueva carrera
router.get('/agregar', async (request, response) => {
    // Renderizamos el formulario
    response.render('carreras/agregar');
});
// Endpoint para agregar una carrera
router.post('/agregar', async (request, response) => {
const { nombre, descripcion } = request.body;
await queries.agregarCarrera({ nombre, descripcion });
response.redirect('/carreras');
});
// Endpoint que permite eliminar una carrera
router.get('/eliminar/:idcarrera', async (request, response) => {
    // Desestructuramos el objeto que nos mandan en la peticion y extraemos el
    idcarrera
    const { idcarrera } = request.params;
    const resultado = await queries.eliminarCarrera(idcarrera);
    if (resultado > 0) {
        console.log('Eliminado con éxito');
    }
    response.redirect('/carreras');
});
module.exports = router;