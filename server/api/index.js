const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const RecordModel = require("../src/models/records");

require('dotenv').config();
const config = require("../src/config");

const app = express();
const PORT = config.port;

// const recordRouter = require("./routes/records");
const recordRouter = require("../src/routes/records");


// if (config.isVercel) {
if (config.isVercel) {
  app.use(async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions);
    return next();
  });
}
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/records", recordRouter);

module.exports = app;
