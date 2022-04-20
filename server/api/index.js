const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const RecordModel = require("../src/models/records");

const config = require("./config");

const app = express();
const PORT = process.env.port || 4000;

// const recordRouter = require("./routes/records");
const recordRouter = require("../src/routes/records");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/records", recordRouter);

module.exports = app;
