const mongoose = require("mongoose");
const bCrypt = require("bcryptjs");

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
    maxLength: 100
  },
  name: {
    type: String,
    trim: true,
    minLength: 5,
    maxLength: 50
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  }
}, { collection: 'users', timestamps: true });

UserSchema.methods.setPassword = function(password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};
UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
}
);

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
}
