
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, renewUsuario } = require('../controllers/authController');
const validarCampos = require('../middlewares/validarCampos');

const router = Router();


// Crear un nuevo Usario
router.post( '/new', [ 
        check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password es obligatorio' ).isLength({ min:6 }), 
        validarCampos
        ],  crearUsuario);


// Login de Usario
router.post( '/', [ 
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password es obligatorio' ).isLength({ min:6 }),
        validarCampos 
        ] , loginUsuario); 



// Validar y revalidar token
router.get( '/renew', renewUsuario);


module.exports = router;