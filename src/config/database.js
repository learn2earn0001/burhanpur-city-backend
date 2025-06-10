const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`Connected to Database, DB: ${process.env.MONGODB_URI}`);
  })
  .catch((e) => {
    console.log("Connection with DB failed");
    console.log(e);
  });

module.exports = connectDB;
