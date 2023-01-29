const { User } = require("../../models/Users");

const deleteUser = async ({ id }, res) => {
  const user = await User.deleteOne({_id: id});
  res.send(user);
};

module.exports = { deleteUser };
