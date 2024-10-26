// Authentication
const passport=require('passport');
const localStatergy= require('passport-local').Strategy;
const Person = require("./models/Person");
passport.use(new localStatergy(async (USERNAME,PASSWORD,done)=>
{
  try {
    console.log(`Received username: ${USERNAME}`);
    // console.log(`Received password: ${PASSWORD}`);
    const user=await Person.findOne({username:USERNAME});
    if(!user)
    {
      return done(null,false,{message:"Incorrect username"});
    }
    const isPasswordMatch= await user.comparePassword(PASSWORD);
    if(isPasswordMatch)
    {
      return done(null,user);
    } 
    else
    {
      return done(null,false,{message:"Incorrect password"});
    }
  } 
  catch (err) 
  {
    return done(err);
  }
}))

module.exports=passport; //Export configured passport