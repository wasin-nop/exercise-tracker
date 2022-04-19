const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const RecordModel = require("./models/records");

const config = require("./config");

const app = express();
const port = 4000;

const recordRouter = require("./routes/records");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/records", recordRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const boot = async () => {
  // Connect to mongoDB
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

boot();
