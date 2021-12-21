const express = require('express');
const path = require('path');  // join de rutas relativas

const app = express();
const port = process.env.PORT || 3000;

// ===Add Middlewares===

// ===Agregar rutas
const mainRoutes = require('./routes/mainRouter');

app.use('/', mainRoutes);

// === Config EJS para que sus archivos de vistas 
// las busque siempre en views y con extensión ejs 
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.resolve(__dirname, './public')));


//Llamando a las rutas para cada view
//const index = require('./routes/mainRouter')

//====el puerto
app.listen(port, () => console.log(`Servidor corriendo en ${port}`));

