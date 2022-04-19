const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const RecordModel = require("./models/record");

const config = require("./config");

const app = express();
const port = 4000;

const recordRouter = require("./routes/record");

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use("/record", recordRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post("/createActivity", async (req, res, next) => {
//   const body = req.body;

//   const newRecord = new RecordModel(body);

//   const errors = newRecord.validateSync();
//   if (errors) {
//     const errorFieldNames = Object.keys(errors.errors);
//     if (errorFieldNames.length > 0) {
//       return res.status(400).send(errors.errors[errorFieldNames[0]].message);
//     }
//   }

//   await newRecord.save();

//   return res.status(201).send(newRecord);
// });

const boot = async () => {
  // Connect to mongoDB
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

boot();
