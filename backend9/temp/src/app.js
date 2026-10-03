import express from 'express';
import cors from'cors';
import cookieparser from 'cookie-parser';
import { p } from 'framer-motion/client';

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true,limit:"10mb"}))
app.use(express.static("public"))
app.use(cookieparser())


// routes

import {userrouter} from './routes/user.routes.js';

// routes decleration
 app.use("/api/v1/users/",userrouter)
//  http://localhost:8000/api/v1/users/register   
export {app};
