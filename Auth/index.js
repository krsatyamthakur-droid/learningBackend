// const express=require('express')
// const app=express()
// const cors=require('cors')
// const jwt = require("jsonwebtoken");
// app.use(cors())
// app.use(express.json())

// const JWT_SECRET="user_app";

// // [{
// //     username:"satyam ", password:'123123 ', token :'234wfa32432f'
// // }]

//  // should return a random long string 
//    function generateToken() {
//     let options = [
//         'a', 'j', 'm', 'v', 'H', 'T', '5', 'W', 'I', 'U',
//         'V', 'y', 'K', 'b', 'd', 'n', 'p', '9', 'z', 'B',
//         'C', 'D', 'L', 'M', 'N', '0', 'P', 'X', 'Y', 'Z',
//         '1', 's', 'E', 'Q', '2', 'h', 't', 'F', 'R', '3'
//     ];

//     let token = '';

//     for (let i = 0; i < 32; i++) {
//         // use a simple function here 
//         token = token +  options[Math.floor(Math.random() * options.length) ]; // 0=>42 | math.random() * options.length  23.4242=> 23
//     }

//     return token;
// }

// console.log(generateToken());


// const user =[];
// app.post('/signup', function(req,res){
//    const username=req.body.username;
//    const password=req.body.password;

//    // input validation later 
//    user.push({
//     username:username,
//     password:password
//    })
   
//    res.send({
//     message:'hii you are signed in'
//    })
//    console.log(user)
// })

// app.post('/signin',function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;

//     // map and filter 
//     let founduse=null;

//     for(let i=0;i<user.length;i++){
//         if(user[i].username===username && user[i].password===password){
//             founduse=user[i]
//             break;
//         }
//     }
//     if(founduse){
//         const token=jwt.sign({
//             username:username

//         },JWT_SECRET);

//         founduse.token=token;
        
//        // founduse.token=token
//         res.send({
//          token
//         })
//         console.log(user)
//     }
//     else{
//         res.status(403).send({
//             message:"invalid username or password"
//         });
//     }
// });

// app.get('/me',function(req,res){

//     // accept token from "token" header or "Authorization: Bearer <token>"
//     let token=req.headers.token || req.headers.authorization
//     if(token){
//         token=token.replace('Bearer ','').replace(/"/g,'').trim()
//     }

//     if(!token){
//         return res.status(401).send({
//             message:'token missing mere bete'
//         });
//     }
//     try{
//         const decodedinfo=jwt.verify(token,JWT_SECRET);
//         const username=decodedinfo.username

//         let founduser=null;
//         for(let i=0;i<user.length;i++){
//             if(user[i].username===username){
//                 founduser=user[i]
//                 break;
//             }
//         }
//         if(founduser){
//             res.json({
//                 username:founduser.username,
//                 password:founduser.password
//             });

//         }
//         else{
//             res.status(404).json({
//                 message:"user not found"
//             });
//         }
       
        
//     }
//     catch(error){
//         res.status(401).json({
//             message:"invalid token"
//         })
//     }
    
//     }
      
// )

// app.listen(1500,function(){
//     console.log('server is running at port 1500')
// })




const express=require('express')
const jwt=require('jsonwebtoken')
const JWT_SECRET='randomsatyamkrthakur'
const app=express()
app.use(express.json())
const users=[];

function logger(req,res,next){
    console.log(req.method+"request came")
    next()
}
//localhost:2000, cors 
app.get('/',function(req,res){
    res.sendFile('/Users/satyam/Desktop/backend harkirat/frontend/index.html')
})

app.post('/signup',logger,function(req,res){
    const username=req.body.username
    const password=req.body.password

    users.push({
        username:username,
        password:password
    })
    res.json({
        message:'hii you are successfully signup'
    })
    console.log(users)
})

app.post('/signin',logger,function(req,res){
    const username=req.body.username
    const password=req.body.password

    // map and filter
    let founduser=null

    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            founduser=users[i];
           
        }
    }
            if(founduser){
                const token=jwt.sign({
                    username:username,
                    password:password,
                    
                },JWT_SECRET);
                
                res.json({
                    token:token
                })
            }

        else{
            res.status(404).send({
                message:'bete sorry '
            })
        }
   
    console.log(users)
})

function auth(req,res,next){
    const token =req.headers.token
    const decodedata=jwt.verify(token,JWT_SECRET)
    if(decodedata.usename){
       req.username=decodedata.username
        next()
    }
    else{
        res.json({
            message:'bete try again '
        })
    }
}


app.get('/me',logger,auth,function(req,res){

    // const token=req.headers.token  // jwt 
    // const decordedinfo =jwt.verify(token,JWT_SECRET)
    // const username=decordedinfo.username;
    let founduser=null
    for(let i=0;i<users.length;i++){
        if(users[i].username===req.username){
            founduser=users[i]
            break
            
        }
    }
    if(decordeo){
          
            res.json({
                usename:founduser.username,
                password:founduser.password
            })
            
    }
    else{
        res.status(404).json({
            message:'user not found'
        })
    }
})

app.get('/todo',auth, function(req,res){

})
app.listen(2000)