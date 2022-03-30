const express = require("express");

const {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement,
} = require("./utils");

recordRouter = express.Router();

const records = [];
seedElements(records, "records");
// Get all records
recordRouter.get("/", (req, res, next) => {
  res.send(records);
});

//Get activity by ID
recordRouter.get("/:id", (req, res, next) => {
  const activity = getElementById(req.params.id, records);
  if (activity) {
    res.send(activity);
  } else {
    res.status(404).send();
  }
});

// Create an activity
recordRouter.post("/", (req, res, next) => {
  const receivedRecords = createElement("records", req.query); // Didn't declare createElement Func yet
  if (receivedRecords) {
    records.push(receivedRecords);
    res.status(201).send(receivedRecords);
  } else {
    res.status(400).send();
  }
});

// Update an activity
recordRouter.put("/:id", (req, res, next) => {
  const recordIndex = getIndexById(req.params.id, records);
  if (recordIndex !== -1) {
    updateElement(req.params.id, req.query, records);
    res.send(records[recordIndex]);
  } else {
    res.status(404).send();
  }
});

// Delete a single activity
recordRouter.delete("/:id", (req, res, next) => {
  const recordIndex = getIndexById(req.params.id, records);
  if (recordIndex !== -1) {
    records.splice(recordIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = recordRouter;
