const express = require("express");

const {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement,
} = require("./utils");

const activities = [];
seedElements(activities, "activities");

activitiesRouter = express.Router();

// Get all activities
activitiesRouter.get("/", (req, res, next) => {
  res.send(activities);
});

//Get activity by ID
activitiesRouter.get("/:id", (req, res, next) => {
  const activity = getElementById(req.params.id, activities);
  if (activity) {
    res.send(activity);
  } else {
    res.status(404).send();
  }
});

// Create an activity
activitiesRouter.post("/", (req, res, next) => {
  const receivedActivities = createElement("activities", req.query); // Didn't declare createElement Func yet
  if (receivedActivities) {
    activities.push(receivedActivities);
    res.status(201).send(receivedActivities);
  } else {
    res.status(400).send();
  }
});

// Update an activity
activitiesRouter.put("/:id", (req, res, next) => {
  const activityIndex = getIndexById(req.params.id, activities);
  if (activityIndex !== -1) {
    updateElement(req.params.id, req.query, activities);
    res.send(activities[activityIndex]);
  } else {
    res.status(404).send();
  }
});

// Delete a single activity
activitiesRouter.delete("/:id", (req, res, next) => {
  const activityIndex = getIndexById(req.params.id, activities);
  if (activityIndex !== -1) {
    activities.splice(activityIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

// Import and mount the recordRouter
const recordRouter = require("./record");
activitiesRouter.use("/record", recordRouter);

module.exports = activitiesRouter;
