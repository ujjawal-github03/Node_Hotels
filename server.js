// WE ARE USING POSTMAN IN PLACE OF FRONTEND
// We use expressjs to make server
// Server ko list of items dena padta hai, bass voh hi laa sakta hai
// Body parser coverts Json/Aur kuch format into js object
// It is bad practice to write end points. So we use express router
const express = require("express");
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json()); // and then it will be stored in req.body
require('dotenv').config();
const PORT=process.env.PORT || 3000;


// Middleware Function
const logRequest=(req,res,next)=>
{
  console.log(`${new Date().toLocaleString()} Request Made To: ${req.originalUrl}`);
  next(); //Move on yo the next phase
}

app.get("/", function (req, res) {
  res.send("Hello World");
});

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuRoutes');     
app.use('/menu',menuRoutes);



// app.get("/idli", (req, res) => {
//   var customizedIdli={
//     name:"Rawa Idly",
//     size:"10 cm",
//     isTasty:true,
//     isExpensive:false
//   }
//   res.send(customizedIdli);
//   res.send("Idli is tasty");
// });

app.get("/dosa", (req, res) => {
  res.send("Dosa is tasty");
});

console.log("Server is live");

app.listen(PORT,()=>
{
  console.log(`Serever is live and listening to ${PORT}`);
});














// const jsonString = '{"name":"John","age":30,"city":"New york"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.age);
// const objectToConvert = {
//   name: "Alice",
//   age: 25,
// };
// const jsonStr=JSON.stringify(objectToConvert);
// console.log(jsonStr);
// console.log(typeof jsonStr);

// ecmascript
// express
// JSON to js object and vice versa
// API and Endpoints

// lodash library
// var _=require('lodash');
// var data=["person","person",1,2,1,'name','name','age','2']
// var filter=_.uniq(data);
// console.log(filter);

// importing other file accesing its thing
// const notes=require('./notes.js');
// console.log('Server file is loaded');
// var age=notes.age;
// var result=notes.add(age,10);
// console.log(age);
// console.log(result);

// var fs_lib=require('fs');
// var os_lib=require('os');

// var user=os_lib.userInfo();
// console.log(user.username);
// fs_lib.appendFile('greeting.txt','Hi '+user.username+' !\n',()=>console.log("File is created"));

// console.log("Server file is running.");
// way1->
// function add(a,b)
// {
//     return a+b;
// }
// way2->
// var add =(a,b)=>{return a+b};

// way3->
// var add= function(a,b)
// {
//     return a+b;
// }
// way4->
// var add=(a,b)=>a+b;
// var result=add(10,11);
// console.log(result);

// (function(a,b)
// {
//     console.log("Ujjawal");
// })();
// function a()
// {
//     console.log("Hello");
// }

// const add=function(x,y)
// {
//     console.log(x+y);
//     a();
// }
// add(4,6);
