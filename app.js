const express = require('express');
const path = require('path');  // join de rutas relativas
const app = express();
const port = process.env.PORT || 3000;
// ===Add static files===
app.use(express.static(path.join(__dirname, 'public')));

// ===Agregar rutas
const mainRoutes = require('./routes/mainRouter');
app.use('/',mainRoutes);

// === Config EJS para que sus archivos de vistas 
// las busque siempre en views y con extensión ejs 
app.set('view engine','ejs');

//====el puerto
app.listen(port, () => console.log(`Servidor corriendo en ${port}`));

