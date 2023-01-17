const path = require('path');
const router = require('express').Router();

// res.download()
router.get('/download', (req, res) => {
  res.download(path.join(__dirname, '../MVP_getMessages.png')); 
});

// res.end()
router.get('/end', (req, res) => {
  res.end('END'); 
});

// res.end()
router.get('/redirect', (req, res) => {
  res.redirect('/');
  res.end(); 
});

module.exports = { responseMethods: router };