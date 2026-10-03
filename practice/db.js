let mongoose=require("mongoose")
const { deflate } = require("node:zlib")
let userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:user
    },
    resetToken:String,
    resettokenexpiery:Date

})
module.exports=user;