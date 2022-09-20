const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const tourRoute = require("./routes/v1/tour.route");

app.use(express.json());
app.use(cors());

app.use("/api/v1", tourRoute);

app.get("/", (req, res) => {
  res.send("Inventory manager is chillin like a villin");
});

app.all("*", (req, res) => {
  res.send("You are lost 😥");
});

module.exports = app;
