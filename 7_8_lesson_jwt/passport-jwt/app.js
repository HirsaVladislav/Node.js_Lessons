const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const { usersRouter } = require("./api/index.js");
const passport = require('passport')


require("dotenv").config({ path: `${__dirname}/.env` });
require('./db-connection.js');
const defaultPort = 3001;
const port = process.env.PORT || defaultPort;

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./config/config-passport')(passport);

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (error, req, res, next) {
  console.log(error);
  res.status(404).json({ message: "NOT_FOUND" });
});

app.listen(port, () => console.log(`Server run on http://localhost:${port}`));
