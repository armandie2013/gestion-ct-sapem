const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Crear el esquema del usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // roles posibles
    default: 'user'
  }
}, { timestamps: true });

// Encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para verificar la contraseña
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;