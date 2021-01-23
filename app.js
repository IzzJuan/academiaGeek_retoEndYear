const express = require('express');
const router = express.Router();
const path = require('path');


//Inicializacion
const app = express();

//Settings
app.use(express.static(__dirname + '/public'));
app.set('port', 8080);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//Middlewares

//Rutas
app.get('/', function (req, res) {
    res.render('index')
});

module.exports = app;
