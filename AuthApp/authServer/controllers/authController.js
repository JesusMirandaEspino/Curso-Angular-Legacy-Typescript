const { response } = require('express');


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Crear Nuevo usuario /new'
    });
}


const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}


const renewUsuario = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew /renew'
    });
}








module.exports = {
    crearUsuario,
    loginUsuario,
    renewUsuario
}