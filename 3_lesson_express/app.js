const express = require('express');
const { paramsLogger } = require('./middleware');
const app = express();
const { router } = require('./routes/api');
require('dotenv').config({ path: `${__dirname}/.env` });

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.get('/', // path 
  (req, res) => { // handler with params
    res.send('Main page'); // answer
  }
);

app.use(express.urlencoded({extended: false}));
app.use(paramsLogger);
app.use('/api', router);

app.listen(port, () => console.log(`Server run on http://localhost:${port}`));