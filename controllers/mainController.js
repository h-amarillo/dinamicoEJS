//Este archivo contiene un objeto literal que controla las vistas a mostrar 
//de acuerdo con el método requerido a traves de lo que se solicite en la ruta. 
const path = require('path');
const platillos = require('./platillos')
//se crea la ruta a landing page
const mainController = {
    home: (req, res) => {
        //el segundo parámetro del render es el objeto de platillos.
        res.render('index', { platillos });
    },
    detalle: (req, res) => {
        const idRecuperado = req.params.id;
        console.log(platilllos[idRecuperado]);
        res.render('detalleMenu', {
            platillo: platillos[idRecuperado]});
    }
}; 

//exportaar el modulo local del controlador de la ruta mainController
module.exports = mainController;
