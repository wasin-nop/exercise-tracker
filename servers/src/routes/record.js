const express = require("express");
const router = express.Router();

const RecordModel = require("../models/record");
// const records = require("../../data");

router.use("/:recordId", async (req, res, next) => {
  const foundRecord = await RecordModel.findById(req.params.recordId);
  if (!foundRecord) {
    return res.status(404).send("Record not found");
  }
  req.record = foundRecord;
  req.recordIndex = index;
  return next();
});

router.get("/", async (req, res, next) => {
  const records = await RecordModel.find({});
  res.send(records);
});

router.get("/:id", (req, res, next) => {
  const recordId = Number.parseInt(req.params.id, 10);
  const record = records.find((record) => record.id === recordId);
  res.send(record);
});

router.post("/", async (req, res, next) => {
  const params = req.params;
  const query = req.query;
  const body = req.body;
  // console.log(body);
  // validate
  // if (
  // failed validation
  //  // !typeof req.body.activityName === "string" &&
  //   req.body.activityName.length < 7
  // ) {
  //   return res.status(400).send("Invalid activity name");
  // }
  // currentRecordId += 1;
  // const newRecord = {
  //   id: currentRecordId,
  //   ...req.body,
  // };
  // records.push(newRecord);
  const newRecord = new RecordModel(body);

  // const validateResult = await newRecord.validate();
  const errors = newRecord.validateSync();
  if (errors) {
    const errorFieldNames = Object.keys(errors.errors);
    if (errorFieldNames.length > 0) {
      return res.status(400).send(errors.errors[errorFieldNames[0]].message);
    }
  }
  // for (const keys of Object.keys(errors.errors)) {
  //   console.log(errors.errors[keys].message);
  // }

  await newRecord.save();

  return res.status(201).send(newRecord);
});

router.put("/:id", (req, res, next) => {
  const recordId = Number.parseInt(req.params.id, 10);
  const recordIndex = records.findIndex((record) => record.id === recordId);
  const updateRecord = {
    id: recordId,
    ...req.body,
  };
  records[recordIndex] = updateRecord;
  res.send(updateRecord);
});

router.delete("/:recordId", async (req, res, next) => {
  // const recordId = Number.parseInt(req.params.id, 10);
  // const recordIndex = records.findIndex((record) => record.id === recordId);
  // records.splice(recordIndex, 1);
  await RecordModel.deleteOne({ _id: req.params.recordID });
  res.sendStatus(204);
});

module.exports = router;
