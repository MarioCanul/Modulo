const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');
//settings
app.set('port',process.env.PORT);
//midedlewares
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
//routes
app.use('/modulo/Registro', require('./routes/Sesion'));
app.use('/modulo/Alumnos', require('./routes/Usuarios'));
app.use('/modulo/Maestros', require('./routes/Maestros'));
app.use('/modulo/Administrador', require('./routes/Administrador'));

module.exports = app;
//http://localhost:4000/modulo/Alumnos/
//http://localhost:4000/modulo/Maestros/
//http://localhost:4000/modulo/Administrador/


