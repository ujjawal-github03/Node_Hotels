const express = require("express");
const router = express.Router();
const Person=require('./../models/Person');
// post route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// GET method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Intenal Server Error" });
  }
});

// Parametrised API calls
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //Extract work type from URL paramenter
    if (workType == "Chef" || workType == "Waiter" || workType == "Manager") {
      const response = await Person.find({ work: workType });
      console.log("Response Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Intenal Server Error" });
  }
});

router.put('/:id',async(req,res)=>
{
    try {
        const personId=req.params.id;
        const updatedPersonData=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,
            runValidators: true
        })

        if(!response)
        {
            console.log("Wrong id");
            return res.status(404).json({error:"Person not found"});
        }
        console.log("Data Updated");
        res.status(200).json(response);
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({ error: "Internal server Error" });
    }
})

router.delete('/:id',async (req,res)=>
{
    try {
        const personId=req.params.id;

        const response=await Person.findByIdAndDelete(personId);
        if(!response)
            {
                console.log("Wrong id");
                return res.status(404).json({error:"Person not found"});
            }
        console.log("Person Deleted");
        res.status(200).json({message:'Person deleted successfully'});
    } catch (error) {
        onsole.log(error);
        res.status(500).json({ error: "Internal server Error" });
    }
})

module.exports=router;
