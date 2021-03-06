//Requerir express y el objeto con las posibles vistas (métodos)
const express = require('express');
const mainController = require('../controllers/mainController');

//== guardar la ejecución del método Router
const mainRouter = express.Router();

//==Definir rutas requeridas de acuerdo al recurso
mainRouter.get('/', mainController.home);
mainRouter.get('/detalle/:id', mainController.detalle);
mainRouter.get('/users/login', mainController.login);
mainRouter.post('/users/login', mainController.user);


module.exports = mainRouter; 
