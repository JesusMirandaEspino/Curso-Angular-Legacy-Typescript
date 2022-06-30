
const { Router } = require('express');
const { crearUsuario, loginUsuario, renewUsuario } = require('../controllers/authController');

const router = Router();


// Crear un nuevo Usario
router.post( '/new',  crearUsuario);


// Login de Usario
router.post( '/', loginUsuario);



// Validar y revalidar token
router.get( '/renew', renewUsuario);


module.exports = router;