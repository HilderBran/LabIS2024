const express = require('express');
const router = express.Router();
const estudianteRepository = require('../repositories/EstudianteRepository');
const carreraRepository = require('../repositories/CarreraRepository');

router.get('/', async (req, res) => {
    const lstEstudiantes = await estudianteRepository.obtenerTodosLosEstudiantes();
    console.log('Listado',lstEstudiantes);
    
router.get('/', async (req, res) => {
    const lstCarreras = await carreraRepository.obtenerTodasLasCarreras();
    console.log('Listado',lstCarreras);    
    
    res.send('Bienvenido al laboratorio de IMPS'); 
});
});

module.exports = router;