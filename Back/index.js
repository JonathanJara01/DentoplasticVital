const express = require('express');

const servidor = express();

const PORT = 3000;


servidor.listen(PORT, ()=>{
    console.log(`El Servidor Esta Activo En Su Puerto: ${PORT}`)
});

