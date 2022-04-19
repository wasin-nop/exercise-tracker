const mongoose = require("mongoose");

const run = async () => {
  const uri =
    "mongodb+srv://m001-student:80084976@sandbox.qurul.mongodb.net/sample_training?retryWrites=true&w=majority";
  await mongoose.connect(uri);

  // const zips = await mongoose.connection.db
  //   .collection("zips")
  //   .find({})
  //   .toArray();
  // console.log("🚀 ~ file: example.js ~ line 9 ~ run ~ zips", zips[0]);
  // const zips = await mongoose.connection.db.collection("zips").find({}).count();

  const schema = new mongoose.Schema({
    city: String,
    zip: String,
    loc: { y: Number, x: Number },
    pop: Number,
    state: {
      type: String,
      minLength: [2, "State must contains at least 2 chars"],
      maxLength: [3, "State must contains at most 3 chars"],
    },
  });

  // const ZipModel = mongoose.model("Zip", schema);

  // ZipModel.findById("zip-001");
  // ZipModel.find({});
  // ZipModel.create();
  // ZipModel.updateMany({ city: "ALPINE" }, { pop: { $inc: 10 } });
  // ZipModel.deleteMany({ city: "ALPINE" });
  // const zips = await ZipModel.find({});
  // await ZipModel.updateMany({ city: "ALPINE" }, { $inc: { pop: 10 } });

  // const newZip = new ZipModel({
  //   city: "Bangkok",
  //   zip: 10060,
  //   loc: { x: 100, y: 13 },
  //   pop: 77000000,
  //   state: "KRUNGTHEP",
  // });
  // await newZip.save();

  // console.log(newZip);
  const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
  });
  personSchema.methods.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  const PersonModel = mongoose.model("person", personSchema, "persons");
  const sam = new PersonModel({
    firstName: "Trairat",
    lastName: "Punya",
  });
  const fullName = sam.getFullName();
  console.log("🚀 ~ file: example.js ~ line 60 ~ run ~ fullName", fullName);
};

run()
  .then(() => {
    console.log("Done ");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
