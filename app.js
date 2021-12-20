const express = require('express');
const path = require('path');  // join de rutas relativas
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');


const app = express();
const port = process.env.PORT || 3000;
const upload = multer().single('avatarFile');

// ===Add Middlewares===
app.use(express.static(path.resolve(__dirname, './public')));
app.use(session({
    secret: 'Pimienta y Sal',
    resave: false,
    saveUninitialized: true,
}));
app.use(cookieParser());


// ===Agregar rutas
const mainRoutes = require('./routes/mainRouter');

app.use('/', mainRoutes);

// === Config EJS para que sus archivos de vistas 
// las busque siempre en views y con extensión ejs 
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));

//config para procesar y enviar info del formulario por put***
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//====el puerto
app.listen(port, () => console.log(`Servidor corriendo en ${port}`));

