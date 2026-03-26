 // require('dotenv').config({ path: './env' })
 // import dotenv from "dotenv";


import connectDB from "./db/index.js";

// dotenv.config({
//     path:"./env"
// })
import dotenv from "dotenv";
dotenv.config(); // loads .env automatically from root
console.log("MONGO_URI:", process.env.MONGODB_URI);


connectDB();







/*
import express from "express";
const app=express();

// function connectdb(){
//     mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.error("MongoDB connection error:", err));
//}
(async()=>{
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
        console.error("Express error:", error)
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
   } catch (error) {
    console.log("error")
    throw error
   }
})() */