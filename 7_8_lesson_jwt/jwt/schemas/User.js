const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 10,
    maxLength: 50
  },
  password: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 100,
    select: false
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  }
}, { collection: 'users', timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
}