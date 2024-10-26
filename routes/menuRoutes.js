const express = require("express");
const router = express.Router();
const Menu = require("./../models/Menu");

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Intenal Server Error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);

    const response = await newMenu.save();
    console.log("Menu Data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});

module.exports=router;