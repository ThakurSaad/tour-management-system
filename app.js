const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Inventory manager is chillin like a villin");
});

app.all("*", (req, res) => {
  res.send("You are lost 😥");
});

module.exports = app;
