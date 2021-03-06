const mongoose = require("mongoose");
const app = require("../api/index");
const config = require("./config");


const boot = async () => {
  // Connect to mongoDB
  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
};

boot();
