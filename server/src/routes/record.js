const express = require("express");
const router = express.Router();

const RecordModel = require("../models/record");
// const records = require("../../data");

// router.use("/:recordId", async (req, res, next) => {
//   const foundRecord = await RecordModel.findById(req.params.recordId);
//   if (!foundRecord) {
//     return res.status(404).send("Record not found");
//   }
//   req.record = foundRecord;
//   req.recordIndex = index;
//   return next();
// });

router.get("/", async (req, res, next) => {
  const records = await RecordModel.find({});

  return res.send(
    records.map((record) => {
      return {
        id: record._id,
        name: record.name,
        date: record.date.toISOString().slice(0, 10),
        type: record.type,
        duration: record.duration,
        description: record.description,
        createdAt: record.createdAt,
      };
    })
  );
});

// router.get("/:id", (req, res, next) => {
//   const recordId = Number.parseInt(req.params.id, 10);
//   const record = records.find((record) => record.id === recordId);
//   res.send(record);
// });

router.post("/", async (req, res, next) => {
  // const params = req.params;
  // const query = req.query;
  const body = req.body;

  // TODO: validate body
  const newRecord = new RecordModel({
    name: body.name,
    date: body.date,
    type: body.type,
    duration: body.duration,
    description: body.description,
  });

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

  return res.status(201).send({ id: newRecord._id });
});

router.put("/:id", async (req, res, next) => {
  try {
    const record = await RecordModel.findById(req.params.id);
    const body = req.body;
    record.name = body.name;
    record.date = body.date;
    record.type = body.type;
    record.duration = body.duration;
    record.description = body.description;
    await record.save();
    return res.status(200).send({});
  } catch (error) {
    return res.status(400).send({ message: "invalid id" });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await RecordModel.deleteOne({ _id: req.params.id });
    return res.status(200).send({});
  } catch (error) {
    return res.status(400).send({ message: "invalid id" });
  }
});

module.exports = router;
