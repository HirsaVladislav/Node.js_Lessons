const { User } = require("../../models/Users");

const updateUserName = async ({ id, name } , res) => {
  const user = await User.findByIdAndUpdate(id, { name });

  res.send(user);
};

module.exports = { updateUserName };