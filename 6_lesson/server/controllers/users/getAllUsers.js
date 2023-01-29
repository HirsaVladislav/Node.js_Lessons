const { User } = require("../../models/Users");

const getAllUsers = async (_, res) => {
  const users = await User.find({});
  res.send(users);
};

module.exports = { getAllUsers };