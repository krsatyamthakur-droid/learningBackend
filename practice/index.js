// // // const fs=require('fs')
// // // fs.writeFileSync('james','amit\nrohit')
// // // console.log(' data created ');

// // // const data=fs.readFileSync('james')

// // // fs.appendFileSync('james','anuj\nankita,\nanandita')
// // // console.log('data added ') 

// // // console.log(data.toString())


// // // // callback function

// // // fs.writeFile('henry',(err)=>{
// // //    if(err){
// // //     console.log("bete sahi karo ")

// // //    }
// // //    console.log("folder created")

// // //    fs.readFile("henry",(err)=>{
// // //     if(err){
// // //         console.log("sahi karo ");
// // //     }
// // //     console.log("bete")
// // // })

// // // })
 
// // const express=require('express');
// // const app=express();
// // const cors=require('cors')
// // const mongoose=require('mongoose')
// // mongoose.connect("mongodb://127.0.0.1:27017/dbname")
// // .then(()=> console.log("db..."))

// // app.use(express.json())
// // app.use(cors())
// // let user=require('/Users/satyam/Desktop/backend harkirat/practice/db.js');
// // let products = [
// //    { id: 1, name: "iPhone 15", category: "mobile", price: 69999, stock: 10 },
// // { id: 2, name: "Galaxy S24", category: "mobile", price: 64999, stock: 8 },
// // { id: 3, name: "MacBook Air", category: "laptop", price: 99999, stock: 5 },
// // { id: 4, name: "Dell XPS 14", category: "laptop", price: 89999, stock: 7 },
// // { id: 5, name: "AirPods Pro", category: "headphones", price: 24999, stock: 15 }]

// // app.get('/products',function(req,res){
// //   res.json(products)

// // })
// // app.get('/products/:id',function(req,res){
// //   let id=Number(req.params.id);
// //   let singledata=products.find((a)=>a.id ===Number(id));
// //   if(!singledata){
// //     return res.status(404).json({mesg:"product nhi mila "})
// //   }
// //   res.json({singledata})
// // })
// // app.get('/search',function(req,res){
// //   let {category}=req.query;

// //   let data=products.filter((a) => a.category===category);
// //   if(data.length===0){
// //     return res.json({message:'no product found'})
// //   }
// //   res.send(data);
// // })
// // app.get('/products',function(req,res){
// //   let obj={...req.body}
// //   products.push(obj)
// //   res.json({message:'product added ',data:obj})

// // })




// // app.listen("9000",()=>{
// //     console.log("sever is running")
// // })

// const express=require('express');
// const app=express();
// const cors=require('cors')

// const mongoose=require("mongoose")
// mongoose.connect("mong..............")
// .then(()=> console.log("db....."))

// const bcryptjs=require('bcrypt');

// let hashed=await bcryptjs.hash('abc123',hashed)

// app.post("/signup",function(req,res){
//   const username=req.body.username;
//   const password=req.body.password;
//   const email=req.body.email;
//   const role=req.body.role;

//   let findata=user.findone({email})
//     if(findata){
//         return res.send("user already exist ")
//     }
//     let hashed=await bcryptjs.hash(password,10);
//     let userinfo=new user({
//       name,email,password,role
//     });
//     await userinfo.save();
//     res.send("signup successfully ")


// })

const express=require("express")
const app=express();
const cors=require("cors")
const mongoose=require("mongoose")
const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')
const JWT_SECRET=process.env.JWT_SECRET


app.use(express.json())
app.use(cors())

mongoose.connect("hjfiwhsagisabojbsd")
.then(()=> console.log("db...."))
.catch(()=> console.log('error occured'))

// user scehma

const users=new mongoose.Schema({
   name:String,
   password:String,
   email:String,
   rolee:String
})

// user model
const User=mongoose.model("user",users);

//signup role
app.post('/signup',async function(req,res){
  try{
    const{name,email,password,role}=req.body;

    const findata=await User.findOne({email})
    if(findata){
      res.send("email already exist ")
    }
    const hashpassword=await bcrypt.hash(password,10);
    // create user 
    const userinfo=new User({
      name,email,
      password:HashesPassword,
      role
    });
    // save user
    await userinfo.save();
    res.send("signup success")

  }
  catch(errro){
    console.log("error")
    res.send("something went wrong ")
  }
})
app.listen(9000,function(req,res){
  console.log('server is running')
})

// sign in
app.post('/signin',async function(req,res){
  let{email,password}=req.body
  
})
