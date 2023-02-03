const jwt = require('jsonwebtoken');
const { User } = require('../schemas/User');
require("dotenv").config({ path: `${__dirname}/../.env` });

const auth = async(req, res, next) => {
  try {
    const tokenName = 'Bearer';
    const foundToken = req.rawHeaders.find(str => str.includes(tokenName));
    if(!foundToken) throw new Error(`Error token not found`);
    
    const token = foundToken.split(' ')[1];
    if(!token) throw new Error(`Error token is ${token}`);

    const tokenData = jwt.verify(token, process.env.SECRET);
    if(!tokenData) throw new Error(`Error user by token is ${user}`);

    const user = await User.findById(tokenData.id, '-password -__v -createdAt -updatedAt');
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  auth
}