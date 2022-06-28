const express = require( 'express' );

// Crear el servidor
const app = express();


// Get
app.get( '/', (_req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Todo salio bien',
        id: 123456
    });

});

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});



