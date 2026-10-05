const express=require("express")
const app=express();
app.use(express.json())
const jwt=require('jsonwebtoken')
const jwt_sceret="hellojames"
const {UserModel,TodoModel}=require('./db')
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://anweshatannu_db_user:YL8jWIaUiYQDMfWo@cluster0.hl1ippf.mongodb.net/satyam_todos")


app.post('/signup',async function(req,res){
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password

        await  UserModel.create({
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












