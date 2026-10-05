const express=require("express")
const app=express();
app.use(express.json())
const jwt=require('jsonwebtoken')
const jwt_sceret="hellojames"
const {UserModel,TodoModel}=require('./db')
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://anweshatannu_db_user:YL8jWIaUiYQDMfWo@cluster0.hl1ippf.mongodb.net/")


app.post('/signup',async function(req,res){
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password

      await  UserModel.insert({
            name:name,
            email:email,
            password:password
        })
        res.json({
           message: 'you are logged in '
        })
})
app.post('/signin',async function(req,res){
        const email=req.body.email
        const password=req.body.password

        const user= await UserModel.findOne({
            email:email,
            password:password
        })
            console.log(user);
        if(user){
            const token=jwt.sign({
                id:user._id
            });
            res.json({
                token:token

            })
        }
        else{
            res.status(404).json({
                mess:"incorrect crendential"
            })
        }
})
app.post('/todo',async function(req,res){

})
app.get('/todos',async function(req,res){

})
app.listen(3000,function(){
    console.log("server is running at port 3000")
})












