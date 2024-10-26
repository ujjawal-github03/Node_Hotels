// To make connection between nodeJs server and
// MongoDB server via mongoose library
const mongoose = require("mongoose");
require('dotenv').config();
// Define the MongoDB connection URL
// const mongoURL = process.env.DB_URL_local 
const mongoPublicURL=process.env.DB_URL;
mongoose.connect(mongoPublicURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", () => {
  console.error("MongoDB server connection error: ",error);
});

db.on("disconnected", () => {
  console.log("Disonnected to MongoDB server");
});

module.exports=db;