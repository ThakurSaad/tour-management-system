const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://tourManagementSystem:Obe6das6HbA9H6pm@cluster0.hpsgg9p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database connection is rocking`.bgRed);
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is going to tour on ${port} port`.bgWhite);
});
