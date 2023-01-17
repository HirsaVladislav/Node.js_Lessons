const paramsLogger = function (req, res, next) {
  console.log('body', req.body);
  console.log('params', req.params);
  console.log('query', req.query);
  next();
}

module.exports = { paramsLogger };

