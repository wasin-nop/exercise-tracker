const express = require("express");
const router = express.Router();

const RecordModel = require("../models/records");

router.get("/", async (req, res, next) => {
  const records = await RecordModel.find({});
  try {
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
  } catch (error) {
    return res.status(500).send({ message: "server issue" });
  }

});

router.get("/:id", async (req, res, next) => {
  try {
    const record = await RecordModel.findById(req.params.id);
    if (!record) {
      //if null = not found
      return res.status(404).send({ message: "record not found" });
    }
    return res.send({
      id: record._id,
      name: record.name,
      date: record.date.toISOString().slice(0, 10),
      type: record.type,
      duration: record.duration,
      description: record.description,
      createdAt: record.createdAt,
    });
  } catch (error) {
    return res.status(400).send({ message: "invalid id" });
  }
});

router.post("/", async (req, res, next) => {
  const body = req.body;

  // TODO: validate body
  const newRecord = new RecordModel({
    name: body.name,
    date: body.date,
    type: body.type,
    duration: body.duration,
    description: body.description,
  });

  const errors = newRecord.validateSync();
  if (errors) {
    const errorFieldNames = Object.keys(errors.errors);
    if (errorFieldNames.length > 0) {
      return res
        .status(400)
        .send({ message: errors.errors[errorFieldNames[0]].message });
    }
  }

  await newRecord.save();

  return res.status(201).send({ id: newRecord._id });
});

router.put("/:id", async (req, res, next) => {
  try {
    const record = await RecordModel.findById(req.params.id);
    if (!record) {
      //if null = not found
      return res.status(404).send({ message: "record not found" });
    }
    const body = req.body;
    record.name = body.name; //null.name ->type error -> catch
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
