const express = require( 'express' );


// Crear el servidor
const app = express();


// Rutas
app.use( 'api/auth', require('./routers/auth') );

app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});



