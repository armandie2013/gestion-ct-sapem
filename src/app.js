// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// Importar Express
const express = require('express');
const mongoose = require('mongoose');

// Crear la aplicación Express
const app = express();

// Usar middleware para parsear el cuerpo de las peticiones
app.use(express.json());

// Conectar a MongoDB usando la URI desde el archivo .env
mongoose.connect(process.env.MONGO_URI)
 
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.log('Error de conexión a MongoDB:', err));

// Definir una ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a la aplicación de gestión empresarial!');
});

// Usar el puerto especificado en el archivo .env, si no está especificado, usar el 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// ... código previo de app.js

const userRoutes = require('./routes/userRoutes.js');

// Usar las rutas de usuario
app.use('/api/users', userRoutes);

// ... código restante