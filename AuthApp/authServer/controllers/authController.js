const { response } = require('express');
const Usuarios = require('../models/Usuarios');


const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;


    try{

        let usuario = await Usuarios.findOne({ email });

        if( usuario ){
            return res.status( 400 ).json({
                ok: false,
                msg: 'Usuario ya existe'
            });
        }

        const dbUser = new Usuarios( req.body );



        await dbUser.save();


        return res.status( 201 ).json({
                ok: true,
                uid: dbUser.id,
                name,
                msg: 'Usuario Creado'
            });

    }catch( error ){
        console.log(error);
        return res.status( 500 ).json({
            ok: false,
            msg: 'Consulte con el administrador'
        });
    }



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