const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>  (err && console.log(`Connection error ${err}`))
);
