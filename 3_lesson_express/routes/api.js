const express = require('express');
const router = express.Router();
const { httpMethodsRouter } = require('./http-methods');
const {responseMethods} = require('./response-methods');
const { symbolsRoute } = require('./symbols');

// http://localhost:4321/api/http-methods/
router.use('/http-methods', httpMethodsRouter);

// http://localhost:4321/api/symbols/
router.use('/symbols', symbolsRoute);

// http://localhost:4321/api/response-methods/
router.use('/response-methods', responseMethods);

module.exports = { router };
