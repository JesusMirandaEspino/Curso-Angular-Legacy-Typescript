const { response } = require('express');
const Usuarios = require('../models/Usuarios');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/jwt');

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

        // contraseña 
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );


        // token
        const token = await generarJWT( dbUser.id, name );

        await dbUser.save();


        return res.status( 201 ).json({
                ok: true,
                uid: dbUser.id,
                name,
                token,
                msg: 'Usuario Creado'
            });

    }catch( error ){
        console.log(error);
        return res.status( 500 ).json({
            ok: false,
            msg: 'Consulte con el administrador'
        });
    }


}


const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;


    try{

        const dbUser = await  Usuarios.findOne({email});

        if( !dbUser ){
            return res.status( 400 ).json({
                    ok: false,
                    msg: 'Error en contraseña o correo'
                    });
        }

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ){
            return res.status( 400 ).json({
                    ok: false,
                    msg: 'Error en contraseña o correo'
                    });
        }

        // token
        const token = await generarJWT( dbUser.id, dbUser.name );

        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token,
            msg: 'Login de usuario /'
        });

    }catch(error){
        console.log(error);
        return res.status( 500 ).json({
            ok: false,
            msg: 'Consulte con el administrador'
        });
    }




}


const renewUsuario = async(req, res = response) => {

    const { uid, name} = req;

    const token = await generarJWT( uid, name );

    return res.json({
        ok: true,
        uid, 
        name,
        msg: 'Renew /renew',
        token
    });
}








module.exports = {
    crearUsuario,
    loginUsuario,
    renewUsuario
}