const express = require("express");
const main = express();

const {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement,
} = require("./utils");

const PORT = process.env.PORT || 4001;

const users = [];

// Get a single user
main.get("/user/:id", (req, res, next) => {
  const foundUser = getElementById(req.params.id, users);
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send();
  }
});

// Update an user
main.put("/user/:id", (req, res, next) => {
  const userIndex = getIndexById(req.params.id, users);
  if (userIndex !== -1) {
    updateElement(req.params.id, req.query, users);
    res.send(users[userIndex]);
  } else {
    res.status(404).send();
  }
});

// Import and mount the activitiesRouter
const activitiesRouter = require("./activity");
main.use("/activities", activitiesRouter);

main.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
