const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController.js');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', registerUser); // Registro
router.post('/login', loginUser); // Login
router.get('/', verifyToken, isAdmin, getUsers); // Obtener todos los usuarios (solo admin)

module.exports = router;