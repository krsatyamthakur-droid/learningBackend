import {Router} from 'express';  
import { registerUser } from '../controllers/user.controllers.js';

const userrouter=Router()

userrouter.route("/register").post(registerUser)


export {userrouter};