//Este archivo contiene un objeto literal que controla las vistas a mostrar 
//de acuerdo con el método requerido a traves de lo que se solicite en la ruta. 
const path = require('path');
const platillos = require('./platillos');
const multer = require('multer');
const upload = multer().single('avatarFile');

//se crea la ruta a landing page
const mainController = {
    home: (req, res) => {
        //el segundo parámetro del render es el objeto de platillos.
        res.render('index', { platillos });
    },
    detalle: (req, res) => {
       const id = req.params.id-1;
        res.render('detalleMenu', { platillo: platillos[id] });
    },
    login: (req, res) => {
        res.render('login');
    },
    user: (req, res) => {
        upload(req, res, (err) => {
            if(err){
                res.status(400).render("algo salio mal");
            }
        })
        res.render('user');
    }
}; 
//exportaar el modulo local del controlador de la ruta mainController   platillo: platillos[idRecuperado]
module.exports = mainController;
