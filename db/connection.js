const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connect = async (dbname) => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/${dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection successful");
  } catch (err) {
    console.log(err, ": Error in connection");
  }
};

connect("studentsAPI");
