const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo de los servidores web');
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})