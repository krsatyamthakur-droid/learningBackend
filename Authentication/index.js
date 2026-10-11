const express=require("express")
const app=express();
const bcrypt=require('bcrypt')
app.use(express.json())
const jwt=require('jsonwebtoken')
const jwt_sceret="hellojames"
const {UserModel,TodoModel}=require('./db')
const mongoose=require('mongoose')
const {z} =require('zod')
mongoose.connect("mongodb+srv://anweshatannu_db_user:YL8jWIaUiYQDMfWo@cluster0.hl1ippf.mongodb.net/satyam_todos")


app.post('/signup',async function(req,res){
    const requiredbody=z.object({
        name:z.string().min(2).max(100),
        email:z.string().email(),
        password:z.string().min(6).max(100)
    })

    // req.body{
        //name:"satyam",
        //email:"satyam@example.com",
    // password:"password123"
    //}
    

    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    if(!email || !password || !name  || !email.includes('@') || !email.length>5 || !password.length>5 || !name.length>5 || !typeof email === "string" || !typeof password === "string" || !typeof name === "string"){
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    try{
        const hashpassword=await bcrypt.hash(password,10)
    console.log(hashpassword);

        await  UserModel.create({
            name:name,
            email:email,
            password:hashpassword
        })
        res.json({
           message: 'you are logged in '
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
})
app.post('/signin',async function(req,res){
        const email=req.body.email
        const password=req.body.password

        const user= await UserModel.findOne({
            email:email,
           
        })
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }
        console.log(user);
        const passwordMatch=await bcrypt.compare(password,user.password);
        if(user && passwordMatch){
            const token=jwt.sign({
                id:user._id
            },jwt_sceret);
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
app.post("/todo", Auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});

app.get("/todos", Auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});
function Auth(req,res,next){
        const token=req.headers.token;
        const decodedData=jwt.verify(token,jwt_sceret) 
        if(decodedData){
            req.userID=decodedData.id
            next();
        }
        else{
            res.status(403).send({
                mes:"wrong crenditial"
            })
        }
}
app.listen(3000,function(){
    console.log("server is running at port 3000")
})












