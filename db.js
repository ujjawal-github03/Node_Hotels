// To make connection between nodeJs server and
// MongoDB server via mongoose library
const mongoose = require("mongoose");
require('dotenv').config();
// Define the MongoDB connection URL
const mongoURL = process.env.DB_URL_local 
// const mongoPublicURL=process.env.DB_URL;

mongoose.connect(mongoURL)
  .then(() => console.log("Connected to MongoDB server"))
  .catch((err) => console.error("MongoDB server connection error:", err));

const db = mongoose.connection;
db.on("disconnected", () => {
  console.log("Disonnected to MongoDB server");
});

module.exports=db;