const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Activity name should contains at least 3 chars"],
  },
  date: { type: String, require: true },
  type: { type: String, require: true },
  duration: {
    type: String,
    min: [0, "Duration must be at least 0"],
    require: true,
  },
  description: { type: String, require: true },
  timestamp: { type: String, require: true },
});

const RecordModel = mongoose.model("Record", recordSchema, "records");

module.exports = RecordModel;
