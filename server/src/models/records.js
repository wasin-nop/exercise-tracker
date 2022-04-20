const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Activity name should contains at least 3 chars"],
  },
  date: { type: Date, require: true },
  type: { type: String, require: true },
  duration: {
    type: Number,
    min: [0, "Duration must be at least 0"],
    require: true,
  },
  description: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

const RecordModel = mongoose.model("Record", recordSchema, "records");

module.exports = RecordModel;

`
front -> Server -> DB(error)
front <- Server(forward) <- DB(error) type string
front <- Server() <- DB(error)
`;
