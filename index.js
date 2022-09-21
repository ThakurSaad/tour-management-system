const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection is rocking`.bgRed);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is going to tour on ${port} port`.bgWhite);
});
