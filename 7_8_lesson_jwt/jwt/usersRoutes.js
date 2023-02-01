const router = require("express").Router();
const { hash, compare } = require("./controllers/bcrypt");
const { User } = require("./schemas/User.js");

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "Not valid email" });
    if (!password)
      return res.status(400).json({ message: "Not valid password" });

    const user = await User({ email });
    const hashPass = await hash(password);
    user.password = hashPass;

    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "Not valid email" });
    if (!password)
      return res.status(400).json({ message: "Not valid password" });

    const exists = await User.exists({ email });
    console.log("exists", exists);
    if (!exists)
      return res
        .status(400)
        .json({ message: `User by email ${email} not found` });

    const user = await User.findOne({ email }, "_id email password").lean();
    const passed = await compare(password, user.password);
    if (!passed)
    return res
      .status(400)
      .json({ message: `User password ${password} not valid` });
    res.send(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { usersRouter: router };
