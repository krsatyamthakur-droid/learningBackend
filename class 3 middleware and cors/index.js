// // old code 
// // const express=require('express')
// // const app=express()
// // // better routing , and database , middlewares
// // let reqcount=0
// // function reqincrease(){
// //     reqcount=reqcount+1
// //     console.log(reqcount)
// // }
// // app.get('/sum/:fistinput/:secondinput',function(req,res){
// //       reqincrease()
 
// //    // main logic
// //    const a =parseInt(req.params.fistinput)
// //    const b=parseInt(req.params.secondinput)
  

// //   res.json({
// //     answer:a+b
// // })
// // })

// // app.get('/multiply/:fistinput/:secondinput',function(req,res){
// //      reqincrease()
// //     //main logic
// //     const a=parseInt(req.params.fistinput)
// //     const b=parseInt(req.params.secondinput)
// //       console.log("henry bond")
// //     res.json({
// //         answer:a*b
// //     })

// // })
// // app.listen(1000)


// /// new code
// // const express=require('express')
// // const app=express()
// // let count=0;
// // function requestcount(req,res,next){
// //   count=count+1;
// //   console.log("count",count);
// //   next()
// // }
// // function realrequesthandler(req,res){
// // const a=parseInt(req.params.fistint)
// //   const b=parseInt(req.params.secondint)
// //    console.log('hello james')
// //    res.json({
// //   answer:a+b
// //    })
// // }
// // // better routing , add database and middlewares
// // app.get('/sum/:fistint/:secondint',requestcount,realrequesthandler)
// // app.listen(1000)


// // assingments 1
// // 1. Create a middleware function that logs each incoming request's HTTP method, URL, and timestamp to the console


// const express=require('express')
// const app=express();
// let count=0;
// function reqcount(req,res,next){
//   count=count+1;

//   console.log(
//     req.method,
//     req.url,
//     new Date().toLocaleString()
//   );
//   next()
// }
// app.get('/sum/:firstint/:secondint', reqcount,function(req,res){
//   reqcount()
//   const a=parseInt(req.params.firstint)
//   const b=parseInt(req.params.secondint)
//   res.json({
//     answer:a+b
//   })
// })
// app.get('/substract/:firstint/:secondint', reqcount,function(req,res){
//   const a=parseInt(req.params.firstint)
//   const b=parseInt(req.params.secondint)
//   res.json({
//     answer:a-b
//   })
// })
// app.get('/multiply/:firstint/:secondint', reqcount,function(req,res){
//   const a=parseInt(req.params.firstint)
//   const b=parseInt(req.params.secondint)
//   res.json({
//     answer:a*b
//   })
// })
// app.get('/divide/:firstint/:secondint', reqcount,function(req,res){
//   const a=parseInt(req.params.firstint)
//   const b=parseInt(req.params.secondint)
//   res.json({
//     answer:a/b
//   })
// })
// app.listen(1000,function(){
//   console.log("the server is running...")
// })

// // 2nd assignment
// // 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it




// // commonly used middlewares 
// // Commonly used middlewares
// // Through your journey of writing express servers , you'll find some commonly available (on npm) middlewares that you might want to use
// // 1. express.json
// // The express. json() middleware is a built-in middleware function in Express.js used to parse incoming request bodies that are formatted as JSON. This middleware is essential for handling JSON payloads sent by clients in POST or PUT requests.
// // const
// // express = require( 'express');
// // const app = express () ;
// // // Use express. json () middleware to parse
// // JSON bodies
// // app. use (express. json ()) ;
// // // Define a POST route to handle JSON data
// // app-post('/data', (rea, res)
// // // Access
// // the
// // parsed JSON data from req-body
// // const data
// // = req. body;
// // console, log ('Received data:', data);
// // // Send a response
// // res. send ('Data received');
// // }):
// // app. listen 3000, () => {
// // console. log 'Server running
// // on port 3000');


// // in express if you want to send the data first you need to parse the json data
// // then you have to use the express.json middleware , it is used to send the post request 



// // cors => cross origin resource sharing 
// //Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. It's a crucial mechanism for managing cross-origin requests and ensuring secure interactions between different origins on the web.

const express=require('express')
const cors=require('cors')

const app=express()

 app.use(express.json())
  app.use(cors())

let reqcount=0
 function reqincrease(req,res,next){
   reqcount=reqcount+1
  console.log(reqcount)
  next()
 }
 app.post('/sum',function(req,res){
   
 
  // main logic
  const a =req.body.a;
  const b=req.body.b
  

  res.json({
  answer:a+b
})
 })


 app.listen(1000,function(){
  console.log('server is running')
 })

