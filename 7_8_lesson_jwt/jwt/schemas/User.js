const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [10, 'Min length is not valid'],
    maxLength: 50,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    message: '{VALUE} not correct'
  },
  password: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100,
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
}, { 
    collection: 'users', 
    timestamps: true, 
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      }
    }
  }
);

UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

UserSchema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
}