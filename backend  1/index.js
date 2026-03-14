 // console.log("chai or code");
require('dotenv').config()  // or import 'dotenv/config' if you're using ES6
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter",(req,res)=>{
   res.send("satyamkumar")
})
app.get('/login',(req,res)=>{
   res.send('<h1> please login at the satyam.com </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('please subscribe my channel')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
