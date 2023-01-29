const express = require('express');
const router = express.Router();
const { usersRouter } = require('./users');

// http://localhost:4321/api/users/ 
router.use('/users', usersRouter);

module.exports = { router };
