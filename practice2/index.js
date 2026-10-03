// const express=require('express')
// const app=express()
// app.use(express.json())

// const fs=require('fs')


// fs.mkdir('james',(err)=>{
//     if(err){
//         return 'fuck off';
//     }
//     console.log('file created ');
//     fs.writeFileSync('jamesbond',)
// })



// app.listen(3000,function(){
//     console.log('server..')
// })

// creating a server with the http 
// const http=require('http');
// const server=http.createServer((req,res) =>{
//  res.end('hello satyam ')
// })
// server.listen(3000,function(){
//     console.log('server..')
// })

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     let user={
//         name:'satyam',
//         age:20
//     }
//     res.writeHead(200,{'content_type':'application\json'})
//     res.end('hello satyam kumar ')
// })
// server.listen(3000,function(){
//     console.log('server is running ')
// })

const express=require('express')
let mongoose=require('mongoose')
const app=express()
const bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
const JWT_SECRET=process.env.JWT_SECRET
const cors=require('cors')
const { userInfo } = require('node:os')
app.use(express.json())
app.use(cors())





let product=[
    {
        id:1,name:'satyam', age:20
    },
    {
        id:2,name:'ankit', age:19
    },
    {
        id:3, name:'loki',age:19
    }
]

app.get('/product/:id',function(req,res){
    let {id}=req.params;
    let singleid=product.find((s)=>s.id===Number(id))
    if(!singleid){
        return res.send(404).json({msg:'hello world'})
    }
    res.json({data:product})
})
app.get('/search',function(req,res){
    let {category}=req.params;
    let cat=product.filter((s)=> s.category===category)
    if(!cat){
        return res.send(404).json({mes:'not found'})
    }
    res.json({data:cat});
})

app.post('/push',function(req,res){
    let obj={...req.body}
    product.push(obj)
    res.send(202).json({mes:"product added",data:obj})
})

//update the product 
app.post('/add',function(req,res){
    let {id}=req.params;
    let {stock}=req.body

    let data=product.find((a)=>a.id===Number(a));
    if(!data){
        res.send(202).json({mes:'not found'})
    }
    data.stock=stock
    res.send(101).json({mes:'updated',data:data})
})

app.post('/delete',function(req,res){
     let {id}=req.params
     let del=product.findIndex((a)=>a.id===Number(a))
     if(index==-1){
        return res.send(203).json({mes:"not found"})
     }
     res.send(202).json({mes:"product delete ",data:deleted})
})

app.post('/signup',async function(req,res){
    let {name,email,password,role}=req.body;

    let hash=await bcryptjs.hash(password,10)
    let findata=await user.find({email})
    if(findata){
        return res.send("user already exist  ")
    }
    let userinfo=new userInfo({
        name,email,
        password:hash,
        role:"user"
    })
    await userInfo.save()
    res.send("signup successfully ")
})

// signin 
app.post('/signin',async function(req,res){
    let {email,name,password,role}=req.body

    let findata=await user.findone({email})
    if(!findata){
        res.status(401).send("user not found")
    }
    let validP=await bcryptjs.compare(password,findata.password)
    if(!valid){
        res.send('password incorrect')
    }
    let token= jwt.sign(
        { id:findata.id,name:findata.name,role:findata.role},JWT_SECRET
    )
    res.json({mess:'login successfully',token:token})
})
// let auth=(req,res,next)=>{
//     let token =req.header.authorization
//     if(!token){
//        return  res.send('token not found ')
//     }
//     try{
//         let decoded=jwt.verify(token,JWT_SECRET)
//         req.user=decoded
//         next()
//     }
//     catch(err){
//         res.send('not have a token')
//     }

// }

app.listen(3000,function(){
    console.log('server..')
})