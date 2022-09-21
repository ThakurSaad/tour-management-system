const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

let conn = null;

const uri =
  "mongodb+srv://tourManagementSystem:Obe6das6HbA9H6pm@cluster0.hpsgg9p.mongodb.net/?retryWrites=true&w=majority";

exports.connect = async function () {
  if (conn == null) {
    conn = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => console.log(`Database connection is rocking`.bgRed));

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }

  return conn;
};

exports.connect();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is going to tour on ${port} port`.bgWhite);
});
