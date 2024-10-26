// To make connection between nodeJs server and
// MongoDB server via mongoose library
const mongoose = require("mongoose");
// Define the MongoDB connection URL
// const mongoURL = "mongodb://localhost:27017/hotels";
const mongoPublicURL="mongodb+srv://ujjawaldream3:cluster0kapassword123@cluster0.voq15.mongodb.net/"
mongoose.connect(mongoPublicURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", () => {
  console.error("MongoDB server connection error: ",err);
});

db.on("disconnected", () => {
  console.log("Disonnected to MongoDB server");
});

module.exports=db;