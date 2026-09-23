
const express=require('express')
const app=express()

//route handler
app.get('/',function(req,res){
   res.send("hello world")
})

app.listen(3000)