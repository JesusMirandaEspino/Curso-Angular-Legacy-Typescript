
const { Router } = require('express');

const router = Router();


// Crear un nuevo Usario
router.post( '/new', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Crear Nuevo usuario /new'
    });
});


// Login de Usario
router.post( '/', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
});



// Validar y revalidar token
router.get( '/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Renew /renew'
    });
});


module.exports = router;