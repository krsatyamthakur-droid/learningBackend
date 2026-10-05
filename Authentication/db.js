const mongoose=require('mongoose')
const {Schema}=mongoose
const ObjectID=mongoose.ObjectID;
userid:ObjectID
const user=new Schema({
    name:String,
    email:{type:String , unique:true} ,
    password:String
})

const todos=new Schema({
    title:String,
    done:Boolean,
    userid:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
})

const UserModel=mongoose.model('users',user);
const TodoModel=mongoose.model('todos_collection',todos)
module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}