//console.log("hola mundo");

const express = require('express');
const { dbconection } = require('./Database/config');
require('dotenv').config();
const cors = require('cors');

//usuario: userBustamante pss RE7f8LnLsTKuL7mi

const server = express();

server.use(cors());

server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio Rest'

    });

});
dbconection();
server.listen(process.env.PORT, () => {
    console.log('El servidor se esta ejecutando en el puerto: ' + process.env.PORT);
    console.log('Edwin Rolando Bustamante Ruiz')
});