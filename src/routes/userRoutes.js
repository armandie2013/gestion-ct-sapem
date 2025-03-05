const express = require('express');
const { registerUser, getUsers } = require('../controllers/userController.js');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para obtener todos los usuarios (solo para administradores)
router.get('/', getUsers);

module.exports = router;