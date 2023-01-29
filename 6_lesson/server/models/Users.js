const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema({
  name: {
    type: String,
    unique: true,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 120,
    required: true,
  },
});

UserModel.method('fullName', function fullName() {
  return this.name + ' ' + this.lastName;
});
const User = mongoose.model("User", UserModel);

module.exports = { User };
