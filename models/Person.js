const mongoose = require("mongoose");

// person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["Chef", "Waiter", "Manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  username:
  {
    required: true,
    type: String
  },
  password:
  {
    required: true,
    type: String
  }
});

// Create Person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;