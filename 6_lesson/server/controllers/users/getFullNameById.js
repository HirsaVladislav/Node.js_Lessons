const { User } = require("../../models/Users");

const getFullNameById = async ({ id } , res) => {
  const user = await User.findById(id);
  res.send(user.fullName());
};

module.exports = { getFullNameById };