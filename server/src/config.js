// const uri =
//   "mongodb+srv://m001-student:80084976@sandbox.qurul.mongodb.net/sample_training?retryWrites=true&w=majority";

// module.exports = {
//   uri,
// };
require("dotenv").config();
module.exports = {
  isVercel: process.env.IS_VERCEL || false,
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI,
  mongoOptions: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DATABASE,
    retryWrites: true,
    w: "majority",
  },
};
