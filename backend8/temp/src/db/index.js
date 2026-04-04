import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import {DB_NAME} from "../constants.js";

dotenv.config();

const connectDB=async () => {
    try{
       const connectionInstance= await mongoose.connect (
            `${process.env.MONGOOSE_URI}/${DB_NAME}`
        );
        console.log(
          `Mongoose connected || DB hosted ${connectionInstance.connection.host}`

        );

    }
    catch(error){
     console.log("MongoDb connection error:",error);
     process.exit(1);
    }
};
export default connectDB;
