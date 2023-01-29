const { User } = require("../../models/Users");

const createUser = async (body, res) => {
  const { name, lastName, age } = body;
  const user = new User({
    name, lastName, age
  });
  await user.save();
  res.send(user);
};

module.exports = { createUser };