const router = require("express").Router();
const { User } = require("../schemas/User.js");
const jwt = require('jsonwebtoken');
const { auth } = require("../controllers/auth.js");
require("dotenv").config({ path: `${__dirname}/../.env` });


router.get('/', auth, async(req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
})

router.post("/create", async (req, res) => {
  try {
    const { email, password, name, age, role } = req.body;

    if (!email) return res.status(400).json({ message: "Not valid email" });
    if (!password)
      return res.status(400).json({ message: "Not valid password" });

    const user = await User({ email, password, name, age, role });

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

    if (!exists)
      return res
        .status(400)
        .json({ message: `User by email ${email} not found` });

    const user = await User.findOne({ email });
    const passed = await user.checkPassword(password);

    if (!passed)
    return res
      .status(400)
      .json({ message: `User password ${password} not valid` });

    const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1d' });

    res.status(200).send({
      message: 'SUCCESS',
      token
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { usersRouter: router };
