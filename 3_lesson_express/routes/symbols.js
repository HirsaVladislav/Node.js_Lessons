const express = require('express');
const router = express.Router();

// ? - the previous character can occur 1 time or be absent.
// + - previous symbol can be one time or more.
// * - instead that symbol can be 1 or more any symbols.

router.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');  
});

module.exports = { symbolsRoute: router };
