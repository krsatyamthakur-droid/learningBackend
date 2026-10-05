const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ObjectID=mongoose.ObjectID;
const user=new Schema({
    name:String,
    email:{type:String , unique:true} ,
    password:String
})

const todos=new Schema({
    title:String,
    done:Boolean,
    userid:ObjectID
})

const UserModel=mongoose.model('users',user);
const TodoModel=mongoose.model('todos_collection',todos)
module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}